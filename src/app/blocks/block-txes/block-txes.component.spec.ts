import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTxesComponent } from './block-txes.component';

describe('BlockTxesComponent', () => {
  let component: BlockTxesComponent;
  let fixture: ComponentFixture<BlockTxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockTxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockTxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
