const busModelBtns = document.querySelectorAll('.bus-model-btn');

busModelBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const busModel = this.getAttribute('data-bus');
        const modal = document.getElementById(`modal-${busModel}`);
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

const closeButtons = document.querySelectorAll('.close-modal');
closeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const modal = this.closest('.modal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});

window.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
