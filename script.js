const input = document.getElementById('noteInput');
const output = document.getElementById('output');

// Beim Laden alte Daten anzeigen
window.onload = () => {
    output.innerText = localStorage.getItem('myNote') || 'Noch keine Notiz vorhanden.';
};

function saveNote() {
    const text = input.value;
    localStorage.setItem('myNote', text); // Speichert im Browser-Speicher
    output.innerText = text;
    input.value = '';
}

