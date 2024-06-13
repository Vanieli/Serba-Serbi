    import { DataTypes } from "sequelize";
    import db from "../config/Database.js";
    // const dtyp = DataTypes;

    const Fauna = db.define(
        "fauna",
        {
            // id: {
            //     allowNull: false,
            //     autoIncrement: true,
            //     primaryKey: true,
            //     validate: {
            //         notEmpty: true
            //     }
            // },
            nm_fauna: {
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
            tinggi: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            berat: {
                type:DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            }
        },
        {
            freezeTableName: true
        }
    );

    export default Fauna;

    (async () => {
        await db.sync();
    })();