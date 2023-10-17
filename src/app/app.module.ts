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
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ApplyComponent } from './apply/apply.component';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';
import { NewsComponent } from './news/news.component';
import { PublicationsComponent } from './publications/publications.component';
import { HeroExhibitionsComponent } from './components/hero-exhibitions/hero-exhibitions.component';
import { SecondThoughtComponent } from './components/second-thought/second-thought.component';
import { SoaFacultyComponent } from './components/soa-faculty/soa-faculty.component';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({ keys: ['auth'], rehydrate: true })(reducer);
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
    SignInComponent,
    ApplyComponent,
    ExhibitionsComponent,
    NewsComponent,
    PublicationsComponent,
    HeroExhibitionsComponent,
    SecondThoughtComponent,
    SoaFacultyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      { auth: authReducer },
      {
        metaReducers: [localStorageSyncReducer],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([AuthEffects]),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
