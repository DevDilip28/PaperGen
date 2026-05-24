export const extractJSON = (
    response: string
) => {
    try {
        const cleaned = response
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        return JSON.parse(cleaned);
    } catch (error) {
        throw new Error("Invalid JSON response");
    }
};
