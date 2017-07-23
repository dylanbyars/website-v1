import React from 'react'

export const TagTile = ({ name, count, setModalInfo }) => {

    let colors = ['#8AEA92', '#80ADA0', '#CAD2C5', '#FCCA46', '#65AFFF', '#8D5A97', '#F87060']

    // get a random color
    let color = colors[Math.floor(Math.random() * colors.length)];
    let popularity = Math.floor(count / 10000)
    // get a unit eqaul to 1% of the screen's width to help with tile sizing
    let vw = window.innerWidth / 100
    // set a minimum tile size so they don't get too small
    let minSize = 90
    // dynamically set tile size based on popularity, making sure nothing TOO small gets returned
    let size = Math.max(vw * (popularity / 6), minSize)
    // define styles to apply to the tile
    let styles = {
        width: size,
        height: size,
        // the margin is larger for smaller sized tiles
        margin: 25 * vw * (1 / popularity),
        fontSize: Math.max((popularity / vw), 14),
        backgroundColor: color
    }

    return (
        <div onClick={() => setModalInfo(name)} className="tag-tile" style={styles}>{name}</div>
    )
}