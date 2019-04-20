import React from 'react'
import { Component } from 'react'
import Content from '../common/template/Content'
import ContentHeader from '../common/template/ContentHeader'

export default class extends Component{
    render(){
        return (
            <div>
                <ContentHeader title="Billing Cycles" small="Checkout your pocket"/>
                <Content>
                    Billing Cycles
                </Content>
            </div>
        )
    }
}