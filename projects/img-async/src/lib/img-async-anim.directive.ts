import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[imgAsyncAnim]'
})
export class ImgAsyncAnimDirective {

  @HostBinding('@imgState') imgState: 'loaded' | 'not_loaded' | 'error' = 'not_loaded';

  @HostListener('load')
  imgLoaded() {
    this.imgState = 'loaded';
  }

  @HostListener('error')
  imgError() {
    this.imgState = 'error';
  }

}
