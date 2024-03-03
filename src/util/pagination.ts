export function createPagination(total: number, pageSize: number) {
  return {
    pageCount: Math.ceil(total / pageSize),
  };
}

export function getPage<T>(items: T[], page: number, pageSize: number): T[] {
  return items.slice(page * pageSize, page * pageSize + pageSize);
}

export function getPossiblePages(pageCount: number): number[] {
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return pages;
}
