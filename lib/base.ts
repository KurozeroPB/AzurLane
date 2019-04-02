export interface IBaseResponse {
    statusCode: number;
    statusMessage: string;
    message: string;
}

export interface IErrorResponse extends IBaseResponse {
    error?: string | undefined;
}

export class ApiError extends Error {
    public statusCode: number;
    public statusMessage: string;
    public message: string;
    public error?: string;

    constructor(errorResponse: IErrorResponse) {
        super(errorResponse.message);

        this.statusCode = errorResponse.statusCode;
        this.statusMessage = errorResponse.statusMessage;
        this.message = errorResponse.message;
        this.error = errorResponse.error;
    }
}