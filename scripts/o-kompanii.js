document.addEventListener('DOMContentLoaded', function() {
    class GallerySlider {
        constructor(container) {
            this.container = container;
            this.track = container.querySelector('.slider-track');
            this.slides = container.querySelectorAll('.slide');
            this.dots = container.querySelectorAll('.slider-dot');
            this.prevBtn = container.querySelector('.slider-arrow.prev');
            this.nextBtn = container.querySelector('.slider-arrow.next');
            this.progressBar = container.querySelector('.slider-progress-bar');
            this.currentSlideEl = container.querySelector('.current-slide');
            this.totalSlidesEl = container.querySelector('.total-slides');
            
            this.currentSlide = 0;
            this.slideCount = this.slides.length;
            this.autoPlayInterval = null;
            this.isAnimating = false;
            this.touchStartX = 0;
            this.touchEndX = 0;
            
            this.init();
        }
        
        init() {
            this.totalSlidesEl.textContent = this.slideCount;
            this.updateSlideNumber();
            
            this.prevBtn.addEventListener('click', () => this.prev());
            this.nextBtn.addEventListener('click', () => this.next());
            
            this.dots.forEach((dot, index) => {
                dot.addEventListener('click', () => this.goToSlide(index));
            });
            
            this.track.addEventListener('touchstart', (e) => {
                this.touchStartX = e.changedTouches[0].screenX;
            });
            
            this.track.addEventListener('touchend', (e) => {
                this.touchEndX = e.changedTouches[0].screenX;
                this.handleSwipe();
            });
            
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') this.prev();
                if (e.key === 'ArrowRight') this.next();
            });
            
            this.container.addEventListener('mouseenter', () => this.stopAutoPlay());
            this.container.addEventListener('mouseleave', () => this.startAutoPlay());
            
            this.startAutoPlay();
            this.startProgressBar();
        }
        
        goToSlide(index) {
            if (this.isAnimating) return;
            
            this.isAnimating = true;
            this.currentSlide = index;
            
            this.track.style.transform = `translateX(-${this.currentSlide * 100}%)`;
            
            this.slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === this.currentSlide);
            });
            
            this.dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === this.currentSlide);
            });
            
            this.updateSlideNumber();
            this.resetProgressBar();
            
            setTimeout(() => {
                this.isAnimating = false;
            }, 600);
        }
        
        next() {
            if (this.isAnimating) return;
            const nextSlide = (this.currentSlide + 1) % this.slideCount;
            this.goToSlide(nextSlide);
        }
        
        prev() {
            if (this.isAnimating) return;
            const prevSlide = (this.currentSlide - 1 + this.slideCount) % this.slideCount;
            this.goToSlide(prevSlide);
        }
        
        handleSwipe() {
            const swipeThreshold = 50;
            const diff = this.touchStartX - this.touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
        }
        
        startAutoPlay() {
            this.stopAutoPlay();
            this.autoPlayInterval = setInterval(() => {
                this.next();
            }, 5000);
        }
        
        stopAutoPlay() {
            if (this.autoPlayInterval) {
                clearInterval(this.autoPlayInterval);
                this.autoPlayInterval = null;
            }
        }
        
        startProgressBar() {
            if (this.progressInterval) {
                clearInterval(this.progressInterval);
            }
            
            this.progressInterval = setInterval(() => {
                const currentWidth = parseInt(this.progressBar.style.width) || 0;
                const newWidth = currentWidth + 1;
                
                if (newWidth <= 100) {
                    this.progressBar.style.width = newWidth + '%';
                } else {
                    this.resetProgressBar();
                }
            }, 50);
        }
        
        resetProgressBar() {
            this.progressBar.style.width = '0%';
        }
        
        updateSlideNumber() {
            this.currentSlideEl.textContent = this.currentSlide + 1;
        }
    }
    
    const gallerySlider = document.querySelector('.gallery-slider');
    if (gallerySlider) {
        new GallerySlider(gallerySlider);
    }

    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isActive = content.classList.contains('active');
            
            document.querySelectorAll('.accordion-content').forEach(item => {
                item.classList.remove('active');
            });
            document.querySelectorAll('.accordion-header').forEach(item => {
                item.classList.remove('active');
            });
            
            if (!isActive) {
                content.classList.add('active');
                this.classList.add('active');
            }
        });
    });
});