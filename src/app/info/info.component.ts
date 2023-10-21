import { Component } from '@angular/core';

import { Store, createSelector, select } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

const selectImages = (state: AppState) => state.images;

export const selectImageData = createSelector(
  selectImages,
  (imageState) => imageState.images
);

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  imageData$ = this.store.pipe(select(selectImageData));

  constructor(private store: Store<AppState>) {}

  public imageBg: string = 'uno';

  ngOnInit(): void {
    this.imageData$.subscribe((imageData) => {
      this.imageBg = imageData[0].attributes.backs.data[4].attributes.url;
    });
  }
}
