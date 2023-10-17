import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store, createSelector, select } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

const selectPresentation = (state: AppState) => state.presentation;

export const selectPresentationData = createSelector(
  selectPresentation,
  (presentationState) => presentationState.presentation
);
@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit, AfterViewInit {
  presentationData$ = this.store.pipe(select(selectPresentationData));

  public data: any = null;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.presentationData$.subscribe(presentationData => {
      this.data = presentationData[0].attributes;
    });
  }

  ngAfterViewInit(): void {
    // console.log('checked persisted: ',this.data);
  }

}
