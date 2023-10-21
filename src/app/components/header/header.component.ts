import { AfterViewInit, Component, OnInit } from '@angular/core';

import { Store, createSelector, select } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

import { Router } from '@angular/router';

import * as AuthActions from 'src/app/actions/auth.actions'

const selectMenu = (state: AppState) => state.menu;
const selectUser = (state: AppState) => state.auth;

export const selectMenuData = createSelector(
  selectMenu,
  (menuState) => menuState.menu
);

export const selectUserData = createSelector(
  selectUser,
  (authState) => authState.response

)

interface link {
  url: string,
  name: string,
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  menuData$ = this.store.pipe(select(selectMenuData));
  userData$ = this.store.pipe(select(selectUserData));


  public linkData: link[] = [];
  public userData: any;

  public isAdmin: boolean = false;
  public isDropdownOpen: boolean = false;

  constructor(private store: Store<AppState>,private router: Router) { }

  ngOnInit() {
    this.menuData$.subscribe(menuData => {
      this.linkData = menuData;
    });

    this.userData$.subscribe(userData => {
      console.log(JSON.parse(userData));
      this.userData = JSON.parse(userData);
      this.isAdmin = this.checkIfAdmin(this.userData);
    });

  }


  private checkIfAdmin(userData: any): boolean {
    return userData && userData.email === 'kminchelle@qq.com'; 
  }

  logout() {
    console.log('get out');
    this.store.dispatch(AuthActions.logout());
    this.router.navigate(['/login']);
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  ngAfterViewInit(): void {
    // console.log('checked persisted: ',this.linkData);
  }

}
