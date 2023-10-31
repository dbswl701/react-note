import { createSlice } from "@reduxjs/toolkit"
// import { NoteType } from "../types/note";

type isOpenType = {
  isOpen: boolean
}

const initialState: isOpenType = {
  isOpen: false
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openToggle: (state) => {
      state.isOpen = !state.isOpen
    }
  },
})
export const { openToggle } = modalSlice.actions;
export default modalSlice.reducer;
