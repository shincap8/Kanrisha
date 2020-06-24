require('dotenv').config();
const app = require('./server');
require('./database');

/**
 * file to start the server and run the api
 */
app.listen(app.get('port'), () => {
  console.log('server on ', app.get('port'));
});
