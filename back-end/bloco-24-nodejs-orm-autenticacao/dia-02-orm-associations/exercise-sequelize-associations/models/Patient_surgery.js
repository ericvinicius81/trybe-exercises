const PatientSurgery = (sequelize, DataTypes) => {
  const PatientSurgery = sequelize.define('Patient_surgery',
    {},
    { 
      timestamps: false,
      tableName: 'Patienty_surgeries',
      underscored: true,
    },
  );

  PatientSurgery.associate = (models) => {
    models.Surgery.belongsToMany(models.Patient, {
      as: 'patients',
      through: PatientSurgery,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
    });
    models.Patient.belongsToMany(models.Surgery, {
      as: 'surgeries',
      through: PatientSurgery,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    });
  };

  return PatientSurgery;
};

module.exports = PatientSurgery;