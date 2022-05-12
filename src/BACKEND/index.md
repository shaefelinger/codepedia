# Backend-Basics

## URLs

A **URL(UniformResourceLocator)** or URI (UniformResourceIdentifier) is the web address that a client uses to request a document (or JSON data in the case of REST APIs).

Parts of a URL:

```
htttps://example.com:443/cars?color=red&brand=bmw#specs
```

<!-- <img src="./assets/urls.png" alt="urls.png" style="zoom:50%;" /> -->


| Part             | example                | description                                                  |
| ---------------- | ---------------------- | ------------------------------------------------------------ |
| scheme           | `https://`             | Protocol to use for the request. `http` `https` `ftp`        |
| domain           | `example.com`          | where to send the reuest. for HTTP(s) requests, this is the Host header `Host: example.com` |
| port             | `:443`                 | Defaults to 80 for HTTP and 443 for HTTPS (defult-port is not displayed in the address-bar of the browser) |
| path             | `/cars`                | Path to ask the server for                                   |
| query parameters | `?color=red&brand=bmw` | usually used to ask for a different version of a page        |
| fragment id      | `#specs`               | not sent to the server. Used to jump to an HTML-id or by JS on the page |

#### 



allways have a port! If you don't enter a port, the browser uses a default port!

- 80 - http
- 443 - https
- 3000 - ok for developement



#### URL Encoding

URLS can not have special characters. To use the in an URL, encode them as:

`% + hex representation of ASCII value`

space: `%20`

%: `%25`

[W3Schools URL encoding reference](https://www.w3schools.com/tags/ref_urlencode.ASP)



[URL wikipedia](https://en.wikipedia.org/wiki/URL)

   

<!-- <img src="../BACKEND/assets/how urls work.png" alt="how urls work" style="zoom: 40%;" /> -->



------

## Javascript `new URL()`

[https://developer.mozilla.org/en-US/docs/Web/API/URL/URL](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL)

instead of

```js
const url = 'https://myurl.io/api'
+'?height=' + encodeURIComponent(height)
+'?width=' + encodeURIComponent(width)
```

use:

```js
const url = new URL('https://myurl.io/api')
url.searchParams.set('width', width)
url.searchParams.set('height', height)
url.toString
```



---

## localhost

`127.0.0.1` oder `localhost` -> the computer itself !!

---

## Headers

[MDN Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

---

## The HTTP Protocol

### Request and Response

client application wants to **get data** from a RESTful web service:

- it sends an **HTTP request**. 
- the server then sends the data via an **HTTP response.**

If the client wants to send data to the server: 

- The data is stored in the body of the request. 
- it sends an **HTTP request**. 
- The server then sends a response to acknowledge whether or not the storing of the data was successful.

Request and response are standardized In the HTTP protocol. 

It is defined: 

- how many text fields exist
- in which sequence, and 
- how much text is allowed in that field.

### Request

Under the hood, HTTP uses only text. 

- In the message body, there can be binary data as well, e.g for an image file 
- The header, however, only contains text.

The request head looks something like this:

```
Method - URL - HTTP Version
Additional Headers
Empty Line
Message Body
```

<!-- <img src="./assets/request.png" alt="request.png" style="zoom:50%;" /> -->

Example:

```
GET / HTTP/1.1
Host: www.spiegel.de
Connection: keep-alive
Purpose: prefetch
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML...
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/
Accept-Encoding: gzip, deflate
Accept-Language: de
Cookie: __gads=ID=b983721bda83d7ae:T=1487252257:S=ALNI_MYlth5Tx71QzpXnN3I0AoPWAu4Uog;...
```

### Response

```
HTTP Version - Status Code - Status Name
Response Headers
Empty Line
Message Body
```

<!-- <img src="./assets/response.png" alt="response" style="zoom:50%;" />  -->

Example:

```
HTTP/1.1 200 OK
Date: Thu, 25 Oct 2018 08:54:53 GMT
Cache-Control: no-transform
Expires: Thu, 25 Oct 2018 08:55:38 GMT
X-SP-TE: 5001893
X-Robots-Tag: index, follow, noarchive, noodp
Content-Type: text/html;charset=UTF-8
Content-Encoding: gzip
X-SP-AP: 5001887
Vary: Accept-Encoding, isssl
Age: 17
X-SP-PR: 5001887
Accept-Ranges: bytes
Content-Length: 68939
Connection: keep-alive

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd"><html lang="de">
<head>
<title>SPIEGEL ONLINE - Aktuelle Nachrichten</title>
<meta http-equiv="X-UA-Compatible“ content="IE=edge“ />
...
```

- In this example, the body contains HTML, because a website was requested 
- for REST APIs, the body would contain data in JSON format
