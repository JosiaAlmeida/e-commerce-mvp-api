import { Controller } from "@nestjs/common";
import { Produto } from "@prisma/client";
import { BaseController } from "src/common/service/base-crud.controller";
import { GenericService } from "src/common/service/base-crud.service";

@Controller("products")
export class ProductsController extends BaseController<Produto> {
    constructor(protected readonly service: GenericService<Produto>) {
        super('Produto', service);
    }
}