import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { NoteType } from "../types/note";

const initialState: NoteType[] = [
  {
    id: 1,
    name: '노트1 타이틀',
    content: '노트1 내용',
    tag: 'exercise',
    priority: 'low',
    createdAt: '10/30/23 11:32 AM',
    modifiedAt: '10/30/23 11:32 AM',
    background: 'red',
    pinned: true,
  }
]

export const noteListSlice = createSlice({
  name: 'noteList',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<NoteType>) => {
      state.push(action.payload)
      console.log(state);
    }
  },
})
export const { addNote } = noteListSlice.actions;
export default noteListSlice.reducer;
