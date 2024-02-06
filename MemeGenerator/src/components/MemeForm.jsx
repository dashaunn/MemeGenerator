import React from 'react'
import memesData from '../memesData'

export default function MemeForm() {
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
    }

    return (
        <section>
            <div className="form">

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
                

                <button 
                    className="form--button" 
                    onClick={getMemeImage}
                >   Get a new meme image  🖼
                </button>
            </div>
        </section>
    )
}