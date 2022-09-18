import dbConnect from '../../lib/dbConnect';
import FbUser from '../../models/FbUser';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'POST':
      try {
        const user = await FbUser.find({ id: req.body.id });
        if (user.length > 0) {
          res.status(400).json({
            status: 400,
            message: 'User already exists',
          });
        } else {
          const user = await FbUser.create(req.body);
          res.status(201).json({ success: true, data: user });
        }
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
