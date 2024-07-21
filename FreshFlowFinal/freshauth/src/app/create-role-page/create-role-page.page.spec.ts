import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateRolePagePage } from './create-role-page.page';

describe('CreateRolePagePage', () => {
  let component: CreateRolePagePage;
  let fixture: ComponentFixture<CreateRolePagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRolePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
