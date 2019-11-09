import React, { Component } from 'react'
// import axios from 'axios'

export default class Episode extends Component {

    state = {
        name: this.name,
        watchedEpisode: false
    }


    render() {
        return (
            <div>
                <h3>{this.name}</h3>
                <div>{this.watchedEpisode}
                <button onClick={this.removeEpisode}>
                    Watched?
                </button>
                </div>
            </div>
        )
    }
}
