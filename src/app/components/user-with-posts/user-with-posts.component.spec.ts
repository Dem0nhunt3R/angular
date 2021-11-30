import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWithPostsComponent } from './user-with-posts.component';

describe('UserWithPostsComponent', () => {
  let component: UserWithPostsComponent;
  let fixture: ComponentFixture<UserWithPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWithPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWithPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
