import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  apiUrl = "http://localhost:3000/todos"
  response: any;
  noTodos =  false;
  constructor(private router: Router, private apiCall: ApiCallService) {

  }

  ngOnInit() {
    this.apiCall.getApiCall(this.apiUrl).subscribe(res => {
      if(Object.keys(res).length > 0){
        this.response = Object(res)
        // console.log(this.response[1].todoTitle);
        console.log(Object.keys(res).length);
        // console.log(this.response);
        this.noTodos = false
      }else{
        this.noTodos = true
      }
      
    })
  }


  createTodo() {
    this.router.navigateByUrl('createTodo')
  }


  delete(id: any) {
    let url = "http://localhost:3000/todos/" + id;
    this.apiCall.deleteApiCall(url).subscribe(res => {
      console.log(res);
      this.apiCall.getApiCall(this.apiUrl).subscribe(res => {
        this.response = Object(res)
        console.log(Object(res).length);
        if(Object(res).length ==0 ){
          this.noTodos = true
        }else{
          this.noTodos = false
        }
        // console.log(this.response[1].todoTitle);
      })
    })
    console.log("delete button pressed");

  }
}
