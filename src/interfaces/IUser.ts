export default interface IUser {
    _id: string,
    email: string | undefined,
    password: string | undefined,
    lastLogin: Date,
    secret: string
}