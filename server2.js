const express = require('express')
const app = express()

app.use(express.json()) // برای پارس کردن JSON
let array =[{
    "id":1,
  "name": "Mohammadrez2a3",
  "age": 253
},
{
    "id":2,
  "name": "Mohzcx",
  "age": 213
},
{
    "id":3,
  "name": "asdasd",
  "age": 25
},
{
    "id":4,
  "name": "ghgfhdh",
  "age": 34
}
]
app.get('/about', (req, res) => {
array.map((item , index)=>{
  res.write(index + " : " + item.name)
})
res.end()

})
app.post('/about', (req, res) => {
  array.push(req.body)
  console.log('📦 Body received:', req.body) // اینجا توی کنسول چاپ میشه
  res.send('Body logged in console!')
})
app.put('/about/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const item = array.find(i => i.id === id)

  if(item){
    Object.assign(item, req.body)
    console.log('📦 Body received:', req.body)
    return res.send('Updated successfully!')
  } else {
    return res.status(404).send("Not Found")
  }
})
app.delete('/about/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const item = array.find(i => i.id === id)

  if(item){
    array = array.filter(i =>i.id !== id)
    console.log('📦 Body deleted:', item)
    return res.send('delete successfully!')
  } else {
    return res.status(404).send("Not Found")
  }
})
app.get('/about/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const item = array.find(i => i.id === id)
  if (item) {
  return res.send(item.name)
} else {
  return res.status(404).send("Not Found")
}


  
})
app.listen(3000, () => {
  console.log('Server running on port 3000')
})