import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadoI = '../assets/img/dice1.png';
  dadoD = '../assets/img/dice5.png';

  num1:number = 1;
  num2: number=2;


  tirarDado(): void{
    this.num1 = Math.round( Math.random() *5 ) + 1;
    this.num2 = Math.round( Math.random()*5) + 1;

    this.dadoI = `../assets/img/dice${this.num1}.png`;
    this.dadoD = `../assets/img/dice${this.num2}.png`;

    // console.log(this.num1);
    // console.log(this.num2);
  }

}
