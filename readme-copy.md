## ECDSA Node

This project is an example of using a client and server to facilitate transfers between different addresses. Since there is just a single server on the back-end handling transfers, this is clearly very centralized. We won't worry about distributed consensus for this project.

However, something that we would like to incoporate is Public Key Cryptography. By using Elliptic Curve Digital Signatures we can make it so the server only allows transfers that have been signed for by the person who owns the associated address.

### Video instructions
For an overview of this project as well as getting started instructions, check out the following video:

https://www.loom.com/share/0d3c74890b8e44a5918c4cacb3f646c4
 
### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `node index` to start the server 

The application should connect to the default server port (3042) automatically! 

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.

# keypair
public:
04634742f5993c16ef5694fb7c1d1fd7daae92a47dc90e0f717ec21e24ac43ccd60798f8aa6c8adcdb5157a2d3b2b481c43b316ba09ffd598c8c0fde63d5f84700
private:
e8de01d8dec05cda5cf8738c206df50c7a9e1de960605440f2fb1b93ff1578a7

public:
0462de6efe288c7cb5e695e5f844ad4e519bc1a39d829fabe717945e0e98e6c683715699b04de75d8f482b5a3ce2b80c790a94703e63b9dd5fec6d79d38db13922
private:
1411455f0688ac1c785f80a760810c1ae444142f08abbe14d9c15b41ff327d3a

public:
048443aef307eac1dfb1184fef1ab8238a3efb741099d220185da345426171d08fd6329961740fe09ca06767f271dada1f8f9e3cab82358f45751110f064c96e8d
private:
45de1e3fbe893d80cfc534086736929805036e790c11b520932c9dd8e48303f9