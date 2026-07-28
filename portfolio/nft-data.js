// NFT Data — Replace with your generated JSON files
// Generated from: ~/mint_agi_nft.py outputs

const nfts = [
  {
    id: "001",
    name: "Glass Egg #1",
    coherence: "0.1115",
    entropy: "4.2667",
    cheeger: "0.5178",
    engine: "Quantum Statevector Simulator",
    dna: "esqet_genesis_2026",
    generation: 1,
    preview: "portfolio/previews/egg_001.html",
    job_id: "sim-4a3b2c1d"
  },
  {
    id: "002",
    name: "Glass Egg #2",
    coherence: "0.0957",
    entropy: "4.3120",
    cheeger: "0.5209",
    engine: "Quantum Statevector Simulator",
    dna: "esqet_mint_20260728_173423",
    generation: 1,
    preview: "portfolio/previews/egg_002.html",
    job_id: "sim-5e6f7g8h"
  },
  {
    id: "003",
    name: "Glass Egg #3",
    coherence: "0.0816",
    entropy: "4.3550",
    cheeger: "0.5237",
    engine: "IBM Quantum Hardware",
    dna: "esqet_hardware_20260728",
    generation: 1,
    preview: "portfolio/previews/egg_003.html",
    job_id: "job-d87k4jqs46sc73f8arog"
  },
  {
    id: "004",
    name: "Glass Egg #4",
    coherence: "0.1048",
    entropy: "4.2891",
    cheeger: "0.5190",
    engine: "Quantum Statevector Simulator",
    dna: "esqet_evolution_001",
    generation: 2,
    preview: "portfolio/previews/egg_004.html",
    job_id: "sim-9i0j1k2l"
  },
  {
    id: "005",
    name: "Glass Egg #5",
    coherence: "0.0870",
    entropy: "4.3342",
    cheeger: "0.5226",
    engine: "IBM Quantum Hardware",
    dna: "esqet_hardware_002",
    generation: 1,
    preview: "portfolio/previews/egg_005.html",
    job_id: "job-3m4n5o6p7q8r"
  }
];

// Render function
document.addEventListener('DOMContentLoaded', function() {
  const grid = document.getElementById('nft-grid');
  if (!grid) return;

  nfts.forEach((nft) => {
    const card = document.createElement('div');
    card.className = 'card';
    
    const isSim = nft.engine.includes('Simulator');
    const badgeClass = isSim ? 'engine-badge sim' : 'engine-badge';
    
    card.innerHTML = `
      <div class="preview">
        <iframe src="${nft.preview}" title="${nft.name}"></iframe>
      </div>
      <h3>${nft.name}</h3>
      <div class="trait-grid">
        <span>Coherence</span><span class="value">${nft.coherence}</span>
        <span>Entropy</span><span class="value">${nft.entropy}</span>
        <span>Cheeger</span><span class="value">${nft.cheeger}</span>
        <span>Engine</span><span class="value"><span class="${badgeClass}">${nft.engine}</span></span>
        <span>DNA Seed</span><span class="value" style="font-family: monospace; font-size: 0.7rem;">${nft.dna}</span>
        <span>Generation</span><span class="value">${nft.generation}</span>
        <span>Job ID</span><span class="value" style="font-family: monospace; font-size: 0.65rem;">${nft.job_id}</span>
      </div>
    `;
    grid.appendChild(card);
  });
});
EOFcat > ~/esqet-glass-egg-portfolio/portfolio/previews/egg_001.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Glass Egg #1 Preview</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      background: #0a0f18; 
      color: #2ecc71; 
      font-family: 'Courier New', monospace;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }
    .egg {
      text-align: center;
      padding: 20px;
    }
    .egg-symbol { font-size: 4rem; }
    .egg-info { font-size: 0.7rem; color: #8395a7; margin-top: 8px; }
    .coherence { color: #2ecc71; }
  </style>
</head>
<body>
<div class="egg">
  <div class="egg-symbol">🥚</div>
  <div class="egg-info">Glass Egg #1</div>
  <div class="egg-info coherence">Coherence: 0.1115</div>
  <div class="egg-info">φ = 1.6180339887</div>
</div>
</body>
</html>
EOFcat > ~/esqet-glass-egg-portfolio/portfolio/previews/egg_002.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Glass Egg #2 Preview</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      background: #0a0f18; 
      color: #2ecc71; 
      font-family: 'Courier New', monospace;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }
    .egg {
      text-align: center;
      padding: 20px;
    }
    .egg-symbol { font-size: 4rem; }
    .egg-info { font-size: 0.7rem; color: #8395a7; margin-top: 8px; }
    .coherence { color: #2ecc71; }
  </style>
</head>
<body>
<div class="egg">
  <div class="egg-symbol">🥚</div>
  <div class="egg-info">Glass Egg #2</div>
  <div class="egg-info coherence">Coherence: 0.0957</div>
  <div class="egg-info">φ = 1.6180339887</div>
</div>
</body>
</html>
EOFcat > ~/esqet-glass-egg-portfolio/portfolio/previews/egg_003.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Glass Egg #3 Preview</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      background: #0a0f18; 
      color: #2ecc71; 
      font-family: 'Courier New', monospace;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }
    .egg {
      text-align: center;
      padding: 20px;
      border: 1px solid #2ecc71;
      border-radius: 50%;
      padding: 30px;
      background: rgba(46, 204, 113, 0.05);
    }
    .egg-symbol { font-size: 4rem; }
    .egg-info { font-size: 0.7rem; color: #8395a7; margin-top: 8px; }
    .coherence { color: #2ecc71; }
    .hardware-badge { 
      color: #2ecc71; 
      font-size: 0.6rem; 
      border: 1px solid #2ecc71;
      padding: 2px 10px;
      border-radius: 12px;
      display: inline-block;
      margin-top: 8px;
    }
  </style>
</head>
<body>
<div class="egg">
  <div class="egg-symbol">🥚</div>
  <div class="egg-info">Glass Egg #3</div>
  <div class="egg-info coherence">Coherence: 0.0816</div>
  <div class="egg-info">φ = 1.6180339887</div>
  <div class="hardware-badge">⚛️ IBM Quantum Hardware</div>
</div>
</body>
</html>
EOFcat > ~/esqet-glass-egg-portfolio/portfolio/previews/egg_004.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Glass Egg #4 Preview</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      background: #0a0f18; 
      color: #2ecc71; 
      font-family: 'Courier New', monospace;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }
    .egg {
      text-align: center;
      padding: 20px;
    }
    .egg-symbol { font-size: 4rem; }
    .egg-info { font-size: 0.7rem; color: #8395a7; margin-top: 8px; }
    .coherence { color: #2ecc71; }
    .gen-badge {
      color: #f1c40f;
      font-size: 0.6rem;
      border: 1px solid #f1c40f;
      padding: 2px 10px;
      border-radius: 12px;
      display: inline-block;
      margin-top: 8px;
    }
  </style>
</head>
<body>
<div class="egg">
  <div class="egg-symbol">🥚</div>
  <div class="egg-info">Glass Egg #4</div>
  <div class="egg-info coherence">Coherence: 0.1048</div>
  <div class="egg-info">φ = 1.6180339887</div>
  <div class="gen-badge">🧬 Generation 2</div>
</div>
</body>
</html>
EOFcat > ~/esqet-glass-egg-portfolio/portfolio/previews/egg_005.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Glass Egg #5 Preview</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      background: #0a0f18; 
      color: #2ecc71; 
      font-family: 'Courier New', monospace;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }
    .egg {
      text-align: center;
      padding: 20px;
      border: 1px solid #2ecc71;
      border-radius: 50%;
      padding: 30px;
      background: rgba(46, 204, 113, 0.05);
    }
    .egg-symbol { font-size: 4rem; }
    .egg-info { font-size: 0.7rem; color: #8395a7; margin-top: 8px; }
    .coherence { color: #2ecc71; }
    .hardware-badge { 
      color: #2ecc71; 
      font-size: 0.6rem; 
      border: 1px solid #2ecc71;
      padding: 2px 10px;
      border-radius: 12px;
      display: inline-block;
      margin-top: 8px;
    }
  </style>
</head>
<body>
<div class="egg">
  <div class="egg-symbol">🥚</div>
  <div class="egg-info">Glass Egg #5</div>
  <div class="egg-info coherence">Coherence: 0.0870</div>
  <div class="egg-info">φ = 1.6180339887</div>
  <div class="hardware-badge">⚛️ IBM Quantum Hardware</div>
</div>
</body>
</html>
EOFcat > ~/esqet-glass-egg-portfolio/opensea/collection-description.txt << 'EOF'
ESQET Glass Egg — Imperial Quantum Coherence Series

Generative artifacts derived from parameterized quantum circuits executed on IBM Quantum hardware (or local simulator — labeled per-mint). Each egg's traits emerge from a φ-structured coherence metric: measured quantum entropy plus structural alignment. No AGI. No consciousness claims. Just quantum computation + intentional structure.

Traits: Generation · Coherence Score · Quantum Entropy · Cheeger Constant · Execution Engine · Quantum Job ID · DNA Seed

Open-source. Reproducible. Falsifiable.

---

ABOUT

ESQET Glass Egg is a generative art series rooted in the Emergent Spacetime Quantum-Entanglement Theory (ESQET) framework. Each egg is produced by a parameterized quantum circuit — executed on real IBM Quantum hardware when available, otherwise on a local quantum statevector simulator. The exact execution path is permanently recorded per-mint.

The featured Coherence Score is a hybrid metric: part measured quantum entropy from the circuit's output, part a designed structural alignment factor weighted toward φ (the golden ratio). It is not a raw hardware readout — it is an engineered metric reflecting both quantum randomness and the artist's intentional structure.

Traits include Generation, Coherence Score, Quantum Entropy, Cheeger Constant (a graph conductance proxy), Execution Engine (hardware vs. simulator), Quantum Job ID, and a unique DNA Seed.

Each egg is a one-of-a-kind intersection of quantum computation, structural mathematics, and physical craftsmanship. The code is open-source, the math is published on Zenodo, and the predictions are testable.

---

TECHNICAL DETAILS

- Quantum Circuit: Parameterized, 4-6 qubits
- Execution: IBM Quantum Hardware (when available) / Quantum Statevector Simulator
- Coherence Metric: Hybrid (0.6 × quantum_entropy + 0.4 × structural_alignment)
- Framework: ESQET (Emergent Spacetime Quantum-Entanglement Theory)
- Standard: ERC-721A with EIP-712 lazy minting support
- Network: Polygon (low gas fees)
EOFcat > ~/esqet-glass-egg-portfolio/opensea/metadata-schema.json << 'EOF'
{
  "$schema": "https://schema.org/",
  "name": "ESQET Glass Egg #1",
  "description": "Generative quantum art from φ-structured quantum circuits. Execution: IBM Quantum Hardware.",
  "image": "ipfs://QmPlaceholder/image.png",
  "animation_url": "ipfs://QmPlaceholder/animation.html",
  "external_url": "https://esqet-architect.github.io/glass-egg-portfolio/",
  "attributes": [
    {
      "trait_type": "Generation",
      "value": 1
    },
    {
      "trait_type": "Coherence Score",
      "value": "0.1115"
    },
    {
      "trait_type": "Quantum Entropy",
      "value": "4.2667"
    },
    {
      "trait_type": "Cheeger Constant",
      "value": "0.5178"
    },
    {
      "trait_type": "Execution Engine",
      "value": "IBM Quantum Hardware"
    },
    {
      "trait_type": "Quantum Job ID",
      "value": "job-d87k4jqs46sc73f8arog"
    },
    {
      "trait_type": "DNA Seed",
      "value": "esqet_genesis_2026"
    }
  ],
  "properties": {
    "state_hash": "4a3b2c1d5e6f7g8h9i0j",
    "parent_hash": null,
    "child_hashes": [],
    "color_palette": [50, 150, 50],
    "holographic_seed": 1234567890,
    "interference_phase": 0.523,
    "used_real_hardware": true,
    "coherence_calculation": "hybrid: 0.6×quantum_entropy + 0.4×structural_alignment(φ)"
  }
}
EOFcat > ~/esqet-glass-egg-portfolio/README.md << 'EOF'
# ESQET Glass Egg — Imperial Quantum Coherence Series

Generative art from φ-structured quantum circuits. Each egg is a unique artifact derived from a parameterized quantum circuit executed on IBM Quantum hardware or a local simulator.

## Project Structure

## How to Generate New NFTs

```bash
cd ~/ESQET-One
./venv/bin/python ~/mint_agi_nft.py
