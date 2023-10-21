import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from './reducers/auth.reducer';
import { AuthEffects } from './effects/auth.effects';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { localStorageSync } from 'ngrx-store-localstorage';
import { PresentationComponent } from './components/presentation/presentation.component';
import { DirectionComponent } from './components/direction/direction.component';
import { HeroContentComponent } from './components/hero-content/hero-content.component';
import { HeroImageComponent } from './components/hero-image/hero-image.component';
import { HeroComponent } from './components/hero/hero.component';
import { PublicEventComponent } from './components/public-event/public-event.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { AboutComponent } from './about/about.component';
import { HeroAboutComponent } from './components/hero-about/hero-about.component';
import { SchoolArtComponent } from './components/school-art/school-art.component';
import { AboutContentComponent } from './components/about-content/about-content.component';
import { NewContentComponent } from './components/new-content/new-content.component';
import { ArtsDegreeComponent } from './components/arts-degree/arts-degree.component';
import { PublicLectureComponent } from './components/public-lecture/public-lecture.component';
import { EventComponent } from './event/event.component';
import { HeroEventComponent } from './components/hero-event/hero-event.component';
import { EventContentComponent } from './components/event-content/event-content.component';
import { ApplyComponent } from './apply/apply.component';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';
import { NewsComponent } from './news/news.component';
import { PublicationsComponent } from './publications/publications.component';
import { HeroExhibitionsComponent } from './components/hero-exhibitions/hero-exhibitions.component';
import { SoaFacultyComponent } from './components/soa-faculty/soa-faculty.component';
import { HeroApplyComponent } from './components/hero-apply/hero-apply.component';
import { ContentApplyComponent } from './components/content-apply/content-apply.component';
import { ContentExhibitionsComponent } from './components/content-exhibitions/content-exhibitions.component';
import { PrintPublicationsComponent } from './components/print-publications/print-publications.component';
import { ArtCommencementComponent } from './components/art-commencement/art-commencement.component';
import { ContentPublicationsComponent } from './components/content-publications/content-publications.component';
import { ContentNewsComponent } from './components/content-news/content-news.component';
import { menuReducer } from './reducers/menu.reducers';
import { MenuEffects } from './effects/menu.effects';
import { presentationReducer } from './reducers/presentacion.reducer';
import { PresentationEffects } from './effects/presentation.effects';
import { directionReducer } from './reducers/direction.reducer';
import { DirectionEffects } from './effects/direction.effects';
import { imagesReducer } from './reducers/images.reducer';
import { ImagesEffects } from './effects/images.effects';
import { PublicEventEffects } from './effects/publicevent.effects';
import { publiceventReducer } from './reducers/publicevent.reducer';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DragCompComponent } from './components/drag-comp/drag-comp.component';
import { publicationReducer } from './reducers/publications.reducer';
import { PublicationEffects } from './effects/publications.effects';

import { MarkdownModule } from 'ngx-markdown';
import { InfoComponent } from './info/info.component';
import { InfoContentComponent } from './components/info-content/info-content.component';
import { HeroInfoComponent } from './components/hero-info/hero-info.component';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: [
      'auth',
      'menu',
      'presentation',
      'direction',
      'images',
      'publicevent',
      'publications',
    ],
    rehydrate: true,
  })(reducer);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PresentationComponent,
    DirectionComponent,
    HeroContentComponent,
    HeroImageComponent,
    HeroComponent,
    PublicEventComponent,
    HomeContentComponent,
    AboutComponent,
    HeroAboutComponent,
    SchoolArtComponent,
    AboutContentComponent,
    NewContentComponent,
    ArtsDegreeComponent,
    PublicLectureComponent,
    EventComponent,
    HeroEventComponent,
    EventContentComponent,
    ApplyComponent,
    ExhibitionsComponent,
    NewsComponent,
    PublicationsComponent,
    HeroExhibitionsComponent,
    SoaFacultyComponent,
    HeroApplyComponent,
    ContentApplyComponent,
    ContentExhibitionsComponent,
    PrintPublicationsComponent,
    ArtCommencementComponent,
    ContentPublicationsComponent,
    ContentNewsComponent,
    DragCompComponent,
    InfoComponent,
    InfoContentComponent,
    HeroInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
    StoreModule.forRoot(
      {
        auth: authReducer,
        menu: menuReducer,
        presentation: presentationReducer,
        direction: directionReducer,
        images: imagesReducer,
        publicevent: publiceventReducer,
        publication: publicationReducer,
      },
      {
        metaReducers: [localStorageSyncReducer],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    EffectsModule.forRoot([
      AuthEffects,
      MenuEffects,
      PresentationEffects,
      DirectionEffects,
      ImagesEffects,
      PublicEventEffects,
      PublicationEffects
    ]),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
