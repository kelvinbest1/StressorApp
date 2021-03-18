class Stressor {

    static userStressors = []


    constructor(stressor){
        this.name = stressor.name
        this.id = stressor.id
        this.overcamed = stressor.overcamed
        this.user_id = stressor.user_id
        Goal.userStressors.push(stressor)
    }
