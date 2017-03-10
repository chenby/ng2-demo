/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContentService } from './content.service';

describe('ContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentService]
    });
  });

  it('should ...', inject([ContentService], (service: ContentService) => {
    expect(service).toBeTruthy();
  }));
});
