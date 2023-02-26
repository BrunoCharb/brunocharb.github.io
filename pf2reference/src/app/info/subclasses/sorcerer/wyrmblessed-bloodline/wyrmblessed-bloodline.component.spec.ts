import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WyrmblessedBloodlineComponent } from './wyrmblessed-bloodline.component';

describe('WyrmblessedBloodlineComponent', () => {
  let component: WyrmblessedBloodlineComponent;
  let fixture: ComponentFixture<WyrmblessedBloodlineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WyrmblessedBloodlineComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WyrmblessedBloodlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
