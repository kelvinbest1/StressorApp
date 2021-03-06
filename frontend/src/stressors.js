class Stressor {

    static userStressors = []


    constructor(stressor){
        this.name = stressor.name
        this.id = stressor.id
        this.overcamed = stressor.overcamed
        this.user_id = stressor.user_id
        Stressor.userStressors.push(stressor)
    }

     //this will render each of the user's stressors
     renderStressors(){
        let stressorcontainer = document.querySelector(".stressors-container");
        let stressorp = document.createElement('p');
        stressorp.innerText = this.name;
        stressorp.id = `t${this.id}`;
        stressorcontainer.appendChild(stressorp);
        if (this.overcamed == true) {
            let overcameStressor = document.getElementById(`t${this.id}`);
            let overcamed = overcameStressor.innerText.strike();
            document.getElementById(`t${this.id}`).innerHTML = overcamed;
        } else {
            this.renderOvercamed();
        }
        this.renderDelete();
    }

    //This will render the overcamed button
    renderOvercamed(){
        let stressorcontainer = document.querySelector(".stressors-container");
        let userstressorform = document.createElement('form');
        let overcamedbtn = document.createElement('BUTTON');
        overcamedbtn.innerText = "Overcame";
        overcamedbtn.id = `overcame`;
        userstressorform.appendChild(overcamedbtn);
        userstressorform.id = `${this.id}`;
        stressorcontainer.appendChild(userstressorform);
        userstressorform.addEventListener('submit', this.overcameStressor.bind(this));
    }

     //This will render the overcamed button
     renderDelete(){
        let stressorcontainer = document.querySelector(".stressors-container");
        let userstressorform = document.createElement('form');
        let deletebtn = document.createElement('BUTTON');
        deletebtn.innerText = "Delete";
        deletebtn.id = `delete`;
        userstressorform.appendChild(deletebtn);
        userstressorform.id = `${this.id}`;
        stressorcontainer.appendChild(userstressorform);
        userstressorform.addEventListener('submit', this.deleteStressor.bind(this));
    }

      //This will render the form to create a new stressor
      static stressorForm(username){
        let welcome = document.getElementById('welcome');
        let question = document.getElementById('name-label');
        let nameinputter = document.getElementById('name-input');
        let namesubmit = document.getElementById('name-submitter');
        let userinputcontainer = document.getElementById('user-inputer-container');
        let stressorForm = document.createElement("FORM");
        stressorForm.setAttribute("id", "myForm");
        userinputcontainer.appendChild(stressorForm);
        let stressorInputter = document.createElement("INPUT");
        stressorInputter.setAttribute("type", "text");
        stressorInputter.setAttribute("id", "stressor");
        document.getElementById("myForm").appendChild(stressorInputter);
        let stressorbtn = document.createElement("BUTTON");
        document.getElementById("myForm").appendChild(stressorbtn);
        stressorbtn.innerText = "Submit";
        welcome.innerText = `Welcome ${username}!`;
        question.innerText = "Enter a stressor here:";
        nameinputter.remove();
        namesubmit.remove();
    }


 //This will create the new stressor
 static newStressor(userid){
    let newStressor = document.getElementById('myForm')
    newStressor.addEventListener("submit" , function(e){
        e.preventDefault();
        if (e.target.children[0].value != "") {
            fetchCall.createStressor(e, userid)
            .then(newStressor => {
                let stressors = new Stressor(newStressor);
                    stressors.renderStressors();
                })
            }
        })
    }

    //This will complete the stressor when complete button gets pressed
    async overcameStressor(e){
        e.preventDefault();
        let stressorText = document.getElementById(`t${e.target.id}`);
        let overcamed = stressorText.innerText.strike();
        document.getElementById(`t${e.target.id}`).innerHTML = overcamed;
        fetchCall.overcomeStressor(e);
        e.target.remove();
    }

     //This will delete the stressor when delete button gets pressed
     async deleteStressor(e){
        e.preventDefault();
        let completed = document.getElementById(`${e.target.id}`);
        let stressorText = document.getElementById(`t${e.target.id}`);
        fetchCall.deleteStressor(e);
        completed.remove();
        stressorText.remove();
        e.target.remove();
    }
}

