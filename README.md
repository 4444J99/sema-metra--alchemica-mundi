[![ORGAN-I: Theoria](https://img.shields.io/badge/ORGAN--I-Theoria-311b92?style=flat-square)](https://github.com/organvm-i-theoria)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square)]()
[![Tests](https://img.shields.io/badge/tests-297%20passing-brightgreen?style=flat-square)]()
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)

# sema-metra--alchemica-mundi

[![CI](https://github.com/organvm-i-theoria/sema-metra--alchemica-mundi/actions/workflows/ci.yml/badge.svg)](https://github.com/organvm-i-theoria/sema-metra--alchemica-mundi/actions/workflows/ci.yml)
[![Coverage](https://img.shields.io/badge/coverage-pending-lightgrey)](https://github.com/organvm-i-theoria/sema-metra--alchemica-mundi)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/organvm-i-theoria/sema-metra--alchemica-mundi/blob/main/LICENSE)
[![Organ I](https://img.shields.io/badge/Organ-I%20Theoria-8B5CF6)](https://github.com/organvm-i-theoria)
[![Status](https://img.shields.io/badge/status-active-brightgreen)](https://github.com/organvm-i-theoria/sema-metra--alchemica-mundi)
[![TypeScript](https://img.shields.io/badge/lang-TypeScript-informational)](https://github.com/organvm-i-theoria/sema-metra--alchemica-mundi)


**Signal-Matrix for World-Alchemy**

> *Signals generate the matrix; the matrix transmutes signals; and every transmutation rewrites the conditions of the world that will interpret the next signal.*

---

## What This Is

**Sema-Metra: Alchemica Mundi** is a TypeScript framework implementing an axiom-driven signal-matrix system. It functions as a programmable creative engine — a modular synthesis patchbay that routes and transforms signals across modalities using formal ontological architecture. Where conventional signal-processing frameworks treat transformation as stateless pipes (signals enter, get processed, exit unchanged), this system enforces a closed ontological loop: every output rewrites the world that interprets subsequent inputs.

The name encodes the architecture. *Sema* (Greek: σῆμα, sign, signal) and *metra* (Greek: μήτρα, matrix, measure) describe the input/output surface. *Alchemica mundi* (Latin: world-alchemy) describes what happens between: transmutation that alters not just the signal but the conditions under which future signals will be read.

The framework blends four domains that rarely share infrastructure:

- **Modular synthesis** — LFO waveforms, signal routing, FX chains, patch save/load
- **Tabletop RPG mechanics** — Dice systems (d4 through d1000), ritual conditions, pass/fail gates
- **Ritual and mythological systems** — Pre-built rituals with binary gate checks, hybrid toggle states, character waveform models as AI entities
- **Formal ontology** — 10 axioms enforced at runtime through an event-sourcing spine with hard rules, cost vectors, and mandatory world-binding feedback

The result is a system where creative emergence and formal rigor coexist by design, not by accident. The axioms prevent the system from degenerating into noise; the signal architecture prevents the axioms from calcifying into dogma.

71 files. 169KB. Node >= 20. MIT license. v1.0.0.

---

## Why This Exists

Creative systems face a fundamental tension: they must be **structured enough to be programmable** yet **fluid enough to enable genuine emergence**. Traditional approaches either impose rigid schemas that constrain creativity, or offer formless flexibility that resists systematic operation.

Most signal-processing frameworks lack four properties this system treats as non-negotiable:

- **Ontological integrity** — No guarantee that operations preserve meaning while allowing form to evolve
- **Contextual awareness** — Signals processed without knowledge of their origin or purpose
- **World-binding** — Outputs that never influence future inputs; the system never learns from its operations
- **Cost accounting** — Transformations that happen without acknowledging the semantic entropy they create

Sema-Metra addresses all four by making them axiomatic constraints rather than optional features. The 10 formal axioms are not documentation — they are runtime-enforced invariants. An identity transform (passing a signal through unchanged) is rejected by Hard Rule D. A transform without a cost vector is rejected by Hard Rule E. An output that fails to write back to the world context is rejected by Hard Rule F.

This makes the framework useful for building systems where creative operations must leave auditable traces, where context is constitutive rather than decorative, and where "total clarity is total stagnation" (Axiom 10: Legibility as Power).

---

## Philosophical Framework

The system draws from three intellectual traditions and fuses them into a single executable ontology.

### Semiotics and Signal Theory

Axiom I (Primacy of the Sign) asserts that all structure originates in σῆμα — meaning-bearing signals precipitate the conditions under which structure coheres. The corollary ("a blank system is ontologically invalid") is enforced by Hard Rule A: the event log must contain at least one interpretable signal before any state projection can be rendered. This is not a developer convenience; it is a philosophical position that empty containers are ontologically incoherent. Structure is the memory of repetition (Axiom II), which means schemas are aftereffects, not causes. The DUALCORE spectral matrix demonstrates this: 64 dualities do not exist as a static schema but as an emergent surface that stabilizes through signal recurrence.

### Alchemical Transformation

Axioms III and IV form the transmutation core. All operations within the matrix are transmutative rather than preservative — no signal exits the system in the same ontological state in which it entered (Axiom III). But while forms may decay, mutate, or be discarded, meaning is conserved through transformation (Axiom IV). The system preserves semantic charge rather than syntactic fidelity. The practical consequence is that every transform must pass a non-identity check (Hard Rule D) and emit a cost vector documenting information loss, ambiguity change, compute cost, and confidence delta (Hard Rule E). Perfect reversibility is impossible by design. Compression is a gain, not a reduction.

### Recursive World-Formation

Axiom V (Recursive World-Binding) is the system's most radical claim: the scope of transformation is mundus — the world itself. The system does not model the world from outside it; it participates in world-formation. Every externally visible output must produce both an `OutputCommitted` event and a `ConditionUpdated` event (Hard Rule F, Invariant I7). There are no fire-and-forget outputs. The `WorldBindingManager` in `src/spine/world-binding.ts` enforces this by tracking pending outputs and rejecting any that fail to complete their feedback loop. Combined with Axiom VIII (Anti-Teleology), which mandates that no workflow reaches a terminal state, the system continuously rewrites the conditions that will interpret its next signal.

### The Closing Condition

A system may call itself **sema-metra--alchemica-mundi** only if:

1. It cannot be emptied without collapse.
2. It cannot repeat itself without mutation.
3. It cannot describe the world without altering it.

Anything less is simulation, not ontology.

---

## The 10 Axioms

The formal axiom set governs all system behavior. These are not guidelines — they are enforced through six hard rules and validated by 43 dedicated axiom tests.

| # | Axiom | Principle | Corollary |
|---|-------|-----------|-----------|
| 1 | **Primacy of the Sign** | Signals precede structure; the system cannot exist empty | A "blank" system is ontologically invalid |
| 2 | **Emergence of the Matrix** | Structure crystallizes from recurring signals, not from schema | Schemas are aftereffects, not causes |
| 3 | **Alchemical Transformation** | All operations transmute; nothing passes through unchanged | Perfect reversibility is impossible by design |
| 4 | **Conservation of Meaning** | Semantic charge persists even as forms decay | Compression is a gain, not a reduction |
| 5 | **Recursive World-Binding** | Outputs alter the conditions of subsequent inputs | There is no final output, only recursive influence |
| 6 | **Signal-Structure Feedback** | Structure constrains future signification | Governance must remain plastic or collapse is inevitable |
| 7 | **Irreducibility of Context** | Context is constitutive, not decorative | Decontextualization is a form of semantic violence |
| 8 | **Anti-Teleology** | No final state; progress emerges locally | Progress is a side-effect, not a goal |
| 9 | **Ontological Cost** | Every transformation exacts entropy | Clarity always sacrifices potential |
| 10 | **Legibility as Power** | Total clarity is total stagnation | Opacity is a necessary condition of vitality |

The axiom-compliant spine enforces these through four mechanisms:

```
SEMA_LOG              →  Append-only event stream (Axioms 1, 2)
METRA_PROJECTIONS     →  Versioned context bundles (Axioms 6, 7)
ALCHEMICA_TRANSFORMS  →  Non-identity transform validation (Axioms 3, 4, 9)
MUNDI_FEEDBACK        →  Mandatory world-binding loop (Axioms 5, 8, 10)
```

---

## Architecture

### Core Layers

```
┌─────────────────────────────────────────────────────────────┐
│                      CLI (sema)                             │
├─────────────────────────────────────────────────────────────┤
│  Matrix   │  Modulation  │  Ritual  │  FX  │  Characters   │
├─────────────────────────────────────────────────────────────┤
│                    Patch Manager                            │
├─────────────────────────────────────────────────────────────┤
│                    Event Spine                              │
│  ┌────────────┬────────────┬────────────┬────────────┐     │
│  │  EventLog  │  Context   │ Transform  │   World    │     │
│  │  (append)  │   Store    │ Validator  │  Binding   │     │
│  └────────────┴────────────┴────────────┴────────────┘     │
├─────────────────────────────────────────────────────────────┤
│                  Hard Rules (A-F)                           │
└─────────────────────────────────────────────────────────────┘
```

### Hard Rules

| Rule | Name | Enforcement | Derivation |
|------|------|-------------|------------|
| A | No Empty Boot | Genesis signal required before state projection | Axiom I |
| B | Append-Only | Events immutable after commit; updates as new events with `supersedesRef` | Axiom II |
| C | Context Required | Every event carries context reference; `interpret(signal)` without context is disallowed | Axiom VII |
| D | Transform Must Mutate | Identity transforms rejected; fingerprint, context, or priors must change | Axiom III |
| E | Every Transform Emits Cost | Cost vectors (`lossEstimate`, `ambiguityDelta`, `computeCost`, `confidenceDelta`) mandatory | Axiom IX |
| F | Every Output Writes Back | `OutputCommitted` + `ConditionUpdated` events required; no fire-and-forget | Axiom V |

The `RuleValidator` class in `src/spine/rules.ts` implements all six rules. Each rule has a dedicated validation method that returns a `RuleValidationResult` with structured failure reasons. The `validateAll()` method runs the complete suite and returns a `RuleValidationReport`. The `assertAll()` method throws a `RuleViolationError` on the first failure — fail-fast semantics that prevent the system from operating in a non-compliant state.

### Implementation Constraints (C1–C10)

The axioms translate into 10 implementation constraints documented in `CONSTRAINTS.md`:

- **C1 (No Null Initialization):** System refuses empty boot. Genesis requires at least one interpretable signal event.
- **C2 (Event-First Architecture):** All state derivable from append-only event stream. "Current state" is a projection, never ground truth.
- **C3 (Matrix is Learned, Not Declared):** Schemas permitted only as provisional scaffolds with explicit decay rules.
- **C4 (Every Transform is Transmutative):** No pipeline step may claim identity transformation except authenticated transport encoding.
- **C5 (Meaning-Conservation as Objective Function):** Compression and synthesis evaluated against semantic preservation metrics, not byte equivalence.
- **C6 (World-Binding Feedback Loop is Mandatory):** Outputs written back into conditions of future computation.
- **C7 (Context is First-Class):** Every signal carries a context bundle required for interpretation.
- **C8 (Anti-Teleology):** All workflows end in a new re-enterable event.
- **C9 (Explicit Cost Accounting):** Each transform emits a cost vector; downstream modules can route based on cost.
- **C10 (Partial Opacity by Design):** Internal latent structures are not canonical truth; only versioned projections are.

### Signal Surface

The signal surface comprises five interconnected layers:

- **DUALCORE Spectral Matrix** — 64 oscillating dualities sliding -1.0 to +1.0 across 27 domains (metaphysical, structural, narrative, myth, psychological, temporal, audio/visual, technical, epistemology, language, memory, dialogic, spatial, behavioral, visual, semiotic, event origin, audio, myth/energy, economic, sound/memory, myth/place, ritual/time, system logic, mood, memory/design, myth/cycle). These are the primary signal carriers.
- **Binary Mirror Table** — 32 strict on/off logic gates spanning 29 domains (power, logic, system, process, ritual, access, spatial, UI/UX, metaphysical, storage, and more) for ritual entry/denial, narrative forks, and security toggles. No intermediate states.
- **Hybrid Toggles** — 15 context-sensitive ritual states across 15 modes (concealment, identity, divinity, communication, access, memory, system flow, tone, authority, recursion, time, coherence, pacing, access/memory, transformation). State depends on surrounding duality values with transition mechanics.
- **Dual-Binary Bridge** — 32 mappings connecting duality oscillations to binary gate states (2:1 duality-to-binary pairs). This is the layer where continuous signals become discrete decisions.
- **LFO System** — 6 waveform shapes (sine, saw, square, step, random, moon_phase) providing continuous modulation of duality values over time.

### Event Spine Architecture

The spine module (`src/spine/`) provides the four enforcement mechanisms that make the axioms executable:

**1. SEMA_LOG (Event Log)** — `src/spine/event-log.ts`

Append-only immutable event log. The system can delete every derived artifact and reconstruct state from the log alone. Event types include `genesis:signal`, `signal:observed`, `structure:inferred`, `transform:applied`, `output:committed`, `condition:updated`, `action:proposed`, and `fork:created`. The `replay()` method accepts a projector function and initial state, producing a `ReplayResult` with a state hash for verification. Every event is `Object.freeze()`-d after commit (Invariant I2). Event hashes use SHA-256 for integrity verification.

**2. METRA_PROJECTIONS (Context Store)** — `src/spine/context-store.ts`

Versioned context objects structured as five-dimensional bundles: WHO (agent type, ID, name), WHAT (signal type, domain, intensity, polarity), WHEN (timestamp, optional temporal markers), WHERE (spatial domain), and WHY (causal intent). Context derivation creates child contexts that inherit parent properties while specializing for the current operation. This satisfies Axiom VII: no signal can be evaluated independently of the matrix that produced it.

**3. ALCHEMICA_TRANSFORMS (Transform Validator)** — `src/spine/transform.ts`

Non-identity validation with pre-built cost profiles for each transform type: `DUALITY_MODULATION`, `BINARY_TOGGLE`, `HYBRID_TRANSITION`, `RITUAL_EXECUTION`, `FX_APPLICATION`, `PATCH_OPERATION`. Each cost profile specifies `lossEstimate`, `ambiguityDelta`, `computeCost`, and `confidenceDelta`. The `validateAndApply()` method checks fingerprint change, context change, and priors change before accepting a transform.

**4. MUNDI_FEEDBACK (World Binding)** — `src/spine/world-binding.ts`

The `WorldBindingManager` ensures every externally visible output produces both `OutputCommitted` and `ConditionUpdated` events atomically. It supports synchronous commits via `commitOutput()` and asynchronous workflows via `beginOutput()`/`completeOutput()`. Pending outputs are tracked; orphaned outputs (pending beyond a configurable timeout) trigger violations. After every output, the manager proposes a next action (monitoring, stabilization, or response-awaiting) to satisfy Axiom VIII's requirement that no workflow reaches a terminal state.

### RNG Dice System

Probability is managed through a tabletop-style dice system where each die type maps to a different scale of consequence:

| Die | Range | Use Case |
|-----|-------|----------|
| d4 | 1-4 | Micro modulation (UI effects) |
| d6 | 1-6 | AI responses, emotion flicker |
| d8 | 1-8 | Mood state changes |
| d10 | 1-10 | Action success/failure intensities |
| d12 | 1-12 | System bugs, recursion locks |
| d20 | 1-20 | Ritual pass/fail, karma inversion |
| d100 | 1-100 | Major plot forks, fusion glitch |
| d1000 | 1-1000 | Divine intervention, cosmic shift |

### Ritual System

Pre-built rituals operate as conditional signal-fusion procedures. Each ritual declares binary gate conditions, duality thresholds, and fusion logic. When conditions are met, the ritual produces a fusion signal that propagates through the FX chain and writes back to the world context.

The `FusionEngine` in `src/ritual/fusion.ts` combines weighted duality inputs to generate named fusion signals based on polarity, intensity, and alignment characteristics. Signal names follow a glitch-aesthetic convention: `SH1MM3R_ASCEND`, `D1V1N3_OVERFLOW`, `V01D_DESCENT`, `ABY55_CALL`, `GL1TCH_BURST`, `FR4CTUR3_SP1RAL`, `CH40S_T34R`, `EQU1L1BR1UM`, `L1MB0_DR1FT`. Custom signal generators can be registered for application-specific fusion semantics.
