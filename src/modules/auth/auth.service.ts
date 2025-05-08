import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
    ) { }

    async register(data: { email: string; password: string; nome: string }) {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const user = await this.prisma.utilizador.create({
            data: {
                email: data.email,
                password: hashedPassword,
                nome: data.nome,
            },
        });

        const token = this.jwtService.sign({ sub: user.id, email: user.email });
        return { message: 'Conta criada com sucesso', userId: user.id, access_token: token };
    }

    async login(data: { email: string; password: string }) {
        const user = await this.prisma.utilizador.findUnique({
            where: { email: data.email },
        });

        if (!user || !(await bcrypt.compare(data.password, user.password))) {
            throw new UnauthorizedException('Credenciais inválidas');
        }

        const token = this.jwtService.sign({ sub: user.id, email: user.email });
        return { access_token: token };
    }
}
