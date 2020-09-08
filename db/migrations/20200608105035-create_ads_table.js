'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return [
            await queryInterface.createTable('ads',
                {
                    id: { type:Sequelize.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
                    code: { type:Sequelize.STRING, allowNull: false },
                    name: { type:Sequelize.STRING, allowNull: true },
                    value: { type:Sequelize.STRING, allowNull: false },
                    data: { type:Sequelize.TEXT, allowNull: true },
                    status: { type:Sequelize.BOOLEAN, allowNull: false, defaultValue: 1 },
                    lang: { type:Sequelize.STRING, allowNull: true, defaultValue: 'en' },
                    is_unlimited: { type:Sequelize.BOOLEAN, allowNull: false, defaultValue: 0 },
                    date_from: { type:Sequelize.INTEGER.UNSIGNED, allowNull: true },
                    date_to: { type:Sequelize.INTEGER.UNSIGNED, allowNull: true },
                    created_at: { type:Sequelize.INTEGER.UNSIGNED, allowNull: false },
                    updated_at: { type:Sequelize.INTEGER.UNSIGNED, allowNull: false },
                }, {
                    createdAt: 'created_at',
                    updatedAt: 'updated_at'
                }),
            await queryInterface.addIndex('ads', ['code'], {name: 'idx-ads-code'}),
            await queryInterface.addIndex('ads', ['name'], {name: 'idx-ads-name'}),
            await queryInterface.addIndex('ads', ['status'], {name: 'idx-ads-status'}),
            await queryInterface.addIndex('ads', ['lang'], {name: 'idx-ads-lang'}),
            await queryInterface.addIndex('ads', ['is_unlimited'], {name: 'idx-ads-is_unlimited'}),
            await queryInterface.addIndex('ads', ['date_from'], {name: 'idx-ads-date_from'}),
            await queryInterface.addIndex('ads', ['date_to'], {name: 'idx-ads-date_to'}),
        ];
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('ads');
    }
};
