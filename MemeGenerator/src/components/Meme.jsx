import React from 'react'

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    });

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then((res) => res.json())
        .then((data) => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">

                <div>
                    <label className='form--label'>Top Text</label>
                    <input
                        className="form--input"
                        name="topText"
                        value={meme.topText} 
                        type='text'
                        placeholder='That moment when'
                        onChange={handleChange}
                    />
                </div>
                

                <div>
                    <label className='form--label'>Bottom Text</label>
                    <input
                        className="form--input"
                        name="bottomText"
                        value={meme.bottomText}
                        type='text'
                        placeholder='you burned your toast'
                        onChange={handleChange}
                    />
                </div>
                

                <button 
                    className="form--button" 
                    onClick={getMemeImage}
                >   Get a new meme image  🖼
                </button>
            </div>

            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        </main>
    )
}