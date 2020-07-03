import React, { useState, useEffect } from 'react'

import './index.css';

export default () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    const updateOnMove = (ev) => {
        setMousePos({
            x: ev.pageX,
            y: ev.pageY,
            hoverable: ev.target.dataset.hoverable === 'true'
        })
    }

    useEffect(() => {
        window.addEventListener('mousemove', updateOnMove);

        return () => {
            window.removeEventListener('mousemove', updateOnMove)
        }
    }, [])

    return (
        <React.Fragment>
            <div className='cursor-outer' style={{
                left: mousePos.x,
                top: mousePos.y,
                padding: mousePos.hoverable ? '10px' : 0
            }}>
            </div>
            <div className='cursor-inner' style={{
                left: mousePos.x,
                top: mousePos.y
            }}></div>
        </React.Fragment>
    );
}