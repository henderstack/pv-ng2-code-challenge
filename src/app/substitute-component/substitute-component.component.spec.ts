/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SubstituteComponent } from './substitute-component.component';

describe('SubstituteComponent', () => {
  let component: SubstituteComponent;
  let fixture: ComponentFixture<SubstituteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubstituteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
