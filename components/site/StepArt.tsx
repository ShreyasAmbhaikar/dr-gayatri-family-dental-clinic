import type { StepArt as StepArtKey } from "@/lib/treatments/types";

/**
 * 3D-style illustrations for the procedure-step badges (same look as the root canal step images:
 * glossy teeth with soft lighting, glossy purple instruments, pale-blue disc with a white ring).
 * Each key depicts what happens in that step. Drawn as lit vector art on a 120 x 120 canvas:
 * gradients give the volume, blurred white shapes the highlights, and a soft drop shadow lifts every object.
 */

/** Molar outline (crown + two roots), centred on (60, 57). */
const TOOTH =
  "M60 24 C50 15 33 19 31 36 C29 49 36 55 38 68 C40 81 42 98 48 98 C53 98 53 83 60 83 C67 83 67 98 72 98 C78 98 80 81 82 68 C84 55 91 49 89 36 C87 19 70 15 60 24 Z";
/** Front tooth (incisor), centred on (60, 59). */
const INCISOR = "M38 28 C38 16 82 16 82 28 L80 72 C79 92 70 101 60 101 C50 101 41 92 40 72 Z";
/** Pulp chamber of the cross-section molar. */
const CHAMBER =
  "M45 47 C45 39 51.5 37 55.5 42 C58 45.5 62 45.5 64.5 42 C68.5 37 75 39 75 47 C75 54 71.5 59 70.5 66 L49.5 66 C48.5 59 45 54 45 47 Z";

const u = (id: string) => `url(#s3-${id})`;

// ── Gradient tables ───────────────────────────────────────────────────────────
/** Radial gradients lit from the top-left: [id, light, mid, dark]. */
const RADIALS: [string, string, string, string][] = [
  ["ballP", "#cdb9ff", "#7a52ea", "#37199a"],
  ["ballT", "#a2f2f2", "#1fb7bd", "#0a6b78"],
  ["ballR", "#ffaea6", "#e3303a", "#8c0912"],
  ["ballG", "#fff3b8", "#f6bb45", "#c27a0d"],
  ["ballB", "#c6f0ff", "#41b3e0", "#16629f"],
  ["ballW", "#ffffff", "#f3f6fa", "#c4cfdb"],
  ["pulp", "#ff7a6c", "#dd1f2a", "#85080f"],
  ["skin", "#ffe9d2", "#ffc896", "#e2985f"],
  ["lens", "#ffffff", "#e2f4fb", "#a6d6ea"],
  ["cavity", "#e49d40", "#b6621a", "#753808"],
  ["tongue", "#ff9aa9", "#ee5a74", "#b82b4a"],
  ["lips", "#ff8d97", "#e0434f", "#9c1b29"],
  ["screen", "#4a6be0", "#232e8a", "#10135a"],
  ["fill", "#fffaf0", "#f6e3b4", "#e4c27c"],
  ["gutta", "#ffffff", "#fdeef0", "#f3c9d2"],
  ["enamel", "#ffffff", "#f3f6fa", "#d4dde8"],
  ["disc", "#f8fcff", "#e6f1fa", "#d3e6f6"],
];
/** Vertical (top to bottom) linear gradients with evenly spaced stops. */
const LINEARS: [string, string[]][] = [
  ["metal", ["#f7f9fb", "#cbd4de", "#8997a8", "#d8dfe7"]],
  ["purple", ["#c9b5ff", "#7d56ec", "#4324b4", "#8d6ef2"]],
  ["teal", ["#8eecec", "#22bcc0", "#0b7c88", "#3ac6c9"]],
  ["root", ["#fde8c0", "#f8cb86", "#e9a24f"]],
  ["dentin", ["#fbe9b6", "#f5ca6c", "#e6a23c"]],
  ["gum", ["#ffa2b4", "#ee627f", "#c23355"]],
  ["bone", ["#f9e9cf", "#ecc995", "#d6a568"]],
  ["navy", ["#4f54b4", "#282c7c", "#15114c"]],
  ["mint", ["#baf6e6", "#72ddc6", "#3bb9a3"]],
  ["blue", ["#a7ebf6", "#44b9dc", "#1c80b5"]],
  ["paper", ["#ffffff", "#eef6fb", "#d6e6f1"]],
  ["tooth2", ["#ffffff", "#f8f2e8", "#e2d7c5"]],
  ["gold", ["#ffe69a", "#f5b942", "#c9840f"]],
  ["glassV", ["#ffffff", "#e6f6fb", "#b9e1ef"]],
  ["coral", ["#ffa095", "#e5424b", "#a81d2b"]],
];
const SHADE: [string, string[]][] = [
  // whole tooth: white crown, warm peach root
  ["toothV", ["#ffffff", "#fbf8f2", "#fbe2b4", "#efb15f"]],
  ["toothStain", ["#f6e7b6", "#f0dc9d", "#e9c274", "#dc9f48"]],
];

function Defs() {
  return (
    <defs>
      {RADIALS.map(([id, a, b, c]) => (
        <radialGradient key={id} id={`s3-${id}`} cx=".35" cy=".3" r=".8">
          <stop offset="0" stopColor={a} />
          <stop offset=".55" stopColor={b} />
          <stop offset="1" stopColor={c} />
        </radialGradient>
      ))}
      {LINEARS.map(([id, stops]) => (
        <linearGradient key={id} id={`s3-${id}`} x1="0" y1="0" x2="0" y2="1">
          {stops.map((c, i) => (
            <stop key={i} offset={i / (stops.length - 1)} stopColor={c} />
          ))}
        </linearGradient>
      ))}
      {SHADE.map(([id, [a, b, c, d]]) => (
        <linearGradient key={id} id={`s3-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={a} />
          <stop offset=".5" stopColor={b} />
          <stop offset=".62" stopColor={c} />
          <stop offset="1" stopColor={d} />
        </linearGradient>
      ))}
      {/* cylinder shading across the width (implant screw) */}
      <linearGradient id="s3-metalH" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#7d8b9c" />
        <stop offset=".35" stopColor="#f4f7fa" />
        <stop offset=".7" stopColor="#aab6c5" />
        <stop offset="1" stopColor="#6c7a8c" />
      </linearGradient>
      {/* top-light sheen laid over glossy shapes */}
      <linearGradient id="s3-gloss" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#fff" stopOpacity=".6" />
        <stop offset=".55" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
      {/* darkened edge that gives teeth their volume */}
      <radialGradient id="s3-rim" cx=".5" cy=".45" r=".62">
        <stop offset="0" stopColor="#fff" stopOpacity="0" />
        <stop offset=".7" stopColor="#fff" stopOpacity="0" />
        <stop offset="1" stopColor="#8a6a44" stopOpacity=".3" />
      </radialGradient>
      <radialGradient id="s3-shadow" cx=".5" cy=".5" r=".5">
        <stop offset="0" stopColor="#3b6a95" stopOpacity=".4" />
        <stop offset="1" stopColor="#3b6a95" stopOpacity="0" />
      </radialGradient>
      <clipPath id="s3-crown">
        <path d="M-10 -10 H130 V64 C108 70 90 62 60 66 C30 62 12 70 -10 64 Z" />
      </clipPath>
      <filter id="s3-ds" x="-25%" y="-25%" width="150%" height="160%">
        <feDropShadow dx="0" dy="2.2" stdDeviation="1.8" floodColor="#1b3a63" floodOpacity=".3" />
      </filter>
      <filter id="s3-blur" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="1.1" />
      </filter>
      <filter id="s3-glow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="2.2" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );
}

// ── Building blocks ───────────────────────────────────────────────────────────
function Shadow({ cx = 60, cy = 100, rx = 25, ry = 4.2 }: { cx?: number; cy?: number; rx?: number; ry?: number }) {
  return <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={u("shadow")} />;
}

/** Whole tooth: white glossy crown, peach root, rim shading and highlights. */
function Tooth({ x = 60, y = 57, s = 1, stain = false, shadow = true }: { x?: number; y?: number; s?: number; stain?: boolean; shadow?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s}) translate(-60 -57)`}>
      {shadow && <Shadow />}
      <g filter="url(#s3-ds)">
        <path d={TOOTH} fill={u(stain ? "toothStain" : "toothV")} />
      </g>
      <path d={TOOTH} fill={u("rim")} />
      <path d="M41 32 C44 25 51 22.5 56 26" stroke="#fff" strokeWidth="4" strokeLinecap="round" fill="none" opacity=".95" filter="url(#s3-blur)" />
      <ellipse cx="38" cy="44" rx="3" ry="8" fill="#fff" opacity=".5" transform="rotate(8 38 44)" filter="url(#s3-blur)" />
    </g>
  );
}

function Incisor({ x = 60, y = 59, s = 1, stain = false, ghost = false }: { x?: number; y?: number; s?: number; stain?: boolean; ghost?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s}) translate(-60 -59)`}>
      <Shadow cx={60} cy={103} rx={20} ry={3.6} />
      <g filter="url(#s3-ds)">
        <path d={INCISOR} fill={ghost ? u("glassV") : stain ? u("toothStain") : u("tooth2")} stroke={ghost ? "#0fb5b8" : "#e3d8c6"} strokeWidth={ghost ? 3 : 1.6} />
      </g>
      <path d={INCISOR} fill={u("rim")} />
      <path d="M45 30 C47 25 54 24 58 27" stroke="#fff" strokeWidth="4" strokeLinecap="round" fill="none" opacity=".9" filter="url(#s3-blur)" />
    </g>
  );
}

/** Cutaway molar like the root canal images: enamel, dentin, pulp and root. */
function CrossTooth({
  x = 60,
  y = 57,
  s = 1,
  pulp = "red",
  cavity = false,
  filling = false,
}: {
  x?: number;
  y?: number;
  s?: number;
  pulp?: "red" | "clean" | "filled" | "none";
  cavity?: boolean;
  filling?: boolean;
}) {
  const canals = (color: string, w = 4.6) => (
    <>
      <path d="M52.5 64 C50.5 74 49 85 48.6 93.5" stroke={color} strokeWidth={w} strokeLinecap="round" fill="none" />
      <path d="M67.5 64 C69.5 74 71 85 71.4 93.5" stroke={color} strokeWidth={w} strokeLinecap="round" fill="none" />
    </>
  );
  return (
    <g transform={`translate(${x} ${y}) scale(${s}) translate(-60 -57)`}>
      <Shadow />
      <g filter="url(#s3-ds)">
        <path d={TOOTH} fill={u("root")} />
      </g>
      <path d="M36 62 C32 66 33.5 72 38 75 C38 70 38.5 66 40.5 62 Z" fill={u("gum")} opacity=".9" />
      <path d="M84 62 C88 66 86.5 72 82 75 C82 70 81.5 66 79.5 62 Z" fill={u("gum")} opacity=".9" />
      <g clipPath="url(#s3-crown)">
        <path d={TOOTH} fill={u("enamel")} />
        <g transform="translate(60 52) scale(.82) translate(-60 -52)">
          <path d={TOOTH} fill={u("dentin")} />
        </g>
      </g>
      {pulp === "red" && (
        <>
          <path d={CHAMBER} fill={u("pulp")} />
          {canals("#d41f2a")}
          {canals("#ff7d6e", 1.3)}
        </>
      )}
      {pulp === "clean" && (
        <>
          <path d={CHAMBER} fill={u("cavity")} />
          {canals("#a85a14")}
        </>
      )}
      {pulp === "filled" && (
        <>
          <path d={CHAMBER} fill={u("pulp")} />
          <g transform="translate(60 56) scale(.62) translate(-60 -56)">
            <path d={CHAMBER} fill={u("gutta")} />
          </g>
          {canals("#d41f2a")}
          {canals("#ffffff", 2)}
        </>
      )}
      {cavity && (
        <g transform="translate(120 0) scale(-1 1)">
          <path d="M47 24 C42 29 42 38 48 42 C52 44.5 57 42 57 37 C57 31 53 24 47 24 Z" fill={filling ? u("fill") : u("cavity")} />
          {!filling && <ellipse cx="49.5" cy="35" rx="3.4" ry="4.6" fill="#4a2406" opacity=".75" />}
          {filling && <path d="M45 28 C47 25.5 51 26 53 29" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" fill="none" opacity=".9" />}
        </g>
      )}
      <path d="M41 28 C44 22 51 19.5 56 23" stroke="#fff" strokeWidth="3.6" strokeLinecap="round" fill="none" opacity=".9" filter="url(#s3-blur)" />
    </g>
  );
}

/** Straight glossy rod (instrument shaft, handle) between two points. */
function Rod({ x1, y1, x2, y2, w = 6, fill = "metal" }: { x1: number; y1: number; x2: number; y2: number; w?: number; fill?: string }) {
  const len = Math.hypot(x2 - x1, y2 - y1);
  const ang = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
  return (
    <g transform={`translate(${x1} ${y1}) rotate(${ang})`} filter="url(#s3-ds)">
      <rect x={-w / 2} y={-w / 2} width={len + w} height={w} rx={w / 2} fill={u(fill)} />
    </g>
  );
}

function Ball({ cx, cy, r, fill = "ballP" }: { cx: number; cy: number; r: number; fill?: string }) {
  return (
    <g filter="url(#s3-ds)">
      <circle cx={cx} cy={cy} r={r} fill={u(fill)} />
      <ellipse cx={cx - r * 0.3} cy={cy - r * 0.4} rx={r * 0.38} ry={r * 0.24} fill="#fff" opacity=".75" />
    </g>
  );
}

function Sparkle({ x, y, s = 1, fill = "ballG" }: { x: number; y: number; s?: number; fill?: string }) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${s})`}
      d="M0 -10 L2.8 -2.8 L10 0 L2.8 2.8 L0 10 L-2.8 2.8 L-10 0 L-2.8 -2.8 Z"
      fill={u(fill)}
      stroke="#fff"
      strokeWidth="1"
      strokeLinejoin="round"
      filter="url(#s3-ds)"
    />
  );
}

function Drop({ x, y, s = 1, fill = "ballB" }: { x: number; y: number; s?: number; fill?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} filter="url(#s3-ds)">
      <path d="M0 -9 C5 -2 7 1 7 4 A7 7 0 0 1 -7 4 C-7 1 -5 -2 0 -9 Z" fill={u(fill)} />
      <ellipse cx="-2.4" cy="2.2" rx="1.6" ry="2.6" fill="#fff" opacity=".8" />
    </g>
  );
}

function Check({ x, y, r = 14, fill = "ballT" }: { x: number; y: number; r?: number; fill?: string }) {
  return (
    <g filter="url(#s3-ds)">
      <circle cx={x} cy={y} r={r} fill={u(fill)} stroke="#fff" strokeWidth="2.4" />
      <path d={`M${x - r * 0.45} ${y + r * 0.02} L${x - r * 0.1} ${y + r * 0.38} L${x + r * 0.5} ${y - r * 0.35}`} stroke="#fff" strokeWidth="3.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}

function Clock({ x, y, r = 14 }: { x: number; y: number; r?: number }) {
  return (
    <g filter="url(#s3-ds)">
      <circle cx={x} cy={y} r={r} fill={u("lens")} stroke={u("teal")} strokeWidth="3.2" />
      <path d={`M${x} ${y - r * 0.55} V${y} L${x + r * 0.45} ${y + r * 0.3}`} stroke="#1d174e" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <ellipse cx={x - r * 0.3} cy={y - r * 0.5} rx={r * 0.3} ry={r * 0.15} fill="#fff" opacity=".8" />
    </g>
  );
}

function Gum({ d }: { d: string }) {
  return (
    <g>
      <g filter="url(#s3-ds)">
        <path d={d} fill={u("gum")} />
      </g>
      <path d={d} fill={u("gloss")} />
    </g>
  );
}

/** A row of front teeth with gloss (braces, aligners, retainers, bite). */
function TeethRow({ y = 36, h = 44, count = 4, x0 = 14, w = 22, gap = 3.5 }: { y?: number; h?: number; count?: number; x0?: number; w?: number; gap?: number }) {
  const xs = Array.from({ length: count }, (_, i) => x0 + i * (w + gap));
  return (
    <g>
      <g filter="url(#s3-ds)">
        {xs.map((x) => (
          <rect key={x} x={x} y={y} width={w} height={h} rx={9} fill={u("tooth2")} stroke="#e3d8c6" strokeWidth="1.6" />
        ))}
      </g>
      {xs.map((x) => (
        <rect key={`g${x}`} x={x + 1} y={y + 1} width={w - 2} height={h * 0.6} rx={8} fill={u("gloss")} />
      ))}
    </g>
  );
}

function Panel({ x, y, w, h, rx = 10, fill = "paper" }: { x: number; y: number; w: number; h: number; rx?: number; fill?: string }) {
  return (
    <g>
      <g filter="url(#s3-ds)">
        <rect x={x} y={y} width={w} height={h} rx={rx} fill={u(fill)} stroke="#b9d3e4" strokeWidth="1.6" />
      </g>
      <rect x={x + 1} y={y + 1} width={w - 2} height={h * 0.45} rx={rx - 1} fill={u("gloss")} />
    </g>
  );
}

function Syringe({ x, y, rot, s = 1, liquid = "blue" }: { x: number; y: number; rot: number; s?: number; liquid?: string }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`} filter="url(#s3-ds)">
      <rect x="-46" y="-3" width="16" height="6" rx="3" fill={u("metal")} />
      <rect x="-50" y="-8" width="5" height="16" rx="2.5" fill={u("purple")} />
      <rect x="-33" y="-9.5" width="4" height="19" rx="2" fill={u("metal")} />
      <rect x="-30" y="-7" width="32" height="14" rx="3.5" fill={u("glassV")} stroke="#9fb6c8" strokeWidth="1.4" />
      <rect x="-26" y="-4.2" width="22" height="8.4" rx="2" fill={u(liquid)} />
      <rect x="-28" y="-6" width="28" height="2.6" rx="1.3" fill="#fff" opacity=".7" />
      <rect x="2" y="-3.2" width="6" height="6.4" rx="1.5" fill={u("metal")} />
      <path d="M8 0 L26 0" stroke="#9aa8b8" strokeWidth="2.2" strokeLinecap="round" />
    </g>
  );
}

/** Dental drill: purple body, metal neck and a small bur pointing toward (tx, ty). */
function Handpiece({ x1, y1, x2, y2, bx, by }: { x1: number; y1: number; x2: number; y2: number; bx: number; by: number }) {
  return (
    <>
      <Rod x1={x1} y1={y1} x2={x2} y2={y2} w={11} fill="purple" />
      <Rod x1={x2} y1={y2} x2={(x2 + bx) / 2 + 2} y2={(y2 + by) / 2 + 1} w={5} />
      <Rod x1={(x2 + bx) / 2 + 2} y1={(y2 + by) / 2 + 1} x2={bx} y2={by} w={2.6} />
    </>
  );
}

function Shield({ fill = "teal", plus = false, tooth = false }: { fill?: string; plus?: boolean; tooth?: boolean }) {
  const d = "M60 10 L94 22 V50 C94 74 79 90 60 102 C41 90 26 74 26 50 V22 Z";
  return (
    <>
      <g filter="url(#s3-ds)">
        <path d={d} fill={tooth ? "#eaf9fa" : u(fill)} stroke={tooth ? u("teal") : "#fff"} strokeWidth={tooth ? 4 : 3} strokeLinejoin="round" />
      </g>
      <path d={d} fill={u("gloss")} />
      {plus && <path d="M60 36 V72 M42 54 H78" stroke="#fff" strokeWidth="9" strokeLinecap="round" filter="url(#s3-ds)" />}
    </>
  );
}

// ── The illustrations ─────────────────────────────────────────────────────────
function Art({ kind }: { kind: StepArtKey }) {
  switch (kind) {
    case "exam":
      return (
        <>
          <Tooth x={46} y={62} s={0.84} />
          <Rod x1={86} y1={54} x2={68} y2={102} w={7} />
          <g filter="url(#s3-ds)">
            <circle cx="88" cy="38" r="17.5" fill={u("metal")} />
          </g>
          <circle cx="88" cy="38" r="13.5" fill={u("lens")} />
          <path d="M79 33 A11 11 0 0 1 88 27" stroke="#fff" strokeWidth="3.4" fill="none" strokeLinecap="round" />
          <path d="M82 45 C85 48 91 48 94 44" stroke="#22bcc0" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity=".7" />
        </>
      );

    case "inspect":
      return (
        <>
          <CrossTooth x={46} y={62} s={0.98} pulp="red" />
          <circle cx="76" cy="46" r="22" fill="#fff" fillOpacity=".4" />
          <g filter="url(#s3-ds)">
            <circle cx="76" cy="46" r="22" fill="none" stroke={u("purple")} strokeWidth="6.5" />
          </g>
          <path d="M63 38 A14 14 0 0 1 73 30" stroke="#fff" strokeWidth="3.6" fill="none" strokeLinecap="round" />
          <Rod x1={92} y1={62} x2={105} y2={78} w={9} fill="navy" />
          <Sparkle x={100} y={24} s={0.75} fill="ballT" />
        </>
      );

    case "xray":
      return (
        <>
          <g filter="url(#s3-ds)">
            <rect x="12" y="20" width="96" height="80" rx="11" fill={u("navy")} />
          </g>
          <rect x="17" y="25" width="86" height="70" rx="7" fill={u("screen")} />
          <g transform="translate(60 60) scale(.62) translate(-60 -57)" filter="url(#s3-glow)">
            <path d={TOOTH} fill="#9fe7f2" fillOpacity=".2" stroke="#b6f2fb" strokeWidth="4.5" strokeLinejoin="round" />
            <path d="M50 52 V84 M70 52 V84" stroke="#b6f2fb" strokeWidth="4.5" strokeLinecap="round" />
          </g>
          <circle cx="76" cy="80" r="7.5" stroke="#f5b942" strokeWidth="3" fill="none" />
          <path d="M17 31 L66 25 L42 95 H17 Z" fill="#fff" opacity=".07" />
          <rect x="17" y="25" width="86" height="26" rx="7" fill={u("gloss")} opacity=".5" />
        </>
      );

    case "plan":
      return (
        <>
          <Panel x={26} y={16} w={68} h={90} />
          <g filter="url(#s3-ds)">
            <rect x="43" y="9" width="34" height="16" rx="7" fill={u("purple")} />
          </g>
          {[44, 63, 82].map((y) => (
            <g key={y}>
              <Ball cx={40} cy={y} r={6.5} fill="ballT" />
              <path d={`M37 ${y} l2.6 2.6 l4.4 -5`} stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="52" y={y - 2.3} width="30" height="4.6" rx="2.3" fill="#c3d5e1" />
            </g>
          ))}
          <Tooth x={92} y={94} s={0.34} shadow={false} />
        </>
      );

    case "notes":
      return (
        <>
          <Panel x={28} y={14} w={64} h={92} />
          <g filter="url(#s3-ds)">
            <path d="M60 46 C52 38 44 40 44 31 C44 24 52 22 60 29 C68 22 76 24 76 31 C76 40 68 38 60 46 Z" fill={u("ballR")} transform="translate(0 -2)" />
          </g>
          <ellipse cx="51" cy="26" rx="3.2" ry="2" fill="#fff" opacity=".7" />
          {[62, 76, 90].map((y, i) => (
            <rect key={y} x="40" y={y - 2.3} width={i === 2 ? 26 : 40} height="4.6" rx="2.3" fill="#c3d5e1" />
          ))}
          <Check x={88} y={92} r={11} />
        </>
      );

    case "consult":
      return (
        <>
          <g filter="url(#s3-ds)">
            <path d="M16 20 H62 A14 14 0 0 1 76 34 V46 A14 14 0 0 1 62 60 H40 L28 72 V60 H30 A14 14 0 0 1 16 46 V34 A14 14 0 0 1 16 20 Z" fill={u("teal")} transform="translate(-2 -2)" />
          </g>
          <path d="M16 20 H62 A14 14 0 0 1 76 34 V46 A14 14 0 0 1 62 60 H40 L28 72 V60 H30 A14 14 0 0 1 16 46 V34 A14 14 0 0 1 16 20 Z" fill={u("gloss")} transform="translate(-2 -2)" />
          <Tooth x={42} y={38} s={0.34} shadow={false} />
          <g filter="url(#s3-ds)">
            <path d="M60 52 H104 A12 12 0 0 1 116 64 V78 A12 12 0 0 1 104 90 H98 V104 L84 90 H60 A12 12 0 0 1 48 78 V64 A12 12 0 0 1 60 52 Z" fill={u("purple")} transform="translate(-8 -2)" />
          </g>
          <path d="M60 52 H104 A12 12 0 0 1 116 64 V78 A12 12 0 0 1 104 90 H98 V104 L84 90 H60 A12 12 0 0 1 48 78 V64 A12 12 0 0 1 60 52 Z" fill={u("gloss")} transform="translate(-8 -2)" />
          {[62, 74, 86].map((cx) => (
            <circle key={cx} cx={cx} cy="71" r="3.6" fill="#fff" />
          ))}
        </>
      );

    case "kid":
      return (
        <>
          <Shadow cx={60} cy={100} rx={30} ry={4} />
          <g filter="url(#s3-ds)">
            <circle cx="60" cy="62" r="35" fill={u("skin")} stroke="#e3a674" strokeWidth="2" />
          </g>
          <path d="M25 58 C21 32 42 20 60 22 C80 20 98 32 95 58 C86 44 74 40 60 42 C46 40 34 44 25 58 Z" fill="#5a3726" />
          <path d="M34 34 C42 26 54 25 62 27" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" opacity=".35" />
          {[47, 73].map((cx) => (
            <g key={cx}>
              <ellipse cx={cx} cy="60" rx="3.8" ry="4.4" fill="#1d174e" />
              <circle cx={cx - 1.2} cy="58.4" r="1.3" fill="#fff" />
            </g>
          ))}
          <circle cx="40" cy="72" r="5" fill="#ff8f9d" opacity=".65" />
          <circle cx="80" cy="72" r="5" fill="#ff8f9d" opacity=".65" />
          <path d="M44 72 Q60 92 76 72 Z" fill="#ef6a73" stroke="#b83a44" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M47 73 Q60 78 73 73 L72 78 Q60 82 48 78 Z" fill="#fff" />
          <Tooth x={100} y={98} s={0.3} />
          <Sparkle x={104} y={24} s={0.8} />
        </>
      );

    case "anaesthesia":
      return (
        <>
          <Tooth x={44} y={66} s={0.86} />
          <Syringe x={86} y={48} rot={150} s={0.62} />
          <Drop x={69} y={61} s={0.85} />
        </>
      );

    case "decay":
      return (
        <>
          <CrossTooth x={42} y={62} s={0.98} pulp="red" cavity />
          <Handpiece x1={108} y1={14} x2={78} y2={34} bx={58} by={43} />
          <circle cx="64" cy="50" r="1.8" fill="#b6621a" />
          <circle cx="70" cy="44" r="1.5" fill="#b6621a" />
          <circle cx="56" cy="52" r="1.5" fill="#b6621a" />
        </>
      );

    case "composite":
      return (
        <>
          <CrossTooth x={42} y={62} s={0.98} pulp="red" cavity filling />
          <Rod x1={110} y1={12} x2={84} y2={30} w={11} fill="purple" />
          <polygon points="84,30 56,38 66,54" fill="#5aa9ff" fillOpacity=".4" />
          <line x1="84" y1="34" x2="62" y2="40" stroke="#8cc7ff" strokeWidth="2" strokeLinecap="round" />
          <Sparkle x={96} y={64} s={0.8} fill="ballB" />
        </>
      );

    case "polish":
      return (
        <>
          <Tooth x={48} y={62} s={0.86} />
          <Rod x1={108} y1={104} x2={82} y2={84} w={10} fill="purple" />
          <g filter="url(#s3-ds)">
            <circle cx="76" cy="78" r="11" fill={u("ballR")} />
          </g>
          <circle cx="76" cy="78" r="4.4" fill="#ffb3b9" />
          <ellipse cx="72" cy="73" rx="4" ry="2.4" fill="#fff" opacity=".7" />
          <Sparkle x={34} y={40} s={0.9} fill="ballW" />
          <Sparkle x={86} y={36} s={1.2} />
          <Sparkle x={98} y={60} s={0.7} fill="ballT" />
        </>
      );

    case "scaling":
      return (
        <>
          <Tooth x={48} y={60} s={0.9} />
          {[
            [30, 66, 3.4],
            [37, 72, 2.8],
            [44, 69, 2.6],
            [62, 70, 2.8],
          ].map(([cx, cy, r]) => (
            <circle key={`${cx}`} cx={cx} cy={cy} r={r} fill={u("cavity")} />
          ))}
          <Rod x1={106} y1={22} x2={78} y2={62} w={6} />
          <path d="M78 62 C74 66 68 67 66 62" stroke="#8997a8" strokeWidth="5" fill="none" strokeLinecap="round" />
          <Drop x={88} y={82} s={0.8} />
          <Drop x={100} y={70} s={0.6} />
          <Drop x={78} y={94} s={0.55} />
        </>
      );

    case "floss":
      return (
        <>
          <Tooth x={32} y={62} s={0.66} />
          <Tooth x={88} y={62} s={0.66} />
          <path d="M60 10 C60 34 50 44 50 60 C50 76 60 86 60 108" stroke="#0e9aa7" strokeWidth="4.6" fill="none" strokeLinecap="round" />
          <path d="M60 10 C60 34 70 44 70 60 C70 76 60 86 60 108" stroke="#7fe0e2" strokeWidth="3" fill="none" strokeLinecap="round" />
          <Ball cx={60} cy={10} r={5} />
          <Ball cx={60} cy={108} r={5} />
          <Sparkle x={60} y={60} s={0.7} fill="ballW" />
        </>
      );

    case "brush":
      return (
        <>
          <Tooth x={46} y={66} s={0.86} />
          <g transform="translate(76 52) rotate(-38)">
            <Rod x1={24} y1={1} x2={56} y2={1} w={8} fill="teal" />
            <g filter="url(#s3-ds)">
              <rect x="-6" y="-6" width="30" height="13" rx="5" fill={u("purple")} />
            </g>
            <rect x="-6" y="-13" width="30" height="7" rx="3" fill="#fff" stroke="#bfd0da" strokeWidth="1.6" />
          </g>
          <Ball cx={82} cy={40} r={5} fill="ballW" />
          <Ball cx={92} cy={50} r={3.4} fill="ballW" />
          <Ball cx={72} cy={34} r={3} fill="ballW" />
        </>
      );

    case "tongue":
      return (
        <>
          <Shadow cx={60} cy={102} rx={28} ry={4} />
          <g filter="url(#s3-ds)">
            <path d="M32 40 C32 26 88 26 88 40 C92 74 80 100 60 100 C40 100 28 74 32 40 Z" fill={u("tongue")} />
          </g>
          <path d="M32 40 C32 26 88 26 88 40 C92 74 80 100 60 100 C40 100 28 74 32 40 Z" fill={u("gloss")} />
          <path d="M60 36 V84" stroke="#b82b4a" strokeWidth="3.2" strokeLinecap="round" opacity=".55" />
          {[
            [46, 54],
            [74, 60],
            [50, 74],
          ].map(([cx, cy]) => (
            <circle key={`${cx}`} cx={cx} cy={cy} r="2.4" fill="#fff" opacity=".4" />
          ))}
          <g filter="url(#s3-ds)">
            <path d="M28 58 Q60 80 92 58" stroke={u("teal")} strokeWidth="9" fill="none" strokeLinecap="round" />
          </g>
          <path d="M30 56 Q60 77 90 56" stroke="#fff" strokeOpacity=".55" strokeWidth="2.4" fill="none" strokeLinecap="round" />
          <Sparkle x={98} y={26} s={0.9} />
        </>
      );

    case "fluoride":
      return (
        <>
          <Shield tooth />
          <Tooth x={60} y={56} s={0.62} shadow={false} />
          <Drop x={98} y={18} s={0.9} />
          <Sparkle x={22} y={92} s={0.7} fill="ballT" />
        </>
      );

    case "sealant":
      return (
        <>
          <Tooth x={58} y={62} s={0.92} />
          <g filter="url(#s3-ds)">
            <path d="M33 38 C33 24 56 22 60 28 C64 22 87 24 87 38 C87 44 80 47 74 45 C68 43 66 49 60 49 C54 49 52 43 46 45 C40 47 33 44 33 38 Z" fill="#22bcc0" fillOpacity=".55" stroke="#0fb5b8" strokeWidth="2.4" strokeLinejoin="round" />
          </g>
          <path d="M40 33 C44 28 52 27 56 30" stroke="#fff" strokeWidth="3.4" fill="none" strokeLinecap="round" opacity=".95" />
          <Sparkle x={100} y={26} s={0.9} />
          <Sparkle x={20} y={92} s={0.6} fill="ballT" />
        </>
      );

    case "implant":
    case "healing": {
      const heal = kind === "healing";
      return (
        <>
          <g filter="url(#s3-ds)">
            <rect x="12" y="62" width="96" height="46" rx="11" fill={u("bone")} stroke="#cfa56c" strokeWidth="1.6" />
          </g>
          {[
            [26, 84],
            [96, 90],
            [30, 98],
            [92, 74],
          ].map(([cx, cy]) => (
            <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="2.3" fill="#c79b5e" opacity=".7" />
          ))}
          <Gum d={heal ? "M10 54 C34 48 86 48 110 54 L110 68 C84 64 36 64 10 68 Z" : "M10 50 C34 44 86 44 110 50 L110 66 C84 62 36 62 10 66 Z"} />
          {!heal && (
            <g filter="url(#s3-ds)">
              <rect x="54" y="30" width="12" height="26" rx="3" fill="url(#s3-metalH)" />
            </g>
          )}
          <g filter="url(#s3-ds)">
            <rect x="49" y={heal ? 58 : 54} width="22" height={heal ? 42 : 46} rx="6" fill="url(#s3-metalH)" />
          </g>
          {(heal ? [66, 74, 82, 90] : [62, 70, 78, 86, 94]).map((yy) => (
            <path key={yy} d={`M49 ${yy} L71 ${yy - 3}`} stroke="#5f6e80" strokeWidth="2.2" opacity=".75" />
          ))}
          {!heal && <path d="M60 8 v10 m-5 -5 l5 5 5 -5" stroke="#6a45e0" strokeWidth="3.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
          {heal && (
            <>
              {[
                [34, 80],
                [86, 80],
                [34, 94],
                [86, 94],
              ].map(([cx, cy]) => (
                <path key={`${cx}${cy}`} d={`M${cx - 4} ${cy} h8 M${cx} ${cy - 4} v8`} stroke="#14b3b8" strokeWidth="3" strokeLinecap="round" />
              ))}
              <Clock x={90} y={26} r={15} />
              <path d="M26 40 A22 22 0 0 1 48 20 M48 20 l-8 -1 m8 1 l-2 8" stroke="#14b3b8" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </>
          )}
        </>
      );
    }

    case "prep":
      return (
        <>
          <path d={TOOTH} fill="none" stroke="#8997a8" strokeWidth="2.4" strokeDasharray="4 4" strokeLinejoin="round" transform="translate(-6 4)" />
          <g transform="translate(-4 4)">
            <Shadow />
            <g filter="url(#s3-ds)">
              <path d="M40 54 C40 44 76 44 76 54 L80 70 C82 84 78 98 72 98 C66 98 66 86 60 86 C54 86 54 98 48 98 C42 98 38 84 40 70 Z" fill={u("toothV")} />
            </g>
            <path d="M40 54 C40 44 76 44 76 54 L80 70 C82 84 78 98 72 98 C66 98 66 86 60 86 C54 86 54 98 48 98 C42 98 38 84 40 70 Z" fill={u("rim")} />
            <path d="M46 52 C50 48 58 47.5 62 49" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" fill="none" opacity=".9" filter="url(#s3-blur)" />
          </g>
          <Handpiece x1={108} y1={16} x2={76} y2={40} bx={58} by={47} />
          <circle cx="50" cy="42" r="1.8" fill="#8997a8" />
          <circle cx="40" cy="48" r="1.5" fill="#8997a8" />
        </>
      );

    case "impression":
      return (
        <>
          <Tooth x={60} y={24} s={0.42} shadow={false} />
          <path d="M60 44 v7 m-4 -4 l4 4 4 -4" stroke="#6a45e0" strokeWidth="3.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <Rod x1={10} y1={81} x2={20} y2={81} w={10} />
          <g filter="url(#s3-ds)">
            <rect x="18" y="58" width="90" height="42" rx="15" fill={u("metal")} />
          </g>
          <rect x="25" y="64" width="76" height="30" rx="11" fill={u("mint")} stroke="#47bfa8" strokeWidth="1.6" />
          <rect x="27" y="65" width="72" height="12" rx="6" fill={u("gloss")} />
          <g transform="translate(46 84) scale(.3) translate(-60 -57)">
            <path d={TOOTH} fill="#3aa892" opacity=".8" />
          </g>
          <g transform="translate(78 84) scale(.3) translate(-60 -57)">
            <path d={TOOTH} fill="#3aa892" opacity=".8" />
          </g>
        </>
      );

    case "scan":
      return (
        <>
          <defs>
            <clipPath id="s3-scan-clip">
              <path d={TOOTH} />
            </clipPath>
          </defs>
          <g filter="url(#s3-ds)">
            <rect x="14" y="14" width="92" height="66" rx="9" fill={u("navy")} />
          </g>
          <rect x="20" y="20" width="80" height="54" rx="5" fill={u("screen")} />
          <g transform="translate(60 47) scale(.56) translate(-60 -57)" filter="url(#s3-glow)">
            <path d={TOOTH} fill="#7be0ee" fillOpacity=".2" />
            <g clipPath="url(#s3-scan-clip)" stroke="#8ae8f4" strokeWidth="2.2">
              {[30, 42, 54, 66, 78, 90].map((yy) => (
                <line key={yy} x1="20" y1={yy} x2="100" y2={yy} />
              ))}
              {[40, 52, 64, 76].map((xx) => (
                <line key={xx} x1={xx} y1="10" x2={xx} y2="100" />
              ))}
            </g>
            <path d={TOOTH} fill="none" stroke="#b6f2fb" strokeWidth="3.4" strokeLinejoin="round" />
          </g>
          <rect x="20" y="20" width="80" height="22" rx="5" fill={u("gloss")} opacity=".45" />
          <Rod x1={52} y1={85} x2={68} y2={85} w={10} />
          <Rod x1={38} y1={94} x2={82} y2={94} w={7} />
          <Rod x1={108} y1={104} x2={90} y2={78} w={9} fill="purple" />
        </>
      );

    case "temp":
      return (
        <>
          <Shadow />
          <g filter="url(#s3-ds)">
            <path d={TOOTH} fill="#dff6f8" fillOpacity=".7" stroke="#0fb5b8" strokeWidth="3.2" strokeDasharray="7 4.5" transform="translate(-6 7) scale(.88)" />
          </g>
          <path d="M34 40 C40 33 50 32 56 36" stroke="#fff" strokeWidth="3.4" fill="none" strokeLinecap="round" opacity=".9" />
          <Clock x={92} y={30} r={15} />
          <Sparkle x={26} y={30} s={0.7} fill="ballT" />
        </>
      );

    case "crown":
      return (
        <>
          <g filter="url(#s3-ds)">
            <path d="M38 36 C38 22 82 22 82 36 L80 52 C79 62 41 62 40 52 Z" fill={u("enamel")} stroke="#b4c4d6" strokeWidth="2.2" strokeLinejoin="round" />
          </g>
          <path d="M38 36 C38 22 82 22 82 36 L80 52 C79 62 41 62 40 52 Z" fill={u("rim")} />
          <path d="M46 31 C49 27 55 26 59 28" stroke="#fff" strokeWidth="3.6" fill="none" strokeLinecap="round" filter="url(#s3-blur)" />
          <path d="M60 66 v7 m-5 -5 l5 5 5 -5" stroke="#6a45e0" strokeWidth="3.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <Shadow cx={60} cy={106} rx={22} ry={3.6} />
          <g filter="url(#s3-ds)">
            <path d="M43 80 C43 76 77 76 77 80 L80 92 C81 100 76 106 71 106 C66 106 66 98 60 98 C54 98 54 106 49 106 C44 106 39 100 40 92 Z" fill={u("root")} />
          </g>
          <Sparkle x={96} y={30} s={0.9} />
        </>
      );

    case "veneer":
      return (
        <>
          <Incisor x={36} y={62} s={0.68} stain />
          <Incisor x={82} y={62} s={0.68} />
          <path d="M58 46 h10 m-4 -4 l4 4 -4 4" stroke="#6a45e0" strokeWidth="3.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <Sparkle x={98} y={24} s={1} />
          <Sparkle x={70} y={98} s={0.6} fill="ballT" />
        </>
      );

    case "bite":
      return (
        <>
          <Gum d="M10 14 H110 V30 H10 Z" />
          <TeethRow y={26} h={30} count={4} x0={12} w={22} gap={3.5} />
          <g filter="url(#s3-ds)">
            <rect x="12" y="55" width="96" height="7" rx="3.5" fill={u("coral")} />
          </g>
          <TeethRow y={61} h={30} count={4} x0={12} w={22} gap={3.5} />
          <Gum d="M10 90 H110 V106 H10 Z" />
        </>
      );

    case "denture":
      return (
        <>
          <g filter="url(#s3-ds)">
            <path d="M14 88 C10 30 110 30 106 88 L92 88 C92 56 28 56 28 88 Z" fill={u("gum")} />
          </g>
          <path d="M14 88 C10 30 110 30 106 88 L92 88 C92 56 28 56 28 88 Z" fill={u("gloss")} />
          {[
            [21, 74, -8],
            [25, 58, -24],
            [37, 46, -44],
            [60, 41, 0],
            [83, 46, 44],
            [95, 58, 24],
            [99, 74, 8],
          ].map(([cx, cy, r]) => (
            <g key={`${cx}`} transform={`rotate(${r} ${cx} ${cy})`} filter="url(#s3-ds)">
              <rect x={cx - 6} y={cy - 8} width="12" height="17" rx="4.5" fill={u("tooth2")} stroke="#e3d8c6" strokeWidth="1.4" />
              <rect x={cx - 5} y={cy - 7} width="10" height="8" rx="4" fill={u("gloss")} />
            </g>
          ))}
          <Sparkle x={60} y={86} s={0.9} />
        </>
      );

    case "braces":
      return (
        <>
          <Gum d="M8 20 H112 V38 H8 Z" />
          <TeethRow y={34} h={52} count={4} x0={12} w={22} gap={3.5} />
          <path d="M8 60 H112" stroke="#8997a8" strokeWidth="3.4" strokeLinecap="round" />
          <path d="M8 59 H112" stroke="#fff" strokeWidth="1" strokeLinecap="round" opacity=".7" />
          {[0, 1, 2, 3].map((i) => (
            <g key={i} filter="url(#s3-ds)">
              <rect x={12 + i * 25.5 + 5} y="52" width="12" height="16" rx="3" fill={u(i % 2 ? "purple" : "teal")} stroke="#fff" strokeWidth="1.6" />
              <rect x={12 + i * 25.5 + 7} y="54" width="8" height="5" rx="2" fill="#fff" opacity=".55" />
            </g>
          ))}
        </>
      );

    case "aligner":
      return (
        <>
          <TeethRow y={32} h={52} count={4} x0={12} w={22} gap={3.5} />
          <g filter="url(#s3-ds)">
            <rect x="6" y="26" width="108" height="64" rx="24" fill="#8fe3e8" fillOpacity=".3" stroke="#0fb5b8" strokeWidth="3.2" />
          </g>
          <path d="M16 36 C30 28 60 26 78 28" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" opacity=".9" />
          <path d="M34 102 h52 m-8 -6 l8 6 -8 6" stroke="#6a45e0" strokeWidth="3.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </>
      );

    case "retainer":
      return (
        <>
          <Gum d="M8 82 H112 V102 H8 Z" />
          <TeethRow y={30} h={54} count={4} x0={12} w={22} gap={3.5} />
          <g filter="url(#s3-ds)">
            <path d="M10 56 C30 66 90 66 110 56" stroke="#8997a8" strokeWidth="4" fill="none" strokeLinecap="round" />
          </g>
          <path d="M10 55 C30 65 90 65 110 55" stroke="#fff" strokeOpacity=".65" strokeWidth="1.4" fill="none" strokeLinecap="round" />
          <Ball cx={10} cy={56} r={4.5} />
          <Ball cx={110} cy={56} r={4.5} />
          <Sparkle x={60} y={16} s={0.8} fill="ballT" />
        </>
      );

    case "nightguard":
      return (
        <>
          <TeethRow y={50} h={42} count={4} x0={12} w={22} gap={3.5} />
          <g filter="url(#s3-ds)">
            <rect x="6" y="44" width="108" height="54" rx="22" fill="#8fe3e8" fillOpacity=".32" stroke="#0fb5b8" strokeWidth="3.2" />
          </g>
          <path d="M16 54 C32 47 62 46 82 48" stroke="#fff" strokeWidth="3.6" fill="none" strokeLinecap="round" opacity=".9" />
          <g filter="url(#s3-ds)">
            <path d="M92 8 A16 16 0 1 0 108 30 A12 12 0 1 1 92 8 Z" fill={u("gold")} />
          </g>
          <Sparkle x={66} y={22} s={0.7} fill="ballP" />
          <Sparkle x={40} y={14} s={0.5} fill="ballP" />
        </>
      );

    case "shade":
      return (
        <>
          <Tooth x={60} y={28} s={0.46} />
          <g filter="url(#s3-ds)">
            <rect x="8" y="52" width="104" height="9" rx="4.5" fill={u("metal")} />
            {["#ffffff", "#fbf4e4", "#f4e6c6", "#ecd6a6", "#e1c488"].map((c, i) => (
              <rect key={c} x={11 + i * 20.2} y="58" width="17" height="46" rx="6" fill={c} stroke={i === 1 ? "#0fb5b8" : "#d8c9a6"} strokeWidth={i === 1 ? 3.4 : 1.6} />
            ))}
          </g>
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x={13 + i * 20.2} y="60" width="13" height="14" rx="5" fill={u("gloss")} />
          ))}
          <Check x={89} y={26} r={11} />
        </>
      );

    case "gel":
      return (
        <>
          <Tooth x={48} y={64} s={0.88} />
          <ellipse cx="42" cy="46" rx="14" ry="9" fill="#8fe6f2" fillOpacity=".7" stroke="#44b9dc" strokeWidth="1.8" />
          <ellipse cx="38" cy="43" rx="5" ry="2.6" fill="#fff" opacity=".7" />
          <Rod x1={108} y1={18} x2={74} y2={33} w={13} fill="glassV" />
          <Rod x1={94} y1={24} x2={76} y2={32} w={8.6} fill="blue" />
          <Rod x1={74} y1={33} x2={62} y2={38} w={4} />
          <Sparkle x={88} y={64} s={1.1} fill="ballW" />
          <Sparkle x={98} y={84} s={0.8} />
          <Sparkle x={26} y={96} s={0.7} fill="ballT" />
        </>
      );

    case "barrier":
      return (
        <>
          <Tooth x={60} y={50} s={0.82} />
          <Gum d="M8 78 C30 64 90 64 112 78 L112 108 L8 108 Z" />
          <g filter="url(#s3-ds)">
            <path d="M16 76 C38 63 82 63 104 76" stroke={u("teal")} strokeWidth="8" fill="none" strokeLinecap="round" />
          </g>
          <path d="M18 74 C38 62 82 62 102 74" stroke="#fff" strokeOpacity=".55" strokeWidth="2.4" fill="none" strokeLinecap="round" />
          <Check x={96} y={26} r={11} />
        </>
      );

    case "smile":
      return (
        <>
          <g filter="url(#s3-ds)">
            <path d="M10 52 C30 38 90 38 110 52 C102 88 18 88 10 52 Z" fill={u("lips")} stroke="#a82434" strokeWidth="1.6" strokeLinejoin="round" />
          </g>
          <path d="M10 52 C30 38 90 38 110 52 C104 56 16 56 10 52 Z" fill={u("gloss")} />
          <path d="M20 54 C40 46 80 46 100 54 C92 76 28 76 20 54 Z" fill={u("tooth2")} />
          {[36, 48, 60, 72, 84].map((xx) => (
            <line key={xx} x1={xx} y1="49" x2={xx} y2="68" stroke="#e2d7c6" strokeWidth="1.8" />
          ))}
          <path d="M26 53 C44 46 76 46 94 53" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".8" />
          <Sparkle x={98} y={26} s={1.1} />
          <Sparkle x={24} y={28} s={0.7} fill="ballT" />
          <Sparkle x={92} y={96} s={0.6} fill="ballT" />
        </>
      );

    case "extraction":
      return (
        <>
          <Tooth x={44} y={72} s={0.82} />
          <Rod x1={112} y1={8} x2={90} y2={34} w={7.5} />
          <Rod x1={90} y1={34} x2={72} y2={46} w={6.5} />
          <Rod x1={112} y1={34} x2={92} y2={38} w={7.5} fill="metal" />
          <Rod x1={92} y1={38} x2={71} y2={62} w={6.5} />
          <Ball cx={91} cy={36} r={4.8} />
          <Drop x={100} y={80} s={0.7} fill="ballR" />
          <Drop x={90} y={94} s={0.55} fill="ballR" />
        </>
      );

    case "stitch":
      return (
        <>
          <Gum d="M8 52 C36 38 84 38 112 52 L112 96 C84 84 36 84 8 96 Z" />
          <path d="M60 44 L60 90" stroke="#a3283a" strokeWidth="3.4" strokeLinecap="round" />
          {[52, 64, 76].map((yy) => (
            <g key={yy}>
              <path d={`M48 ${yy - 4} L72 ${yy + 4}`} stroke="#1d174e" strokeWidth="3" strokeLinecap="round" />
              <circle cx="48" cy={yy - 4} r="2.6" fill="#1d174e" />
              <circle cx="72" cy={yy + 4} r="2.6" fill="#1d174e" />
            </g>
          ))}
          <Sparkle x={98} y={26} s={0.8} fill="ballT" />
        </>
      );

    case "phone":
      return (
        <>
          <g filter="url(#s3-ds)">
            <rect x="34" y="12" width="52" height="94" rx="12" fill={u("navy")} />
          </g>
          <rect x="39" y="22" width="42" height="72" rx="5" fill={u("paper")} />
          <Tooth x={60} y={50} s={0.42} shadow={false} />
          <g filter="url(#s3-ds)">
            <rect x="46" y="74" width="28" height="12" rx="6" fill={u("teal")} />
          </g>
          <path d="M54 80 h12" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          {[
            "M94 36 A18 18 0 0 1 94 62",
            "M102 28 A28 28 0 0 1 102 70",
            "M26 36 A18 18 0 0 0 26 62",
            "M18 28 A28 28 0 0 0 18 70",
          ].map((d, i) => (
            <path key={d} d={d} stroke="#14b3b8" strokeWidth="4" fill="none" strokeLinecap="round" opacity={i % 2 ? 0.55 : 1} />
          ))}
        </>
      );

    case "urgent":
      return (
        <>
          <Tooth x={60} y={78} s={0.76} />
          <g filter="url(#s3-ds)">
            <path d="M38 34 C38 12 82 12 82 34 Z" fill={u("ballR")} stroke="#8c0912" strokeWidth="1.6" strokeLinejoin="round" />
          </g>
          <path d="M46 28 C46 20 54 17 60 17" stroke="#fff" strokeWidth="3.4" fill="none" strokeLinecap="round" opacity=".75" />
          <g filter="url(#s3-ds)">
            <rect x="34" y="34" width="52" height="9" rx="3" fill={u("metal")} />
          </g>
          <path d="M20 22 l-9 -5 M100 22 l9 -5 M16 36 h-10 M104 36 h10" stroke="#e3303a" strokeWidth="3.4" strokeLinecap="round" />
        </>
      );

    case "calendar":
      return (
        <>
          <Panel x={16} y={22} w={88} h={80} rx={11} />
          <g filter="url(#s3-ds)">
            <path d="M16 33 A11 11 0 0 1 27 22 H93 A11 11 0 0 1 104 33 V44 H16 Z" fill={u("purple")} />
          </g>
          {[33, 79].map((xx) => (
            <rect key={xx} x={xx} y="14" width="8" height="16" rx="4" fill={u("navy")} />
          ))}
          {[0, 1, 2].map((r) =>
            [0, 1, 2, 3].map((c) => <rect key={`${r}-${c}`} x={26 + c * 17} y={53 + r * 16} width="10" height="9" rx="2.5" fill="#cfe0ea" />)
          )}
          <Check x={82} y={86} r={17} />
        </>
      );

    case "laser":
      return (
        <>
          <Tooth x={42} y={68} s={0.8} />
          <Gum d="M6 86 C22 80 40 82 52 90 L52 108 L6 108 Z" />
          <Rod x1={110} y1={14} x2={76} y2={44} w={12} fill="purple" />
          <Rod x1={76} y1={44} x2={66} y2={54} w={5} />
          <line x1="66" y1="54" x2="54" y2="68" stroke="#ff4d6d" strokeWidth="3.4" strokeLinecap="round" />
          <circle cx="52" cy="71" r="10" fill="#ff4d6d" fillOpacity=".3" filter="url(#s3-blur)" />
          <circle cx="52" cy="71" r="4.2" fill="#ff4d6d" />
        </>
      );

    case "gum":
      return (
        <>
          <Tooth x={60} y={44} s={0.8} shadow={false} />
          <Gum d="M6 62 C28 56 46 60 50 72 L52 108 L6 108 Z" />
          <Gum d="M114 62 C92 56 74 60 70 72 L68 108 L114 108 Z" />
          <Rod x1={100} y1={22} x2={66} y2={86} w={4.6} />
          {[34, 46, 58, 70, 82].map((yy, i) => (
            <line key={yy} x1={96 - (yy - 28) * 0.55} y1={yy} x2={96 - (yy - 28) * 0.55 - 8} y2={yy + 2.6} stroke="#fff" strokeWidth={i % 2 ? 2.2 : 3.2} strokeLinecap="round" />
          ))}
        </>
      );

    case "stabilise":
      return (
        <>
          <Shield plus />
          <Sparkle x={100} y={96} s={0.8} />
          <Sparkle x={20} y={20} s={0.6} fill="ballT" />
        </>
      );

    default:
      return <Tooth />;
  }
}

/** Circular badge artwork. Decorative: the step title and text beside it carry the meaning. */
export default function StepArt({ kind, className = "" }: { kind: StepArtKey; className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true" focusable="false">
      <Defs />
      <circle cx="60" cy="60" r="60" fill={u("disc")} />
      <circle cx="60" cy="60" r="57.5" fill="none" stroke="#fff" strokeOpacity=".9" strokeWidth="1.6" />
      <Art kind={kind} />
    </svg>
  );
}
