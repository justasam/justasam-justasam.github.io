import React, { useState } from 'react'
import PropTypes from 'prop-types';

import './index.scss';
import Carousel from '../Carousel';

const WorkItem = ({
    title,
    images,
    description,
    date
}) => {

    const [status, setStatus] = useState('idle');

    return (
        <div>
            {status === 'idle' ?
                <div
                    className='workitm'
                    onClick={() => setStatus('clicked')}
                >
                    <div className='text' data-hoverable='true'>
                        <h1 className='title'>
                            {title}
                            <span className='outline'>{title}</span>
                        </h1>
                        <div className='info'>
                            <p className='desc'>{description}</p>
                            <p className='date'>{date}</p>
                        </div>
                    </div>

                    <img data-hoverable='true' className='image' src={images[0]} alt='Project' />
                </div>
                :
                <Carousel images={images} hide={() => setStatus('idle')} />
            }
        </div>
    )
}

WorkItem.propTypes = {
    title: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

export default WorkItem;