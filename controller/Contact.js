import Contact from '../models/Contact';


class Contacts {
  static async addContact(req, res) {
    const { name, phoneNumber } = req.body;
    const { userId } = req;

    const savedContact = await Contact.create({
      name, phoneNumber, userId,
    });

    return res.status(201).json({
      message: 'Contact saved successfully',
      savedContact,
    });
  }

  static async fetchContact(req, res) {
    const { userId } = req;
    const contactList = await Contact.find({ userId });
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
    const { name, phoneNumber } = req.body;

    const foundContact = await Contact.findById(_id);
    if (!foundContact) {
      return res.status(400).json({
        message: 'Contact not found',
      });
    }

    const updatedContact = await Contact.update({
      name: name || foundContact.name,
      phoneNumber: phoneNumber || foundContact.phoneNumber,
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
    const { phoneNumber } = req.params;
    const { userId } = req;


    const foundContact = await Contact.findOne({ userId, phoneNumber });

    if (!foundContact) {
      return res.status(400).json({
        message: 'Contact not found',
      });
    }

    if (userId !== foundContact.$oid) {
      return res.status(400).json({
        message: 'YOu are not permitted to delete this contact',
      });
    }

    const deletedContact = await Contact.deleteOne({ phoneNumber });

    if (!deletedContact) {
      return res.status(405).json({
        message: 'There was a problem deleting contact',
      });
    }

    return res.status(200).json({
      message: 'Contact deleted successfully',
      foundContact,
    });
  }
}

export default Contacts;
