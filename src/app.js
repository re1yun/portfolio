// app.js: beginning of the application
import loaders from './loaders/index.js';
import express from 'express';

async function startServer() {
    const app = express();

    await loaders(app);

    app.listen(3000, err => {
        if(err) {
            console.log(err);
            return;
        }
        console.log('server is running!');
    });
}

startServer();