import React, { useState } from 'react'
// import DropDown from '../DropDown/dropdown';
import { AddTagBtn, Container, CreateBtn, Footer, Header, Input, Label, Select, Tag, TagText, Tags, Wrapper } from './ModalAddNote.styles'
import ReactQuill from 'react-quill'
import { useDispatch, useSelector } from 'react-redux'
import { addNote } from '../../store/notesListSlice'
import { NoteType } from '../../types/note'
import { toggleAddNoteModal, toggleAddTagModal } from '../../store/modalSlice'
import dayjs from 'dayjs'
import { RootState } from '../../store'
import ModalAddTag from '../ModalAddTag/ModalAddTag'
import { IoClose }from 'react-icons/io5';
import { v4 } from 'uuid'
import { ReactQuillContainer } from '../Note/Note.styles'

const ModalAddNote = () => {
  const dispatch = useDispatch();
  const isOpenAddTag = useSelector((state:RootState) => state.modal.isOpenAddTag);
  // const [addTags, setAddTags] = useState<number[]>([]);
  const [contents, setContents] = useState<NoteType>({
    id: v4(),
    name: '',
    content: '',
    tagList: [],
    createdAt: '',
    modifiedAt: '',
    background: 'white',
    priority: 'low',
    pinned: false,
    type: 'normal',
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
  const onClickAddTag = () => {
    // tag 모달창 열기
    dispatch(toggleAddTagModal());
  }

  const onClickClocse = () => {
    dispatch(toggleAddNoteModal());
  }

  const onClickAddNoteTag = (id: string, flag: 'add' | 'delete') => {
    console.log(id);
    if (flag === 'add') {
      setContents({...contents, tagList:[...contents.tagList, id]})
    } else {
      setContents({...contents, tagList: contents.tagList.filter(v => v !== id)})
    }
    // setAddTags([...addTags, id]);
  }

  const tagList = useSelector((state:RootState) => state.tag);
  console.log(tagList);
  const filteredTagList = tagList.filter((v) => contents.tagList.includes(v.id));
  console.log(filteredTagList);
  console.log('contents:', contents);

  const onClickDeleteTag = (tagId: string) => {
    setContents({...contents, tagList: contents.tagList.filter(v => v !== tagId)})
    // setAddTags([...addTags.filter(v => v !== tagId)])
  }
  
  return (
    <Wrapper>
      {isOpenAddTag && <ModalAddTag addTags={contents.tagList} onClickAddNoteTag={onClickAddNoteTag} />}
      <Container>
        <Header>
          <h2>노트 생성하기</h2>
          <IoClose onClick={onClickClocse}style={{height: '30px', width: '30px', color: 'rgb(127,127,127)'}} />
        </Header>
        <Input name="name" value={contents.name} onChange={(e) => onChange(e)} />
        <ReactQuillContainer color={contents.background}>
          {/* <ReactQuill style={{height: '500px', marginBottom: '40px', backgroundColor:  'red'}} onChange={(e) => onChange(e)}/> */}
          {/* <ReactQuill theme="snow" onChange={(e) => onChange(e)} /> */}
          <ReactQuill
            // formats={formats}
            // modules={modules}
            // theme="snow"
            // value={value}
            onChange={(e) => onChange(e)}
            // style={{height: '200px', backgroundColor: 'red'}}
            />
        </ReactQuillContainer>
        <Tags>
          {
            filteredTagList.map((tag) => <Tag key={tag.id}>
              <TagText>{tag.tag}</TagText>
              <IoClose onClick={() => onClickDeleteTag(tag.id)} stroke-width={20} />
            </Tag>)
          }
        </Tags>
        <Footer>
          <AddTagBtn onClick={onClickAddTag}>Add Tag</AddTagBtn>
          <div>
            {/* 배경색:  */}
            <Label htmlFor="background">배경색: </Label>
            <Select id="background" name="background" onChange={(e) =>onChange(e)} >
              <option value="white">White</option>
              <option value="rgb(255,205,205)">Red</option>
              <option value="rgb(205,255,204)">Green</option>
              <option value="rgb(203,223,255)">Blue</option>
              <option value="rgb(255,255,204)">Yellow</option>
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