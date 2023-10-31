import React, { useState } from 'react'
import { Container, Input, TagContainer, TagListContainer, TagTitle, Title } from './ModalAddTag.styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { TagType } from '../../types/tag'
import { FaPlus } from 'react-icons/fa6';
import { addTag } from '../../store/tagSlice.'
// import { FaMinus } from 'react-icons/fa6';

const TagItem = ({tag}: {tag: TagType}) => {
  return (
    <TagContainer>
      <TagTitle>{tag.tag}</TagTitle>

      <FaPlus style={{height: '30px', width: '30px', color: 'rgb(127,127,127)'}} />
      {/* <FaMinus style={{height: '50px', width: '50px', color: 'rgb(127,127,127)'}} /> */}

    </TagContainer>
  )
}

const ModalAddTag = () => {
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

  return (
    <Container>
      <Title>ADD Tags</Title>
      <form onSubmit={(e) => onSubmit(e)}>
        <Input placeholder='new tag...' value={text} onChange={(e) => setText(e.target.value)}/>
      </form>
      <TagListContainer>
        {
          tagList?.map((tag) => <TagItem key={tag.id} tag={tag} />)
        }
      </TagListContainer>
    </Container>
  )
}

export default ModalAddTag