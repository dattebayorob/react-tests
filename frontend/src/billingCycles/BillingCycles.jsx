import React from 'react'
import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Content from '../common/template/Content'
import ContentHeader from '../common/template/ContentHeader'
import Tabs from '../common/tab/Tabs'
import TabHeader from '../common/tab/TabHeader'
import TabsHeader from '../common/tab/TabsHeader'
import TabsContent from '../common/tab/TabsContent'
import TabContent from '../common/tab/TabContent'
import {selectTab,showTabs} from '../common/tab/TabActions'
import BillingCyclesList from './BillingCyclesList';
import BillingCyclesForm from './BillingCyclesForm';
import { create, update, remove } from './BillingCyclesActions'


class BillingCycles extends Component{
    componentWillMount() {
        if(!this.props.tab.selected)
            this.props.selectTab('tabList')
        this.props.showTabs('tabList','tabCreate')
    }
    render(){
        return (
            <div>
                <ContentHeader title="Billing Cycles" small="Checkout your pocket"/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="List" icon="bars" target="tabList" />
                            <TabHeader label="Insert" icon="plus" target="tabCreate" />
                            <TabHeader label="Updated" icon="pencil" target="tabUpdate" />
                            <TabHeader label=" Delete" icon="trash" target="tabDelete" />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList">
                                <BillingCyclesList />
                            </TabContent>
                            <TabContent id="tabCreate">
                                <BillingCyclesForm onSubmit={this.props.create}
                                    submitClass="primary" submitLabel="Create"/>                            
                                    </TabContent>
                            <TabContent id="tabUpdate">
                                <BillingCyclesForm onSubmit={this.props.update} 
                                    submitClass="info" submitLabel="Update"/>                            
                                    </TabContent>
                            <TabContent id="tabDelete">
                                <BillingCyclesForm onSubmit={this.props.remove} readOnly={true}
                                    submitClass="danger" submitLabel="Delete"/>                            
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({tab: state.tab})
const mapDispatchToProps = dispatch => bindActionCreators({selectTab,showTabs,create,update,remove}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(BillingCycles)