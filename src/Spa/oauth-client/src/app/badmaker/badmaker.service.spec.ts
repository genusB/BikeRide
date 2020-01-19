import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConfigService } from '../shared/config.service';

import { BadmakerService } from './badmaker.service';

describe('BadmakerService', () => {
  beforeEach(() => TestBed.configureTestingModule({

    imports: [HttpClientTestingModule],
    providers: [ ConfigService ]
  }));

  it('should be created', () => {
    const service: BadmakerService = TestBed.get(BadmakerService);
    expect(service).toBeTruthy();
  });
});
