import LevelServices from "./service"

const LevelController = {
    getAll: (req, res) => {
        //If we're catching a query like /skills/?user=id?skill=id, we're gonna filter by calling its appropriate service
        // Filtering by user id and skill id
        if (req.query.user && req.query.skill) {

            let params = { userId: req.query.user, skillId: req.query.skill }

            LevelServices.getBySkillAndUser(params, result => {
                result.success ? res.status(200).send(result) : res.status(404).send(result)
            })
        }
        else {
            LevelServices.getAll(req, result => {
                result.success ? res.status(200).send(result) : res.status(404).send(result)
            })
        }
    },
    updateLevel: (req, res) => {

        let params = { userId: req.query.user, skillId: req.query.skill, levelId: req.query.level }

        LevelServices.updateLevel(params, result => {
            result.success ? res.status(200).send(result) : res.status(404).send(result)
        })
    }
}

export default LevelController
