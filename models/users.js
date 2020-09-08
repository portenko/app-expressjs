'use strict';
module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        id: { type:DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
        username: { type:DataTypes.STRING, allowNull: false },
        password_hash: { type:DataTypes.STRING, allowNull: true },
        password_reset_token: { type:DataTypes.STRING, allowNull: true },
        email: { type:DataTypes.STRING, allowNull: false },
        first_name: { type:DataTypes.STRING, allowNull: true },
        last_name: { type:DataTypes.STRING, allowNull: true },
        status: { type:DataTypes.INTEGER(1), allowNull: false, defaultValue: 1 },
        role: { type:DataTypes.STRING, allowNull: true },
        lang: { type:DataTypes.STRING, allowNull: true, defaultValue: 'en' },
        verification_token: { type:DataTypes.STRING, allowNull: true },
        auth_token: { type:DataTypes.STRING, allowNull: true },
        created_at: { type:DataTypes.INTEGER.UNSIGNED, allowNull: false },
        updated_at: { type:DataTypes.INTEGER.UNSIGNED, allowNull: false },
    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    users.associate = function(models) {
        // associations can be defined here
    };
    return users;
};