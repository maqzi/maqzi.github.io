---
title: "What MLOps Actually Looks Like at Enterprise Scale"
date: "2025-03-15"
excerpt: "Building the IAMD platform taught me that the hardest part of MLOps isn't the tooling — it's the organizational coordination required to make it stick."
tags: ["MLOps", "ML Infrastructure", "Leadership"]
---

When I started designing the Integrated Analytics ML Deployment platform at Munich Re, I made a mistake that most ML platform engineers make: I thought the problem was technical.

It's not. Or rather — it's only 40% technical.

The rest is organizational coordination, change management, and stakeholder alignment across teams that have spent years doing things their own way. Here's what I learned from reducing model deployment times by 95% and getting 100% of our use cases onto a single platform within a year.

## The technical layer is the easy part

We chose a fairly standard stack: GitOps pipelines feeding Docker containers, MLflow for experiment tracking, Kubernetes for serving, Postgres for metadata, Terraform for IaC. Nothing exotic. The principles were:

- **Reproducibility by default.** Every training run logs parameters, metrics, and artifacts to MLflow. No exceptions.
- **GitOps over ClickOps.** Every deployment is a pull request. The cluster state is always derivable from the repository.
- **Parity across environments.** US and CA tenants share identical SDLC stage configurations. If it works in dev, it works in prod.

The hardest technical challenge was batch inference. We had models that needed to score millions of records — and the naive approach (a long-running Python process) was taking 8 hours. Using Azure Batch to distribute work across ephemeral worker pools got us to 4 minutes. But that optimization required understanding the data access patterns of each model, which meant sitting with the ML engineers who built them.

## The organizational layer is where platforms succeed or fail

Here's what actually drove adoption:

**We made the default path the easy path.** If following the platform conventions was harder than rolling your own deployment, people wouldn't use it. We spent months making the happy path frictionless — one command to register a model, one PR to deploy.

**We measured what users cared about.** Our "zen-ness" score (stakeholder satisfaction) was 8.5/10 after a year. That number came from quarterly surveys where we asked direct questions: *What's still painful? What did we get right? What would you give up?*

**We managed the roadmap like a product.** Every quarter I published a roadmap and invited input. Teams knew where the platform was going, which meant they could plan their own work around it — instead of working around our inconsistency.

## The lesson

An MLOps platform is a product. It has users, it has a roadmap, it has user research. The engineers who build it are also product managers. The teams that ignore this end up with excellent internal tools that nobody uses.

The 95% deployment time reduction was a nice metric to report upward. The 8.5/10 satisfaction score was the one that actually told me whether we were building something worth maintaining.
