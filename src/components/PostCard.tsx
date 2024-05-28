import { Show, type JSXElement } from "solid-js";

import config from "../config";

export type Props = {
  slug: string;
  title: string;
  description: string;
  image?: string | undefined;
  date: Date;
  tags: string[];
};

export default function PostCard(props: Props): JSXElement {
  return (
    <div class="flex flex-col border-2 border-gray-100 dark:border-transparent dark:bg-gray-900 rounded-lg truncate">
      <a href={`${config.site.baseUrl}/post/${props.slug}`} aria-label={props.title}>
        <div
          class="bg-sky-500/10 object-cover aspect-2 rounded-lg hover:brightness-80 transition-all bg-cover"
          style={{
            "background-image": props.image
              ? `url(${config.site.baseUrl + props.image})`
              : undefined,
          }}
        />
      </a>
      <div class="flex flex-col gap-1 p-2 truncate">
        <div class="flex truncate">
          <a
            href={`${config.site.baseUrl}/post/${props.slug}`}
            class="text-xl truncate dark:text-gray-200 transition-all hover:text-sky-500"
            aria-label={props.title}
          >
            {props.title}
          </a>
        </div>
        <div class="text-xs italic text-gray-500 dark:text-gray-400">
          {new Intl.DateTimeFormat("en", {
            dateStyle: "medium",
          }).format(props.date)}
        </div>
        <div class="mt-2 text-sm text-gray-600 dark:text-gray-300 truncate">
          {props.description}
        </div>
        <Show when={props.tags?.length > 0}>
          <ul class="mt-2 flex-wrap text-xs text-sky-800 dark:text-sky-300 flex items-center gap-2">
            {props.tags.map((tag) => (
              <li class="mb-2 transition-all hover:translate-y-[-1px] hover:brightness-90">
                <a
                  class="transition-all hover:dark:bg-sky-800/30 rounded p-2"
                  href={`${config.site.baseUrl}/tag/${tag}`}
                >
                  #{tag}
                </a>
              </li>
            ))}
          </ul>
        </Show>
      </div>
    </div>
  );
}
