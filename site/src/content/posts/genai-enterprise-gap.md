---
title: "The Gap Between GenAI Demos and Enterprise AI Products"
date: "2025-11-03"
excerpt: "The LLM integration in RuleAI took about two weeks. The four months after that were the actual job."
tags: ["GenAI", "AI Products", "Engineering"]
---

RuleAI automates the creation of underwriting impairment rules from documentation. The first working version, the part you would put in a demo, took roughly two weeks. Text goes in, an LLM returns structured rules, everyone in the room nods. Then I spent four months on everything the demo did not show, and that ratio is the only thing worth knowing about building GenAI products inside a real company.

The first wall was that prompts which work on most inputs fail quietly on the rest. We were processing more than forty different impairments, each with its own documentation conventions, terminology, and edge cases. A prompt that handled eighty percent of them looked great in a demo and was useless in production, because the twenty percent it dropped were not random. They clustered on exactly the impairments that were complicated enough to be worth automating in the first place. There is no clever prompt that fixes this. You find the failures by running real inputs and looking at what broke, over and over.

Which meant the thing I actually had to build first was evaluation, not generation. How do you know a generated rule is correct? You need a ground truth set, a way to compare against it, and a human review path for the cases the comparison flags. That harness took longer than the feature it was checking, and it was the right order to do things in. Optimizing a prompt before you can measure whether the output is correct is just moving in the dark with confidence.

The other thing the demo hides is that RuleAI did not live alone. Its output fed into alitheia's Rules Designer, which had a real data model, real validation logic, and a client-facing UI. So every LLM response had to survive schema validation and business rule checks and a human review queue before it touched anything a customer would see. We never asked the model for free-form text. Every prompt ended in a schema and a hard instruction to fill it, because structured output is the only kind you can validate cheaply, and validation is the only thing standing between you and silently shipping a wrong underwriting rule.

For a tool making real risk decisions, the model was the first draft and a person was the editor, by design. Reviewers were the expected path, not the error handler you fall back to when something breaks. That framing changed how we built the queue, how we surfaced model confidence, and how we handled the cases where the LLM returned something we did not expect. Those got flagged for a human, not retried until they looked plausible. A silent wrong answer is worse than a loud failure, and in an AI system the silent ones are the default unless you work to prevent them.

Cost was the last thing I expected to spend real time on and one of the places we got the most leverage. Token spend compounds in ways that do not show up until you are at volume. We profiled the prompts, found the expensive patterns, and cached the documentation chunks that had already been processed, which cut costs by around sixty percent without touching quality.

None of the hard parts were about the model. The model was close to the least important decision in the whole system. The decisions that mattered were about data quality, how we evaluated outputs, where humans sat in the loop, and what happened when things went wrong. When I see a team spending most of its time on prompt engineering, I usually read it as a team avoiding the harder and less fun work that actually determines whether the product survives contact with production.
