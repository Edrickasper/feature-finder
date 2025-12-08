import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelChatComponent } from './model-chat';

describe('ModelChatComponent', () => {
  let component: ModelChatComponent;
  let fixture: ComponentFixture<ModelChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
