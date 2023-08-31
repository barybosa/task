type Comment = {
	id: string;
	userId: string;
	name: string;
	surname: string;
	text: string;
	vote: number;
	date: string;
	profilePicture?: string;
	isOnline: boolean;
	children: Comment[];
};

type Comments = Comment[];

export { Comment, Comments };
