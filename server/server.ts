import express from 'express';
import cors from 'cors'
import routes from './src/router'

const app: express.Application = express();
app.use(cors())

app.use('/api',routes)

app.listen(8000);