function carrousel() {

    let images = document.querySelectorAll('.image10');
    let d = 2000;
    let delta = 1000;

    images.forEach(function(img,ind) {
        img.style.zIndex = images.length - ind;
    });
    
    let anim15 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim15.add({
        targets: images,
        translateX: [{value: '220', duration: d},
                     {value: '-220', duration: 0, delay: function(img,ind) {
                                        if (ind == 0) return 9*delta + 8*d;
                                        if (ind == 1) return 8*delta + 7*d;
                                        if (ind == 2) return 7*delta + 6*d;
                                        if (ind == 3) return 6*delta + 5*d;
                                        if (ind == 4) return 5*delta + 4*d;
                                        if (ind == 5) return 4*delta + 3*d;
                                        if (ind == 6) return 3*delta + 2*d;
                                        if (ind == 7) return 2*delta + d;
                                        if (ind == 8) return delta;
                                        return 0;
                                    }
                     },
                     {value: 0, duration: function(img,ind) {
                                    if (ind == 9) return 0;
                                    return d;
                                }
                     }],
        easing: 'easeInOutSine',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return 2*delta + d;
            if (ind == 2) return 3*delta + 2*d;
            if (ind == 3) return 4*delta + 3*d;
            if (ind == 4) return 5*delta + 4*d;
            if (ind == 5) return 6*delta + 5*d;
            if (ind == 6) return 7*delta + 6*d;
            if (ind == 7) return 8*delta + 7*d;
            if (ind == 8) return 9*delta + 8*d;
            return 10*delta + 9*d;
        }
    });
}