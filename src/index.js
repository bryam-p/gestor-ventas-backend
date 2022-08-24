import app from './app'
import './database/connection'

app.listen(app.get('port'))

console.log('Se esta ejecutando en el puerto', app.get('port'))