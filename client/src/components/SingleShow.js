
import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

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
                this.setState(res.data)
            })
    }

    toggleUpdateShowForm = () => {
        const updatedShow = !this.state.updatedShow
        this.setState({ updatedShow })
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
        this.setState({ updatedShow })
    }

    render() {
        return (
            this.state.redirectToHome ? <Redirect to="/" /> :
                <div>
                    <div>
                        <h1>{this.state.name}</h1>
                        <h3>{this.state.location}</h3>
                    </div>
                    <span>
                        <button onClick={this.toggleUpdateShowForm}>
                            {this.state.updatedShow ? 'Hide' : 'Update Show'}
                        </button>
                        {this.state.updatedShow ? <form onSubmit={this.updateShow}>
                            <input type="text" value={this.state.updatedShow.name} name="name" placeholder="Name" onChange={this.handleInputChange} />
                            <input type="text" value={this.state.updatedShow.location} name="location" placeholder="Location" onChange={this.handleInputChange} />
                            <input type="submit" />
                        </form> : null}
                    </span>
                    <span>
                        <button onClick={this.deleteShow}>Delete</button>
                        <a href="/">
                            <button>Home</button>
                        </a>
                    </span>
                </div>

        )
    }
}
