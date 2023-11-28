import { getPostData } from "../../lib/posts";

export default async function handler(req, res) {
    const postId = req.query.id;
    const postDataAPI = await getPostData(postId)
    res.status(200).json(postDataAPI);
}