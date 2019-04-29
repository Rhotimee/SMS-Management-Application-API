import express from 'express';
import Contact from '../../controller/Contact';
import { catchErrors } from '../../handlers/errorHandlers';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Welcome',
  });
});

router.post('/add', catchErrors(Contact.addContact));

export default router;
