// app.state.ts

import { AuthState } from './reducers/auth.reducer'; // Import your AuthState interface
import { MenuState } from './reducers/menu.reducers';
import { PresentationState } from './reducers/presentacion.reducer';

export interface AppState {
  auth: AuthState;
  menu: MenuState;
  presentation: PresentationState;
}
