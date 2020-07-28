const express = require('express')
const mCtrl = require('./controllers/messages_controller.js')
const app = express();
app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))
const port = 3001;

app.post('/api/messages', mCtrl.createMessage)
app.get('/api/messages', mCtrl.getMessages)
app.put('/api/messages/:id', mCtrl.updateMessage)
app.delete('/api/messages/:id', mCtrl.deleteMessage)

app.listen(port, () => console.log(`Server listening on ${port}`))