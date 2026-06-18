import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

import express from 'express'
import jwt from 'jsonwebtoken'


const app=express();

app.post('/register',async (req,res)=>{
   const {email,password}=req.body;
   

})


app.listen(3000,()=>{
    console.log('server is running')
})