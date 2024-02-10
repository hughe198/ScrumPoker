import { TestBed } from '@angular/core/testing';

import { VotingWebsocketService } from './voting-websocket.service';

describe('VotingWebsocketService', () => {
  let service: VotingWebsocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VotingWebsocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
