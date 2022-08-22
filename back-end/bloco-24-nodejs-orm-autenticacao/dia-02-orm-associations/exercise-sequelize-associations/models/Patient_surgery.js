const PatientSurgery = (sequelize, DataTypes) => {
  const PatientSurgery = sequelize.define('PatientSurgery', 
  {},
  {
    timestamps: false,
    tablename: 'PatientsSurgeries',
    underscored: true,
  });

  PatientSurgery.associate = (models) => {
    models.Surgery.belongsToMany(models.Patient, {
      as: 'patients',
      trough: PatientSurgery,
      foreignKey: 'sugery_id',
      otherKey: 'patient_id',
    });
    models.Patient.belongsToMany(models.Surgery, {
      as: 'surgeries',
      through: PatientSurgery,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    });
  };

  return Patient;
};