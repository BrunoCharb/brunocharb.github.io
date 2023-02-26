import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PsychopompBloodlineComponent } from './psychopomp-bloodline.component';

describe('PsychopompBloodlineComponent', () => {
  let component: PsychopompBloodlineComponent;
  let fixture: ComponentFixture<PsychopompBloodlineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychopompBloodlineComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PsychopompBloodlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
