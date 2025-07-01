const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Comment extends Model {}
// Sequelize will create this table if it doesn't exist on startup
Comment.init(
  {
    comment: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: sequelizeInstance,
    modelName: "comments",
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = Comment;
