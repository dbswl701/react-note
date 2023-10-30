import { configureStore } from '@reduxjs/toolkit';
import noteListReducer from './notesListSlice';

export const store = configureStore({
  reducer: {
    noteList: noteListReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
// export default rootReducer;

// export type RootState = ReturnType<typeof rootReducer>;