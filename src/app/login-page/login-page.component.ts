import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  loginForm: FormGroup;
  error: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const usernameValue = this.loginForm.get('username')?.value;
    const passwordValue = this.loginForm.get('password')?.value;

    if (usernameValue && passwordValue) {
      this.authService.login(usernameValue, passwordValue).subscribe(
        () => {
          this.router.navigate(['/home']);
        },
        (error) => {
          this.error = 'Invalid username or password. Please try again.';
        }
      );
    } else {
      this.error = 'Username and password are required.';
    }
  }
}
