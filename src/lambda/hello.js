import { google } from "googleapis";

const CLIENT_ID =
  "128732008727-4afe4fpoth98soqpr6lb55vkb5kjdsdq.apps.googleusercontent.com";
const CLIENT_SECRET = "EZD4bYP2aNxlWA6CSA5otef6";
const REDIRECT_URL = "";

const scopes = ["https://www.googleapis.com/auth/photoslibrary.readonly "];

const oauth2client = new google.auth.OAuth2({
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
});

exports.handler = (event, context, callback) => {
  const url = oauth2client.generateAuthUrl({
    access_type: "online",
    scope: scopes
  });
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: url })
  });
};
