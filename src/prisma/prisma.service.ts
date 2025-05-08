import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {

    // Estabelece a conexão com o banco de dados
    async onModuleInit() {
        try {
            await this.$connect();
            console.log('Conectado ao banco de dados MySQL');
        } catch (error) {
            console.error('Erro ao conectar ao banco de dados:', error);
            throw new Error('Erro ao conectar ao banco de dados');
        }
    }

    // Desconecta a conexão do banco de dados quando o módulo for destruído
    async onModuleDestroy() {
        await this.$disconnect();
        console.log('Conexão com o banco de dados desconectada');
    }
}
