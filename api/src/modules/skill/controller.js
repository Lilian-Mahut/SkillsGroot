import SkillServices from "./service"

const SkillController = {
    getAll: (req, res) => {
        //If we're catching a query like /api/projects/?user=id, we're gonna filter by calling its appropriate service
        // Filtering by user id
        if (req.query.user) {
            SkillServices.getByUserId(req.query.user, result => {
                result.success ? res.status(200).send(result) : res.status(404).send(result)
            })
        }
        // Filtering by module
        else if (req.query.module) {
            SkillServices.getByModuleId(req.query.module, result => {
                result.success ? res.status(200).send(result) : res.status(404).send(result)
            })
        }
        // Sorting
        else if (req.query.sortBy) {
            if (req.query.sortBy === "module") {
                SkillServices.getAllSortByModule(req, result => {
                    result.success ? res.status(200).send(result) : res.status(404).send(result)
                })
            }
        }
        else {
            SkillServices.getAll(req, result => {
                result.success ? res.status(200).send(result) : res.status(404).send(result)
            })
        }

    },
    getById: (req, res) => {
        SkillServices.getById(req.params.id, result => {
            result.success ? res.status(200).send(result) : res.status(404).send(result)
        })
    },
}

export default SkillController
