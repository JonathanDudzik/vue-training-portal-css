export const tl = new TimelineMax({paused: true});
export const setSlide = function (ref) {
        tl.from(ref, 1, {scale:0, ease:Power1.easeinOut}, "in1")
            .from(ref, 1, {rotation:90, ease:Power1.easeinOut}, "in1")
            .staggerFrom(" .text span", 1, {y:-50, opacity:0, ease:Elastic.easeOut}, 0.06)
            .addLabel("out1", "+=1")
            .staggerTo(" .text span", 1, {opacity:0, y:50, ease:Power1.easein}, -0.06, "out")
            .to(ref, 1, {scale:0, rotation:-90, ease:Power1.easeinOut})
}
