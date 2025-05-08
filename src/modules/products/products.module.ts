import { Module } from '@nestjs/common';
import { GenericService } from 'src/common/service/base-crud.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductsController } from './products.controller';

@Module({
    controllers: [ProductsController],
    providers: [GenericService, PrismaService],
    exports: [GenericService, PrismaService]
})
export class ProductsModule { }