// ASYNC AND AWAIT

const apiURL = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

async function getTop100Campers() {
  const response = await fetch(apiURL);
  const json = await response.json();

  console.log(json[0]);
}

// function getTop100Campers() {
//   fetch(apiURL)
//     .then(response => response.json)
//     .then(json => {
//       console.log(json[0]);
//     })
//     .catch(error => {
//       console.log('failed');
//     });
// }

getTop100Campers();

// -------

function resolveAfter3Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 3000);
  });
}

resolveAfter3Seconds().then(data => {
  console.log(data);
});

async function getAsyncData() {
  const result = await resolveAfter3Seconds();
  console.log(result);
}

getAsyncData();
