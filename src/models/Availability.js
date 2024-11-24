import { DataTypes } from 'sequelize';

const AvailabilityModel = (sequelize) => {
    return sequelize.define('Availability', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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
        isBooked: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    });
};

export default AvailabilityModel;
