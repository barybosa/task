import { VoteType } from "./types";

const registerVote = (commentId: string, voteType: VoteType) => {
	const votes = localStorage.getItem("userVotes");
	const parsedVotes = votes ? JSON.parse(votes) : {};

	if (voteType) {
		parsedVotes[commentId] = voteType;
	} else {
		delete parsedVotes[commentId];
	}

	localStorage.setItem("userVotes", JSON.stringify(parsedVotes));
};

const getUserVote = (commentId: string): VoteType => {
	const votes = localStorage.getItem("userVotes");

	if (!votes) {
		return null;
	}

	const parsedVotes = JSON.parse(votes);

	return parsedVotes[commentId] || null;
};

export { registerVote, getUserVote };
