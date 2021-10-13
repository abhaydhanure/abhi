import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
 


  constructor() { }

  ngOnInit(): void {
   
    
  }
  course=[
    {'id':1, 'name': 'Angular', 'description':'contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old', 'image':'../../assets/img1.jpg'},
    {'id':2, 'name': 'React', 'description':'contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old', 'image':'../../assets/img2.jpg'},
    {'id':3, 'name': 'Node', 'description':'contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old', 'image':'../../assets/img3.png'},
    {'id':4, 'name': 'JS', 'description':'contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old', 'image':'../../assets/img1.jpg'},
  
  
  ];
  

}
