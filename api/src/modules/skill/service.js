import ProjectQueries from "./query"

const SkillServices = {
    getAll: (req, callback) => {
        ProjectQueries.getAll(req,
            response => {
                return callback({ success: true, message: 'Skills successfuly retrieved', data: response })
            },
            error => {
                return callback({ success: false, message: error })
            })
    },
    getAllSortByModule: (req, callback) => {
        ProjectQueries.getAllSortByModule(req,
            response => {
                return callback({ success: true, message: 'Skills successfully retrieved', data: response })
            },
            error => {
                return callback({ success: false, message: error })
            })
    },
    getById: (id, callback) => {
        ProjectQueries.getById(id,
            response => {
                return callback({ success: true, message: 'Skill successfully retrieved', data: response })
            },
            error => {
                return callback({ success: false, message: error })
            })
    },
    getByUserId: (userId, callback) => {
        ProjectQueries.getByUserId(userId,
            response => {
                return callback({ success: true, message: 'Skills successfully retrieved', data: response })
            },
            error => {
                return callback({ success: false, message: error })
            })
    },
    getByModuleId: (moduleId, callback) => {
        ProjectQueries.getByModuleId(moduleId,
            response => {
                return callback({ success: true, message: 'Skills successfully retrieved', data: response })
            },
            error => {
                return callback({ success: false, message: error })
            })
    }
}

export default SkillServices
