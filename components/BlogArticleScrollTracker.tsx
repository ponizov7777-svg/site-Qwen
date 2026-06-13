"use client";

import { useEffect } from "react";
import type { PageType } from "../lib/metrics";
import { initScrollDepthTracking } from "../lib/metrics-content";

type Props = {
  pageType: PageType;
  pageSlug: string;
};

export default function BlogArticleScrollTracker({ pageType, pageSlug }: Props) {
  useEffect(() => {
    return initScrollDepthTracking({
      page_type: pageType,
      page_slug: pageSlug,
    });
  }, [pageType, pageSlug]);

  return null;
}
