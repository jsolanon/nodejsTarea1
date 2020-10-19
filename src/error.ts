import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export class ErrorHandler extends Error {
    statusCode = 0;
    constructor (statusCode: number, message: string) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
};

export const handlerError = (error: ErrorHandler, req: Request, res: Response): void =>{
    const { statusCode, message } = error;
    const errors = validationResult(req);
    res.status(statusCode).json({
        status: error.name,
        statusCode,
        message,
        errors: !errors.isEmpty() ? errors.array() : null
    })
} 