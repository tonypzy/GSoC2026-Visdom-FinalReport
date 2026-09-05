# SPDX-License-Identifier: Apache-2.0

project = "GSoC 2026 Visdom Final Report"
author = "Zhengyang Peng"
copyright = "2026, Zhengyang Peng"

root_doc = "index"
language = "en"
extensions = []
templates_path = []
exclude_patterns = ["_build", ".venv", "Thumbs.db", ".DS_Store"]

html_theme = "sphinx_book_theme"
html_title = "GSoC 2026 — Visdom Final Report"
html_baseurl = "https://tonypzy.github.io/GSoC2026-Visdom-FinalReport/"
html_logo = "GSoC-Horizontal.svg"
html_favicon = "visdom.svg"
html_static_path = ["_static"]
html_css_files = ["custom.css"]
html_js_files = ["custom.js"]
html_sidebars = {
    "**": ["navbar-logo.html", "icon-links.html", "sbt-sidebar-nav.html"]
}
html_theme_options = {
    "repository_url": "https://github.com/tonypzy/GSoC2026-Visdom-FinalReport",
    "repository_branch": "main",
    "path_to_docs": "",
    "disable_search": True,
    "use_repository_button": True,
    "use_source_button": True,
    "use_download_button": True,
    "use_fullscreen_button": True,
    "home_page_in_toc": False,
    "show_toc_level": 2,
}


def _set_sidebar_home_label(app, pagename, templatename, context, doctree):
    """Give the root document a concise label in the primary sidebar."""
    context["root_title"] = "Project Overview"


def setup(app):
    app.connect("html-page-context", _set_sidebar_home_label, priority=800)
