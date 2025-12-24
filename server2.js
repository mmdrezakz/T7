const express = require('express')
const app = express()

app.use(express.json()) // برای پارس کردن JSON
const array =[]
app.get('/about', (req, res) => {
  array.map((item , index)=>{

      res.write( index + " : " + item.name)
  })
  res.end()
})
app.post('/about', (req, res) => {
  console.log('📦 Body received:', req.body.name) // اینجا توی کنسول چاپ میشه
  array.push(req.body)
  res.send('Body logged in console!')
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})