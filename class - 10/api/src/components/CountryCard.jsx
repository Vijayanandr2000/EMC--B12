function CountryCard({ name, flag, population, region, capital }) {
  return (
    <div className="country-card">
      <img src={flag} alt={`${name} flag`} className="country-flag" />
      <h2>{name}</h2>
      <p>
        <strong>capital: </strong> {capital}
      </p>
      <p>
        <strong>region: </strong> {region}
      </p>
      <p>
        <strong>population: </strong>
        {population}
      </p>
    </div>
  );
}

export default CountryCard;
