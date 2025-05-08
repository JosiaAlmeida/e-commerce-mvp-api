import {
    Body,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
} from '@nestjs/common';
import { GenericService } from './base-crud.service';

export abstract class BaseController<T> {
    protected constructor(
        protected readonly model: string,
        protected readonly service: GenericService<T>,
    ) { }

    @Get()
    async findAll() {
        return this.service.findAll(this.model as any);
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(this.model as any, id);
    }

    @Post()
    async create(@Body() data: any) {
        return this.service.create(this.model as any, data);
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
        return this.service.update(this.model as any, id, data);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return this.service.delete(this.model as any, id);
    }
}
