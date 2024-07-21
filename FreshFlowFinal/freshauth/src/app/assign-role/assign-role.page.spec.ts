import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssignRolePage } from './assign-role.page';

describe('AssignRolePage', () => {
  let component: AssignRolePage;
  let fixture: ComponentFixture<AssignRolePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignRolePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
