import axios from 'axios'
import * as shared from '../scripts/shared'

export default {
  name: 'Setup',
  created() {},
  data() {
    return {
      coords: shared.coords
    }
  },
  methods: {
    getLocation() {
      try {
        var vue = this;
        navigator.geolocation.getCurrentPosition(function (loc) {
          vue.coords.lat = loc.coords.latitude;
          vue.coords.long = loc.coords.longitude;
          // OneSignal.sendTag("latitude", settings.locationLat);
          // OneSignal.sendTag("longitude", settings.locationlng);
          vue.getLocationName();
        })
      } catch (e) {
        console.log(e);
      }
    },
    openMap() {
      var url = `https://www.google.ca/maps/place/${this.coords.name}/@${this.coords.lat},${this.coords.long},9z`;
      window.open(url, 'map');
    },
    getLocationName() {
      var vue = this;
      var url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.coords.lat},${this.coords.long}`;
      axios.get(url)
        .then(function (response) {
          var results = response.data.results;
          var location = '';
          // get longest locality
          for (var r = 0; r < results.length; r++) {
            var components = results[r].address_components;
            for (var i = 0; i < components.length; i++) {
              var component = components[i];
            //   console.log(component)
              if (component.types.includes('locality')) { //$.inArray('political', component.types)!=-1 &&
                if (component.short_name.length > location.length) {
                  location = component.short_name;
                }
              }
            }
          }

          //OneSignal.sendTag("location", location);
          //OneSignal.sendTag("zoneName", moment.tz.guess());
          vue.coords.name = location;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
