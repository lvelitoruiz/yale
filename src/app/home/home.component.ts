import { Component } from '@angular/core';

import { Store, createSelector, select } from '@ngrx/store';
import * as PublicEventActions from '../actions/publicevent.actions';
import { AppState } from 'src/app/app.state';

const selectImages = (state: AppState) => state.images;
const selectPublicEventData = (state: AppState) => state.publicevent;

export const selectImageData = createSelector(
  selectImages,
  (imageState) => imageState.images
);

export const publicEventdata = createSelector(
  selectPublicEventData,
  (publiceventState) => publiceventState.publicevent
);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  imageData$ = this.store.pipe(select(selectImageData));
  publiceventData$ = this.store.pipe(select(publicEventdata));

  constructor(private store: Store<AppState>) { }

  public imageBg: string = 'uno';
  public eventData: any = null;

  ngOnInit() {
    this.imageData$.subscribe(imageData => {
      this.imageBg = imageData[0].attributes.backs.data[6].attributes.url;
    });

    this.publiceventData$.subscribe(publicEventdata => {
      if(publicEventdata.length <= 0) {
        this.store.dispatch(PublicEventActions.loadPublicEvent());
      } else {
        console.log(publicEventdata);
        this.eventData = publicEventdata[0].attributes;
      }
    });
  }

}
