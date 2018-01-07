/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserDetailsComponent } from './user-details.component';
import { Observable } from 'rxjs/Observable';

class RouterStub {
  navigate(params) {}
}

class RouterActivatedStub {
  params: Observable<any>;

  constructor() {
    this.params = Observable.empty();
  }
}

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [UserDetailsComponent],
        providers: [
          { provide: Router, useClass: RouterStub },
          { provide: ActivatedRoute, useClass: RouterActivatedStub }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should redirect the user to the users page after saving', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');

    component.save();

    expect(spy).toHaveBeenCalledWith(['users']);
  });
});
