import { Module } from '@nestjs/common';
import { GenericService } from 'src/common/service/base-crud.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaymentsController } from './payments.controller';

@Module({
    controllers: [PaymentsController],
    providers: [GenericService, PrismaService],
    exports: [GenericService, PrismaService]
})
export class PaymentsModule { }