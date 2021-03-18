class FetchCalls {
    constructor () {
    this.baseURL = "http://localhost:3000/"
    this.userURL = `${this.baseURL}/users`
    this.goalURL = `${this.baseURL}/goals`
    }


    //this will create or find a user
    async findOrCreateUser(e){
        const resp = await fetch(this.userURL, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(
          {
            users: {
              name: e.target.children[1].value
            }
          })
      })
      let json = resp.json();
      return await json;
    }