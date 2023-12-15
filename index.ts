import { checkURL } from "./src/tools/checkURL";
import { IRequest, requests } from "./src/tools/requests";

const checkUrls = async (urls: IRequest[]) => {
    await Promise.all( urls.map(async (request) => {
        await checkURL(request.url, request.config);
    })
    );
}
checkUrls(requests);