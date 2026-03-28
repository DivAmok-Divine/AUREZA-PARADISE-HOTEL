# 🏨 AUREZA PARADISE HOTEL

> **Experience serenity and luxury in the heart of Tamale, Ghana.**

A professional, single-page landing site for **Aureza Paradise Hotel**, refactored for high-performance, modular maintenance, and a premium "Component-First" design.

---

## 🎨 Design System

Our project uses a centralized design system built with CSS variables to ensure consistency across all modules.

| Design Token           | Value            | Description                                            |
| :--------------------- | :--------------- | :----------------------------------------------------- |
| **Primary Gold** | `#D4AF37`      | Main brand color for accents and highlights.           |
| **Main Dark**    | `#1a1a1a`      | Professional background and primary container color.   |
| **Transitions**  | `0.3s ease`    | Smooth micro-animations for buttons and hover effects. |
| **Typography**   | Playfair Display | Serif headings for a classic hotel aesthetic.          |

---

## 🏗️ Project Architecture

The project has been refactored into a **Modular Architecture** to separate concerns and improve maintainability.

```bash
AUREZA-PARADISE-HOTEL/
├── index.html                  # THE MAIN FRAMEWORK (Direct-Injection Loader)
├── assets/                     # Core Project Assets
│   ├── css/
│   │   ├── main.css            # CSS Hub (Central Imports)
│   │   ├── base/               # Reset & Global Variables
│   │   ├── components/         # Reusable UI (Buttons, Section Titles)
│   │   ├── modules/            # Localized Styles (Service Grid, Map, etc.)
│   │   └── responsive.css      # Mobile & Tablet Overrides
│   ├── img/
│   │   └── logo.jpg            # Hotel Branding & Favicon
│   └── js/
│       └── app.js              # (Optional) Asynchronous Loading logic
└── components/                 # HTML Partials (For easy editing)
    ├── header.html             # Hotel Logo & Welcome text
    ├── services.html           # 2-Column Responsive Service Grid
    ├── contact.html            # Verified Phone & Call buttons
    ├── location.html           # Google Maps Iframe & Address
    ├── email.html              # Reservaton/Enquiry CTA
    └── footer.html             # Copyright & Design branding
```

---

## 🛠️ How to Customize

* **To Change Colors**: Edit `assets/css/base/variables.css` to update the global theme.
* **To Update Services**: Modify `components/services.html` (the code is also mirrored in `index.html`'s injection script for maximum load stability).
* **To Edit Content**: Update the specific HTML strings inside the `<script>` tag in `index.html`.

---

## 👨‍💻 Developed By

**Designed by: DivAmok Corp.**
*Clean code. Professional design.*
