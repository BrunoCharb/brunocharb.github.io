import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuperstitionInstinctComponent } from './superstition-instinct.component';

describe('SuperstitionInstinctComponent', () => {
  let component: SuperstitionInstinctComponent;
  let fixture: ComponentFixture<SuperstitionInstinctComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperstitionInstinctComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuperstitionInstinctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
