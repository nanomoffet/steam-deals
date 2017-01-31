import {Component, ChangeDetectionStrategy, ViewChild, ElementRef, NgZone, Input} from '@angular/core';
import {Subscription, Observable} from 'rxjs';

@Component({
  selector: 'page-scroll-to-top',
  templateUrl: 'scroll-to-top.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollToTopPage {

  // _subs contains all the subscriptions generated from firing scrollToTop
  // gameList is a reference to the full list of game summaries from the Home Page

  private _subs:Subscription[] = [];
  @Input()
  gameList;

  // reference to template variable
  @ViewChild('scrollButton') scrollButton:ElementRef;

  constructor(private _zone:NgZone){

  }

  // ngOnInit will only fire once since the page is cached for later viewing, but that's all that's needed in this case
  ngOnInit() {
    this.manuallyBindToViewEvents()
  }

  manuallyBindToViewEvents() {
    this.scrollToTop()
  }


  // Scrolling functionality is run it a fork of Angular's parent zone using zone.js in order to prevent change detection
  // and a DOM repaint from triggering - performance saving measure
  scrollToTop() {
    let sub:Subscription;

    this._zone.runOutsideAngular(() => {
      sub = Observable.fromEvent(this.scrollButton.nativeElement, 'click').subscribe(e => {
        this.gameList.scrollToTop(600);
      })
    });

    this._subs.push(sub);
  }

  ngOnDestroy() {
    // clean up subscriptions to avoid memory leaks
    this._subs.forEach(sub => sub.unsubscribe());
  }

}
