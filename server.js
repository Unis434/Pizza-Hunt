const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect("mongodb+srv://Unis434:1SZOtDXe5ov5Tnj2@cluster0.qhy7b.mongodb.net/pizza-hunt?retryWrites=true&w=majority" || 'mongodb://localhost/pizza-hunt', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.use(require('./routes'));

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));