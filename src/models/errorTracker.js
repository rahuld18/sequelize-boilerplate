module.exports = (sequelize, DataTypes) => {
  const ErrorTracker = sequelize.define(
    "ErrorTracker",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      req: {
        type: DataTypes.JSON,
      },

      res: {
        type: DataTypes.JSON,
      },
      error: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.TEXT,
      },

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: true,

      freezeTableName: true,
      tableName: "error_tracker",
    }
  );
  ErrorTracker.associate = function (models) {};
  return ErrorTracker;
};
