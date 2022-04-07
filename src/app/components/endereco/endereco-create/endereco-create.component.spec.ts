import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoCreateComponent } from './endereco-create.component';

describe('EnderecoCreateComponent', () => {
  let component: EnderecoCreateComponent;
  let fixture: ComponentFixture<EnderecoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnderecoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
