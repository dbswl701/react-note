import { createSlice } from "@reduxjs/toolkit"
// import { NoteType } from "../types/note";

type isOpenType = {
  isOpenAddNote: boolean, // 노트 생성 모달창
  isOpenAddTag: boolean,
}

const initialState: isOpenType = {
  isOpenAddNote: false,
  isOpenAddTag: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleAddNoteModal: (state) => {
      state.isOpenAddNote = !state.isOpenAddNote
    },
    toggleAddTagModal: (state) => {
      state.isOpenAddTag = !state.isOpenAddTag
    }
  },
})
export const { toggleAddNoteModal, toggleAddTagModal } = modalSlice.actions;
export default modalSlice.reducer;
