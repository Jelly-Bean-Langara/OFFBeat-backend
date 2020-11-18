import Moment from '../models/Moment';

class PostCoverController {
  async show(req, res) {
    const { postId } = req.query;

    if (!postId) {
      return res.status(400).json({ error: 'You need to provide a post ID' });
    }

    try {
      Moment.getAllByPostId(postId)
        .then(async (result) => {
          const moments = await Moment.getPhotos(result[0].moment_id);
          return res.json(moments[0].moment_picture_file_name);
        })
        .catch((err) => res.status(500).json(err));

      return '';
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

export default new PostCoverController();
