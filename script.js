/* ==========================================================================
   Portfolio Website JavaScript
   Handles theme management, navigation, and animations
   ========================================================================== */

/**
 * Theme Management Class
 * Handles light/dark theme switching with localStorage persistence
 */
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.themeToggleMobile = document.getElementById('themeToggleMobile');
        this.init();
    }

    init() {
        // Check for saved theme preference or default to system preference
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme) {
            this.setTheme(savedTheme);
        } else if (prefersDark) {
            this.setTheme('dark');
        } else {
            this.setTheme('light');
        }

        // Add event listeners for theme toggles (desktop and mobile)
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                this.setTheme(newTheme);
            });
        }

        if (this.themeToggleMobile) {
            this.themeToggleMobile.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                this.setTheme(newTheme);
            });
        }

        // Listen for system theme changes (if no manual preference is set)
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    /**
     * Set the theme and update UI elements
     * @param {string} theme - 'light' or 'dark'
     */
    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update ARIA labels for accessibility
        if (this.themeToggle) {
            this.themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
        }
        if (this.themeToggleMobile) {
            this.themeToggleMobile.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
        }
    }
}

/**
 * Desktop Navigation Management Class
 * Handles single-page navigation for desktop layout
 */
class DesktopNavigation {
    constructor() {
        this.menuItems = document.querySelectorAll('.menu-item[data-page]');
        this.pageContents = document.querySelectorAll('.page-content');
        this.init();
    }

    init() {
        // Add click listeners to menu items
        this.menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const targetPage = item.getAttribute('data-page');
                this.showPage(targetPage);
                this.updateActiveMenu(targetPage);
            });
        });
    }

    /**
     * Show the specified page and hide others
     * @param {string} pageId - ID of the page to show
     */
    showPage(pageId) {
        // Hide all pages
        this.pageContents.forEach(page => {
            page.classList.remove('active');
        });

        // Show target page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }
    }

    /**
     * Update the active menu item styling
     * @param {string} pageId - ID of the active page
     */
    updateActiveMenu(pageId) {
        // Remove active class from all menu items
        this.menuItems.forEach(item => {
            item.classList.remove('active');
        });

        // Add active class to clicked menu item
        const activeItem = document.querySelector(`[data-page="${pageId}"]`);
        if (activeItem) {
            activeItem.classList.add('active');
        }
    }
}

/**
 * Animation Manager Class
 * Handles page load animations for both desktop and mobile layouts
 */
class AnimationManager {
    constructor() {
        this.init();
    }

    init() {
        this.animateMobileLayout();
        this.animateDesktopLayout();
    }

    /**
     * Animate mobile layout elements
     */
    animateMobileLayout() {
        const mobileContainer = document.querySelector('.mobile-container .container');
        const mobileMenuItems = document.querySelectorAll('.mobile-container .menu-item');
        
        if (mobileContainer) {
            // Animate main container
            mobileContainer.style.opacity = '0';
            mobileContainer.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                mobileContainer.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                mobileContainer.style.opacity = '1';
                mobileContainer.style.transform = 'translateY(0)';
            }, 100);
            
            // Stagger menu items animation
            mobileMenuItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(10px)';
                
                setTimeout(() => {
                    item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 200 + (index * 100));
            });
        }
    }

    /**
     * Animate desktop layout elements
     */
    animateDesktopLayout() {
        const sidebar = document.querySelector('.sidebar');
        const desktopMenuItems = document.querySelectorAll('.sidebar .menu-item');
        const contentArea = document.querySelector('.content-area');
        
        if (sidebar) {
            // Animate sidebar
            sidebar.style.opacity = '0';
            sidebar.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                sidebar.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                sidebar.style.opacity = '1';
                sidebar.style.transform = 'translateX(0)';
            }, 100);
            
            // Stagger menu items animation
            desktopMenuItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(-10px)';
                
                setTimeout(() => {
                    item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, 200 + (index * 100));
            });
        }

        if (contentArea) {
            // Animate content area
            contentArea.style.opacity = '0';
            contentArea.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                contentArea.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                contentArea.style.opacity = '1';
                contentArea.style.transform = 'translateY(0)';
            }, 300);
        }
    }
}

/**
 * Project Card Manager Class
 * Loads projects from JSON and handles flip card interactions
 */
class ProjectCardManager {
    constructor() {
        this.projectsContainer = document.getElementById('projectsContainer');
        this.projects = [];
        this.carousels = new Map();
        this.currentlyFlippedCard = null;
        this.init();
    }

    async init() {
        await this.loadProjects();
        this.renderProjects();
        this.attachEventListeners();
    }

    /**
     * Load projects from JSON file
     */
    async loadProjects() {
        try {
            const response = await fetch('projects.json');
            this.projects = await response.json();
        } catch (error) {
            console.error('Error loading projects:', error);
        }
    }

    /**
     * Render all projects to the DOM
     */
    renderProjects() {
        this.projectsContainer.innerHTML = '';
        
        this.projects.forEach(project => {
            const card = this.createProjectCard(project);
            this.projectsContainer.appendChild(card);
        });
    }

    /**
     * Create a project card element
     * @param {Object} project - Project data
     * @returns {HTMLElement} - Card element
     */
    createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.dataset.projectId = project.id;
        
        const cardInner = document.createElement('div');
        cardInner.className = 'card-inner';
        
        // Create front of card
        const cardFront = this.createCardFront(project);
        
        // Create back of card
        const cardBack = this.createCardBack(project);
        
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        
        return card;
    }

    /**
     * Create front of card
     * @param {Object} project - Project data
     * @returns {HTMLElement} - Card front element
     */
    createCardFront(project) {
        const front = document.createElement('div');
        front.className = 'card-front';
        
        const title = document.createElement('h3');
        title.className = 'project-title';
        title.textContent = project.title;
        
        const description = document.createElement('p');
        description.className = 'project-description';
        description.textContent = project.description;
        
        // Create bottom container with Tech | Hint | Links
        const bottomContainer = document.createElement('div');
        bottomContainer.className = 'card-bottom';
        
        // Tech tags
        const techContainer = document.createElement('div');
        techContainer.className = 'project-tech';
        project.tech.forEach(tech => {
            const tag = document.createElement('span');
            tag.className = 'tech-tag';
            tag.textContent = tech;
            techContainer.appendChild(tag);
        });
        
        // Hint text
        const hint = document.createElement('p');
        hint.className = 'card-hint';
        hint.textContent = 'Click for Videos';
        
        // Create action links on front
        const actions = document.createElement('div');
        actions.className = 'card-actions';
        
        project.links.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.className = 'card-link';
            a.textContent = link.label;
            a.target = '_blank';
            a.rel = 'noopener';
            actions.appendChild(a);
        });
        
        bottomContainer.appendChild(techContainer);
        bottomContainer.appendChild(hint);
        bottomContainer.appendChild(actions);
        
        front.appendChild(title);
        front.appendChild(description);
        front.appendChild(bottomContainer);
        
        return front;
    }

    /**
     * Create back of card with video carousel
     * @param {Object} project - Project data
     * @returns {HTMLElement} - Card back element
     */
    createCardBack(project) {
        const back = document.createElement('div');
        back.className = 'card-back';
        
        // Create video carousel (only videos on the back)
        const carousel = this.createVideoCarousel(project);
        back.appendChild(carousel);
        
        // Add hint text on back
        const backHint = document.createElement('p');
        backHint.className = 'card-hint';
        backHint.textContent = 'Click to view information';
        back.appendChild(backHint);
        
        return back;
    }

    /**
     * Create video carousel
     * @param {Object} project - Project data
     * @returns {HTMLElement} - Carousel element
     */
    createVideoCarousel(project) {
        const carouselContainer = document.createElement('div');
        carouselContainer.className = 'video-carousel';
        
        const track = document.createElement('div');
        track.className = 'carousel-track';
        
        // Add video slides
        project.videos.forEach((video, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            
            if (video.type === 'youtube') {
                const iframe = document.createElement('iframe');
                iframe.className = 'project-iframe';
                iframe.src = video.url;
                iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                iframe.allowFullscreen = true;
                slide.appendChild(iframe);
            } else if (video.type === 'mp4') {
                const videoEl = document.createElement('video');
                videoEl.className = 'project-video';
                videoEl.controls = true;
                videoEl.loop = true;
                const source = document.createElement('source');
                source.src = video.url;
                source.type = 'video/mp4';
                videoEl.appendChild(source);
                slide.appendChild(videoEl);
            }
            
            track.appendChild(slide);
        });
        
        carouselContainer.appendChild(track);
        
        // Add navigation if more than one video
        if (project.videos.length > 1) {
            const nav = this.createCarouselNav(project.videos.length);
            const prevBtn = this.createCarouselArrow('prev');
            const nextBtn = this.createCarouselArrow('next');
            
            carouselContainer.appendChild(prevBtn);
            carouselContainer.appendChild(nextBtn);
            carouselContainer.appendChild(nav);
            
            // Store carousel data
            this.carousels.set(project.id, {
                track,
                currentIndex: 0,
                totalSlides: project.videos.length,
                dots: nav.querySelectorAll('.carousel-dot'),
                prevBtn,
                nextBtn
            });
        }
        
        return carouselContainer;
    }

    /**
     * Create carousel navigation dots
     * @param {number} count - Number of slides
     * @returns {HTMLElement} - Navigation element
     */
    createCarouselNav(count) {
        const nav = document.createElement('div');
        nav.className = 'carousel-nav';
        
        for (let i = 0; i < count; i++) {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
            dot.dataset.index = i;
            nav.appendChild(dot);
        }
        
        return nav;
    }

    /**
     * Create carousel arrow button
     * @param {string} direction - 'prev' or 'next'
     * @returns {HTMLElement} - Arrow button
     */
    createCarouselArrow(direction) {
        const btn = document.createElement('button');
        btn.className = `carousel-arrow ${direction}`;
        btn.innerHTML = direction === 'prev' ? '‹' : '›';
        btn.setAttribute('aria-label', `${direction} slide`);
        return btn;
    }

    /**
     * Attach event listeners to cards and carousels
     */
    attachEventListeners() {
        const cards = document.querySelectorAll('.project-card');
        
        cards.forEach(card => {
            card.addEventListener('click', (e) => {
                // Don't flip if clicking on a link or carousel control
                if (e.target.closest('.card-link, .carousel-arrow, .carousel-dot')) {
                    return;
                }
                
                this.flipCard(card);
            });
        });
        
        // Attach carousel listeners
        this.carousels.forEach((carousel, projectId) => {
            carousel.prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.navigateCarousel(projectId, -1);
            });
            
            carousel.nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.navigateCarousel(projectId, 1);
            });
            
            carousel.dots.forEach(dot => {
                dot.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const index = parseInt(dot.dataset.index);
                    this.goToSlide(projectId, index);
                });
            });
        });
    }

    /**
     * Toggle flip state of a card
     * @param {HTMLElement} card - The card element to flip
     */
    flipCard(card) {
        const isFlipping = !card.classList.contains('flipped');
        
        // If flipping a new card, close the currently open card
        if (isFlipping && this.currentlyFlippedCard && this.currentlyFlippedCard !== card) {
            this.closeCard(this.currentlyFlippedCard);
        }
        
        // Toggle the card
        card.classList.toggle('flipped');
        
        // Update currently flipped card reference
        if (card.classList.contains('flipped')) {
            this.currentlyFlippedCard = card;
        } else {
            this.currentlyFlippedCard = null;
        }
        
        // Pause/play videos based on flip state
        const videos = card.querySelectorAll('.project-video');
        videos.forEach(video => {
            if (card.classList.contains('flipped')) {
                // Only play the currently visible video
                const carousel = this.carousels.get(card.dataset.projectId);
                if (carousel) {
                    const visibleSlide = carousel.track.children[carousel.currentIndex];
                    const visibleVideo = visibleSlide.querySelector('.project-video');
                    if (visibleVideo) visibleVideo.play();
                } else if (video) {
                    video.play();
                }
            } else {
                video.pause();
                video.currentTime = 0;
            }
        });
    }

    /**
     * Close a card and reset its state
     * @param {HTMLElement} card - The card element to close
     */
    closeCard(card) {
        card.classList.remove('flipped');
        
        // Pause and reset all videos in the card
        const videos = card.querySelectorAll('.project-video');
        videos.forEach(video => {
            video.pause();
            video.currentTime = 0;
        });
    }

    /**
     * Navigate carousel
     * @param {string} projectId - Project ID
     * @param {number} direction - 1 for next, -1 for prev
     */
    navigateCarousel(projectId, direction) {
        const carousel = this.carousels.get(projectId);
        if (!carousel) return;
        
        const newIndex = carousel.currentIndex + direction;
        
        if (newIndex >= 0 && newIndex < carousel.totalSlides) {
            this.goToSlide(projectId, newIndex);
        }
    }

    /**
     * Go to specific slide
     * @param {string} projectId - Project ID
     * @param {number} index - Slide index
     */
    goToSlide(projectId, index) {
        const carousel = this.carousels.get(projectId);
        if (!carousel) return;
        
        carousel.currentIndex = index;
        const offset = -index * 100;
        carousel.track.style.transform = `translateX(${offset}%)`;
        
        // Update dots
        carousel.dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
}

/* ==========================================================================
   Initialization
   ========================================================================== */

// Initialize all managers when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme management
    new ThemeManager();
    
    // Initialize desktop navigation only on desktop
    if (window.innerWidth >= 1024) {
        new DesktopNavigation();
    }
    
    // Initialize animations
    new AnimationManager();
    
    // Initialize project cards
    new ProjectCardManager();
}); 