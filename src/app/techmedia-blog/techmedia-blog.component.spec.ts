import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechmediaBlogComponent } from './techmedia-blog.component';

describe('TechmediaBlogComponent', () => {
  let component: TechmediaBlogComponent;
  let fixture: ComponentFixture<TechmediaBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechmediaBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechmediaBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
