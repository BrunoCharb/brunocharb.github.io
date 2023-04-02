import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SwashbucklerFeaturesComponent } from './swashbuckler-features.component';

describe('SwashbucklerFeaturesComponent', () => {
  let component: SwashbucklerFeaturesComponent;
  let fixture: ComponentFixture<SwashbucklerFeaturesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SwashbucklerFeaturesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SwashbucklerFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
