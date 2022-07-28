import express, {NextFunction, Request, Response} from 'express'
import 'express-async-errors'
import cors from 'cors'

import {router} from './routes'
import {StatusCodes} from 'http-status-codes';

const app = express()
const port = 3000;


app.use(express.json())
app.use(cors())
app.use(router)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            status: 'error',
            message: err.message
        })
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        status: 'error',
        message: 'Internal Server Error'
    });
})

app.listen(port, () => {
    console.info("Server initialized!")
})

