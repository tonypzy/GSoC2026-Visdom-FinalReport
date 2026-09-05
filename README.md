# GSoC 2026 Visdom Final Report

Final work report for **Metadata Tracking and Hyperparameter Visualization for
Visdom**, completed with FOSSASIA during Google Summer of Code 2026. The report
documents three core deliverables and a categorized inventory of 50 merged pull
requests.

The report is written in reStructuredText and rendered with Sphinx.

## Local preview

```bash
python3.12 -m venv .venv
. .venv/bin/activate
python3 -m pip install -r requirements.txt
sphinx-build --fail-on-warning --keep-going -b html . _build/html
python -m http.server --directory _build/html 8000
```

Open <http://localhost:8000> to view the rendered report.

GitHub Pages deployment is defined in `.github/workflows/pages.yml`. The
repository's Pages source must be set to **GitHub Actions** before the first
deployment.
