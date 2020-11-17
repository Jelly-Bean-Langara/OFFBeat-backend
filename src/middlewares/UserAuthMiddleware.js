import * as yup from 'yup';
import UserModel from '../models/UserModel';
import superagent from 'superagent';

const statusSuccess = "success";
const statusFailed = "failed";

export default async (request, response, next) => {


  const schema = yup.object().shape({
    token: yup.string().required('something missing!'),
    user_id: yup.string().required('something missing!'),
  })

  // validation
  try {
    await schema.validate(request.body);
  } catch (err) {
    return response.json({ status: statusFailed, error: { code: err.name, message: err.message } })
  }

  try {
    // generate new access token from refresh token
    superagent
      .post("https://accounts.google.com/o/oauth2/token")
      .send({
        "client_id": "49440493504-6ie45lmrp564knu0kufmm4pkbths0eed.apps.googleusercontent.com",
        "client_secret": "I86RhPcq134jNSEgWJnV7lkC",
        "refresh_token": request.body.token,
        "grant_type": "refresh_token",
      })
      .then(data => {
        // console.log("data", data)

        const access_token = JSON.parse(data.text).access_token

        // get user id (sub) from access code
        superagent.get(`https://oauth2.googleapis.com/tokeninfo?access_token=${access_token}`)
          .then(async data => {
            const user_id = JSON.parse(data.text).sub
            console.log("user_id", user_id)
            // check if user exist in database (has account)
            const isUserExist = await UserModel.checkUserAccount(user_id);
            if (isUserExist == 0) {
              response.json("either user account does not exist, or invalid token");
            } else {
              if (user_id === request.body.user_id) {
                console.log("user authenticated!");
                next();
              } else {
                response.json("authentication failed!");
              }
            }

          }).catch(err => {
            console.log("data ========> ", err)
            response.json("authentication failed, invalid grant!")
          });

      }).catch(err => {
        console.log("data ========> ", err)
        response.json("authentication failed, invalid grant!")
      });

  } catch (error) {
    console.log(error);
    request.send("something went wrong!")
  }

};
