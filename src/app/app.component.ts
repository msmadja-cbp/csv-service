import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { CsvService } from './csv-service/csv.service';
import { SupportedFormat } from './csv-service/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'csv-poc';

  dynamic$: Observable<any>;

  constructor(private readonly csvService: CsvService) {

  }

  async ngOnInit() {
    this.dynamic$ = from(this.csvService.parse({
      csv: 'http://localhost:8887/9de4a997-9c20-479d-ac0d-439741f37205',
      download: true,
      format: SupportedFormat.TABLE,
    }));
  }
}
