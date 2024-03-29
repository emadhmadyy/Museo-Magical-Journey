<img src="./readme/title1.svg"/>

<br><br>

<!-- project philosophy -->
<img src="./readme/title2.svg"/>

> A website that aims to provide users with a three-dimensional, unique and interactive ways to explore and appreciate artifacts.

### User Stories

Admin

- As an admin, I want to have an overview of the servers and the clients that are currently connected.
- As an admin, I want to check the details of each socket instance, the details of each room, and the details of every event emitted or received by the server.
- As an admin, I want to receive feedback from users and mark them as resolved.

User

- As a user, I want to browse through a variety of 3D artifacts and know more about each one without interruptions or distractions.
- As a user, I desire a shared artifact browsing experience including instant chat with family and friends, each with a character in the tour.
- As a user, I want to delve into the evolution of human innovations, interact with them, and view them from all angles.

<br><br>

<!-- Tech Stacks -->
<img src="./readme/title3.svg"/>

### Museo is built using the following technologies:

- This project uses [React-three-fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) which is a React renderer for [Three.js](https://threejs.org/docs/). Three.js is a cross-browser JavaScript library and application programming interface (API) used to create and display animated 3D computer graphics in a web browser using WebGL.
- For persistent storage (database), the website uses [MongoDb](https://www.mongodb.com/) which is a cross-platform, document-oriented database that uses a JSON-like format to store documents.
- For real-time messaging and movement, the website uses [Socket.io](https://socket.io/). Socket.io is an event-driven library for real-time web applications. It enables real-time, bi-directional communication between web clients and servers.

<br><br>

<!-- UI/UX -->
<img src="./readme/title4.svg"/>

> We designed Museo using wireframes and mockups, iterating on the design until we reached the ideal layout for easy navigation and a seamless user experience.

- Project Figma design [figma](https://www.figma.com/file/D1ah8vUMAvImz9FAW7y3wc/Museo?type=design&t=PzdPzF7ZU5f5jKX9-6)

### Mockups Examples

| Home screen                                        | Login Screen                                   | Options screen                                     |
| -------------------------------------------------- | ---------------------------------------------- | -------------------------------------------------- |
| ![Landing](./readme/demo/mockups/Landing-page.png) | ![Login](./readme/demo/mockups/Login-page.png) | ![Options](./readme/demo/mockups/Options-page.png) |

<br><br>

<!-- Database Design -->
<img src="./readme/title5.svg"/>

<img src="./readme/demo/database.png">

<br><br>

<!-- Implementation -->
<img src="./readme/title6.svg"/>

### User Screens (Web)

| Demo Video                                                                                       |
| ------------------------------------------------------------------------------------------------ |
| [![Demo Video](./readme/demo/user-screens/solo-tour-static.png)](./readme/demo/museo-video1.mp4) |

| Login Screen                                         |
| ---------------------------------------------------- |
| ![Login](./readme/demo/user-screens/Museo-login.gif) |

| Solo Tour Screen                                   |
| -------------------------------------------------- |
| ![Solo](./readme/demo/user-screens/Museo-solo.gif) |

| Group Tour Screen                                    |
| ---------------------------------------------------- |
| ![Group](./readme/demo/user-screens/Museo-group.gif) |

| Chat Screen                                        |
| -------------------------------------------------- |
| ![Chat](./readme/demo/user-screens/Museo-chat.gif) |

| Time Travel screen                                               |
| ---------------------------------------------------------------- |
| ![Time Travel](./readme/demo/user-screens/Museo-time-travel.gif) |

| Solo Tour Screen                                         | Time Travel Screen                                                     |
| -------------------------------------------------------- | ---------------------------------------------------------------------- |
| ![Solo](./readme/demo/user-screens/solo-tour-static.png) | ![Time Travel](./readme/demo/user-screens/time-travel-menu-static.png) |

| Options Screen                                          | Popup Screen                                          |
| ------------------------------------------------------- | ----------------------------------------------------- |
| ![Options](./readme/demo/user-screens/options-menu.png) | ![Popup](./readme/demo/user-screens/popup-static.png) |

### Admin Screens (Web)

| Dashboard screen                                        | Sockets screen                                      |
| ------------------------------------------------------- | --------------------------------------------------- |
| ![Dashboard](./readme/demo/admin-screens/Dashboard.png) | ![Sockets](./readme/demo/admin-screens/Sockets.png) |

| Socket Detials screen                                             | Rooms screen                                    |
| ----------------------------------------------------------------- | ----------------------------------------------- |
| ![Socket Details](./readme/demo/admin-screens/Socket-details.png) | ![Rooms](./readme/demo/admin-screens/Rooms.png) |

| Room Details Screen                                           | Events Screen                                     |
| ------------------------------------------------------------- | ------------------------------------------------- |
| ![Room Details](./readme/demo/admin-screens/Room-details.png) | ![Events](./readme/demo/admin-screens/Events.png) |

<br><br>

<!-- AWS Deployment -->
<img src="./readme/title8.svg"/>

### The following are the commands used to deploy this project on an EC2 server

> Install MongoDb.

- Create a `/etc/yum.repos.d/mongodb-org-7.0.repo`

```sh
  cd /etc/yum.repos.d
  touch mongodb-org-7.0.repo
  vi mongodb-org-7.0.repo
```

- Paste the below text to it.

```sh
   [mongodb-org-7.0]
   name=MongoDB Repository
   baseurl=https://repo.mongodb.org/yum/amazon/2023/mongodb-org/7.0/x86_64/
   gpgcheck=1
   enabled=1
   gpgkey=https://pgp.mongodb.com/server-7.0.asc
```

- Install MongoDB packages.

```sh
   sudo yum install -y mongodb-org

```

- Start MongoDB.

```sh
   sudo systemctl start mongod
```

> Install Node.js

- Install node version manager.

```sh
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

- Activate nvm.

```sh
   . ~/.nvm/nvm.sh
```

- Install the latest LTS version of Node.js

```sh
   nvm install --lts
```

<br><br>

<!-- Unit Testing -->
<img src="./readme/title9.svg"/>

- This project employs rigorous unit testing methodologies to ensure the reliability and accuracy of code components. By systematically evaluating individual units of the software, we guarantee a robust foundation, identifying and addressing potential issues early in the development process.
  <img src="./readme/demo/unit-tests.png">

<br><br>

<!-- How to Run -->
<img src="./readme/title10.svg"/>

> To set up Museo locally, follow these steps:

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- Download and install [NodeJs](https://nodejs.org/en/download)

### Installation

1.  Clone the repo git clone [github](https://github.com/emadhmadyy/Museo-Magical-Journey.git)

> cd backend

2. Install NPM packages
   ```sh
   npm install
   ```
3. Change `.env.example` file name that is inside backend folder and make it `.env`
4. Enter your MongoDb connection string followed by a new database name in `.env`
   ```sh
   MONGODB_URL= "MongoDb_connection_string/Database_name"
   ```
5. Enter your secret key in `.env`

   ```sh
   SECRET_KEY= "ENTER SECRET KEY"
   ```

> cd frontend

6. Install NPM packages
   ```sh
   npm install
   ```
7. Change `.env.example` file name that is inside frontend folder and make it `.env`
8. Enter backend base url in `.env`
   ```sh
   VITE_BASE_URL = "ENTER URL"
   ```

Now, you should be able to run Museo locally and explore its features.
