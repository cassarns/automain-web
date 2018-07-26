import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceTasksComponent } from './maintenance-tasks.component';

describe('MaintenanceTasksComponent', () => {
  let component: MaintenanceTasksComponent;
  let fixture: ComponentFixture<MaintenanceTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
