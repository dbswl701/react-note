import { configureStore } from '@reduxjs/toolkit';
import noteListReducer from './notesListSlice';
import modalReducer from './modalSlice';

export const store = configureStore({
  reducer: {
    noteList: noteListReducer,
    modal: modalReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
// export default rootReducer;

// export type RootState = ReturnType<typeof rootReducer>;