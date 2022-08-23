import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { getCLS, getFID, getLCP } from 'web-vitals';
import { CRMGoogleAnalytiscService } from '../service/crmgoogle-analytisc.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(
    public crmGoogleAnalytiscService: CRMGoogleAnalytiscService
  ) {

  }

  ngOnInit(): void {
    // getCLS(console.log);
    // getFID(console.log);
    // getLCP(console.log);

    getCLS(this.sendEventGoogleAnalytisc);
    getFID(this.sendEventGoogleAnalytisc);
    getLCP(this.sendEventGoogleAnalytisc);
  }

  /**
   * Hàm gửi dữ liệu báo cáo đến routing cần hiển thị (sử dụng khi có một biểu đồ phần tích riêng tự custom)
   * @param metric dữ liệu đầu vào từ hàm phân tích
   * CreatedBy: PQ Huy (23.08.2022)
   */
  sendToAnalytics(metric: any) {
    const body = JSON.stringify(metric);

    (navigator.sendBeacon && navigator.sendBeacon('/analytics', body)) ||
      fetch('/analytics', { body, method: 'POST', keepalive: true });
  }

  sendEventGoogleAnalytisc() {

    this.crmGoogleAnalytiscService.eventEmitter("crm-pqhuy2", "crm", "cart", "click", 1);

    getCLS(console.log);
    getFID(console.log);
    getLCP(console.log);

    getCLS(this.crmGoogleAnalytiscService.sendToGoogleAnalytics);
    getFID(this.crmGoogleAnalytiscService.sendToGoogleAnalytics);
    getLCP(this.crmGoogleAnalytiscService.sendToGoogleAnalytics);
    
  }
}

