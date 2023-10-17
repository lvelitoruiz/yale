import { AfterViewInit, Component, OnInit } from '@angular/core';

import { Store, createSelector, select } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

const selectMenu = (state: AppState) => state.menu;

export const selectMenuData = createSelector(
  selectMenu,
  (menuState) => menuState.menu
);

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

  public linkData: link[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.menuData$.subscribe(menuData => {
      this.linkData = menuData;
    });
  }

  ngAfterViewInit(): void {
    // console.log('checked persisted: ',this.linkData);
  }

}
