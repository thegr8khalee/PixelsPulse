import NewsTeller from '../models/newsteller.model.js';
// Assuming you create this function in a utility file, e.g., '../lib/utils.js'
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

    // 1. Send the success response to the client immediately
    res.status(201).json({ message: 'Successfully subscribed to newsletter!' });

    // 2. Fire and forget: Call the email function WITHOUT 'await'.
    // The process continues running in the background while the HTTP response is sent.
    sendWelcomeEmail(email)
      .then(() => {
        console.log(`Welcome email sent to: ${email}`);
      })
      .catch((emailError) => {
        // IMPORTANT: Log the error here, but DO NOT modify the 'res' object,
        // as the response has already been sent to the client.
        console.error(
          'Failed to send welcome email (in background):',
          emailError
        );
      });

    // No need for 'return' here since the response was sent above.
    // The execution continues for the email logic, and then the function exits.
  } catch (err) {
    console.error(err);
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
    console.error(err);
    // On server error, redirect to success page but pass an error indicator (optional)
    res.redirect(`/unsubscribe-success/${req.params.email}?status=error`);
  }
};
