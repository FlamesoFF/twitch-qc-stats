export default class Auth {
  channelId!: string;
  clientId!: string;
  token!: string;
  userId!: string;

  constructor(authData: Auth) {
    ({
      channelId: this.channelId,
      clientId: this.clientId,
      userId: this.userId,
      token: this.token
    } = authData);
  }
}
