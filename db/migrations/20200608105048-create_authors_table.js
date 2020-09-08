'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      await queryInterface.createTable('authors',
          {
            id: { type:Sequelize.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
            name: { type:Sequelize.STRING, allowNull: false },
            pic: { type:Sequelize.STRING, allowNull: true },
            pic_alt: { type:Sequelize.STRING, allowNull: true },
            status: { type:Sequelize.BOOLEAN, allowNull: false, defaultValue: 1 },
            lang: { type:Sequelize.STRING, allowNull: true, defaultValue: 'en' },
            created_at: { type:Sequelize.INTEGER.UNSIGNED, allowNull: false },
            updated_at: { type:Sequelize.INTEGER.UNSIGNED, allowNull: false },
          }, {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
          }),
      await queryInterface.addIndex('authors', ['name'], {name: 'idx-authors-name'}),
      await queryInterface.addIndex('authors', ['status'], {name: 'idx-authors-status'}),
      await queryInterface.addIndex('authors', ['lang'], {name: 'idx-authors-lang'}),
    ];
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('authors');
  }
};
