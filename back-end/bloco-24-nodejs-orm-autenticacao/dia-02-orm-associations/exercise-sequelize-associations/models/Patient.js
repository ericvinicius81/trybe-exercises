const Patient = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    patient_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fullname: {
      type: DataTypes.STRING,
    },
    plan_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  },
  {
    timestamps: false,
    tablename: 'Patients',
    underscored: true,
  });

  Patient.associate = (models) => {
    Patient.belongsTo(models.Plan, { foreignKey: 'plan.id', as: 'plans' });
  };

  return Patient;
};