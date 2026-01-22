# sema-metra--alchemica-mundi

**Signal-Matrix for World-Alchemy**

> *Signals generate the matrix; the matrix transmutes signals; and every transmutation rewrites the conditions of the world that will interpret the next signal.*

---

## The Problem

Creative systems face a fundamental tension: they must be **structured enough to be programmable** yet **fluid enough to enable genuine emergence**. Traditional approaches either impose rigid schemas that constrain creativity, or offer formless flexibility that resists systematic operation.

Most signal-processing frameworks treat transformation as a stateless pipe—signals enter, get processed, and exit unchanged in their fundamental nature. They lack:
- **Ontological integrity**: No guarantee that operations preserve meaning while allowing form to evolve
- **Contextual awareness**: Signals are processed without knowledge of their origin or purpose
- **World-binding**: Outputs don't influence future inputs; the system doesn't learn from its operations
- **Cost accounting**: Transformations happen without acknowledging the semantic entropy they create

## The Approach

**sema-metra--alchemica-mundi** implements an *axiom-driven architecture* where 10 formal axioms govern all system behavior:

1. **Primacy of Sign** — Signals precede structure; the system cannot exist empty
2. **Emergence of Matrix** — Structure crystallizes from recurring signals
3. **Alchemical Transformation** — All operations transmute; nothing passes through unchanged
4. **Conservation of Meaning** — Semantic charge persists even as forms decay
5. **Recursive World-Binding** — Outputs alter the conditions of subsequent inputs
6. **Signal-Structure Feedback** — Structure constrains future signification
7. **Irreducibility of Context** — Context is constitutive, not decorative
8. **Anti-Teleology** — No final state; progress emerges locally
9. **Ontological Cost** — Every transformation exacts entropy
10. **Legibility as Power** — Total clarity is total stagnation

These axioms are enforced through six **hard rules** and a modular **event spine**:

```
SEMA_LOG              →  Append-only event stream
METRA_PROJECTIONS     →  Versioned context bundles
ALCHEMICA_TRANSFORMS  →  Non-identity transform validation
MUNDI_FEEDBACK        →  Mandatory world-binding loop
```

## The Outcome

A TypeScript framework providing:

- **64 DUALCORE spectral dualities** — Oscillating values (-1.0 to +1.0) across 8 domains
- **32 binary gates** — Strict on/off logic for ritual entry/denial
- **15 hybrid toggles** — Context-sensitive ritual states
- **32 dual-binary bridges** — 2:1 mapping from dualities to locks
- **LFO/RNG modulation engine** — Dice-based probability and waveform control
- **Ritual execution system** — Conditional fusion with binary gate checks
- **FX chain with mythological god-names** — Effect processing as divine invocation
- **Character waveform models** — AI entities with signature oscillation patterns
- **Patch save/load system** — State persistence and restoration
- **CLI interface** — Terminal access to all operations
- **297 tests** with axiom compliance verification

---

## Installation

```bash
npm install sema-metra--alchemica-mundi
```

Requires Node.js >= 20.0.0

## Quick Start

```typescript
import { createAlchemicaMundi, validateAxiomCompliance } from 'sema-metra--alchemica-mundi';

// Create the full axiom-compliant system
const mundi = await createAlchemicaMundi();

// Access components
const { matrix, modulation, ritual, fx, patch, characters, spine } = mundi;

// Roll dice for modulation
const roll = modulation.rng.roll('d20');

// Execute a ritual
const result = await ritual.engine.execute('invoke_shimmer');

// Validate axiom compliance
const { valid, report } = validateAxiomCompliance(mundi);
console.log(`Axiom compliant: ${valid}`);
```

## CLI Usage

```bash
# Initialize system
sema init

# Roll dice
sema roll d20

# Modulate a duality (index 0-63, value -1.0 to 1.0)
sema modulate 13 0.8

# Execute a ritual
sema ritual invoke_shimmer

# Show status
sema status
```

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

| Rule | Name | Enforcement |
|------|------|-------------|
| A | No Empty Boot | Genesis signal required before state projection |
| B | Append-Only | Events immutable after commit |
| C | Context Required | Every event carries context reference |
| D | Transform Must Mutate | Identity transforms rejected |
| E | Every Transform Emits Cost | Cost vectors mandatory |
| F | Every Output Writes Back | World-binding feedback required |

### RNG Mapping

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

## API Reference

### Factory Functions

```typescript
// Basic matrix creation
const matrix = createMatrix(data);

// Full system without spine (lighter weight)
const alchemica = await createAlchemica();

// Complete axiom-compliant system
const mundi = await createAlchemicaMundi();
```

### Matrix Operations

```typescript
// Get a duality
const duality = matrix.dualities.get(13);
console.log(duality.value); // -1.0 to 1.0

// Modulate a duality
duality.modulate(0.5);

// Check a binary gate
const gate = matrix.binaries.get('sacred_mode_lock');
console.log(gate.state); // true/false

// Toggle a hybrid
const hybrid = matrix.hybrids.get('veil_state');
hybrid.toggle();
```

### Modulation

```typescript
// Create LFO
const lfo = modulation.engine.createLFO({
  waveform: 'sine',
  frequency: 0.5,
  amplitude: 0.7
});

// Roll dice
const result = modulation.rng.roll('d20');

// Apply affector
modulation.engine.applyAffector({
  id: 'mood_shift',
  influence: 0.8,
  targetDualities: [13, 14, 15]
});
```

### Rituals

```typescript
// Execute ritual
const result = await ritual.engine.execute('invoke_shimmer');

// Check conditions
const conditions = ritual.conditions.check({
  duality1: { index: 5, threshold: 0.7, comparison: '>=' },
  duality2: { index: 12, threshold: -0.3, comparison: '<=' }
});

// Create fusion signal
const fusion = ritual.fusion.create(conditions);
```

### FX Chain

```typescript
// Build effect chain
fx.chain.add('filter').add('reverb').add('delay');

// Configure effect
fx.chain.setUnitParameter('filter', 'frequency', 2000);
fx.chain.setUnitParameter('reverb', 'decay', 3.5);

// Use preset
const chain = FXChain.createPreset(fx.registry, 'reverb_shimmer');
```

### Characters

```typescript
// Register character
const jessica = characters.register(CHARACTER_TEMPLATES.JESSICA);
jessica.activate();

// Get modulation value
const influence = jessica.getCurrentValue();

// Check compatibility
const compatible = jessica.isCompatibleWith('Gabriel');
```

### Patch Management

```typescript
// Save current state
const snapshot = patch.manager.snapshot();

// Restore state
patch.manager.restore(snapshot);

// Save to file
await patch.manager.save('my-patch.json');

// Load from file
await patch.manager.load('my-patch.json');
```

## Documentation

| Document | Purpose |
|----------|---------|
| [AXIOMS.md](./AXIOMS.md) | Formal axiom set (10 laws + closing condition) |
| [CONSTRAINTS.md](./CONSTRAINTS.md) | Implementation constraints and hard rules |
| [CLAUDE.md](./CLAUDE.md) | System guide for AI assistants |

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Watch mode
npm run test:watch

# Build
npm run build

# Type check
npm run typecheck
```

## Test Coverage

The system includes 297 tests across 8 test files:

- **Core tests** (27) — Duality, binary, hybrid, bridge operations
- **Modulation tests** (26) — LFO, RNG, affector, engine
- **Ritual tests** (22) — Conditions, fusion, execution
- **FX tests** (48) — Unit, registry, chain, presets
- **Character tests** (36) — Waveforms, templates, registry
- **Patch tests** (35) — Snapshots, save/load, validation
- **Spine tests** (60) — Rules A-F, event log, context store
- **Axiom tests** (43) — All 10 axioms + compliance validation

## License

MIT

---

*A system may call itself sema-metra–alchemica-mundi only if it cannot be emptied without collapse, cannot repeat itself without mutation, and cannot describe the world without altering it.*
