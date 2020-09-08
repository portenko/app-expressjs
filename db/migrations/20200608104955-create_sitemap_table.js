'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      await queryInterface.createTable('sitemap',
          {
            id: { type:Sequelize.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
            loc: { type:Sequelize.STRING, allowNull: false },
            lastmod: { type:Sequelize.INTEGER.UNSIGNED, allowNull: true },
            changefreq: { type:Sequelize.STRING, allowNull: true },
            priority: { type:Sequelize.STRING, allowNull: true, defaultValue: '0.8' },
            created_at: { type:Sequelize.INTEGER.UNSIGNED, allowNull: false },
            updated_at: { type:Sequelize.INTEGER.UNSIGNED, allowNull: false },
          }, {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
          }),
      await queryInterface.addIndex('sitemap', ['loc'], {name: 'idx-sitemap-loc'}),
      await queryInterface.addIndex('sitemap', ['lastmod'], {name: 'idx-sitemap-lastmod'}),
      await queryInterface.addIndex('sitemap', ['priority'], {name: 'idx-sitemap-priority'}),
    ];
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sitemap');
  }
};
