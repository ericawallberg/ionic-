import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PalavrasPage } from './palavras.page';

describe('PalavrasPage', () => {
  let component: PalavrasPage;
  let fixture: ComponentFixture<PalavrasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalavrasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PalavrasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
