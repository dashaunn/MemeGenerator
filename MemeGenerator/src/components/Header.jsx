import React from 'react'

export default function Header() {
    return (
        <header className="page-header">
            <div className="logo-container">
                <img src="./src/images/handsome-squidward.png" alt="" className="logo" />
                <h1 className="title">Meme Generator</h1>
            </div>
            <h2 className="subtitle">React Course - Project 3</h2>
        </header>
    )
}