import express from 'express';
import { registerToNewsteller, unsubscribeFromNewsteller } from '../controllers/newsteller.controller.js';

const router = express.Router();

router.post('/', registerToNewsteller);
router.get('/unsubscribe/:email', unsubscribeFromNewsteller);


export default router;
