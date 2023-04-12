import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FleshwarpHeritagesComponent } from './fleshwarp-heritages.component';

describe('FleshwarpHeritagesComponent', () => {
  let component: FleshwarpHeritagesComponent;
  let fixture: ComponentFixture<FleshwarpHeritagesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FleshwarpHeritagesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FleshwarpHeritagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
