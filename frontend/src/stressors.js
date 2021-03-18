class Stressor {

    static userStressors = []


    constructor(stressor){
        this.name = stressor.name
        this.id = stressor.id
        this.overcamed = stressor.overcamed
        this.user_id = stressor.user_id
        Goal.userStressors.push(stressor)
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

