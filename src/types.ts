export type AuthHeader = {
    headers: {
        Authorization: string;
    };
};

export type Member = {
    name: string;
    role: string;
    joinDate: string;
};

export type MembersList = {
    members: Member[];
};