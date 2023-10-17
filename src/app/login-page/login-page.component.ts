import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as MenuActions from '../actions/menu.actions';
import * as PresentationActions from '../actions/presentation.actions';
import * as DirectionActions from '../actions/direction.actions';
import { AppState } from '../app.state';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  error: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private store: Store<AppState>) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.store.dispatch(MenuActions.loadMenu());
    this.store.dispatch(PresentationActions.loadPresentation());
    this.store.dispatch(DirectionActions.loadDirection());
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
