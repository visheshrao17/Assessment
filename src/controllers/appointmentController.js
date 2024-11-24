import { Appointment, Availability } from '../models/index.js';

export const bookAppointment = async (req, res) => {
    const { professorId, date, time } = req.body;
    const { id: studentId } = req.user;

    try {
        const slot = await Availability.findOne({ where: { professorId, date, time, isBooked: false } });
        if (!slot) return res.status(400).json({ message: 'Slot unavailable' });

        slot.isBooked = true;
        await slot.save();

        const appointment = await Appointment.create({ studentId, professorId, date, time, status: 'BOOKED' });
        res.status(201).json(appointment);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const cancelAppointment = async (req, res) => {
    const { id: appointmentId } = req.params;

    try {
        const appointment = await Appointment.findByPk(appointmentId);
        if (!appointment) return res.status(404).json({ message: 'Appointment not found' });

        appointment.status = 'CANCELLED';
        await appointment.save();

        const slot = await Availability.findOne({ where: { professorId: appointment.professorId, date: appointment.date, time: appointment.time } });
        slot.isBooked = false;
        await slot.save();

        res.json({ message: 'Appointment cancelled' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const getAppointments = async (req, res) => {
    const { id, role } = req.user;

    try {
        const whereClause = role === 'PROFESSOR' ? { professorId: id } : { studentId: id };
        const appointments = await Appointment.findAll({ where: whereClause });
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
