export const convertCountryDTO = (countries) => {
  return countries.map((country) => {
    return {
      name: country.name.common ?? "",
      flag: country.flags.png ?? "",
      population: country.population ?? 0,
      region: country.region ?? "",
      capital: country.capital?.[0] ?? "NA",
    };
  });
};
