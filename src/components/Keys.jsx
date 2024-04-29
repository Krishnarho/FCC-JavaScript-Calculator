import React from 'react'

function Keys({ keys, handleInput }) {
    return (
        <>
            {keys.map(({ id, value }) => (
                <button key={id} className='key' id={id} onClick={() => handleInput(value)}>{value}</button>
            ))}
        </>
    )
}

export default Keys