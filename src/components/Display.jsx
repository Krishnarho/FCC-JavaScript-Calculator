import React from 'react'

function Display({ input, output }) {
    return (
        <div className='screen'>
            <span className='output'>{output}</span>
            <span id="display" className='input'>{input}</span>
        </div>
    )
}

export default Display