'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      await queryInterface.createTable('options',
          {
            id: { type:Sequelize.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
            code: { type:Sequelize.STRING, allowNull: false },
            name: { type:Sequelize.STRING, allowNull: false },
            value: { type:Sequelize.STRING, allowNull: false },
            data: { type:Sequelize.TEXT, allowNull: true },
            created_at: { type:Sequelize.INTEGER.UNSIGNED, allowNull: false },
            updated_at: { type:Sequelize.INTEGER.UNSIGNED, allowNull: false },
          }, {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
          }),
      await queryInterface.addIndex('options', ['code'], {name: 'idx-options-code'}),
      await queryInterface.addIndex('options', ['name'], {name: 'idx-options-name'}),
    ];
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('options');
  }
};
