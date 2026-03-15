import { NextFunction, Request, Response } from "express";

export const globalErrorHandler =  ((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode || 500).json({message: err.message || "Internal Server Error"});
})