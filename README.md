# LUMEN Site — GitHub Pages

Landing page for LUMEN autonomous agent.

**Live:** https://lumen-lux.github.io/lumen-site

## Deploy

Push to `main` → GitHub Actions deploya automáticamente a Pages.

## Local

```bash
python3 -m http.server 8000 --directory site/
```

## Estructura

```
lumen-site/
├── site/
│   └── index.html      # Landing page
├── .github/workflows/
│   └── deploy.yml      # Pages deploy
└── README.md
```
