import React from 'react'

const DropDown = ({list}: {list: string[]}) => {
  console.log(list);
  return (
    <div>
      <label htmlFor="priority">우선순위</label>
      <select id="priority" name="fruit">
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="white">White</option>
        <option value="yellow">Yellow</option>
      </select>
    </div>
  )
}

export default DropDown