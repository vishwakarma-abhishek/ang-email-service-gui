import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor(private snak:MatSnackBar){  }

  ngOnInit():void{}
   
  btnClick(){
    console.log('btnClick called');
    this.snak.open('Hay, Welcome to this App!', 'Close');
    
  }



}
