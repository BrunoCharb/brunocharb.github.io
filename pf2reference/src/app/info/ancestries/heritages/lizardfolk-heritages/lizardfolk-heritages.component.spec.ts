import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LizardfolkHeritagesComponent } from './lizardfolk-heritages.component';

describe('LizardfolkHeritagesComponent', () => {
  let component: LizardfolkHeritagesComponent;
  let fixture: ComponentFixture<LizardfolkHeritagesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LizardfolkHeritagesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LizardfolkHeritagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
