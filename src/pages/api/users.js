import dbConnect from '../../lib/dbConnect';
import User from '../../models/User';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'POST':
      try {
        const user = await User.find({ email: req.body.email });
        if (user.length > 0) {
          res.status(400).json({
            status: 400,
            message: 'User already exists',
          });
        } else {
          const user = await User.create(req.body);
          res.status(201).json({ success: true, data: user });
        }
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
