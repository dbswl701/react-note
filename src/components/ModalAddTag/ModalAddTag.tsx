import React, { useState } from 'react'
import { Container, Header, Input, TagContainer, TagListContainer, TagTitle, Title, Wrapper } from './ModalAddTag.styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { TagType } from '../../types/tag'
import { FaPlus } from 'react-icons/fa6';
import { addTag } from '../../store/tagSlice.'
import { FaMinus } from 'react-icons/fa6';
import { IoClose }from 'react-icons/io5';
import { toggleAddTagModal } from '../../store/modalSlice'

interface TagItemProp {
  tag: TagType, 
  isAdded: boolean, 
  onClickAddNoteTag: (id: number) => void;
}

const TagItem = ({tag, isAdded, onClickAddNoteTag}: TagItemProp) => {
  // const dispatch = useDispatch();
  console.log(isAdded);
  // const onClick = () => {
  //   console.log('click', tag.tag);
  //   // 노트의 tagList에 해당 태그 id 추가
  //   // dispatch(addNoteTag(note.id, tag.id));
  // }
  return (
    <TagContainer>
      <TagTitle>{tag.tag}</TagTitle>
      {
        isAdded 
        ? <FaMinus style={{height: '30px', width: '30px', color: 'rgb(127,127,127)'}} /> : <FaPlus onClick={() => onClickAddNoteTag(tag.id)} style={{height: '30px', width: '30px', color: 'rgb(127,127,127)'}} />
      }
    </TagContainer>
  )
}

interface ModalAddTagProp {
  addTags: number[], 
  onClickAddNoteTag: (id: number) => void;
  // handleTags?: (tag: string, type: string) => void
}

const ModalAddTag = ({addTags, onClickAddNoteTag}: ModalAddTagProp) => {
  const tagList = useSelector((state:RootState) => state.tag);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  console.log(text);
  console.log(tagList);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // tag에 추가
    dispatch(addTag({id: 5, tag: text}));
    setText('');
  }

  const onClickClocse = () => {
    dispatch(toggleAddTagModal());
  }

  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>ADD Tags</Title>
          <IoClose onClick={onClickClocse}style={{height: '30px', width: '30px', color: 'rgb(127,127,127)'}} />
        </Header>
        <form onSubmit={(e) => onSubmit(e)}>
          <Input placeholder='new tag...' value={text} onChange={(e) => setText(e.target.value)}/>
        </form>
        <TagListContainer>
          {
            tagList?.map((tag) => <TagItem key={tag.id} tag={tag} isAdded={addTags.includes(tag.id)} onClickAddNoteTag={onClickAddNoteTag} />)
          }
        </TagListContainer>
      </Container>
    </Wrapper>
  )
}

export default ModalAddTag