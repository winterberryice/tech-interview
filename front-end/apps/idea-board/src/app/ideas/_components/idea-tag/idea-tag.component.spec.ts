import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaTagComponent } from './idea-tag.component';

describe('IdeaTagComponent', () => {
  let component: IdeaTagComponent;
  let fixture: ComponentFixture<IdeaTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeaTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
