---
title: "What MLOps Actually Looks Like at Enterprise Scale"
date: "2026-02-11"
excerpt: "We cut model deployment times by 95 percent at Munich Re. The tooling was the part I got right early. The part I underestimated was getting people to use it."
tags: ["MLOps", "ML Infrastructure", "Leadership"]
---

I went into the IAMD platform thinking it was an infrastructure problem. Pick the right stack, wire up the pipelines, make deployments reproducible, and adoption would follow because the thing was obviously better. That assumption cost me about a quarter.

The stack itself was not the interesting part. GitOps pipelines, Docker, MLflow for tracking, Kubernetes for serving, Postgres for metadata, Terraform underneath all of it. If you have built one of these you know the shape. The three rules I cared about were that every training run logged its parameters and artifacts without anyone having to remember to do it, that every deployment went through a pull request so the cluster state was always reconstructable from the repo, and that the US and Canada tenants ran identical stage configs so "works in dev" actually meant something.

The one genuinely hard engineering problem was batch inference. We had models scoring millions of records, and the naive long-running Python job took eight hours. Moving it onto Azure Batch across ephemeral worker pools got it to four minutes. But I want to be honest about how that happened, because it is the whole point of this post: the speedup did not come from knowing Azure Batch well. It came from sitting next to the engineers who wrote each model and learning how their data was actually accessed, which records were hot, where the joins blew up. The infrastructure knowledge was commodity. The model-specific knowledge was not, and the only way to get it was to spend time with people who were busy and did not initially see why I needed their afternoon.

That turned out to be the recurring lesson. The platform did not get adopted because it was good. It got adopted when using it became less work than not using it.

For a while it was not. If you wanted to deploy a model the platform way, you had to learn our conventions, structure your repo our way, and trust a pipeline you could not see into. Rolling your own deployment was familiar and right there. So people rolled their own, and I would find out weeks later that another model was running in production held together by a cron job and good intentions. I stopped blaming the engineers for this around the time I realized they were behaving completely rationally.

So we spent a few months on the unglamorous work of making the happy path frictionless. One command to register a model. One pull request to deploy it. Sensible defaults so you did not have to understand the whole system to ship the common case. None of this is impressive to write down. All of it is what actually moved the adoption numbers.

I also started running the platform like a product instead of a project, which mostly meant two changes. I published a roadmap every quarter and asked teams what was still painful, then I actually changed the roadmap based on what they said. And I tracked a satisfaction number alongside the performance ones. We landed around 8.5 out of 10 on the quarterly survey after a year, and that number told me more than the deployment metric did. The 95 percent reduction was the figure I reported upward. The satisfaction score was the one that told me whether the thing would still be alive in two years.

If you are building an internal platform, the failure mode is not technical. It is shipping something genuinely excellent that nobody uses because the team that built it never treated adoption as their problem. The engineers building the platform are also its product managers, whether they want that job or not.
