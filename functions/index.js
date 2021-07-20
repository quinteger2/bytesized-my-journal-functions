const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});


exports.places_root = functions.https.onRequest((req, res) => {
    functions.logger.info("places_root", {structuredData: true});
    let api_key = 'AIzaSyAbjVN9byumQ2V44-rErf8CE6TyPq1WcSw'
    let url = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' + req.query.input + '&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=' + api_key
    //console.log(url);

    // Make a request for a user with a given ID
    axios.get(url)
        .then(function (response) {
            // handle success
            res.send(response.data)
        })
        .catch(function (error) {
            // handle error
            res.send(error);
        })
        .then(function () {
            // always executed
        });
  });