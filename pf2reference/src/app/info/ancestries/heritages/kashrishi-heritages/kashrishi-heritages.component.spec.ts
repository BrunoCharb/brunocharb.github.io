import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KashrishiHeritagesComponent } from './kashrishi-heritages.component';

describe('KashrishiHeritagesComponent', () => {
  let component: KashrishiHeritagesComponent;
  let fixture: ComponentFixture<KashrishiHeritagesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KashrishiHeritagesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KashrishiHeritagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
