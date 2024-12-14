
const {GoogleAuth} = require("google-auth-library");

const axios = require('axios');


module.exports = new class common {

    async GetAccessToken(){

        const auth = new GoogleAuth({
            keyFile: './jwt.keys.json',
            scopes:'https://www.googleapis.com/auth/firebase.messaging',
        });

        const client = await auth.getClient();
        const accessToken = await client.getAccessToken();

        return accessToken.token;
    }

    async SendNotif(body){

        const token = await this.GetAccessToken();

        const url = 'https://fcm.googleapis.com/v1/projects/navid-noti2/messages:send';

        const message = {
            "message": {
                // "token": _tokenEmulator,
                "topic": body.topic,
                "notification": {},
                "data": {
                    "title":body.title,
                    "body":body.body
                }
            }
        };

        // const message = {
        //     "message": {
        //         // "token": _tokenEmulator,
        //         "topic": body.topic,
        //         "notification": {
        //             "title":body.title,
        //             "body":body.body
        //         }
        //     }
        // };

        const headers = {
            'Authorization':`Bearer ${token}`,
            'Content-type':'application/json'
        };

        var response = await axios.post(url,message,{headers});

        let data = response.data;

        console.log('Data From Notif => ',data);

        return data;

    }

}

