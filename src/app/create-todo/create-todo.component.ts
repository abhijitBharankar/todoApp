import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from '../api-call.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {
  constructor(private router: Router, private apiCall : ApiCallService, private fb : FormBuilder) {
    
  }

  createTodoForm! : FormGroup
  apiUrl = "http://localhost:3000/todos"

  ngOnInit(){
  this.createTodoControl()
  }

  createTodoControl(){
    this.createTodoForm = this.fb.group({
      todoTitle: [''],
      todoDesc: ['']
    })
  }
  back(){
    this.router.navigateByUrl('')
  }

  create(){
    this.apiCall.postApiCall(this.apiUrl, this.createTodoForm.value).subscribe(res=>{
      console.log(res);
      
    })
    this.createTodoForm.reset()
  }
}
