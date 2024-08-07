import type { Response } from 'express';

export interface ResponseWithMessageProps {
    res: Response;
    message: string;
    data: Record<string, any>;
    statusCode: number;
}

export interface QueryData {
    attributes: string
}