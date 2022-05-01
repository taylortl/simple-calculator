export class InvalidDivisor extends Error {
    constructor(...args: any[]) {
        super(...args)
        Error.captureStackTrace(this, InvalidDivisor)
    }
}