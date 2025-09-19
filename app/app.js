let kosik = [];
let total = 0;

function pridajDoKosika(nazov, cena) {
    kosik.push({ nazov, cena });
    total += cena;
    zobrazKosik();
}

function zobrazKosik() {
    const objednavkaDiv = document.getElementById("objednavka");
    objednavkaDiv.innerHTML = "";

    if (kosik.length === 0) {
        const div = document.createElement("div");
        div.textContent = "Your cart is currently empty";
        objednavkaDiv.appendChild(div);
        return;
    }

    kosik.forEach((polozka, index) => {
        const div = document.createElement("div");
        div.textContent = `${polozka.nazov} - ${polozka.cena.toFixed(2)} €`;
        div.style.margin = "0.5em";

        const btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.style.marginLeft = "10px";
        btn.onclick = () => odstranZKosika(index);

        div.appendChild(btn);
        objednavkaDiv.appendChild(div);
    });

    const totalDiv = document.createElement("div");
    totalDiv.style.display = "flex";
    totalDiv.style.justifyContent = "space-between";
    totalDiv.style.alignItems = "center";
    totalDiv.style.marginTop = "1em";

    const cenaText = document.createElement("span");
    cenaText.innerHTML = `<strong>Total: ${total.toFixed(2)} €</strong>`;

    const checkoutBtn = document.createElement("button");
    checkoutBtn.textContent = "Checkout";
    checkoutBtn.style.padding = "0.5em 1em";
    checkoutBtn.style.marginLeft = "10px";

    checkoutBtn.onclick = () => {
        window.location.href = "checkout.html";
    };

    totalDiv.appendChild(cenaText);
    totalDiv.appendChild(checkoutBtn);
    objednavkaDiv.appendChild(totalDiv);
}