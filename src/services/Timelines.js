export const tl = new TimelineMax({onComplete:console.log('called!'), paused: true});
export const setSlide = function (slideOne, slideTwo, slideThree, slideFour, audio) {
    tl.to(audio, 1, {volume: 1, playbackRate: 1})
        .from(slideOne, 0.5, {opacity: 0, ease:Power1.easeinOut}, "-=1")
        .to(slideOne, 0.5, {opacity: 1, ease:Power1.easeinOut})
        .from(slideTwo, 0.5, {opacity: 0, ease:Power1.easeinOut}, "+=2")
        .to(slideTwo, 0.5, {opacity: 1, ease:Power1.easeinOut})
        .from(slideThree, 0.5, {opacity: 0, ease:Power1.easeinOut}, "+=4")
        .to(slideThree, 0.5, {opacity: 1, ease:Power1.easeinOut})
        .from(slideFour, 0.5, {opacity: 0, ease:Power1.easeinOut}, "+=1")
        .to(slideFour, 0.5, {opacity: 1, ease:Power1.easeinOut})
}
