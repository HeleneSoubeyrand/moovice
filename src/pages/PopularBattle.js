import React, { Component } from 'react';

import Card from '../components/Card'

class PopularBattle extends Component {
    constructor() {
        super()

        this.state = {
            movies: [],
            currentBattle: 0,
            id: []
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74ff4d5b18f55c304a239fadf716fe2f")
        .then(response => response.json())
        .then(data => {
          this.setState({ movies: data.results })
        })
        
    }

    handleClick(id) {
        let favorites = localStorage.getItem("favorite")

        if (!favorites) {
            favorites = localStorage.setItem("favorite", JSON.stringify([id])) 
        } else {
            favorites = JSON.parse(favorites)
            favorites = [...favorites, id]
            favorites = localStorage.setItem("favorite", JSON.stringify(favorites))
        }
        
        this.setState({ 
            currentBattle: this.state.currentBattle + 2,
        })
        console.log(this.state.currentBattle)
    }

    render() {
        const { movies, currentBattle } = this.state
        const topMovies = movies.filter((topMovie, index) => 
        index === currentBattle || index === currentBattle + 1
        )
        return (
            <>
                <h1>Popular battle</h1>
                <div className="d-flex flex-wrap justify-content-center mt-5">
                    {topMovies.map(movie => (
                        <div className="container col-6" onClick={() => this.handleClick(movie.id)} key={`Popular battle movie ${movie.id}`}>
                            <Card
                                poster={movie.poster_path}
                                title={movie.original_title}
                                date={movie.release_date}
                                overview={movie.overview}
                            />
                        </div>
                    ))}
                </div>
            </>
        )}
        
}

export default PopularBattle;