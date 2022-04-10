import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoDeleteComponent } from './endereco-delete.component';

describe('EnderecoDeleteComponent', () => {
  let component: EnderecoDeleteComponent;
  let fixture: ComponentFixture<EnderecoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnderecoDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
