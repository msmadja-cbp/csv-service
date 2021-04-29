import { ParseResult, UnparseConfig } from './types';
import * as lib from 'papaparse/papaparse.min.js';

export class CsvPlugin {
    public _papa = lib;

    public parse(csv: string | Blob, config?: { download?: boolean }): Promise<ParseResult> {
        return new Promise((resolve, reject) => {
            return this._papa.parse(csv, {
                complete: (data) => {
                    return resolve(data);
                },
                error: (error) => {
                    return reject(error);
                },
                ...config,
            });
        });
    }

    public unparse(data: any, config?: UnparseConfig): Promise<string> {
        return new Promise((resolve, reject) => {
            return this._papa.unparse(data, {
                complete: (data) => {
                    return resolve(data);
                },
                error: (error) => {
                    return reject(error);
                },
                ...config,
            });
        });
    }

    public setLocalChunkSize(value: number): void {
        this._papa.LocalChunkSize = value;
    }

    public setRemoteChunkSize(value: number): void {
        this._papa.RemoteChunkSize = value;
    }
    public setDefaultDelimiter(value: string): void {
        this._papa.DefaultDelimiter = value;
    }

    get badDelimiters() {
        return this._papa.BAD_DELIMITERS;
    }

    get recordSeparator() {
        return this._papa.RECORD_SEP;
    }

    get unitSeparator() {
        return this._papa.UNIT_SEP;
    }

    get workersSupported(): boolean {
        return this._papa.WORKERS_SUPPORTED;
    }
}
