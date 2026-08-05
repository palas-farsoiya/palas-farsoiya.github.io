import { Link, Navigate, useParams } from "react-router-dom";
import {
  courseBasePath,
  courseChapters,
  courseInfo,
  type CourseChapter,
} from "./courseData";

const getChapterPath = (slug: string) =>
  slug === "preface" ? courseBasePath : `${courseBasePath}/${slug}`;

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
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul className="mb-6 list-disc space-y-2 pl-6 text-foreground">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
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
