import React, { Component } from 'react';

import Card from '../components/Card'

class Popular extends Component {
    constructor() {
        super()

        this.state = {
            movies: []
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
        return (
            <div>
                <h1>Popular</h1>
                    <div className="d-flex flex-wrap">
                        {/* <div className=""> */}
                            {movies.map(movie => (
                                <div className="container col-4 py-2" key={`Popular movie ${movie.id}`}>
                                    <Card
                                        
                                        poster={movie.poster_path}
                                        title={movie.original_title}
                                        date={movie.release_date}
                                        overview={movie.overview}
                                    />
                                </div>
                            ))}
                    </div>
            </div>
        );
    }
}

export default Popular;