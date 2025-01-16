import express from 'express'
import indexRouter from './routes/index.js'
import userRouter from './routes/user.js'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use('/', indexRouter )
app.use('/user', userRouter)

app.listen(3000, function() {
    console.log('port is running on 3000')
})