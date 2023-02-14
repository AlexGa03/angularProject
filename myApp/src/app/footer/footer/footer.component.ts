import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  PersonalInfo = {
    name: "Alex",
    mail: "alexgaralv@campus.monlau.com",
    tel: "617189814",
    gitHub: "https://github.com/AlexGa03"
  }

}
