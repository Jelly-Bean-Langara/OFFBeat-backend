import Moment from '../models/Moment';

class MomentPhotosController {
  async show(req, res) {
    const { momentId } = req.query;

    if (!momentId) {
      return res.status(400).json({ error: 'You need to provide a moment ID' });
    }

    try {
      const result = await Moment.getPhotos(momentId);

      return res.json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

export default new MomentPhotosController();
