import Image from "next/image";
import Comparison from "./Comparison";
import OrgView from "./OrgView";

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
// export const instant = false;

const engines = [
  { icon: "🎙️", ar: "المرافقة المعرفية الذكية", en: "AI Knowledge Shadowing", p: "مقابلات صوتية أو كتابية يطرح فيها الذكاء الاصطناعي أسئلة استكشافية تستخرج الخبرة الضمنية والاستثناءات وأسباب القرارات." },
  { icon: "🗺️", ar: "خريطة المعرفة الحرجة", en: "Critical Knowledge Mapping", p: "تحديد ما لا تستطيع الإدارة تحمل فقدانه، والعمليات التي تعتمد على خبير واحد." },
  { icon: "⚠️", ar: "إدارة مخاطر فقدان المعرفة", en: "Knowledge Risk Management", p: "سجل مخاطر معرفية يوضح حالة استمرارية كل عملية وأولوية استخلاصها ونقلها." },
  { icon: "✅", ar: "نقل المعرفة المثبت", en: "Verified Knowledge Transfer", p: "نقل الخبرة إلى بديل مؤهل والتحقق العملي من قدرته على تطبيقها." },
  { icon: "🧠", ar: "الذاكرة المؤسسية الحية", en: "Living Institutional Memory", p: "بطاقات معرفية منظمة ومعتمدة ذات إصدارات، تتراكم وتتحدث رغم تغير الموظفين." },
  { icon: "🏅", ar: "تقدير المساهمات المعرفية", en: "Knowledge Recognition", p: "توثيق أثر مساهمة كل خبير: مرات الاستخدام، المشكلات المحلولة، والموظفون المؤهلون." },
  { icon: "💡", ar: "الابتكار القائم على المعرفة", en: "Knowledge-Driven Innovation", p: "تحليل الحالات المتكررة لاكتشاف الأنماط وفرص تحسين الخدمات والمنتجات." },
  { icon: "🔭", ar: "الاستشراف المعرفي", en: "Knowledge Foresight", p: "مؤشرات مبكرة وسيناريوهات قابلة للمراجعة حول المخاطر والفجوات والفرص." },
];

const steps = [
  { t: "الخبير يشارك خبرته", p: "يضغط أحمد على «أضف معرفة» ويتحدث مع المساعد الذكي عن كيفية معالجة تأخر طلبات العملاء." },
  { t: "تحويلها إلى بطاقة معرفية", p: "يولّد الذكاء الاصطناعي بطاقة KN-0001 بالإجراءات المقترحة، يراجعها أحمد ويعتمدها المدير." },
  { t: "الموظف الجديد يطبّقها", p: "أحمد في إجازة؛ يضغط خالد على «ساعدني في أداء عملي» ويحل المشكلة بمعرفة معتمدة موثقة المصدر." },
  { t: "تقدير الخبير وقياس الأثر", p: "تُسجَّل مساهمة أحمد وأثرها، ويرى المدير حالة استمرارية المعرفة في إدارته." },
  { t: "ابتكار من المعرفة المتراكمة", p: "يكتشف النظام أن 60% من حالات التأخر سببها الكميات المحجوزة، ويقترح تحسينًا للخدمة." },
];

const departments = [
  ["الموارد البشرية", "خبرات معالجة الحالات الاستثنائية", "اكتشاف مخاطر فقدان الخبرات وفجوات المهارات"],
  ["المالية", "خبرات معالجة الأخطاء والتسويات", "رصد أنماط الأخطاء والمخاطر المحتملة"],
  ["المبيعات", "أساليب التفاوض والتجارب مع العملاء", "اكتشاف فرص تطوير المنتجات والمبيعات"],
  ["العمليات", "الخبرات والحلول التشغيلية", "استشراف الاختناقات وفرص تحسين الكفاءة"],
  ["الجودة", "أسباب الأخطاء والإجراءات التصحيحية", "اكتشاف احتمالات تكرار الأخطاء"],
  ["خدمة العملاء", "الشكاوى والحلول الناجحة", "اكتشاف فرص تطوير الخدمات"],
];

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="container">
          <a href="#" className="brand">
            <Image src="/logo.jpg" alt="ADAI" width={42} height={42} />
            <span className="en">ADAI</span>
          </a>
          <div className="nav-links">
            <a href="#how">كيف يعمل</a>
            <a href="#ux">التجربة</a>
            <a href="#features">القدرات</a>
            <a href="#compliance">الامتثال</a>
            <a href="#compare">المقارنة</a>
            <a href="#departments">الإدارات</a>
          </div>
          <a href="#contact" className="btn btn-primary">اطلب عرضًا</a>
        </div>
      </nav>

      <header className="hero">
        <div className="container">
          <Image className="hero-logo" src="/logo.jpg" alt="شعار ADAI" width={150} height={175} priority />
          <div><span className="pill"><span className="en">AI Knowledge Management · SaaS</span></span></div>
          <h1>
            لا تدع خبرة موظفيك <span className="grad-text">تغادر معهم</span>
          </h1>
          <p>
            ADAI يحوّل نقل الخبرة من نشاط فردي ومؤقت إلى عملية مؤسسية مستمرة، قابلة للحوكمة والقياس والاسترجاع —
            ذاكرة مؤسسية حية لكل إدارة.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">ابدأ التجربة</a>
            <a href="#compare" className="btn btn-ghost">قارن مع المنافسين</a>
          </div>
        </div>
      </header>

      <section className="alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">الماضي · الحاضر · المستقبل</span>
            <h2>لكل إدارة ذاكرتها، وللمؤسسة ذكاؤها المعرفي</h2>
          </div>
          <div className="grid grid-3">
            <div className="card time-card">
              <span className="tag">الماضي</span>
              <span className="en">Knowledge Capture</span>
              <p>استخلاص الخبرات والقرارات السابقة والحلول والدروس المستفادة من الموظفين والمصادر المؤسسية.</p>
            </div>
            <div className="card time-card">
              <span className="tag">الحاضر</span>
              <span className="en">Knowledge Retrieval &amp; Activation</span>
              <p>مساعدة الموظفين والمديرين على أداء أعمالهم واتخاذ القرارات بالاستناد إلى المعرفة المعتمدة.</p>
            </div>
            <div className="card time-card">
              <span className="tag">المستقبل</span>
              <span className="en">Knowledge-Driven Foresight</span>
              <p>تحليل الأنماط المتكررة لاكتشاف المخاطر المحتملة والفجوات المعرفية وفرص التطوير والابتكار.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">حالة استخدام: معالجة تأخر طلبات العملاء</span>
            <h2>المؤسسة تمتلك المعرفة… ADAI يجعلها متاحة عند الحاجة</h2>
            <p>واجهة بسيطة: خياران للموظف («ساعدني في أداء عملي» و«أضف معرفة»)، وثلاثة للمدير.</p>
          </div>
          <div className="grid grid-3 steps">
            {steps.map((s) => (
              <div className="card step" key={s.t}>
                <h3>{s.t}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ux">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">تجربة استخدام سهلة</span>
            <h2>شاهد معرفة مؤسستك… كما لو كانت مبنى حيًّا</h2>
            <p>لوحة تحكم حديثة تعرض المؤسسة في مجسّم ثلاثي الأبعاد مقطوع، تظهر فيه كل إدارة وحالة استمرارية معرفتها بنظرة واحدة — بلا تدريب وبلا تعقيد.</p>
          </div>
          <div className="browser">
            <div className="browser-bar">
              <span className="dots"><i /><i /><i /></span>
              <span className="url en">app.adai.ai/dashboard</span>
            </div>
            <div className="app">
              <aside className="app-side">
                <div className="brand"><Image src="/logo.jpg" alt="" width={30} height={30} /><span className="en">ADAI</span></div>
                <a className="active">🏢 خريطة المؤسسة</a>
                <a>💬 ساعدني في أداء عملي</a>
                <a>➕ أضف معرفة</a>
                <a>📊 حالة المعرفة</a>
              </aside>
              <div className="app-main">
                <div className="app-head">
                  <b>خريطة المعرفة المؤسسية</b>
                  <span className="chip">مباشر</span>
                </div>
                <OrgView />
              </div>
              <aside className="app-panel">
                <b>سجل المخاطر المعرفية</b>
                <div className="risk"><span className="dot risk" />تسوية اختلافات المخزون<small>تعتمد على خبير واحد</small></div>
                <div className="risk"><span className="dot warn" />معالجة مرتجعات العملاء<small>تحتاج إلى توثيق</small></div>
                <div className="risk"><span className="dot ok" />معالجة تأخر الطلبات<small>معرفة معتمدة وبديل مختبَر</small></div>
                <div className="meter"><span>تغطية العمليات الحرجة</span><b>60%</b><div><i style={{ width: "60%" }} /></div></div>
              </aside>
            </div>
          </div>
          <div className="grid grid-3 ux-points">
            <div className="card"><div className="icon">👆</div><h3>خياران للموظف فقط</h3><p>«ساعدني في أداء عملي» و«أضف معرفة» — لا قوائم معقدة ولا تصنيف يدوي.</p></div>
            <div className="card"><div className="icon">🎮</div><h3>تصوّر تفاعلي ممتع</h3><p>مجسّم بأسلوب ألعاب المحاكاة يجعل مخاطر المعرفة مرئية وسهلة الفهم للإدارة العليا.</p></div>
            <div className="card"><div className="icon">🎙️</div><h3>صوت أو كتابة</h3><p>شارك خبرتك بالحديث مع المساعد الذكي، وهو يتولى التنظيم والتوثيق.</p></div>
          </div>
        </div>
      </section>

      <section id="features" className="alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">محركات المنصة</span>
            <h2>أكثر من بحث ذكي: دورة حياة كاملة للخبرة البشرية</h2>
          </div>
          <div className="grid grid-4">
            {engines.map((e) => (
              <div className="card" key={e.en}>
                <div className="icon">{e.icon}</div>
                <h3>{e.ar}</h3>
                <span className="en">{e.en}</span>
                <p>{e.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">لوحة تحكم مدير الإدارة</span>
            <h2>اعرف ما لا تستطيع إدارتك تحمّل فقدانه</h2>
            <p>بيانات افتراضية لأغراض العرض.</p>
          </div>
          <div className="stats">
            <div className="card stat"><b className="grad-text">10</b><span>عمليات حرجة محددة</span></div>
            <div className="card stat"><b className="grad-text">6</b><span>عمليات موثقة ومعتمدة</span></div>
            <div className="card stat"><b className="grad-text">4</b><span>تعتمد على خبير واحد</span></div>
            <div className="card stat"><b className="grad-text">3</b><span>لها بدلاء مختبَرون</span></div>
            <div className="card stat"><b className="grad-text">60%</b><span>تغطية توثيق العمليات الحرجة</span></div>
          </div>
        </div>
      </section>

      <section id="compliance" className="alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">الامتثال والأمان</span>
            <h2>متوافق مع أنظمة البيانات والأمن في المملكة العربية السعودية 🇸🇦</h2>
            <p>صُمم ADAI ليحفظ المعرفة المؤسسية داخل حدود المملكة ووفق متطلبات الجهات التنظيمية.</p>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <div className="icon">🏛️</div>
              <h3>متوافق مع سدايا</h3>
              <span className="en">SDAIA · PDPL</span>
              <p>الالتزام بنظام حماية البيانات الشخصية ومبادئ أخلاقيات الذكاء الاصطناعي الصادرة عن الهيئة السعودية للبيانات والذكاء الاصطناعي.</p>
            </div>
            <div className="card">
              <div className="icon">🔐</div>
              <h3>أمن سيبراني وفق المعايير الوطنية</h3>
              <span className="en">NCA Controls</span>
              <p>تطبيق ضوابط الأمن السيبراني الوطنية، والتشفير، والتحكم في الصلاحيات حسب الأدوار.</p>
            </div>
            <div className="card">
              <div className="icon">📍</div>
              <h3>سيادة البيانات</h3>
              <span className="en">Data Residency in KSA</span>
              <p>استضافة البيانات ومعالجتها داخل المملكة، مع سجل تدقيق كامل لكل وصول واعتماد.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="compare">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">المقارنة</span>
            <h2>ADAI مقابل مزودي الذكاء الاصطناعي التوليدي</h2>
            <p>
              المنافسون يركزون على المعلومات المتاحة والبحث والأتمتة. ADAI يركز على الخبرة البشرية غير الموثقة واستمراريتها
              والتحقق من نقلها.
            </p>
          </div>
          <Comparison />
        </div>
      </section>

      <section id="departments">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">لكل الإدارات</span>
            <h2>منصة واحدة تخدم المؤسسة بأكملها</h2>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th>الإدارة</th><th>استخلاص المعرفة</th><th>القراءة المستقبلية</th></tr>
              </thead>
              <tbody>
                {departments.map(([d, c, f]) => (
                  <tr key={d}><td><b>{d}</b></td><td>{c}</td><td>{f}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="cta">
            <h2>حوّل خبرات موظفيك إلى رأس مال معرفي دائم</h2>
            <p>احجز عرضًا توضيحيًا لترى ADAI يعمل على حالة من إدارتك.</p>
            <a href="mailto:hello@adai.ai" className="btn">احجز عرضًا توضيحيًا</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <span className="brand"><Image src="/logo.jpg" alt="" width={32} height={32} /> <span className="en">ADAI</span></span>
          <span>© {new Date().getFullYear()} ADAI — <span className="en">AI Knowledge Management</span></span>
        </div>
      </footer>
    </>
  );
}
