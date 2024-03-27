import qr from "qr-image";
import inquirer from "inquirer";
import fs from "fs";
import { error } from "console";

inquirer
.prompt([
    { 
        message: "Please enter the url:",
        name: "URL",
    }
    ])
.then((answers) =>
{
    const url= answers.URL;
    console.log(url);

    var qrimage = qr.image(url,{type:'png'});

    qrimage.pipe(fs.createWriteStream("website_url.png"));

    fs.writeFile("urlText.txt",url,(error,data)=>
    {
        if(error) throw error;
        console.log("File Successfully");
    })
    fs.close();
})
.catch((error) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    } else {
        // Something else went wrong
    }
});