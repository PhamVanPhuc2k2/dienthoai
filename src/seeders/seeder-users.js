"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        userName: "phuc",
        password: "123456",
        email: "phuc@gmail.com",
        fullName: "PhamVanPhuc",
        phoneNumber: "0868491679",
        address: "HungTien",
        gender: 1,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
