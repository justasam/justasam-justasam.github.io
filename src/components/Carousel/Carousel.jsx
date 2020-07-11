import React, { useState } from 'react'
import ChevronNav from '../ChevronNav';

import './index.scss';

import { X } from 'react-feather';

export default ({ images, hide }) => {

    const [cur, setCur] = useState(0);

    const prevDisabled = cur <= 0;
    const nextDisabled = cur >= images.length - 1;

    return (
        <div className='carousel'>
            <X className='close' onClick={hide} data-hoverable='true' />
            <img src={images[cur]} alt='work' />
            <ChevronNav
                prevDisabled={prevDisabled}
                nextDisabled={nextDisabled}
                handleClick={(dir) => setCur(c => c + dir)}
            />
        </div>
    )
}