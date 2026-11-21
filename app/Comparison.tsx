"use client";

import { useState } from "react";

type Mark = "yes" | "part" | "no" | "custom";
type Competitor = { name: string; origin: string; strength: string; edge: string };
type Group = { label: string; competitors: Competitor[]; rows: [string, Mark, Mark, Mark][] };

const symbol: Record<Mark, string> = { yes: "✓", part: "جزئي", no: "—", custom: "قابل للتخصيص" };
const cls: Record<Mark, string> = { yes: "yes", part: "part", no: "no", custom: "part" };

const groups: Record<"intl" | "local", Group> = {
  intl: {
    label: "مزودون دوليون",
    competitors: [
      {
        name: "ChatGPT Enterprise",
        origin: "OpenAI · 🇺🇸",
        strength: "مساعد ذكي عام قوي للكتابة والتحليل والبحث في ملفات الشركة المتصلة.",
        edge: "ADAI لا ينتظر أن تكون المعرفة موثقة؛ بل يستخلص الخبرة الضمنية من الخبير ويحوّلها إلى بطاقة معرفية معتمدة.",
      },
      {
        name: "Microsoft 365 Copilot",
        origin: "Microsoft · 🇺🇸",
        strength: "الإنتاجية والبحث والتكامل العميق مع أدوات Microsoft 365.",
        edge: "دورة متخصصة وجاهزة لاستدامة المعرفة: المعرفة الحرجة، مخاطر الفقد، والتحقق من النقل — دون تخصيص.",
      },
    ],
    rows: [
      ["استرجاع المعرفة والإجابة على الأسئلة", "yes", "yes", "yes"],
      ["تحليل المستندات", "yes", "yes", "yes"],
      ["مقابلات استخلاص الخبرة الضمنية", "yes", "no", "custom"],
      ["المرافقة المعرفية الذكية (Job Shadowing)", "yes", "no", "custom"],
      ["اعتماد المعرفة وحوكمتها وإصداراتها", "yes", "part", "part"],
      ["خريطة المعرفة الحرجة", "yes", "no", "custom"],
      ["قياس مخاطر فقدان الخبرات", "yes", "no", "custom"],
      ["التحقق العملي من نقل المعرفة", "yes", "no", "custom"],
      ["تقدير المساهمات المعرفية للموظف", "yes", "no", "no"],
      ["الاستشراف وفرص الابتكار", "yes", "part", "yes"],
      ["دعم عربي أصيل وسياق محلي", "yes", "part", "part"],
      ["استضافة البيانات داخل المملكة والامتثال لسدايا", "yes", "part", "part"],
    ],
  },
  local: {
    label: "مزودون محليون",
    competitors: [
      {
        name: "Gaia",
        origin: "🇸🇦",
        strength: "البحث المؤسسي والمساعد الذكي وأتمتة الأعمال.",
        edge: "استخراج الخبرات البشرية واستدامتها والتحقق من نقلها.",
      },
      {
        name: "nuhaa.ai",
        origin: "🇸🇦",
        strength: "تحليل المعرفة والبيانات والاستشراف ودعم الإدارة العليا.",
        edge: "بناء المعرفة غير الموثقة وربطها باستمرارية الخبرات.",
      },
    ],
    rows: [
      ["استرجاع المعرفة", "yes", "yes", "yes"],
      ["تحليل المستندات", "yes", "yes", "yes"],
      ["دعم اتخاذ القرارات", "yes", "yes", "yes"],
      ["الاستشراف وفرص التحسين", "yes", "part", "yes"],
      ["مقابلات استخراج الخبرة الضمنية", "yes", "no", "no"],
      ["تحديد المعرفة الحرجة", "yes", "no", "no"],
      ["قياس مخاطر فقدان الخبرات", "yes", "no", "no"],
      ["التحقق العملي من نقل المعرفة", "yes", "no", "no"],
      ["الاعتراف بأثر المساهمات المعرفية", "yes", "no", "no"],
      ["أتمتة تنفيذ الأعمال", "part", "yes", "part"],
    ],
  },
};

export default function Comparison() {
  const [active, setActive] = useState<"intl" | "local">("intl");
  const g = groups[active];

  return (
    <>
      <div className="tabs" role="tablist">
        {(Object.keys(groups) as ("intl" | "local")[]).map((k) => (
          <button key={k} role="tab" className="tab" aria-selected={active === k} onClick={() => setActive(k)}>
            {groups[k].label}
          </button>
        ))}
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>القدرة</th>
              <th className="us">ADAI</th>
              {g.competitors.map((c) => (
                <th key={c.name}><span className="en">{c.name}</span></th>
              ))}
            </tr>
          </thead>
          <tbody>
            {g.rows.map(([label, ...marks]) => (
              <tr key={label}>
                <td>{label}</td>
                {marks.map((m, i) => (
                  <td key={i} className={`${cls[m]}${i === 0 ? " us" : ""}`}>{symbol[m]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="note">
        ✓ في ADAI تعني قدرة مستهدفة في التصميم. (—) تعني عدم وجود إعلان واضح عن الوظيفة المتخصصة، وليس أنها غير موجودة قطعًا.
      </p>

      <div className="grid grid-3 vs">
        {g.competitors.map((c) => (
          <div className="card" key={c.name}>
            <h3><span className="en">{c.name}</span><span className="flag">{c.origin}</span></h3>
            <dl>
              <dt>قوتها الأساسية</dt>
              <dd>{c.strength}</dd>
              <dt>أين يتميز ADAI</dt>
              <dd>{c.edge}</dd>
            </dl>
          </div>
        ))}
      </div>
    </>
  );
}
