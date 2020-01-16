import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsChapterComponent } from './details-chapter.component';

describe('DetailsChapterComponent', () => {
  let component: DetailsChapterComponent;
  let fixture: ComponentFixture<DetailsChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsChapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
