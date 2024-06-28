import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private loginservice: LoginService
  ) { }

  submitted: boolean = false;

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })


  ngOnInit() { }

  get f() {
    return this.loginForm.controls;
  }

  onLogin() {
    console.log('clicked')
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      if (this.loginservice.login(username, password)) {
        this.toastr.success('Login successful');
        this.router.navigate(['/employee-master/employee-list']);
      } else {
        this.toastr.error('Invalid username or password');
      }
    } else {
      this.toastr.error('Please fill out the form correctly');
    }
  }

  clear() {
    this.loginForm.patchValue({
      username: '',
      password: ''
    })
  }
}
