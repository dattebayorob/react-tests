import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './DashboardActions'
import Content from '../common/template/Content'
import ContentHeader from '../common/template/ContentHeader'
import ValueBox from '../common/widget/ValueBox'
import Row from '../common/layout/Row'


class Dashboard extends Component{
    componentWillMount(){
        this.props.getSummary()
    }

    render(){
        const { credit, debit } = this.props.summary
        return (
            <div>
                <ContentHeader title="Dashboard" small="V1.0"/>
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank'
                            value={`R$ ${credit}`} text='Total of credits' />
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={`R$ ${debit}`} text='Total of Debits' />
                        <ValueBox cols='12 4' color='blue' icon='money'
                            value={`R$ ${credit - debit}`} text='Consolidated values' />
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)