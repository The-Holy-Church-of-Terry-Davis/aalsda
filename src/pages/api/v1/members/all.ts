export async function GET(): Promise<Response> {
    try {
        const generalMembersResponse = await fetch('https://github.com/The-Holy-Church-of-Terry-Davis/aalsda-data/blob/main/members/general.json?raw=true');
        
        if (!generalMembersResponse.ok) {
            throw new Error("Couldn't get general members data from GitHub.");
        }
        
        const generalMembersdata = await generalMembersResponse.json();

        const boardMembersResponse = await fetch('https://github.com/The-Holy-Church-of-Terry-Davis/aalsda-data/blob/main/members/board.json?raw=true');
        
        if (!boardMembersResponse.ok) {
            throw new Error("Couldn't get general members data from GitHub.");
        }
        
        const boardMembersdata = await boardMembersResponse.json();
        
        let result = [boardMembersdata, generalMembersdata];
        // https://stackoverflow.com/a/47924059/14363702 - Thanks
        const data = result.reduce(function(r, e) {
            return Object.keys(e).forEach(function(k) {
              if(!r[k]) r[k] = [].concat(e[k])
              else r[k] = r[k].concat(e[k])
            }), r
        }, {})

        return new Response(JSON.stringify(data), {
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error: any) {
        console.error('Error fetching general members data:', error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}