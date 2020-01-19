import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConfigService } from '../shared/config.service';

import { SnakeService } from './snake.service';

describe('SnakeService', () => {
  beforeEach(() => TestBed.configureTestingModule({

    imports: [HttpClientTestingModule],
    providers: [ ConfigService ]
  }));

  it('should be created', () => {
    const service: SnakeService = TestBed.get(SnakeService);
    expect(service).toBeTruthy();
  });
});
