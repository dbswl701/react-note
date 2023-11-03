// import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { v4 } from "uuid";
import { TagType } from "../types/tag";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TagType[] = [
  {
    id: v4(),
    tag: 'Coding',
  },
  {
    id: v4(),
    tag: 'Exercise',
  },
  {
    id: v4(),
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
