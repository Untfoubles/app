// laden van extra gewoontes vanuit mijn lokale opslag bij het laden van de pagina
window.onload = function () {
   loadCustomHabits();
};

function addSelectedHabit(habitName) {
   // Hier kun je je logica toevoegen om met de geselecteerde gewoonte om te gaan
   console.log('Geselecteerde Gewoonte:', habitName);
}

function addCustomHabit() {
   var customHabitName = document.getElementById('customHabitName').value;
   var customHabitImage = document.getElementById('customHabitImage').files[0];

   if (customHabitName.trim() !== '' && customHabitImage) {
       // de extra gewoontes opslaan in lokale opslag
       saveCustomHabit(customHabitName, customHabitImage);

       // Laden en weergeven van alle aangepaste gewoontes
       loadCustomHabits();

       // invoervelden leegmaken
       document.getElementById('customHabitName').value = '';
       document.getElementById('customHabitImage').value = '';
   }
}

function saveCustomHabit(habitName, habitImage) {
   // bestaande gewoontes ophalen uit de lokale opslag
   var customHabits = JSON.parse(localStorage.getItem('customHabits')) || [];

   // Een FileReader maken om de geselecteerde afbeelding te lezen
   var reader = new FileReader();
   reader.onload = function (event) {
       customHabits.push({ name: habitName, image: event.target.result });
       // bijgewerkte aangepaste gewoontes opslaan in mijn lokale opslag
       localStorage.setItem('customHabits', JSON.stringify(customHabits));
   };

   // de geselecteerde afbeelding als een data-URL lezen
   reader.readAsDataURL(habitImage);
}

function loadCustomHabits() {
   // aangepaste gewoontes ophalen uit de lokale opslag
   var customHabits = JSON.parse(localStorage.getItem('customHabits')) || [];

   // aangepaste gewoontes weergeven
   var customHabitList = document.getElementById('customHabitList');
   customHabitList.innerHTML = '';

   customHabits.forEach(function (habit, index) {
       if (habit && habit.name) {
           var customHabitDiv = document.createElement('div');
           customHabitDiv.classList.add('custom-habit');
           customHabitDiv.innerHTML = `
               <img src="${habit.image}" alt="Aangepaste Gewoonte Afbeelding">
               <p>${habit.name}</p>
               <button class="delete-button" onclick="deleteCustomHabit(${index})">Verwijderen</button>
           `;
           customHabitList.appendChild(customHabitDiv);
       }
   });
}

function deleteCustomHabit(index) {
   // bestaande aangepaste gewoontes ophalen uit de lokale opslag
   var customHabits = JSON.parse(localStorage.getItem('customHabits')) || [];

   // de aangepaste gewoonte op de opgegeven index verwijderen
   customHabits.splice(index, 1);

   // de bijgewerkte aangepaste gewoontes opslaan in de lokale opslag
   localStorage.setItem('customHabits', JSON.stringify(customHabits));

   // laden en weergeven van alle aangepaste gewoontes
   loadCustomHabits();
}
