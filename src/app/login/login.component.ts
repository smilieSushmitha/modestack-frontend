import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  login: boolean;
  isError: boolean;
  errObj: any;
  constructor(private userService: UserService,
              private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('',
        [Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required]),
    });
    this.registerForm = new FormGroup({
      email: new FormControl('',
        [Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required]),
    });
    this.login = true;
  }

  ngOnInit(): void {
  }

  Login() {
    this.router.navigate(['articles']);
  }
  Register() {
    this.isError = false;
    this.userService.addUser(this.registerForm.value)
      .subscribe((res) => {
        console.log(res);
        // Navigate only on success login
        this.router.navigate(['articles']);
      }, err => {
        this.isError = true;
        this.errObj = err.error;
        console.error(err);
      });
  }
  navigateToRegister(){
    this.login = false;
    return false;
  }
  navigateToLogin(){
    this.login = true;
    return false;
  }
}
