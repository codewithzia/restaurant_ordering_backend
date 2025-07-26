import { AuthService } from './auth.service';
import { UserRole } from '../entities/user.entity';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginDto: {
        email: string;
        password: string;
    }): Promise<{
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
        role?: string;
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
