import React from 'react'
import { NoteType } from '../../types/note';
import { Container, Content, ContentText, DateText, Footer, FooterSide, NoteHeader, NoteHeaderSide, Priority, Tag, Tags, Title } from './Note.styles';
import {BsPinFill} from 'react-icons/bs';
import {BiSolidEdit} from 'react-icons/bi';
import {BiSolidArchiveOut} from 'react-icons/bi';
import {FaTrash} from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { togglePin } from '../../store/notesListSlice';

type NoteProps = {
  data: NoteType
}

const Note = ({data}: NoteProps) => {
  console.log(data);
  const tagList = useSelector((state:RootState) => state.tag);
  console.log(tagList);
  const filteredTagList = tagList.filter((v) => data.tagList.includes(v.id));
  console.log(filteredTagList);

  // const noteList = useSelector((state:RootState) => state.noteList);
  const dispatch = useDispatch();
  // const note = noteList.

  const onClickTogglePin = () => {
    console.log('pinned');
    console.log(data);
    dispatch(togglePin({id: data.id}));
  }
  return (
    <Container bcolor={data.background}>
      <NoteHeader>
        <Title>{data.name}</Title>
        <NoteHeaderSide>
          <Priority>{data.priority.toUpperCase()}</Priority>
          <BsPinFill onClick={onClickTogglePin} style={{ margin: 'auto', color: data.pinned === false ? 'gray' : 'red' }} />
        </NoteHeaderSide>
      </NoteHeader>
      <Content>
        <ContentText>{data.content}</ContentText>
      </Content>
      <Tags>
        {
          filteredTagList.map((tag) => <Tag key={tag.id}>{tag.tag}</Tag>)
        }
        {/* <Tag>{data.tag}</Tag> */}
      </Tags>
      <Footer>
        <DateText>{data.createdAt}</DateText>
        <FooterSide>
          {/* // 수정, archive, 휴지통 버튼 */}
          <BiSolidEdit style={{ height: '20px', width: '20px'}} />
          <BiSolidArchiveOut style={{ height: '20px', width: '20px'}} />
          <FaTrash style={{ height: '20px', width: '20px'}} />
        </FooterSide>
      </Footer>
    </Container>
  )
}

export default Note