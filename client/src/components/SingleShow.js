
import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

/* Step 2
 * Rename this class to reflect the component being created
 *
 */
export default class SingleShow extends Component {

    /* Step 3
    * Create a state for the component to store view data
    *
    */
    state = {
        name: this.name,
        location: this.location,
        episodes: [],
        showForm: true,
        updatedShow: {
            name: '',
            location: ''
        },
        redirectToHome: false
    }

    refreshList = () => {
        const showId = this.props.match.params.showId
        axios.get(`/api/shows/${showId}`)
            .then((response) => {
                this.setState(response.data)
            })
    }

    updateShow = (event) => {
        event.preventDefault()
        const showId = this.props.match.params.showId
        axios.put(`/api/shows/${showId}`, this.state.updatedShow)
            .then(() => {
                this.refreshList()
            })
    }

    componentDidMount() {
        const showId = this.props.match.params.showId
        axios.get(`/api/shows/${showId}`)
            .then((res) => {
                console.log(res.data)
                const previousState = { ...this.state }
                const newState = Object.assign({}, previousState, res.data)
                this.setState(newState)
            })

        axios.get(`api/episodes/byShowId/${showId}`)
            .then((res) => {
                console.log(res.data)
                const previousState = { ...this.state }
                const newState = Object.assign({ episodes: [] }, previousState, { episodes: res.data })
                this.setState(newState)
            })
    }


    toggleUpdateShowForm = () => {
        const showForm = !this.state.showForm
        this.setState({ showForm })
    }

    deleteShow = (event) => {
        event.preventDefault()
        const showId = this.props.match.params.showId
        axios.delete(`/api/shows/${showId}`)
            .then(() => {
                this.setState({ redirectToHome: true })
            })
    }

    handleInputChange = (event) => {
        const updatedShow = { ...this.state.updatedShow }
        updatedShow[event.target.name] = event.target.value
        this.setState({ updatedShow: updatedShow })
    }

    render() {
        return (
            this.state.redirectToHome ? <Redirect to="/" /> :
                <div>
                    <div>
                        <h1>{this.state.name}</h1>
                        <h4>{this.state.location}</h4>
                        <h3>Episodes</h3>
                        {this.state.episodes.map((episode) => {
                            return (
                                <div>
                                    <p>{episode.name}</p>
                                    <button>Watched!</button>
                                </div>)
                        })}
                    </div>
                    <span>
                        <button onClick={this.toggleUpdateShowForm}>
                            {this.state.showForm ? 'Update Show' : 'Hide'}
                        </button>
                        {this.state.showForm ? null : <form onSubmit={(event) => { this.updateShow(event); this.toggleUpdateShowForm() }}>
                            <input type="text" defaultValue={this.state.name} value={this.state.updatedShow.name} name="name" placeholder="Name" onChange={this.handleInputChange} />
                            <input type="text" defaultValue={this.state.location} value={this.state.updatedShow.location} name="location" placeholder="Location" onChange={this.handleInputChange} />
                            <input type="submit" />
                        </form>}
                    </span>
                    <span>
                        <button onClick={this.deleteShow}>Delete</button>
                        <Link to={"/"}>
                            <button>Home</button>
                        </Link>
                    </span>
                </div>

        )
    }
}
