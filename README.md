# Cyber-World (crackthehack.in)

A personal portfolio website for a security consultant and penetration tester, built with pure HTML, CSS and JavaScript. Deployed live at **https://crackthehack.in** (GitHub Pages, custom domain via `CNAME`).

## Features

- **Hero / Intro** — animated matrix background and a brief bio
- **About** — profile summary, personal details, and freelancing availability
- **Skills & Interests** — technology stack and personal interests
- **Resume** — work experience, education, and certifications
- **Certifications & Diplomas** — CEH-V11, eJPT, CRTP, JPT, OPT, ISE, N+ with verifiable links
- **Contact** — a working contact form (via Web3Forms) and social profiles
- **Privacy Policy** — dedicated page

## Tech Stack

- HTML5, CSS3 (custom design system + Bootstrap 4)
- JavaScript (jQuery, Isotope for filtering, venobox lightbox, matrix animation)
- No build step — static site, ready for GitHub Pages

## Project Structure

```
├── index.html                 # Main portfolio page
├── CNAME                      # Custom domain: crackthehack.in
├── robots.txt                 # Crawler rules
├── privacy-policy/            # Privacy policy page
└── assets/
    ├── css/style.css          # Custom styles
    ├── js/main.js             # Interactions (isotope, venobox, mobile nav)
    ├── js/matrix.js           # Matrix background animation
    └── img/                   # Images and icons
```

## Deployment

This site is designed for GitHub Pages with a custom domain:

1. Push the repository to GitHub.
2. In the repo **Settings → Pages**, set the source to the main branch root (`/`).
3. The `CNAME` file keeps `crackthehack.in` pointed at the GitHub Pages host.
4. Point the DNS `A`/`AAAA` records (or a `CNAME` at the apex) at the GitHub Pages IPs.

> Sub-pages must be deployed at the root of the Pages site so that relative links
> like `android/index.html` resolve correctly.

## License

All rights reserved. The content, images and design are the property of the site owner.
