const connectDB = require('./config/db');
const express = require('express')
var cors = require('cors')
connectDB();
const app = express()
const port = 5000
app.use(cors())

app.use(express.json())
//Available Routes

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.get('/', (req, res) => 
  res.send('Hello Mayur!')
),


app.listen(port, () => {
  console.log(`NoteBook Backend listening at http://localhost:${port}`)
})