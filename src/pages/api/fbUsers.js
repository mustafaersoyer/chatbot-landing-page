import dbConnect from '../../lib/dbConnect';
import FbUser from '../../models/FbUser';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'POST':
      try {
        let user = await FbUser.find({ id: req.body.id });
        if (user.length > 0) {
          user = await FbUser.update(req.body);
        } else {
          user = await FbUser.create(req.body);
        }
        res.status(201).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
