import Fuse from "fuse.js";
import { createSignal, onMount, type JSXElement } from "solid-js";

import config from "../config";
import PostListing from "./PostListing";

type Props = {
  index: any;
  items: any[];
};

export default function Search(props: Props): JSXElement {
  let fuse: Fuse<any>;

  onMount(() => {
    fuse = new Fuse(
      props.items,
      {
        keys: ["slug", "title", "description", "body"],
      },
      Fuse.parseIndex(props.index),
    );
  });

  const [query, setQuery] = createSignal("");

  const posts = () => {
    const q = query();
    if (!q) {
      return props.items.slice(0, 20);
    }
    return fuse?.search(q)?.map((x) => x.item) ?? [];
  };

  return (
    <div class="flex flex-col gap-5">
      <input
        type="text"
        class="border-2 dark:border-transparent dark:bg-gray-800 px-4 py-3 rounded-lg w-full outline-none focus:border-sky-500 transition-all dark:text-gray-200"
        placeholder="Enter search query"
        value={query()}
        onInput={(ev) => setQuery(ev.currentTarget.value)}
      />
      <PostListing items={posts()} listStyle={config.layout.postListStyle} />
    </div>
  );
}
