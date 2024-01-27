import React from 'react'

export default function Header() {
    return (
        <header className="page-header">
            <div className="logo-container">
                <img src="./src/images/handsome-squidward.png" alt="" className="logo" />
                <h2 className="header-title">Meme Generator</h2>
            </div>
            <h4 className="header-subtitle">React Course - Project 3</h4>
        </header>
    )
}