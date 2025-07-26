import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User, UserRole } from '../entities/user.entity';
export interface JwtPayload {
    sub: number;
    email: string;
    role: UserRole;
}
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
        user: {
            id: any;
            name: any;
            email: any;
            role: any;
        };
    }>;
    register(registerDto: {
        name: string;
        email: string;
        password: string;
        phone: string;
        role?: UserRole;
    }): Promise<{
        id: number;
        name: string;
        phone: string;
        email: string;
        role: UserRole;
        created_at: Date;
        kitchens: import("../entities").Kitchen[];
        orders: import("../entities").Order[];
    }>;
}
