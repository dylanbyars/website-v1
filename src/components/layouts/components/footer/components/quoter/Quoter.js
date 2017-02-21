import React, { Component } from 'react';
import { quotes } from './quotes';

export const Quoter = () => {

    const randomNumber = num =>  Math.floor((Math.random() * num))

    const randomQuote = quotes[randomNumber(quotes.length)]
    
    const { quote, author} = randomQuote

    return (
        <div className="container__quoter">
            <div className="quoter__quote">{quote}</div>
            <div className="quoter__author">{author}</div>
        </div>
    )
}

