import expressLoader from './express.js';
import mongoLoader from './mongo.js';
import router from '../api/index.js';

export default async ( app ) => {
    await expressLoader(app);
    console.log('Express Initialized');
    await mongoLoader(app);
    console.log('Mongo Initialized');
    
    app.use('/', router);
}