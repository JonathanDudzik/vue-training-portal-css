import { TweenMax } from "gsap";

export const tl = new TimelineMax({pause: true});
export const tlSettings = function(gsapImageOne, gsapAudioOne, testFunc) {
    tl.add( TweenMax.to(gsapAudioOne, 1, {volume: 1, playbackRate: 1}) )
    tl.add( TweenMax.to(gsapImageOne, 3, {opacity: 1, ease:Power1.easeinOut}) )
    tl.add( TweenMax.to(gsapImageOne, 3, {opacity: 0, ease:Power1.easeinOut, delay: 5, onComplete: testFunc}) )
}