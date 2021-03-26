import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule } from '@ngxs/store';

import { IdeasListPage } from './ideas-list.page';
import { IdeasListingComponent } from './_components/ideas-listing/ideas-listing.component';

describe('IdeasListPage', () => {
  let component: IdeasListPage;
  let fixture: ComponentFixture<IdeasListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, NgxsModule.forRoot([])],
      declarations: [IdeasListPage, IdeasListingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeasListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
