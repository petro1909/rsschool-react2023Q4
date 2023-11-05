export function usePagination(
  totalCount: number,
  currentPage: number,
  pageSize: number
): [number[], number] {
  function getPageArray(pageCount: number, startNumber: number): number[] {
    return Array.from({ length: pageCount }, (_, idx) => idx + startNumber);
  }
  const pagesCount = Math.ceil(totalCount / pageSize);
  let pageNumberArray: number[] = [];
  const pageLineNumber = 3;
  if (pagesCount <= pageLineNumber) {
    pageNumberArray = getPageArray(pagesCount, 1);
  } else {
    if (currentPage < pageLineNumber) {
      pageNumberArray.push(...getPageArray(pageLineNumber, 1));
      pageNumberArray.push(0);
      pageNumberArray.push(pagesCount);
    } else if (currentPage > pagesCount - pageLineNumber + 1) {
      pageNumberArray.push(1);
      pageNumberArray.push(0);
      pageNumberArray.push(...getPageArray(pageLineNumber, pagesCount - pageLineNumber + 1));
    } else {
      pageNumberArray.push(1);
      pageNumberArray.push(0);
      pageNumberArray.push(...getPageArray(pageLineNumber, currentPage - 1));
      pageNumberArray.push(0);
      pageNumberArray.push(pagesCount);
    }
  }
  return [pageNumberArray, pagesCount];
}
