import React from 'react'
import { NoteType } from '../../types/note';
import { Container, Content, ContentText, DateText, Footer, FooterSide, NoteHeader, NoteHeaderSide, Priority, Tag, Tags, Title } from './Note.styles';
import {BsPinFill} from 'react-icons/bs';
import {BiSolidEdit} from 'react-icons/bi';
import {BiSolidArchiveOut} from 'react-icons/bi';
import {FaTrash} from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { deleteNote, togglePin, toggleTypeArchive } from '../../store/notesListSlice';
import { FaTrashRestore } from 'react-icons/fa';

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

  const onClickToggleArchive = () => {
    // 해당 노트의 type에 archive를 toggle
    dispatch(toggleTypeArchive({id: data.id}));
  }

  const onClickDelete = () => {
    dispatch(deleteNote({id: data.id}));
  }

  const NormalFooter = () => {
    return (
      <FooterSide>
        {/* // 수정, archive, 휴지통 버튼 */}
        <BiSolidEdit style={{ height: '20px', width: '20px', cursor: 'pointer'}} />
        <BiSolidArchiveOut onClick={onClickToggleArchive} style={{ height: '20px', width: '20px', cursor: 'pointer'}} />
        <FaTrash onClick={onClickDelete} style={{ height: '20px', width: '20px', cursor: 'pointer'}} />
      </FooterSide>
    )
  }

  const TrashFooter = () => {
    return (
      <FooterSide>
        {/* // 수정, archive, 휴지통 버튼 */}
        <FaTrashRestore onClick={onClickDelete} style={{ height: '20px', width: '20px', cursor: 'pointer'}} />
        <FaTrash onClick={onClickDelete} style={{ height: '20px', width: '20px', cursor: 'pointer'}} />
      </FooterSide>
    )
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
        {
          data.type === 'trash' ? <TrashFooter /> : <NormalFooter />
        }
        {/* <NormalFooter /> */}
      </Footer>
    </Container>
  )
}

export default Note