'use strict';
module.exports = (sequelize, DataTypes) => {
    var Categories = sequelize.define('categories', {
        id: { type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
        // name: { type:DataTypes.VARCHAR, allowNull: false },
        // status: { type:DataTypes.INTEGER(1), allowNull: false },
        // type: { type:DataTypes.INTEGER(1), allowNull: false },
        //id: {type:DataTypes.INTEGER, primaryKey: true},
        name: DataTypes.STRING,
        status: DataTypes.INTEGER,
        type: DataTypes.STRING,
        lang: DataTypes.STRING,
        sort: DataTypes.INTEGER,
        created_by: DataTypes.INTEGER,
        created_at: DataTypes.INTEGER,
        updated_at: DataTypes.INTEGER,
    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    return Categories;
};