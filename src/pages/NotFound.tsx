import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/use-page-meta";

const NotFound = () => {
  usePageMeta("Page not found");

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The page you are looking for does not exist or has moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
        >
          Return to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
