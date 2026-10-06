const messages = require("../models/messageData");

module.exports = {

    get : (req, res) => {
        res.send("new");
    },
    render : (req, res) => {
        res.render("new");
    },
    post : (req, res) => {
        messages.push({ text: req.body.message, user: req.body.name, added: new Date() });
        res.redirect("/")
    },
}