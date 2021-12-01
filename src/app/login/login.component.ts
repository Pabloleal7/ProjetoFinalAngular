import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup
  constructor(private todo: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      "username": new FormControl(null),
      "password": new FormControl(null)
  })
  }

  onSubmit(){
    if(this.loginForm.get('username')?.value == "letscode" && this.loginForm.get('password')?.value == 'lets@123'){
      this.todo.login()
      this.router.navigateByUrl('/kanbam-board')
      }else{
        alert("Errou")
    }
   
  }

}
