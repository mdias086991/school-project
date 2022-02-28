export class Token {

  makeTokenUser(user: string, pass: string) {
    return `${user}${pass}${user}${pass}${user}${pass}${user}${pass}${user}${pass}${user}${pass}`
  }

}
