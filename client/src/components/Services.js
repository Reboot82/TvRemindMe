import React, { Component } from 'react'
import axios from 'axios'


export default class Service extends Component {

    state = {
        serviceList: [],

    }

    componentDidMount() {
        // get all shops and update state 'shopList' with results
        //    route for get all shops is '/api/shop'
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
                    <h2><Link to={`/${service._id}`} >
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
            </div>
        )
    }
}