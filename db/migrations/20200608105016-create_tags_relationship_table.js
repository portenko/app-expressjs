'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      await queryInterface.createTable('tags_relationship',
          {
            id: { type:Sequelize.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
            tag_id: { type:Sequelize.INTEGER.UNSIGNED, allowNull: false },
            rel_id: { type:Sequelize.INTEGER.UNSIGNED, allowNull: false },
            type: { type:Sequelize.STRING, allowNull: true, defaultValue: 'posts' },
            created_at: { type:Sequelize.INTEGER.UNSIGNED, allowNull: false },
            updated_at: { type:Sequelize.INTEGER.UNSIGNED, allowNull: false },
          }, {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
          }),
      await queryInterface.addIndex('tags_relationship', ['tag_id'], {name: 'idx-tags_relationship-tag_id'}),
      await queryInterface.addIndex('tags_relationship', ['rel_id'], {name: 'idx-tags_relationship-rel_id'}),
      await queryInterface.addIndex('tags_relationship', ['type'], {name: 'idx-tags_relationship-type'}),
    ];
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tags_relationship');
  }
};
