const Surgery = (sequelize, DataTypes) => {
  const Surgery = sequelize.define('Surgery', {
    surgery_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    specialty: {
      type: DataTypes.STRING,
    },
    doctor: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    tablename: 'Surgeries',
    underscored: true,
  });

  return Surgery;
};