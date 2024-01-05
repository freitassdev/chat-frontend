class AuthService {
    constructor() {}

    public isLogged(): boolean {
        return localStorage.getItem('token') !== null;
    }

    public login(): void {

    }
}
export default AuthService;