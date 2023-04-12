import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HobgoblinHeritagesComponent } from './hobgoblin-heritages.component';

describe('HobgoblinHeritagesComponent', () => {
  let component: HobgoblinHeritagesComponent;
  let fixture: ComponentFixture<HobgoblinHeritagesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HobgoblinHeritagesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HobgoblinHeritagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
