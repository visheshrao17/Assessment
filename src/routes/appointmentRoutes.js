import express from 'express';
import { bookAppointment, cancelAppointment, getAppointments } from '../controllers/appointmentController.js';

const router = express.Router();

router.post('/', bookAppointment);
router.delete('/:id', cancelAppointment);
router.get('/', getAppointments);

export default router;
