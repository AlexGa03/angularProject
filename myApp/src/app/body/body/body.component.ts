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
  clickN:number = 0;
  changeClass(){
    this.clickN = this.clickN+1;
  }
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
