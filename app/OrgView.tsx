// Isometric cutaway of the organisation, drawn as inline SVG.
const TW = 44; // tile width
const TH = 22; // tile height
const OX = 330;
const OY = 40;

const iso = (x: number, y: number, z = 0) => [OX + ((x - y) * TW) / 2, OY + ((x + y) * TH) / 2 - z];
const pts = (...p: number[][]) => p.map(([a, b]) => `${a},${b}`).join(" ");

function Box({ x, y, w, d, h, top, left, right }: { x: number; y: number; w: number; d: number; h: number; top: string; left: string; right: string }) {
  const a = iso(x, y, h), b = iso(x + w, y, h), c = iso(x + w, y + d, h), e = iso(x, y + d, h);
  const b0 = iso(x + w, y), c0 = iso(x + w, y + d), e0 = iso(x, y + d);
  return (
    <g>
      <polygon points={pts(e, c, c0, e0)} fill={left} />
      <polygon points={pts(b, c, c0, b0)} fill={right} />
      <polygon points={pts(a, b, c, e)} fill={top} />
    </g>
  );
}

type Room = { x: number; y: number; w: number; d: number; name: string; status: "ok" | "warn" | "risk"; desks: number[][] };

const rooms: Room[] = [
  { x: 0, y: 0, w: 5, d: 4, name: "العمليات", status: "ok", desks: [[1, 1], [3, 1], [1, 2.5], [3, 2.5]] },
  { x: 5.4, y: 0, w: 4.6, d: 4, name: "المالية", status: "risk", desks: [[6.4, 1], [8.2, 1], [6.4, 2.5]] },
  { x: 0, y: 4.4, w: 5, d: 4.6, name: "خدمة العملاء", status: "warn", desks: [[1, 5.4], [3, 5.4], [1, 7], [3, 7]] },
  { x: 5.4, y: 4.4, w: 4.6, d: 4.6, name: "الموارد البشرية", status: "ok", desks: [[6.4, 5.4], [8.2, 5.4], [7.3, 7]] },
];

const statusColor = { ok: "#1fb5a8", warn: "#e0a21b", risk: "#e05252" };
const statusLabel = { ok: "معرفة معتمدة", warn: "تحتاج توثيق", risk: "خبير واحد" };

export default function OrgView() {
  return (
    <svg viewBox="0 0 660 400" className="iso" role="img" aria-label="عرض ثلاثي الأبعاد للمؤسسة وحالة المعرفة في كل إدارة">
      <defs>
        <linearGradient id="pinGrad" x1="0" x2="1">
          <stop offset="0" stopColor="#5b4fd6" />
          <stop offset="1" stopColor="#1fb5a8" />
        </linearGradient>
      </defs>
      {/* base slab */}
      <Box x={-0.4} y={-0.4} w={10.8} d={9.8} h={10} top="#eef1fa" left="#c9cfe6" right="#b5bcdb" />
      {rooms.map((r) => (
        <g key={r.name}>
          {/* floor */}
          <polygon
            points={pts(iso(r.x, r.y, 10), iso(r.x + r.w, r.y, 10), iso(r.x + r.w, r.y + r.d, 10), iso(r.x, r.y + r.d, 10))}
            fill="#ffffff"
            stroke={statusColor[r.status]}
            strokeOpacity=".5"
          />
          {/* cutaway back walls */}
          <Box x={r.x} y={r.y} w={r.w} d={0.2} h={40} top="#dfe3f3" left="#e8ebf7" right="#d3d8ee" />
          <Box x={r.x} y={r.y} w={0.2} d={r.d} h={40} top="#dfe3f3" left="#cdd3ec" right="#d3d8ee" />
          {/* desks + people */}
          {r.desks.map(([dx, dy], i) => {
            const [px, py] = iso(dx + 0.5, dy + 0.3, 30);
            return (
              <g key={i}>
                <Box x={dx} y={dy} w={1.1} d={0.6} h={18} top="#9aa6d6" left="#7d89c4" right="#6c78b6" />
                <Box x={dx + 0.4} y={dy + 0.05} w={0.35} d={0.08} h={26} top="#2a2f55" left="#2a2f55" right="#1d2142" />
                <circle cx={px} cy={py - 2} r="5" fill={i === 0 && r.status === "risk" ? "#e05252" : "#5b4fd6"} />
                <circle cx={px} cy={py - 2} r="2" fill="#fff" opacity=".7" />
              </g>
            );
          })}
          {/* status pin */}
          {(() => {
            const [cx, cy] = iso(r.x + r.w / 2, r.y + r.d / 2, 78);
            return (
              <g className="pin">
                <line x1={cx} y1={cy + 12} x2={cx} y2={cy + 40} stroke={statusColor[r.status]} strokeWidth="2" strokeDasharray="3 3" />
                <rect x={cx - 52} y={cy - 12} width="104" height="26" rx="13" fill="#fff" stroke={statusColor[r.status]} />
                <circle cx={cx + 38} cy={cy + 1} r="5" fill={statusColor[r.status]} />
                <text x={cx - 30} y={cy + 6} fontSize="12" fontWeight="700" fill="#12142b" textAnchor="end">{r.name}</text>
              </g>
            );
          })()}
        </g>
      ))}
      <g transform="translate(16 360)" fontSize="11" fill="#5b6080">
        {(["ok", "warn", "risk"] as const).map((s, i) => (
          <g key={s} transform={`translate(${i * 110} 0)`}>
            <circle cx="6" cy="0" r="5" fill={statusColor[s]} />
            <text x="69" y="4" textAnchor="start" direction="rtl">{statusLabel[s]}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}
