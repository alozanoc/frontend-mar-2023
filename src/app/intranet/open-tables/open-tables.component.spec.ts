import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenTablesComponent } from './open-tables.component';

describe('OpenTablesComponent', () => {
  let component: OpenTablesComponent;
  let fixture: ComponentFixture<OpenTablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenTablesComponent]
    });
    fixture = TestBed.createComponent(OpenTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
