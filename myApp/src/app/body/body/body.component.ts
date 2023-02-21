import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  title = 'Alexgaralv';
  rutinas: string[][] = [
    [
      '1',
      'Pecho/abs',
      'Biceps/Triceps',
      'Cuádriceps/femoral',
      'Espalda',
      'Hombro/gemelos/abs',
      'Músculo de preferencia',
      'Descanso',
    ],
    [
      '1',
      'Cuádriceps/gemelos',
      'Biceps/Triceps',
      'Espalda/Abs',
      'Glúteo/femoral',
      'Hombro/Abs',
      'Pecho/Glúteo',
      'Descanso',
    ],
    [
      '2',
      'Pecho/abs',
      'Biceps/Triceps',
      'Cuádriceps/femoral',
      'Descanso',
      'Hombro/gemelos/abs',
      'Espalda',
      'Descanso',
    ],
    [
      '2',
      'Cuádriceps/gemelos',
      'Biceps/Triceps',
      'Espalda/Triceps/Abs',
      'Descanso',
      'Hombro/Abs',
      'Glúteo/femoral',
      'Descanso',
    ],
  ];
  butt = 'genre p-0 genre-M';
  man = true;
  womanClass = 'text-light woman false';
  manClass = 'text-light man';
  changeButton() {
    this.man = !this.man;
    if (this.butt == 'genre p-0 genre-M') {
      this.butt = 'genre p-0 genre-W';
    } else {
      this.butt = 'genre p-0 genre-M';
    }
    if (this.man == true) {
      this.womanClass = 'text-light woman false';
      this.manClass = 'text-light man';
      setTimeout(() => {
        this.styleRutinaW = {
          display: 'none',
        };
        this.styleRutinaM = {
          display: 'block',
        };
      }, 1000);
    } else {
      this.womanClass = 'text-light woman';
      this.manClass = 'text-light man false';
      setTimeout(() => {
        this.styleRutinaM = {
          display: 'none',
        };
        this.styleRutinaW = {
          display: 'block',
        };
      }, 1000);

    }
    console.log(this.man);
  }
  clase1 = 'true';
  clase2 = 'false';
  tableClass = 'table t bg-light m-2 p-2 d-none';
  showTable() {
    // this.input();
    this.btnClass = "d-none";
    this.tableClass = 'table t bg-light m-2 p-2';
  }
  styleRutinaW = {
    display: 'none',
  };
  styleRutinaM = {
    display: 'block',
  };
  btnClass = "mx-3 a"
  clear(){
   document.getElementById("cont")?.onreset;
  }
  // opt:any ="1";
  // input(){
  //   let e = (document.getElementById("days")) as HTMLSelectElement;
  //   let sel = e.selectedIndex;
  //   this.opt = e.options[sel].value;

  // }
  // applyClass(rutina: string[][]): boolean {
  //   return rutina[0][0] !== this.opt;
  // }
}
