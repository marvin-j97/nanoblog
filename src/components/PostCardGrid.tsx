import { For, type JSXElement } from "solid-js";

import PostCard, { type Props } from "./PostCard";

export default function PostCardGrid(props: { items: Props[] }): JSXElement {
  return (
    <div class="grid sm:grid-cols-2 gap-3">
      <For each={props.items}>{(post) => <PostCard {...post} />}</For>
    </div>
  );
}
