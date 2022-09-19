<div align="center">
  <p align="center">
    <a href="//master.blazr.yie.me">
      <svg width="116" height="45" viewBox="0 0 116 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9605 2.76095C23.4669 3.09213 23.6792 3.73258 23.4722 4.30457L18.6418 17.6498L28.2691 18.1004C28.7823 18.1245 29.2329 18.4527 29.4171 18.9367C29.6013 19.4207 29.4842 19.9689 29.1187 20.3333L5.95621 43.4333C5.51475 43.8736 4.82565 43.9356 4.314 43.581C3.80235 43.2264 3.61229 42.5552 3.86106 41.9814L11.3706 24.6603L2.55617 24.4415C2.03534 24.4286 1.57298 24.1018 1.38305 23.6123C1.19311 23.1227 1.31265 22.566 1.68634 22.1997L21.3551 2.92012C21.7879 2.49581 22.454 2.42977 22.9605 2.76095ZM5.69874 21.9074L13.36 22.0975C13.7909 22.1082 14.1882 22.3347 14.4197 22.7016C14.6512 23.0685 14.6864 23.5276 14.5137 23.9261L8.93702 36.789L25.199 20.5709L16.762 20.1759C16.3505 20.1567 15.9728 19.9409 15.7446 19.5949C15.5165 19.249 15.4652 18.8141 15.6065 18.4237L19.1004 8.77087L5.69874 21.9074Z" fill="#3BE8B0" />
          <path d="M25.3623 3.85665C25.3623 5.5873 23.9719 6.99027 22.2567 6.99027C20.5415 6.99027 19.1511 5.5873 19.1511 3.85665C19.1511 2.12599 20.5415 0.723022 22.2567 0.723022C23.9719 0.723022 25.3623 2.12599 25.3623 3.85665Z" fill="#3BE8B0" />
          <path d="M6.21117 22.3973C6.21117 24.1279 4.82076 25.5309 3.10559 25.5309C1.39042 25.5309 0 24.1279 0 22.3973C0 20.6666 1.39042 19.2636 3.10559 19.2636C4.82076 19.2636 6.21117 20.6666 6.21117 22.3973Z" fill="#3BE8B0" />
          <path d="M8.79916 41.7213C8.79916 43.4519 7.40875 44.8549 5.69358 44.8549C3.97841 44.8549 2.58799 43.4519 2.58799 41.7213C2.58799 39.9906 3.97841 38.5877 5.69358 38.5877C7.40875 38.5877 8.79916 39.9906 8.79916 41.7213Z" fill="#3BE8B0" />
          <path d="M30.7971 19.2636C30.7971 20.9943 29.4067 22.3973 27.6915 22.3973C25.9763 22.3973 24.5859 20.9943 24.5859 19.2636C24.5859 17.533 25.9763 16.13 27.6915 16.13C29.4067 16.13 30.7971 17.533 30.7971 19.2636Z" fill="#3BE8B0" />
        </svg>
    </a>
  </p>
  <p align="center">  
    <h3>A share now adaptation of Blaze - A P2P file sharing web app ⚡</h3>
    Without the advertising & Google
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
