
import { Model, DataTypes,Sequelize } from 'sequelize';
import sequelize from '../config/Database.js'; // path ke konfigurasi database Sequelize Anda


export class Kelas extends Model {}

Kelas.init({
    // Asumsikan 'id' diatur sebagai primary key secara default oleh Sequelize
    nama: {
      type: DataTypes.STRING,
      allowNull: false
    },
    waktu: {
      type: DataTypes.ENUM('pg', 'sg'),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Kelas',
  
  });

  export class Murid extends Model {}

Murid.init({
  nama: DataTypes.STRING,
  gender: DataTypes.ENUM('L', 'P'),
  isBoyong: DataTypes.BOOLEAN,
  kelasId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Kelas,
      key: 'id',
    }}
  
}, {
  sequelize,
  modelName: 'Murid',
});


  
// Mendefinisikan hubungan
Kelas.hasMany(Murid, {
  foreignKey: 'kelasId',
  as: 'murids'
});
Murid.belongsTo(Kelas, {
  foreignKey: 'kelasId',
  as: 'kelas'
});

export default { Kelas, Murid, sequelize };
(async () => {
  await sequelize.sync({force:true});

  })();

