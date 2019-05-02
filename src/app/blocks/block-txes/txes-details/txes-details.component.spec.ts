import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxesDetailsComponent } from './txes-details.component';

describe('TxesDetailsComponent', () => {
  let component: TxesDetailsComponent;
  let fixture: ComponentFixture<TxesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TxesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
