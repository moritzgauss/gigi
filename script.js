let gun = document.getElementById("gun");
let gunSound = document.getElementById("gunSound");
let song = document.getElementById("song");
let triggerButton = document.getElementById("trigger-button");

triggerButton.addEventListener("click", function() {
    // Fade out the button
    triggerButton.style.opacity = "0";
    setTimeout(() => {
        triggerButton.style.display = "none";
    }, 300);

    gun.src = "original.gif";
    gunSound.play();

    setTimeout(() => {
        song.play();
    }, 2000); 

    setTimeout(() => {
        let volume = 1.0;
        const fadeInterval = setInterval(() => {
            if (volume > 0.2) {
                volume -= 0.1;
                song.volume = volume;
            } else {
                clearInterval(fadeInterval);
                song.volume = 0.2;
            }
        }, 200);

        loadBandPage();
    }, 5000);
});

function loadBandPage() {
    const bandPageDiv = document.createElement('div');
    bandPageDiv.id = 'band-page';
    bandPageDiv.innerHTML = `
        <div id="band-page">
            <img id="logo" src="logov1.png">
            <h1>Gigi Clow Cooperation</h1>
            <ul class="tour-dates">
                <li>12.04.2025 - Berlin, SO36 <a href="#">Tickets</a></li>
                <li>18.04.2025 - Wien, Arena <a href="#">Tickets</a></li>
                <li>25.04.2025 - Zürich, Rote Fabrik <a href="#">Tickets</a></li>
                <li>01.05.2025 - London, The Underworld <a href="#">Tickets</a></li>
            </ul>
        </div>
    `;
    document.body.appendChild(bandPageDiv);
}