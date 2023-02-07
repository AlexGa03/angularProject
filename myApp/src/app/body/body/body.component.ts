import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  title = 'Alexgaralv';
  personaAlex = p1;
  deportistas: String[] = ["Nadal","Messi","Federer","Pique","Cristiano"];
  redClass = "text-danger";
  greenClass = "text-success";
  colorClass:string = "text-danger";
  changeClass2(){
    if(this.colorClass == "text-danger"){
      this.colorClass = "text-success";
    }else{
      this.colorClass = "text-danger";
    }
  }
  bool1 = false;
  changeBoolClass(){
    this.bool1 = !this.bool1;
  }
  clickN:number = 0;
  changeClass(){
    this.clickN = this.clickN+1;
  }

  objectsInSameClass={
    'badge': true,
    'badge-pill':true,
    'badge-primary':true,
    'text-danger':true,
  };
  stylesInTag={
    'color':"blue",
    'Font-weight':"bold"
  };
}
interface persona{
  id:number,
  name:string,
  surname:string

}

const p1:persona = {
  id : 1,
  name : "Alex",
  surname :"Garcia"
}
