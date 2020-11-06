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
      const moment = await Moment.create(req.body);

      moment.message = 'Moment created';

      return res.json(moment);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

export default new MomentController();
