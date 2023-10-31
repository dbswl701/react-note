import React from 'react'
import { NoteType } from '../../types/note';
import { Container, Content, ContentText, DateText, Footer, FooterSide, NoteHeader, NoteHeaderSide, Priority, Tag, Tags, Title } from './Note.styles';
import {BsPinFill} from 'react-icons/bs';
import {BiSolidEdit} from 'react-icons/bi';
import {BiSolidArchiveOut} from 'react-icons/bi';
import {FaTrash} from 'react-icons/fa6';

type NoteProps = {
  data: NoteType
}

const Note = ({data}: NoteProps) => {
  console.log(data);
  return (
    <Container bcolor={data.background}>
      <NoteHeader>
        <Title>{data.name}</Title>
        <NoteHeaderSide>
          <Priority>{data.priority.toUpperCase()}</Priority>
          <BsPinFill style={{ margin: 'auto', color: data.pinned === false ? 'gray' : 'red' }} />
        </NoteHeaderSide>
      </NoteHeader>
      <Content>
        <ContentText>{data.content}</ContentText>
      </Content>
      <Tags>
        <Tag>{data.tag}</Tag>
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