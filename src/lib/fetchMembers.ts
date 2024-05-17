import type { AuthHeader } from "../types";
import type { MembersList } from "../types";

export async function all(headers?: AuthHeader): Promise<MembersList> {
    const generalMembersResponse = await fetch('https://github.com/The-Holy-Church-of-Terry-Davis/aalsda-data/blob/main/members/general.json?raw=true', headers);

    if (!generalMembersResponse.ok) {
        throw new Error("Couldn't get general members data from GitHub.");
    }

    const generalMembersdata = await generalMembersResponse.json();

    const boardMembersResponse = await fetch('https://github.com/The-Holy-Church-of-Terry-Davis/aalsda-data/blob/main/members/board.json?raw=true', headers);

    if (!boardMembersResponse.ok) {
        throw new Error("Couldn't get general members data from GitHub.");
    }

    const boardMembersdata = await boardMembersResponse.json();

    let result = [boardMembersdata, generalMembersdata];
    // https://stackoverflow.com/a/47924059/14363702 - Thanks
    const data = result.reduce(function (r, e) {
        return Object.keys(e).forEach(function (k) {
            if (!r[k]) r[k] = [].concat(e[k])
            else r[k] = r[k].concat(e[k])
        }), r
    }, {})

    return data;
}

export async function board(headers?: AuthHeader): Promise<MembersList> {
    const response = await fetch('https://github.com/The-Holy-Church-of-Terry-Davis/aalsda-data/blob/main/members/board.json?raw=true', headers);

    if (!response.ok) {
        throw new Error("Couldn't get board members data from GitHub.");
    }

    const data = await response.json();
    return data;
}

export async function general(headers?: AuthHeader): Promise<MembersList> {
    const response = await fetch('https://github.com/The-Holy-Church-of-Terry-Davis/aalsda-data/blob/main/members/general.json?raw=true', headers);

    if (!response.ok) {
        throw new Error("Couldn't get general members data from GitHub.");
    }

    const data = await response.json();
    return data;
}