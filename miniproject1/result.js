// Get name and topic from URL
const params = new URLSearchParams(window.location.search);
const name = params.get("name");
const topic = params.get("topic");

const messageE1 = document.getElementById("cheerMessage");
messageE1.innerText = "Generating your cheer...✨";

fetch("http://localhost:5500/api/quote", {
  method: "POST",
  headers: { "Content-type": "application/json" },
  body: JSON.stringify({ topic }),
})
  .then((res) => res.json())
  .then((data) => {
    const cheerMessage = `${name}, ${data.quote}`;
    document.getElementById("cheerMessage").innerText = cheerMessage;
  })
  .catch((err) => {
    console.error("Error fetching quote: ", err);
    document.getElementById(
      "cheerMessage"
    ).innerText = `${name}, you are amazing just as you are!`;
  });

function goHome() {
  window.location.href = "index.html";
}

function saveQuote() {
  const quote = document.getElementById("cheerMessage").innerText;
  let saved = JSON.parse(localStorage.getItem("cheerQuotes")) || [];
  saved.push(quote);
  localStorage.setItem("cheerQuotes", JSON.stringify(saved));
  alert("Saved your quote! 💾");
}

function newQuote() {
  window.location.reload();
}
function seeMyQuotes() {
  window.location.href = "savedQuote.html";
}
