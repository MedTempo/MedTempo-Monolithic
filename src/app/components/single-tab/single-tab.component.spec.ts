import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTabComponent } from './single-tab.component';

describe('SingleTabComponent', () => {
  let component: SingleTabComponent;
  let fixture: ComponentFixture<SingleTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleTabComponent]
    });
    fixture = TestBed.createComponent(SingleTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
