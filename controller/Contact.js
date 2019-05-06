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

  static async fetchContact(req, res) {
    const contactList = await Contact.find();
    return res.status(200).json({
      message: 'Contacts found',
      contactList,
    });
  }

  static async search(req, res) {
    const paramObj = req.query;
    const paramName = Object.keys(paramObj)[0];
    const paramValue = paramObj[paramName];
    console.log('=========>', paramName);
    const contact = await Contact.findOne({ paramName: `${paramValue}` });

    if (!contact) {
      return res.status(404).json({
        message: 'Contact not found',
      });
    }

    return res.status(200).json({
      message: 'Contact found',
      contact,
    });
  }

  static async update(req, res) {
    const { _id } = req.params;
    const { name, email, phoneNumber } = req.body;

    const foundContact = await Contact.findById(_id);
    if (!foundContact) {
      return res.status(400).json({
        message: 'Contact not found',
      });
    }

    const updatedContact = await Contact.update({
      name: name || foundContact.name,
      phoneNumber: phoneNumber || foundContact.phoneNumber,
      email: email || foundContact.email,
    });

    if (!updatedContact) {
      return res.status(400).json({
        message: 'Contact not updated',
      });
    }

    return res.status(200).json({
      message: 'Contact updated successfully',
      updatedContact,
    });
  }

  static async delete(req, res) {
    const { _id } = req.params;

    const foundContact = await Contact.findById(_id);
    if (!foundContact) {
      return res.status(400).json({
        message: 'Contact not found',
      });
    }

    const deletedContact = await Contact.deleteOne({ _id });

    if (!deletedContact) {
      return res.status(400).json({
        message: 'There was a problem deleting contact',
      });
    }

    return res.status(200).json({
      message: 'Contact deleted successfully',
    });
  }
}

export default Contacts;
