import express from 'express';
import { get_courier_price } from '../controllers/CourierPriceController.js';
const router = express.Router();

router.get('/master',get_courier_price);
export default router;