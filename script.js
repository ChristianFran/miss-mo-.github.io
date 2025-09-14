const videos = {
    oo: "miss.mp4",
    minsan: "nung nakita ko ulit sya.mp4",
    hindi: "palayain.mp4"
};

document.querySelectorAll('.choice').forEach(choice => {
    choice.addEventListener('click', function() {
        document.querySelectorAll('.choice').forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');

        const answer = this.getAttribute('data-answer');
        const videoBox = document.getElementById('video-answer');
        const videoTag = document.getElementById('answer-video');
        if (videos[answer]) {
            videoTag.src = videos[answer];
            videoBox.style.display = "block";
            videoTag.load();
            videoTag.play(); 
        } else {
            videoBox.style.display = "none";
            videoTag.pause();
            videoTag.src = "";
        }
    });
});