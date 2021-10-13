import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {}
  class abhay{
    fn:String;
    ln:String;
    age:Number;

constructor (firstnames:String, lastname:string, age?:Number){
    this.fn=firstnames;
    this.ln=lastname;
    this.age = age||0;
}
getFirstname(){
    console.log(`my name is ${this.fn} ${this.ln} ${this.age}`);
}

 
  }

let newobj=new abhay("Abhay", "Abhii");
newobj.getFirstname();
