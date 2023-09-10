import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ViewFloweromponentRoutingModule } from './view-flower-routing.module';
import { ViewFlowerComponent } from './view-flower.component';

describe('ViewFlowerComponent', () => {
  let component: ViewFlowerComponent;
  let fixture: ComponentFixture<ViewFlowerComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ViewFlowerComponent],
      imports: [IonicModule.forRoot(), ViewFloweromponentRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewFlowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
