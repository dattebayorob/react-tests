import React, { Component } from 'react'
import { connect  } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field} from 'redux-form'
import LabelAndInput from '../common/form/LabelAndInput'
import { init } from './BillingCyclesActions'

class BillingCyclesForm extends Component{
    render(){
        const { handleSubmit, readOnly } = this.props
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={LabelAndInput}
                        label="Name" cols="12 4" placeHolder="Type a Name"
                        readOnly={readOnly}
                        />
                    <Field name="month" component={LabelAndInput}
                        type="number" label="Month" cols="12 4" placeHolder="Type a Month"
                        readOnly={readOnly}
                        />
                    <Field name="year" component={LabelAndInput}
                        type="number" label="Year" cols="12 4" placeHolder="Type the Year"
                        readOnly={readOnly}
                        />
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type="button" className="btn btn-default"
                        onClick={this.props.init}>Cancel</button>
                </div>
            </form>
        ) 
    }
}

BillingCyclesForm = reduxForm({form: 'billingCyclesForm',destroyOnUnmount: false})(BillingCyclesForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCyclesForm)