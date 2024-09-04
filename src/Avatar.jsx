import React, { useState } from 'react'

const Avatar = () => {
    const [avatars, setAvatars] = useState()
    const [image, setimg] = useState()
    const ava = ["Simba", "Annie", "Shadow", "Rocky", "Sugar", "Lucy", "Luna", "Bella", "Angel", "Casper", "Lilly", "Midnight", "Simon", "Rascal", "Gracie", "Boots", "Sam", "Tiger", "Bubba", "Pepper"]
    const [seeds, setSeeds] = useState(ava[0])

    const handleClick = (e) => {
        setimg(`https://api.dicebear.com/9.x/${e}/svg?seed=${seeds}`)
        setAvatars(e)
    }
    const handleNext = () => {
        const num = Math.floor(Math.random() * ava.length)
        setSeeds(ava[num])
        setimg(`https://api.dicebear.com/9.x/${avatars}/svg?seed=${seeds}`)
    }
    return (
        <>
            <div className='container'>
                <h1>Random Avatar Generator</h1>
                <div className='btn'>
                    <button onClick={() => handleClick("adventurer-neutral")}>Emoji</button>
                    <button onClick={() => handleClick("adventurer")}>Adventurer</button>
                    <button onClick={() => handleClick("avataaars")}>Avatars</button>
                    <button onClick={() => handleClick("big-ears")}>Big Ears</button>
                    <button onClick={() => handleClick("big-smile")}>Big Smile</button>
                    <button onClick={() => handleClick("bottts")}>Bots</button>
                    <button onClick={() => handleClick("bottts-neutral")}>Bots Neutral</button>
                    <button onClick={() => handleClick("croodles-neutral")}>Crodles</button>
                    <button onClick={() => handleClick("dylan")}>Chapri</button>
                    <button onClick={() => handleClick("fun-emoji")}>Fun Emoji</button>
                    <button onClick={() => handleClick("micah")}>Micah</button>
                    <button onClick={() => handleClick("pixel-art")}>Pixel Art</button>
                    <button onClick={() => handleClick("thumbs")}>Thumbs</button>
                </div>
                <img src={image} alt="" width="400px" />
                <div className='btns'>
                    <button onClick={handleNext} className='next'>Next</button>
                </div>
            </div>
        </>
    )
}

export default Avatar
