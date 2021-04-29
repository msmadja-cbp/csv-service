export interface PapaParseParser {
    abort: () => ParseResult;
    aborted: () => boolean;
    parse: (csv: string | Blob, baseIndex: number, ignoreLastRow: boolean) => ParseResult;
    pause: () => void;
    paused: () => boolean;
    resume: () => void;
    streamer: any;
}

export interface ParseConfig {
    delimiter?: string | ((input?: string) => string);
    newline?: '\r' | '\n' | '\r\n' | '';
    quoteChar?: string;
    escapeChar?: string;
    header?: boolean;
    transformHeader?: (header: string) => string;
    dynamicTyping?: boolean;
    preview?: number;
    encoding?: string;
    worker?: boolean;
    comments?: false | string;
    step?: (results: ParseResult, parser: PapaParseParser) => void;
    complete?: (results: ParseResult, file?: File) => void;
    error?: (error: any, file: any) => void;
    download?: boolean;
    downloadRequestHeaders?: { [key: string]: string };
    skipEmptyLines?: boolean | 'greedy';
    chunk?: (results: ParseResult, parser: PapaParseParser) => void;
    fastMode?: boolean;
    beforeFirstChunk?: (chunk: string) => string | void;
    withCredentials?: boolean;
    transform?: (value: string, columnOrHeader: string | number) => string;
    delimitersToGuess?: string[];
}


export interface ParseError {
    type: 'Quotes' | 'Delimiter' | 'FieldMismatch';
    code: 'MissingQuotes' | 'UndetectableDelimiter' | 'TooFewFields' | 'TooManyFields';
    message: string;
    row: number;
}

export interface ParseMeta {
    delimiter: string;
    linebreak: string;
    aborted: boolean;
    fields: string[];
    truncated: boolean;
}

export interface ParseResult {
    data: any;
    errors: ParseError[];
    meta: ParseMeta;
}


export interface UnparseConfig {
    quotes?: boolean | boolean[];
    quoteChar?: string;
    escapeChar?: '"';
    delimiter?: string;
    header?: boolean;
    newline?: '\r' | '\n' | '\r\n';
    skipEmptyLines?: boolean | 'greedy';
    columns?: string[];
}
