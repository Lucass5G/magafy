import {authSession} from "@lib/auth-session";
import {auth} from "@/auth";
import {spotifyApi} from "@/_utils/ofetch-spotify";

export async function GET() {
    const session = await authSession()

    const {accessToken} = await auth.api.getAccessToken({
        body: {
            providerId: "spotify",
            userId: session?.session.userId
        }
    })

    const res =  await spotifyApi.raw("/me/top/artists", {
        method: "GET",
        params: {
            limit: 50,
            offset: 0,
            time_range: "medium_term"
        },
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })


    return Response.json({...res})
}