// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import AllNotes from './pages/AllNotes/AllNotes'
import TrashNotes from './pages/TrashNotes/TrashNotes'
import ArchiveNotes from './pages/ArchiveNotes/ArchiveNotes'
import TagNotes from './pages/TagNotes/TagNotes'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Sidebar from './layout/Sidebar/Sidebar'
import Navbar from './layout/Navbar/Navbar'
import { AppContainer } from './App.styles'
import { useSelector } from 'react-redux'
import { RootState } from './store'

function App() {
  // const [count, setCount] = useState(0)
  const notes = useSelector((state: RootState) => state.noteList);
  console.log(notes);
  console.log('!!!');
  return (
    <AppContainer>
      <Sidebar />
      <div className='app__container'>
        <Navbar />
        <Routes>
          <Route path="/" element={<AllNotes />} />
          <Route path="/trash" element={<TrashNotes />} />
          <Route path="/archive" element={<ArchiveNotes />} />
          <Route path="/tag:name" element={<TagNotes />} />
          <Route path="/404" element={<ErrorPage />} />
        </Routes>
      </div>
    </AppContainer>
  )
}

export default App
