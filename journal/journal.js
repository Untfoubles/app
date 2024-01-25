window.onload = function () {
   // haalt de opgeslagen dagboekvermeldingen op uit de lokale opslag van mijn browser
   const storedEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
   const journalEntries = document.getElementById('journalEntries');

   // bij elk opgeslagen dagboekvermelding...
   storedEntries.forEach(entry => {
      // Maakt een nieuwe html-element voor de tekst en voegt het toe aan de pagina
      const entryElement = createEntryElement(entry.text, entry.timestamp);
      journalEntries.appendChild(entryElement);
   });
};

// Functie om een html-element voor een dagboekvermelding te maken
function createEntryElement(text, timestamp) {
   // maakt een nieuw <div> element
   const entryElement = document.createElement('div');
   // voegt de tekst en timestamp toe aan het element
   entryElement.innerHTML = `<p>${text}</p><span>${timestamp}</span>`;
   return entryElement;
}

function submitJournal(event) {
   event.preventDefault();

   const entryText = document.getElementById('journalEntry').value;
   const timestamp = new Date().toLocaleString();

   const entryElement = createEntryElement(entryText, timestamp);

   entryElement.classList.add('journal-entry');
   
   document.getElementById('journalEntries').appendChild(entryElement);
   
// haalt de opgeslagen dagboektekst op uit de lokale opslag van mijn browser
const storedEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];

//voegt de nieuwe dagboektekst toe aan de lijst van opgeslagen vermeldingen
storedEntries.push({ text: entryText, timestamp: timestamp });

// slaat de lijst van dagboekvermeldingen op in de lokale opslag van mijn browser
localStorage.setItem('journalEntries', JSON.stringify(storedEntries));


   // cleart de tekstarea na verzending
   document.getElementById('journalEntry').value = '';
}

function deleteEntry(entryElement, text, timestamp) {
   entryElement.remove();

   // verwijderd toegevoegde text van localStorage
   const storedEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
   const updatedEntries = storedEntries.filter(entry => entry.text !== text || entry.timestamp !== timestamp);
   localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));
}