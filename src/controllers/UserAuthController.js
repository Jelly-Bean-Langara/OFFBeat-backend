import { OAuth2Client } from 'google-auth-library';
import url from 'url';
import UserModel from '../models/UserModel';
import keys from '../oauth2.keys.json'

const statusSuccess = "success";
const statusFailed = "failed";

// create an oAuth client to authorize the API call.
const oAuth2Client = new OAuth2Client(
  keys.web.client_id,
  keys.web.client_secret,
  keys.web.redirect_uris[0]
);


class UserAuthController {

  /* ------- ------- -------- --------------- auth --------- ---------- -- ------------ --- -------- ---- */
  /* returns a URL to land a google authorization page */
  async auth(request, response) {

    const scopes = [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ];

    // create an url to get Authorization Grant Code from user
    const authorizeUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: scopes,
      prompt: 'consent'
    });

    // open this url to go on google consent page, authorize there to get Authorization Grant Code,
    // return the Auth code to backend.
    return response.json({
      url: authorizeUrl
    })

  }

  /* ------- ------- -------- -------------- oauth2callback --------- ---------- -- ------------ --- -------- ----- */
  /* 1. get AUTH GRANT CODE from user
     2. generate tokens from it
     3. create user account if does not exists  */
  async oauth2callback(request, response) {
    console.log('hit')
    async function main() {
      const oAuth2Client = await getAuthenticatedClient();
      console.log("UserAuthController -> main -> oAuth2Client", oAuth2Client)

      const refreshToken = oAuth2Client.credentials.refresh_token;
      console.log("main -> refreshToken", refreshToken)

      const url = "https://www.googleapis.com/userinfo/v2/me"

      const resource = await oAuth2Client.request({ url });
      console.log("main -> res", resource)

      try {

        let user_name, user_email, user_id, user_picture;

        user_id = resource.data.id;
        user_name = resource.data.name;
        user_email = resource.data.email;
        user_picture = resource.data.picture;

        // check if user account exists, if not create user account
        const ifUserExist = await UserModel.checkUserAccount(resource.data.id);
        if (ifUserExist == 0) {
          // create user
          const userData = {
            id: user_id,
            name: user_name,
            email: user_email,
            picture: user_picture,
            refresh_token: refreshToken
          };
          await UserModel.createUser(userData);
          console.log('account created');
        } else {
          const results = await UserModel.getUser(resource.data.id);
          user_name = results[0].user_name;
          user_email = results[0].user_email;
          user_picture = results[0].user_picture;
        }

        // save refresh token
        const tokenData = {
          user_id: resource.data.id,
          token: refreshToken,
        };
        await UserModel.saveToken(tokenData);
        console.log('token saved');

        // sending data along with url directing user back to app
        response.redirect(`offbeat://Profile/?refresh_token=${refreshToken}&user_id=${user_id}&name=${user_name}&email=${user_email}&user_picture=${user_picture}`);

      } catch (err) {
        return response.status(500).json({ error: err });
      }

    }

    function getAuthenticatedClient() {
      return new Promise(async (resolve, reject) => {
        
        try {
          if (request.url.indexOf('/oauth2callback') > -1) {

            // acquire the code from the querystring
            const querystring = new url.URL(request.url, 'https://www.offbeat-app.ca/oauth2callback').searchParams;
            const authGrantCode = querystring.get('code');

            //  Authentication successful!

            // Now that we have the code, use that to acquire tokens.
            // token contains access and refresh token
            const token = await oAuth2Client.getToken(authGrantCode);

            // Make sure to set the credentials on the OAuth2 client.
            oAuth2Client.setCredentials(token.tokens);

            // Tokens acquired

            resolve(oAuth2Client);
          }
        } catch (error) {
          reject(error);
        }
      })
    }

    main().catch(console.error);

  }

}

export default new UserAuthController();
