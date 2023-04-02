import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SorcererFeaturesComponent } from './sorcerer-features.component';

describe('SorcererFeaturesComponent', () => {
  let component: SorcererFeaturesComponent;
  let fixture: ComponentFixture<SorcererFeaturesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SorcererFeaturesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SorcererFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
