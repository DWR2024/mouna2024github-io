document.addEventListener("DOMContentLoaded", function() {
    function showSection(sectionId) {
        const sections = document.querySelectorAll(".content-section");
        sections.forEach(section => {
            section.style.display = section.id === sectionId ? "block" : "none";
        });
    }

    function addReservation(reservationText) {
        const reservationList = document.getElementById("reservationList");
        const reservationItem = document.createElement("p");
        reservationItem.innerText = reservationText;
        reservationList.appendChild(reservationItem);
    }

    document.querySelector("nav").addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON") {
            const sectionId = event.target.getAttribute("onclick").split("'")[1];
            showSection(sectionId);
        }
    });

    document.getElementById("reserverSalleForm")?.addEventListener("submit", function(event) {
        event.preventDefault();
        const nom = document.getElementById("nom").value;
        const prenom = document.getElementById("prenom").value;
        const date = document.getElementById("date").value;
        const heure = document.getElementById("heure").value;
        const heureFin = document.getElementById("heureFin").value;
        const typeSalle = document.getElementById("typeSalle").value;
        const nomSalle = document.getElementById("nomSalle").value;

        const confirmationMessage = `Salle ${nomSalle} réservée avec succès pour ${prenom} ${nom} le ${date} à ${heure} jusqu'à ${heureFin} ${typeSalle}!`;
        document.getElementById("confirmationMessage").innerText = confirmationMessage;
        addReservation(confirmationMessage);
    });

    document.getElementById("reserverParkingForm")?.addEventListener("submit", function(event) {
        event.preventDefault();
        const nom = document.getElementById("nom").value;
        const prenom = document.getElementById("prenom").value;
        const date = document.getElementById("date").value;
        const heure = document.getElementById("heure").value;
        const heureFin = document.getElementById("heureFin").value;

        const confirmationMessage = `Place de parking réservée avec succès pour ${prenom} ${nom} le ${date} à ${heure} jusqu'à ${heureFin}!`;
        document.getElementById("confirmationMessage").innerText = confirmationMessage;
        addReservation(confirmationMessage);
    });

    document.getElementById("reserverRepasForm")?.addEventListener("submit", function(event) {
        event.preventDefault();
        const nom = document.getElementById("nom").value;
        const prenom = document.getElementById("prenom").value;
        const dateRepas = document.getElementById("dateRepas").value;
        const heureRepas = document.getElementById("heureRepas").value;
        const heureFin = document.getElementById("heureFin").value;
        const menu = document.getElementById("menu").value;

        const confirmationMessage = `Plat réservé avec succès pour ${prenom} ${nom} le ${dateRepas} à ${heureRepas} jusqu'à ${heureFin}  ${menu}!`;
        document.getElementById("confirmationMessage").innerText = confirmationMessage;
        addReservation(confirmationMessage);
    });

    document.getElementById("programmerMatchForm")?.addEventListener("submit", function(event) {
        event.preventDefault();
        const nom = document.getElementById("nom").value;
        const prenom = document.getElementById("prenom").value;
        const dateMatch = document.getElementById("dateMatch").value;
        const heureMatch = document.getElementById("heureMatch").value;
        const heureFin = document.getElementById("heureFin").value;
        const equipeAdverse = document.getElementById("equipeAdverse").value;

        const confirmationMessage = `Match programmé avec succès pour ${prenom} ${nom} le ${dateMatch} à ${heureMatch} jusqu'à ${heureFin} contre ${equipeAdverse}!`;
        document.getElementById("confirmationMessage").innerText = confirmationMessage;
        addReservation(confirmationMessage);
    });

    document.getElementById("demanderBureauForm")?.addEventListener("submit", function(event) {
        event.preventDefault();
        const nom = document.getElementById("nom").value;
        const prenom = document.getElementById("prenom").value;
        const fonction = document.getElementById("fonction").value;

        const confirmationMessage = `Bureau demandé avec succès pour ${prenom} ${nom}, Fonction: ${fonction}!`;
        document.getElementById("confirmationMessage").innerText = confirmationMessage;
        addReservation(confirmationMessage);
    });
});
