- **Lecture 1: Network Protocols**

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

- **Lecture 2: CAP Theorem**

### CAP Theorem: Interview Notes

The CAP Theorem is a fundamental concept in High-Level Design, especially crucial for distributed systems. Understanding it is essential for system design as it influences the entire design process, requiring trade-offs to be decided early on to avoid difficult changes later.

**1. What is CAP Theorem?**

- CAP Theorem defines **three desirable properties of a distributed system with replicated data**: Consistency (C), Availability (A), and Partition Tolerance (P).
- The unique and crucial part of the CAP Theorem is that **all three properties can never be used together simultaneously** in a distributed system with replicated data. You can only choose two out of the three.

**2. The Three Desirable Properties (C, A, P):**

- **C: Consistency**

  - **Definition**: After a successful write operation on any node, if you read the data from _any_ other node, you should always get the **same, most recent data**.
  - **Example**: If node B updates data `x` from 4 to 5, and this change is replicated to node C, then any subsequent read from either B or C should return `x=5`.

- **A: Availability**

  - **Definition**: All nodes in the distributed system (e.g., node B and node C) must **respond** to requests. They should either provide data, or indicate a failure, but they must respond. If all nodes are responding, the system is considered available.
  - **Example**: If you have two database nodes, B and C, both should be able to respond to queries.

- **P: Partition Tolerance**
  - **Definition**: This is often the most confusing but critical concept. Partition Tolerance means that even if there is a **communication break (partition) between nodes** (e.g., node B and node C cannot talk to each other), the system should **remain operational** and still be able to query.
  - **Example**: If communication between database nodes B and C breaks, but a user (A) can still query B or C and get a response, then the system is Partition Tolerant. The internal communication breakdown doesn't stop the system from accepting and fulfilling user requests.

**3. Why C, A, and P Cannot Coexist (The Core Trade-off):**

The CAP Theorem states that you can only achieve two out of these three properties simultaneously. Here's why, illustrated by attempting to achieve all three:

- **Scenario: Trying to achieve C, A, and P together (C-A-P is NOT possible)**
  - Assume a system aims for Consistency, Availability, and Partition Tolerance.
  - **Problem**: If a partition occurs (communication breaks between B and C).
  - If node B receives a write (e.g., `x=6`) and updates itself, but due to the partition, it **cannot replicate** this update to node C.
  - At this point, B has `x=6`, but C still has `x=5` (the old value).
  - If the system continues to operate (maintaining Availability), and a user reads from C, they will get `x=5`, which is **inconsistent** with the data on B.
  - Therefore, **at the time of a partition, you cannot maintain both Consistency and Availability**. You must drop one.

**4. The Possible CAP Combinations:**

Since C-A-P is not possible, you must choose one of the following pairs:

- **1. AP (Availability + Partition Tolerance)**

  - **Trade-off**: **Consistency is sacrificed/dropped**.
  - **How it works**: When a partition occurs (B and C cannot communicate).
    - If a write happens on B (e.g., `x=6`), B updates itself.
    - Due to the partition, C is not updated.
    - The system remains **available** (B and C still respond to queries) and **partition tolerant** (operates despite the break).
    - However, if a user queries B, they get `x=6`, but if they query C, they get `x=5`. The data is **inconsistent** across nodes.
  - **Benefit**: System remains fully operational even during network failures.
  - **Use Case**: Systems where constant availability and fault tolerance are paramount, and eventual consistency is acceptable (e.g., social media feeds, e-commerce shopping carts).

- **2. CP (Consistency + Partition Tolerance)**

  - **Trade-off**: **Availability is sacrificed/dropped**.
  - **How it works**: When a partition occurs (B and C cannot communicate).
    - If a write happens on B (e.g., `x=6`), B attempts to update C.
    - To guarantee **consistency** across the system, if C cannot be reached (due to partition), node B (or the system) will **block further writes/reads** or **take the affected node(s) offline** until consistency can be restored.
    - This means not all nodes are responding, thus **sacrificing availability**.
    - Example: If B gets a write, and C cannot be reached, C is taken "down" or marked as unavailable. All read requests are then routed to B to ensure consistency.
  - **Benefit**: Data is always consistent.
  - **Use Case**: Systems where data integrity and consistency are critical, and temporary unavailability during network partitions is acceptable (e.g., banking transactions, financial ledgers).

- **3. CA (Consistency + Availability)**
  - **Trade-off**: **Partition Tolerance is sacrificed/dropped**.
  - **How it works**: This scenario assumes **no network partitions**. If a partition _does_ occur while trying to maintain Consistency and Availability, the system **cannot remain operational**.
  - **Implication**: If a partition happens, the system must **stop accepting requests** (become unavailable) until the partition is resolved and consistency is restored. It effectively means the system is "down" during a partition.
  - **Use Case**: Typically applies to single-node databases or systems within a highly reliable, single data center network where partitions are not expected. It's generally not applicable to truly distributed systems that operate across different geographical locations or unreliable networks.

**5. Practical Considerations and Interview Insights:**

- In modern distributed systems architectures, **Partition Tolerance (P) is almost always a mandatory requirement** and is **never dropped**.
  - Distributed systems are inherently prone to network issues and communication breaks (partitions).
  - It is generally unacceptable for a system to go down (become unavailable or inconsistent) just because of a network partition. Imagine Google or Amazon going down for 10 minutes due to a network break – it's not good.
- Therefore, in real-world distributed system design, the choice almost always comes down to selecting between **AP** (Availability and Partition Tolerance, sacrificing Consistency) or **CP** (Consistency and Partition Tolerance, sacrificing Availability).
- **Common Interview Question**: "What would you drop in a distributed system, Consistency or Availability, given Partition Tolerance?"
  - The answer will depend on the specific requirements of the system, but the core choice is always between C and A, as P is assumed to be required.
