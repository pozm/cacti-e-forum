import * as Express from 'express';

import Bodyparser from "body-parser";
import UseRouter from './user'
const Route = Express.Router()

Route.use(Bodyparser.json({
    limit: '10kb',
    strict: true,
}), Bodyparser.urlencoded({
    limit: '3kb',
    parameterLimit: 4,
    extended: true
}))

// routes
Route.use(UseRouter)

// testing and error handling
Route.get("/", (_: Express.Request, res : Express.Response) => {
    res.send("ok skid")
})
Route.all("/*", (_, res) => {
    res.status(404).json({ error: 1, message: "invalid endpoint" })
})
Route.use(function (err: Express.ErrorRequestHandler, req :Express.Request, res: Express.Response, next : Express.NextFunction) {
    if (Array.isArray(err)) {
        res.status(500).json({
            c: err[0], // err code
            d: {}, // data
            m: err[1] // err message
        })
        return next();
    }

    console.error(`Got error from : ${req.originalUrl} : ${req.ip}\nError:${err}`)
    res.status(500).send('what')
    next()
})

export default Route;
