import express from 'express';
import config from './config'
import cors from 'cors'

import userRoutes from './routes/user.routes'
import contractorRoutes from './routes/contractor.routes'
import salesRoutes from './routes/sales.routes'
import serviceRoutes from './routes/service.routes'
import articleRoutes from './routes/article.routes'
import bankAccountRoutes from './routes/bankAccount.routes'
import clientRoutes from './routes/client.routes'

const app = express();
app.use(cors());

app.set('port', config.port)

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(userRoutes)
app.use(contractorRoutes)
app.use(salesRoutes)
app.use(serviceRoutes)
app.use(articleRoutes)
app.use(bankAccountRoutes)
app.use(clientRoutes)


export default app;