import express from 'express';
import { addAvailability, getAvailability } from '../controllers/professorController.js';

const router = express.Router();

router.post('/:id/availability', addAvailability);
router.get('/:id/availability', getAvailability);

export default router;
