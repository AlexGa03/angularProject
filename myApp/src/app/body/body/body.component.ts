import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  title = 'Alexgaralv';
  personaAlex = p1;
}
export interface persona{
  id:number,
  name:string,
  surname:string

}
export const p1:persona = {
  id : 1,
  name : "Alex",
  surname :"Garcia"
}