'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      await queryInterface.createTable('posts',
          {
            id: { type:Sequelize.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
            category_id: { type:Sequelize.INTEGER.UNSIGNED, allowNull: false },
            name: { type:Sequelize.STRING, allowNull: false },
            url_slug: { type:Sequelize.STRING, allowNull: true },
            lead: { type:Sequelize.STRING, allowNull: true },
            content: { type:Sequelize.TEXT, allowNull: true },
            cover: { type:Sequelize.STRING, allowNull: true },
            cover_alt: { type:Sequelize.STRING, allowNull: true },
            status: { type:Sequelize.BOOLEAN, allowNull: false, defaultValue: 1 },
            type: { type:Sequelize.STRING, allowNull: true, defaultValue: 'posts' },
            lang: { type:Sequelize.STRING, allowNull: true, defaultValue: 'en' },
            meta_title: { type:Sequelize.STRING(65), allowNull: true, },
            meta_description: { type:Sequelize.STRING(120), allowNull: true },
            meta_keywords: { type:Sequelize.STRING, allowNull: true, },
            alternate_id: { type:Sequelize.INTEGER.UNSIGNED, allowNull: true },
            sort: { type:Sequelize.INTEGER.UNSIGNED, allowNull: true },
            author_id: { type:Sequelize.INTEGER.UNSIGNED, allowNull: true },
            recommended_posts: { type:Sequelize.STRING, allowNull: true },
            publish_at: { type:Sequelize.INTEGER.UNSIGNED, allowNull: false },
            created_at: { type:Sequelize.INTEGER.UNSIGNED, allowNull: false },
            updated_at: { type:Sequelize.INTEGER.UNSIGNED, allowNull: false },
          }, {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
          }),
      await queryInterface.addIndex('posts', ['category_id'], {name: 'idx-posts-category_id'}),
      await queryInterface.addIndex('posts', ['name'], {name: 'idx-posts-name'}),
      await queryInterface.addIndex('posts', ['url_slug'], {name: 'idx-posts-url_slug'}),
      await queryInterface.addIndex('posts', ['status'], {name: 'idx-posts-status'}),
      await queryInterface.addIndex('posts', ['type'], {name: 'idx-posts-type'}),
      await queryInterface.addIndex('posts', ['lang'], {name: 'idx-posts-lang'}),
      await queryInterface.addIndex('posts', ['alternate_id'], {name: 'idx-posts-alternate_id'}),
      await queryInterface.addIndex('posts', ['sort'], {name: 'idx-posts-sort'}),
      await queryInterface.addIndex('posts', ['author_id'], {name: 'idx-posts-author_id'}),
      await queryInterface.addIndex('posts', ['publish_at'], {name: 'idx-posts-publish_at'}),
    ];
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('posts');
  }
};
