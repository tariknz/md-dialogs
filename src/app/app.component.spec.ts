import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MdDialogsHelperModule } from './md-dialogs-helper/md-dialogs-helper.module';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MdDialogsHelperModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
