import { DataTypes } from "sequelize";
import db from "../config/Database.js";
// const dtyp = DataTypes;

const Flora = db.define(
    "flora",
    {
        nm_flora: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        geografis: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        age: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        jenis_daun: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        jenis_batang: {
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        jenis_akar: {
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
    },
    {
        freezeTableName: true
    }
);

export default Flora;

(async () => {
    await db.sync();
})();