export function getPagesCount(totalCount: number, pageSize: number) {
  return Math.ceil(totalCount / pageSize);
}

export function getPageArray(pageCount: number) {
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  return pages;
}
