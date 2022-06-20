import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Location } from '@angular/common';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(private location:Location) { }
 
   ngOnInit(): void {

    // navigate_back()
    // {
    //   this.location.back();
    // }
  }
  navigate_back(){
    this.location.back();
  }

}
