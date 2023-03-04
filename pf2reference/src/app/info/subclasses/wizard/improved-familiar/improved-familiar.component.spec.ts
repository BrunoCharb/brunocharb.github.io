import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImprovedFamiliarComponent } from './improved-familiar.component';

describe('ImprovedFamiliarComponent', () => {
  let component: ImprovedFamiliarComponent;
  let fixture: ComponentFixture<ImprovedFamiliarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprovedFamiliarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImprovedFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
