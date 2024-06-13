import { DataTypes } from "sequelize";
import db from "../config/Database.js";
// const dtyp = DataTypes;

const KeajaibanDunia = db.define(
    "keajaiban_dunia",
    {
        nm_wonderful: {
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
        tahun_dibangun: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        negara: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        deskripsi: {
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }
)

export default KeajaibanDunia;