import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { NoteType } from "../types/note";

const initialState: NoteType[] = [
  {
    id: 1,
    name: '노트1 타이틀',
    content: '노트1 내용',
    // tagList: [{
    //   id: 1,
    //   tag: 'Coding',
    // },
    // {
    //   id: 2,
    //   tag: 'Exercise',
    // },],
    tagList: [1, 3],
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
    },
    addNoteTag: (state, action) => {
      state[action.payload.id].tagList.push(action.payload.tag);
    }
  },
})
export const { addNote } = noteListSlice.actions;
export default noteListSlice.reducer;
