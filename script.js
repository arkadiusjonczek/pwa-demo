const input = document.getElementById('noteInput');
const list = document.getElementById('notesList');
let notes = JSON.parse(localStorage.getItem('myNotes')) || [];

function render() {
    list.innerHTML = '';
    notes.forEach((note, index) => {
        list.innerHTML += `
            <div style="background: white; padding: 10px; margin-bottom: 10px; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <p id="text-${index}">${note}</p>
                <button onclick="editNote(${index})" style="background: #ffc107;">Ändern</button>
                <button onclick="deleteNote(${index})" style="background: #dc3545;">Löschen</button>
            </div>`;
    });
    localStorage.setItem('myNotes', JSON.stringify(notes));
}

function saveNote() {
    if (!input.value.trim()) return;
    notes.push(input.value);
    input.value = '';
    render();
}

function deleteNote(index) {
    notes.splice(index, 1);
    render();
}

function editNote(index) {
    const newText = prompt("Notiz bearbeiten:", notes[index]);
    if (newText !== null) {
        notes[index] = newText;
        render();
    }
}

// Initiales Laden
render();

