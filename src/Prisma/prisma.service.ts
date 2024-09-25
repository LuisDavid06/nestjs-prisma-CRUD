 import { Prisma, PrismaClient } from "@prisma/client";
 import { Injectable, OnModuleInit } from "@nestjs/common";


 @Injectable()
 export class PrismaService extends PrismaClient{
     
    async OnModuleInit(){
        await this.$connect();
    }

 }