/**
 * Animated mini-interfaces shown on the project gallery cards.
 * Plain SVG strings (static, our own markup); classes with "anim" play only
 * while the card is centred (see .is-active in cinematic.css).
 */
export const THUMBS = {
  map: `<svg viewBox="0 0 320 168" aria-hidden="true">
    <defs><pattern id="g$" width="16" height="16" patternUnits="userSpaceOnUse"><path d="M16 0H0V16" fill="none" stroke="rgba(125,211,252,.07)"/></pattern></defs>
    <rect width="320" height="168" fill="url(#g$)"/>
    <path d="M30 150 C 90 118, 120 136, 160 98 S 250 58, 300 36" fill="none" stroke="rgba(125,211,252,.25)" stroke-width="10" stroke-linecap="round"/>
    <g stroke-width="1.5">${[[52,36],[94,36],[136,36],[52,68],[94,68],[196,104],[238,104],[238,134],[196,134]].map((c,i)=>`<rect class="cell anim" style="--i:${i}" x="${c[0]}" y="${c[1]}" width="34" height="22" rx="4"/>`).join('')}</g>
    <g fill="rgba(74,222,128,.45)"><circle cx="208" cy="58" r="9"/><circle cx="226" cy="68" r="7"/><circle cx="62" cy="126" r="8"/></g>
    <rect x="196" y="18" width="98" height="40" rx="8" fill="rgba(8,11,18,.92)" stroke="rgba(255,255,255,.15)"/>
    <rect x="206" y="28" width="44" height="6" rx="3" fill="#f2f4f9"/><rect x="206" y="40" width="72" height="5" rx="2.5" fill="rgba(255,255,255,.3)"/></svg>`,
  chart: `<svg viewBox="0 0 320 168" aria-hidden="true">
    <rect x="22" y="18" width="276" height="132" rx="10" fill="rgba(255,255,255,.03)" stroke="rgba(255,255,255,.1)"/>
    <g fill="rgba(255,255,255,.08)"><rect x="38" y="32" width="72" height="30" rx="6"/><rect x="118" y="32" width="72" height="30" rx="6"/><rect x="198" y="32" width="84" height="30" rx="6"/></g>
    <rect x="46" y="41" width="30" height="5" rx="2.5" fill="rgba(255,255,255,.35)"/><rect x="46" y="50" width="44" height="6" rx="3" fill="#7dd3fc"/>
    <rect x="126" y="41" width="30" height="5" rx="2.5" fill="rgba(255,255,255,.35)"/><rect x="126" y="50" width="38" height="6" rx="3" fill="#f2f4f9"/>
    <rect x="206" y="41" width="30" height="5" rx="2.5" fill="rgba(255,255,255,.35)"/><rect x="206" y="50" width="52" height="6" rx="3" fill="#f2f4f9"/>
    <g fill="#3b82f6">${[[42,26],[60,40],[78,34],[96,52],[114,46],[132,60]].map((b,i)=>`<rect class="bar anim" style="--i:${i}" x="${b[0]}" y="${138-b[1]}" width="12" height="${b[1]}" rx="2"${i===5?' fill="#7dd3fc"':''}/>`).join('')}</g>
    <path d="M166 124 L 192 110 L 214 116 L 238 90 L 258 96 L 280 76 V138 H166Z" fill="rgba(125,211,252,.1)"/>
    <path class="draw anim" d="M166 124 L 192 110 L 214 116 L 238 90 L 258 96 L 280 76" fill="none" stroke="#7dd3fc" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  flow: `<svg viewBox="0 0 320 168" aria-hidden="true">
    <path d="M52 86 H268" stroke="rgba(255,255,255,.12)" stroke-width="2"/>
    <path class="draw anim" d="M52 86 H268" stroke="#7dd3fc" stroke-width="2.5"/>
    ${[52,124,196,268].map((x,i)=>`<g class="node anim" style="--i:${i}"><circle cx="${x}" cy="86" r="16" fill="#3b82f6"/><path d="M${x-7} 86l5 5 9-10" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></g>`).join('')}
    <g font-family="JetBrains Mono, monospace" font-size="9.5" fill="rgba(255,255,255,.55)" text-anchor="middle"><text x="52" y="124">DEAN</text><text x="124" y="124">ADMIN</text><text x="196" y="124">BUDGET</text><text x="268" y="124">CASHIER</text></g>
    <rect x="94" y="26" width="132" height="30" rx="8" fill="rgba(8,11,18,.92)" stroke="rgba(255,255,255,.14)"/>
    <circle cx="110" cy="41" r="5" fill="#4ade80"/><rect x="122" y="38" width="90" height="6" rx="3" fill="rgba(255,255,255,.4)"/></svg>`,
  shop: `<svg viewBox="0 0 320 168" aria-hidden="true">
    <g fill="rgba(255,255,255,.035)" stroke="rgba(255,255,255,.1)"><rect x="30" y="24" width="80" height="120" rx="10"/><rect x="120" y="24" width="80" height="120" rx="10"/><rect x="210" y="24" width="80" height="120" rx="10"/></g>
    <g stroke="#7dd3fc" stroke-width="2.2">
      <ellipse class="lens anim" style="--i:0" cx="54" cy="74" rx="11" ry="9"/><ellipse class="lens anim" style="--i:0" cx="82" cy="74" rx="11" ry="9"/><path d="M65 72h6" fill="none"/>
      <ellipse class="lens anim" style="--i:1" cx="144" cy="74" rx="11" ry="8"/><ellipse class="lens anim" style="--i:1" cx="172" cy="74" rx="11" ry="8"/><path d="M155 73h6" fill="none"/>
      <path class="lens anim" style="--i:2" d="M224 70h56l-4 12h-18l-3-6h-6l-3 6h-18z"/></g>
    <g fill="rgba(255,255,255,.4)"><rect x="42" y="106" width="44" height="5" rx="2.5"/><rect x="132" y="106" width="40" height="5" rx="2.5"/><rect x="222" y="106" width="48" height="5" rx="2.5"/></g>
    <g fill="#f2f4f9"><rect x="42" y="118" width="26" height="6" rx="3"/><rect x="132" y="118" width="26" height="6" rx="3"/><rect x="222" y="118" width="26" height="6" rx="3"/></g></svg>`,
};
let thumbUid = 0;
export const thumb = k => THUMBS[k].replaceAll('g$', 'g' + (++thumbUid));
