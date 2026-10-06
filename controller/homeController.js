const messages = require("../models/messageData");

module.exports = {

    get : (req, res) => {
        res.send("home");
    },
    render : (req, res) => {
        res.render("home", { messages: messages, link: "/new" });
    },
}