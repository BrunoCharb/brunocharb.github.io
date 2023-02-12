import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SorcererSpellTableComponent } from './sorcerer-spell-table.component';

describe('SorcererSpellTableComponent', () => {
  let component: SorcererSpellTableComponent;
  let fixture: ComponentFixture<SorcererSpellTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SorcererSpellTableComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SorcererSpellTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
