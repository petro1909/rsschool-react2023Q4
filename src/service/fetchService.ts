export default async function getFetchJson(path: string) {
  let fetchResult;
  try {
    const result = await fetch(path);
    if (!result || !result.ok) {
      console.error(result);
      return [];
    }
    fetchResult = await result.json();
  } catch (e: unknown) {
    console.error(e);
    return [];
  }
  return fetchResult;
}
