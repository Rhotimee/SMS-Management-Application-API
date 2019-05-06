import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';


class Users {
  static async signup(req, res) {
    const {
      name, phoneNumber, password,
    } = req.body;

    const foundUser = await User.findOne({ phoneNumber });

    if (foundUser) {
      return res.status(400).json({
        message: 'Number already exists',
      });
    }

    const hashPass = await bcrypt.hash(password, 10);

    const user = await User.create({
      name, phoneNumber, password: hashPass,
    });

    if (!user) {
      return res.status(400).json({
        message: 'Make sure you fill all details',
      });
    }

    const token = await jwt.sign({ id: user._id, phoneNumber }, 'salt', { expiresIn: '1h' });

    return res.status(201).json({
      message: 'User created succesfully',
      user,
      token,
    });
  }

  static async signin(req, res) {
    const { phoneNumber, password } = req.body;

    const user = await User.findOne({ phoneNumber });

    if (!user) {
      return res.status(401).json({
        message: 'Email or Password incorrect',
      });
    }

    const matchPassword = await bcrypt.compare(password, user.password);

    if (!matchPassword) {
      return res.status(401).json({
        message: 'Email or Password incorrect',
      });
    }

    const token = await jwt.sign({ id: user._id, phoneNumber }, 'salt', { expiresIn: '1h' });

    return res.status(201).json({
      message: 'User logged succesfully',
      user,
      token,
    });
  }
}

export default Users;
