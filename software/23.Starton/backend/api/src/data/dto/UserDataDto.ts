export interface UserDataDto {
    _id: string,
    email: string,
    password: string,
    wallet: string
};

export interface UserLoginDto {
    _id: string,
    token: string
}