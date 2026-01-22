# ROADMAP

**sema-metra--alchemica-mundi** — Development roadmap and project status

---

## Current Status: v1.0.0

**Release Date:** January 2026
**Test Coverage:** 297 tests (100% passing)
**Build Status:** Clean

---

## Completed Milestones

### v1.0.0 — Core Architecture

- [x] **10 Axiom Framework** — Formal axiom set with corollaries
- [x] **6 Hard Rules (A-F)** — Enforced constraints with validators
- [x] **Event Spine** — Append-only log, context store, transform validator, world-binding
- [x] **DUALCORE Matrix** — 64 spectral dualities across 8 domains
- [x] **Binary Mirror Table** — 32 strict on/off gates
- [x] **Hybrid Toggles** — 15 context-sensitive states
- [x] **Dual-Binary Bridge** — 32 mappings (2:1 duality-to-binary)
- [x] **LFO/RNG Engine** — Waveform modulation and dice mechanics
- [x] **Affector System** — Influence targets with weighted application
- [x] **Ritual Execution** — Condition checking, fusion signals, gate validation
- [x] **FX Chain** — Mythological god-named effects with presets
- [x] **Character Waveforms** — 6 waveform types with templates
- [x] **Patch Manager** — Snapshot, save/load, validation
- [x] **CLI Interface** — `sema` command with init, roll, modulate, ritual, status
- [x] **Type Safety** — Discriminated unions, typed errors, Zod validation
- [x] **Comprehensive Tests** — 297 tests across 8 suites

### Testing Milestones

- [x] Core module tests (27 tests)
- [x] Modulation tests (26 tests)
- [x] Ritual tests (22 tests)
- [x] FX tests (48 tests)
- [x] Character tests (36 tests)
- [x] Patch tests (35 tests)
- [x] Spine tests (60 tests)
- [x] Axiom compliance tests (43 tests)

---

## Active Development

### v1.1.0 — Audio Integration (Planned)

The FX module currently operates in symbolic mode. Full audio integration requires:

- [ ] **Tone.js Audio Layer** — Connect FXUnit to actual Tone.js nodes
- [ ] **Audio Context Management** — Browser/Node audio context handling
- [ ] **Real-time Modulation** — Connect LFO/RNG to audio parameters
- [ ] **Audio Rendering** — Export audio buffers
- [ ] **Web Audio Worklet** — Background audio processing

### v1.2.0 — Browser Persistence (Planned)

The patch manager currently uses Node.js filesystem. Browser support requires:

- [ ] **IndexedDB Adapter** — Browser-native storage
- [ ] **localStorage Fallback** — Simple key-value storage
- [ ] **Sync Middleware** — Cross-tab synchronization
- [ ] **Import/Export** — File download/upload for patches

---

## Future Considerations

### Visualization

- [ ] **Synthesis Ring Diagram** — Visual representation of double-ring logic
- [ ] **Real-time State Display** — Live duality/binary/hybrid visualization
- [ ] **Event Timeline** — Spine event stream visualization
- [ ] **Modulation Graphs** — LFO waveform and RNG distribution charts

### Extended Ritual System

- [ ] **Ritual DSL** — Domain-specific language for ritual definition
- [ ] **Conditional Composition** — Complex multi-stage rituals
- [ ] **Ritual Templates** — Pre-defined ritual patterns
- [ ] **Event Hooks** — Pre/post ritual execution callbacks

### Network Features

- [ ] **State Synchronization** — Multi-client shared matrix
- [ ] **Event Streaming** — Real-time spine event broadcast
- [ ] **Collaborative Rituals** — Multi-user ritual execution

### AI Integration

- [ ] **Character Autonomy** — AI-driven character behavior
- [ ] **Semantic Analysis** — Meaning conservation scoring
- [ ] **Emergent Narratives** — Pattern detection in event streams

---

## Architecture Principles

Future development must maintain:

1. **Axiom Compliance** — All changes must pass `validateAxiomCompliance()`
2. **Hard Rule Enforcement** — Rules A-F remain inviolable
3. **Append-Only Integrity** — Event log immutability
4. **Context Requirement** — Every operation carries context
5. **World-Binding Feedback** — Outputs alter subsequent inputs
6. **Type Safety** — No `any` types, discriminated unions preferred
7. **Test Coverage** — New features require comprehensive tests

---

## Contributing

When contributing, ensure:

1. All 297+ tests pass (`npm test`)
2. Build succeeds without warnings (`npm run build`)
3. Type checking passes (`npm run typecheck`)
4. Axiom compliance validates (`validateAxiomCompliance()`)
5. New features include tests
6. Documentation updated if needed

---

## Version History

| Version | Date | Highlights |
|---------|------|------------|
| 1.0.0 | Jan 2026 | Initial release with full axiom compliance |

---

*Development follows the principle: a system may call itself sema-metra–alchemica-mundi only if it cannot be emptied without collapse, cannot repeat itself without mutation, and cannot describe the world without altering it.*
