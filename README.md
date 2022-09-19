<div align="center">
  <p align="center">
    <a href="//master.blazr.yie.me">
      <img src="https://github.com/av4/blazr/blob/master/client/src/assets/images/apple-touch-icon-120x120.png" width="80">
    </a>
  </p>
  <p align="center">  
    <h3>A share now adaptation of Blaze - A P2P file sharing web app ⚡</h3>
    Without advertising &amp; Google
  </p>
</div>

A file sharing progressive web app(PWA) that allows **users to transfer files between multiple devices.**
It works similar to SHAREit or the Files app by Google but uses web technologies to eliminate the process of installing
native apps for different devices and operating systems. It also supports instant file sharing with **multiple devices at once** which many file sharing apps lack.

Primarily uses [WebTorrent](https://webtorrent.io) and WebSockets protocol (as a fallback) to transfer files between multiple devices. Files shared **via WebTorrent are peer-to-peer**(as they use WebRTC internally) which means there is direct transfer between the sender and receiver **without any intermediate server**. Do note that tracker servers in WebTorrent are used which carry metadata and facilitate the file transfer but do not get the complete file in any form.

### Features
- 💡 No account creation or signups.
- 🚀 One-to-One and Many-to-Many file transfers.
- 🔮 Works across different networks and devices.
- ⚡ Easy to use, and no app installation required.
- 📱 PWA for device-level integrations.
- <img height="13" style="position:relative;top:1px"
src="https://styles.redditmedia.com/t5_4bph8/styles/communityIcon_w8fy3ydhafs41.png?width=256&s=344d90a8381b0d5dd7d7db287e3a73b6e40a7537"> Without Google
- <img height="13"
src="https://is3-ssl.mzstatic.com/image/thumb/Purple122/v4/48/51/d9/4851d9a4-218e-c8c7-8d92-d1862234fac7/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/60x60bb.jpg"> No Ads

### Try it out!
- Go to a deployed client of Blazr - https://master.blazr.yie.me
- Set a basic nickname(this is not stored on any server)
- Create a new room. Room is where peers must join to share files among each other.
- On another device, follow the above steps and join the same room. (Make sure to give a different nickname)
- Both your devices should show up. Now start sharing some files!
 
Read more about how this works at a basic level in this [Medium article](https://medium.com/@AkashHamirwasia/new-ways-of-sharing-files-across-devices-over-the-web-using-webrtc-2554abaeb2e6).

### Deploy your own instance of Blazr

- <a href="https://cloud.digitalocean.com/apps/new?repo=https://github.com/av4/blazr/tree/master"><img src="https://www.deploytodo.com/do-btn-blue.svg" alt="Deploy to DO" width="200"></a>
- <a href="https://webapp.io">Fork this repo, login to webapp.io and deploy the repo fork</a>


Read more on [Deploying on your own server](#running-blaze-in-production)


## Build process
- For the frontend, webpack is setup internally via preact-cli. Overrides can be made in `preact.config.js` file.
- For the backend, [sucrase](https://www.npmjs.com/package/sucrase) is used to transform ES modules imports/exports to CommonJS.


<details><summary><b>Environment variables</b></summary>
<p>
Following environment variables can be set in the build process:


| variable             | description                                                           | default                         |
|----------------------|-----------------------------------------------------------------------|---------------------------------|
| **client**           | Variables for **client** should be set as build args if using Docker. |                                 |
| `WS_HOST`            | URL to the server that is running the Blazr WebSockets server.        | 'ws://\<your-local-ip\>:3030'   |
| `SERVER_HOST`        | URL to the server that running the Blazr HTTP server.                 | 'http://\<your-local-ip\>:3030' |
| `WS_SIZE_LIMIT`      | Max file size limit when transferring files over WebSockets in bytes. | 100000000 (100 MBs)             |
| `TORRENT_SIZE_LIMIT` | Max file size limit when transferring files over WebTorrent in bytes. | 700000000 (700 MBs)             |
| **server**           |                                                                       |                                 |
| `ORIGIN`             | Array of string URLs to allow CORS.                                   | *                               |
| `PORT`               | Port for the server to run.                                           | 3030                            |
| `WS_SIZE_LIMIT`      | Max file size limit when transferring files over WebSockets in bytes. | 100000000 (100 MBs)             |
----------------------------------------------------------------------------------------------------------------------------------

**NOTE:** Any URL in the environment variables should not end with `/`.

</p>
</details>

## Running in production
Can be easily deployed on your own server using Docker and `docker-compose`. The frontend and the backend is completely decoupled from each other.

### Using docker-compose
A `docker-compose.yml` file is present at the root of this project which runs both the server and client containers and sets up a proxy for WebSocket connections on the frontend in Nginx configuration. To run using docker-compose:

```bash
git clone https://github.com/av4/blazr
cd blazr
docker-compose up -d
```

### Directly via Node.js

**Building the frontend**
```bash
npm run build:fe
```
The frontend built code would be located in the `client/build` directory.


**Starting the server and frontend app**
```bash
npm start
```
App can now be accessed at port `8080` :tada:

## License
Blazr is [MIT Licensed](https://github.com/av4/blazr/blob/master/LICENSE)
