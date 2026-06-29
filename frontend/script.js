const cards = document.querySelectorAll(".card");

cards.forEach(card=>{
card.addEventListener("mouseenter",()=>{
card.style.boxShadow="0 15px 40px rgba(37,99,235,.25)";
});

card.addEventListener("mouseleave",()=>{
card.style.boxShadow="0 8px 25px rgba(0,0,0,.08)";
});
});