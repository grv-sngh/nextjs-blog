// posts.js

import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("nextjsblog");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let myPost = await db.collection("users").insertOne(bodyObject);
      res.json(myPost.ops[0]);
      break;
    case "GET":
      const allPosts = await db.collection("posts").find({"id":1}).toArray();
      let myPosts;
      if(req.query.id){
        var q = Number(req.query.id); // Just a simple type conversion to the object
        myPosts = await db.collection("posts").find({"post_id":q}).toArray(); // and missing array
        res.json({ status: 200, id: req.query.id, data: myPosts });
        break;
      }
      res.json({ status: 200, data: allPosts });
      break;
  }
}