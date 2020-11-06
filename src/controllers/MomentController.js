import * as yup from 'yup';
import Moment from '../models/Moment';

class MomentController {
  async store(req, res) {
    const schema = yup.object().shape({
      postId: yup.number().required(),
      date: yup.date().required(),
      description: yup.string().required(),
      latitude: yup.string().required(),
      longitude: yup.string().required(),
      locationName: yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Please check if you give all the mandatory information' });
    }

    try {
      const result = await Moment.create(req.body);
      result.message = 'Moment Created';

      return res.json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async index(req, res) {
    const { postId } = req.query;

    if (!postId) {
      return res.status(400).json({ error: 'You need to provide a post ID' });
    }

    try {
      const result = await Moment.getAllByPostId(postId);

      result.message = 'Moment created';

      return res.json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

export default new MomentController();
