import { Controller } from "@nestjs/common";
import { Utilizador } from "@prisma/client";
import { BaseController } from "src/common/service/base-crud.controller";
import { GenericService } from "src/common/service/base-crud.service";

@Controller("users")
export class UsersController extends BaseController<Utilizador> {
    constructor(protected readonly service: GenericService<Utilizador>) {
        super('Utilizador', service);
    }
}