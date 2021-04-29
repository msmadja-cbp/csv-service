import { Injectable } from '@angular/core';
import { CsvPlugin } from './plugins/csv.plugin';
import { ParseResult } from './plugins/types';
import { Csv, ParsingRequest, ParsingResponse, SupportedFormat } from './types';
import { csvJsonToTable } from './utils';

@Injectable({
  providedIn: 'root'
})
export class CsvService implements Csv {
  private readonly parser: CsvPlugin = new CsvPlugin();
  private readonly mappers: Map<SupportedFormat, (json: Array<string[]>) => {}> =
    new Map<SupportedFormat, (json: Array<string[]>) => {}>();

  constructor() {
    this.loadMappers();
  }


  loadMappers(): void {
    this.mappers.set(SupportedFormat.JSON, (json) => json);
    this.mappers.set(SupportedFormat.TEXT, (json) => JSON.stringify(json));
    this.mappers.set(SupportedFormat.TABLE, (json) => csvJsonToTable(json));
  }

  async parse(request: ParsingRequest): Promise<ParsingResponse> {
    const parsingResponse: ParseResult = await this.parser.parse(request.csv, { download: request.download });

    if (!this.mappers.get(request.format)) {
      throw 'not supported csv format';
    }

    return this.mappers.get(request.format)(parsingResponse.data);
  }
}

