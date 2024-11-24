import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import professorRoutes from './routes/professorRoutes.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
import { sequelize } from './models/index.js';
import { authenticateToken } from './middleware/authMiddleware.js';

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/professors', authenticateToken, professorRoutes);
app.use('/appointments', authenticateToken, appointmentRoutes);

// Database sync and server start
const PORT = process.env.PORT || 3030;
sequelize
    .sync()
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch((err) => console.error('Database connection error:', err));
