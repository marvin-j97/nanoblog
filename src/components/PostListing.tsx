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
      <div class="cursor-pointer transition-all hover:bg-blue-300/30 dark:hover:bg-blue-500/15 hover:brightness-90 flex items-center gap-3 bg-gray-300/20 dark:bg-blue-900/10 px-2.5 py-2 rounded-lg">
        <Show when={props.showImage}>
          <div>
            <div
              class="bg-blue-500/10 object-cover bg-center w-[120px] h-full aspect-[1.6] rounded-lg bg-cover"
              style={{
                "background-image": props.image
                  ? `url(${config.site.baseUrl + props.image})`
                  : undefined,
              }}
            />
          </div>
        </Show>
        <div class="flex flex-col truncate">
          <div
            class="font-medium text-blue-700 dark:text-blue-300 truncate"
          >
            {props.title}
          </div>
          <div class="text-xs my-1 text-gray-500 dark:text-gray-400">
            {new Intl.DateTimeFormat("en", {
              dateStyle: "medium",
            }).format(props.date)}
          </div>
          <div class="mt-2 dark:text-gray-400 text-gray-500 text-xs truncate">{props.description}</div>
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
