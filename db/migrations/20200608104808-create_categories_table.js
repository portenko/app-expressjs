'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return [
            await queryInterface.createTable('categories',
                {
                    id: { type:Sequelize.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
                    name: { type:Sequelize.STRING, allowNull: false },
                    status: { type:Sequelize.BOOLEAN, allowNull: false, defaultValue: 1 },
                    type: { type:Sequelize.STRING, allowNull: true, defaultValue: 'posts' },
                    lang: { type:Sequelize.STRING, allowNull: true, defaultValue: 'en' },
                    sort: { type:Sequelize.INTEGER.UNSIGNED, allowNull: true },
                    created_at: { type:Sequelize.INTEGER.UNSIGNED, allowNull: false },
                    updated_at: { type:Sequelize.INTEGER.UNSIGNED, allowNull: false },
                }, {
                    createdAt: 'created_at',
                    updatedAt: 'updated_at'
                }),
            await queryInterface.addIndex('categories', ['name'], {name: 'idx-categories-name'}),
            await queryInterface.addIndex('categories', ['status'], {name: 'idx-categories-status'}),
            await queryInterface.addIndex('categories', ['type'], {name: 'idx-categories-type'}),
            await queryInterface.addIndex('categories', ['lang'], {name: 'idx-categories-lang'}),
            await queryInterface.addIndex('categories', ['sort'], {name: 'idx-categories-sort'}),
        ];
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('categories');
    }
};
