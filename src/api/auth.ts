export default class Auth {
  channelId: string;
  clientId: string;
  token: string;
  userId: string;

  constructor(authData: Auth) {
    Object.assign(this, authData);
  }
}
