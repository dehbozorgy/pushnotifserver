const usermodel = require('./../modeles/user');

const common = require('./../controllers/common');

module.exports = new class userControl {

    async register(req,res){

        try {

            const {name,password,avatar,token} = await usermodel({
                'name':req.body.name,
                'password':req.body.password,
                'avatar':req.body.avatar,
                'token':req.body.token,
            }).save();

            res.json({
                'data':{name,password,avatar,token},
                'success':true
            });

        }
        catch (e) {

            res.json({
                'data':e,
                'success':false
            });

        }

    }

    async getAllUser(req,res){

        try {

            const AllUser = await usermodel.find({},'-_id -id -__v -password -createdAt -updatedAt');

            res.json({
                'data':AllUser,
                'success':true
            });

        }
        catch (e) {

            res.json({
                'data':e,
                'success':false
            });

        }

    }

    async getToken(req,res){

        const token = await common.GetAccessToken();

        res.send(`Token => ${token}`);

    }

    async SendNotif(req,res){

        let body = req.body;

        // let body = {
        //   'topic':  'women_football',
        //   'title':  'women_football',
        //   'body':  'women_football',
        // };

        let response = await common.SendNotif(body);

        res.send(`Response => ${response.name}`);

    }

}