import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  colorClass:string = 'bg-primary main';
  changeClass(event:any){
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    
    if(value === 'blue'){
      this.colorClass = 'bg-primary main';
    }else if(value === 'dark'){
      this.colorClass = 'bg-dark main text-light';
    }else{
      this.colorClass = 'bg-white main';
    }
  }
}
