import { Component, Injectable, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { suportedPreviews } from './previews';

@Injectable({
  providedIn: 'root'
})
export class PreviewFactoryService {
  get(type: string): string | TemplateRef<any> {
    const component = suportedPreviews[type];

    if (!component) {
      throw `not supported preview ${type}`
    }
    return component;
  }
  isSupported(type: string): boolean {
    return !!suportedPreviews[type];
  }

}