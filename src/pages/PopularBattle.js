import React, { Component } from 'react';

import Card from '../components/Card'

class PopularBattle extends Component {
    constructor() {
        super()

        this.state = {
            movies: [],
            currentBattle: 0
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74ff4d5b18f55c304a239fadf716fe2f")
        .then(response => response.json())
        .then(data => {
          this.setState({ movies: data.results })
        })
    }
    render() {
        const { movies } = this.state
        const battle = movies.filter((battle, index) => index > 2)
        console.log(battle)
        return (
            <div className="d-flex">
                    {battle.map(movie => (
                        <Card
                            key={movie.id}
                            poster={movie.poster_path}
                            title={movie.original_title}
                            date={movie.release_date}
                            overview={movie.overview}
                        />
                    ))}
            </div>
        )}
}

export default PopularBattle;