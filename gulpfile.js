const gulp = require("gulp");
const exec = require("child_process").exec;
const spawn = require("child_process").spawn;
const runSequence = require("gulp4-run-sequence").use(gulp);
const findImports = require("find-imports");
const findImportTargets = [
  // glob pattern
  "lib/**/*.{js,jsx}",
  // use negative glob pattern to exclude files
  "!lib/src/components/index.js",
];
const mainPackage = require("./package.json");
const templatePackage = require("./assets/publish_package_template.json");
const _ = require("lodash");
const stringSimilarity = require("string-similarity");
const fs = require("fs");
const jsonFormat = require("gulp-json-format");

gulp.task("build-components", (done) => {
  runSequence("transpile-code", "create-main-index", "build-imports", done);
});

gulp.task("transpile-code", (done) => {
  exec(
    "tsc -p lib.tsconfig.json && copyfiles src/components/*/*.css lib/ && copyfiles src/components/*/*.md lib/ && copyfiles README.md lib/src/components",
    function (e) {
      console.log("compilation finished");
      done(e);
    }
  );
});

gulp.task("create-main-index", (done) => {
  exec("barrel-me -d lib/src/components/", function (e) {
    console.log("index created");
    done(e);
  });
});

gulp.task("build-imports", (done) => {
  const importsPublish = {};
  const importsComponents = findImports(findImportTargets, {
    absoluteImports: true,
  });
  let dependencies = [];

  Object.keys(importsComponents).forEach((key) => {
    dependencies = _.union(dependencies, importsComponents[key]);
  });
  Object.keys(mainPackage.dependencies).forEach((key) => {
    const bestMatch = stringSimilarity.findBestMatch(key, dependencies);
    if (bestMatch.bestMatch.rating >= 0.6)
      _.set(importsPublish, key, mainPackage.dependencies[key]);
  });

  templatePackage.peerDependencies = importsPublish;
  templatePackage.version = mainPackage.version;
  templatePackage.name = mainPackage.name;
  const templatePackageString = JSON.stringify(templatePackage);

  fs.writeFile("lib/src/components/package.json", templatePackageString, () => {
    console.log("package.json created");
    gulp
      .src("lib/src/components/package.json", { base: ".../" })
      .pipe(jsonFormat(4))
      .pipe(gulp.dest("./lib"));
    console.log("set format to package.json successfully");
  });

  done();
});
