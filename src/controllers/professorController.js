import { Availability } from '../models/index.js';

export const addAvailability = async (req, res) => {
    const { id: professorId } = req.params;
    const { date, time } = req.body;
    try {
        const availability = await Availability.create({ professorId, date, time });
        res.status(201).json(availability);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const getAvailability = async (req, res) => {
    const { id: professorId } = req.params;
    try {
        const slots = await Availability.findAll({ where: { professorId, isBooked: false } });
        res.json(slots);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
