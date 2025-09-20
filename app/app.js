let kosik = [];

function pridajDoKosika(nazov, cena) {
  kosik.push({ nazov, cena: Number(cena) });
  zobrazKosik();
}

function zobrazKosik() {
  const objednavkaDiv = document.getElementById("objednavka");
  if (!objednavkaDiv) {
    console.error("Element #objednavka nenájdený.");
    return;
  }
  objednavkaDiv.innerHTML = "";

  if (kosik.length === 0) {
    const div = document.createElement("div");
    div.textContent = "Your cart is currently empty";
    objednavkaDiv.appendChild(div);
    return;
  }

  kosik.forEach((polozka, index) => {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.justifyContent = "space-between";
    row.style.alignItems = "center";
    row.style.margin = "0.5em 0";

    const left = document.createElement("span");
    left.textContent = `${polozka.nazov} - ${polozka.cena.toFixed(2)} €`;

    const right = document.createElement("div");

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => odstranZKosika(index));

    right.appendChild(removeBtn);
    row.appendChild(left);
    row.appendChild(right);
    objednavkaDiv.appendChild(row);
  });

  const total = kosik.reduce((sum, p) => sum + p.cena, 0);

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
  checkoutBtn.addEventListener("click", () => {
    window.location.href = "checkout.html";
  });

  totalDiv.appendChild(cenaText);
  totalDiv.appendChild(checkoutBtn);
  objednavkaDiv.appendChild(totalDiv);
}

function odstranZKosika(index) {
  if (index < 0 || index >= kosik.length) return;
  kosik.splice(index, 1);
  zobrazKosik();
}

document.addEventListener("DOMContentLoaded", () => {
  zobrazKosik();
});