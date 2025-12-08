import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelChatsComponent } from './model-chats.component';

describe('ModelChatsComponent', () => {
  let component: ModelChatsComponent;
  let fixture: ComponentFixture<ModelChatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelChatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
