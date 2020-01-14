// OBJECT LITERAL

function formatAddress(address) {
  const {city, country} = address;
  const newAddress = {city, country, continent: 'Asia'};

  console.log(
    `${newAddress.city}, ${newAddress.country}, ${newAddress.continent}`
  );
}

formatAddress({city: 'Cebu', country: 'Philippines'});
