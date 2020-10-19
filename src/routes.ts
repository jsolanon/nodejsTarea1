import { Express } from 'express';

import health_controller from './controllers/health.controller';
import hospi_controller from './controllers/hospital.controller';

//variable app de tipo Express
const routes = (app: Express):void => {
    app.use('/v1/health', health_controller);
    app.use('/v1/hospi', hospi_controller);
};

export default routes;