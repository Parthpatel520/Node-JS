const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const bs = (bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");

const mongo = require("mongodb");
const mongoclient = mongo.MongoClient;

const url = "mongodb://127.0.0.1:27017/";
const client = new mongoclient(url);

const multer  = require('multer')
const path = require("path");
const mainpath = path.join(__dirname, "../uploads");
app.use(express.static(mainpath));

let imgfilename = '';
app.use(express.static(mainpath));

// const upload = multer({ dest: 'uploads/' })
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      return cb(null,mainpath)
    },
    filename: function (req, file, cb) {
        imgfilename = Date.now()+file.originalname
      return cb(null,imgfilename);
    }
  })
  
  const upload = multer({ storage: storage })







async function data() {
  try {
    await client.connect();
    console.log("Connected successfully to server");

    const db = client.db("form");
    const collection = db.collection("users");

    const result = await collection.find({}).toArray();
    let user = "";

    app.get("/p1", (req, res) => {
      res.render("form", {
        data: result,
        user: user,
      });
    });

    // Insert Data

    app.post("/saveData",  upload.single("image"), async (req, res) => {
       id = req.body.id;
       console.log(imgfilename)
      
      if (id != "") {
        result.forEach((i) => {
          if (i.id == id) {
            i.name = req.body.name;
            i.age = req.body.age;
            i.email = req.body.email;
            i.image = imgfilename
          }
        });
        // console.log("--- Data Edited ---");
        // console.log(result);
        let a = await collection.updateOne(
          { id: id },
          {
            $set: {
              name: req.body.name,
              age: req.body.age,
              email: req.body.email,
            },
          }
        );

        
      } else {
        let data = {
          id: (result.length + 1).toString(),
          name: req.body.name,
          age: req.body.age,
          email: req.body.email,
          image: imgfilename
        }
        console.log("--- Data Added ---");
        console.log(data);
        result.push(data);
        let a = await collection.insertOne(data);
      }
      user = '';
      res.redirect("/p1");
    });

    // DELETE DATA
    app.get("/del/:id", async (req, res) => {
      console.log("--- Deleted Data ---");
       let id = req.params.id;
       console.log(id);
      let del = await collection.deleteOne({ id: id });
      let del1 = await collection.find({}).toArray();
      user = ''
      res.render("form", {
        data: del1,
        user: user
      });
    });

    // Edit
    app.get("/edit/:id", (req, res) => {
      let id = req.params.id;
      user = result.find((i) => {
        return i.id == id;
      });
      res.render("form", {
        data: result,
        user: user,
      });
    });

  } catch (err) {
    console.log(err);
  }
}
data();

app.listen(8181, "127.0.0.1", () => {
  console.log("Server running on port 8181");
});
