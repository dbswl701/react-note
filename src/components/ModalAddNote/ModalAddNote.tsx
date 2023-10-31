import React, { useState } from 'react'
// import DropDown from '../DropDown/dropdown';
import { AddTagBtn, Container, CreateBtn, Footer, Input, Label, Select, Wrapper } from './ModalAddNote.styles'
import ReactQuill from 'react-quill'
import { useDispatch } from 'react-redux'
import { addNote } from '../../store/notesListSlice'
import { NoteType } from '../../types/note'
import { toggleAddNoteModal } from '../../store/modalSlice'
import dayjs from 'dayjs'

const ModalAddNote = () => {
  const dispatch = useDispatch();
  
  const [contents, setContents] = useState<NoteType>({
    id: 0,
    name: '',
    content: '',
    tag: '',
    createdAt: '',
    modifiedAt: '',
    background: 'white',
    priority: 'low',
    pinned: false,
  });

  const onChange = (e: string | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    if (typeof e === 'string') { // 본문 내용
      console.log('typeof e === string');
      setContents({
        ...contents,
        content: e
      })
    } else {
      console.log('!!!!!!');
      console.log('name, value: ',e.target.name, e.target.value);
      setContents({
        ...contents,
        [e.target.name]: e.target.value,
      })
    }
  }
  const onSubmit = () => {
    // 생성 날짜, 태그, 배경색, 우선순위, 제목, 내용 -> 리듀서에 저장
    const date = dayjs().format('MM/DD/YY hh:mm A');
    dispatch(addNote({...contents, createdAt: date, modifiedAt: date}));
    dispatch(toggleAddNoteModal());
  }

  console.log('contents:', contents);
  return (
    <Wrapper>
      <Container>
        <h2>노트 생성하기</h2>
        <Input name="name" value={contents.name} onChange={(e) => onChange(e)} />
        <ReactQuill style={{height: '500px', marginBottom: '40px'}} onChange={(e) => onChange(e)}/>
        <Footer>
          <AddTagBtn>Add Tag</AddTagBtn>
          <div>
            {/* 배경색:  */}
            <Label htmlFor="backgorund">배경색: </Label>
            <Select id="backgorund" name="backgorund" onChange={(e) =>onChange(e)} >
              <option value="white">White</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="yellow">Yellow</option>
            </Select>
          </div>
          <div>
            {/* 우선순위:  */}
            <Label htmlFor="priority">우선순위: </Label>
            <Select id="priority" name="priority" onChange={(e) =>onChange(e)} >
              <option value='low'>Low</option>
              <option value='high'>High</option>
            </Select>
          </div>
        </Footer>
        <CreateBtn onClick={onSubmit}>+ 생성하기</CreateBtn>
      </Container>
    </Wrapper>
  )
}

export default ModalAddNote