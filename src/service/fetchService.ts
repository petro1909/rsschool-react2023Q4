export default async function getFetchJson(searchTerm: string) {
  let searchString = `https://swapi.dev/api/people/?page=1`;
  if (searchTerm !== null && searchTerm.trim() !== '') {
    searchString = searchString.concat(`&search=${searchTerm}`);
  }
  let fetchResult;
  try {
    const result = await fetch(searchString);
    if (!result || !result.ok) {
      console.error(result);
      return null;
    }
    fetchResult = await result.json();
  } catch (e: unknown) {
    console.error(e);
    return null;
  }
  return fetchResult;
}
