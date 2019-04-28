import Contact from '../models/Contact';

class Contacts {
  static async addContact(req, res) {
    const { name, phoneNumber, email } = req.body;

    try {
      const savedContact = await Contact.create({
        name, phoneNumber, email,
      });

      return res.json({
        message: 'Contact saved successfully',
        savedContact,
      });
    } catch (error) {
      return res.json({
        error,
      });
    }
  }
}

export default Contacts;
