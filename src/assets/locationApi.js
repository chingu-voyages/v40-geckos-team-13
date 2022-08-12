    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '6f54a6f947mshd6b43d261752ac0p1a7ff8jsn6a24762e2c00',
        'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
      }
    };
    export const getLocation = (location) => {
    fetch(`https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname?name=${location}`, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
    }