import React from 'react'

export default function MemeForm() {
    return (
        <main>
            <form className="form">

                <div>
                    <label className='form--label'>Top Text</label>
                    <input
                        className="form--input" 
                        type='text'
                        placeholder='That moment when'
                    />
                </div>
                

                <div>
                    <label className='form--label'>Bottom Text</label>
                    <input
                        className="form--input"
                        type='text'
                        placeholder='you burned your toast'
                    />
                </div>
                

                <button className="form--button" type='submit'>Get a new meme image  🖼</button>
            </form>
        </main>
    )
}