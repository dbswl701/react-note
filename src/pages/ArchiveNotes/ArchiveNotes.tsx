import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import NoteWrapper from '../../components/NoteWrapper/NoteWrapper';

const ArchiveNotes = () => {
  const noteList = useSelector((state: RootState) => state.noteList);
  const filteredNoteList = noteList.filter((note) => note.type==="archive");
  return (
    <NoteWrapper noteList={filteredNoteList} />
  )
}

export default ArchiveNotes