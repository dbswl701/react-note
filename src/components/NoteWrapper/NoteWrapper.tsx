import React from 'react'
import { Container } from './NoteWrapper.styles'
import Note from '../Note/Note'
import { NoteType } from '../../types/note'

interface Prop {
  noteList: NoteType[],
}

const NoteWrapper = ({noteList}: Prop) => {
  return (
    <Container>
      {
        noteList.map((note) => <Note key={note.id} data={note} />)
      }
    </Container>
  )
}

export default NoteWrapper