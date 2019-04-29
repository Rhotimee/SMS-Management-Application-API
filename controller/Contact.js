import Contact from '../models/Contact';

class Contacts {
  static async addContact(req, res) {
    const { name, phoneNumber, email } = req.body;

    const savedContact = await Contact.create({
      name, phoneNumber, email,
    });

    return res.status(201).json({
      message: 'Contact saved successfully',
      savedContact,
    });
  }
}

export default Contacts;
