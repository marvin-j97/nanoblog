import { Switch, type JSXElement, Match, Show } from "solid-js";

import { type Props } from "./PostCard";
import PostCardGrid from "./PostCardGrid";
import config from "../config";

export type PostListStyle = "cards" | "compact_list" | "list";

function CompactPostListItem(props: Props & { showImage: boolean }): JSXElement {
  return (
    <a
      href={`${config.site.baseUrl}/post/${props.slug}`}
      aria-label={props.title}
    >
      <div class="cursor-pointer transition-all dark:hover:bg-blue-500/15 hover:brightness-90 flex gap-3 dark:bg-blue-900/10 p-2.5 rounded-lg">
        <Show when={props.showImage}>
          <div>
            <div
              class="bg-blue-500/10 object-cover bg-center w-[100px] h-full aspect-2 rounded-lg bg-cover"
              style={{
                "background-image": props.image
                  ? `url(${config.site.baseUrl + props.image})`
                  : undefined,
              }}
            />
          </div>
        </Show>
        <div class="truncate">
          <div
            class="text-lg font-medium text-blue-700 dark:text-blue-300 truncate"
          >
            {props.title}
          </div>
          <div class="text-sm mb-1">
            {new Intl.DateTimeFormat("en", {
              dateStyle: "medium",
            }).format(props.date)}
          </div>
          <div class="dark:text-gray-300 text-sm truncate">{props.description}</div>
        </div>
      </div>
    </a>
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
        <div class="flex flex-col gap-2">
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
