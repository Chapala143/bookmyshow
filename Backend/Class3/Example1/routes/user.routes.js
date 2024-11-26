import express from 'express';
import { getUserDetail, createUserDetail, updateUserDetail, deleteUserDetail } 
from '../controllers/user.controller.js';
import loggerMiddleware from '../middleware/logger.js';

const router = express.Router();

router.get('/:userId', getUserDetail);

router.post('/', createUserDetail);

router.put('/:userId', updateUserDetail);

router.delete('/:userId', deleteUserDetail);

export default router;