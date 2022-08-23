import { Injectable } from '@angular/core';

declare let gtag:Function;

@Injectable({
  providedIn: 'root'
})

export class CRMGoogleAnalytiscService {

  constructor() { }

  public sendToGoogleAnalytics({name, delta, id}: any) {
    this.eventEmitter("crm-send-data", "pqhuy2", "crm", "click", 2);

    gtag('event', name, {
      event_category: 'Web Vitals',
      event_label: '4GCRNRFXJC',
      value: Math.round(name === 'CLS' ? delta * 1000 : delta),
      non_interaction: true,
    });

    gtag('config', 'G-4GCRNRFXJC', {'page_path': '/'});
  }

  public eventEmitter(
    eventName: string,
    eventCategory: string,
    eventAction: string,
    eventLabel: string = "",
    eventValue: number = 0
  ) {
    gtag('event', eventName, {
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      eventAction: eventAction,
      eventValue: eventValue
    })
  }
}
