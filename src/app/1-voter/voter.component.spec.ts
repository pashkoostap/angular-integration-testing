import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
  });

  it('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    let debugElement = fixture.debugElement.query(By.css('.vote-count'));
    let element: HTMLElement = debugElement.nativeElement;

    expect(element.innerText).toBe('21');
  });

  it('should highlight the upvote button if I have upvoted', () => {
    component.myVote = 1;
    fixture.detectChanges();

    let debugElement = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    expect(debugElement.classes['highlighted']).toBeTruthy();
  });
});
