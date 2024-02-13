import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;                    
  private formSubmitAttempt!: boolean; 
  loginMessage='';
  notLoggedIn$!: Observable<boolean>;

  constructor(
    private fb: FormBuilder,         
    private authService: AuthService 
  ) {}

  ngOnInit() {
    this.form = this.fb.group({     // {5}
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field)?.valid && this.form.get(field)?.touched) ||
      (this.form.get(field)?.untouched && this.formSubmitAttempt)
     );
  }

  onSubmit() {
    if (this.form.valid) {
      // if(this.authService.login(this.form.value)){
      //   this.formSubmitAttempt = true;
      // }
      // else if(this.authService.login(this.form.value)){
      //     this.loginMessage="Username/Password invalid";
      // }
      this.authService.login(this.form.value);
      if (this.authService.notLoggedIn){
        this.formSubmitAttempt=true;
      }
      else{
        this.loginMessage="Username/Password invalid";
      }

    }

  };
}
