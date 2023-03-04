import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MetamagicalExperimentationComponent } from './metamagical-experimentation.component';

describe('MetamagicalExperimentationComponent', () => {
  let component: MetamagicalExperimentationComponent;
  let fixture: ComponentFixture<MetamagicalExperimentationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MetamagicalExperimentationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MetamagicalExperimentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
