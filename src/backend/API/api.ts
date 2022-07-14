async function requestHandler(req: Request): Promise<Response> {
    const url: URL = new URL(req.url);
    console.log("Path: " + url.pathname)
    
    return new Response();
}

export default requestHandler;