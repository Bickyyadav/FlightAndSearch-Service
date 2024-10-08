const express = require('express');
const { PORT } = require('./config/serverConfig')

const setupAndStartServer = async () => {

    const app = express();
    app.listen(PORT, ()=> {
        console.log(`Server started at port number ${PORT}`);
    })

}

setupAndStartServer();  