import React, { Component } from 'react';

class Card extends Component {

    render() {
        const { title, poster, date, overview } = this.props
        return (
            <div className="container-fluid border">
                <div>
                    <img className="mx-auto d-block" src={`https://image.tmdb.org/t/p/w300/${poster}`} alt={title} style={{ width: "80%" }}/>
                    <div className="text-center mt-4">
                        <h3>{title}</h3>
                        <p>{date}</p>
                    </div>
                    <p style={{ fontSize: 18 }}>{overview}</p>
                </div>
            </div>
        );
    }
}

export default Card;