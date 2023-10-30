import React, { useState } from 'react'
import { Input } from './AllNotes.styles'

const AllNotes = () => {
  const [search, setSearch] = useState('');
  console.log(search);

  return (
    <div>
      {/* 검색 */}
      <Input placeholder='노트의 제목을 입력해주세요.' value={search} onChange={(e) => setSearch(e.target.value)}/> 
      {/* 정렬 */}
      {/* 노트 */}
      {/* pinned note */}
      {/* all notes */}
    </div>
  )
}

export default AllNotes