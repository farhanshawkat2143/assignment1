'use client';
import { useState } from 'react';

export default function TabsGenerator() {
  const [tabNames, setTabNames] = useState('Tab 1,Tab 2,Tab 3');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  function escapeHtml(s: string) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function generate() {
    const names = tabNames.split(',').map(s => s.trim()).filter(Boolean);
    const css = `
body { font-family: Arial, sans-serif; padding: 1rem; }
.tabs { display:flex; gap:8px; margin-bottom:12px; }
.tabs button { padding:8px 12px; cursor:pointer; border-radius:4px; border:1px solid #ccc; background:#f3f4f6; }
.tabcontent { border:1px solid #ddd; padding:12px; border-radius:4px; }
    `.trim();

    let html = `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Tabs Example</title><style>${css}</style></head>
<body>
  <div role="tablist" aria-label="Sample tabs" class="tabs">`;

    names.forEach((n,i) => {
      const id = `tab${i+1}`;
      html += `<button role="tab" aria-controls="${id}" aria-selected="${i===0}" id="btn-${id}" onclick="openTab('${id}', this)">${escapeHtml(n)}</button>`;
    });

    html += `</div>`;
    names.forEach((n,i) => {
      const id = `tab${i+1}`;
      html += `<div id="${id}" role="tabpanel" aria-labelledby="btn-${id}" style="display:${i===0 ? 'block' : 'none'}" class="tabcontent">${escapeHtml(n)} content goes here.</div>`;
    });

    html += `<script>
function openTab(id, btn){
  document.querySelectorAll('[role=\"tabpanel\"]').forEach(t=>t.style.display='none');
  document.getElementById(id).style.display='block';
  document.querySelectorAll('[role=\"tab\"]').forEach(b=>b.setAttribute('aria-selected','false'));
  btn.setAttribute('aria-selected','true');
}
</script></body></html>`;

    setOutput(html);
  }

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert('Copy failed. Please select and copy manually.');
    }
  }

  return (
    <div>
      <h1>Tabs HTML Generator</h1>
      <label>
        Enter comma separated tab names:
        <input aria-label="tab names" style={{ width:'100%', padding:8, marginTop:8 }} value={tabNames} onChange={e => setTabNames(e.target.value)} />
      </label>

      <div style={{ marginTop:10 }}>
        <button onClick={generate} style={{ padding:'0.6rem 1rem' }}>Generate HTML</button>
      </div>

      <div style={{ marginTop:12 }}>
        <label>Generated HTML (paste into <code>Hello.html</code>):</label>
        <textarea aria-label="generated html" style={{ width:'100%', height:300, marginTop:8 }} value={output} readOnly />
      </div>

      <div style={{ marginTop:8 }}>
        <button onClick={copyToClipboard} disabled={!output}>Copy to clipboard</button>
        {copied && <span style={{ marginLeft:8 }}>Copied!</span>}
      </div>
    </div>
  );
}
