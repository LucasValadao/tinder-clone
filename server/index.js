const PORT = 8000

const express = require('express')

const app = express()

app.get('/', (req,res))

app.listen(PORT, () => console.log('Server running on port ' + PORT))