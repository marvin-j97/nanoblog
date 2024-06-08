import { Switch, type JSXElement, Match, Show } from "solid-js";

import { type Props } from "./PostCard";
import PostCardGrid from "./PostCardGrid";
import config from "../config";

export type PostListStyle = "cards" | "compact_list" | "list";

function CompactPostListItem(props: Props & { showImage: boolean }): JSXElement {
  return (
    <div class="flex gap-4">
      <Show when={props.showImage}>
        <a
          href={`${config.site.baseUrl}/post/${props.slug}`}
          class="shrink-0 hover:brightness-80 transition-all text-lg font-medium text-sky-700 dark:text-sky-300 truncate"
          aria-label={props.title}
        >
          <div
            class="bg-sky-500/10 object-cover w-[100px] h-full aspect-2 rounded-lg hover:brightness-80 transition-all bg-cover"
            style={{
              "background-image": props.image
                ? `url(${config.site.baseUrl + props.image})`
                : undefined,
            }}
          />
        </a>
      </Show>
      <div class="truncate">
        <a
          href={`${config.site.baseUrl}/post/${props.slug}`}
          class="hover:brightness-80 transition-all text-lg font-medium text-sky-700 dark:text-sky-300 truncate"
          aria-label={props.title}
        >
          {props.title}
        </a>
        <div class="text-sm">
          {new Intl.DateTimeFormat("en", {
            dateStyle: "medium",
          }).format(props.date)}
        </div>
        <div class="dark:text-gray-300 truncate">{props.description}</div>
      </div>
    </div>
  );
}

export default function PostListing(props: {
  items: Props[];
  listStyle: PostListStyle;
}): JSXElement {
  return (
    <Switch>
      <Match when={props.listStyle === "cards"}>
        <PostCardGrid items={props.items} />
      </Match>
      <Match when={true}>
        <div class="flex flex-col gap-5">
          {props.items.map((post) => (
            <CompactPostListItem
              date={post.date}
              description={post.description}
              slug={post.slug}
              title={post.title}
              image={props.listStyle === "list" ? post.image : undefined}
              showImage={props.listStyle === "list"}
              tags={post.tags}
            />
          ))}
        </div>
      </Match>
    </Switch>
  );
}
