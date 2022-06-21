import { Component, OnInit } from '@angular/core';
import {FormsModule}from '@angular/forms'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  fname:any;
  lname:any;
  user:string='';
  email:any;
  age:any;
  showAge:any;
  green:string='green';
  red:string='red';
  add_data(){

    alert('First Name: '+this.fname+'Last Name: '+this.lname+' '+'Email: '+this.email+'  '+'User Name: '+this.user);
  }
  ageCalculator(){
    if(this.age){
      const convertAge = new Date(this.age);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    }
  }
   constructor() {     
  }
  ngOnInit(): void {
  }
}