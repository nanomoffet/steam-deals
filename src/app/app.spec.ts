import {MyApp} from './app.component';
import {ComponentFixture, async, TestBed} from '@angular/core/testing';
import {IonicModule} from 'ionic-angular';
import {HomePage} from '../pages/home/home';

let comp: MyApp;
let fixture: ComponentFixture<MyApp>

describe('Component: Root Component', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      declarations: [MyApp],

      providers: [

      ],

      imports: [
        IonicModule.forRoot(MyApp)
      ]

    }).compileComponents();
  })); // End BeforeEach

  beforeEach(() => {

    fixture = TestBed.createComponent(MyApp);
    comp = fixture.componentInstance;

  }); // End BeforeEach

  afterEach(() => {

    fixture.destroy();
    comp = null;

  }); // End AfterEach

  it('is created', () => {

    expect(fixture).toBeTruthy();
    expect(comp).toBeTruthy();

  }); // End it

  it('initializes with a root page of HomePage', () => {

    expect(comp['rootPage']).toBe(HomePage);

  }) // End it


}); // End Describe

