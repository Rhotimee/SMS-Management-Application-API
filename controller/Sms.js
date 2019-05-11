import Sms from '../models/Sms';

class Messages {
  static async sendSMS(req, res) {
    const { message, sentTo } = req.body;
    const { phoneNumber } = req;

    const composedMessage = await Sms.create({
      sentBy: phoneNumber, sentTo, message,
    });

    return res.status(201).json({
      message: 'Sms sent successfully',
      composedMessage,
    });
  }

  static async listSentSMS(req, res) {
    const { phoneNumber } = req;

    const messages = await Sms.find({ sentBy: phoneNumber });

    return res.status(200).json({
      message: 'Sent SMS',
      messages,
    });
  }

  static async listReceivedSMS(req, res) {
    const { phoneNumber } = req;

    const messages = await Sms.find({ sentTo: phoneNumber });

    return res.status(200).json({
      message: 'Recieved SMS',
      messages,
    });
  }

  static async viewOneSMS(req, res) {
    const { id } = req.body;

    const sms = await Sms.find({ _id: id });

    return res.status(200).json({
      message: 'Contact saved successfully',
      sms,
    });
  }

  static async deleteOneSMS(req, res) {
    const { id } = req.params;
    const deletedSms = await Sms.findByIdAndDelete(id);

    if (!deletedSms) {
      return res.status(400).json({
        message: 'Cannot delete Sms',
      });
    }

    return res.status(200).json({
      message: 'Contact Deleted successfully',
      deletedSms,
    });
  }
}

export default Messages;
