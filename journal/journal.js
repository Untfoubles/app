// Retrieve stored journal entries on page load
window.onload = function () {
   const storedEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
   const journalEntries = document.getElementById('journalEntries');

   storedEntries.forEach(entry => {
      const entryElement = createEntryElement(entry.text, entry.timestamp);
      journalEntries.appendChild(entryElement);
   });
};

function createEntryElement(text, timestamp) {
   const entryElement = document.createElement('div');
   entryElement.classList.add('entry');

   const deleteBtn = document.createElement('button');
   deleteBtn.classList.add('delete-btn');
   deleteBtn.textContent = 'Delete';
   deleteBtn.addEventListener('click', () => {
      deleteEntry(entryElement, text, timestamp);
   });

   entryElement.innerHTML = `<p>${text}</p><p class="timestamp">${timestamp}</p>`;
   entryElement.appendChild(deleteBtn);

   return entryElement;
}

function submitJournal(event) {
   event.preventDefault();

   const entryText = document.getElementById('journalEntry').value;
   const timestamp = new Date().toLocaleString();

   const entryElement = createEntryElement(entryText, timestamp);

   document.getElementById('journalEntries').appendChild(entryElement);

   // Save entry to localStorage
   const storedEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
   storedEntries.push({ text: entryText, timestamp: timestamp });
   localStorage.setItem('journalEntries', JSON.stringify(storedEntries));

   // Clear the textarea after submission
   document.getElementById('journalEntry').value = '';
}

function deleteEntry(entryElement, text, timestamp) {
   entryElement.remove();

   // Remove entry from localStorage
   const storedEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
   const updatedEntries = storedEntries.filter(entry => entry.text !== text || entry.timestamp !== timestamp);
   localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));
}