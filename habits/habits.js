// Load custom habits from local storage on page load
window.onload = function () {
    loadCustomHabits();
};

function addSelectedHabit(habitName) {
    // You can add your logic here to handle the selected habit
    console.log('Selected Habit:', habitName);
}

function addCustomHabit() {
    var customHabitName = document.getElementById('customHabitName').value;
    var customHabitImage = document.getElementById('customHabitImage').files[0];

    if (customHabitName.trim() !== '' && customHabitImage) {
        // Save the custom habit to local storage
        saveCustomHabit(customHabitName, customHabitImage);

        // Load and display all custom habits
        loadCustomHabits();

        // Clear the input fields
        document.getElementById('customHabitName').value = '';
        document.getElementById('customHabitImage').value = '';
    }
}

function saveCustomHabit(habitName, habitImage) {
    // Get existing custom habits from local storage
    var customHabits = JSON.parse(localStorage.getItem('customHabits')) || [];

    // Create a FileReader to read the selected image
    var reader = new FileReader();
    reader.onload = function (event) {
        // Add the new custom habit with name and base64-encoded image data
        customHabits.push({ name: habitName, image: event.target.result });

        // Save the updated custom habits to local storage
        localStorage.setItem('customHabits', JSON.stringify(customHabits));
    };

    // Read the selected image as a data URL
    reader.readAsDataURL(habitImage);
}

function loadCustomHabits() {
    // Get custom habits from local storage
    var customHabits = JSON.parse(localStorage.getItem('customHabits')) || [];

    // Display custom habits
    var customHabitList = document.getElementById('customHabitList');
    customHabitList.innerHTML = '';

    customHabits.forEach(function (habit, index) {
        if (habit && habit.name) {
            var customHabitDiv = document.createElement('div');
            customHabitDiv.classList.add('custom-habit');
            customHabitDiv.innerHTML = `
                <img src="${habit.image}" alt="Custom Habit Image">
                <p>${habit.name}</p>
                <button class="delete-button" onclick="deleteCustomHabit(${index})">Delete</button>
            `;
            customHabitList.appendChild(customHabitDiv);
        }
    });
}

function deleteCustomHabit(index) {
    // Get existing custom habits from local storage
    var customHabits = JSON.parse(localStorage.getItem('customHabits')) || [];

    // Remove the custom habit at the specified index
    customHabits.splice(index, 1);

    // Save the updated custom habits to local storage
    localStorage.setItem('customHabits', JSON.stringify(customHabits));

    // Load and display all custom habits
    loadCustomHabits();
}