import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PreviewFactoryService } from './file-preview/preview-factory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'csv-poc';
  files: { name: string, url: string, type: string }[] = [
    {
      name: 'Nate',
      url: 'http://localhost:8887/9de4a997-9c20-479d-ac0d-439741f37205',
      type: 'csv',
    },
    {
      name: 'Moshe',
      url: 'http://localhost:8887/ir211wk12sample',
      type: 'csv',
    },
    {
      name: 'Shuki',
      url: 'http://localhost:8887/abcde',
      type: 'csv',
    }
  ];

  constructor(
    private readonly previewService: PreviewFactoryService,
    private readonly modalService: BsModalService,

  ) { }

  isSupported(type: string): boolean {
    return this.previewService.isSupported(type);
  }

  open(type: string, initialState: any): void {
    const component: any = this.previewService.get(type);
    if (component) {
      this.modalService.show(component, {
        initialState: initialState,
      });
    }
  }

}
