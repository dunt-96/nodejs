module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn("Users", "image", {
        type: Sequelize.BLOB("long"),
        allowNull: true,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn("Users", "image", {
        type: Sequelize.BLOB,
        allowNull: true,
      }),
    ]);
  },
};

//add column
// module.exports = {
//     up: (queryInterface, Sequelize) => {
//       return Promise.all([
//         queryInterface.addColumn(
//           'Users',
//           'avatar',
//           {
//             type: Sequelize.STRING
//           }
//         ),
//         queryInterface.addColumn(
//           'tableName',
//           'columnName2',
//           {
//             type: Sequelize.STRING
//           }
//         ),
//       ]);
//     },

//     down: (queryInterface, Sequelize) => {
//       return Promise.all([
//         queryInterface.removeColumn('tableName', 'columnName1'),
//         queryInterface.removeColumn('tableName', 'columnName2')
//       ]);
//     }
//   };
