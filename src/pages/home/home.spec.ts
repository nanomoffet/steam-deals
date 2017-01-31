import {HomePage} from './home';
import {ComponentFixture, async, TestBed} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {MyApp} from '../../app/app.component';
import {IonicModule, NavController, PopoverController} from 'ionic-angular';
import {ScrollToTopPage} from '../scroll-to-top/scroll-to-top';
import {GameDetailPage} from '../game-detail/game-detail';
import {FilterPipe} from '../../pipes/filter-pipe';
import {DealsFilterPage} from '../deals-filter/deals-filter';
import {GameSummaryPage} from '../game-summary/game-summary';
import {FilterService} from '../../providers/filter-service';
import {DealsData} from '../../providers/deals-data';

let comp: HomePage;
let fixture: ComponentFixture<HomePage>;
let de: DebugElement;
let el: HTMLElement;

describe('Page: Home Page', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({

      declarations: [MyApp, HomePage, GameSummaryPage, ScrollToTopPage, DealsFilterPage, GameDetailPage, FilterPipe],
      providers: [
        NavController, DealsData, FilterService, PopoverController
      ],
      imports: [
        IonicModule.forRoot(MyApp)
      ]

    }).compileComponents();

  })); // end beforeEach

  beforeEach(() => {

    fixture = TestBed.createComponent(HomePage);
    comp = fixture.componentInstance;

  }); // end beforeEach

  afterEach(() => {

    fixture.destroy();
    comp = null;
    de = null;
    el = null;

  }); // end afterEach

  it('is created', () => {

    expect(fixture).toBeTruthy();
    expect(comp).toBeTruthy();

  }); // end it

  it('initializes with a title of Steam Deals', () => {
    expect(comp['title']).toEqual('Steam Deals');
  }); // end it

}); // End describe
