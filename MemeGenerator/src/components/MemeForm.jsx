import React from 'react'

export default function MemeForm() {
    return (
        <form className="meme">
            <div className='input-container'>
                <div className='input-group'>
                    <h4>Top Text</h4>
                    <input className="input" type='text'></input>
                </div>
                <div className='input-group'>
                    <h4>Bottom text</h4>
                    <input className="input" type='text'></input>
                </div>
            </div>
            
            <button className="form-submit" type='submit'>Get a new meme image  🖼</button>
        </form>
    )
}