import { promises as fs } from 'fs';

export async function githubAuthHeader() {
    try {
        const pat = await fs.readFile("./secrets/gh_pat.key", "utf-8");
        const authHeader = {
            headers: {
                Authorization: `Bearer ${pat.trim()}`,
            },
        };
        return authHeader;
    } catch (error) {
        console.error("Error reading GH PAT file, using no headers.");
        return null;
    }
}
