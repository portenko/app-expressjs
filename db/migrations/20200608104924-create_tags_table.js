'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      await queryInterface.createTable('tags',
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
      await queryInterface.addIndex('tags', ['name'], {name: 'idx-tags-name'}),
      await queryInterface.addIndex('tags', ['status'], {name: 'idx-tags-status'}),
      await queryInterface.addIndex('tags', ['type'], {name: 'idx-tags-type'}),
      await queryInterface.addIndex('tags', ['lang'], {name: 'idx-tags-lang'}),
      await queryInterface.addIndex('tags', ['sort'], {name: 'idx-tags-sort'}),
    ];
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tags');
  }
};
