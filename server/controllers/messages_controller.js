const messages = []
let id = 0

module.exports = {
    createMessage: (req, res) => {
        const {text, time} = req.body;
        let newMessage = {
            id,
            text,
            time
        }
        messages.push(newMessage)
        id++
        res.status(200).send(messages)
    },
    getMessages: (req, res) => {
        res.status(200).send(messages)
    },
    updateMessage: (req, res) => {
        const index = messages.findIndex( elem => elem.id === +req.params.id)
        if (index === -1) {
            res.sendStatus(404)
        } else {
            messages[index].text = req.body.text
            res.status(200).send(messages)
        }
    },
    deleteMessage: (req, res) => {
        const toDelete = messages.findIndex( elem => elem.id === +req.params.id)
        if (toDelete === -1) {
            res.status(404).send("Message not found, verify id.")
        } else {
            messages.splice(toDelete, 1)
            res.status(200).send(messages)
        }
    }
}