
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _AuthService: AuthService, private _Router: Router) 
  {

  }
isLoading:boolean =false;

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required,]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    rePassword: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),

  })
  submitRegister(registerForm: FormGroup) {
    this.isLoading = true;
    if(registerForm.valid){
      console.log(registerForm.value);
      this._AuthService.register(registerForm.value).subscribe({
        next:(Response)=>{
          if(Response.message ==="success")
          {
            this.isLoading = false;
          this._Router.navigate(['/login'])
          }
        },
        error:(err)=>{
          
          console.log(err)
          this.isLoading = false;
        }
        
        
        
      })
   
      }

       
  }
}









