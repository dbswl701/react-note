import React from 'react'
import { Container, MenuContainer, MenuText, Title, TitleContainer } from './Sidebar.styles'
import { FaLightbulb } from 'react-icons/fa';
import { BiSolidPurchaseTag } from 'react-icons/bi';
import { BiSolidBox } from 'react-icons/bi';
import { FaTrash } from 'react-icons/fa6';
import { BiSolidPencil } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

// const MenuItem = ({icon, text}: {icon: React.ReactNode, text: string}) => {
//   console.log(icon);
//   console.log(text);
//   return (
//     <MenuContainer>
//       {icon}
//       <MenuText>Notes</MenuText>
//     </MenuContainer>
//   );
// }


// const onClick = (link:string) => {
//   console.log(link);
//   // navigate(link);
// }

const TagItem = ({tagName}:{tagName: string}) => {
  const navigate = useNavigate(); // 이거 중복 호출...?

  return (
    <>
      <MenuContainer onClick={()=>navigate(`/tag/${tagName}`)}>
        <BiSolidPurchaseTag style={{fontSize: '30px', margin: 'auto 0'}} />
        <MenuText>{tagName}</MenuText>
      </MenuContainer>
    </>
  )
}

const Sidebar = () => {
  const navigate = useNavigate();
  const tagList = useSelector((state:RootState) => state.tag);
  console.log(tagList);
  return (
    <Container>
      <TitleContainer>
        <Title>Keep</Title>
      </TitleContainer>
      <MenuContainer onClick={()=>navigate('/')}>
        <FaLightbulb style={{fontSize: '30px', margin: 'auto 0'}} />
        <MenuText>Notes</MenuText>
      </MenuContainer>
      {
        tagList.map((tag) => <TagItem key={tag.id} tagName={tag.tag} />)
      }
      {/* 태그들 map 돌면서 출력 */}
      {/* <MenuContainer onClick={()=>navigate('/exercise')}>
        <BiSolidPurchaseTag style={{fontSize: '30px', margin: 'auto 0'}} />
        <MenuText>Exercise</MenuText>
      </MenuContainer>
      <MenuContainer onClick={()=>navigate('/quotes')}>
        <BiSolidPurchaseTag style={{fontSize: '30px', margin: 'auto 0'}} />
        <MenuText>Quotes</MenuText>
      </MenuContainer> */}
      <MenuContainer onClick={()=>navigate('/edit')}>
        <BiSolidPencil style={{fontSize: '30px', margin: 'auto 0'}} />
        <MenuText>Edit Notes</MenuText>
      </MenuContainer>
      <MenuContainer onClick={()=>navigate('/archive')}>
        <BiSolidBox style={{fontSize: '30px', margin: 'auto 0'}} />
        <MenuText>Archive</MenuText>
      </MenuContainer>
      <MenuContainer onClick={()=>navigate('/trash')}>
        <FaTrash style={{fontSize: '30px', margin: 'auto 0'}} />
        <MenuText>Trash</MenuText>
      </MenuContainer>
      {/* <MenuItem><BiSolidPurchaseTag />Quotes</MenuItem>
      <MenuItem><BiSolidPurchaseTag />태그1</MenuItem>
      <MenuItem><BiSolidPencil />Edit Notes</MenuItem>
      <MenuItem><BiSolidBox />Archive</MenuItem>
      <MenuItem><FaTrash />Trash</MenuItem> */}

    </Container>
  )
}

export default Sidebar