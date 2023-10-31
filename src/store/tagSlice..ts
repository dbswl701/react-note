// import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { TagType } from "../types/tag";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TagType[] = [
  {
    id: 1,
    tag: 'Coding',
  },
  {
    id: 2,
    tag: 'Exercise',
  },
  {
    id: 3,
    tag: 'Quotes',
  }
]

export const tagSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {
    addTag: (state, action) => {
      state.push(action.payload);
      console.log(state);
    }
    // addNote: (state, action: PayloadAction<NoteType>) => {
    //   state.push(action.payload)
    //   console.log(state);
    // }
  },
})
export const { addTag } = tagSlice.actions;
export default tagSlice.reducer;
