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
}); 