import express from "express"
import { PrismaClient } from '@prisma/client'
import expressSession from 'express-session'
import { PrismaSessionStore } from '@quixo3/prisma-session-store'
import { IPrisma } from "@quixo3/prisma-session-store/dist/@types";
import APIRouter from './api';

const app = express();

const prisma = new PrismaClient()

app.use(
    expressSession({
        cookie: {
            maxAge: 7 * 24 * 60 * 60 * 1000 // ms
        },
        secret: 'IJUFHASKDHSAKDHSALKIUDHLIAUYDWUYDOIADHYAIWO',
        store: new PrismaSessionStore(
            prisma as unknown as IPrisma,
            {
                checkPeriod: 2 * 60 * 1000, // ms
                dbRecordIdIsSessionId: true,
                dbRecordIdFunction: undefined,
            }
        )
    })
);

// import middleware here

// Routes
app.use("/api", APIRouter);

// connect 2 prisma
prisma.$connect()

export { prisma };

module.exports = app;
