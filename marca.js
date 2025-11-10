fetch('marca.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('logo-container').innerHTML = html;
    });