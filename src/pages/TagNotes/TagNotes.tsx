import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { RootState } from '../../store';
import NoteWrapper from '../../components/NoteWrapper/NoteWrapper';

const TagNotes = () => {
  const {name} = useParams();
  console.log(name);

  // 해당 Name에 맞는, 필터링 된 것들 보여주기
  const noteList = useSelector((state:RootState) => state.noteList);
  const tagList = useSelector((state: RootState) => state.tag);

  // name의 tag id 찾기
  const tagId = tagList.filter((tag) => tag.tag === name)[0].id; // 아 리펙토링 필요할 듯
  console.log(tagId);

  // 노트에 tag id로 필터링 걸기
  const filteredNoteList = noteList.filter((note) => note.tagList.includes(tagId));
  console.log(filteredNoteList);

  return (
    <NoteWrapper noteList={filteredNoteList} />
  )
  
}
export default TagNotes