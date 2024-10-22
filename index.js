
const fs = require("fs");

// reading your file
// fs.readFile("./test.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
//adding new content your file
// fs.appendFile("./test.txt", " \n hello sundar",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("data is add");

//     }
// })

//delete a file
// fs.unlink("./test.txt",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('file is deleted');
//     }
// })

//file is create
// fs.writeFile("./test.txt","hello everyone",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file is created");
//     }
// })

//rename the file
fs.rename("./fileshow/text.txt", "./fileshow/new_file.txt", (err) => {
  if (err) {
    console.log(err);                                
  } else {
    console.log('file is renamed');
  }
});


