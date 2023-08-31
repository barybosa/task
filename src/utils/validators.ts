const isEmpty = (input: unknown): input is undefined | null | [] => {
	if (input !== 0 && input !== false && !input) return true;
	if (
		!(input instanceof Date) &&
		typeof input === "object" &&
		Object.keys(input as Record<string, unknown>).length === 0
	)
		return true;
	return false;
};

export { isEmpty };
