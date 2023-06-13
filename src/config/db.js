const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://admin:admin@cluster0.tgzsdkq.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Erro ao conectar ao MongoDB: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;



// const mongoose = require('mongoose');

// const uri = `mongodb+srv://admin:admin@cluster0.tgzsdkq.mongodb.net/?retryWrites=true&w=majority`;

// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const UsuarioSchema = new mongoose.Schema({
//   nome: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   senha: {
//     type: String,
//     required: true,
//   },
//   data_criacao: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Usuario = mongoose.model('Usuario', UsuarioSchema);

// module.exports = Usuario;

/* const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Erro ao conectar ao MongoDB: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB; */