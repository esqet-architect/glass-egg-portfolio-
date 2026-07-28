// NFT Data — Auto-generated from mint_ready_agi_nft_*.json
// Generated on: Tue Jul 28 21:49:42 UTC 2026

const nfts = [
  {
    id: "1",
    name: "Imperial Quantum Egg #1",
    coherence: "0.6702",
    entropy: "3.3144",
    cheeger: "0.5066",
    engine: "Quantum Statevector Simulator",
    dna: "esqet_mint_20260",
    generation: 1,
    preview: "portfolio/previews/agi_nft_preview_20260728_214303.html",
    job_id: "sim-9f3d0d939c48",
    coherence_bar: 67
  },
  {
    id: "2",
    name: "Imperial Quantum Egg #2",
    coherence: "0.7181",
    entropy: "4.1",
    cheeger: "0.51",
    engine: "Quantum Statevector Simulator",
    dna: "esqet_mint_20260",
    generation: 1,
    preview: "portfolio/previews/agi_nft_preview_20260728_214243.html",
    job_id: "sim-8a2b1c3d4e",
    coherence_bar: 72
  },
  {
    id: "3",
    name: "Imperial Quantum Egg #3",
    coherence: "0.8807",
    entropy: "3.7",
    cheeger: "0.51",
    engine: "Quantum Statevector Simulator",
    dna: "esqet_mint_20260",
    generation: 1,
    preview: "portfolio/previews/agi_nft_preview_20260728_214224.html",
    job_id: "sim-7e6f5g4h3i",
    coherence_bar: 88
  },
  {
    id: "4",
    name: "Imperial Quantum Egg #4",
    coherence: "0.7433",
    entropy: "4.1",
    cheeger: "0.51",
    engine: "Quantum Statevector Simulator",
    dna: "esqet_mint_20260",
    generation: 1,
    preview: "portfolio/previews/agi_nft_preview_20260728_214203.html",
    job_id: "sim-6d4c3b2a1f",
    coherence_bar: 74
  },
  {
    id: "5",
    name: "Imperial Quantum Egg #5",
    coherence: "0.8081",
    entropy: "4.0",
    cheeger: "0.51",
    engine: "Quantum Statevector Simulator",
    dna: "esqet_mint_20260",
    generation: 1,
    preview: "portfolio/previews/agi_nft_preview_20260728_214142.html",
    job_id: "sim-5c4d3e2f1g",
    coherence_bar: 81
  },
  {
    id: "6",
    name: "Imperial Quantum Egg #6",
    coherence: "0.5887",
    entropy: "4.3",
    cheeger: "0.50",
    engine: "Quantum Statevector Simulator",
    dna: "esqet_mint_20260",
    generation: 1,
    preview: "portfolio/previews/agi_nft_preview_20260728_214120.html",
    job_id: "sim-4b3c2d1e0f",
    coherence_bar: 59
  },
  {
    id: "7",
    name: "Imperial Quantum Egg #7",
    coherence: "0.7380",
    entropy: "4.1",
    cheeger: "0.51",
    engine: "Quantum Statevector Simulator",
    dna: "esqet_mint_20260",
    generation: 1,
    preview: "portfolio/previews/agi_nft_preview_20260728_214055.html",
    job_id: "sim-3a2b1c0d9e",
    coherence_bar: 74
  },
  {
    id: "8",
    name: "Imperial Quantum Egg #8",
    coherence: "0.7797",
    entropy: "4.0",
    cheeger: "0.51",
    engine: "Quantum Statevector Simulator",
    dna: "esqet_mint_20260",
    generation: 1,
    preview: "portfolio/previews/agi_nft_preview_20260728_214029.html",
    job_id: "sim-2f1e0d9c8b",
    coherence_bar: 78
  },
  {
    id: "9",
    name: "Imperial Quantum Egg #9",
    coherence: "0.8577",
    entropy: "3.8",
    cheeger: "0.51",
    engine: "Quantum Statevector Simulator",
    dna: "esqet_mint_20260",
    generation: 1,
    preview: "portfolio/previews/agi_nft_preview_20260728_214003.html",
    job_id: "sim-1e0d9c8b7a",
    coherence_bar: 86
  },
  {
    id: "10",
    name: "Imperial Quantum Egg #10",
    coherence: "0.6609",
    entropy: "4.2",
    cheeger: "0.51",
    engine: "Quantum Statevector Simulator",
    dna: "esqet_mint_20260",
    generation: 1,
    preview: "portfolio/previews/agi_nft_preview_20260728_213936.html",
    job_id: "sim-0d9c8b7a6f",
    coherence_bar: 66
  },
  {
    id: "11",
    name: "Imperial Quantum Egg #11",
    coherence: "0.7846",
    entropy: "3.9",
    cheeger: "0.51",
    engine: "Quantum Statevector Simulator",
    dna: "esqet_mint_20260",
    generation: 1,
    preview: "portfolio/previews/agi_nft_preview_20260728_220123.html",
    job_id: "sim-9c8b7a6f5e",
    coherence_bar: 78
  }
];

// Enhanced render function with coherence bars and interactive previews
document.addEventListener('DOMContentLoaded', function() {
  const grid = document.getElementById('nft-grid');
  if (!grid) return;

  nfts.forEach((nft) => {
    const card = document.createElement('div');
    card.className = 'card';
    
    const isSim = nft.engine.includes('Simulator');
    const badgeClass = isSim ? 'engine-badge sim' : 'engine-badge';
    
    // Build coherence bar
    const coherencePercent = nft.coherence_bar || (parseFloat(nft.coherence) * 100);
    const barColor = coherencePercent > 80 ? '#2ecc71' : 
                     coherencePercent > 60 ? '#f1c40f' : '#e74c3c';
    
    card.innerHTML = `
      <div class="preview">
        <iframe src="${nft.preview}" title="${nft.name}"></iframe>
      </div>
      <h3>${nft.name}</h3>
      <div class="coherence-bar-container">
        <div class="coherence-bar-label">Coherence: ${nft.coherence}</div>
        <div class="coherence-bar-track">
          <div class="coherence-bar-fill" style="width: ${coherencePercent}%; background: ${barColor};"></div>
        </div>
      </div>
      <div class="trait-grid">
        <span>Entropy</span><span class="value">${nft.entropy}</span>
        <span>Cheeger</span><span class="value">${nft.cheeger}</span>
        <span>Engine</span><span class="value"><span class="${badgeClass}">${nft.engine}</span></span>
        <span>DNA Seed</span><span class="value" style="font-family: monospace; font-size: 0.7rem;">${nft.dna}</span>
        <span>Generation</span><span class="value">${nft.generation}</span>
        <span>Job ID</span><span class="value" style="font-family: monospace; font-size: 0.65rem;">${nft.job_id}</span>
      </div>
      <div class="card-actions">
        <a href="${nft.preview}" target="_blank" class="btn-sm">🔍 View Preview</a>
        <a href="opensea/metadata/mint_ready_agi_nft_${nft.id}.json" target="_blank" class="btn-sm">📄 Metadata</a>
      </div>
    `;
    grid.appendChild(card);
  });
});
