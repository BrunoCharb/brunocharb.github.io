import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VishkanyaHeritagesComponent } from './vishkanya-heritages.component';

describe('VishkanyaHeritagesComponent', () => {
  let component: VishkanyaHeritagesComponent;
  let fixture: ComponentFixture<VishkanyaHeritagesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VishkanyaHeritagesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VishkanyaHeritagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
