const del = require("del")
const reset = () => {
    return del(app.path.clean)
}
