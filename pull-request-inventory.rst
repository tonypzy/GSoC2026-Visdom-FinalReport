.. SPDX-License-Identifier: Apache-2.0

======================
Pull Request Inventory
======================

This page provides the code-level evidence for the outcomes described in
:doc:`project-outcomes`.

Pull Request Table
------------------

This table lists all 50 pull requests merged as part of my GSoC 2026 work.

.. list-table:: Merged Pull Requests (50)
   :header-rows: 1
   :widths: 14 56 30

   * - PR
     - Contribution
     - Category
   * - `#1265 <https://github.com/fossasia/visdom/pull/1265>`_
     - Allow keyboard input in pane property fields.
     - Frontend UX
   * - `#1267 <https://github.com/fossasia/visdom/pull/1267>`_
     - Reject stale cross-environment browser messages.
     - Environment and Transport
   * - `#1276 <https://github.com/fossasia/visdom/pull/1276>`_
     - Upgrade D3 interaction packages and adapt lasso handling.
     - Visualization
   * - `#1277 <https://github.com/fossasia/visdom/pull/1277>`_
     - Normalize float, string, and irregular scatter labels.
     - Visualization
   * - `#1279 <https://github.com/fossasia/visdom/pull/1279>`_
     - Scope callbacks by environment and target.
     - Environment and Transport
   * - `#1294 <https://github.com/fossasia/visdom/pull/1294>`_
     - Make the properties overlay opaque and readable.
     - Frontend UX
   * - `#1297 <https://github.com/fossasia/visdom/pull/1297>`_
     - Avoid full-pane deep copies in ``update_packet``.
     - Performance
   * - `#1312 <https://github.com/fossasia/visdom/pull/1312>`_
     - Restore TextPane selection and clipboard copying.
     - Frontend UX
   * - `#1318 <https://github.com/fossasia/visdom/pull/1318>`_
     - Add filtered environment-state retrieval and client API.
     - Environment and Transport
   * - `#1335 <https://github.com/fossasia/visdom/pull/1335>`_
     - Add ``image_select`` and repair selected-image updates.
     - Visualization
   * - `#1355 <https://github.com/fossasia/visdom/pull/1355>`_
     - Deduplicate Tornado handler initialization in ``BaseHandler``.
     - Backend Architecture
   * - `#1372 <https://github.com/fossasia/visdom/pull/1372>`_
     - Specialize embeddings updates outside the generic update flow.
     - Performance
   * - `#1373 <https://github.com/fossasia/visdom/pull/1373>`_
     - Create missing environments before direct append updates.
     - Environment and Transport
   * - `#1384 <https://github.com/fossasia/visdom/pull/1384>`_
     - Introduce ``ServerState`` and decouple handlers from ``Application``.
     - Backend Architecture
   * - `#1428 <https://github.com/fossasia/visdom/pull/1428>`_
     - Add a validated Plotly-backed Histogram2D API.
     - Visualization
   * - `#1437 <https://github.com/fossasia/visdom/pull/1437>`_
     - Adapt visual tests to Pixelmatch 7.
     - Testing and CI
   * - `#1457 <https://github.com/fossasia/visdom/pull/1457>`_
     - Add a typed and validated Sankey diagram API.
     - Visualization
   * - `#1471 <https://github.com/fossasia/visdom/pull/1471>`_
     - Fix first-attempt embeddings lasso drill-down and focus.
     - Visualization
   * - `#1475 <https://github.com/fossasia/visdom/pull/1475>`_
     - Show lasso closure feedback and minimum-selection guidance.
     - Visualization
   * - `#1494 <https://github.com/fossasia/visdom/pull/1494>`_
     - Synchronize README documentation with plotting APIs.
     - Documentation
   * - `#1514 <https://github.com/fossasia/visdom/pull/1514>`_
     - Add Sunburst and general Plotly demo examples.
     - Documentation
   * - `#1521 <https://github.com/fossasia/visdom/pull/1521>`_
     - Remove a stale socket-ID generation comment.
     - Maintenance
   * - `#1547 <https://github.com/fossasia/visdom/pull/1547>`_
     - Restore environment search input behavior.
     - Frontend UX
   * - `#1556 <https://github.com/fossasia/visdom/pull/1556>`_
     - Allow startup when ``env_path`` is ``None``.
     - Backend Architecture
   * - `#1560 <https://github.com/fossasia/visdom/pull/1560>`_
     - Recover from malformed saved layouts and notify users.
     - Frontend UX
   * - `#1568 <https://github.com/fossasia/visdom/pull/1568>`_
     - Add a named-metric Learning Curve API.
     - Visualization
   * - `#1585 <https://github.com/fossasia/visdom/pull/1585>`_
     - Allow embeddings callback registration to be disabled.
     - Visualization
   * - `#1591 <https://github.com/fossasia/visdom/pull/1591>`_
     - Move socket-handler initialization into the shared base handler.
     - Backend Architecture
   * - `#1597 <https://github.com/fossasia/visdom/pull/1597>`_
     - Port pane-interaction coverage from Cypress to Playwright.
     - Testing and CI
   * - `#1607 <https://github.com/fossasia/visdom/pull/1607>`_
     - Build readiness-gated Playwright screenshot baselines.
     - Testing and CI
   * - `#1615 <https://github.com/fossasia/visdom/pull/1615>`_
     - Add Playwright visual comparison and CI artifact flow.
     - Testing and CI
   * - `#1622 <https://github.com/fossasia/visdom/pull/1622>`_
     - Add polling E2E tests that verify the active transport.
     - Testing and CI
   * - `#1627 <https://github.com/fossasia/visdom/pull/1627>`_
     - Route ``check_auth`` through a shared authorization helper.
     - Backend Architecture
   * - `#1643 <https://github.com/fossasia/visdom/pull/1643>`_
     - Share incoming message dispatch across WebSocket and polling.
     - Environment and Transport
   * - `#1666 <https://github.com/fossasia/visdom/pull/1666>`_
     - Remove legacy send mode and stale index-page state.
     - Backend Architecture
   * - `#1678 <https://github.com/fossasia/visdom/pull/1678>`_
     - Make pane relayout ordering deterministic.
     - Frontend UX
   * - `#1691 <https://github.com/fossasia/visdom/pull/1691>`_
     - Make Playwright the authoritative E2E test system.
     - Testing and CI
   * - `#1705 <https://github.com/fossasia/visdom/pull/1705>`_
     - Remove retired Cypress tests and infrastructure.
     - Testing and CI
   * - `#1709 <https://github.com/fossasia/visdom/pull/1709>`_
     - Add bounded tag-domain and store update semantics.
     - Experiment Tagging
   * - `#1712 <https://github.com/fossasia/visdom/pull/1712>`_
     - Add authenticated tag APIs, persistence, and live transport.
     - Experiment Tagging
   * - `#1716 <https://github.com/fossasia/visdom/pull/1716>`_
     - Add typed tag operations to the Python SDK.
     - Experiment Tagging
   * - `#1728 <https://github.com/fossasia/visdom/pull/1728>`_
     - Add browser tag editing, synchronization, and filtering.
     - Experiment Tagging
   * - `#1746 <https://github.com/fossasia/visdom/pull/1746>`_
     - Map Optuna trials to tagged Visdom environments.
     - Optuna
   * - `#1753 <https://github.com/fossasia/visdom/pull/1753>`_
     - Add the aggregate Optuna study dashboard.
     - Optuna
   * - `#1757 <https://github.com/fossasia/visdom/pull/1757>`_
     - Visualize intermediate values and pruned trials.
     - Optuna
   * - `#1767 <https://github.com/fossasia/visdom/pull/1767>`_
     - Add multi-objective metadata and Pareto-front visualization.
     - Optuna
   * - `#1776 <https://github.com/fossasia/visdom/pull/1776>`_
     - Keep zero-duration and short trials visible in timelines.
     - Optuna
   * - `#1778 <https://github.com/fossasia/visdom/pull/1778>`_
     - Rediscover dashboard trials across restarts and workers.
     - Optuna
   * - `#1782 <https://github.com/fossasia/visdom/pull/1782>`_
     - Add configurable two-parameter contour visualizations.
     - Optuna
   * - `#1791 <https://github.com/fossasia/visdom/pull/1791>`_
     - Add filtered batch deletion and consistent selection recovery.
     - Frontend UX

Design Evolution and Superseded Prototypes
------------------------------------------

Five closed, unmerged pull requests are not counted in the 50 delivered
contributions. They remain useful evidence of design exploration:

* `#1076 <https://github.com/fossasia/visdom/pull/1076>`_ and
  `#1187 <https://github.com/fossasia/visdom/pull/1187>`_ were early monolithic
  experiment-tagging designs. Review led to the smaller, merged four-layer
  implementation in `#1709 <https://github.com/fossasia/visdom/pull/1709>`_,
  `#1712 <https://github.com/fossasia/visdom/pull/1712>`_,
  `#1716 <https://github.com/fossasia/visdom/pull/1716>`_, and
  `#1728 <https://github.com/fossasia/visdom/pull/1728>`_.
* `#1268 <https://github.com/fossasia/visdom/pull/1268>`_ explored a standalone
  download CLI and server-startup refactor.
* `#1292 <https://github.com/fossasia/visdom/pull/1292>`_ explored Cypress
  startup compatibility on Apple Silicon before the Playwright migration.
* `#1296 <https://github.com/fossasia/visdom/pull/1296>`_ experimented with
  larger pane-toolbar dimensions.

These PRs are presented as superseded or exploratory work, not as upstream
functionality.
