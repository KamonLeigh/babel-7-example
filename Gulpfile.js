const { series, task, src, dest, watch } = require("gulp");
const babel = require("gulp-babel");


function moveHTML() {
    return src("src/*.html")
            .pipe(dest("dist"))
}
task(moveHTML);

function js() {
    return src("src/*.js")
        .pipe(babel({
            plugins: ["@babel/plugin-proposal-class-static-block","@babel/plugin-proposal-class-properties"]
        }))
        .pipe(dest("dist"))
}
task(js);

function monitor() {
    watch("src/*.js", js)
}

task(monitor);

task('start', series(moveHTML, js, monitor));





