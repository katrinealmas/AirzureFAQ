import { Injectable } from '@angular/core';

@Injectable()
export class ScrollService {

    scroll(el: any) {
        console.log(el)
        el.scrollIntoView(true)
    }

    scrollToTop() {
        window.scrollTo(0, 0);
    }

}