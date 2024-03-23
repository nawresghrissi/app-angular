import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateStagiaieComponent } from './add-update-stagiaie.component';

describe('AddUpdateStagiaieComponent', () => {
  let component: AddUpdateStagiaieComponent;
  let fixture: ComponentFixture<AddUpdateStagiaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUpdateStagiaieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddUpdateStagiaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
