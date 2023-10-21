import expressLoader from './express.js';
import router from '../api/index.js';

export default async ( app ) => {
    await expressLoader(app);
    console.log('Express Initialized');

    app.use('/', router);
}