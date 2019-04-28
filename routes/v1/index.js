import express from 'express';
import Contact from '../../controller/Contact';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'hello0',
  });
});

router.post('/add', Contact.addContact);

export default router;
