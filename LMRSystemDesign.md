_Lecture 1: Network Protocols _

- **Network Protocols**:

  - Network protocols define **rules and regulations** that allow two computer systems to communicate over a network.
  - They ensure that systems "speak the same language" to enable communication.
  - The Open Systems Interconnection (OSI) model has seven layers; this discussion focuses on the **Application Layer** and **Transport Layer**.

- **Application Layer Protocols**:

  - The Application Layer protocols are divided into two main categories: **Client-Server Protocols** and **Peer-to-Peer Protocols**.
  - **Client-Server Model**:
    - In this model, a **client (e.g., a web browser)** makes a request, and a **server** provides a response.
    - Communication is typically **one-way initiated by the client**, with the server responding.
    - Examples include HTTP, FTP, and SMTP.
  - **Peer-to-Peer (P2P) Model**:
    - In a P2P model, all connected machines (peers) **can talk to each other directly**, without necessarily relying on a central server for all communication.
    - WebRTC is an example of a P2P protocol.
  - **Specific Application Layer Protocols**:
    - **HTTP (Hypertext Transfer Protocol)**:
      - Used for accessing **web pages**.
      - It is **connection-oriented**, meaning a connection is established first.
      - HTTPS is the secure version.
    - **FTP (File Transfer Protocol)**:
      - Used for **file transfers**.
      - Maintains **two connections**: a **control connection** (always active) and a **data connection** (can be created and disconnected as needed).
    - **SMTP (Simple Mail Transfer Protocol)**:
      - Primarily used for **sending emails**.
      - Often used in conjunction with IMAP or POP for email management.
    - **IMAP (Internet Message Access Protocol) & POP (Post Office Protocol)**:
      - Used for **receiving or reading emails**.
      - **IMAP** is widely used because it allows emails to be **read directly from the server**, enabling access from multiple devices.
      - **POP** downloads emails to the local device and typically **deletes them from the server**, making it less flexible for multi-device access.
    - **WebSocket**:
      - A protocol for enabling **bidirectional (two-way) communication** between a client and a server.
      - **Crucially, it is NOT peer-to-peer**, even though it offers two-way communication. In WebSocket, the client and server can both initiate communication, but clients do not directly talk to each other.
      - Ideal for **messaging applications** like WhatsApp or Telegram, where the server needs to push messages to clients.
    - **WebRTC (Web Real-Time Communication)**:
      - A **peer-to-peer protocol**.
      - Used for **live streaming and video calling** applications (e.g., Google Meet-like services).
      - It uses **UDP** (User Datagram Protocol) at the transport layer for faster data transfer.

- **Transport Layer Protocols**:

  - This layer deals with how data segments are transferred between end systems.
  - **TCP/IP (Transmission Control Protocol/Internet Protocol)**:
    - A **connection-oriented** protocol.
    - Establishes a **virtual connection** before data transfer.
    - Divides data into **small packets**.
    - **Maintains order** of data packets (sequences them).
    - Requires **acknowledgements** for each packet, and re-sends if an acknowledgement is not received.
    - **Reliable** but **slower** due to connection maintenance, ordering, and acknowledgements.
    - Suitable when **data integrity and order are critical**.
  - **UDP (User Datagram Protocol)**:
    - A **connectionless** protocol.
    - Does **not maintain a connection**.
    - Divides data into **datagrams** and sends them without specific ordering or acknowledgements.
    - **Does not guarantee order** of packets, and packets may arrive out of sequence or be lost.
    - **Faster** than TCP because it avoids the overhead of connection setup, acknowledgements, and ordering.
    - Ideal for **live streaming and video/voice calling**, where some data loss or out-of-order delivery is acceptable for the sake of speed (e.g., it's better to miss a frame in a video call than to have a significant delay).

- **Key Use Cases Summary**:
  - **HTTP/HTTPS**: Standard web browsing, accessing web pages securely.
  - **WebSocket**: Designing **messaging applications** (like WhatsApp) where bidirectional communication (server pushing messages to client) is required.
  - **WebRTC**: Building **live streaming or video calling** applications (like Google Meet) due to its P2P nature and reliance on UDP for speed.
  - **FTP**: Transferring files.
  - **SMTP/IMAP**: Sending and receiving/reading emails.
  - **TCP**: Use when **reliability, order, and guaranteed delivery** of data are paramount (e.g., file downloads, web browsing data).
  - **UDP**: Use when **speed and low latency** are more important than absolute reliability and order, especially in real-time applications where a slight loss of data is preferable to delay (e.g., live video/audio streaming, online gaming).
