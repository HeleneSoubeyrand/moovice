import React, { Component } from 'react';

class Card extends Component {

    render() {
        const { title, poster, date, overview } = this.props
        return (
            <div className="border col-4">
                <h5>{title}</h5>
                <img src={`https://image.tmdb.org/t/p/w300/${poster}`} alt={title}/>
                <p>{date}</p>
                <p>{overview}</p>
            </div>
        );
    }
}

export default Card;