import db from "../../setup/database"

const Queries = {
    getAll: (param, successCallback, failureCallback) => {

        let sqlQuery = "SELECT * FROM `levels`";

        db.query(sqlQuery, (err, rows) => {
            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows);
            } else {
                return successCallback("No levels.");
            }
        })
    },
    getBySkillAndUser: (params, successCallback, failureCallback) => {

        const { userId, skillId } = params;

        let sqlQuery = `
                SELECT levels.id, levels.name
                from user_has_skills, levels
                WHERE user_has_skills.id_user = ${userId}
                and user_has_skills.id_skill = ${skillId}
                and user_has_skills.id_level = levels.id
                `;

        db.query(sqlQuery, (err, rows) => {
            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows[0]);
            } else {
                return successCallback("No matching level");
            }
        })
    },
    updateLevel: (params, successCallback, failureCallback) => {

        const { userId, skillId, levelId } = params;

        let sqlQuery = `UPDATE user_has_skills SET id_level = ${levelId}
                        WHERE user_has_skills.id_user = ${userId}
                        AND user_has_skills.id_skill = ${skillId};`;

        db.query(sqlQuery, (err, rows) => {
            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows[0]);
            } else {
                return successCallback({});
            }
        })
    },
}

export default Queries
