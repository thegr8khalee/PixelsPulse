// controllers/newsteller.controller.js
import NewsTeller from '../models/newsteller.model.js';
import { sendWelcomeEmail } from '../lib/utils.js';

export const registerToNewsteller = async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    // Check if already subscribed
    const existing = await NewsTeller.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }

    const subscription = new NewsTeller({ email });
    await subscription.save();

    // Send response immediately
    res.status(201).json({ message: 'Successfully subscribed to newsletter!' });

    // Fire and forget: send welcome email in background
    sendWelcomeEmail(email)
      .then(() => {
        console.log(`✅ Welcome email sent to: ${email}`);
      })
      .catch((emailError) => {
        console.error('❌ Failed to send welcome email:', emailError.message);
      });

  } catch (err) {
    console.error('Newsletter registration error:', err);
    res.status(500).json({ message: 'Server error, please try again later' });
  }
};

export const unsubscribeFromNewsteller = async (req, res) => {
  try {
    const { email } = req.params;
    
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const result = await NewsTeller.findOneAndDelete({ email });
    
    if (!result) {
      return res.redirect(`/unsubscribe-success/${email}?status=notfound`);
    }

    return res.redirect(`/unsubscribe-success/${email}`);
  } catch (err) {
    console.error('Unsubscribe error:', err);
    res.redirect(`/unsubscribe-success/${req.params.email}?status=error`);
  }
};