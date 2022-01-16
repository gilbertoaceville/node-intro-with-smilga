//remember to remove "promises" if other methods like utils, new Promise are used
const { readFile, writeFile } = require("fs").promises;

/**
 * These are synchronous so no need for the ".promises at the end of the fs module"
 */
// const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");

const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const startResolver = async () => {
  try {
    // const resolved = await resolver("./content/second.txt");
    // const resolve = await resolver("./content/first.txt");

    // const resolved = await readFilePromise("./content/first.txt", "utf8");
    // const resolve = await readFilePromise("./content/second.txt", "utf8");

    const resolved = await readFile("./content/first.txt", "utf8");
    const resolve = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/new-write.txt",
      `First and second file exists: ${(resolved, resolve)}`,
      { flag: "a" }
    );
    console.log(resolved, resolve);
  } catch (err) {
    if (err) console.log(err);
  }
};

startResolver();

// const first = readFileSync("./content/first.txt", "utf8");

// const second = readFileSync("./content/second.txt", "utf8");

// writeFileSync(
//   "./content/result-sync.txt",
//   `Both txt data files are: ${first}, ${second}`,
//   { flag: "a" }
// );

// //using async file systems
// //requires a callback

// readFile("./content/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const first = result;
//   readFile("./content/second.txt", "utf8", (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second = result;

//     writeFile(
//       "./content/result-async.txt",
//       `Async file as written from first and second are: ${first}, ${second}`,
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log("New file result-async.txt written", result);
//       }
//     );
//   });
// });

// const resolver = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, result) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(result);
//       }
//     });
//   });
// };

// resolver("./content/second.txt")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
