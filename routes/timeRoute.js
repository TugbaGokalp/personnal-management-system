import express from 'express';

import * as timeController from '../controllers/timeController.js';

const router = express.Router();

// router.route('/').post(timeController.createTime);
// router.route('/').get(timeController.getAllTimes);

router.route('/').post(timeController.createTime).get(timeController.getAllTimes);

export default router;
