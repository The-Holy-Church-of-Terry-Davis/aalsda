export async function GET(): Promise<Response> {

    const data = "All data, other than this endpoint, returns JSON.\n\nGET /api/v1/headline            The headline text.\nGET /api/v1/meetingschedule     The schedule of upcoming and current meetings.";

    return new Response(data, {
        headers: { 'Content-Type': 'text/plain' }
    });
}