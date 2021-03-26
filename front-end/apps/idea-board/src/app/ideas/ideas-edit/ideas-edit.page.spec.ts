import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule } from '@ngxs/store';

import { IdeasEditPage } from './ideas-edit.page';
import { IdeasEditorComponent } from './_components/ideas-editor/ideas-editor.component';

describe('IdeasEditPage', () => {
  let component: IdeasEditPage;
  let fixture: ComponentFixture<IdeasEditPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        NgxsModule.forRoot([]),
      ],
      declarations: [IdeasEditPage, IdeasEditorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeasEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
