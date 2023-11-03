import React, { useEffect, useState } from 'react'
import { Container, Input, NotesTitle, SortingBtn } from './AllNotes.styles'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
// import Note from '../../components/Note/Note';
import NoteWrapper from '../../components/NoteWrapper/NoteWrapper';

const AllNotes = () => {
  const [search, setSearch] = useState('');
  const notes = useSelector((state: RootState) => state.noteList);

  const [debouncedValue, setDebouncedValue] = useState(search);
  const [AllNotesList, setAllNotesList] = useState(notes.filter(note => note.type === 'normal'));

  const [filteredNotesList, setFilteredNotesList] = useState([...AllNotesList]);
  console.log(notes);

  console.log(search);
  console.log('debouncd: ', debouncedValue);

  useEffect(() => {
    setAllNotesList(notes.filter(note => note.type === 'normal'));
  }, [notes]);

  // 디바운스 커스텀훅으로도 나중에 리펙토링 해보자!
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(search);
    }, 500);

    return () => {
      clearTimeout(timer);
    }; //value 변경 시점에 clearTimeout을 해줘야함.
  }, [search]);

  // 디바운스로 값 바뀔 때 마다 검색
  useEffect(() => {
    setFilteredNotesList(AllNotesList.filter((note) => note.name.includes(debouncedValue) || note.content.includes(debouncedValue)));
  }, [debouncedValue, AllNotesList])

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
      <NotesTitle>Pinned Notes ({pinnedNoteList.length})</NotesTitle>
      <NoteWrapper noteList={pinnedNoteList} /> 
      {/* all notes */}
      <NotesTitle>All Notes({allNoteList.length})</NotesTitle>
      <NoteWrapper noteList={allNoteList} />
    </Container>
  )
}

export default AllNotes