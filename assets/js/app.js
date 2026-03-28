document.addEventListener('DOMContentLoaded', () => {
    const components = [
        { id: 'header-placeholder', file: 'components/header.html' },
        { id: 'services-placeholder', file: 'components/services.html' },
        { id: 'contact-placeholder', file: 'components/contact.html' },
        { id: 'location-placeholder', file: 'components/location.html' },
        { id: 'email-placeholder', file: 'components/email.html' },
        { id: 'footer-placeholder', file: 'components/footer.html' }
    ];

    const loadComponent = async (component) => {
        try {
            // Using a cache-buster (?v=) to ensure the FRESH files are loaded correctly
            const response = await fetch(`${component.file}?v=${Date.now()}`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const html = await response.text();
            document.getElementById(component.id).innerHTML = html;
        } catch (error) {
            console.error(`Error loading component ${component.file}:`, error);
        }
    };

    // Load each component one-by-one to prevent rendering glitches
    const loadAll = async () => {
        for (const comp of components) {
            await loadComponent(comp);
        }
    };

    loadAll();
});
