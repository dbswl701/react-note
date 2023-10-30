import React, { useEffect, useState } from 'react'
import { Container, Input, NotesTitle, SortingBtn } from './AllNotes.styles'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Note from '../../components/Note/Note';

const AllNotes = () => {
  const [search, setSearch] = useState('');
  const [debouncedValue, setDebouncedValue] = useState(search);

  const notes = useSelector((state: RootState) => state.noteList);
  console.log(notes);

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

  return (
    <Container>
      {/* 검색 */}
      <Input placeholder='노트의 제목을 입력해주세요.' value={search} onChange={(e) => setSearch(e.target.value)}/> 
      {/* 정렬 */}
      <SortingBtn>정렬</SortingBtn>
      {/* 노트 */}
      {/* pinned note */}
      <NotesTitle>Pinned Notes (2)</NotesTitle>
      {
        notes?.map((note) => <Note key={note.id} data={note} />)
      }
      {/* all notes */}
      <NotesTitle>All Notes(1)</NotesTitle>
    </Container>
  )
}

export default AllNotes