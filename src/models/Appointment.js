import { DataTypes } from 'sequelize';

const AppointmentModel = (sequelize) => {
    return sequelize.define('Appointment', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        studentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        professorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        time: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('BOOKED', 'CANCELLED'),
            defaultValue: 'BOOKED',
        },
    });
};

export default AppointmentModel;
