class FetchCalls {
    constructor () {
    this.baseURL = "http://localhost:3000/"
    this.userURL = `${this.baseURL}/users`
    this.goalURL = `${this.baseURL}/stressors`
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

      //this will get all the stressors in the database
      async getAllStressors(){
        const resp = await fetch(this.stressorURL);
        let json = resp.json();
        return await json;
    }
}


  //this will create a new stressor
  async createStressor(e, userid){
    const resp = await fetch(this.stressorURL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(
        {
          goals: {
            title: e.target.children[0].value,
            completed: false,
            user_id: userid
          }
        })
    })
    let json = resp.json();
    return await json;
  }