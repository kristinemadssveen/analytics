var but = document.querySelector("#button")
var txt = document.querySelector("#overlay")
var vid = document.querySelector("#video")

vid.load()

vid.onloadstart = function() {
    console.log("Starting to load video")
}

vid.oncanplay = function() {
    console.log("Can start playing video")
    vid.play()
    txt.style.transition = "3s ease"
    txt.style.opacity = 1
    txt.addEventListener('transitionend', () => {
        button.style.transition = "3s ease"
        button.style.opacity = 1
    })
}

vid.ontimeupdate = () => {
    console.log(vid.currentTime)
    if(video.currentTime >= 6){
        vid.pause()
        vid.style.transition = "3s ease"
        vid.style.opacity = 0
        txt.style.color = "black"
    }
};

// Analytics click

document.querySelector("#dyrevern").addEventListener('click', (e) => {
    gtag('event', 'click', {
        'event_category': 'outbound',
        'event_label': 'dyrevern',
        'transport_type': 'beacon',
        'event_callback': function () {
            window.location = 'http://www.dyrevern.no/stott_oss';
        }
    });
});

