import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { FlowerComponent } from './flower.component';

describe('FlowerComponent', () => {
  let component: FlowerComponent;
  let fixture: ComponentFixture<FlowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlowerComponent],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(FlowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
