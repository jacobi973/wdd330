// export async function getJSON(url) {
//     const response = await fetch(url);
//     return response.json();
// }

// // export async function getLocation(options) {
// //     console.log('inside')
// //     return navigator.geolocation.getCurrentPosition();
// //     // return new Promise(function(resolve, reject) {
// //     //     navigator.geolocation.getCurrentPosition(resolve, reject, options);
// //     // });
// // };

// export const getLocation = async () => {
//     console.log('inside')
//     const pos = await new Promise((resolve, reject) => {
//       navigator.geolocation.getCurrentPosition(resolve, reject);
//     });

//     return {
//       long: pos.coords.longitude,
//       lat: pos.coords.latitude,
//     };
// };

// // (async() => {
// //     console.log('before start');
  
// //     const variable = await getJSON('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02');
    
// //     console.log('after start', variable);
// //   })();


export function getJSON(url) {
    return fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}
       

export const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};