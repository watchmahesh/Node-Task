const cors = require('cors');
const tasks = require('./task');


module.exports = (app) => {
    app.use('/task',  tasks);

};