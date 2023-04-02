import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThaumaturgeFeaturesComponent } from './thaumaturge-features.component';

describe('ThaumaturgeFeaturesComponent', () => {
  let component: ThaumaturgeFeaturesComponent;
  let fixture: ComponentFixture<ThaumaturgeFeaturesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThaumaturgeFeaturesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThaumaturgeFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
