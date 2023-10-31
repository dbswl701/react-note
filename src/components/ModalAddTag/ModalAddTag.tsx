import React from 'react'
import { Container, Input, TagContainer, TagListContainer, TagTitle, Title } from './ModalAddTag.styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { TagType } from '../../types/tag'
import { FaPlus } from 'react-icons/fa6';
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
  console.log(tagList);
  return (
    <Container>
      <Title>ADD Tags</Title>
      <Input placeholder='new tag...'/>
      <TagListContainer>
        {
          tagList?.map((tag) => <TagItem key={tag.id} tag={tag} />)
        }
      </TagListContainer>
    </Container>
  )
}

export default ModalAddTag