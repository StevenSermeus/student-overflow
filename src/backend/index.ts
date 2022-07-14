// @ts-ignore
import { serve } from "https://deno.land/std@0.148.0/http/server.ts";
// @ts-ignore
import requestHandler from "./API/api.ts";

async function handler(req: Request): Promise<Response> {
    const res: Response = await requestHandler(req);

    return res;
}

serve(handler);