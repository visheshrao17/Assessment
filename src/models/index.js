import { Sequelize } from 'sequelize';
import UserModel from './User.js';
import AvailabilityModel from './Availability.js';
import AppointmentModel from './Appointment.js';

export const sequelize = new Sequelize("postgresql://unqie_test_user:yasoE4n9cVnL2wtgoYjcSx98ZylGGom3@dpg-ct1idkogph6c73bis4b0-a.oregon-postgres.render.com/unqie_test", {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});


export const User = UserModel(sequelize);
export const Availability = AvailabilityModel(sequelize);
export const Appointment = AppointmentModel(sequelize);

User.hasMany(Appointment, { foreignKey: 'studentId' });
User.hasMany(Availability, { foreignKey: 'professorId' });
Availability.belongsTo(User, { foreignKey: 'professorId' });
