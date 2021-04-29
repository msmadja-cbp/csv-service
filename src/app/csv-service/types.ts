export enum SupportedFormat {
    TEXT = 'TEXT',
    TABLE = 'TABLE',
    JSON = 'JSON',
}


export interface ParsingRequest {
    csv: string | Blob;
    download?: boolean;
    format: SupportedFormat;
}

export type ParsingResponse = string | any;



export interface Csv {
    parse(request: ParsingRequest): Promise<ParsingResponse>;
}
