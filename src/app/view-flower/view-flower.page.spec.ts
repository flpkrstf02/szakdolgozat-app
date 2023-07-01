import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ViewFlowerPageRoutingModule } from './view-flower-routing.module';
import { ViewFlowerPage } from './view-flower.page';

describe('ViewFlowerPage', () => {
  let component: ViewFlowerPage;
  let fixture: ComponentFixture<ViewFlowerPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ViewFlowerPage],
      imports: [IonicModule.forRoot(), ViewFlowerPageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewFlowerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
