const scrollButton = document.getElementById('toTop');
const jobPopup = document.getElementById('jobPopup');
const workButton = document.getElementById('workButton');

function toggleScrollButton() {
    if (window.scrollY > 300) {
        scrollButton.classList.add('show');
    } else {
        scrollButton.classList.remove('show');
    }
}

toggleScrollButton();
window.addEventListener('scroll', toggleScrollButton);

scrollButton.addEventListener('click', function() {
    window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
    });
});

const navbarToggler = document.getElementById('navbarToggler');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

function disableScroll() {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';
}

function enableScroll() {
    document.body.style.overflow = '';
    document.body.style.height = '';
}

function hideElements() {
    if (scrollButton) scrollButton.style.display = 'none';
    if (jobPopup) jobPopup.style.display = 'none';
    if (workButton) workButton.style.display = 'none';
}

function showElements() {
    if (scrollButton) scrollButton.style.display = '';
    if (jobPopup) jobPopup.style.display = '';
    if (workButton) workButton.style.display = '';
}

navbarToggler.addEventListener('click', function() {
    const isActive = this.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    document.body.classList.toggle('mobile-menu-open', isActive);
    
    if (isActive) {
        disableScroll();
        hideElements();
    } else {
        enableScroll();
        showElements();
    }
});

mobileMenuOverlay.addEventListener('click', function() {
    navbarToggler.classList.remove('active');
    mobileMenu.classList.remove('active');
    this.classList.remove('active');
    document.body.classList.remove('mobile-menu-open');
    enableScroll();
    showElements();
});

const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (this.getAttribute('target') === '_blank') return;
        
        navbarToggler.classList.remove('active');
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.classList.remove('mobile-menu-open');
        enableScroll();
        showElements();
    });
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        navbarToggler.classList.remove('active');
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.classList.remove('mobile-menu-open');
        enableScroll();
        showElements();
    }
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 992 && mobileMenu.classList.contains('active')) {
        navbarToggler.classList.remove('active');
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.classList.remove('mobile-menu-open');
        enableScroll();
        showElements();
    }
});

const workLink = document.querySelector('footer a[href="rabota.html"]');

function toggleWorkButton() {
    if (window.scrollY > 300) {
        workButton.classList.add('show');
    } else {
        workButton.classList.remove('show');
    }
}

if (workButton) {
    toggleWorkButton();
    window.addEventListener('scroll', toggleWorkButton);
}

if (jobPopup) {
    const laterBtn = document.getElementById('laterBtn');

    function shouldShowPopup() {
        if (sessionStorage.getItem('jobPopupShown')) {
            return false;
        }
        
        const nextShowTime = localStorage.getItem('jobPopupNextShow');
        if (nextShowTime && Date.now() < parseInt(nextShowTime)) {
            return false;
        }
        
        return true;
    }

    setTimeout(() => {
        if (shouldShowPopup()) {
            jobPopup.classList.add('active');
            sessionStorage.setItem('jobPopupShown', 'true');
        }
    }, 2000);

    if (laterBtn) {
        laterBtn.addEventListener('click', function() {
            jobPopup.classList.remove('active');
            localStorage.setItem('jobPopupNextShow', Date.now() + 24 * 60 * 60 * 1000);
        });
    }

    jobPopup.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });

    function highlightWorkLink() {
        if (workLink) {
            workLink.classList.add('highlight', 'highlight-pulse');
            
            const footer = document.querySelector('footer');
            if (footer) {
                footer.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start'
                });
            }
            
            setTimeout(() => {
                workLink.classList.remove('highlight-pulse');
            }, 5000);
        }
    }

    const vacanciesBtn = document.getElementById('vacanciesBtn');
    if (vacanciesBtn) {
        vacanciesBtn.addEventListener('click', function(e) {
            jobPopup.classList.remove('active');
            setTimeout(() => {
                window.location.href = this.href;
            }, 300);
        });
    }

    window.showJobPopup = function() {
        jobPopup.classList.add('active');
    };
}
