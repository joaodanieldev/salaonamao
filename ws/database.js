const mongoose = require('mongoose');
const URI = 'mongodb+srv://salaoUser:U8Qt0ziRZepJDRhq@clusterdev.lmh99.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'; 

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose
  .connect(URI)
  .then(() => console.log('DB is UP'))
  .catch(() => console.log(err));