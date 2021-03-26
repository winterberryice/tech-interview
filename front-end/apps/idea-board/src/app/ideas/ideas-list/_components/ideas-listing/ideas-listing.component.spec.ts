import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeasListingComponent } from './ideas-listing.component';

describe('IdeasListingComponent', () => {
  let component: IdeasListingComponent;
  let fixture: ComponentFixture<IdeasListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdeasListingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeasListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
