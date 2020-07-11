import React from 'react';

import { ChevronLeft, ChevronRight } from 'react-feather';

import './index.scss';

export default ({ prevDisabled, nextDisabled, handleClick, width = 60 }) => {
  return (
    <div>
      {!prevDisabled &&
        <div onClick={() => {
          handleClick(-1)
        }} data-hoverable='true' style={{ width }}
          className='prev chevron'><ChevronLeft size={32} /></div>}
      {!nextDisabled &&
        <div onClick={() => {
          handleClick(1)
        }} data-hoverable='true' style={{ width }}
          className='next chevron'><ChevronRight size={32} /></div>}
    </div>
  )
}
