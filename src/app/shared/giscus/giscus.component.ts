import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'ds-giscus',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="giscus-container"></div>`,
  styles: [`
    .giscus-container {
      margin-top: 2rem;
      padding: 1rem 0;
    }
  `]
})
export class GiscusComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const script = document.createElement('script');
      script.src = 'https://giscus.app/client.js';
      script.setAttribute('data-repo', 'JuniorDaniel123/KNUST_CHAT');
      script.setAttribute('data-repo-id', 'R_kgDOUM6mFg');
      script.setAttribute('data-category', 'Q&A');
      script.setAttribute('data-category-id', 'DIC_kwDOUM6mFs4DEyIR');
      script.setAttribute('data-mapping', 'pathname');
      script.setAttribute('data-strict', '0');
      script.setAttribute('data-reactions-enabled', '1');
      script.setAttribute('data-emit-metadata', '0');
      script.setAttribute('data-input-position', 'bottom');
      script.setAttribute('data-theme', 'catppuccin_mocha');
      script.setAttribute('data-lang', 'en');
      script.setAttribute('crossorigin', 'anonymous');
      script.async = true;

      const container = document.querySelector('.giscus-container');
      if (container) {
        container.appendChild(script);
      }
    }
  }
}