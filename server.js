const jsonServer = require('json-server')
const auth = require('json-server-auth')
const app = jsonServer.create()
const router = jsonServer.router('./db.json')
const middlewares = jsonServer.defaults({noCors:true})
var cors = require("cors");
const rules = auth.rewriter({
    "root-equation":660,
    "linear":660,
    "polation":660,
    "linearRegression":660
})
app.db = router.db
app.use(cors())
app.use(rules)
app.use(auth)
app.use(middlewares);  
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./api-docs-internal.json');
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(router)
app.listen(process.env.PORT || 3002,()=>
{
    console.log("NUMERICAL JSON SERVER is running!!");
})