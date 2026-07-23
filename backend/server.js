const app = require('./app');
const sequelize = require('./config/database');

//import model agar dikenali sequelize
require('./models/Produk');
require('./models/Transaksi');
require('./models/User');

const PORT = process.env.PORT || 3000;

//menyinkronkan model dengan database, kemudian menjalankan server
sequelize.sync({force: false}) // force: true akan menghapus tabel lama dan membuat tabel baru
  .then(() => {
    console.log('database berhasil tersinkronisasi');
    app.listen(PORT, () => {
      console.log(`Server berhasil berjalan di port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Gagal menyinkronkan database:', error);
  });


