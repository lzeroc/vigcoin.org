import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningPage } from './mining.page';

describe('MiningPage', () => {
  let component: MiningPage;
  let fixture: ComponentFixture<MiningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MiningPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
