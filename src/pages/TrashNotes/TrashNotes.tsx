import React from 'react'
import { useLocation, useParams } from "react-router-dom";

const TrashNotes = () => {
  const params = useParams();
  const location =useLocation();

  console.log('params!!!!: ', params);
  console.log(location);
  return (
    <div>TrashNotes</div>
  )
}

export default TrashNotes