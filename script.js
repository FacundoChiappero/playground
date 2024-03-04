const editor = document.getElementById('editor');
    const preview = document.getElementById('preview');

    function updatePreview() {
      preview.innerHTML = editor.value;
    }

    // Actualizar la vista previa cuando el usuario escribe en el editor
    editor.addEventListener('input', updatePreview);

    // Actualizar la vista previa al cargar la página
    window.addEventListener('load', updatePreview);