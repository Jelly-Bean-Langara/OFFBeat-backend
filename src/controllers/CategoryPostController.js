import Category from '../models/Category';
import Post from '../models/Post';

class CategoryPostController {
  async show(req, res) {
    const { categoryId, quantity } = req.query;

    if (!quantity || !categoryId) {
      return res.status(400).json({ error: 'Provide a category ID and how many posts you want' });
    }

    try {
      const category = await Category.getOne(parseInt(categoryId));
      const posts = await Post.getByCategoryId(parseInt(categoryId), parseInt(quantity));

      const { category_id, category_name, category_cover } = category;

      const result = {
        category_id,
        category_name,
        category_cover,
        posts: [posts],
      };

      return res.json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async index(req, res) {
    const { quantity } = req.query;

    if (!quantity) {
      return res.status(400).json({ error: 'Provide how many posts you want' });
    }

    try {
      const categories = await Category.getAll();

      const result = [];

      await Promise.all(categories.map(async (category) => {
        const { category_id, category_title, category_cover } = category;

        const posts = await Post.getByCategoryId(category_id, parseInt(quantity));

        const categoryObj = {
          category_id,
          category_title,
          category_cover,
          posts,
        };

        result.push(categoryObj);
      }));

      return res.json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

export default new CategoryPostController();
