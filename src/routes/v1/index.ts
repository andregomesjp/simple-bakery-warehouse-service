import express from 'express';
import asyncHandler from '../../helpers/asyncHandler';

const router = express.Router();

router.get(
  '/healthcheck',
  asyncHandler(async (req: express.Request, res) => {
    return res.send('success');
  }),  
);

export default router;