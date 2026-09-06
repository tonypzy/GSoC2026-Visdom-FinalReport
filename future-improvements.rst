.. SPDX-License-Identifier: Apache-2.0

===================
Future Improvements
===================

Scaling Experiment Tagging
--------------------------

The experiment-tagging system is complete and integrated across storage,
authenticated APIs, the Python SDK, live transports, and the browser. I think
the next step is to validate the feature at scale. For example, we could test
how it performs under a large number of concurrent clients and experiment
updates.

Extending Optuna Analytics
--------------------------

The Optuna integration can be extended beyond the completed callback and
study dashboard to better support multi-process and multi-node optimization.
Workers can already contribute trial records to one dashboard through stable
tags, but dashboard refreshes still require a designated writer. One possible
next step is to coordinate dashboard updates across processes or nodes,
allowing a distributed study to update a shared Visdom dashboard safely.

Another useful extension would be real-time trial monitoring. Intermediate values
are currently written to Visdom only after a trial finishes. A streaming
reporter could send them while training is running, allowing users to follow
trial progress and pruning behavior in real time.

Expanding Visualization APIs
----------------------------

More visualization APIs could be added for common analysis tasks:

* ``waterfall`` for showing how positive and negative contributions build
  toward a final result.
* ``treemap`` for comparing hierarchical data through nested rectangles.
* ``scatter_matrix`` for exploring pairwise relationships between multiple
  parameters and metrics.
