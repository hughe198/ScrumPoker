import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteCardComponent } from './vote-card.component';

describe('VoteCardComponent', () => {
  let component: VoteCardComponent;
  let fixture: ComponentFixture<VoteCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoteCardComponent]
    });
    fixture = TestBed.createComponent(VoteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
