on_failure { Error: Method Not Allowed
    at Request.callback (/home/yunghui/VotingTest/node_modules/superagent/lib/node/index.js:883:15)
    at IncomingMessage.<anonymous> (/home/yunghui/VotingTest/node_modules/superagent/lib/node/index.js:1127:20)
    at IncomingMessage.emit (events.js:203:15)
    at endReadableNT (_stream_readable.js:1145:12)
    at process._tickCallback (internal/process/next_tick.js:63:19)
  status: 405,
  response:
   Response {
     _events: [Object: null prototype] {},
     _eventsCount: 0,
     _maxListeners: undefined,
     res:
      IncomingMessage {
        _readableState: [ReadableState],
        readable: false,
        _events: [Object],
        _eventsCount: 4,
        _maxListeners: undefined,
        socket: [TLSSocket],
        connection: [TLSSocket],
        httpVersionMajor: 1,
        httpVersionMinor: 1,
        httpVersion: '1.1',
        complete: true,
        headers: [Object],
        rawHeaders: [Array],
        trailers: {},
        rawTrailers: [],
        aborted: false,
        upgrade: false,
        url: '',
        method: null,
        statusCode: 405,
        statusMessage: 'METHOD NOT ALLOWED',
        client: [TLSSocket],
        _consuming: false,
        _dumped: false,
        req: [ClientRequest],
        text:
         '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">\n<title>405 Method Not Allowed</title>\n<h1>Method Not Allowed</h1>\n<p>The method is not allowed for the requested URL.</p>\n' },
     request:
      Request {
        _events: [Object: null prototype] {},
        _eventsCount: 0,
        _maxListeners: undefined,
        _enableHttp2: false,
        _agent: false,
        _formData: null,
        method: 'PUT',
        url:
         'https://demo.iottalk.tw//eb41224a-11b9-fab3-91c9-42ecac8ceb46',
        _header: [Object],
        header: [Object],
        writable: true,
        _redirects: 0,
        _maxRedirects: 5,
        cookies: '',
        qs: {},
        _query: [],
        qsRaw: [],
        _redirectList: [],
        _streamRequest: false,
        _data:
         '{"name":"1.Voting","idf_list":[["Result-I",["string"]]],"odf_list":[["Start-O",["int"]],["Next-O",["int"]]],"accept_protos":["mqtt"],"profile":{"model":"VotingTest"}}',
        req: [ClientRequest],
        protocol: 'https:',
        host: 'demo.iottalk.tw',
        _endCalled: true,
        _callback: [Function],
        res: [IncomingMessage],
        _resBuffered: true,
        response: [Circular],
        called: true },
     req:
      ClientRequest {
        _events: [Object],
        _eventsCount: 3,
        _maxListeners: undefined,
        output: [],
        outputEncodings: [],
        outputCallbacks: [],
        outputSize: 0,
        writable: true,
        _last: true,
        chunkedEncoding: false,
        shouldKeepAlive: false,
        useChunkedEncodingByDefault: true,
        sendDate: false,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        _contentLength: 166,
        _hasBody: true,
        _trailer: '',
        finished: true,
        _headerSent: true,
        socket: [TLSSocket],
        connection: [TLSSocket],
        _header:
         'PUT //eb41224a-11b9-fab3-91c9-42ecac8ceb46 HTTP/1.1\r\nHost: demo.iottalk.tw\r\nAccept-Encoding: gzip, deflate\r\nContent-Type: application/json\r\nAccept: */*\r\nContent-Length: 166\r\nConnection: close\r\n\r\n',
        _onPendingData: [Function: noopPendingOutput],
        agent: [Agent],
        socketPath: undefined,
        timeout: undefined,
        method: 'PUT',
        insecureHTTPParser: undefined,
        path: '//eb41224a-11b9-fab3-91c9-42ecac8ceb46',
        _ended: true,
        res: [IncomingMessage],
        aborted: undefined,
        timeoutCb: null,
        upgradeOrConnect: false,
        parser: null,
        maxHeadersCount: null,
        [Symbol(isCorked)]: false,
        [Symbol(outHeadersKey)]: [Object] },
     text:
      '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">\n<title>405 Method Not Allowed</title>\n<h1>Method Not Allowed</h1>\n<p>The method is not allowed for the requested URL.</p>\n',
     body: {},
     files: undefined,
     buffered: true,
     headers:
      { server: 'nginx/1.10.3 (Ubuntu)',
        date: 'Sat, 07 Aug 2021 01:25:45 GMT',
        'content-type': 'text/html',
        'content-length': '178',
        connection: 'close',
        allow: 'DELETE, POST, OPTIONS' },
     header:
      { server: 'nginx/1.10.3 (Ubuntu)',
        date: 'Sat, 07 Aug 2021 01:25:45 GMT',
        'content-type': 'text/html',
        'content-length': '178',
        connection: 'close',
        allow: 'DELETE, POST, OPTIONS' },
     statusCode: 405,
     status: 405,
     statusType: 4,
     info: false,
     ok: false,
     redirect: false,
     clientError: true,
     serverError: false,
     error:
      { Error: cannot PUT //eb41224a-11b9-fab3-91c9-42ecac8ceb46 (405)
          at Response.toError (/home/yunghui/VotingTest/node_modules/superagent/lib/node/response.js:98:13)
          at ResponseBase._setStatusProperties (/home/yunghui/VotingTest/node_modules/superagent/lib/response-base.js:119:48)
          at new Response (/home/yunghui/VotingTest/node_modules/superagent/lib/node/response.js:44:8)
          at Request._emitResponse (/home/yunghui/VotingTest/node_modules/superagent/lib/node/index.js:930:18)
          at IncomingMessage.<anonymous> (/home/yunghui/VotingTest/node_modules/superagent/lib/node/index.js:1127:42)
          at IncomingMessage.emit (events.js:203:15)
          at endReadableNT (_stream_readable.js:1145:12)
          at process._tickCallback (internal/process/next_tick.js:63:19)
        status: 405,
        text:
         '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">\n<title>405 Method Not Allowed</title>\n<h1>Method Not Allowed</h1>\n<p>The method is not allowed for the requested URL.</p>\n',
        method: 'PUT',
        path: '//eb41224a-11b9-fab3-91c9-42ecac8ceb46' },
     created: false,
     accepted: false,
     noContent: false,
     badRequest: false,
     unauthorized: false,
     notAcceptable: false,
     forbidden: false,
     notFound: false,
     unprocessableEntity: false,
     type: 'text/html',
     links: {},
     setEncoding: [Function: bound ],
     redirects: [],
     pipe: [Function] } }
[da] register: false

