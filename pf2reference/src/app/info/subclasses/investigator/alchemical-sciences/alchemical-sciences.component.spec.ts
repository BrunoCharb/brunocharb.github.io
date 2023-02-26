import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlchemicalSciencesComponent } from './alchemical-sciences.component';

describe('AlchemicalSciencesComponent', () => {
  let component: AlchemicalSciencesComponent;
  let fixture: ComponentFixture<AlchemicalSciencesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlchemicalSciencesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlchemicalSciencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
