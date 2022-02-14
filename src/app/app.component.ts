import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import files from './files.json';
import {FILES} from './Files/files'
import {FormsModule} from '@angular/forms';
import {faDownload } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'cs-test';

  count:any;
  resultval:any;
  disabled = true;
  faDownload = faDownload;
  Files:FILES[]=files;

  constructor()
  {
    console.log(this.Files);
    this.count = 'None selected';
  }

  //count the number of checked items 
  changed() {
    this.count = 0;
    this.disabled = true;
    this.Files.forEach(item => {
      if (item['isSelected']) {
        this.count = this.count + 1;
      }
      if (item['isSelected'] && item['status'] == 'available'){
        this.disabled = false;
        
      }


    })


    if(this.count == 0)
    {
      this.count = 'None selected';
    }
  }
  
  checkAllCheckBox(ev: any) { 
		this.Files.forEach(x => x.isSelected = ev.target.checked)
    this.count = 0;

    this.Files.forEach(item => {
      if (item['isSelected']) {
        this.count = this.count + 1;
    
      
      }
      else
      {
        this.count = "None selected";
      }
    })
	}

	isAllCheckBoxChecked() {
		return this.Files.every(p => p.isSelected);
	}


  download()
  {
    
    let path = '';
  
    this.Files.forEach(item => {
      if (item['isSelected'] && item['status'] == 'available'){
    
        path += 'Device: ' + item['device'] + ', ' + 'Path: ' + item['path'] + '\n';
      
      }
      
    })
    alert(path);
  }

 

}