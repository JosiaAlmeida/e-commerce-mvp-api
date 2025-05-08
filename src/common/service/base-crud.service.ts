import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GenericService<T> {
    constructor(private readonly prisma: PrismaService) { }

    async findAll(model: string, options?: any): Promise<T[]> {
        return await this.prisma[model].findMany(options) as T[];
    }

    async findOne(model: string, id: number, options?: any): Promise<T> {
        const record = await this.prisma[model].findUnique({
            where: { id },
            ...options,
        });
        if (!record) {
            throw new NotFoundException(`${model} with ID ${id} not found`);
        }
        return record;
    }

    async create(model: string, data: any): Promise<T> {
        return this.prisma[model].create({ data });
    }

    async update(model: string, id: number, data: any): Promise<T> {
        const record = await this.prisma[model].findUnique({ where: { id } });
        if (!record) {
            throw new NotFoundException(`${model} with ID ${id} not found`);
        }
        return this.prisma[model].update({
            where: { id },
            data,
        });
    }

    async delete(model: string, id: number): Promise<T> {
        const record = await this.prisma[model].findUnique({ where: { id } });
        if (!record) {
            throw new NotFoundException(`${model} with ID ${id} not found`);
        }
        return this.prisma[model].delete({ where: { id } });
    }
}