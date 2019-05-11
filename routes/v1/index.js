import express from 'express';
import Contact from '../../controller/Contact';
import Sms from '../../controller/Sms';

import User from '../../controller/User';
import { catchErrors } from '../../handlers/errorHandlers';
import { isLoggedIn } from '../../middleware/index';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Welcome',
  });
});

router.post('/contacts', isLoggedIn, catchErrors(Contact.addContact));
router.put('/contacts/:phoneNumber', isLoggedIn, catchErrors(Contact.update));
router.delete('/contacts/:_id', isLoggedIn, catchErrors(Contact.delete));
router.get('/contacts', isLoggedIn, catchErrors(Contact.fetchContact));
router.get('/contacts', isLoggedIn, catchErrors(Contact.search));

router.post('/sms', isLoggedIn, catchErrors(Sms.sendSMS));
router.get('/sms/sent', isLoggedIn, catchErrors(Sms.listSentSMS));
router.get('/sms/received', isLoggedIn, catchErrors(Sms.listReceivedSMS));
router.get('/sms', isLoggedIn, catchErrors(Sms.viewOneSMS));


router.post('/auth/signup', catchErrors(User.signup));
router.post('/auth/signin', catchErrors(User.signin));
router.get('/users', isLoggedIn, catchErrors(User.list));


export default router;
