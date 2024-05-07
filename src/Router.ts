import * as http from "http";

type Handler = (req: http.IncomingMessage, res: http.ServerResponse) => void;

// prettier-ignore
export function Router(req: http.IncomingMessage, res: http.ServerResponse) {

    const get = (path: string, handler: Handler) => {
      if (req.method === "GET" && req.url === path) {
        handler(req, res,);
      }
    }

    const post = (path: string, handler: Handler) => {
      if (req.method === "POST" && req.url === path) {
        handler(req, res);
      }
    }

    const put = (path: string, handler: Handler) => {
      if (req.method === "PUT" && req.url === path) {
        handler(req, res);
      }
    }

    const del = (path: string, handler: Handler) => {
      if (req.method === "DELETE" && req.url === path) {
        handler(req, res);
      }
    }

  
    return { get, post, put, del };
}

export function PrettyResponse(res: http.ServerResponse) {
  return {
    txt(content: string, status: number = 200) {
      res.writeHead(status, { "Content-Type": "text/plain" });
      res.write(content);
      res.end();
    },
    json: (content: object, status: number = 200) => {
      res.writeHead(status, { "Content-Type": "application/json" });
      res.write(JSON.stringify(content));
      res.end();
    },
  };
}
