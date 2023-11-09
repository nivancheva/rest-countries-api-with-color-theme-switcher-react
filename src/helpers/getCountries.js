export default async function getCountries(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const countryData = await response.json();
        console.log(countryData)
        return countryData;
      }
      else {
        return [];
      }

    } catch {
      return [];
    }
}