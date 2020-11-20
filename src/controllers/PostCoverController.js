import Moment from '../models/Moment';

class PostCoverController {
  async show(req, res) {
    const { postId } = req.query;

    if (!postId) {
      return res.status(400).json({ error: 'You need to provide a post ID' });
    }

    try {
      const result = await Moment.getCover(postId);

      return res.json(result[0].post_cover);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

export default new PostCoverController();
