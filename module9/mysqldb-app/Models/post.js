const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Post extends Model {}
// Sequelize will create this table if it doesn't exist on startup
Post.init(
  {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     Likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize: sequelizeInstance,
    modelName: "posts",
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = Post;
