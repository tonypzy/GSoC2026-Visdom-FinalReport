.. SPDX-License-Identifier: Apache-2.0

:tocdepth: 3

================
Project Outcomes
================

The project produced three main deliverables, together with several supporting
improvements to Visdom. The first deliverable adds
structured experiment tagging throughout Visdom. The second connects Optuna
trial execution to experiment environments and a study-level dashboard. The
third introduces a shared server-state architecture so request handlers no
longer depend directly on the Tornado application. All 50 pull requests listed
in the :doc:`pull-request-inventory` have been merged upstream.

Deliverable 1: Experiment Tagging
----------------------------------------------

Problem
~~~~~~~

Visdom environments previously had no structured tags for organizing large
collections of experiments. Users could name environments, but they could not
attach validated tags, update them from Python, synchronize changes to open
browsers, or filter the environment list by tags.

Implementation
~~~~~~~~~~~~~~

The completed implementation is intentionally split across four layers. Each
layer builds on the existing ``ExperimentStore`` and environment-persistence
model instead of introducing a separate tag database:

.. code-block:: text

   ExperimentStore domain
          ↓
   authenticated HTTP API + transport update
          ↓
   typed Python SDK
          ↓
   browser editing, synchronization, and filtering

Store Domain
~~~~~~~~~~~~

`#1709 — Add environment tag store domain
<https://github.com/fossasia/visdom/pull/1709>`_ defines tag normalization,
validation limits, append/replace/clear semantics, and the
``ExperimentStore`` update operation. This keeps tag-update behavior
consistent between the backend and Python SDK.

Backend API and Transport
~~~~~~~~~~~~~~~~~~~~~~~~~

`#1712 — Add experiment tagging backend API and transport
<https://github.com/fossasia/visdom/pull/1712>`_ exposes authenticated tag
reads and writes, enforces read-only mode, persists valid changes, documents
the API, and broadcasts a transport-neutral ``tags_update`` message to browser
clients using either WebSocket or polling.

Python SDK
~~~~~~~~~~

`#1716 — Add experiment tagging Python SDK
<https://github.com/fossasia/visdom/pull/1716>`_ adds typed ``set_tags`` and
``get_tags`` operations. It also preserves validation-before-write, lazy
environment loading, persisted state, and live state overlays so that SDK and
browser views remain coherent.

Frontend Editing and Filtering
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

`#1728 — Add experiment tagging frontend UI and filtering
<https://github.com/fossasia/visdom/pull/1728>`_ completes HTTP bootstrap,
incremental synchronization, tag display and editing, client-side validation,
cleanup after environment deletion, and tag-aware environment filtering.

Deliverable 2: Optuna Integration and Hyperparameter Visualization
------------------------------------------------------------------

The completed Optuna integration covers trial-to-environment mapping, an
aggregate study dashboard, intermediate-value and pruned-trial trajectories,
multi-objective Pareto fronts, timelines that preserve short trials,
configurable contour visualizations, and shared dashboard trial selection
across callback instances.

Trial Integration and Data Capture
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

`#1746 — Add Optuna experiment callback
<https://github.com/fossasia/visdom/pull/1746>`_ adds an optional
``OptunaCallback`` that maps each terminal trial to a deterministic Visdom
environment. It records trial parameters, objective values, state, study
identity, and experiment tags while keeping Optuna an optional dependency.

`#1757 — Visualize Optuna intermediate values and pruned trials
<https://github.com/fossasia/visdom/pull/1757>`_ preserves reported
intermediate values in training-step order and adds a dashboard pane for
completed and pruned trial trajectories.

Study Dashboard and Visualizations
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

`#1753 — Add Optuna study dashboard
<https://github.com/fossasia/visdom/pull/1753>`_ builds the aggregate dashboard
used to inspect the study. It contains study metadata, HParams trial records,
optimization history, parameter importance, trial links, and a configurable
timeline and refresh cycle.

`#1767 — Add multi-objective Pareto front visualization
<https://github.com/fossasia/visdom/pull/1767>`_ extends objective metadata,
directions, and dashboard generation for multi-objective studies and adds a
Pareto-front view of non-dominated trials.

`#1776 — Keep short Optuna trials visible in the timeline
<https://github.com/fossasia/visdom/pull/1776>`_ gives zero-duration and very
short trials visible timeline markers without changing their recorded start
and completion timestamps.

`#1782 — Add Optuna contour visualization
<https://github.com/fossasia/visdom/pull/1782>`_ adds configurable
two-parameter contour panes for each objective, completing the dashboard's
view of joint hyperparameter effects.

Dashboard Recovery and Shared Trial Selection
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

`#1778 — Fix dashboard trial selection across callbacks
<https://github.com/fossasia/visdom/pull/1778>`_ replaces callback-local trial
selection with stable experiment tags. A fresh callback or another worker can
therefore rediscover the same study trials and rebuild the shared dashboard.

Deliverable 3: Server State Architecture
----------------------------------------

Problem
~~~~~~~

Visdom handlers copied shared attributes from the Tornado ``Application``
during initialization. This tightly coupled handlers to the application's
internal structure and could leave long-lived socket handlers with stale
runtime values. The problem is documented in `Issue #1383
<https://github.com/fossasia/visdom/issues/1383>`_.

Architecture and Result
~~~~~~~~~~~~~~~~~~~~~~~

`#1384 — Introduce ServerState to decouple handlers from Application
<https://github.com/fossasia/visdom/pull/1384>`_ introduces a shared
``ServerState`` facade:

.. code-block:: text

   Application
       │ creates and injects
       ▼
   ServerState
       │ provides live access
       ▼
   HTTP / WebSocket / Polling Handlers

``Application`` now focuses on constructing the server and registering routes.
Each state-dependent handler receives the same ``ServerState`` instance.
``StateAccessorsMixin`` preserves familiar access such as ``self.state`` while
resolving it through the shared state instead of copying it during
initialization.

``ServerState`` centralizes environment state, subscriber and source
registries, configuration, saved layouts, dirty-environment tracking,
autosave coordination, and the polling connection monitor. Polling wrapper
construction remains in the handler layer, preventing the state layer from
depending on Tornado requests or concrete handlers.

Handlers no longer retain direct references to ``Application``. Compatibility
properties remain on ``Application`` for existing callers, allowing the
architecture to change without breaking established behavior. This makes the
shared server state easier to extend without coupling handlers directly to
``Application``.

Supporting Engineering Outcomes
-------------------------------

**Environment Correctness and Real-time Transport.** Environment identity now
remains consistent across server broadcasts,
browser state, callback registration, state retrieval, direct append updates,
and both live transports. PRs `#1267
<https://github.com/fossasia/visdom/pull/1267>`_, `#1279
<https://github.com/fossasia/visdom/pull/1279>`_, `#1318
<https://github.com/fossasia/visdom/pull/1318>`_, `#1373
<https://github.com/fossasia/visdom/pull/1373>`_, and `#1643
<https://github.com/fossasia/visdom/pull/1643>`_ collectively prevent
cross-environment messages and callbacks while keeping WebSocket and polling
dispatch behavior aligned.

**Backend Architecture, Authentication, and Lifecycle.** Handler dependencies
and shared state are clearer and less repetitive. `#1627
<https://github.com/fossasia/visdom/pull/1627>`_ centralizes
authorization, while `#1556 <https://github.com/fossasia/visdom/pull/1556>`_
and `#1666
<https://github.com/fossasia/visdom/pull/1666>`_ harden startup and remove
legacy execution paths.

**Visualization APIs and Interactive Features.** The public visualization
surface now includes normalized arbitrary scatter labels, image-history
selection, Histogram2D, Sankey, and named Learning Curve plots. Embeddings
gained updated D3 interaction infrastructure, reliable lasso focus, visible
closure guidance, and optional Python callback registration. These outcomes
are delivered by PRs `#1276
<https://github.com/fossasia/visdom/pull/1276>`_, `#1277
<https://github.com/fossasia/visdom/pull/1277>`_, `#1335
<https://github.com/fossasia/visdom/pull/1335>`_, `#1428
<https://github.com/fossasia/visdom/pull/1428>`_, `#1457
<https://github.com/fossasia/visdom/pull/1457>`_, `#1471
<https://github.com/fossasia/visdom/pull/1471>`_, `#1475
<https://github.com/fossasia/visdom/pull/1475>`_, `#1568
<https://github.com/fossasia/visdom/pull/1568>`_, and `#1585
<https://github.com/fossasia/visdom/pull/1585>`_.

**Frontend UX and Environment Management.** PRs `#1265
<https://github.com/fossasia/visdom/pull/1265>`_, `#1294
<https://github.com/fossasia/visdom/pull/1294>`_, `#1312
<https://github.com/fossasia/visdom/pull/1312>`_, `#1547
<https://github.com/fossasia/visdom/pull/1547>`_, `#1560
<https://github.com/fossasia/visdom/pull/1560>`_, `#1678
<https://github.com/fossasia/visdom/pull/1678>`_, and `#1791
<https://github.com/fossasia/visdom/pull/1791>`_ improve routine browser use:
form fields accept keyboard input, text panes support copying, overlays remain
readable, malformed layouts recover safely, pane relayout is deterministic,
and large sets of environments can be searched and deleted in filtered
batches.

**Performance Optimization.** `#1297
<https://github.com/fossasia/visdom/pull/1297>`_ narrows generic pane
copying to mutable nested content, while `#1372
<https://github.com/fossasia/visdom/pull/1372>`_ moves embeddings updates onto
a bounded specialized path. Together they avoid unnecessary deep-copy,
serialization, and generic JSON Patch work while preserving update semantics.

**Testing and CI Modernization.** PRs `#1437
<https://github.com/fossasia/visdom/pull/1437>`_, `#1597
<https://github.com/fossasia/visdom/pull/1597>`_, `#1607
<https://github.com/fossasia/visdom/pull/1607>`_, `#1615
<https://github.com/fossasia/visdom/pull/1615>`_, `#1622
<https://github.com/fossasia/visdom/pull/1622>`_, `#1691
<https://github.com/fossasia/visdom/pull/1691>`_, and `#1705
<https://github.com/fossasia/visdom/pull/1705>`_ replace Cypress with Playwright
in stages. Pane interactions, screenshot baselines, visual comparison, polling
verification, CI commands, and artifacts were migrated before the retired
Cypress dependencies and configuration were removed.

**Documentation and Maintenance.** PRs `#1494
<https://github.com/fossasia/visdom/pull/1494>`_, `#1514
<https://github.com/fossasia/visdom/pull/1514>`_, and `#1521
<https://github.com/fossasia/visdom/pull/1521>`_ synchronize the plotting API
documentation, add runnable Sunburst and general Plotly examples, and remove
obsolete socket documentation.
