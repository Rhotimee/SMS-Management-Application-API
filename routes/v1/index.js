import express from 'express';
import Contact from '../../controller/Contact';
import { catchErrors } from '../../handlers/errorHandlers';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Welcome',
  });
});

router.post('/contacts', catchErrors(Contact.addContact));
router.put('/contacts/:_id', catchErrors(Contact.update));
router.delete('/contacts/:_id', catchErrors(Contact.delete));
router.get('/contacts', catchErrors(Contact.fetchContact));
router.get('/contacts', catchErrors(Contact.search));

export default router;
