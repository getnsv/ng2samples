import {Directive,ElementRef,Renderer} from 'angular2/core';


@Directive({
    selector:'[expandMe]',
    host:{
        '(focus)':'onFocus()',
        '(blur)':'onBlur()'
    }
})
export class ExpandMeDirective
{
    //private elem; then do this.elem = elem
    constructor(private el:ElementRef, private render:Renderer) //now elem is a member of class
    {
        
    }
    onFocus()
    {
        this.render.setElementStyle(this.el.nativeElement,"width",'200px');
        console.log("On focus");
    }
    onBlur()
    {
        this.render.setElementStyle(this.el.nativeElement,"width",'100px');
        console.log("on Blur");
    }

}