const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/EmployeeDB', { useNewUrlParser: true }, (err) => { // for local DB
mongoose.connect('mongodb+srv://dawar:dawar@cluster0-8gafo.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
        if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');

