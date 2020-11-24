/* eslint-disable max-len */
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

      await Promise.all(req.files.map(async (file) => {
        const { filename } = file;

        await Moment.insertPhotos(result.insertId, filename);
      }));

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
      const moments = await Moment.getAllByPostId(postId);

      const result = [];

      await Promise.all(moments.map(async (moment) => {
        const {
          moment_id, moment_date, moment_description, moment_latitude, moment_longitude, moment_location_name, post_id,
        } = moment;

        const pictures = await Moment.getPhotos(moment_id);

        const newDate = new Date(moment_date);

        const momentObj = {
          moment_id,
          moment_day: newDate.getDate(),
          moment_month: newDate.getMonth(),
          moment_year: newDate.getFullYear(),
          moment_date,
          moment_description,
          moment_latitude,
          moment_longitude,
          moment_location_name,
          post_id,
          pictures,
        };

        result.push(momentObj);
      }));

      return res.json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async show(req, res) {
    const { momentId } = req.query;

    if (!momentId) {
      return res.status(400).json({ error: 'You need to provide a moment ID' });
    }

    try {
      const result = await Moment.getOneById(momentId);

      return res.json(result[0]);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async update(req, res) {
    const { momentId } = req.query;

    if (!momentId) {
      return res.status(400).json({ error: 'You need to provide a moment ID' });
    }

    try {
      const result = await Moment.updateMoment(momentId, req.body);

      result.message = 'Moment Updated!';

      return res.json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async delete(req, res) {
    const { momentId } = req.query;

    if (!momentId) {
      return res.status(400).json({ error: 'You need to provide a moment ID' });
    }

    try {
      const result = await Moment.deleteMoment(momentId);

      result.message = 'Moment Deleted!';

      return res.json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

export default new MomentController();
