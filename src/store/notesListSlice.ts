import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { NoteType } from "../types/note";

const initialState: NoteType[] = [
  {
    id: 0,
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
    type: 'normal',
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
      console.log(state);
    },
    togglePin: (state, action) => {
      // 일단, action.payload.id에 해당하는 note 찾기

      // state.map((item) => {
      //   if (item.id === action.payload.id) {
      //     item.pinned = !item.pinned;
      //   }
      //   console.log(item);
      //   return item;
      // })
      // console.log(action.payload.id);
      // console.log(state[action.payload.id]);
      state[action.payload.id].pinned = !state[action.payload.id].pinned;
    },
    toggleTypeArchive: (state, action) => {
      switch(state[action.payload.id].type) {
        case('normal'): {
          state[action.payload.id].type = 'archive';
          break;
        }
        case('archive'): {
          state[action.payload.id].type = 'normal';
        }
      }
    }
  },
})
export const { addNote, togglePin, toggleTypeArchive } = noteListSlice.actions;
export default noteListSlice.reducer;
