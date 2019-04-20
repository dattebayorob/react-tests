import React from 'react'
import Content from '../common/template/Content'
import ContentHeader from '../common/template/ContentHeader'
import { Component } from 'react'

class Dashboard extends Component{
    render(){
        return (
            <div>
                <ContentHeader title="Dashboard" small="V1.0"/>
                <Content>
                    Dashboard
                </Content>
            </div>
        )
    }
}

export default Dashboard