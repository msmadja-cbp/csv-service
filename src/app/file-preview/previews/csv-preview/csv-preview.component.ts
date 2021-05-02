import { Component, Input, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { CsvService } from 'src/app/csv-service/csv.service';
import { SupportedFormat } from 'src/app/csv-service/types';

@Component({
  selector: 'app-csv-preview',
  templateUrl: './csv-preview.component.html',
  styleUrls: ['./csv-preview.component.scss']
})
export class CsvPreviewComponent implements OnInit {

  @Input() title: string;
  @Input() url: string;
  dynamic$: Observable<{ [header: string]: string; }>;

  constructor(
    private readonly csvService: CsvService,
  ) { }

  ngOnInit(): void {
    this.refresh()
  }
  refresh(): void {
    this.dynamic$ = from(this.csvService.parse({
      csv: this.url,
      download: true,
      format: SupportedFormat.TABLE,
    }));
  }
}
