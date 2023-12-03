import { ApiCountries } from '@app_types/apiCountries';

export async function getCountriesNames(): Promise<string[]> {
  const response = await fetch('https://restcountries.com/v3.1/all?fields=name');
  const countries: ApiCountries[] = await response.json();
  return countries.map((country) => country.name.common);
}
