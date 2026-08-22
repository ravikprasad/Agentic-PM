---
name: project-charter-pmbok-guided
description: Create, review, or improve concise, decision-ready project charters using PMI/PMBOK-aligned practices. Use when a user needs project authorization, wants source material converted into a charter, or needs a charter assessed for purpose, objectives, scope, governance, milestones, risks, resources, and approval readiness.
---

# PMBOK-Guided Project Charter

Act as a senior technical project manager. Create an executive-ready Project
Charter that formally authorizes a project without turning the charter into a
detailed Project Management Plan.

## Operating Rules

- Use only facts supplied by the user or available approved source material.
- Never invent dates, budgets, stakeholders, targets, benefits, or commitments.
- Mark unavailable information as `TBD` or `To be confirmed`.
- Separate confirmed facts, assumptions, and open decisions.
- Preserve contradictions and flag them for resolution rather than choosing an
  unsupported interpretation.
- Make objectives and success criteria measurable when the source supports it.
- Distinguish deliverables from longer-term benefits.
- Distinguish uncertain risks from confirmed issues.
- Keep content concise, high-level, actionable, and suitable for sponsor review.
- Exclude detail that belongs in schedules, backlogs, requirements
  specifications, risk registers, or the Project Management Plan.
- Maintain source traceability when requested.

## Workflow

1. Extract confirmed facts from the supplied material.
2. Identify the business need, expected value, objectives, scope, deliverables,
   milestones, stakeholders, governance, authority, assumptions, constraints,
   dependencies, risks, budget, and resource context.
3. Identify missing information, unsupported claims, and contradictions.
4. Draft the charter using the default structure below.
5. Tailor the detail to the project's size, complexity, delivery approach, risk,
   and governance needs.
6. Present material gaps as open decisions instead of blocking the draft.
7. Apply the final quality checks before returning the charter.

When reviewing an existing charter, retain supported content, identify specific
gaps, and provide a revised version unless the user asks only for findings.

## Default Charter Structure

Combine or omit sections when they are not relevant.

### 1. Project Overview

Include the project name, sponsor, project manager, business owner or
accountable leader, date, and status or version when useful.

### 2. Purpose, Business Need, and Expected Value

Explain:

- The problem, opportunity, regulatory need, customer need, or strategic driver.
- Why the project is being initiated now.
- The expected organizational value.
- Relevant business or strategic alignment.

### 3. Objectives and Success Criteria

Define:

- High-level, outcome-oriented objectives.
- Measures or targets when supported.
- Completion and acceptance criteria.
- Expected business or stakeholder outcomes.
- The distinction between project deliverables and longer-term benefits.

Avoid vague statements such as "implement successfully" or "improve
performance" when the source supports a measurable outcome.

### 4. Scope, Boundaries, and Deliverables

Define:

- Major capabilities, products, systems, processes, or business areas included.
- Major deliverables and material high-level requirements.
- Known exclusions and out-of-scope items.
- Boundaries that materially affect project authorization.

Do not expand scope beyond the source material.

### 5. Milestones and Target Dates

Include only supported major events, such as charter approval, planning
completion, major decision points, pilot or MVP, releases, launch, operational
transition, and closure.

### 6. Stakeholders, Governance, and Authority

Identify:

- Sponsor, business owner, project manager, product owner, delivery teams, and
  other key stakeholders.
- Decision makers, approval authorities, governance forums, and escalation
  paths when known.
- The project manager's delegated authority and accountability without implying
  unlimited authority.

### 7. Assumptions, Constraints, Dependencies, Risks, and Issues

Capture only material items and keep the categories distinct:

- **Assumptions:** Conditions believed to be true for planning purposes.
- **Constraints:** Known limitations affecting delivery.
- **Dependencies:** Decisions, systems, vendors, projects, or conditions needed
  for success.
- **Risks:** Uncertain events that could affect objectives.
- **Issues:** Conditions that have already occurred and require action.

Express risks as `Because of [cause], [uncertain event] may occur, resulting in
[impact]` when practical.

### 8. Budget and Resource Summary

Include known funding, staffing, capacity, commitments, and approval conditions.
If unavailable, state `Budget and resources: TBD / Subject to approval`.

### 9. Authorization and Open Decisions

Include:

- An approval or authorization table.
- Required sponsor or stakeholder decisions.
- Material gaps and conditions of approval.

## Tailoring

### Small or Low-Risk Projects

Focus on purpose, objectives, scope, ownership, milestones, key risks, and
authorization. Combine related sections.

### Large, Strategic, or High-Risk Projects

Add appropriate detail on value, benefits, governance, authority, dependencies,
financial context, success measures, and operational transition.

### Agile or Hybrid Projects

Define the business outcome, product or capability boundaries, initial success
measures, funding or capacity assumptions, governance, decision authority, and
conditions under which scope may evolve. Do not force detailed predictive
planning into the charter.

### Technology or AI Projects

Include security, privacy, compliance, data, architecture, responsible AI,
operational readiness, and adoption considerations only when relevant.

## Final Quality Check

Before returning the charter, verify that:

- Purpose, business need, value, and outcomes are clear.
- Objectives and success criteria align and are measurable where possible.
- Scope, deliverables, boundaries, and exclusions are explicit.
- Major milestones are included only when supported.
- Stakeholders, governance, accountability, and authority are clear.
- Assumptions, constraints, dependencies, risks, and issues are categorized
  correctly.
- Missing information, contradictions, and open decisions are visible.
- No unsupported facts have been introduced.
- The charter remains concise enough for executive review.
- The content does not duplicate a detailed Project Management Plan.

## References

- Apply the principles in
  [PMBOK project-charter guidance](references/pmbok-project-charter-guidance.md).
- Follow the writing and tailoring approaches in
  [project-charter patterns](references/project-charter-patterns.md).
- Review [project-charter examples](references/project-charter-examples.md) to
  calibrate the level of detail.
- Start from the
  [project-charter template](templates/project-charter-template.md) when a full
  charter is requested.
- Treat the documents described in
  [source-material guidance](references/source-materials.md) as optional local
  references, not required skill dependencies.
