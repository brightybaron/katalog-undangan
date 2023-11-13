const urlParams = new URLSearchParams(window.location.search);
const namaTamu = urlParams.get("tamu") || "";
const gelar = urlParams.get("p") || "Bapak/Ibu/Sdr/i";
const tamuContainer = document.querySelector(".modal-text h4 span");
tamuContainer.innerText = `${gelar} ${namaTamu}`;
document.querySelector("#formNama").value = namaTamu;
// penulisan di search bar -> pronoun + nama tamu  e.g ?p=Bapak&tamu=Bagus%20Firmansyah
