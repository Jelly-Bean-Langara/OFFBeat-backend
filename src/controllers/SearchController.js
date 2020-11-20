import Post from '../models/Post';

class SearchController {
  async index(req, res) {
    const { search, quantity } = req.query;

    if (!search) {
      return res.status(400).json({ error: 'You need to provide search' });
    }

    try {
      const result = await Post.getBySearch(search, quantity);

      return res.json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

export default new SearchController();
