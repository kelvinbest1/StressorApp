class User {
    constructor(user){
        this.name = user.name
        this.id = user.id
    }

     //This will login the user into the site
     static login(){
        let username = document.getElementById('user-form');
        username.addEventListener("submit" , function(e){ 
            e.preventDefault();
            if (e.target.children[1].value != "") {
                fetchCall.findOrCreateUser(e)
                .then(user => {
                    let newUser = new User(user);
                    username.reset();
                    newUser.displayUserStressors();
                })
            }
        })
    }   

    //This will get all the user's stressors and display them
    displayUserStressors(){
        Stressor.stressorForm(this.name);
        fetchCall.getAllStressors()
        .then(stressors => {
            for (let i=0; i < stressors.length; i++){
                if (this.id == stressors[i].user_id){
                    let personalStressor = new Stressor(stressors[i]);
                    personalStressor.renderStressors();
                }
            }
        })
        Stressor.newStressor(this.id);
    }
}
    
