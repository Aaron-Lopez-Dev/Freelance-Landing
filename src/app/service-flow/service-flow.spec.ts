import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFlow } from './service-flow';

describe('ServiceFlow', () => {
  let component: ServiceFlow;
  let fixture: ComponentFixture<ServiceFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceFlow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceFlow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
