import NewsTeller from '../models/newsteller.model.js';
// Assuming you create this function in a utility file, e.g., './email.utils.js'
import { sendWelcomeEmail } from '../lib/utils.js';

export const registerToNewsteller = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Check if already subscribed
    const existing = await NewsTeller.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }

    const subscription = new NewsTeller({ email });
    await subscription.save();

    // --- NEW STEP: Send Welcome Email ---
    try {
      await sendWelcomeEmail(email);
      console.log(`Welcome email sent to: ${email}`);
    } catch (emailError) {
      // Log the email error, but don't fail the registration process
      console.error('Failed to send welcome email:', emailError);
    }
    // -------------------------------------

    res.status(201).json({ message: 'Successfully subscribed to newsletter!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error, please try again later' });
  }
};

export const unsubscribeFromNewsteller = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }
    const result = await NewsTeller.findOneAndDelete({ email });
    if (!result) {
      return res
        .status(404)
        .json({ message: 'Email not found in subscription list' });
    }
    return res.redirect(`/unsubscribe-success/${email}`);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error, please try again later' });
  }
};
