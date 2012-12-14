/**
 @module resources/Recordings
 The Twilio "Recordings" Resource.
 */
var generate = require('./generate');

module.exports = function (client, accountSid) {
    var baseResourceUrl = '/Accounts/' + accountSid + '/Recordings';

    //Instance requests
    function Recordings(sid) {
        var resourceApi = {
            get:generate(client, 'GET', baseResourceUrl + '/' + sid),
            delete:generate(client, 'DELETE', baseResourceUrl + '/' + sid)
        };

        //Add in subresources
        resourceApi.transcriptions = {
            get: generate(client, 'GET', baseResourceUrl + '/' + sid + '/Transcriptions')
        };

        return resourceApi;
    }

    //List requests
    Recordings.get = generate(client, 'GET', baseResourceUrl);

    return Recordings;
};