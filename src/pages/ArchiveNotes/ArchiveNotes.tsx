import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import Note from '../../components/Note/Note';
import { Container } from '../TagNotes/TagNotes.styles';

const ArchiveNotes = () => {
  // tag, archive, trash -> 다 돌려쓰자
  const noteList = useSelector((state: RootState) => state.noteList);
  console.log(noteList);
  // filtering only archive
  const filteredNoteList = noteList.filter((note) => note.type==="archive");
  return (
    <Container>
      {
        filteredNoteList.map((note) => <Note key={note.id} data={note} />)
      }
    </Container>
  )
}

export default ArchiveNotes