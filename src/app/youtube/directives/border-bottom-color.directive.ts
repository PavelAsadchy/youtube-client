import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';
import { DatesLagValue, DatesLagColor } from '../_constants/dates-lag.const';

@Directive({
    selector: '[appBorderBottomColor]'
})
export class BorderBottomColorDirective implements OnInit {

    @Input()
    public datesLag: number;

    public borderBottomColor: string = null;

    constructor(private elementRef: ElementRef,
                private renderer2: Renderer2) {
    }

    public ngOnInit(): void {
        this.setBorderBottomColor();
        this.renderer2.setStyle(this.elementRef.nativeElement, 'border-bottom', `5px solid ${this.borderBottomColor}`);
    }

    public setBorderBottomColor(): void {
        switch (true) {
            case (this.datesLag < DatesLagValue.min):
                this.borderBottomColor = DatesLagColor.min;
                break;
            case (this.datesLag < DatesLagValue.medium):
                this.borderBottomColor = DatesLagColor.medium;
                break;
            case (this.datesLag < DatesLagValue.max):
                this.borderBottomColor = DatesLagColor.max;
                break;

            default:
                this.borderBottomColor = DatesLagColor.default;
        }
    }

}
