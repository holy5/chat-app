import ChatModel from "../models/Chat";
import asyncHandler from "express-async-handler";
import UserModel from "../models/User";

const createGroupChat = asyncHandler(async (req: any, res: any) => {
	const { chatName } = req.body;
	let users = JSON.parse(req.body.users);

	if (users.length < 2) {
		res.status(400).send(
			"You need at least 2 users to create a group chat"
		);
	}
	users.push(req.user);
	try {
		const newChat = await ChatModel.create({
			groupChat: true,
			chatName: chatName,
			users,
			admin: req.user,
		});

		const fullChat = await ChatModel.findOne({ _id: newChat._id })
			.populate("users", "-password")
			.populate("admin", "-password");

		res.status(200).json({
			success: true,
			data: fullChat,
		});
	} catch (err: any) {
		res.status(500).send(err.message);
	}
});

const accessChat = asyncHandler(async (req: any, res: any) => {
	const { userId } = req.body;
	if (!userId) {
		res.status(400).json({ message: "No id provided" });
	}
	let isChat = await ChatModel.find({
		groupChat: false,
		$and: [
			{ users: { $elemMatch: { $eq: req.user._id } } },
			{ users: { $elemMatch: { $eq: userId } } },
		],
	})
		.populate("users", "-password")
		.populate("latestMessage");

	isChat = await UserModel.populate(isChat, {
		path: "latestMessage.sender",
		select: "username imageUrl",
	});
	if (isChat.length > 0) {
		res.send(isChat[0]);
	} else {
		try {
			const createdChat = await new ChatModel({
				chatName: "sender",
				groupChat: false,
				users: [req.user._id, userId],
			});
			const savedChat = await createdChat.save();
			const fullChat = await ChatModel.findOne({
				_id: savedChat._id,
			}).populate("users", "-password");
			res.status(200).json(fullChat);
		} catch (error) {
			res.status(400).json(error);
		}
	}
});

const getChatUsers = asyncHandler(async (req: any, res: any) => {
	try {
		const chatUsers = await ChatModel.find({
			users: { $elemMatch: { $eq: req.user._id } },
		})
			.populate("users", "-password")
			.populate("admin", "-password")
			.populate("latestMessage")
			.sort({ updatedAt: -1 });

		await UserModel.populate(chatUsers, {
			path: "latestMessage.sender",
			select: "username imageUrl",
		});
		res.status(200).json(chatUsers);
	} catch (err) {
		res.status(400).json(err);
	}
});

export { createGroupChat, accessChat, getChatUsers };
