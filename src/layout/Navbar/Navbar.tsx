import React from 'react'
import { useLocation } from 'react-router-dom'
import { AddBtn, Container, Title } from './Navbar.styles';
import { useDispatch } from 'react-redux';
import { toggleAddNoteModal } from '../../store/modalSlice';

const Navbar = () => {
  const dispatch = useDispatch();

  // params 들고와서, 제일 상단에 보여주기.
  // 노트 추가 버튼
  const {pathname} = useLocation();
  console.log(pathname);
  console.log(pathname.slice(1,));
  let title = pathname.slice(1,) === '' ? 'Notes' : pathname.slice(1,);
  switch(pathname.slice(0,4)) {
    case('/'): {
      title = 'Notes';
      break;
    }
    case('/tag'): {
      title = pathname.split('/')[2];
      break;
    }
    default: {
      title = pathname.split('/')[1];
    }
  }
  return (
    <Container>
      <Title>
        {title}
      </Title>
      <AddBtn onClick={() => dispatch(toggleAddNoteModal())}>+</AddBtn>
    </Container>
  )
}

export default Navbar