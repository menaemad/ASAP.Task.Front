import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonManagmentComponent } from './person-managment.component';

describe('PersonManagmentComponent', () => {
  let component: PersonManagmentComponent;
  let fixture: ComponentFixture<PersonManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonManagmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
