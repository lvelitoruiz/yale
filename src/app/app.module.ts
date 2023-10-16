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
