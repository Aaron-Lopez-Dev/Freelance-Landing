import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFlowIcon } from './service-flow-icon';

describe('ServiceFlowIcon', () => {
  let component: ServiceFlowIcon;
  let fixture: ComponentFixture<ServiceFlowIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceFlowIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceFlowIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
