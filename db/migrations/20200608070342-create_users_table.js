'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
      return [
      await queryInterface.createTable('users',
{
            id: { type:Sequelize.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
            username: { type:Sequelize.STRING, allowNull: false },
            auth_token: { type:Sequelize.STRING, allowNull: true },
            password_hash: { type:Sequelize.STRING, allowNull: true },
            password_reset_token: { type:Sequelize.STRING, allowNull: true },
            email: { type:Sequelize.STRING, allowNull: false },
            first_name: { type:Sequelize.STRING, allowNull: true },
            last_name: { type:Sequelize.STRING, allowNull: true },
            status: { type:Sequelize.BOOLEAN, allowNull: false, defaultValue: 1 },
            role: { type:Sequelize.STRING, allowNull: true },
            lang: { type:Sequelize.STRING, allowNull: true, defaultValue: 'en' },
            verification_token: { type:Sequelize.STRING, allowNull: true },
            created_at: { type:Sequelize.INTEGER.UNSIGNED, allowNull: false },
            updated_at: { type:Sequelize.INTEGER.UNSIGNED, allowNull: false },
        }, {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }),
      await queryInterface.addIndex('users', ['username'], {name: 'idx-users-username'}),
      await queryInterface.addIndex('users', ['email'], {name: 'idx-users-email'}),
      await queryInterface.addIndex('users', ['status'], {name: 'idx-users-status'}),
      await queryInterface.addIndex('users', ['lang'], {name: 'idx-users-lang'}),
      await queryInterface.addIndex('users', ['role'], {name: 'idx-users-role'}),
      await queryInterface.addIndex('users', ['auth_token'], {name: 'idx-users-auth_token'}),

      await queryInterface.bulkInsert('users', [{
          username: 'admin',
          password_hash: '$2b$10$FxgU4/uFGaIxH874jxvg4esMZGCvEoj6IOKVjsRYO1YLBuKFLkVq2',
          email: 'some@mail.here',
          status: 1, // active
          role: 'admin',
          lang: 'en',
          created_at: Math.floor(Date.now() / 1000),
          updated_at: Math.floor(Date.now() / 1000)
      }], {})
      ];
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
