import express from 'express';
import { json } from 'body-parser';

import routesV1 from './routes/v1';

const port = process.env.PORT || 3000;

const app = express();
app.use(json());
// Routes
app.use('/v1', routesV1);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});