import {Component, ChangeDetectionStrategy, ViewChild, ElementRef, NgZone, Input} from '@angular/core';
import {Subscription, Observable} from 'rxjs';

@Component({
  selector: 'page-scroll-to-top',
  templateUrl: 'scroll-to-top.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollToTopPage {

  private _subs:Subscription[] = [];
  @Input()
  gameList;

  // reference to template variable
  @ViewChild('scrollButton') scrollButton:ElementRef;

  constructor(private _zone:NgZone){

  }

  ngOnInit() {
    this.manuallyBindToViewEvents()
  }

  manuallyBindToViewEvents() {
    this.subscribeToMyButton()
  }

  subscribeToMyButton() {
    let sub:Subscription;

    this._zone.runOutsideAngular(() => {
      sub = Observable.fromEvent(this.scrollButton.nativeElement, 'click').subscribe(e => {
        this.gameList.scrollToTop(600);
      })
    });

    this._subs.push(sub);
  }

  ngOnDestroy() {
    // clean up subscriptions
    this._subs.forEach(sub => sub.unsubscribe());
  }

}
