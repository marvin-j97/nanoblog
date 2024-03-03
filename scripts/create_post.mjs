import slugify from "slug";
import { writeFileSync } from "node:fs";

const title = process.argv[2]?.trim();
if (!title) {
  throw new Error("Missing title");
}

const now = new Date();
const slug = slugify(title);

const text = `---
title: ${title}
slug: ${slug}
description: Your description
tags:
  - nanoblog
published_at: ${now.toISOString()}
last_modified_at: ${now.toISOString()}
---

A new blog post`;

writeFileSync(
  `src/content/blog/${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")}_${slug}.md`,
  text,
);
