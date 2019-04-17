const BillingCycle = require('./billingCycles')

BillingCycle.methods(['get','post','put','delete'])
BillingCycle.updateOptions({new: true, runValidators: true}) //By Default, validations are only on post

BillingCycle.route('count',(req,res,next) => {
    BillingCycle.count((error,value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        }else{
            res.json({value})
        }
    })
})

module.exports = BillingCycle