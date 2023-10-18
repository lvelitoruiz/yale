// app.state.ts

import { AuthState } from './reducers/auth.reducer'; // Import your AuthState interface
import { ImagesState } from './reducers/images.reducer';
import { MenuState } from './reducers/menu.reducers';
import { PresentationState } from './reducers/presentacion.reducer';
import { PublicationState } from './reducers/publications.reducer';
import { PubliceventState } from './reducers/publicevent.reducer';

export interface AppState {
  auth: AuthState;
  menu: MenuState;
  presentation: PresentationState;
  images: ImagesState;
  publicevent: PubliceventState;
  publication: PublicationState;
}
