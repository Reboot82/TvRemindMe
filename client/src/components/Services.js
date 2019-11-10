import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


export default class Service extends Component {

    state = {
        serviceList: [],

    }

    componentDidMount() {
        this.refreshList()
    }

    refreshList = () => {
        axios.get('/api/services')
            .then((response) => {
                this.setState({ serviceList: response.data })
            })
    }

    createNewService = (event) => {
        event.preventDefault()
        axios.post('/api/services', this.state.newService)
            .then(() => {
                this.refreshList()
            })
    }


    /* Step 5
    *  The render function manages what is servicen in the browser
    *  TODO: delete the jsx returned
    *   and replace it with your own custom jsx template
    *
    */
    render() {
        const allServices = this.state.serviceList.map((service) => {
            return (
                <div>
                    <h2><Link to={`/services/${service._id}`} >
                        {service.name}
                    </Link></h2>

                </div>
            )
        })

        return (
            <div>
                <h1>Services</h1>
                <div>
                    {allServices}
                </div>
                <p><Link to={'/'}>Sort By Shows</Link></p>
            </div>
        )
    }
}