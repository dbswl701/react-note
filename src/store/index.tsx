import { configureStore } from '@reduxjs/toolkit';
import noteListReducer from './notesListSlice';
import modalReducer from './modalSlice';
import tagReducer from './tagSlice.';

export const store = configureStore({
  reducer: {
    noteList: noteListReducer,
    modal: modalReducer,
    tag: tagReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
// export default rootReducer;

// export type RootState = ReturnType<typeof rootReducer>;