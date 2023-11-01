import React, { useEffect, useState } from 'react'
import { Container, Input, NoteContainer, NotesTitle, SortingBtn } from './AllNotes.styles'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Note from '../../components/Note/Note';

const AllNotes = () => {
  const [search, setSearch] = useState('');
  const [debouncedValue, setDebouncedValue] = useState(search);

  const notes = useSelector((state: RootState) => state.noteList);
  console.log(notes);

  const filteredNotesList = notes.filter(note => note.type === 'normal');

  console.log(search);
  console.log('debouncd: ', debouncedValue);

  // 디바운스 커스텀훅으로도 나중에 리펙토링 해보자!
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(search);
    }, 200);

    return () => {
      clearTimeout(timer);
    }; //value 변경 시점에 clearTimeout을 해줘야함.
  }, [search]);

  const pinnedNoteList = filteredNotesList.filter(note => note.pinned);
  const allNoteList = filteredNotesList.filter(note => !note.pinned);
  return (
    <Container>
      {/* 검색 */}
      <Input placeholder='노트의 제목을 입력해주세요.' value={search} onChange={(e) => setSearch(e.target.value)}/> 
      {/* 정렬 */}
      <SortingBtn>정렬</SortingBtn>
      {/* 노트 */}
      {/* pinned note */}
      <NotesTitle>Pinned Notes (2)</NotesTitle>
      <NoteContainer>
        {
          // 핀 된것만 보이기
          pinnedNoteList?.map((note) => <Note key={note.id} data={note} />)
        }
      </NoteContainer>
      {/* all notes */}
      <NotesTitle>All Notes(1)</NotesTitle>
      <NoteContainer>
        {
          // 핀 제외 노트만 보이기
          allNoteList?.map((note) => <Note key={note.id} data={note} />)
        }
      </NoteContainer>
    </Container>
  )
}

export default AllNotes