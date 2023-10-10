import { PrismaClient } from '@prisma/client';
import express from 'express';
import { Request, Response } from 'express';

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.post(`/api/products/add`, async (req , res) => {
    const { name, type, unit, rate } = req.body
    const result = await prisma.product.create({
      data: {
        name,
        type,
        unit,
        rate,
      },
    })
    res.json(result)
  })

const server = app.listen(5000, () =>
  console.log(`
🚀 Server ready at: http://localhost:5000`),
)