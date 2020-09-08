'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      await queryInterface.createTable('menus',
          {
            id: { type:Sequelize.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
            code: { type:Sequelize.STRING, allowNull: false },
            name: { type:Sequelize.STRING, allowNull: false },
            data: { type:Sequelize.TEXT, allowNull: true },
            comment: { type:Sequelize.TEXT, allowNull: true },
            status: { type:Sequelize.BOOLEAN, allowNull: false, defaultValue: 1 },
            lang: { type:Sequelize.STRING, allowNull: true, defaultValue: 'en' },
            created_at: { type:Sequelize.INTEGER.UNSIGNED, allowNull: false },
            updated_at: { type:Sequelize.INTEGER.UNSIGNED, allowNull: false },
          }, {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
          }),
      await queryInterface.addIndex('menus', ['code'], {name: 'idx-menus-code'}),
      await queryInterface.addIndex('menus', ['name'], {name: 'idx-menus-name'}),
      await queryInterface.addIndex('menus', ['status'], {name: 'idx-menus-status'}),
      await queryInterface.addIndex('menus', ['lang'], {name: 'idx-menus-lang'}),
    ];
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('menus');
  }
};
