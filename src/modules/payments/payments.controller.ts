import { Controller } from "@nestjs/common";
import { Compra } from "@prisma/client";
import { BaseController } from "src/common/service/base-crud.controller";
import { GenericService } from "src/common/service/base-crud.service";

@Controller("payments")
export class PaymentsController extends BaseController<Compra> {
    constructor(protected readonly service: GenericService<Compra>) {
        super('Compra', service);
    }
}