import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema(
	{
		chatName: {
			type: String,
			trim: true,
		},
		groupChat: {
			type: Boolean,
			default: false,
		},
		users: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],
		admin: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		latestMessage: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Message",
		},
	},
	{ timestamps: true }
);

export default mongoose.model("Chat", ChatSchema);
