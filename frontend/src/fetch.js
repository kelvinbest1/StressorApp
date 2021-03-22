class FetchCalls {
    constructor () {
    this.baseURL = "http://localhost:3000/api/v1"
    this.userURL = `${this.baseURL}/users`
    this.stressorURL = `${this.baseURL}/stressors`
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
          stressors: {
            title: e.target.children[0].value,
            overcamed: false,
            user_id: userid
          }
        })
    })
    let json = resp.json();
    return await json;
  }

   //This will delete a stressor
   async deleteStressor(e) {
    fetch(`${this.stressorURL}/${e.target.id}`, {
    method: "DELETE"
})
}

 //This will overcome a stressor
 async overcameStressor(e){
    const resp = await fetch(`${this.stressorURL}/${e.target.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(
        {
          stressors: {
            overcamed: true
          }
        })
    })
    let json = resp.json(); 
    return await json;
  }
}
