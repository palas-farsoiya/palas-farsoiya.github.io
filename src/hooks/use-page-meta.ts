import { useEffect } from "react";
import { defaultDescription, formatTitle } from "@/data/routes";

/** Sets the document title and meta description for the current page. */
export const usePageMeta = (title: string, description = defaultDescription) => {
  useEffect(() => {
    document.title = formatTitle(title);
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
  }, [title, description]);
};
