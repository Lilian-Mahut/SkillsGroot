import db from "../../setup/database"

const Query = {
    getAll: (param, successCallback, failureCallback) => {

        let q = `SELECT * FROM skills`

        db.query(sqlQuery, (err, rows) => {
            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows);
            } else {
                return successCallback("No skill.");
            }
        })
    },
    getById: (id, successCallback, failureCallback) => {

        let sqlQuery = `SELECT * FROM skills WHERE ID=${id}`;

        db.query(sqlQuery, (err, rows) => {
            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows[0]);
            } else {
                return successCallback("No matching skill");
            }
        })
    },
    getByUserId: (userID, successCallback, failureCallback) => {
        let sqlQuery = `SELECT *
        from padawan_has_skills, skills
        WHERE padawan_has_skills.id_padawan = ${userID}
        AND padawan_has_skills.id_skill = skills.id`;

        db.query(sqlQuery, (err, rows) => {
            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows);
            } else {
                return successCallback("No matching skills");
            }
        })
    },
    getByModuleId: (moduleID, successCallback, failureCallback) => {
        let sqlQuery = `SELECT skills.id, skills.name 
        from skills, modules 
        WHERE skills.module_id = modules.id
        AND modules.id = ${moduleID}`;

        db.query(sqlQuery, (err, rows) => {
            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows);
            } else {
                return successCallback("Module has no skills");
            }
        })
    },
    getAllSortByModule: (param, successCallback, failureCallback) => {
        let sqlQuery = `SELECT modules.id as module_id, modules.name as module_name, skills.name as skill_name
        from skills, modules 
        WHERE skills.module_id = modules.id 
        GROUP BY modules.id, modules.name, skills.name 
        ORDER BY modules.id`;

        db.query(sqlQuery, (err, rows) => {
            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows);
            } else {
                return successCallback("Can't retrieve skills sorted by module");
            }
        })
    }
}

export default Query

// Skills ordered by module
// SELECT modules.name, skills.name from skills, modules WHERE skills.module_id = modules.id GROUP BY modules.name, skills.name
