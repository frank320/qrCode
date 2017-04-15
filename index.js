/**
 * Created by Frank on 2017/4/15.
 */
const express = require('express')
const app = express()

app.use('/assets', express.static(__dirname + '/assets'))

app.listen(80)