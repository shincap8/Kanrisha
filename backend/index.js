require('dotenv').config();
const app = require('./server');
require('./database');

app.listen(app.get('port'), () => {
  console.log('server on ', app.get('port'));
});
