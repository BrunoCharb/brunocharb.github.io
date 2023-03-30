import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BarbarianFeaturesComponent } from './barbarian-features.component';

describe('BarbarianFeaturesComponent', () => {
  let component: BarbarianFeaturesComponent;
  let fixture: ComponentFixture<BarbarianFeaturesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BarbarianFeaturesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BarbarianFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
