import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  fontcolor = 'blue';
  sayHelloId = 1;
  canClick = false;
  //message = "hello world";


  message = "I'm read only!";
  canEdit = false;
 
  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = "I'm read only!";
    }
  
  // sayMessage(){
  //   alert(this.message);
  // }
  // displayVal:String = '';
  // getValue(value:string){
  // console.log(value+"Printed");
  // this.displayVal=value;
  
}
  constructor() { }

  ngOnInit(): void {
  }

}

