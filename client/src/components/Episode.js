import React, { Component } from 'react'
import axios from 'axios'

export default class Episode extends Component {

    state = {
        name: this.name,
        watchedEpisode: false
    }

    componentDidMount() {
        const episodeId = this.props.match.params.episodeId
        axios.get(`/api/episodes/${episodeId}`)
            .then((res) => {
                this.setState(res.data)
            })
    }

    removeEpisode() {
        const episodeId = this.props.match.params.episodeId
        axios.delete(`/api/episodes/${episodeId}`)
            .then((res) => {
                this.setState(res.data)
            })
    }


    render() {
        return (
            <div>
                <h3>{this.state.name}</h3>
                <div>
                    {/* <input type="checkbox" /> */}
                <button onClick={this.removeEpisode}>
                    Watched?
                </button>
                </div>
            </div>
        )
    }
}
