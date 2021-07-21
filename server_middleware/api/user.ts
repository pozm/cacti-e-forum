import * as Express from 'express';
import { prisma } from "~/server_middleware";

const Route = Express.Router()

Route.get('/Current', (_, res) => {
    return res.json(prisma.user.findFirst({
        where: {
            Id: 1
        }
    }))
})

export default Route;
