const Plan = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    plan_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    coverage: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    timestamps: false,
    tablename: 'Plans',
    underscored: true,
  });

  Plan.associate = (models) => {
    Plan.hasMany(models.Patient, { foreignKey: 'plan.id', as: 'patient' })
  };

  return Plan;
};

module.exports = Plan;