import {Request, Response, Router} from "express"

const router = Router()

router.get('/teste', (req: Request, res: Response) => {
    throw new Error('Message test 55 99');
})

export {router}