import React, { Component } from 'react';

export default class Test extends Component{
    state = {
        people: {
            name: 'Robson',
            address: {
                road: '03',
                district: 'Pedras',
                city: 'Fortaleza',
                state: {
                    name: 'Ceara',
                    initials: 'CE'
                }
            }
        }
    }
    componentDidMount(){

    }

    deStructuring  = () => {
        const {name,address: {road},address:{state:{initials}}} = this.state.people
        console.log(name)
        console.log(road)
        console.log(initials)
    }

    rest = () => {
        const { name, ...rest} = this.state.people
        console.log(name)
        console.log(rest)
    }

    spread = () => {
        const address = { ...this.state.people.address }
        const bb = { ...this.state.people, name: "Sarah"}
        console.log(address)
        console.log(bb)
    }

    render(){
        this.deStructuring()
        console.log("+++++++++++++++++++++")
        this.rest()
        console.log("+++++++++++++++++++++")
        this.spread()
        return (
            <h1>Tests</h1>
        )
    }
}