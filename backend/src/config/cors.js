module.exports = (req,res, next) => {
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allowed-Methods', 'GET,POST,PUT,DELETE,OPTIONS,PATCH')
    res.header('Access-Control-Allowed-Headers','Origin, X-Request-With, Content-Type,Accept')
    next()
}