import React, { Component } from 'react'
import Episode from './Episode'

export default class EpisodeList extends Component {
    render() {
        const episodeList = this.props.episodeList
        console.log(episodeList)
        const episodeComponents = episodeList.map((episode, index) => {
            return <Episode 
            name={this.name}
            watchedEpisode={this.watchedEpisode} />
        });
        return (
            <div>
                { episodeComponents}
            </div>
        )
    }
}
