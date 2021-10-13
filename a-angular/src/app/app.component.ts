import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstname:String;
            lastname:String;
            age:Number;
            constructor (firstname:String, lastname:string, age?:Number){
              this.firstname=firstname;
              this.lastname=lastname;
              this.age=age;
          }
          getFirstname(){
              console.log("My name is "+ this.firstname + " "+ this.lastname + " " + this.age)
          }
          getLastname(){
  
          }
}
let ytobj=new AppComponent("Abhay", "Abhii" );
ytobj.getFirstname();
