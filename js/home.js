const hackersImg = document.getElementById("hackers");
const overlay = document.getElementById("hack_pop");

function on(hackersImg) {
    hackersImg.addEventListener("click", function () {

        // Clear previous content
        overlay.innerHTML = "";

        // Make overlay visible
        overlay.style.display = "block";

        overlay.style.backgroundImage = "url('images/hackers.png')";
        overlay.style.backgroundSize = "cover";
        overlay.style.backgroundPosition = "center";

        let names = document.createElement("p");
        names.textContent = "Web creators: Ahuva S, Blimi S, Tamar Z";

        let year = document.createElement("p");
        year.textContent = "Fall Semester 2025";

        overlay.appendChild(names);
        overlay.appendChild(year);
    });

    overlay.addEventListener("click", function () {
        overlay.style.display = "none";
    });
}

// CALL THE FUNCTION — this was missing
on(hackersImg);


