import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { GenericService } from 'src/common/service/base-crud.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
    controllers: [UsersController],
    providers: [GenericService, PrismaService],
    exports: [GenericService, PrismaService]
})
export class UsersModule { }