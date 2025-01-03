import User from "../models/user.model.js";
import Post from "../models/post.model.js";
import Comment from "../models/comment.model.js";
import { Webhook } from "svix";

export const clerkWebHook = async (req, res) => {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("Webhook secret needed!");
  }

  const payload = req.body;
  const headers = req.headers;

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt;
  try {
    evt = wh.verify(payload, headers);
  } catch (err) {
    res.status(400).json({
      message: "Webhook verification failed!",
    });
  }


if (evt.type === "user.created") {
  // Check if necessary data exists
  if (
    !evt.data.id ||
    !evt.data.username ||
    !evt.data.email_addresses ||
    !evt.data.email_addresses[0]?.email_address
  ) {
    return res
      .status(400)
      .json({
        message: "Required user data is missing in the webhook payload!",
      });
  }

  const newUser = new User({
    clerkUserId: evt.data.id, // Clerk User ID
    username: evt.data.username || evt.data.email_addresses[0].email_address, // Username or email if username is missing
    email: evt.data.email_addresses[0].email_address, // Email address from the webhook payload
    img: evt.data.profile_image_url || evt.data.image_url, // Profile image (fallback to other URL)
  });
  console.log(evt.data.id);

  try {
    // Save the user to the database
    await newUser.save();
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Failed to save user", error: err.message });
  }
}

  if (evt.type === "user.deleted") {
    const deletedUser = await User.findOneAndDelete({
      clerkUserId: evt.data.id,
    });

    await Post.deleteMany({ user: deletedUser._id });
    await Comment.deleteMany({ user: deletedUser._id });
  }

  return res.status(200).json({
    message: "Webhook received",
  });
};
