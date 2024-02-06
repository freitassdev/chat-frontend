import api from './api.service';

class AuthService {
    constructor() {}
    
    public isLogged(): boolean {
        return localStorage.getItem('token') !== null;
    }

    public login(): void {

    }

    public signup(email: string, password: string, nickname: string): void {

        const bodyForm = {
            data: {
                email,
                password,
                username: nickname
            }
        }
        api.post('/api/v1/auth/signup', bodyForm).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }
}
export default AuthService;