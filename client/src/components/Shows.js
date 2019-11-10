
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


/* Step 2
 * Rename this class to reflect the component being created
 *
 */
export default class Show extends Component {

    /* Step 3
    * Create a state for the component to store view data
    *
    */
    state = {
        showList: [],
        newShowForm: true,
        newShow: {
            name: '',
            location: ''
        },
    }

    /* Step 4
    * Use componentDidMount to retrieve any data to display
    *   Here you can make calls to your local express server
    *   or to an external API
    *   setState can be run here as well
    *   -REMINDER remember `setState` it is an async function
    */

    componentDidMount() {
        this.refreshList()
    }

    refreshList = () => {
        axios.get('/api/shows')
            .then((response) => {
                this.setState({ showList: response.data })
            })
    }

    createNewShow = (event) => {
        event.preventDefault()

        axios.post('/api/shows', this.state.newShow)
            .then(() => {
                this.refreshList()
            })
    }

    toggleNewShowForm = () => {
        const newShowForm = !this.state.newShowForm
        this.setState({ newShowForm })
    }

    handleInputChange = (event) => {
        const newShow = { ...this.state.newShow }
        newShow[event.target.name] = event.target.value
        this.setState({ newShow: newShow })
    }


    /* Step 5
    *  The render function manages what is shown in the browser
    *  TODO: delete the jsx returned
    *   and replace it with your own custom jsx template
    *
    */
    render() {
        const allShows = this.state.showList.map((show) => {
            return (
                <div>
                    <h2><Link to={`/${show._id}`} >
                        {show.name}
                    </Link></h2>

                </div>
            )
        })

        return (
            <div>
                <h1>Shows</h1>
                <div>
                    {allShows}
                </div>
                <span>
                    <button onClick={this.toggleNewShowForm}>
                        {this.state.newShowForm ? 'New Show' : 'Hide'}
                    </button>
                    {this.state.newShowForm ? null : <form onSubmit={(event) => {this.createNewShow(event); this.toggleNewShowForm()}}>
                        <input type="text" value={this.state.newShow.name} name="name" placeholder="Name" onChange={this.handleInputChange} />
                        <input type="text" value={this.state.newShow.location} name="location" placeholder="Location" onChange={this.handleInputChange} />
                        <input type="submit" />
                    </form>}
                    <p><Link to={'./services'}>Sort By Service</Link></p>
                </span>
            </div>
        )
    }
}