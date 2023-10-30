import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { NoteType } from "../types/note";

const initialState: NoteType[] = [
  {
    name: '노트1 타이틀',
    content: '노트1 내용',
    tag: 'exercise',
    priority: false,
    date: '2023-10-30',
    background: 'red',
    pinned: true,
  }
]

// export interface CounterState {
//   value: number
// }

// const initialState: CounterState = {
//   value: 0
// }

export const noteListSlice = createSlice({
  name: 'noteList',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<NoteType>) => {
      state.push(action.payload)
      console.log(state);
    }
    // increment: (state) => {
    //   state.value +=1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // }

  },
})
export const { addNote } = noteListSlice.actions;
export default noteListSlice.reducer;
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
// export default counterSlice.reducer