import { Component } from '@angular/core';

import { Store, createSelector, select } from '@ngrx/store';
import * as PublicationsActions from '../actions/publications.actions';
import { AppState } from 'src/app/app.state';

const selectImages = (state: AppState) => state.images;
const selectPublicationsData = (state: AppState) => state.publication;

export const selectImageData = createSelector(
  selectImages,
  (imageState) => imageState.images
);

export const publicationsData = createSelector(
  selectPublicationsData,
  (publicationsState) => publicationsState.publication
);
@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent {

  imageData$ = this.store.pipe(select(selectImageData));
  publicationsData$ = this.store.pipe(select(publicationsData));

  constructor(private store: Store<AppState>) { }

  public imageBg: string = 'uno';
  public publicationsData: any = null;

  ngOnInit() {
    this.imageData$.subscribe(imageData => {
      this.imageBg = imageData[0].attributes.backs.data[2].attributes.url;
    });

    this.publicationsData$.subscribe(publicationData => {
      if(publicationData.length <= 0) {
        this.store.dispatch(PublicationsActions.loadPublication());
      } else {
        console.log(publicationData);
        this.publicationsData = publicationData;
      }
    });
  }

}
