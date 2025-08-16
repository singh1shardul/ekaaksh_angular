import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountRoutingModule } from "../../account-routing-module";

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, AccountRoutingModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm: FormGroup;
  hidePassword = true;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Data', this.loginForm.value);
      // Handle your login API call here
    }
  }

  onBack() {
    //nothing
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}
