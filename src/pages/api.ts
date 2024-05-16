export async function GET(): Promise<Response> {

    let data = "All data, other than this endpoint, returns JSON.\n";
    data += "\nOne-offs:";
    data += "\n  GET /api/v1/headline            Headline text.";
    data += "\n  GET /api/v1/meetingschedule     Schedule of upcoming and current meetings.\n"
    data += "\nMembers:";
    data += "\n  GET /api/v1/members/board       Members part of the board."
    data += "\n  GET /api/v1/members/general     General members.";
    data += "\n  GET /api/v1/members/all         All of the members together.";
    
    return new Response(data, {
        headers: { 'Content-Type': 'text/plain' }
    });
}