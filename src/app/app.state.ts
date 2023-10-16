// app.state.ts

import { AuthState } from './reducers/auth.reducer'; // Import your AuthState interface

export interface AppState {
  auth: AuthState;
}
