import React, { Component } from 'react';
import { quotes } from './quotes';
import './quoter.scss';

class Quoter extends Component {
    render() {

        const getRandomNumber = num =>  Math.floor((Math.random() * num))
        const quoteCount = quotes.length
        const randomQuote = quotes[getRandomNumber(quoteCount)]
        const quoteText = randomQuote.quote
        const quoteAuthor = randomQuote.author

        return (
            <div className="container__quoter">
                <div className="quoter__quote">{quoteText}</div>
                <div className="quoter__author">{quoteAuthor}</div>
            </div>
        )
    }

}

export default Quoter;