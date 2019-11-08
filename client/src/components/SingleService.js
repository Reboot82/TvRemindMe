
import React, { Component } from 'react'
import axios from 'axios'
import Show from './Shows'
import { Link } from 'react-router-dom';

/* Step 2
 * Rename this class to reflect the component being created
 *
 */
export default class SingleService extends Component {

    /* Step 3
    * Create a state for the component to store view data
    *
    */
    state = {
        name: '',
        showList: [],
    }

    refreshList = () => {
        const serviceId = this.props.match.params.serviceId
        axios.get(`/api/services/${serviceId}`)
            .then((response) => {
                this.setState(response.data)
            })
    }

    // componentDidMount() {
    // const serviceId = this.props.match.params.serviceId
    // axios.get(`/api/services/${serviceId}`)
    //     .then((res) => {
    //         console.log(res.data)
    //         const previousState = {...this.state}
    //         const newState = Object.assign({}, previousState, res.data)
    //          this.setState(newState)
    //     })

    //  axios.get(`api/shows/byServiceId/${serviceId})
    //      .then((res) => {
    //         console.log(res.data)
    //         const previousState = {...this.state}
    //         const newState = Object.assign({shows: []}, previousState, { shows: res.data })
    //          this.setState(newState)
    //     })
    // }

    componentDidMount() {
        const serviceId = this.props.match.params.serviceId
        axios.get(`/api/services/${serviceId}`)
            .then((res) => {
                this.setState(res.data)
            })
    }

    render() {
        return (
                <div>
                    <div>
                        <h1>{this.state.name}</h1>
                        <h3>Shows</h3>
                        {this.state.shows.map((show) => {
                            return (<p>{show.name}</p>)
                        })}
                        <Show showList={this.props.showList} />
                    </div>
                   
                    <span>
                        <Link to={"/"}>
                            <button>Home</button>
                        </Link>
                    </span>
                </div>

        )
    }
}
