## Lecture 1: Network Protocols

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

## Lecture 2: CAP Theorem

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

## Lecture 4: SAGA Pattern

### SAGA Pattern

This discussion focuses on key microservices design patterns, particularly important for system design interviews, building upon concepts like Decomposition Pattern (from Part 1, not provided in sources).

**1. Overview of Discussed Patterns**

- Three core patterns are covered: **Strangler Pattern**, **Saga Pattern**, and **CQRS (Command Query Responsibility Segregation)**.
- **Strangler Pattern** and **Saga Pattern** are highlighted as "very, very, very important" for microservices.
- An interview question related to Saga will be discussed.

---

**2. Strangler Pattern**

- **Purpose**: Used for **refactoring a monolithic service into microservices**. It helps manage the transition from a large, existing monolith to smaller, independent microservices.
- **How it Works (Incremental Migration)**:
  - A **controller (or API Gateway)** is introduced, acting as a traffic director.
  - Initially, **all incoming API traffic** is directed to the existing **monolith**.
  - When a new microservice is developed for a specific "flow" or feature, a **small percentage of traffic (e.g., 10%)** for that flow is gradually redirected to the new microservice. The remaining traffic still goes to the monolith.
  - **Safety Mechanism**: If the newly deployed microservice **fails** or encounters issues, the controller can immediately redirect **100% of the traffic back to the monolith (0% to microservice)**. This ensures system stability.
  - As confidence in the microservice grows (after bug fixes and testing), the percentage of traffic routed to it is **slowly increased**.
  - The term "strangler" refers to this process of gradually **"strangling" the monolith** by diverting its traffic feature by feature, until its usage diminishes.
  - Eventually, as more and more features are migrated, the monolith's traffic will decrease (e.g., from 100 transactions to 90, then 50, then 0), allowing it to be **eventually deleted**.
- **Benefit**: Enables **gradual, controlled migration** without requiring a "big bang" rewrite or taking the entire system offline. It's a highly recommended approach for converting existing monolithic applications.

---

**3. Data Management in Microservices**

- There are two primary approaches for data management in a microservices architecture:

  1.  **Database for each individual service**.
  2.  **Shared Database**.

- **Why Shared Database is NOT Recommended (and why "Database for each individual service" is preferred)**:

  - **Scaling Challenges**: If services share a single database, scaling one service (e.g., an "Order" service with millions of orders) requires scaling the entire database, even if other services (e.g., "Inventory" with fewer products) don't need that level of scaling. This leads to **inefficient resource allocation**.
  - **Dependency Issues and Slow Development**: If multiple services share tables in a common database, modifying a table (e.g., deleting a column) requires checking **all dependencies** across _all_ services using that table. This slows down development and makes changes risky. It's **not scalable** for independent teams.
  - **Ease (but limited) of Shared DB**: Its only advantages are easier **joining of queries** across tables and simpler maintenance of **transactional ACID properties** within a single database. However, these are outweighed by the scaling and dependency issues.

- **"Database for each individual service" (The Recommended Approach)**:
  - **Architecture**: Each microservice has its **own dedicated database**.
  - **Key Principle**: **No service can directly query another service's database**. If Service A needs data from Service B's database, it must **invoke Service B's API** to request the data.
  - **Benefits**:
    - **Technology Freedom**: Each service can choose the **best database technology** (e.g., relational DB, NoSQL, MongoDB, PostgreSQL) that suits its specific needs, independently of other services.
    - **Independent Maintenance & Development**: Services can modify their own database schemas without impacting or needing to consult other services, fostering **autonomy for development teams**.
    - **Independent Scaling**: If a particular service experiences high traffic, only its dedicated database needs to be scaled, allowing for **efficient and targeted scaling**.
  - **New Challenges (which Saga and CQRS address)**:
    - **Distributed Transactions**: How to maintain **ACID transactional properties** when a single logical operation spans multiple, independent databases? This is solved by the **Saga Pattern**.
    - **Cross-Service Queries/Joins**: How to perform queries that require joining data from multiple, separate databases? This is solved by **CQRS**.

---

**4. Saga Pattern**

- **Problem Solved**: Addresses the challenge of maintaining **transactional consistency (ACID properties)** across **multiple, independent databases** in a distributed system.
- **Scenario Example (Illustrating the Problem)**:
  - Consider an "Place an Order" transaction involving an **Order DB**, **Inventory DB**, and **Payment DB**.
  - If the Order DB is updated and Inventory DB is updated successfully, but the **Payment fails**.
  - In a monolithic system with a single database, a full rollback would occur. However, with independent databases, the Order and Inventory updates are "committed" locally. How do you "undo" these committed local transactions if a later step fails?.
- **Definition**: A Saga is a **sequence of local transactions**. Each local transaction updates a database and publishes an event.
- **How it Works (Compensation Events)**:
  - Each service involved in a distributed transaction executes its **local transaction** on its own database.
  - Upon successful completion of its local transaction, the service **publishes an event** (e.g., "OrderCreatedEvent", "InventoryUpdatedEvent").
  - Other services listen to these events. If an event indicates success, they proceed with their own local transaction.
  - **If any local transaction fails** at any point in the sequence (e.g., Payment service fails to process payment):
    - The failing service publishes a **"compensation event"** (or failure event).
    - The services that successfully completed their _prior_ local transactions listen to this compensation event.
    - Upon receiving the compensation event, these prior services execute **"compensation transactions"** (rollback operations) on their own local databases to undo the effects of their previous successful operations.
    - This effectively rolls back the entire distributed transaction by compensating each successful step.
- **Two Types of Saga Implementations**:

  1.  **Choreography Saga**:
      - **Decentralized approach**: No central orchestrator.
      - Services listen to events directly from other services (often via an event bus or message queue) and react to them.
      - **Drawback**: Can lead to **circular dependencies** or **cyclical dependencies** between services, making the flow harder to understand and manage.
  2.  **Orchestration Saga**:
      - **Centralized approach**: Introduces a **dedicated orchestrator component**.
      - The orchestrator manages the entire sequence of operations, calling each service in order.
      - It waits for a response from one service before calling the next.
      - **Advantage**: Eliminates circular dependencies as the orchestrator dictates the flow.
      - **Failure Handling**: If any service fails, the orchestrator is responsible for initiating the **rollback process** by instructing the previously successful services to perform their compensation transactions.

- **Interview Question Example (Payment System)**:
  - **Scenario**: Person A pays Person B ₹10.
  - **Microservices involved**: A **Balance Service** (manages account balances) and a **Payment Service** (records payment history).
  - **Problem**:
    - User requests `makePayment(A, B, 10)`.
    - Balance service successfully **deducts ₹10 from A's account** (e.g., from ₹100 to ₹90) and updates its database.
    - Payment service attempts to **record the payment but fails** (e.g., due to a network issue, external service failure).
    - Result: Person A's balance is reduced, but there's no record of the payment in the Payment Service, leading to data inconsistency.
  - **Saga Solution**:
    - Upon failure, the Payment Service publishes a **failure event**.
    - The Balance Service listens to this failure event for that specific transaction.
    - The Balance Service then performs a **compensation transaction**, adding the ₹10 back to Person A's balance (restoring it to ₹100).
  - **Conclusion**: Saga is crucial for ensuring atomicity and consistency in such **distributed transactions**, resolving the problem of partial updates across multiple databases.

---

**5. CQRS (Command Query Responsibility Segregation)**

- **Problem Solved**: Addresses the difficulty of performing **complex queries or joins across multiple, independent databases** in a "Database for each individual service" architecture.
- **Definition**: CQRS separates the responsibilities of **Commands** (data modification operations) from **Queries** (data retrieval operations).
  - **Commands**: Operations like **Create, Update, and Delete**.
  - **Queries**: Operations like **Select**.
- **How it Works**:
  - **Command Model**: All **Create, Update, and Delete** operations are performed on the **individual service databases** (each service writes to its own dedicated DB).
  - **Query Model (View Database)**: A **separate, dedicated "View DB"** (or "common history view") is created specifically for **read operations**. This View DB can be structured to facilitate complex joins and aggregations of data from multiple source services.
- **Challenge**: How does the View DB stay synchronized and updated with changes happening in the individual service databases?.
- **Update Mechanisms for the View DB**:
  - **Event-Driven**: When a Command (Create, Update, or Delete) occurs in a source service's database, that service **publishes an event**. The View DB listens to these events and performs the corresponding updates to keep its data consistent.
  - **Batch Processes/Regular Procedures**: Alternatively, batch jobs or scheduled procedures can periodically track changes in the source databases and update the View DB.
- **Benefit**: Allows for **optimized read models** that are separate from write models, enabling better performance for queries and supporting complex analytical needs without impacting the operational databases. It also allows read models to be highly denormalized for efficient querying, while write models can remain normalized for transactional integrity.

---

**6. Overall Importance**

- The **Strangler** and **Saga** patterns are emphasized as **critically important** for anyone working with microservices.
- Understanding **CQRS** is also essential for handling data querying challenges in distributed systems.
- These patterns address fundamental challenges when moving from monolithic to microservices architectures, particularly concerning migration, data consistency, and querying across distributed data stores.

## Lecture 6: Consistent Hashing

### Consistent Hashing: Interview Notes

This topic helps in understanding how to effectively manage traffic and data distribution in dynamic system environments.

---

**1. Introduction to Hashing (General Concept)**

- **Purpose**: Hashing involves a **hash function** that takes an **arbitrary length key** (e.g., a name like "Shrayansh") as input and converts it into a **fixed-length output value** (a hash value or hash number).
- **Mod Hashing (Simple Hashing Technique)**:
  - A common technique where the hash value is taken modulo the **fixed size** of a hash table or the number of servers/nodes.
  - **Example**: If the hash function outputs '90' and the hash table size is '6', then `90 % 6 = 0`. The value will be stored at index '0'.
  - This ensures that any data is stored within the specific fixed size of the table.

---

**2. The Problem with Traditional Hashing (Why Consistent Hashing is Needed)**

- Traditional hashing (especially mod hashing) works perfectly when the **size (number of nodes/servers) is fixed**.
- **The Core Problem**: When the **size of the system is not fixed** (i.e., servers or database nodes are added or removed dynamically), traditional hashing **fails**.

  - **Modulo Change**: If a new server is added (e.g., from 3 servers to 4), the modulo operation changes (e.g., `mod 3` becomes `mod 4`).
  - **Consequence**: The same key will now hash to a **different server/node** than before.
    - **Example**: "Shrayansh" previously mapped to Node 1 with `mod 3`, but with `mod 4`, it might now map to Node 2.
  - **Data Inconsistency/Unavailability**: If the data for "Shrayansh" is still on Node 1, but new requests are being routed to Node 2, the data will not be found, leading to issues.
  - **Massive Rebalancing**: To fix this, **rebalancing** is required, meaning **millions of database entries or keys** might need to be moved from their original servers to new ones. This is highly inefficient and resource-intensive.

- **Real-World Scenarios Where This Problem Arises**:
  - **Load Balancers for Application Servers**: Load balancers distribute incoming requests across multiple application servers (e.g., App Server 1, App Server 2, App Server 3). If a server is added or removed, the distribution logic breaks, leading to unequal load or unavailability.
  - **Horizontal Sharding (Database Sharding)**: Dividing a large database into multiple smaller databases (shards). If new database nodes are added or old ones removed, rebalancing becomes a huge task for millions of rows.
  - In both cases, the goal is to **equally distribute traffic/data** among servers, but normal hashing cannot handle **dynamic server environments**.

---

**3. Consistent Hashing: The Solution**

- **Purpose**: Consistent Hashing is designed to **minimise the rebalancing** required when nodes (servers, database shards) are added or removed from a distributed system.
- **Goal of Rebalancing**: It aims to rebalance only a small fraction of the total keys, ideally around `1/N` percent of the total number of keys, where 'N' is the number of nodes.

---

**4. How Consistent Hashing Works**

- **1. The Virtual Ring**:
  - A **virtual ring** (or hash ring) is created, typically a fixed-size range (e.g., 0 to 11, then wrapping back to 0).
- **2. Mapping Servers to the Ring**:
  - Each **server (or node)** in the system is hashed using a consistent hash function and **placed at specific positions** on this virtual ring. These positions are determined by the hash value of the server's ID or name.
  - **Example**: Server 1 might hash to position 2, Server 2 to position 8, and Server 3 to position 11 on a 0-11 ring.
- **3. Mapping Keys (Data/Requests) to the Ring**:
  - Each **incoming key (data item or request)** is also hashed and placed at its corresponding position on the same virtual ring.
  - **Example**: Key K1 might hash to position 0, K2 to 1, K3 to 3, etc..
- **4. Routing Logic (Clockwise Movement)**:
  - To determine which server is responsible for a particular key, you move **clockwise** around the ring **from the key's position** until you encounter the **first server**.
  - That server is responsible for handling that key.
  - **Example**: If Key K1 is at position 0, and Server 1 is at position 2, Server 2 at 8, Server 3 at 11:
    - Moving clockwise from K1 (position 0), the first server encountered is Server 1 (position 2). So, Server 1 handles K1.
    - If Key K5 is at position 7, moving clockwise, the first server encountered is Server 2 (position 8). So, Server 2 handles K5.

---

**5. Benefits of Consistent Hashing (Solving the Problem)**

- **Adding a Server**:
  - When a new server (e.g., S4) is added to the ring, it occupies a new position.
  - Only the keys that were previously assigned to the server _immediately clockwise_ to the new server's position will now be reassigned to the new server.
  - The vast majority of keys remain assigned to their original servers, thus **minimizing rebalancing**.
- **Deleting a Server**:
  - When a server is removed (e.g., S1), all the keys it was previously handling are now reassigned to the **next server in the clockwise direction** on the ring.
  - Again, this means only a limited number of keys are affected and need to be rebalanced, not the entire dataset.

---

**6. Disadvantage and Its Solution (Virtual Nodes / Replicas)**

- **Disadvantage (Uneven Distribution)**:
  - In a simple Consistent Hashing setup, if the servers are not **uniformly distributed** (i.e., they are clustered together on the ring), it can lead to **unequal load distribution**.
  - **Example**: If Server 1, Server 2, and Server 3 are placed very close together on one side of the ring, while the rest is empty, then all keys will map to Server 1 (by clockwise movement), leading to Server 1 being overloaded. This defeats the purpose of load balancing.
- **Solution: Virtual Objects (Virtual Nodes / Replicas)**:
  - To counteract uneven distribution, each **physical server** is represented by **multiple "virtual nodes" or "replicas"** on the ring.
  - **How it works**: Instead of just hashing Server 1 once, you hash "Server1-A", "Server1-B", "Server1-C", etc., placing multiple points for the same physical server randomly across the ring.
  - **Benefit**: This increases the number of "server points" on the ring, leading to a **more uniform distribution** of keys among the actual physical servers.
  - **Number of Replicas**: The number of replicas for each server should be sufficient to achieve the desired `1/N` rebalancing percentage and a good distribution.

---

**7. Key Takeaways for Interview**

- Consistent Hashing is crucial when dealing with **dynamic nodes** (servers that can increase or decrease) in distributed systems.
- It is used where **traffic needs to be equally divided** among these dynamic nodes.
- Primary use cases include **Load Balancing** and **Horizontal Sharding**.
- It directly addresses the limitations of traditional `mod` hashing when the number of nodes is not fixed, preventing massive rebalancing efforts.

## Lecture 8:

### Back-Of-The-Envelope Estimation: Interview Notes

This topic is crucial for System Design Interviews as it helps in making informed decisions about system architecture.

---

**1. What is Back-Of-The-Envelope Estimation?**

- **Purpose**: BOTEE is used to **drive decisions for system design** based on quantitative numbers.
- **Need**:
  - It helps answer critical questions from interviewers such as: "Do you really need a load balancer?", "How many servers will you need?", "What should be the capacity?", "Do you need a cache, and if so, what size storage?".
  - Failing to answer these questions, even with a correct design, can give the impression that you started designing without considering system constraints.
  - It prevents **over-provisioning** or under-provisioning resources, ensuring efficient use.
- **Definition**: It's a method to come up with **rough numbers or "T-shirt size" estimations** (e.g., Small, Medium, Large). These are high-level estimations, not exact or accurate figures that match real-world systems like Facebook.

---

**2. Key Considerations for Back-Of-The-Envelope Estimation**

- **Nature of Numbers**: Always remember these are **rough estimations**, not precise figures. They are for driving design decisions, not for perfect accuracy.
- **Time Management**: **Do not spend much time** on BOTEE in an interview; ideally, **less than 10 minutes**. Interviewers typically expect a scalable design regardless of the exact numbers, so the estimation's primary role is to show you can think quantitatively.
- **Simplification of Assumptions**:
  - Keep assumption values **simple and easy to compute**.
  - Use multiples of 10 (e.g., 10 million, 100 million, 1,000, 500). Avoid complex numbers (e.g., 27.75 million, 435).

---

**3. Essential Cheat Sheet and Formulas**

- **Multiples of Three Zeros (for Traffic & Storage)**:
  - 3 zeros (000) = Kilo (e.g., 1,000)
  - 6 zeros (000,000) = Million
  - 9 zeros (000,000,000) = Billion (and also Gigabyte for storage calculations)
  - 12 zeros = Trillion (and also Terabyte for storage calculations)
  - 15 zeros = Quadrillion (and also Petabyte for storage calculations)
- **Storage Units (Hierarchy)**: Kilobyte (KB) < Megabyte (MB) < Gigabyte (GB) < Terabyte (TB) < Petabyte (PB).
- **Assumed Data Sizes (General)**:
  - **Character**: 2 bytes (assuming Unicode, as ASCII is 1 byte).
  - **Long/Double**: 8 bytes.
  - **Average Image Size**: 300 KB.
- **Storage Calculation Formula (Cheat Sheet)**:
  - `X million users * Y MB = (X * Y) TB`
    - (Million = 6 zeros, MB = 6 zeros, combined = 12 zeros, which is TB)
  - Example: `5 million users * 2 KB = 10 GB`
    - (Million = 6 zeros, KB = 3 zeros, combined = 9 zeros, which is GB)

---

**4. What to Compute in BOTEE**

- Generally, you should compute the following three crucial resources:
  - **Number of Servers** needed.
  - **RAM** (memory) requirements.
  - **Storage Capacity**.
  - (Other factors can be computed, but these are often the most important).

---

**5. Step-by-Step Facebook Estimation Example**
This section illustrates the application of BOTEE principles:

- **A. Traffic Estimation**:

  - **Total Users (Assumption)**: 1 Billion.
  - **Daily Active Users (DAU)**: 25% of total users = 250 Million users.
  - **Queries per User (Assumption)**: 5 read operations + 2 write operations = 7 queries per daily active user.
  - **Seconds in a Day (Rounded)**: 86,400 seconds, rounded up to **100,000 (1 Lakh) seconds** for ease of calculation.
  - **Calculated Traffic (Queries Per Second)**:
    - (250 Million DAU \* 7 queries/user) / 100,000 seconds = **18,000 (18K) queries per second**.

- **B. Storage Estimation**:

  - **Assumptions for Daily Content**:
    - Every daily active user makes **2 posts** per day, each **250 characters** long.
    - **10% of daily active users** upload **1 image** per day.
    - Image size is **300 KB** (from cheat sheet).
  - **Daily Post Storage Calculation**:
    - Size of 1 post: 250 characters \* 2 bytes/character = 500 bytes.
    - Size of 2 posts: 500 bytes \* 2 = 1,000 bytes = **1 KB**.
    - Total daily post storage: 250 Million DAU \* 1 KB/user = **250 GB per day**.
  - **Daily Image Storage Calculation**:
    - Number of users uploading images: 10% of 250 Million DAU = **25 Million users**.
    - Total daily image storage: 25 Million users _ 1 image/user _ 300 KB/image = 7,500 GB, rounded to **8 TB per day**.
  - **Total Storage for 5 Years (Assumption)**:
    - 5 years = 1,825 days, rounded to **2,000 days** for calculation.
    - Total post storage (5 years): 2,000 days \* 250 GB/day = **500 TB**.
    - Total image storage (5 years): 2,000 days \* 8 TB/day = **16 PB**.

- **C. RAM Estimation (for Caching)**:

  - **Assumption**: Cache the last **5 posts** for each user.
  - **Memory per User for Cache**:
    - 1 post = 500 bytes.
    - 5 posts = 5 \* 500 bytes = 2,500 bytes, rounded to **3 KB**.
  - **Total RAM Needed**: 250 Million DAU \* 3 KB/user = **750 GB**.
  - **Number of Caching Machines (Example)**: If one machine holds 75 GB of RAM, then 750 GB / 75 GB/machine = **10 machines** for caching nodes.
  - **Latency Estimation (Impression)**: You can state an assumption for latency, e.g., 95% of requests served within 500 milliseconds, to show awareness of performance.

- **D. Application Server Estimation**:
  - **Current Traffic**: 18K queries per second.
  - **Server Processing Capacity (Assumptions)**:
    - One server has 50 threads.
    - One request takes 500 milliseconds (0.5 seconds) to serve.
    - In 1 second, one thread can serve 2 requests (1 second / 0.5 seconds/request).
    - One server (with 50 threads) can serve: 50 threads \* 2 requests/thread = **100 requests per second**.
  - **Total Application Servers Needed**: 18,000 QPS / 100 QPS/server = **180 application servers**.

---

**6. Trade-off Discussion (CAP Theorem)**

- After presenting the estimations, discuss the **CAP Theorem**.
- **CAP Theorem**: States that a distributed data store can only guarantee two out of three properties at any given time:
  - **Consistency (C)**: All clients see the same data at the same time.
  - **Availability (A)**: Every request receives a response, without guarantee of it being the latest version.
  - **Partition Tolerance (P)**: The system continues to operate despite network failures (partitions) between nodes.
- **Facebook Example Trade-off**: The example suggests choosing **Availability (A) and Partition Tolerance (P)**, and dropping Consistency (C).
  - **Why A & P for Facebook**:
    - **Partition Tolerance**: Essential for a system like Facebook, which operates across distributed nodes (e.g., database nodes in different regions). The system must remain functional even if there are network breakages or failures between these nodes.
    - **Availability**: Crucial for a social media platform; users expect the system to be up and serving requests even if some nodes are down.
  - **Dropping Consistency**: Implies that eventual consistency is acceptable. For instance, if you make a post, it might take a short while to appear for all friends across all regions. This is a common trade-off for high-availability, globally distributed systems.
- **Importance**: Discussing this demonstrates your awareness of fundamental distributed system concepts.

---

**7. General Advice**

- **Always ask the interviewer** if they require a Back-Of-The-Envelope estimation for the given design problem.
- Remember that these numbers are **just estimations** and will differ from real-world figures. The process demonstrates your ability to think systematically and quantitatively.

## Lecture 10: SQL vsNOSQL

### SQL vs. NoSQL: Interview Notes

This topic is critical for High-Level Design (HLD) rounds in interviews, as choosing the correct database is a fundamental architectural decision that requires strong reasoning. Simply stating "we can use anything" or failing to justify your choice can be detrimental.

---

**1. Understanding the Scope**

- The primary goal is to understand **when to use SQL and when to use NoSQL**.
- This discussion provides a basic understanding of where to apply each, rather than an in-depth tutorial on SQL or NoSQL specifics.

---

**2. Key Categories for Comparison**
To differentiate between SQL and NoSQL, we will analyse them across four crucial categories:

- **Structure**
- **Nature**
- **Scalability**
- **Property**

---

**3. SQL (Relational Databases)**

**A. Structure**

- **Definition**: SQL stands for **Structured Query Language** and is used to query **Relational Database Management Systems (RDBMS)**.
- **Data Organisation**: Data is stored in a **structured form** using **tables**, which consist of **rows and columns**.
- **Relationships**: There are **relations between multiple tables** (e.g., parent-child relationships).
- **Schema**: SQL databases enforce a **predetermined schema**. This means you must define the table name, column names, data types (e.g., string, integer), and their lengths **before you can insert any data or run queries**.

**B. Nature**

- **Data Concentration**: SQL databases typically have a **concentrated or centralised nature**. For a particular entity (e.g., an employee), their **whole data across all related tables will generally reside within a single server**.
- **Data Integrity Focus**: This centralised approach helps in maintaining data integrity across related information.

**C. Scalability**

- **Preferred Scaling**: SQL databases are **more intuitively and effectively scaled vertically**.
- **Vertical Scaling**: This involves **increasing the resources of a single server**, such as upgrading its RAM size or storage capacity.
- **Horizontal Scaling (Sharding)**: While horizontal scaling (distributing data across multiple servers, or sharding) is possible, it is **not as well supported or intuitive for SQL** compared to NoSQL. Sharding can involve distributing partial data (e.g., specific columns or tables) across different servers, but this often adds complexity in SQL.

**D. Property**

- **ACID Properties**: SQL databases strictly adhere to **ACID properties**, which ensure data integrity and consistency during transactions:
  - **Atomicity (A)**: All or nothing. A transaction is treated as a single, indivisible unit; either all of its operations are completed successfully, or none are.
  - **Consistency (C)**: Ensures that data remains in a valid state after a transaction. Rules and constraints are followed to maintain data integrity.
  - **Isolation (I)**: Concurrent transactions do not interfere with each other. Each transaction appears to execute in isolation.
  - **Durability (D)**: Once a transaction is committed, the changes are permanent and survive system failures.
- **Crux of ACID**: ACID properties collectively ensure that **data integrity is maintained** and that data is **fully consistent**.

---

**4. NoSQL (Non-Relational Databases)**

**A. Structure**

- **Definition**: NoSQL is often referred to as **"Not Only SQL"**. It handles **unstructured data**.
- **Flexible Schema**: NoSQL databases do not require a predetermined schema, offering much greater flexibility.
- **Four Main Types of NoSQL Databases**:
  - **Key-Value DB**: The simplest type. Data is stored as a **key-value pair**.
    - The **value is typically opaque**, meaning you **cannot query or search based on the value's content**; you can only query or search based on the key.
    - **Example**: DynamoDB. Very fast for key-based lookups.
  - **Document DB**: Stores data in **documents**, often in formats like **JSON or XML**.
    - Unlike Key-Value DBs, **you can query or search on both the key and the content within the value (document)**.
    - **Example**: MongoDB.
  - **Column-wise DB**: Data is stored with a key and a **list of column-value pairs**.
    - The **number of columns can be dynamic** for different keys, meaning one record might have more columns than another.
  - **Graph DB**: Data is stored as **nodes and edges**, where **edges explicitly show relationships** between nodes.
    - **Very fast for finding direct relationships**, as it avoids full table scans required in SQL for similar queries.
    - **Use Cases**: Commonly used in social networking (e.g., finding friends of friends) and recommendation engines.

**B. Nature**

- **Distributed**: NoSQL databases are **distributed in nature**. Data can be **stored across multiple nodes (servers)**, with different pieces of data residing in different nodes. This is distinct from SQL's more concentrated approach.

**C. Scalability**

- **Preferred Scaling**: NoSQL databases are designed for **horizontal scaling**.
- **Horizontal Scaling**: This involves **adding more nodes or servers** to distribute the data and workload. As data grows, you can easily add more nodes to store additional user data, allowing for massive scalability.

**D. Property**

- **BASE Properties**: NoSQL databases typically follow **BASE properties** rather than ACID:
  - **Basically Available (BA)**: NoSQL databases are **highly available**. Due to their distributed nature and data replication across multiple nodes, the system can remain operational even if some nodes fail.
  - **Safe State (S)**: The state of data can **change even without user interaction**. This refers to the internal synchronisation mechanisms where distributed nodes update themselves to maintain consistency (e.g., through vector clocks).
  - **Eventual Consistency (E)**: If you query data, you **might initially receive a stale copy**. However, if you retry the query after some time, you will eventually receive the latest data as the distributed nodes synchronise their copies.
- **Trade-off**: NoSQL sacrifices strict immediate consistency for **higher availability and partition tolerance**, making eventual consistency acceptable for large, distributed systems.

---

**5. When to Choose SQL vs. NoSQL (Decision Factors)**

The choice between SQL and NoSQL depends on the specific requirements of your application. Here are the key factors to consider:

**A. Query Flexibility**

- **SQL**: Choose SQL if you require **flexible and complex query functionality**, such as multi-table joins, which might change over time based on business needs.
- **NoSQL**: Opt for NoSQL if you need **very basic query searches** or if you **know in advance exactly which columns/keys you will query** and these search patterns are unlikely to change.

**B. Relational Nature of Data**

- **SQL**: Prefer SQL when your **data is highly relational**, meaning there are many dependencies, hierarchies, and tight relationships (e.g., parent-child) between different data entities.
- **NoSQL**: Use NoSQL when your **data is not in a highly relational form** or is not too tightly dependent on other entities. It's suitable for storing data where relationships are minimal or can be managed within a single document/entry.

**C. Data Integrity and Consistency Requirements**

- **SQL**: **Crucial for applications where data integrity and strong consistency are paramount**, and you **cannot afford to lose a single transaction or experience any inconsistency**.
  - **Example**: Financial institutions **must use SQL** due to the absolute need for consistency.
- **NoSQL**: Suitable when you can **afford some inconsistency** (due to eventual consistency) and where losing one or two transactions among millions or billions of dynamic data records has **minimal impact**.

**D. Availability and Performance Needs**

- **NoSQL**: Go for NoSQL if you require **high availability** (the system must always be up and serving requests) and **high performance in search queries**, even if it means accepting **some inconsistency**.
  - NoSQL's distributed nature makes it highly available and its optimised data storage (e.g., direct node access in key-value stores) makes searching very fast.
- **SQL**: While SQL can achieve high performance, its inherent structure and scaling model (vertical) can make achieving the same level of global availability and dynamic horizontal scaling for massive data volumes more challenging compared to NoSQL.

---

**In summary, these factors – query capability, data relationality, consistency needs, and availability/performance requirements – are the determinants for choosing the appropriate database for your system design.**
