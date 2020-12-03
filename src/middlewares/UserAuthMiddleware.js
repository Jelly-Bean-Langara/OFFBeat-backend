import * as yup from 'yup';
import superagent from 'superagent';
import UserModel from '../models/UserModel';

const statusSuccess = 'success';
const statusFailed = 'failed';

export default async (request, response, next) => {
  const schema = yup.object().shape({
    token: yup.string().required('something missing!'),
    userId: yup.string().required('something missing!'),
  });

  // validation
  try {
    await schema.validate(request.body);
  } catch (err) {
    return response.status(400).json({ error: 'Please check if you give all the mandatory information' });
  }

  try {
    // generate new access token from refresh token
    superagent
      .post('https://accounts.google.com/o/oauth2/token')
      .send({
        client_id: '49440493504-6ie45lmrp564knu0kufmm4pkbths0eed.apps.googleusercontent.com',
        client_secret: 'I86RhPcq134jNSEgWJnV7lkC',
        refresh_token: request.body.token,
        grant_type: 'refresh_token',
      })
      .then((data) => {
        const { access_token } = JSON.parse(data.text);

        // get user id (sub) from access code
        superagent.get(`https://oauth2.googleapis.com/tokeninfo?access_token=${access_token}`)
          .then(async (data) => {
            const user_id = JSON.parse(data.text).sub;
            console.log('user_id', user_id);
            // check if user exist in database (has account)
            const isUserExist = await UserModel.checkUserAccount(user_id);
            if (isUserExist == 0) {
              // response.json("either user account does not exist, or invalid token");
              return response.status(500).json('either user account does not exist, or invalid token');
            }
            if (user_id === request.body.user_id) {
              console.log('user authenticated!');
              next();
            } else {
              // response.json("authentication failed!");
              console.log('authentication failed!');
              return response.status(500).json('authentication failed!');
            }
          }).catch((err) => {
            console.log('authentication failed, invalid grant!');
            return response.status(500).json(err);
          });
      }).catch((err) => {
        console.log('authentication failed, invalid grant!');
        return response.status(500).json(err);
      });
  } catch (error) {
    console.log('something went wrong!');
    return response.status(500).json(err);
  }
};
