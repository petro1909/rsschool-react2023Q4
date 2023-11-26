import { TVShowResultsConfig } from '@app_types/api/apiResults';
import { describe, expect, it } from 'vitest';
import { usePagination } from './usePagination';

describe('usePagination hook', () => {
  it('should return correct pages array and total pages count', () => {
    const expectedPagesCount = 11;
    const expectedPagesArray = [1, 2, 3, 0, 11];
    const config: TVShowResultsConfig = { totalCount: 105, currentPage: 1, pageSize: 10 };
    const [pageNumberArray, pagesCount] = usePagination(config);
    expect(pageNumberArray).toEqual(expectedPagesArray);
    expect(pagesCount).toEqual(expectedPagesCount);
  });
});
