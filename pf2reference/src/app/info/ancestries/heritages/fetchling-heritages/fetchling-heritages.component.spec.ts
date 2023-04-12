import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FetchlingHeritagesComponent } from './fetchling-heritages.component';

describe('FetchlingHeritagesComponent', () => {
  let component: FetchlingHeritagesComponent;
  let fixture: ComponentFixture<FetchlingHeritagesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchlingHeritagesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FetchlingHeritagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
