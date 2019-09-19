    const tl = new TimelineMax()

export default {
    tl,
    playTimeline(selector) {
        tl.from(selector + ".bg", 0.4, {scale:0, ease:Power1.easeinOut}, "in1")
            .from(selector + ".bg", 0.3, {rotation:90, ease:Power1.easeinOut}, "in1")
            .staggerFrom(selector + ".text span", 1.1, {y:-50, opacity:0, ease:Elastic.easeOut}, 0.06)
            .addLabel("out1", "+=1")
            .staggerTo(selector + ".text span", 0.3, {opacity:0, y:50, ease:Power1.easein}, -0.06, "out")
            .to(selector + ".bg", 0.3, {scale:0, rotation:-90, ease:Power1.easeinOut})
    }
}