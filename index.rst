.. SPDX-License-Identifier: Apache-2.0

.. _gsoc-final-report:

==============================================================
Metadata Tracking and Hyperparameter Visualization for Visdom
==============================================================

.. image:: visdom.svg
   :alt: Visdom logo
   :class: visdom-project-logo
   :width: 112px

Project Overview
----------------

Introduction
~~~~~~~~~~~~

`Visdom <https://github.com/fossasia/visdom>`_ is a visualization platform for
live, interactive machine-learning experiments. This Google Summer of Code
project focused on experiment tagging, hyperparameter optimization
visualization, and improvements to Visdom’s server architecture.

The project, *Metadata Tracking and Hyperparameter Visualization for Visdom*,
was completed by `Zhengyang Peng <https://github.com/tonypzy>`_ with
`FOSSASIA <https://fossasia.org/>`_.

Project Goals and Outcomes
~~~~~~~~~~~~~~~~~~~~~~~~~~

The project had three main goals:

#. **Experiment tagging.** Add structured and validated tags for
   experiments across storage, server APIs, the Python SDK, live transports,
   and the browser. The completed system supports persistent tag updates, live
   synchronization, browser editing, and filtering.
#. **Optuna integration and visualization.** Connect Optuna studies with Visdom
   so that users can track trials, compare hyperparameters and metrics, inspect
   pruning behavior, and visualize optimization results. The completed
   integration supports both single- and multi-objective studies with HParams
   views, optimization history, parameter importance, Pareto fronts, timelines,
   and contour plots.
#. **Server state architecture.** Introduce a shared server-state layer to
   reduce coupling between handlers and centralize runtime state. The completed
   ``ServerState`` architecture is shared by HTTP, WebSocket, and polling
   handlers.

Project Scope
~~~~~~~~~~~~~

This report focuses on the three main deliverables above. It also covers
supporting work on environment correctness, WebSocket and polling behavior,
visualization APIs, frontend reliability, performance, documentation, and
Playwright-based testing.

:doc:`project-outcomes` describes the completed functionality and architecture,
while :doc:`pull-request-inventory` lists the merged pull requests associated
with the project.

Report Contents
---------------

.. toctree::
   :maxdepth: 2
   :caption: GSoC 2026

   Project Overview <self>
   project-outcomes
   pull-request-inventory
   future-improvements
   acknowledgements
