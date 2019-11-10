import React, { Component } from 'react'
import axios from 'axios'
import Episode from './Episode'

export default class EpisodeList extends Component {

    state = {
        episodeList: [],

    }

    componentDidMount() {
        this.refreshList()
    }

    refreshList = () => {
        axios.get('/api/episodes')
            .then((response) => {
                this.setState({ episodeList: response.data })
            })
    }

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
                {episodeComponents}
            </div>
        )
    }
}
