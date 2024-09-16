// script.js

document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var navbar = document.getElementById('navbar');

    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('show');
    });

    document.querySelectorAll('.details-btn').forEach(button => {
        button.addEventListener('click', function() {
            var description = this.getAttribute('data-description');
            var modal = document.getElementById('modal');
            var modalText = document.getElementById('modal-text');
            modalText.textContent = description;
            modal.style.display = 'flex';
        });
    });

    document.querySelector('.modal .close').addEventListener('click', function() {
        document.getElementById('modal').style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById('modal')) {
            document.getElementById('modal').style.display = 'none';
        }
    });
});
