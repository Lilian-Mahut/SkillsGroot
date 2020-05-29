import express from "express"

// import userRoutes from "../modules/user/routes"
// import skillRoutes from "../modules/skill/routes"
// import levelRoutes from "../modules/level/routes"

const router = (app) => {
    const apiRoutes = express.router()

    // Home route
    app.get('/', function (req, res) {
        res.send('This route is not yet defined')
    })

    // User router
    app.use('/api', apiRoutes)

    // app.use('/api/users', userRoutes)
    // app.use('/api/skills', skillRoutes)
    // app.use('/api/levels', levelRoutes)
    // app.use('/api/modules', moduleRoutes)
}

export default router
