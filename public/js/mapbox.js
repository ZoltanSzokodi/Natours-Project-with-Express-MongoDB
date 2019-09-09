/* eslint-disable */

const locations = JSON.parse(document.getElementById('map').dataset.locations);

mapboxgl.accessToken = 'pk.eyJ1Ijoiem9sdGFuLXN6b2tvZGkiLCJhIjoiY2swYzMzNHFwMHh0MTNsbWR6bmJ4cTN1dCJ9.I4WCwABwT4nHGvy7Z0PgMg';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/zoltan-szokodi/ck0c39by825iq1csemxtjmtra',
  scrollZoom: false
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
  // Create marker
  const el = document.createElement('div');
  el.className = 'marker';

  // Add marker
  new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
    .setLngLat(loc.coordinates)
    .addTo(map);

  // Add popup
  new mapboxgl.Popup({
      offset: 30
    })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`).addTo(map);

  // Exend map bounds to include current location
  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 150,
    left: 100,
    right: 100
  }
});