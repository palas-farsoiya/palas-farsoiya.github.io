import { Link, Navigate, useParams } from "react-router-dom";
import {
  courseBasePath,
  courseChapters,
  courseInfo,
  type CourseChapter,
  type CourseSection,
} from "./courseData";

type MathTextNode = string | JSX.Element;

const getChapterPath = (slug: string) =>
  slug === "preface" ? courseBasePath : `${courseBasePath}/${slug}`;

const formatMathText = (text: string): MathTextNode[] => {
  const normalized = text.replace(/\blambda\b/g, "λ");
  const nodes: MathTextNode[] = [];
  const tokenPattern = /([A-Za-z0-9λπθ)\]}]+)([_^])(\{[^}]+\}|[A-Za-z0-9+\-*]+)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenPattern.exec(normalized)) !== null) {
    const [token, base, marker, rawScript] = match;
    const script = rawScript.startsWith("{") && rawScript.endsWith("}")
      ? rawScript.slice(1, -1)
      : rawScript;

    if (match.index > lastIndex) {
      nodes.push(normalized.slice(lastIndex, match.index));
    }

    nodes.push(
      <span key={`${token}-${match.index}`} className="whitespace-nowrap">
        {base}
        {marker === "_" ? <sub>{script}</sub> : <sup>{script}</sup>}
      </span>,
    );
    lastIndex = match.index + token.length;
  }

  if (lastIndex < normalized.length) {
    nodes.push(normalized.slice(lastIndex));
  }

  return nodes;
};

const ChapterCard = ({
  chapter,
  isActive,
}: {
  chapter: CourseChapter;
  isActive: boolean;
}) => (
  <Link
    to={getChapterPath(chapter.slug)}
    className={`block rounded-lg border px-4 py-3 transition-colors ${
      isActive
        ? "border-primary bg-primary text-primary-foreground"
        : "border-border bg-card hover:border-accent hover:bg-muted"
    }`}
  >
    <span
      className={`text-xs font-semibold uppercase tracking-wide ${
        isActive ? "text-primary-foreground/80" : "text-muted-foreground"
      }`}
    >
      {chapter.eyebrow}
    </span>
    <span className="mt-1 block text-sm font-semibold leading-snug">
      {chapter.title}
    </span>
  </Link>
);

const LectureFigure = ({ figure }: { figure: NonNullable<CourseSection["figure"]> }) => {
  const common = {
    className: "h-auto w-full",
    viewBox: "0 0 520 260",
    role: "img",
    "aria-label": figure.caption,
  };

  const axis = (
    <>
      <line x1="70" y1="130" x2="460" y2="130" stroke="currentColor" strokeWidth="1.5" />
      <line x1="260" y1="220" x2="260" y2="35" stroke="currentColor" strokeWidth="1.5" />
      <text x="468" y="134" className="fill-current text-xs">x</text>
      <text x="265" y="30" className="fill-current text-xs">y</text>
    </>
  );

  const arrowDefs = (
    <defs>
      <marker id={`arrow-${figure.type}`} markerHeight="8" markerWidth="8" orient="auto" refX="6" refY="3">
        <path d="M0,0 L0,6 L6,3 z" fill="currentColor" />
      </marker>
    </defs>
  );

  const arrow = (
    x2: number,
    y2: number,
    color: string,
    label: string,
    dashed = false,
    x1 = 260,
    y1 = 130,
  ) => (
    <>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth="4"
        strokeDasharray={dashed ? "7 7" : undefined}
        markerEnd={`url(#arrow-${figure.type})`}
      />
      <text x={x2 + 8} y={y2 - 6} fill={color} className="text-sm font-semibold">
        {label}
      </text>
    </>
  );

  const figures = {
    pivot: (
      <svg {...common}>
        <rect x="120" y="52" width="280" height="150" fill="none" stroke="currentColor" strokeOpacity="0.25" />
        {[0, 1, 2, 3].map((row) => (
          <line key={`row-${row}`} x1="120" y1={52 + row * 37.5} x2="400" y2={52 + row * 37.5} stroke="currentColor" strokeOpacity="0.2" />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((col) => (
          <line key={`col-${col}`} x1={120 + col * 40} y1="52" x2={120 + col * 40} y2="202" stroke="currentColor" strokeOpacity="0.2" />
        ))}
        <circle cx="140" cy="70" r="9" fill="#2563eb" />
        <circle cx="180" cy="107" r="9" fill="#2563eb" />
        <circle cx="260" cy="145" r="9" fill="#2563eb" />
        <text x="100" y="236" className="fill-current text-sm">Pivot positions move to the right as row echelon form progresses.</text>
      </svg>
    ),
    orthogonal: (
      <svg {...common}>
        {arrowDefs}
        {axis}
        {arrow(365, 82, "#2563eb", "v")}
        {arrow(320, 45, "#dc2626", "Qv")}
        <path d="M330 95 A60 60 0 0 0 305 70" fill="none" stroke="#64748b" strokeWidth="2" />
        <text x="300" y="238" className="fill-current text-sm">Orthogonal matrices rotate or reflect without changing vector length.</text>
      </svg>
    ),
    eigenvectors: (
      <svg {...common}>
        {arrowDefs}
        {axis}
        {arrow(350, 95, "#2563eb", "v")}
        {arrow(430, 70, "#1d4ed8", "Av = λv", true)}
        {arrow(310, 60, "#dc2626", "w")}
        {arrow(405, 92, "#b91c1c", "Aw", true)}
        <text x="120" y="235" className="fill-current text-sm">Eigenvectors keep direction; ordinary vectors usually turn.</text>
      </svg>
    ),
    eigenlines: (
      <svg {...common}>
        {arrowDefs}
        {axis}
        <line x1="95" y1="130" x2="445" y2="130" stroke="#2563eb" strokeWidth="4" />
        <line x1="150" y1="220" x2="370" y2="40" stroke="#dc2626" strokeWidth="4" />
        {arrow(360, 130, "#1d4ed8", "eigenline")}
        {arrow(330, 73, "#b91c1c", "eigenline")}
        <text x="106" y="236" className="fill-current text-sm">An eigenvector represents an invariant direction, not just one arrow.</text>
      </svg>
    ),
    determinant: (
      <svg {...common}>
        <rect x="105" y="80" width="80" height="80" fill="#e2e8f0" stroke="#334155" strokeWidth="2" />
        <polygon points="315,75 430,95 405,185 290,165" fill="#dbeafe" stroke="#2563eb" strokeWidth="3" />
        <path d="M205 120 C240 95, 260 95, 290 120" fill="none" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-determinant)" />
        {arrowDefs}
        <text x="105" y="195" className="fill-current text-sm">unit square</text>
        <text x="292" y="215" className="fill-current text-sm">transformed area</text>
      </svg>
    ),
    eigenbasis: (
      <svg {...common}>
        {arrowDefs}
        <rect x="55" y="88" width="110" height="70" rx="12" fill="#f8fafc" stroke="#94a3b8" />
        <rect x="205" y="88" width="110" height="70" rx="12" fill="#eff6ff" stroke="#2563eb" />
        <rect x="355" y="88" width="110" height="70" rx="12" fill="#ecfdf5" stroke="#16a34a" />
        <text x="76" y="128" className="fill-current text-sm">standard basis</text>
        <text x="228" y="128" className="fill-current text-sm">eigenbasis</text>
        <text x="388" y="128" className="fill-current text-sm">scaling</text>
        <line x1="165" y1="123" x2="205" y2="123" stroke="#334155" strokeWidth="3" markerEnd="url(#arrow-eigenbasis)" />
        <line x1="315" y1="123" x2="355" y2="123" stroke="#334155" strokeWidth="3" markerEnd="url(#arrow-eigenbasis)" />
        <text x="176" y="105" className="fill-current text-xs">P inverse</text>
        <text x="330" y="105" className="fill-current text-xs">D</text>
        <text x="170" y="210" className="fill-current text-sm">A = P D P inverse: change basis, scale, change back.</text>
      </svg>
    ),
    power: (
      <svg {...common}>
        {arrowDefs}
        {axis}
        <polyline points="285,70 300,86 315,100 330,111 343,119 354,125 364,129" fill="none" stroke="#2563eb" strokeWidth="3" />
        <circle cx="285" cy="70" r="5" fill="#2563eb" />
        <circle cx="300" cy="86" r="5" fill="#2563eb" />
        <circle cx="315" cy="100" r="5" fill="#2563eb" />
        <circle cx="330" cy="111" r="5" fill="#2563eb" />
        <line x1="210" y1="170" x2="420" y2="100" stroke="#dc2626" strokeWidth="4" strokeDasharray="8 8" />
        <text x="365" y="97" fill="#dc2626" className="text-sm font-semibold">dominant eigenvector</text>
        <text x="110" y="236" className="fill-current text-sm">Repeated multiplication often aligns vectors with the dominant eigenvector.</text>
      </svg>
    ),
    rotation: (
      <svg {...common}>
        {arrowDefs}
        {axis}
        {arrow(360, 100, "#2563eb", "v")}
        {arrow(335, 62, "#dc2626", "R theta v")}
        <path d="M322 112 A60 60 0 0 0 305 78" fill="none" stroke="#64748b" strokeWidth="2" />
        <text x="316" y="92" className="fill-current text-sm">theta</text>
        <text x="105" y="236" className="fill-current text-sm">Pure rotation has complex eigenvalues unless the angle is 0 or pi.</text>
      </svg>
    ),
    symmetric: (
      <svg {...common}>
        {arrowDefs}
        {axis}
        <line x1="115" y1="190" x2="415" y2="70" stroke="#2563eb" strokeWidth="4" />
        <line x1="165" y1="55" x2="355" y2="205" stroke="#dc2626" strokeWidth="4" />
        <path d="M247 133 L263 113 L281 127" fill="none" stroke="#334155" strokeWidth="2" />
        <text x="120" y="232" className="fill-current text-sm">Symmetric matrices stretch along perpendicular eigen-directions.</text>
      </svg>
    ),
  };

  return (
    <figure className="my-6 rounded-xl border border-border bg-muted/40 p-4">
      <div className="mx-auto max-w-2xl text-primary">{figures[figure.type]}</div>
      <figcaption className="mt-3 text-center text-sm text-muted-foreground">
        {figure.caption}
      </figcaption>
    </figure>
  );
};

const CourseReader = () => {
  const { chapterSlug } = useParams();
  const activeSlug = chapterSlug ?? "preface";
  const chapterIndex = courseChapters.findIndex(
    (chapter) => chapter.slug === activeSlug,
  );

  if (chapterIndex === -1) {
    return <Navigate to={courseBasePath} replace />;
  }

  const chapter = courseChapters[chapterIndex];
  const previousChapter = courseChapters[chapterIndex - 1];
  const nextChapter = courseChapters[chapterIndex + 1];

  return (
    <section className="bg-background">
      <div className="border-b border-border bg-gradient-to-br from-primary via-primary to-slate-700 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-foreground/70">
            Courses
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {courseInfo.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-primary-foreground/80">
            {courseInfo.subtitle}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-primary-foreground/80">
            <span>{courseInfo.instructor}</span>
            <span aria-hidden="true">/</span>
            <span>{courseInfo.affiliation}</span>
          </div>
          {/* <a
            href={courseInfo.pdfUrl}
            className="mt-8 inline-flex rounded-md bg-white px-5 py-3 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-white/90"
            target="_blank"
            rel="noreferrer"
          >
            Download course PDF
          </a> */}
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:px-8">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-primary">
              Table of Contents
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Read this course like a compact online book, one chapter at a
              time.
            </p>
            <nav className="mt-5 space-y-3" aria-label="Course chapters">
              {courseChapters.map((courseChapter) => (
                <ChapterCard
                  key={courseChapter.slug}
                  chapter={courseChapter}
                  isActive={courseChapter.slug === chapter.slug}
                />
              ))}
            </nav>
          </div>
        </aside>

        <article className="min-w-0">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {chapter.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-primary sm:text-4xl">
              {chapter.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              {chapter.summary}
            </p>

            <div className="mt-10 space-y-10">
              {chapter.sections.map((section) => (
                <section key={section.heading} className="prose">
                  <h3>{section.heading}</h3>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{formatMathText(paragraph)}</p>
                  ))}
                  {section.bullets && (
                    <ul className="mb-6 list-disc space-y-2 pl-6 text-foreground">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{formatMathText(bullet)}</li>
                      ))}
                    </ul>
                  )}
                  {section.equations?.map((equation) => (
                    <div
                      key={equation}
                      className="my-4 overflow-x-auto rounded-lg border border-border bg-muted px-4 py-3 text-center font-mono text-sm text-primary"
                    >
                      {formatMathText(equation)}
                    </div>
                  ))}
                  {section.table && (
                    <div className="my-6 overflow-x-auto rounded-xl border border-border">
                      <table className="w-full border-collapse text-left text-sm">
                        <thead className="bg-muted text-primary">
                          <tr>
                            {section.table.headers.map((header) => (
                              <th key={header} className="px-4 py-3 font-semibold">
                                {formatMathText(header)}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row) => (
                            <tr key={row.join("-")} className="border-t border-border">
                              {row.map((cell) => (
                                <td key={cell} className="px-4 py-3 align-top">
                                  {formatMathText(cell)}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  {section.figure && <LectureFigure figure={section.figure} />}
                  {section.code?.map((block) => (
                    <pre
                      key={block.content}
                      className="overflow-x-auto rounded-xl bg-slate-950 p-5 text-sm leading-6 text-slate-100"
                    >
                      <code>{block.content}</code>
                    </pre>
                  ))}
                </section>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
              {previousChapter ? (
                <Link
                  to={getChapterPath(previousChapter.slug)}
                  className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  Previous: {previousChapter.title}
                </Link>
              ) : (
                <span />
              )}

              {nextChapter ? (
                <Link
                  to={getChapterPath(nextChapter.slug)}
                  className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Next Chapter: {nextChapter.title}
                </Link>
              ) : (
                <Link
                  to={courseBasePath}
                  className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Back to Preface
                </Link>
              )}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default CourseReader;
