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

## Lecture 12:

### Rate Limiter System Design: Interview Notes

This is a **very important interview question** that engineers frequently face.

---

**1. Understanding the Problem (Why Rate Limiting?)**

- **Problem**: Attackers send **unwanted, thousands or even lakhs of requests per second** to a server.
- **Server Limitations**: Servers have **limited resources** such as RAM and disk space.
- **Impact of Attack**: Excessive requests consume all server resources, causing the **server to go down**.
- **Genuine User Impact**: When the server is down, **genuine user requests are declined**.
- **Solution**: To prevent this Distributed Denial of Service (DDoS) attack and ensure service availability for genuine users, we implement a **Rate Limiter**.
- **Engineer's Role**: As an engineer, you need to know **how to limit the rate on APIs**.

---

**2. Key Rate Limiting Algorithms**

Understanding the underlying algorithms is crucial for designing a rate limiter. There are five key algorithms:

- **Token Bucket**
- **Leaking Bucket**
- **Fixed Window Counter**
- **Sliding Window Log**
- **Sliding Window Counter**

#### 2.1. Token Bucket Algorithm

- **Concept**: Imagines a **bucket** with a **fixed capacity** to hold **tokens**.
- **Components**:
  - **Bucket**: Has a maximum capacity (e.g., 4 tokens).
  - **Tokens**: Represent available requests.
  - **Refiller**: A worker that **adds tokens to the bucket at a configured rate** (e.g., 2 tokens per minute).
    - If the bucket is full, excess tokens overflow and are lost.
- **Configuration**: The bucket capacity and refiller rate are **dynamically configurable values**.
  - Examples: "3 tokens per minute for user per API".
- **Request Processing Flow**:
  1.  When a request arrives, it first **checks if a token is present** in the bucket.
  2.  **If a token is present**: The request **consumes one token**, and the request is processed.
  3.  **If no token is present (bucket is empty)**: The request is **declined**.
- **Implementation**: Can be easily implemented using a **counter**.
  - The counter represents the number of available tokens. When a request comes, the counter is reduced. If the counter is zero, the request is denied.
  - The refiller logic updates the counter periodically.
- **HTTP Response Code**: When a request is declined due to rate limiting, the **HTTP code returned is 429**.

#### 2.2. Leaking Bucket Algorithm

- **Concept**: Simulates a bucket with a hole at the bottom, where requests leak out at a **constant rate**.
- **Components**:
  - **Bucket/Queue**: Has a **fixed capacity**.
  - **Incoming Requests**: Can be irregular (sometimes more, sometimes less).
  - **Outgoing Requests**: Processed at a **constant, fixed rate**.
- **Implementation**: Typically implemented using a **Queue**.
- **Request Processing Flow**:
  1.  Incoming requests are added to the queue.
  2.  The system checks if the queue has capacity.
  3.  **If capacity available**: Request is added to the queue and processed at the constant rate.
  4.  **If no capacity**: The request will be **denied/overflowed**.
- **Disadvantage**: The primary disadvantage is the **constant processing rate**.
  - It **doesn't adapt to variable traffic patterns** (e.g., an Amazon Prime service having less traffic during the day compared to evening/night).
  - This can lead to new requests being held in the queue (or denied) even when the system could potentially handle more, simply because the processing rate is fixed.
  - This algorithm is only suitable if the application specifically requires a constant rate for processing.

#### 2.3. Fixed Window Counter Algorithm

- **Concept**: Divides time into **fixed-size windows** (e.g., 5 minutes). Each window has a **counter**.
- **Configuration**: The window size and the maximum allowed requests (counter limit) are configurable.
- **Request Processing Flow**:
  1.  When a request comes, the counter for the current fixed window is checked.
  2.  **If the counter is below the limit**: The counter is decremented (or incremented, depending on implementation), and the request is processed.
  3.  **If the counter reaches the limit**: Further requests within that window are denied.
  4.  When a new window starts, the counter is reset.
- **Major Disadvantage**: This algorithm suffers from a **"burst" problem at the edge of windows**, leading to **double the allowed requests**.
  - **Example**: If the limit is 3 requests per 5 minutes.
    - If 3 requests come at 4:59 in Window A.
    - And another 3 requests come at 5:01 in Window B.
    - Within a very short timeframe (e.g., 2 minutes from 4:59 to 5:01), 6 requests (double the allowed 3) are processed. This can overload the system.

#### 2.4. Sliding Window Log Algorithm

- **Concept**: This algorithm **solves the "edge case" problem** of the Fixed Window Counter.
- **Key Feature**: There is **no fixed time frame**; the window "slides".
- **Implementation**: It uses a **log** (not a counter) to store the **timestamp** of each incoming request.
- **Request Processing Flow**:
  1.  When a request arrives, its **timestamp is recorded** in the log.
  2.  The system then **counts all requests in the log whose timestamps fall within the current sliding window** (e.g., last 1 minute).
  3.  **If the count is less than the limit**: The request is processed, and its timestamp is added to the log.
  4.  **If the count reaches the limit**: The request is declined.
  5.  To maintain the sliding window, **old timestamps outside the window are removed** from the log (e.g., by keeping the log sorted by time and removing entries older than 1 minute).
- **Disadvantage**: Even if a request is denied, its timestamp is still stored in the log. This means it **takes a lot of space** because it stores all timestamps, potentially for millions of requests.

#### 2.5. Sliding Window Counter Algorithm

- **Concept**: This algorithm combines the best of both worlds: it **solves the edge case problem** of Fixed Window Counter (like Sliding Window Log) and is **very intuitive and easy to implement** (like Fixed Window Counter).
- **Goal**: To accurately find the **number of requests present within a particular sliding window** (e.g., 1 minute).
- **Implementation**: It uses a combination of counters from the current fixed window and a calculation from the previous fixed window.
  - **Example (1-minute rule, max 5 requests)**:
    - Divide time into fixed 1-minute intervals (e.g., from 0-60s, 60-120s).
    - Maintain a counter for the _current_ fixed window (e.g., requests from 60-120s).
    - To find total requests in the _sliding window_ (e.g., the last 60 seconds from the current time), you add:
      - Requests in the **current fixed window**.
      - A **proportional number of requests from the previous fixed window** that _overlap_ with the current sliding window.
      - **Formula for overlapping requests**: `(Requests in previous window / total previous window interval) * Overlapping time`.
      - **Example**: If 6 requests came in the previous 60-second window, and 10 seconds of that window overlap with the current sliding window: `(6 / 60) * 10 = 1 request` from the previous window.
    - Then, `Current_Window_Requests + Overlapping_Previous_Window_Requests` is compared to the limit.
- **Benefit**: This approach provides a **more accurate request count** over a sliding window without storing every timestamp, thus addressing the disadvantages of both Fixed Window Counter (edge case) and Sliding Window Log (space consumption).

---

**3. High-Level Design (HLD) of a Rate Limiter**

#### 3.1. Components and Flow

- **API Gateway**: The Rate Limiter is typically hosted as part of an **API Gateway**.
- **Client**: Sends requests.
- **Rate Limiter Module**:
  - Resides at the API Gateway.
  - **Receives requests from the client**.
  - **Accesses Configuration**: Needs to know the rate limiting rules (e.g., 3 requests per minute). These rules are **configured dynamically** and are usually **loaded into a cache** when the application starts, as they don't change frequently.
  - **Applies Algorithm**: Based on the configured rules and chosen algorithm, it determines if the request should be processed.
  - **Decision**:
    - **If within limit**: The request is allowed and **sent to the backend server**. The Rate Limiter may update its internal counter/state.
    - **If limit exceeded**: The request is **denied**, and an **HTTP 429 (Too Many Requests)** status code is returned to the client.
- **Backend Server**: Processes the allowed requests.

#### 3.2. Distributed Rate Limiting and Atomicity

- **Problem**: For **distributed rate limiting** (when clients can go to different Rate Limiter instances/servers).
- **Solution**: A **centralised data store** is required.
  - **Example**: **Redis** is a common choice for this centralised store.
- **Challenge: Atomicity**: When using a centralised store like Redis for counters (e.g., for Token Bucket), how do you **maintain atomicity** if multiple parallel requests from different clients hit the Rate Limiter at the same time and try to update the counter simultaneously?
- **Answer**: There are **existing solutions to bring atomicity to Redis**.
  - While these solutions might introduce a **slight latency**, they are generally usable and avoid the need to develop a custom atomicity solution.

This comprehensive overview covers the problem, algorithms, and high-level design of a Rate Limiter, making it suitable for an interview discussion.

Here are comprehensive notes on Idempotency Handling, designed for interview preparation, drawing directly from the provided sources. These notes cover definitions, problems, and a detailed approach to solving them, without skipping any important points or concepts.

---

### Idempotency Handling: Interview Notes

This is a **very important question** and has been recently asked in top product companies.

#### 1. Differentiating Idempotency vs. Concurrency

It's crucial not to confuse these two concepts.

- **Concurrency**:

  - Deals with **multiple users or processes trying to access/modify a _single shared resource_ simultaneously**.
  - **Example**: Many people trying to book the **same movie seat** on a BookMyShow app.
  - **Goal**: To manage simultaneous access to prevent data corruption or incorrect state.

- **Idempotency**:
  - Deals with **handling _duplicate requests_ from a client**.
  - **Definition**: It enables a client to **safely retry an operation many times without worrying about the side effects** of that operation.
  - **Example**: Adding an item to a shopping cart. If a request to add an item is sent multiple times due to retries, it should **only result in one item being added** to the cart in the database. The system guarantees that even with multiple identical requests, the database will only have **one record** for that specific operation.
  - **Capability**: This capability is provided by an **Idempotency Handler**.

#### 2. Idempotency Nature of HTTP Methods

By default, not all HTTP methods are idempotent.

- **GET Requests**:

  - Are **idempotent by nature**.
  - Making duplicate GET requests will **not cause any side effects on the database**; they will simply return the existing data.
  - **No specific handling is required** for GET requests regarding idempotency.

- **PUT Requests**:

  - Are **idempotent by nature**.
  - If you update a resource (e.g., change a name from 'DJ' to 'Shreyas') and send the PUT request multiple times, it will **not cause any side effects** (the name will remain 'Shreyas' after the first successful update).
  - **No specific handling is required** for PUT requests regarding idempotency.

- **DELETE Requests**:

  - Are **idempotent by nature**.
  - Similar to GET and PUT, sending duplicate DELETE requests will **not have additional side effects** after the first successful deletion.
  - **No specific handling is required** for DELETE requests regarding idempotency.

- **POST Requests**:
  - Are **NOT idempotent by nature**.
  - This is the primary reason why we need to **explicitly implement idempotency for POST APIs**.
  - **Problem**: If a POST request creates a new resource (e.g., a payment transaction or adding an item to a cart), and a duplicate POST request comes in, it will **create _another_ new resource or duplicate payment**, which is undesirable and incorrect for such operations.

#### 3. Scenarios Leading to Duplicate POST Requests (Side Effects)

Duplicate POST requests can arise in two main ways, both requiring handling.

- **Sequential Duplication**:

  - **Scenario**: A client makes a POST request (e.g., "add item to cart"). The server starts processing the request. However, the **client experiences a timeout** and does not receive a response. The server, despite the client timeout, **successfully processes the request** and completes the operation. Since the client timed out, it assumes the request failed and **retries the same request sequentially**, leading to a duplicate.
  - **Problem**: Without idempotency, this sequential retry would lead to a duplicate resource creation (e.g., item added twice).

- **Parallel Duplication**:
  - **Scenario**: A client makes a POST request. At the **same time**, another identical POST request for the same operation comes in. This can happen if the client application somehow triggers two requests simultaneously (e.g., user double-clicks rapidly, or different browser tabs/processes send the same request). In a distributed system, these parallel requests might even hit **different server instances**.
  - **Problem**: Without idempotency, both parallel requests might be processed, leading to **two resources being created** when only one should be.

#### 4. The Approach for Idempotency Handling (Solution)

The core solution involves a unique `Idempotency-Key` and a robust server-side flow.

- **Key Component: Idempotency-Key**

  - This is a **Universal Unique ID (UUID)** generated by the **client**.
  - It is sent by the client in the **request header**.
  - For **each _different_ operation**, a new, unique `Idempotency-Key` should be generated.
  - For **retries of the _same_ operation**, the **same `Idempotency-Key` must be reused**.
  - The `Idempotency-Key` can be generated using libraries for UUIDs, and can optionally include the operation type or a timestamp for enhanced uniqueness, depending on the client's needs.

- **Client-Server Agreement**:

  1.  The **client is responsible for generating the `Idempotency-Key`**.
  2.  The client must generate a **unique key for each distinct operation**.

- **Detailed Request Flow (Server-Side Logic)**:

  1.  **Client Initiates POST Request**: The client application sends a POST request with the `Idempotency-Key` set in its header.

  2.  **Server Receives Request and Validates Key**:

      - Upon receiving the request, the server's first step is to **validate if the `Idempotency-Key` is present in the request header**.
      - **If `Idempotency-Key` is NOT present**: The server returns an **HTTP 400 (Bad Request)** response, indicating a validation error.
      - **If `Idempotency-Key` IS present**: The server proceeds to the next step.

  3.  **Server Reads Idempotency-Key State from Database (DB)**:

      - The server attempts to read the `Idempotency-Key` from a persistent data store (e.g., a database or a shared cache like Redis). This store holds the status of previous operations tied to idempotency keys.

  4.  **Handling an Original Request (Key NOT Present in DB)**:

      - **If the `Idempotency-Key` is NOT found in the DB**: This signifies an **original, fresh request**.
      - The server **creates a new entry** for this `Idempotency-Key` in the DB.
      - The status of this key is immediately set to **'CREATED'** (or 'ACQUIRED' / 'CLAIMED'), indicating that processing for this key has begun.
      - The server then **performs the actual operation** (e.g., adding an item to the cart, processing a payment).
      - **Upon successful completion of the operation**:
        - The server **updates the status of the `Idempotency-Key` to 'CONSUMED'**.
        - The resource is created (e.g., item added, payment processed).
        - The server returns **HTTP 201 (Created)** to the client.

  5.  **Handling a Duplicate Request (Key IS Present in DB)**:

      - **If the `Idempotency-Key` IS found in the DB**: This signifies a **duplicate request**. The server then checks the **status** associated with this key.

      - **Scenario A: Status is 'CONSUMED'**:

        - This means the **original request for this `Idempotency-Key` was already successfully completed**, and the resource was created.
        - The server returns **HTTP 200 (OK)** to the client. This informs the client that the operation they are requesting has already been processed successfully, without creating a new duplicate resource.

      - **Scenario B: Status is 'CREATED' (or 'PROCESSING')**:
        - This means the **original request is still currently being processed** by the server and has not yet completed.
        - The server returns **HTTP 409 (Conflict)**. This indicates a conflict because another request with the same key is in progress. The client should be advised to wait and retry later. This handles the sequential "client timeout, server still processing" problem effectively.

#### 5. Handling Parallel Duplicate Requests: The Critical Section

The above flow primarily addresses sequential duplicates. To handle **parallel duplicate requests**, a crucial modification is needed.

- **The Problem**: If two identical requests come in parallel, both might simultaneously attempt to read the `Idempotency-Key` from the DB. Since it's not initially present, **both could try to create the entry and proceed to perform the actual operation**, resulting in two duplicate resources being created.

- **The Solution: Mutual Exclusion (Critical Section)**:

  - The section of code where the server **reads the `Idempotency-Key` from the DB, creates it if not present, and updates its status** (Steps 3, 4, and 5 in the flow above) is a **critical section**.
  - To prevent race conditions and ensure only one request/thread can execute this section at a time, **mutual exclusion mechanisms** must be applied.
  - **Common mechanisms**: **Mutexes, Semaphores, or other synchronisation primitives** (e.g., locks).

- **How it works with Mutual Exclusion**:
  1.  When two parallel requests (e.g., Request 1 and Request 2) arrive, only **one (e.g., Request 1) will acquire the lock** and enter the critical section.
  2.  Request 1 proceeds: it checks the DB, finds no `Idempotency-Key`, creates it with 'CREATED' status, performs the operation, updates the key status to 'CONSUMED', and then releases the lock.
  3.  Now, Request 2 (which was waiting) acquires the lock and enters the critical section.
  4.  Request 2 checks the DB, finds the `Idempotency-Key` **is now present**, and its status is **'CONSUMED'**.
  5.  Therefore, Request 2 will return **HTTP 200** to the client, indicating the operation was already successful.
  - This ensures that even with parallel duplicates, **only one actual operation is performed**.

#### 6. Handling Distributed Servers/Clusters

- **Problem**: If an `Idempotency-Key` request goes to one server, and its duplicate goes to a different server in a distributed cluster, how is synchronisation maintained, especially if they are backed by different databases or clusters?
- **Solution**: Use a **shared, centralised Cache** (e.g., Redis) to store and manage the `Idempotency-Key` and its status.
- **Advantage of Cache**: Cache synchronisation is **much faster (milliseconds)** compared to database synchronisation (which could be in minutes for consistency across multiple DBs). This ensures fast and consistent state management for idempotency across all server instances.

---

Here are comprehensive notes on High Availability and Resilience System design, specifically covering Active-Passive and Active-Active architectures, drawn directly from the provided source transcripts. These notes are structured for interview preparation, ensuring all important points are covered and cited.

---

### High Availability & Resilience System Design: Interview Notes

This is a **very important interview question** in high-level design. It is often asked in various forms, but the core objective is to design an architecture that is resilient and highly available.

#### 1. Core Concepts and Interview Question Variations

The overarching goal is to **design a High Availability Architecture**. This question can be phrased in several ways:

- Design **High Availability Architecture**.
- Design **Data Resilience Architecture**.
  - **Resiliency** means the capability to recover from failure.
- Design architecture to achieve **99.999% availability (Five Nines)**.
  - Achieving "Five Nines" availability is a crucial goal for companies.
- Design an architecture to **avoid Single Point of Failure (SPOF)**.
- Explain the difference between **Active-Passive vs. Active-Active Architecture**.

Ultimately, the agenda is to design an architecture that is 99.999% available, capable of recovering from failures, and has no single point of failure.

#### 2. Basic Single Node Architecture and Its Problems

Let's first understand the limitations of a basic single-node setup before diving into high availability solutions.

- **Architecture Description**:

  - A **Client** (e.g., mobile, laptop, desktop) sends a request.
  - The request first goes to a **Load Balancer** layer.
  - The Load Balancer passes the request to an **Application layer** (e.g., Microservices: Application X, Y, Z, potentially with multiple nodes).
  - The Application layer connects to a **Primary DB** (database layer).
  - The DB stores the data.

- **Problems with Single Node Architecture**:
  - **Single Point of Failure (SPOF)**: If the **Primary DB goes down**, the **whole application becomes down**.
  - **Lack of High Availability**: It does **not provide 99.999% availability** because a single DB failure brings down the system.
  - **No Data Resiliency**: Once a failure occurs, the system **cannot recover on its own** until the issue is manually resolved, which could take hours or days.
  - **Both read and write requests will fail** if the DB is down.

#### 3. Multi-Node Architectures: Solutions to Single Node Problems

To address the issues of single-node architecture, multi-node setups are introduced. There are two main types:

1.  **Active-Passive Architecture**.
2.  **Active-Active Architecture**.

#### 4. Active-Passive Architecture

This model resolves the SPOF issue by introducing redundancy, but with certain limitations.

- **Setup Description**:

  - Every company typically has at least **two Data Centers** (e.g., Data Center 1 in Mumbai, Data Center 2 in Pune).
  - **Client** requests go through a **Load Balancer**, which can route to either Data Center 1 or Data Center 2.
  - Both Data Centers have **similar configurations** of Application layers (e.g., App X, Y, Z microservices).
  - Each Data Center has its own DB.
  - **Key Concept**: Out of these data centers, **only ONE can be Primary** (also called **Live DB** or **Read-Write DB**).
  - The other data center(s) are treated as **Replicas** or **Disaster Recovery (DR) Data Centers**, and their DBs are considered **Replicas**.

- **Request Flow in Active-Passive**:

  - **Write/POST Requests**: Any write request, regardless of which data center it initially hits, **must be directed to the Primary DB**.
    - If a write request comes to the DR Data Center, its application layer will **route the request to the Primary DB**.
  - **Read Requests**:
    - Read requests hitting the Primary Data Center are served by the **Primary DB**.
    - Read requests hitting the DR Data Center (replica) **can be served by the Read-Only DB** in that data center. (This is a possible improvisation to utilize resources better for reads).
  - **Synchronization**: A **one-directional sync-up** occurs from the Primary DB to the Replicas.

- **Reason for Single Primary for Writes**:

  - Traditional relational databases like **Oracle, MySQL, and PostgreSQL are NOT multi-master**.
  - This means they can **only write to one Primary DB** or Live DB at any given time.

- **Achieving Data Resilience and Avoiding SPOF**:

  - If the **Primary DB goes down**:
    - The system can **switch the traffic** from the failed primary Data Center to the Disaster Recovery Data Center.
    - The **DR Data Center's DB is then promoted to Primary** (Read-Write/Live DB).
    - Once the original primary DB is recovered, it can be made a replica or read-only DB.
  - This ensures that even with a DB failure, the system can still take traffic, thus avoiding a single point of failure and providing data resilience.

- **Disadvantages of Active-Passive Architecture**:
  - **Latency Add-on**: If a request (especially a write) goes to the DR Data Center, it then has to travel to the Primary DB, potentially in a different geographical location (e.g., Pune to Mumbai). This adds **latency** (e.g., 1 second vs. 2 seconds).
  - **Downtime during Switchover**: When the primary DB fails, there's a **gap or delay** (e.g., 10-15 minutes) for the application to route traffic to the replica and promote it to primary. During this time, **all write requests (and potentially other traffic) will fail**.
  - **Resource Under-utilization**: The replica DB is mostly idle for writes or only used for reads, meaning **resources are not fully utilized**.
  - **Scalability for Write-Heavy Applications**: If the application has too many write operations, the **single primary DB becomes a bottleneck** and the active-passive setup **will not scale much**.

#### 5. Active-Active Architecture

This model aims for better resource utilization and performance by having multiple active write masters.

- **Setup Description**:

  - Client requests go through a Load Balancer, which can route to Data Center 1 (e.g., Mumbai) or Data Center 2 (e.g., Pune).
  - Both Data Centers have their own Application layers.
  - **Key Concept**: Both Data Centers are connected to their own DBs, and **BOTH of these DBs are designated as Primary or Live DBs**.
  - **Requirement**: This architecture requires databases that **support multi-master capabilities**, such as **Cassandra and most NoSQL DBs**. Traditional RDBMs (Oracle, MySQL, Postgres) do not support this.
  - **Synchronization**: There is **bi-directional sync-up** between the two primary DBs. In active-passive, it was one-directional.

- **Request Flow in Active-Active**:

  - Any request (read or write) that comes to Data Center 1 will be handled by **its own Primary DB**.
  - Similarly, any request (read or write) that comes to Data Center 2 will be handled by **its own Primary DB**.
  - This allows full utilization of DB resources across all data centers.

- **Advantages of Active-Active Architecture**:

  - **Full Resource Utilization**: Both data centers and their DBs are actively processing reads and writes, leading to **better resource utilization**.
  - **Higher Throughput**: The system can **handle more traffic** because both data centers can take care of both reads and writes simultaneously.
  - **Better for Write-Heavy Applications**: Unlike active-passive, this scales well for applications with many write operations as the load is distributed.
  - **Lower Latency (Potentially)**: Requests are typically served by the local data center's DB, potentially reducing cross-region latency compared to active-passive.

- **Disadvantages and Complexities of Active-Active Architecture**:
  - **Synchronization Complexity**: The **most significant challenge** is maintaining synchronization between multiple active primary DBs.
  - **Conflict Resolution**: If the **same row is updated at the same time in different data centers**, it leads to conflicts during replication. Resolving these conflicts (e.g., last-write-wins, custom logic) is complex.
  - **Read-After-Write Consistency**: There's a possibility that a write happens in one data center (e.g., Data Center 1), but a read happens simultaneously in another data center (e.g., Data Center 2) **before the sync-up occurs**. This can lead to clients reading stale data. Maintaining consistency across distributed writes is a major concern.

---

### Distributed Messaging Queue: Kafka & RabbitMQ – Interview Notes

This is a **very important topic** in high-level system design, especially from an interview perspective, as interviewers can ask many in-depth follow-up questions.

#### 1. What is a Messaging Queue and Why is it Needed?

- **Definition**: A messaging queue is a system where a **producer produces a message**, this message goes into a **queue**, and from that queue, a **consumer reads and processes the message**.

  - It acts as an intermediary between producers and consumers.

- **Advantages / Why it is Needed**:
  1.  **Asynchronous Nature**:
      - **Reduces Latency**: Instead of a producer (e.g., e-commerce application) synchronously waiting for a heavy task (e.g., sending notification mail) to complete, it can simply send a message to a queue and immediately return to the user. The notification sending can happen in the background, asynchronously.
      - **Example**: After a user buys a product in an e-commerce application, a message "send notification to this user" is put into a queue. A separate "send notification application" consumes this message and sends the mail/message, without the user waiting.
  2.  **Retry Capability**:
      - If a consumer fails to process a message (e.g., the "send notification application" server is down), the message can be **put back into the queue for retry**. This ensures messages are eventually processed.
  3.  **Pace Matching / Decoupling**:
      - **Addresses Producer-Consumer Speed Mismatch**: Producers might generate messages at a much faster pace than a consumer can process.
      - **Solution**: Producers put messages into the queue at their fast pace, and the consumer consumes them from the queue at its own, slower, sustainable pace. The queue acts as a buffer.
      - **Example 1**: Multiple applications (e-commerce, inventory management, XYZ) sending messages (e.g., mail notifications) at high rates (10, 20, 30 messages/second) to a single "send notification application" that can only process 15 messages/second. A message queue allows all producers to send messages without being blocked, and the consumer processes them at its capacity.
      - **Example 2**: Cab service where each cab sends its GPS location every 10 seconds. The sheer volume of data (car ID, current location) from many cars needs a queue because the consumer application (e.g., for creating a dashboard) cannot consume such frequent, high volumes of data directly.

#### 2. Messaging Types: Point-to-Point vs. Pub/Sub

- **Point-to-Point Messaging**:

  - **Concept**: When a message is put into a queue, it can **only be consumed or processed once by a single consumer**.
  - **Mechanism**: If Consumer 1 processes a message, it is not available for Consumer 2. The design ensures a single message is consumed only once, even if multiple consumers are present.

- **Publish-Subscribe (Pub/Sub) Messaging**:

  - **Concept**: A publisher broadcasts a message to **multiple queues** (or topics), and a **same message can be processed by multiple consumers**.
  - **Mechanism**:
    - A publisher sends a message.
    - Based on internal logic (often called an **Exchange**), the message is broadcast to all relevant queues.
    - Each queue can then be consumed by its own consumer(s).
  - **Example**: Message 'A' comes in, the system broadcasts it to Queue 1 and Queue 2. Consumer 1 consumes 'A' from Queue 1, and Consumer 2 consumes 'A' from Queue 2.

- **Choice**: The selection between Point-to-Point and Pub/Sub depends on the specific business need.

#### 3. How Messaging Queue Works: Kafka (In-depth)

Kafka is a very popular and important distributed messaging queue from an interview perspective.

- **Key Components of Kafka**:

  1.  **Producer (Publisher)**
  2.  **Consumer**
  3.  **Consumer Group**
  4.  **Topic**
  5.  **Partition**
  6.  **Offset**
  7.  **Broker (Kafka Server)**
  8.  **Cluster**
  9.  **Zookeeper**

- **Kafka Architecture Overview**:

  - **Producer** talks to a **Broker**.
  - A **Broker** is a Kafka server.
  - A Broker hosts **Topics**. A topic has a name and can have many topics (X, Y, Z).
  - Inside a **Topic**, there are multiple **Partitions** (e.g., Partition 0, Partition 1, Partition 2).
  - Inside a **Partition**, messages are stored with an **Offset**, which is like an index (0, 1, 2...). Different partitions can have different lengths.
  - **Consumers read from Partitions** (as the ultimate data is stored here).
  - Each **Consumer is part of one Consumer Group**. A consumer group can have many consumers (Consumer 1, Consumer 2). There can be multiple consumer groups (Consumer Group 1, Consumer Group 2).
  - A **group of Brokers is called a Cluster**. Each broker typically runs on a different machine (Node 1, Node 2, etc.).
  - **Zookeeper helps Brokers interact with each other** and tracks which topic/partition resides in which broker, facilitating internal communication and discovery.

- **Detailed Component Interaction and Flow**:

  - **Message Format**: When a producer sends a message, it typically has four parts:

    - **Key**: (e.g., string or ID like `car ID`) - **Not mandatory**.
    - **Value**: The actual message content.
    - **Partition**: (Specific partition ID) - **Not mandatory**.
    - **Topic**: (Topic name) - **Mandatory**; indicates where the message should be published.

  - **Partitioning Logic (How a message chooses a Partition)**: For a given topic (e.g., Topic A with 3 partitions: P0, P1, P2):

    1.  **If Key is present**: It computes a **hash of the Key** and pushes the data into the partition corresponding to that hash.
    2.  **If Key is empty but Partition is specified**: It directly puts the message into the specified partition.
    3.  **If both Key and Partition are empty**: It uses a **round-robin fashion** to choose the partition (Message 1 to P0, Message 2 to P1, Message 3 to P2, Message 4 back to P0, and so on).

  - **Offset and Committed Offset (Crucial for Reliability)**:

    - **Offset**: The index of a message within a partition.
    - **Committed Offset**: Zookeeper keeps track of the "committed offset" for each consumer within a consumer group for a specific topic and partition. This means the **index till which the consumer has successfully read/processed messages**.
    - **Purpose**: If a committed offset is 3, it means messages up to index 3 are successfully read, and messages from index 4 onwards are unread. This is critical for recovery.

  - **Consumer Group Behaviour (Handling Consumer Failure)**:

    - **Purpose**: Consumer groups allow for **parallel processing of partitions** and provide **fault tolerance**.
    - **Within a Consumer Group**: Different consumers within the _same_ consumer group read _different_ partitions of a topic. For example, if Topic A has Partition 0 and Partition 1, Consumer 1 (in Group 1) might read P0, and Consumer 2 (in Group 1) might read P1. A single partition is not shared by multiple consumers within the _same_ group.
    - **Across Consumer Groups**: Consumers from _different_ consumer groups _can_ read the same partition. For example, Consumer 1 from Group 1 can read P0, and Consumer 1 from Group 2 can _also_ read P0.
    - **Consumer Failure Handling**: If a consumer (e.g., Consumer 1 processing P0) goes down:
      - Kafka will pick another free consumer from the _same_ consumer group (e.g., Consumer 2).
      - It checks the last committed offset of the failed consumer (e.g., 3).
      - The new consumer (Consumer 2) will then start reading from the **next unread offset** (e.g., 4). This ensures no messages are lost and processing resumes from where it left off.

  - **Broker, Cluster, and Zookeeper (Distributed System Foundation)**:

    - **Broker**: A single Kafka server instance.
    - **Cluster**: A group of multiple Kafka brokers, each typically running on a different machine. This distributes the load and provides scalability.
    - **Zookeeper**: A distributed coordination service. Its role is to help brokers interact with each other, maintaining metadata about which topic and partition resides on which broker. It enables internal communication and discovery within the Kafka cluster.

  - **Data Durability and Resilience in Kafka (Leader and Followers)**:
    - **Replication**: To prevent data loss if a broker or partition goes down, partitions have **replicas**.
    - **Leader and Followers**: For each partition, one broker hosts the **Leader** partition, and other brokers host its **Follower** (replica) partitions.
    - **Read/Write Operations**: All **read and write operations always happen through the Leader**.
    - **Synchronization**: Followers continuously **sync up with the Leader**, replicating all new messages to their own queues.
    - **Leader Failure**: If a Leader partition (or its broker) goes down, one of its **Followers automatically takes over and becomes the new Leader**. This ensures high availability and data resilience.

- **Handling Specific Failure Scenarios in Kafka**:

  - **Q Size Limit Reached**: Kafka scales by having **multiple brokers** (different machines), allowing for more partitions and thus higher capacity beyond a single machine's limit.
  - **Q (Leader/Broker) Goes Down**: If a partition's Leader goes down, the **Follower (replica) takes over** as the new leader, and no messages are lost because followers are synced.
  - **Consumer Goes Down**: As explained above, another consumer from the **same consumer group takes over** and resumes processing from the last committed offset of the failed consumer.
  - **Consumer Not Able to Process Message (Buggy Message)**:
    - If a consumer picks up a message but fails to process it (e.g., it's a "buggy message"):
      - The consumer's **committed offset is NOT increased**.
      - The message will be **retried** a configurable number of times (e.g., 3 retries). The system will keep sending the same message until the retry limit is hit.
      - If the retry limit is crossed, the message is then **moved to a "failure queue" or "dead letter queue" (DLQ)**.
      - Once moved to the DLQ, the committed offset for the original partition is advanced, and the consumer moves on to new messages.
      - Messages in the DLQ can later be manually inspected, fixed, and re-introduced to the system.

#### 4. Kafka vs. RabbitMQ: Core Difference (Pull vs. Push)

- **Kafka**: Uses a **pull-based approach**. Consumers actively **poll** the queue/partition asking "Do you have any new data? Do you have any new message?".
- **RabbitMQ**: Uses a **push-based approach**. The queue **pushes** messages to consumers as soon as new data arrives.

#### 5. How Messaging Queue Works: RabbitMQ (Overview)

RabbitMQ has a slightly different architecture and concepts compared to Kafka.

- **RabbitMQ Architecture Components**:

  - **Producer**: Sends messages.
  - **Exchange**: Receives messages from producers and routes them to queues.
  - **Binding / Routing Key**: Defines the rules by which an Exchange routes messages to specific queues.
  - **Queue**: Stores messages.
  - **Consumer**: Reads messages from queues.

- **Exchange Types (How messages are routed)**:

  1.  **Fan Out Exchange**:
      - **Concept**: When a message arrives at a fan-out exchange, it is **broadcast to _all_ queues that are associated/bound with that exchange**.
      - **Use Case**: Simple broadcasting to multiple subscribers.
  2.  **Direct Exchange**:
      - **Concept**: A message is routed to a queue only if its **message key exactly matches the routing key** defined in the binding between the exchange and the queue.
      - **Use Case**: Point-to-point routing based on exact matches.
  3.  **Topic Exchange**:
      - **Concept**: Uses **wildcards** in the routing keys for more flexible matching.
      - **Mechanism**: If a message key matches a pattern (e.g., `star.one.two.three` where `star` is a wildcard) defined in the binding, it is routed to that queue. Wildcards are not allowed in Direct Exchanges.

- **Handling Unprocessed Messages in RabbitMQ**:
  - **No Offset Concept**: Unlike Kafka, RabbitMQ does **not have an "offset" concept** to track message consumption.
  - **Recue Mechanism**: If a consumer fails to process a message, it can **re-queue the message to the back of the queue**.
  - **Retries**: Similar to Kafka, it can try multiple re-queues/retries.
  - **Dead Letter Queue (DLQ)**: If retries are exhausted, the message can be moved to a **dead letter queue**.

### **Transcript Notes: Proxy Servers and Related Concepts**

---

** Introduction to Proxy Servers**

- **What is a Proxy Server?**
  - A proxy server sits **between a client and a server**.
  - It acts as an **intermediate** between these two.
  - **All requests pass through the proxy**; the client and server do not communicate directly with each other.
  - **Analogy**: A child (client) wants a chocolate from a shop (server) and asks its mom (proxy). The mom takes the request on behalf of the child, goes to the shop, gets the chocolate, and gives it back to the child. Here, the mom acts as the proxy.
  - A proxy can handle requests from **more than one client** (e.g., a mom with two children taking requests from both).

---

** Types of Proxy Servers: Forward vs. Reverse**

- Proxy servers have different types: **Forward Proxy** and **Reverse Proxy**.
- They primarily differ in their **direction of communication**.

- **Forward Proxy (or Simple Proxy)**
  - Often, when someone says "proxy," they are referring to a forward proxy.
  - **How it works**: It sits within a **closed network** (e.g., intranet, group of personal computers).
  - Clients within this network talk to the forward proxy.
  - The forward proxy then communicates with the internet (outside world) to reach a specific server.
  - The server responds to the proxy, and the proxy returns the response to the client.
  - **Key function**: It **hides the client network** from the outside world.

---

** Forward Proxy: Hiding Clients and Advantages**

- **Hiding Client IP Address**:

  - When a client (e.g., with IP 172.1.0.1) makes a request, the **forward proxy sends its own IP address** (e.g., 192.3.0.1) to the outside server.
  - The server only knows the proxy's IP address and is unaware of the actual client's IP address.
  - This means the **forward proxy hides the client from the outside world**.

- **Advantages of Forward Proxy**:
  - **Anonymity**: Provides **anonymity to internal networks**. The client's IP address and location are hidden from external servers, meaning the server doesn't know where the request truly originated.
  - **Grouping of Requests**: Can **club similar requests** from multiple clients (e.g., several clients requesting "google.com") and send just one consolidated request to the outside world. This enhances efficiency.
  - **Access Restricted Data/Content**: Can **bypass geographical or country-specific content restrictions**. By routing through a proxy in a different location (e.g., UK/US), it can appear as if the request originates from that location, allowing access to otherwise blocked content.

---

** Forward Proxy: Security and Caching**

- **Advantages of Forward Proxy (continued)**:
  - **Security**: Allows you to **add security controls** and rules. For example, if all client requests pass through the forward proxy, you can define what content or websites clients are allowed or not allowed to access (e.g., blocking social media sites like Facebook). The proxy can stop responses or throw errors based on these rules.
  - **Caching**: A significant advantage. The forward proxy can **cache static content**.
    - When a client requests content for the first time, the proxy checks its cache.
    - If not found, it retrieves the content from the external server, **stores it in its own cache**, and then returns it to the client.
    - For subsequent requests for the same content by any client, the proxy serves it **directly from its cache** without going to the outside server, thereby speeding up access and reducing external load.

---

** Forward Proxy Disadvantage and Reverse Proxy Introduction**

- **Disadvantage of Forward Proxy**:

  - **Works at the Application Level**: This means that for multiple applications, you might need to **set up a separate proxy for each application**. It operates on the application layer, unlike some other technologies that work at the packet level.

- **Reverse Proxy**:
  - **Direction**: Differs from forward proxy mainly in direction.
  - While forward proxy protects and brings anonymity to clients, **reverse proxy protects servers**.
  - **How it works**: Sits between the **internet (incoming requests)** and your internal servers (e.g., server one, server two, etc.).
  - Requests from the internet are **not allowed to directly access the servers**; they must first go through the reverse proxy.
  - The reverse proxy then takes responsibility for sending the request to the appropriate server.

---

** Reverse Proxy: Security, CDN, and Caching**

- **Advantages of Reverse Proxy**:
  - **Security**: Hides the **server's actual IP address** from the outside world. External entities only know the reverse proxy's IP.
  - **DDOS Attack Mitigation**: In case of a Distributed Denial of Service (DDOS) attack, the attacker can only target the reverse proxy, **not the original server**. Reverse proxies are often equipped with significant resources and technology to handle such attacks.
  - **Example: CDN (Content Delivery Network)**: A CDN is a well-known type of reverse proxy.
    - If your original server is in Singapore and clients are globally dispersed (e.g., Paris, US, India), you can set up CDNs (reverse proxies) in locations closer to your users.
    - Local users' requests go to their local CDN. This brings the content closer to the user.
  - **Caching**: Similar to forward proxies, reverse proxies (like CDNs) **maintain a cache**.
    - If a local user's request for data is not in the local CDN's cache, it will go to the original server.
    - Once retrieved, it will be stored in the local CDN's cache for future requests.

---

** Reverse Proxy: Latency and Load Balancing**

- **Advantages of Reverse Proxy (continued)**:
  - **Latency Reduction**: By placing reverse proxies (like CDNs) physically **closer to users' locations** and leveraging caching, they significantly help in **reducing latency** for content delivery.
  - **Load Balancer Capability**: A major advantage. A reverse proxy sits in front of multiple servers and can **distribute incoming requests** among them (e.g., sending some requests to server one, others to server two, etc.). This helps in **load balancing** traffic efficiently across available servers.
  - **CDN is a popular example of a reverse proxy**.

---

** Proxy vs. VPN**

- **Proxy**:
  - Acts as a bypass and helps with **anonymity** by hiding IP addresses.
  - Can perform **caching** and **logging**.
  - **Key limitation**: It **cannot encrypt or decrypt data**. It primarily does IP address masking.
- **VPN (Virtual Private Network)**:
  - Much more comprehensive than a proxy.
  - Creates a **secure VPN tunnel** between the client (via a VPN client) and a VPN server over the internet.
  - **Encrypts all data** before it travels through the VPN tunnel. This means even if an attacker intercepts the data, it will be encrypted and unreadable.
  - The VPN server then **decrypts the data** before sending it to the original server.
  - **Major Difference**: VPN performs **encryption and decryption of data** and creates a **safe, encrypted tunnel** for data transfer, functionalities which a proxy does not provide.

---

** Reverse Proxy vs. Load Balancer**

- **Reverse Proxy**:
  - **Can act as a load balancer**.
  - Possesses **additional capabilities** beyond load balancing, such as: **anonymity** (hiding server IPs), **caching**, and **logging**.
  - Can be useful even if you have **only one server** for its caching, anonymity, or logging benefits.
- **Load Balancer**:
  - **Cannot act as a proxy**. It does not offer the broader capabilities of a proxy like anonymity or caching.
  - Is **only necessary when there are multiple servers** to distribute requests among. If there's only one server, a dedicated load balancer isn't needed.
  - Load balancing is just one specific capability that a reverse proxy can perform.

---

** Proxy vs. Firewall**

- **Firewall**:
  - Works by defining rules through "holes" to control what data can pass to the outside internet.
  - Performs **packet scanning**: It inspects packet headers, port numbers, source, and destination IP addresses to decide whether to allow or block traffic.
  - Operates primarily at the **packet level** (e.g., Network Layer).
- **Proxy**:
  - Works at the **Application Level**. This means it has access to the actual **data content** itself, not just packet metadata like IP addresses or port numbers.
  - Requires **setup for each application**.
  - Traditionally, proxies focused on providing **IP address anonymity**.
  - **Modern "proxy firewalls"**: These are advanced proxies that can also perform **blocking of data based on rules**, similar to a traditional firewall. However, they do so at the **application layer**, which is the major distinguishing factor.
  - **Key Difference**: Firewalls operate at the packet level by inspecting headers, while proxies operate at the application level, allowing for deeper inspection and rules based on data content.

---

### **Load Balancers and Different Algorithms**

### **1. Introduction to Load Balancer**

- **Core Definition**: A load balancer is placed **between clients and servers**. There can be many clients and many servers (e.g., Server 1, Server 2, Server N).
- **Original Purpose**: The primary and original purpose of a load balancer is to **distribute incoming traffic appropriately to all servers** so that **no one single server gets overburdened or overloaded**. It ensures that all requests from clients do not go to a single server.
- **Modern Capabilities**: Nowadays, load balancers can perform many other functions beyond just traffic distribution, such as **logging** and "so many other stuff".

---

### **2. Categories of Load Balancers**

Load balancers are categorised based on the OSI model layer at which they operate.

- **L4 Load Balancer (Network Load Balancer)**

  - **Operating Layer**: Works at the **Transport Layer (Layer 4)** of the OSI model.
  - **Decision Criteria**: It takes routing decisions based on information from the **TCP port, UDP port, IP address (source and destination)**.
  - **Speed**: L4 load balancers are generally **much faster**.

- **L7 Load Balancer (Application Load Balancer)**

  - **Operating Layer**: Works at the **Application Layer (Layer 7)** of the OSI model.
  - **Decision Criteria**: It is **much more advanced** as it can read and take decisions based on information from the **header, session, cookies, and even the data itself**.
  - **Response Reading**: It can also **read the response** from the server.
  - **Additional Capabilities**: Due to its ability to read the response, L7 load balancers also have the **capability to do caching**.

- **Algorithm Categorisation (Speaker's Understanding)**: The speaker notes that based on their understanding of network and application load balancers, **most common load balancing algorithms** (like those discussed below) fall under the **Network Load Balancer (L4) type**.

---

### **3. Static Load Balancing Algorithms**

Static algorithms do not dynamically compute server load; decisions are made based on pre-defined rules or server configurations.

- **3.1. Round Robin**

  - **Mechanism**: Requests from clients are distributed to servers in a **sequential, alternating fashion**. For example, if requests are 1, 2, 3, 4, then request 1 goes to Server 1, 2 to Server 2, 3 to Server 1, 4 to Server 2, and so on.
  - **Advantages**:
    - **Very easy to implement**.
    - Ensures **equal load distribution** to all servers. If 10 requests come, 5 will go to Server 1 and 5 to Server 2.
  - **Disadvantage**:
    - **Treats all servers equally regardless of capacity**. A server with high capacity (e.g., 10 times more resources) will receive the same number of requests as a low-capacity server. This leads to the **chance that a low-capacity server will go down because of the overload** of requests.

- **3.2. Weighted Round Robin**

  - **Mechanism**: This algorithm addresses the disadvantage of standard Round Robin by **assigning weights to servers**, which represent their capacity. A server with a higher weight (e.g., three times more capacity) will receive a proportionally higher number of requests. For example, if Server 1 has weight 3 and Server 2 has weight 1, the first three requests go to Server 1, and the fourth request goes to Server 2, before the cycle repeats (5th to Server 1, 6th to Server 1, 7th to Server 1, 8th to Server 2).
  - **Advantages**:
    - **Saves low-capacity servers from receiving a large number of requests** by sending them fewer requests based on their weight.
    - **Easy to implement as weights are static**; there is **no dynamic computation** needed by the load balancer. When a new server is added, its weight is predefined, and the load balancer just uses that weight.
  - **Disadvantage**:
    - **Does not consider the processing time of individual requests**. If requests have different processing times (e.g., some completed very fast, others take 10 or 20 seconds), a low-capacity server might still get overburdened if it receives a few long-processing requests, even if its overall request count is lower based on weight. It's possible for a low-capacity server to receive higher processing requests and get overburdened.

- **3.3. IP Hash**
  - **Mechanism**: The load balancer uses the **client's source IP address** to compute a **hash number** using a hash function. Based on this hash value, the request is assigned to a specific server. This means a client with a particular IP address will always be routed to the same server.
  - **Advantage**:
    - **Good for use cases where the same client needs to connect to the same server consistently**.
  - **Disadvantages**:
    - **Problematic with Proxies**: If client requests come through a **forward proxy**, all clients will appear to have the **same source IP address** (the proxy's IP address) to the server. When the load balancer hashes this single proxy IP, **all requests will be directed to only one server**. This can cause that single server to be **bombarded and overloaded**.
    - **No Guarantee of Equal Distribution**: Even without a proxy, using a hash function on source IP addresses **does not guarantee equal distribution** of load across servers. It's possible for one server to receive disproportionately more requests (e.g., 4 requests to one server, 2 to another).

---

### **4. Dynamic Load Balancing Algorithms**

Dynamic algorithms consider the current load or state of servers to make routing decisions, meaning "something is dynamically computed".

- **4.1. Least Connection**

  - **Mechanism**: The load balancer dynamically checks **which server has the fewest active connections**. Any new incoming request is then routed to that server.
  - **Advantages**:
    - **Dynamic**: It dynamically considers the current load (active connections) on each server.
    - **Reduces Overburden**: The chance of a server being overburdened is less, especially when all servers have equal capacity, as it directs requests to servers with fewer connections.
  - **Disadvantage**:
    - **Does not differentiate between active connections with high vs. low traffic**. A TCP connection might be active but have very little traffic, while another active connection on a different server might be handling a high volume of requests. This means a server with fewer "active" connections might still be more heavily loaded if those connections are processing intensive tasks. Consequently, there's a **chance that a low-capacity server will get overburdened** if it receives high-processing requests, even with fewer connections.

- **4.2. Weighted Least Connection**

  - **Mechanism**: This algorithm addresses the limitations of Least Connection by **assigning a weight to each server** (representing its capacity) in addition to tracking active connections. When a new request comes in, the load balancer **calculates a ratio**: `(number of active connections) / (server's weight)`. The request is then forwarded to the server with the **minimum ratio**.
  - **Example**: If Server 1 has 2 active connections and weight 10 (ratio 2/10 = 0.2), and Server 2 has 1 active connection and weight 1 (ratio 1/1 = 1.0), the request would go to Server 1 because 0.2 is the minimum ratio.

- **4.3. Least Response Time**
  - **Mechanism**: This algorithm considers both the **number of active connections** and the **Time to First Byte (TTFB)** for each server.
  - **TTFB Definition**: **TTFB (Time to First Byte)** is the **time interval between sending a request and receiving the first byte (or first packet) of the response from the server**. The load balancer dynamically tracks this by sending test packets.
  - **Decision Calculation**: For an incoming request, the load balancer **multiplies the server's active connections by its TTFB**. The request is then sent to the server with the **lowest calculated value**.
  - **Example**:
    - Server 1: 3 active connections, TTFB 2. Calculation: 3 \* 2 = **6**.
    - Server 2: 1 active connection, TTFB 4. Calculation: 1 \* 4 = **4**.
    - Server 3: 0 active connections, TTFB 2. Calculation: 0 \* 2 = **0**.
    - A new request would go to Server 3 as it has the least value (0). If Server 3 then gets another request and its active connections become 1, its value becomes 1\*2=2. The calculations are re-evaluated for each new request, and the lowest value is chosen.
  - **Tie-breaking**: If two or more servers have the same lowest calculated value (e.g., both Server 2 and Server 3 have a value of 4 in the example given in source), the load balancer follows a **round-robin approach** to distribute the request among them.

Here are comprehensive notes on Caching and various Caching Strategies, drawn directly from the provided source, formatted for clarity and suitability for an interview context.

---

### **Caching: An Overview**

- **Definition**: Caching is a technique used to **store frequently used data in a fast access memory**. This is done to avoid repeatedly accessing data from a slower access memory.
  - **Slow Access Memory examples**: Hard disk, Database (DB) access.
  - **Fast Access Memory examples**: RAM.
- **Purpose/Benefits**:
  - Makes the **system fast** by reading data from faster memory, leading to **faster operations** and **reduced latency**.
  - Helps to achieve **fault tolerance**. The source states that the "write-back" caching strategy specifically demonstrates how caching contributes to fault tolerance.

### **Layers of Caching**

Caching can be found at various layers within a system, from the front-end to the back-end.

- **Client-Side Caching**:
  - **Browser Caching**: Browsers store frequently used web pages in memory so they don't have to be reloaded from the host every time.
- **Content Delivery Network (CDN) Caching**:
  - CDNs store **static data** to deliver content faster to geographically distributed users.
- **Load Balancer Caching**:
  - Load balancers also possess caching capabilities.
- **Server-Side Application Caching**:
  - This is the primary focus of the discussion. Examples include Redis.
  - **Placement**: The cache sits **between the application server and the database (DB)**.
  - **Workflow**: When a client requests information, it goes through the load balancer to an application server. The application server first tries to **read data from the cache** instead of directly from the DB. If the data is not in the cache, the application then fetches it from the DB.

---

### **Distributed Caching**

- **Limitations of a Single Cache Server**:
  - **Scalability**: A single cache server has **limited space and resources**, making it difficult to scale beyond a certain point.
  - **Single Point of Failure**: If the single cache server fails, the entire caching capability of the system is lost.
- **Concept of Distributed Caching**:
  - Addresses the limitations of a single cache server by using a **cache pool** consisting of many cache servers (e.g., Cache Server 1, 2, 3, 4).
  - **Cache Clients**: Each application server uses a "cache client" to connect to a specific cache server within the pool for storing or reading data.
  - **Server Allotment**: The allocation of a particular cache server to an application server is typically done using the **Consistent Hashing technique**.
    - **Consistent Hashing Glimpse**: It involves arranging cache servers (or nodes) on a ring. When a request (e.g., a `put` operation) comes in, a hash is computed, mapping it to a point on the ring. The request is then routed clockwise to the first cache server encountered.

---

### **Caching Strategies**

The source details five main caching strategies: Cache-Aside, Read-Through, Write-Around, Write-Through, and Write-Back (or Write-Behind).

#### **1. Cache-Aside**

- **Definition**: The application is responsible for managing the cache. It first checks the cache, and if data is not found (cache miss), the application fetches it from the DB, stores it in the cache, and then returns it to the client.
- **Sequence/Workflow (Read Request - `GET` call)**:
  1.  **Client sends `GET` request** to the application/backend server.
  2.  **Application first checks the cache** for the data.
  3.  **If Cache Hit**: Cache returns the data to the application, which then returns the response to the client.
  4.  **If Cache Miss**:
      - Application **fetches data from the DB**.
      - DB returns data to the application.
      - Application **stores/updates the data in the cache**.
      - Application returns the data/response to the client.
- **Pros (Advantages)**:
  - **Good for heavy read applications** because frequent data can be served directly from the cache without querying the DB.
  - **Fault tolerance (Cache down)**: If the cache goes down, requests will still be fulfilled by fetching data directly from the DB (though cache benefits are lost). The request will not fail.
  - **Independent Data Model**: The cache can store data in a structure **independent of the DB's data model**. The application is responsible for transforming data from the DB into the desired cache structure before writing to the cache.
- **Cons (Disadvantages)**:
  - **Cache Miss for New Data**: For any newly written data into the DB (via a separate write operation not touching the cache initially), the first read attempt for that data will always result in a **cache miss**. The data will only be cached after the first read from the DB.
  - **Data Inconsistency**: There is a **chance of inconsistency between the cache and the DB**. If a write operation updates data in the DB directly, the cache might still hold the old, stale data. Subsequent read requests might then retrieve this stale data from the cache, even though the DB has the latest value. To avoid this, appropriate caching technology or strategies must be used during write operations.

#### **2. Read-Through**

- **Definition**: Very similar to Cache-Aside, but the **cache itself (via its library) takes the responsibility** to fetch data from the DB and store it if there's a cache miss, rather than the application.
- **Sequence/Workflow (Read Request - `GET` call)**:
  1.  Client sends `GET` request to the application.
  2.  Application first checks with the cache (`cache.get(key)`).
  3.  **If Cache Hit**: Cache returns data to the application, which returns to the client.
  4.  **If Cache Miss**:
      - The **cache library (or cache itself) fetches the data from the DB**.
      - The cache library **updates itself** with the fetched data.
      - The cache then returns the data to the application, which returns to the client.
- **Pros (Advantages)**:
  - **Good for heavy read applications**, similar to Cache-Aside.
  - **Logic Separation**: The logic for fetching data from the DB and updating the cache is **separated from the application's core logic**. The cache library handles this.
- **Cons (Disadvantages)**:
  - **Cache Miss for New Data**: Similar to Cache-Aside, new data will always cause a cache miss on the first read.
  - **Data Inconsistency**: Without a dedicated write operation strategy, there's still a **chance of inconsistency between cache and DB**.
  - **Cache Document Structure Tied to DB**: The **cache's document structure usually needs to be the same as the DB table's structure** (one-to-one mapping). You cannot define your own custom cache structure easily, unlike Cache-Aside where the application transforms the data.

#### **3. Write-Around**

- **Definition**: In this strategy, **write operations directly write data into the DB and do not update the cache**. Instead, they **invalidate the corresponding data in the cache** (mark it as dirty). This strategy is typically used in conjunction with read-heavy strategies like Cache-Aside or Read-Through.
- **Sequence/Workflow (Write Request - `PUT`/`PATCH` call)**:
  1.  Client sends `PUT` or `PATCH` request to the application.
  2.  Application **directly writes the data into the DB**.
  3.  Application **invalidates the data in the cache** (e.g., by setting a "dirty flag" to true).
  - **During Subsequent Read (`GET`)**: If a `GET` call checks the cache and finds the data is marked "dirty," it is treated as a cache miss, and the latest data is then read from the DB and put back into the cache.
- **Pros (Advantages)**:
  - **Good for heavy read applications** (when used with Cache-Aside or Read-Through).
  - **Resolves inconsistency problem**: It specifically helps address the inconsistency issue faced by Cache-Aside and Read-Through by ensuring that stale cache entries are invalidated when the DB is updated.
- **Cons (Disadvantages)**:
  - **Cache Miss for New Data**: For any new data, the cache is not updated during the write, so the first read will still be a cache miss.
  - **Write Operation Failure if DB is Down**: The **write operation is fully dependent on DB availability**. If the DB is down (e.g., due to a disaster), the write operation will fail, meaning the write is **not fault-tolerant**.

#### **4. Write-Through**

- **Definition**: When a write request comes in, the application **first writes the data into the cache and then, in a synchronous manner, writes the same data into the DB**. Both operations must succeed, or the transaction must be rolled back.
- **Sequence/Workflow (Write Request - `POST` call)**:
  1.  Client sends `POST` request to the application.
  2.  Application **first writes the data into the cache**.
  3.  **Synchronously**, application **writes the data into the DB**.
  4.  **Two-Phase Commit**: If either the cache write or DB write fails, the entire transaction fails, and any successfully written part (e.g., to cache if DB fails) must be rolled back to maintain consistency.
- **Pros (Advantages)**:
  - **Cache and DB always remain consistent**: Because both cache and DB are updated synchronously and transactions are atomic (either both succeed or both fail/rollback).
  - **Increased Cache Hit Chances**: Even new data is inserted into the cache during the write operation, so subsequent `GET` requests for this new data will find it in the cache, improving cache hit rates.
- **Cons (Disadvantages)**:
  - **Alone Not Useful**: Write-Through alone is not beneficial unless combined with a read strategy like Cache-Aside or Read-Through, as its primary purpose is to ensure the cache has updated data for reads. Without a read mechanism, it just adds latency.
  - **Increased Latency**: Adding an extra synchronous write operation to the cache before writing to the DB **increases the latency of write operations**.
  - **Not Fully Fault-Tolerant for Writes**: If either the **DB or the cache goes down, the write operation will fail** because of the synchronous nature and two-phase commit requirement.

#### **5. Write-Back (or Write-Behind)**

- **Definition**: Data is **first written to the cache**, and then the write to the DB happens **asynchronously**. The application doesn't wait for the DB write to complete; it sends a success response as soon as the data is written to the cache.
- **Sequence/Workflow (Write Request - `POST` call)**:
  1.  Client sends `POST` request to the application.
  2.  Application **first writes the data into the cache**.
  3.  Instead of synchronously writing to the DB, the application **pushes the data to a queue**.
  4.  The application immediately sends a **success response** to the client once data is in the cache and queued.
  5.  Later, a separate process or worker reads from the queue and **asynchronously writes the data into the DB**.
- **Pros (Advantages)**:
  - **Good for write-heavy applications**.
  - **Lower Write Latency**: Write API latency decreases significantly because the application only waits for the faster cache write, not the slower DB write.
  - **Increased Cache Hit Chances**: The cache always has the latest data because write operations update it first, leading to high cache hit rates for subsequent reads.
  - **Fault Tolerance for Writes**: **Write operations will still work even if the DB is down** for a period (e.g., up to the cache's Time-To-Live or `TTL` if the queue holds data longer). This gives a "certain tolerance level".
  - **Better Performance with Read Strategies**: Provides much better overall system performance (read and write) when used with Cache-Aside or Read-Through.
- **Cons (Disadvantages)**:
  - **Potential for Data Loss/Inconsistency**: If the **cache fails before the data is successfully written to the DB from the queue**, that data can be lost or become inconsistent between the cache and DB.
  - **Time-To-Live (TTL) Issue**: If the DB is down for a period longer than the data's `TTL` in the cache, the data might be evicted from the cache before it ever reaches the DB, leading to data loss. For example, if data has a 3-hour `TTL` in cache and the DB is down for 5 hours, the data will be removed from cache after 3 hours while DB is still down, resulting in the data being unavailable in both cache and DB.

Here are the notes from the sources, prepared line by line, defining the concepts as explained in the transcript, suitable for an interview context:

### High-Level Design: Distributed Transaction Handling

- This topic is a **very important question** in high-level design interviews, regardless of experience level.
- It's also a concept **software engineers deal with daily** in companies.

### What is a Transaction?

- A transaction refers to a **set of operations** that need to be performed against a database (DB).
- It can be simply described as a **group of tasks** performed against the DB.
- **Example**: Transferring money from account A to account B involves debiting A and crediting B – this entire process is one transaction with multiple operations.

#### ACID Properties of a Transaction:

- **Atomicity**:
  - States that **all operations** within a single transaction **must either succeed or all must fail**.
  - If any operation within a transaction fails, **all previously successful operations will also be rolled back**.
  - **Example**: If debiting A succeeds but crediting B fails, the debit from A will be rolled back.
- **Consistency**:
  - Ensures that the **DB remains in a consistent state** before and after the transaction.
  - **Example**: If A has £100 and B has £50 before a transaction, after A debits £100 and B credits £100, A should have £0 and B should have £150. The state (0, 150) is consistent, whereas (0, 50) would be inconsistent if B's credit failed.
- **Isolation**:
  - When multiple transactions run concurrently, it **appears as if they are running in a serialised manner**.
  - Even though operations from different transactions might interleave, the system ensures that the **outcome is the same as if they ran one after another**.
  - Each DB operation typically involves **putting a lock** on the affected rows to prevent concurrent access issues.
- **Durability**:
  - States that **once a transaction is successfully completed (committed), the data changes are permanent**, even if the DB system subsequently fails.
  - The data should be **persisted properly**.

### Local Transaction Handling (Single Database)

- When dealing with a **single DB**, transactions work smoothly.
- **Process**:
  1.  `BEGIN TRANSACTION`: Initiates a transaction on a specific DB.
  2.  Operations (e.g., `withdrawal money from A`):
      - A **lock is put** on the relevant data (e.g., row A).
      - The **changes are made** (e.g., A's balance updated).
  3.  Subsequent operations (e.g., `deposit money to B`):
      - Another **lock is put** on relevant data (e.g., row B).
      - Changes are made (e.g., B's balance updated).
  4.  If **all operations succeed**, `COMMIT` is performed.
      - **Locks are removed**.
      - Changes are **persisted**.
  5.  If **any operation fails**, `ROLLBACK` is performed.
      - All successful changes within that transaction are **reverted back**.
  6.  The transaction is then **closed**.

### The Challenge of Distributed Transactions

- **Problem**: A transaction is **local to a particular database**.
- **Issue in Distributed Systems**: If operations involve **multiple databases**, a single transaction cannot span them directly.
- **Example (E-commerce Purchase)**:
  - Updating `Order DB` (e.g., increasing order count).
  - Updating `Inventory DB` (e.g., reducing inventory count).
  - If the `Order DB` update **succeeds and commits**, but the `Inventory DB` update **fails**, the `Order DB`'s changes will _not_ automatically roll back.
  - This is because each DB has its **own transaction manager**, and a failure in one does not directly influence a committed transaction in another.
- **Goal**: How to **satisfy ACID properties in a distributed system** where operations involve multiple databases.

### Solutions for Distributed Transaction Handling

There are three primary ways to handle distributed transactions:

1.  **Two-Phase Commit (2PC)**: Very popular and widely used.
2.  **Three-Phase Commit (3PC)**: An improvement over 2PC, but not widely used due to complexity.
3.  **Saga Pattern**: Widely used, addresses a different set of problems for distributed systems.

### Two-Phase Commit (2PC)

- **Name Origin**: Consists of two distinct phases: **Voting/Prepare Phase** and **Decision/Commit Phase**.
- **Components**:
  - **Transaction Coordinator**: The central entity that interacts with all participants.
  - **Participants**: The individual databases or microservices (e.g., Order DB, Inventory DB) involved in the distributed transaction.
    - **Prerequisite**: The coordinator must support all participants it needs to interact with.

#### 2PC Phases:

1.  **Phase 1: Prepare Phase (or Voting Phase)**:

    - The application initiates a transaction via the **Transaction Coordinator**.
    - The Coordinator starts the transaction and sends the required **update queries** to all respective participants.
    - The Coordinator then asks all participants: **"Are you prepared to commit?"**.
    - **Participant Actions**:
      - Each participant **puts a lock** on its relevant data.
      - It **makes the necessary changes** in its local DB but **does NOT commit yet**.
      - If it successfully prepares the changes, it sends an **"OK"** response to the Coordinator.
      - If the update operation fails (e.g., `Inventory DB` update fails), it sends a **"NO"** response to the Coordinator.

2.  **Phase 2: Decision Phase (or Commit Phase)**:
    - The Coordinator collects responses from all participants.
    - **If ALL participants send "OK"**:
      - The Coordinator makes a **"commit" decision**.
      - It sends a **"commit" message** to all participants.
      - Participants then **commit their changes** and **remove their locks**.
    - **If ANY participant sends "NO" (or fails to respond)**:
      - The Coordinator makes an **"abort" decision**.
      - It sends an **"abort" message** to all participants.
      - Participants **roll back (abort) their changes** (even if they had successfully updated their DB locally) and **remove their locks**.
    - The Coordinator then **closes the transaction**.

#### Interview Questions: Issues/Problems in 2PC

- **Potential Failures**:
  - **Transaction Coordinator failure**.
  - **Participant failure**.
- **Message Loss Scenarios**:
  - **Prepare message lost**: Coordinator sends `prepare`, but participant doesn't receive it.
  - **OK message lost**: Participant sends `OK`, but Coordinator doesn't receive it.
  - **Commit/Abort (decision) message lost**: Coordinator sends decision, but participant doesn't receive it.

#### Handling Failures in 2PC (with Log Files)

- **Log Files**: Both the **Coordinator and each Participant maintain permanent log files**.

  - Before sending a message, the **Coordinator writes its action** (e.g., `send prepare message`, `decision: commit`) to its log.
  - Similarly, before sending a response, each **Participant writes its action** (e.g., `sending OK`, `received commit`) to its log.
  - These logs allow failed components to **recover and determine the last known state** upon coming back online.

- **Specific Failure Handling Scenarios**:
  1.  **Prepare Message Lost (Coordinator fails to send or message is lost)**:
      - The participant, having made local changes and put locks, **waits for the `prepare` message**.
      - If it doesn't receive the `prepare` message within a timeout, it **assumes a Coordinator issue and safely aborts its transaction**.
      - If the `prepare` message arrives later, the participant (already aborted) can simply send a `NO` response, leading the Coordinator to abort everyone.
  2.  **OK Message Lost (Participant sends `OK`, but Coordinator doesn't receive or participant fails)**:
      - The Coordinator sends `prepare` and **waits for `OK` responses**.
      - If an `OK` message from a participant is lost or the participant goes down, the **Coordinator times out and aborts the transaction** for all participants.
      - If the participant later comes up, it can **ask the Coordinator** about the transaction state. The Coordinator checks its log and confirms the abort decision.
  3.  **Commit/Abort Message Lost (Coordinator fails after deciding but before sending/receiving commit message to all, or message is lost)**:
      - **This is the main blocking problem in 2PC**.
      - A participant might have sent `OK` and is now **waiting for a commit or abort decision**.
      - If the Coordinator fails at this point (e.g., after deciding to commit but before all participants receive the `commit` message), the participant is **blocked**.
      - The participant **cannot make its own decision** because it doesn't know what the Coordinator decided (e.g., if others received `commit` or `abort`).
      - It **must wait for the Coordinator to recover** and send the decision, or for another mechanism to inform it.
      - The Coordinator, upon recovery, checks its log to determine its last decision (commit or abort) and re-sends it.
      - **Issue Summary**: The decision taken by the Coordinator is held only by the Coordinator; participants are unaware of the global decision until they receive the final commit/abort message.

### Three-Phase Commit (3PC)

- **Goal**: Designed to **resolve the blocking issue** of 2PC, making it a **non-blocking protocol**.
- **Nature**: Still a **synchronous** protocol.
- **Complexity**: Very **complex to build**, which is why it is **not very popular**.

#### 3PC Phases:

- **Phase 1: Prepare Phase**:

  - **Identical to 2PC**.
  - Coordinator asks "Are you prepared to commit?".
  - Participants respond "OK" (prepared) or "NO" (failed).

- **Phase 2: Pre-Commit Phase**:

  - This phase **introduces an extra step before the final commit**.
  - The Coordinator makes its **decision** (e.g., "I want to commit" or "I want to abort") based on the "OK" responses.
  - The Coordinator **logs this decision** (e.g., `pre-commit: commit`) in its permanent log file.
  - Crucially, the Coordinator then **sends this `pre-commit` message (sharing its decision) to all participants**.
    - This message **informs** participants of the Coordinator's decision (commit or abort) but **does not yet command them to commit or abort**.
    - This allows participants to potentially **take their own decision** if the Coordinator fails later.
  - Participants **acknowledge receipt** of the `pre-commit` message (e.g., by sending `OK`) and **log this decision** in their own log files.

- **Phase 3: Commit Phase**:
  - After receiving acknowledgements for the `pre-commit` message from all participants, the Coordinator sends the **final `commit` (or `abort`) message**.
  - Participants then **actually commit or abort** their transactions and log this action.

#### How 3PC Unblocks Participants:

- **Scenario 1: Coordinator fails AFTER sending `pre-commit` messages**.

  - Participants have received and **logged the Coordinator's decision** (e.g., "pre-commit to commit") during Phase 2.
  - If the Coordinator fails before sending the final Phase 3 `commit` message, participants, after a timeout, can **check their own logs**.
  - Since they know the Coordinator's intended decision, they can **safely proceed with that decision (commit or abort) independently**, without waiting for the Coordinator to recover.
  - When the Coordinator eventually comes back up, it will check its log, see its `pre-commit` decision, and will perform the same action, which the participants would have already done.

- **Scenario 2: Coordinator fails BEFORE sending `pre-commit` messages**.

  - In 3PC (and 2PC to some extent), participants are often configured to **know about each other**.
  - If a participant doesn't receive a `pre-commit` message, it can **query other participants** to see if they received it.
  - If **none of the participants received the `pre-commit` message**, they can safely assume the Coordinator failed _before_ making its decision.
  - In this case, all participants can **safely abort their transactions**.
  - When the Coordinator recovers, it will check its log, find no `pre-commit` decision, and will also safely abort its transaction, aligning with the participants' actions.

- **Result**: Participants are **unblocked** because they can use the `pre-commit` information or communication with other participants to make an independent, safe decision if the Coordinator fails.

### Saga Pattern

- **Nature**: **Asynchronous** in nature.
- **Use Case**: Used for **long-trailing activities or transactions** that involve many participants and where it's **not feasible to hold locks** across all participants for the entire duration (as 2PC/3PC would).
- **Example**: A complex sequential business process (P1 then P2 then P3...) where each step is a local transaction.

#### How Saga Pattern Works:

1.  **Local Transactions**: A distributed transaction is broken down into a **sequence of local transactions**, each performed by a different participant.
2.  **Immediate Commit**: Each participant **commits its local transaction immediately**. This means locks are held only for the duration of the local operation, not across the entire distributed process.
3.  **Sequential Execution**: Each participant's work typically depends on the success of the previous one (e.g., P2 starts only after P1 is successful).
4.  **Compensating Transactions for Rollback**:
    - If any participant's local transaction **fails** at any point in the sequence (e.g., P5 fails).
    - The failed participant (P5) **publishes an event/message** (e.g., to a message queue) indicating failure.
    - Previous participants (P4, P3, P2, P1) **read this event**.
    - Each preceding participant then executes a **"compensating transaction"** to undo the changes it made.
    - This **cascades backward** until all previously committed local transactions are effectively rolled back.

- **Key Differences from 2PC/3PC**:
  - **Asynchronous** vs. Synchronous.
  - **No global lock**: Each local transaction commits independently.
  - **Rollback via compensating transactions**: Instead of a global abort command, individual "undo" operations are performed.
  - Suited for **long-running, loosely coupled** distributed processes.

Here are the notes from the provided YouTube transcript, organised by source and highlighting key concepts for interview preparation:

**Source**

- Database indexing, particularly in **Relational Database Management Systems (RDBMS)**, is a frequently asked topic.
- To understand indexing, three core concepts must be clear:
  - How **actual table data is stored**.
  - The **types of indexing** present.
  - The **data structures used for indexing** and their functionality.
- At a high level, indexing on a column (e.g., Employee ID) creates an index that points to rows, enabling **faster data fetching**.
- The discussion aims to delve deeper than a high-level overview, as interview follow-up questions demand a more profound understanding.

**Source**

- The table visible to a user is a **logical representation** of data, not its physical storage in the database.
- **DBMS (Database Management System) creates data pages** to store actual data.
- A typical **data page is 8 KB in size** (8192 bytes), though this can vary by database system.
- Each data page is capable of storing **multiple table rows**.
- The structure of an 8 KB data page includes:
  - **Header (96 bytes)**: Contains basic information like the page number, available free space, and checksum.
  - **Data Records (8060 bytes)**: This area is reserved for the actual table rows.
  - **Offset Array (36 bytes)**: This is an array where each index holds a **pointer to a corresponding data record (row)** within the data records space. The specific utility of this offset array will be discussed later.

**Source**

- **Fundamental understanding**: DBMS creates data pages, and actual table rows are stored within these pages.
- The **offset array** functions as an array of pointers, with each pointer directed towards a specific row within the data records space.
- **Example of Row Storage Capacity**: If one table row is 64 bytes, and 8060 bytes are available for data records in an 8 KB page, then approximately **125 DB rows** (8060 / 64) can be stored in one data page.
- **Row Insertion Order**: Generally, rows are inserted into the data records area of a page in the same sequence that they were inserted into the table by the user.
- **Offset Array Ordering**: The order of pointers in the offset array (e.g., index 0 pointing to Row 2, index 4 pointing to Row 1) **does not necessarily reflect the physical insertion order** of rows; its specific ordering is determined by DBMS for indexing purposes and will be explained later.

**Source**

- The **offset array** holds pointers to the actual data (rows) present within the data page. The non-sequential ordering of these pointers within the offset array will be clarified when **DBMS indexing** is discussed.
- **DBMS manages and creates these data pages**.
- For a large table (e.g., 10,000 rows), DBMS will create **multiple data pages** (Page 1, Page 2, Page 100, etc.) to accommodate all the rows. DBMS has total control over these data pages.

**Source**

- Ultimately, the data pages created by DBMS are stored in **data blocks**.
- A **data block is a physical memory unit** (like sectors or tracks on a disk).
- A **data block represents the minimum amount of data that can be read and written by one input/output (I/O) operation**. It is the smallest unit of data that can be fetched in a single operation.
- **Data blocks are managed by the underlying storage system** (e.g., disk, SSD), **not by DBMS**.
- DBMS only controls data pages (i.e., which rows are stored in a particular data page).
- Data blocks can be **scattered physically** across the disk, and DBMS has no control over their physical location.

**Source**

- **Data block sizes** typically range from 4 KB to 32 KB, with 8 KB being the most common size.
- **Relationship between Data Page and Data Block Size**:
  - If a data page is 8 KB and a data block is 8 KB, **one data block stores one data page**.
  - If a data page is 8 KB and a data block is 32 KB, **one data block can store multiple data pages** (e.g., Data Page 1, Data Page 2, Data Page 3).
- **DBMS maintains a mapping** of data pages to data blocks because it does not control the physical location of data blocks. For example, it maps "Data page 1 to Data block 1".
- **Overall data storage flow**: Logical table representation -> stored in data pages -> many data pages per table -> each page stored in a physical data block -> one data block can hold many data pages -> **DBMS maintains the page-to-block mapping**.

**Source**

- RDBMS primarily categorises indexing into two types: **Clustered Indexing** and **Non-Clustered Indexing**. (Terms like primary, secondary, and composite indexes relate to these categories).
- **Indexing's primary purpose is to increase database query performance** by enabling faster data retrieval.
- **Without indexing**, DBMS must iterate through **every single table row** (Big O of N, or **O(N)** time complexity) to find the requested data.
  - This involves checking each data page by loading its corresponding data block into memory, reading the page, and then inspecting its rows. This is inefficient for large datasets (millions of rows).

**Source**

- **With indexing**, the goal is to significantly speed up data searching.
- The primary data structure used for indexing is the **B+ Tree**.
- B+ Tree provides a time complexity of **Big O of Log N (O(log N))** for insertion, searching, and deletion operations.
- **B Tree and B+ Tree are very similar**; understanding B Tree is foundational to understanding B+ Tree.
- **Key characteristics of a B Tree**:
  - It **maintains sorted data**.
  - All **leaf nodes are at the same level**, making it a balanced tree.
  - In an **M-order B Tree**, each node can have at most **M children**.
  - Each node in an M-order B Tree can contain a maximum of **(M-1) keys**.

**Source**

- **B Tree Node Structure (Example: 3-order B Tree)**:
  - A node can have a maximum of **(3-1) = 2 keys**.
  - It will have **three pointers** (Pointer 1, Pointer 2, Pointer 3).
  - **Pointer Functionality**:
    - A pointer to the left of a key points to a child node whose data is **less than** that key.
    - A pointer to the right of a key points to a child node whose data is **greater than or equal to** that key.

**Source**

- **B Tree Construction Example (3-order B Tree)**:
  - **Insert 9**: Stored in the first key slot of the root node.
  - **Insert 33**: Stored in the second key slot of the same node, maintaining sorted order (9, 33). This node is now full (2 keys max).
  - **Insert 75**: Since the current node is full, and 3 keys (9, 33, 75) would be present, the **middle value (33) is promoted to become a new parent (root) node**.
    - The new structure is: **33 as the root**.
    - **Left child of 33**: contains values less than 33 (i.e., 9).
    - **Right child of 33**: contains values greater than or equal to 33 (i.e., 75).
  - **Insert 41**: Traverse: 41 > 33, so go to the right child. Insert 41 into the node containing 75, maintaining sorted order (41, 75). There is space, so no split occurs.

**Source**

- **B Tree Construction Example (continued)**:
  - **Insert 98**: Traverse: 98 > 33, go right. The node (41, 75) now needs to store 98, leading to (41, 75, 98). This exceeds the 2-key limit. The **middle value (75) is promoted to the parent (33)**.
    - The parent node becomes (33, 75).
    - The left child of 75 becomes (41).
    - The right child of 75 becomes (98).
  - **Insert 214**: Traverse: 214 > 75, go right. Insert 214 into the node containing 98, resulting in (98, 214). There is space.
  - **Insert 126**: Traverse: 126 > 75, go right. The node (98, 214) now needs to store 126, leading to (98, 126, 214). This exceeds the 2-key limit. The **middle value (126) is promoted to the parent (33, 75)**.
    - The parent node (33, 75, 126) also exceeds its 2-key limit.
    - **Root Split**: The **middle value (75) from the parent (33, 75, 126) is promoted to become a new root**.
      - New root is **75**.
      - Left child of 75 is (33).
      - Right child of 75 is (126).
      - The children of 33 are (9) and (41).
      - The children of 126 are (98) and (214).
- This illustrates how B Trees store data in a sorted manner and expand by splitting nodes, including the root, to maintain balance.

**Source**

- **B+ Tree is essentially a B Tree** with an **additional feature**: all **child nodes (leaf nodes) are linked to each other**.
- **DBMS leverages B+ Trees to manage data pages and the rows within them**, especially for tables with a large number of rows (e.g., 100,000 rows across many pages).
- **Node contents in a B+ Tree used by DBMS for indexing**:
  - **Root or Intermediate Nodes**: These nodes hold values primarily for **faster searching and navigation** (to go left or right). It's possible that these values may not even exist as actual data in the database (e.g., they might have been deleted).
  - **Leaf Nodes**: These nodes **actually hold the indexed column values**. These are the current, actual values from the column on which the index is built.

**Source**

- **DBMS B+ Tree Construction Example (Indexing Employee ID)**:
  - Consider a basic table with Employee IDs (19, 25, 30, 17, 6, 1, 5). An index is placed on the 'Employee ID' column.
  - DBMS constructs a B+ Tree (e.g., 3-order) based on these Employee IDs.
  - When **30 is inserted** after 19 and 25 (exceeding a 2-key limit in a leaf node), 25 is promoted to the parent.
    - The **intermediate node** becomes 25.
    - The **left leaf node** contains 19.
    - The **right leaf node** contains 25 and 30.
  - **Key Distinction**: In DBMS's B+ Tree, the **leaf nodes explicitly store the actual index column values** (e.g., 25 and 30). The intermediate node (25) acts purely as a guide for searching, and the value it holds does not necessarily mean that particular record exists in the DB's indexed column.

**Source**

- **B+ Tree Construction (continued)**:
  - **Insert 17**: Less than 25, goes left to the node with 19. The leaf node becomes (17, 19) in sorted order.
  - **Insert 6**: Less than 25, goes left to the node with (17, 19). Attempting to insert 6 would make the node (6, 17, 19), exceeding the 2-key limit. The **middle value (17) is promoted to the parent (25)**.
    - The parent node becomes (17, 25).
    - The left child of 17 is (6).
    - The right child of 17 is (17, 19).
  - **Insert 1**: Less than 17, goes left to the node with 6. The leaf node becomes (1, 6).
  - **Insert 5**: Less than 17, goes left to the node with (1, 6). Attempting to insert 5 would make the node (1, 5, 6), exceeding the 2-key limit. The **middle value (5) is promoted to the parent (17, 25)**.
    - The parent node (5, 17, 25) now exceeds its 2-key limit.
    - **Root Split**: The **middle value (17) from (5, 17, 25) is promoted to form a new root**.
      - New root: **17**.
      - Left child of 17: (5).
      - Right child of 17: (25).
      - Leaf nodes are now sorted: (1, 5), (6), (17, 19), (25, 30) (conceptual representation).
- The speaker reiterates that intermediate nodes (like 17 and 25 in the new root/intermediate levels) are for navigation and **do not necessarily hold actual indexed column values**; only the leaf nodes do.
- The **leaf nodes of the B+ Tree are guaranteed to be in sorted order**: (1, 5, 6, 17, 19, 25, 30).

**Source**

- **Connecting B+ Tree to Data Pages and Blocks**:
  - DBMS manages numerous data pages (e.g., Data Page 1 to Data Page 100).
  - Each data page is stored within a data block.
  - DBMS meticulously **maintains the mapping between data pages and data blocks**.
  - When a column is indexed, DBMS constructs a **B+ Tree**, which sorts the data of that column.
- **How B+ Tree links to specific data pages**:
  - When the **first row (e.g., 19 E1)** is inserted into an empty table (with an indexed column):
    - DBMS creates **Data Page 1** and stores the row within it.
    - A B+ Tree is built on the indexed column (e.g., Employee ID).
    - Crucially, along with the key (e.g., 19), the B+ Tree node also stores a **pointer indicating which data page (e.g., Data Page 1) contains this specific row**.
    - Data Page 1 is then stored in a data block (e.g., Block 1).
    - For this example, assume a data page can hold a maximum of three rows.

**Source**

- **Inserting a Second Row (e.g., 25 E2)**:
  - The row (25 E2) is inserted into Data Page 1 (assuming space is available).
  - The B+ Tree is updated to include 25.
  - A pointer is associated with 25 in the B+ Tree, indicating that this record is also stored in **Data Page 1**.
  - Data Page 1 remains stored in Data Block 1.
- **Inserting a New Row (e.g., 30 E3) and Data Page Selection**:
  - A key question arises: If there are many existing data pages (e.g., 1 to 100), **how does DBMS decide which page to insert a new row into?**.
  - **The B+ Tree is used to determine this**.
  - **Process**:
    1.  DBMS first tries to insert the new value (e.g., 30) into the B+ Tree. The B+ Tree logic determines its correct **logical sequence and position** within the tree structure (e.g., 25 as root, 19 left, 25 & 30 right leaf).
    2.  It then checks the **nearest existing index value's data page location**. For example, 25 (a neighbour to 30) is stored in Data Page 1.
    3.  DBMS loads **Data Page 1** (from Data Block 1).
    4.  The new row (30 E3) is then inserted into Data Page 1 (if there's space).
    5.  A pointer is stored with 30 in the B+ Tree, linking it to **Data Page 1**.

**Source**

- **Inserting another Row (e.g., 17 E4) and Page Splitting**:
  - DBMS attempts to insert 17 into the B

Here are detailed notes on Two-Phase Locking (2PL), its types, issues, and resolution strategies, as explained in the provided YouTube transcript, formatted for an interview:

### **Two-Phase Locking (2PL)**

- **Introduction**

  - Two-Phase Locking (2PL) is a type of **pessimistic locking**.
  - It is widely used in companies.
  - As the name suggests, 2PL consists of **two distinct phases**.

- **The Two Phases**

  - **Phase 1: Growing Phase**
    - A transaction can **only acquire new locks**.
    - The number of locks held by the transaction can only increase over time.
    - A transaction cannot release any locks in this phase.
    - The lock manager either grants or denies a lock request; denial occurs if the lock is already held by another transaction.
  - **Phase 2: Shrinking Phase**
    - A transaction can **only release previously acquired locks**.
    - It **cannot acquire any new locks**.
    - Once a transaction releases even one lock, it has moved into the shrinking phase and cannot acquire any more.
  - **Fundamental Rule:** No matter the type of 2PL (basic, conservative, or strong strict), every 2PL implementation **must follow these two phases** – growing (acquire only) and shrinking (release only). It cannot alternate between acquiring and releasing (e.g., acquire, release, acquire, release).

- **Types of Two-Phase Locking**
  - There are three main types of 2PL:
    1.  **Basic Two-Phase Locking**
    2.  **Conservative Two-Phase Locking** (also known as Static 2PL)
    3.  **Strong Strict Two-Phase Locking** (also known as Rigorous Locking)
  - **Rigorous locking** (Strong Strict 2PL) is **mostly used in the industry**.

---

### **Basic Two-Phase Locking**

- **Description**

  - In basic 2PL, a transaction starts in the growing phase, acquiring exclusive (X) or shared (S) locks as needed.
  - Once it starts releasing locks, it enters the shrinking phase and cannot acquire any more.
  - **Locks can be released even before the transaction commits** or ends.
  - Committing a transaction also releases all acquired locks.

- **Major Issues with Basic 2PL**

  - Basic 2PL has two very significant issues, which are frequently asked in interviews:
    1.  **Deadlock**
    2.  **Cascading Aborts**

- **Issue 1: Deadlock**
  - **Definition:** A deadlock occurs when two or more transactions are waiting indefinitely for each other to release the locks they need.
  - **Example 1: Circular Wait on Different Data**
    - Transaction T1 acquires a lock on Data A.
    - Transaction T2 acquires a lock on Data B.
    - T1 then requests a lock on Data B (currently held by T2). T1 waits for T2.
    - T2 then requests a lock on Data A (currently held by T1). T2 waits for T1.
    - Both are now waiting for each other, unable to complete their growing phase, resulting in a deadlock.
  - **Example 2: Lock Conversion on Same Data**
    - Transaction T1 acquires a **shared lock** on Data A (for reading).
    - Transaction T2 also acquires a **shared lock** on Data A (multiple transactions can read simultaneously with shared locks).
    - T1 then wants to **update** Data A, requiring an **exclusive lock**. It tries to convert its shared lock to an exclusive lock.
    - T2 also wants to **update** Data A, requiring an **exclusive lock**. It also tries to convert its shared lock to an exclusive lock.
    - Neither T1 nor T2 can acquire the exclusive lock because the other transaction holds a shared lock. Both will wait for the other to release its shared lock, leading to a deadlock, even on a single data item.

---

### **Deadlock Prevention/Resolution Strategies**

- **1. Timeout**

  - **Mechanism:** A scheduler monitors how long a transaction has been waiting for a lock. If a transaction waits for too long, the scheduler assumes a possible deadlock and **aborts** the waiting transaction.
  - **Disadvantage:** This method can **incorrectly abort valid transactions** that are merely waiting for a lock held by another transaction that is taking a long time to complete, even if no deadlock exists. It might abort a valid transaction that is not in a deadlock.

- **2. Wait-For Graph (WFG)**

  - **Mechanism:**
    - The scheduler maintains a **directed graph** called a "wait-for graph".
    - An **edge from transaction T_i to T_j** (T_i → T_j) signifies that **T_i is waiting for T_j to release a lock**.
    - The scheduler **periodically checks the WFG for cycles**.
    - **Detection:** If a **cycle is formed in the WFG, a deadlock is confirmed**.
    - **Resolution:** When a cycle is detected, one or more transactions from the cycle must be **aborted** to break the cycle. The aborted transaction(s) are called **victims**.
    - **Dynamic Updates:** Edges are deleted from the graph when a lock is released by a transaction, which was causing another transaction to wait.
  - **Victim Selection Criteria:** The scheduler does not blindly choose a victim. It considers factors such as:
    - The **amount of effort** the transaction has already put in (to avoid aborting transactions that are close to finishing or have done significant work).
    - The **amount of effort required to finish** the transaction (prioritising transactions that can finish soon).
    - The **cost of aborting** the transaction (e.g., number of updates that need to be rolled back to a previous state).
    - The **number of cycles** the transaction is part of (a transaction involved in multiple deadlocks might be a better candidate for abortion).
  - **Usage:** WFG is **widely used** in 2PL to prevent deadlocks.

- **3. Conservative 2PL** (as a deadlock avoidance strategy)

  - **Mechanism:** This method avoids deadlock by requiring **each transaction to acquire _all_ the locks it needs at the very start of the transaction**, before it begins executing any operations.
  - **Process:** The scheduler attempts to grant all required locks simultaneously. If it fails to acquire even one lock, **none of the locks are granted**, and the transaction waits until all required locks are available.
  - **Benefit:** **Deadlock will never occur** in conservative 2PL because a transaction only starts execution once it holds all necessary locks, meaning it never has to wait for another transaction during its operation.
  - **Disadvantages:**
    - **Less concurrency:** Transactions might hold locks for longer than necessary or wait for extended periods if all locks aren't immediately available, reducing overall system concurrency.
    - **Extra overhead for the scheduler:** The scheduler needs to know, in advance, all the data items a transaction will work on, which can be an additional burden.
  - **Usage:** Conservative 2PL is **mostly not used** due to its less concurrency.

- **4. Timestamp-based Deadlock Detection**
  - **Concept:** This method assigns a timestamp to each transaction. **Older transactions (smaller timestamps) have higher priority**.
  - **Two Logic Options:**
    - **Wait-Die**
      - **Old Transaction Waits for New:** If an **older transaction (T_old)** requests a lock held by a **newer transaction (T_new)**, T_old **waits** for T_new to release the lock.
      - **New Transaction Dies for Old:** If a **newer transaction (T_new)** requests a lock held by an **older transaction (T_old)**, T_new **aborts** (dies).
    - **Wound-Wait**
      - **Old Transaction Wounds New:** If an **older transaction (T_old)** requests a lock held by a **newer transaction (T_new)**, T_old **forces T_new to abort** (wounds it).
      - **New Transaction Waits for Old:** If a **newer transaction (T_new)** requests a lock held by an **older transaction (T_old)**, T_new **waits** for T_old to release the lock.

---

### **Issue 2: Cascading Aborts (Dirty Reads)**

- **Definition:** Cascading aborts occur when a transaction reads data (a "dirty read") that has been modified by another transaction that has not yet committed. If the first transaction later aborts, the second transaction (and potentially others that read from it) must also abort because the data it read is no longer valid.
- **Example:**
  - Transaction T1 acquires a lock on Data A, updates its value (e.g., from 10 to 11).
  - T1 then **releases the lock on A** (as allowed in basic 2PL's shrinking phase) _before_ committing the transaction.
  - Transaction T2 immediately acquires a lock on A and **reads the updated value (11)**, which is a **dirty read** because T1 has not yet committed.
  - T2 then performs operations based on this value.
  - Later, T1 **aborts** (e.g., due to an error). When T1 aborts, its changes to Data A must be **rolled back** (e.g., A reverts to 10).
  - Since T2 read the now-invalid value (11) and performed operations based on it, T2 also **must be aborted**.
  - This "cascade" of aborts (T1 aborts, causing T2 to abort) is the problem. Cascading aborts are generally considered **very expensive**.

---

### **Strong Strict Two-Phase Locking (Rigorous 2PL)**

- **Description:**
  - In Strong Strict 2PL, a transaction goes through the **growing phase, acquiring locks**.
  - However, unlike basic 2PL, it **does not release any locks (exclusive or shared) until the _very end_ of the transaction**, when it either **commits or aborts**.
  - All locks are held until the commit point.
- **Benefits:**
  - **Resolves Cascading Aborts:** By holding all locks until commit, no other transaction can read data modified by an uncommitted transaction. This prevents dirty reads and thus cascading aborts.
- **Disadvantages:**
  - **Deadlock is still possible**. (Deadlocks are typically handled using Wait-For Graphs in this approach).
  - **Less concurrency:** Holding locks until the very end reduces the time other transactions can access the locked data, leading to lower concurrency compared to basic 2PL.
- **Usage:** Strong Strict 2PL (Rigorous 2PL) is **widely used in the industry**, primarily because preventing cascading aborts is often prioritised over potential deadlocks (which can be managed with WFG).

---

### **Summary of 2PL Types and Issues Addressed**

| 2PL Type              | Deadlock Issue | Cascading Abort Issue | Concurrency Level                                | Industry Usage  |
| :-------------------- | :------------- | :-------------------- | :----------------------------------------------- | :-------------- |
| **Basic 2PL**         | **Possible**   | **Possible**          | Higher than other 2PL types                      | Avoided         |
| **Conservative 2PL**  | **Avoided**    | Possible              | **Lowest** (due to holding all locks from start) | Mostly not used |
| **Strong Strict 2PL** | **Possible**   | **Avoided**           | Lower than basic, higher than conservative       | **Widely Used** |

- **General approach in practice:** Strong Strict 2PL is generally preferred to avoid the expensive cascading aborts. Deadlocks, which are still possible in Strong Strict 2PL, are typically managed using **Wait-For Graphs (WFG)**.

Here are detailed notes from the provided YouTube transcript excerpts, organised into blocks, defining concepts, and formatted for an interview.

---

### **1. Introduction to Cryptography and Encryption**

- **Importance of Cryptography**: Cryptography is a **most important topic** because it is used in **day-to-day life**.
  - Examples include chat applications (end-to-end encryption), websites (HTTPS secure), and JWT (JSON Web Tokens) for authentication and integrity.
  - It forms a **solid foundation for system design**.
- **What is Encryption?**
  - Encryption is the **process of converting readable data into text which is difficult to understand**.
  - This unreadable text is also known as **Cipher** or **Ciphertext**.
- **How Encryption Works**:
  - An **encryption method** takes **readable text** (plain text) and, using a **cryptographic key**, applies an **algorithm** to convert it into **unreadable text (Cipher)**.
  - The algorithm's behaviour can depend on the key (e.g., moving letters forward based on a key value).
- **How Decryption Works**:
  - A **decryption method** takes the **unreadable text (Ciphertext)** and, along with a **cryptographic key** (which can be the same or different from the encryption key depending on the algorithm), converts it **back to a readable format** (plain text).

---

### **2. Types of Encryption: Symmetric vs. Asymmetric**

- **Overview**: Encryption is of two types: **Symmetric Encryption** and **Asymmetric Encryption**.
  - Both are **equally important** and are often used simultaneously, not one being superior to the other.
- **Symmetric Encryption**:
  - **Definition**: The **same key is used for both encryption and decryption**.
  - **Example**: A sender encrypts plain text with a key (e.g., key=5) to get cipher data. The receiver then uses the **exact same key** (key=5) to decrypt the cipher data back into plain text.
- **Asymmetric Encryption**:
  - **Definition**: Uses **two different keys** – a **private key** and a **public key**.
  - **Example**: A sender might use Key1 (e.g., public key) to encrypt data to cipher text. The receiver then uses Key2 (e.g., private key), which is different from Key1, to decrypt the cipher text back to plain text.
  - **Key Usage Scenarios**:
    - For general data encryption, encryption can be done with the **public key** and decryption with the **private key**.
    - For scenarios like **digital signatures**, encryption (signing) happens through the **private key**, and decryption (verification) happens through the **public key**. The specific key usage depends on the scenario.

---

### **3. Algorithms for Symmetric Encryption**

- **DES (Data Encryption Standard)**:
  - Was popular earlier, but is **no longer recommended**.
  - **Cracked around 2005** due to a **small key size of only 56 bits**, making it vulnerable to a Brute Force attack.
- **AES (Advanced Encryption Standard)**:
  - More **advanced** and **very popularly used**.
  - **Difficulty to break**: It is difficult to crack because its **key length is significantly larger than DES**.
    - Key lengths can be **128 bits, 192 bits, or 256 bits**.
    - **Trade-off**: While a bigger key length provides more security, it also requires **more computation**, making the process **slower**.
  - **Data Processing**: AES processes data in **128-bit chunks**.

---

### **4. Algorithms for Asymmetric Encryption**

- **Common Algorithms**: RSA, DSA, Diffie-Hellman, and ECDH.
- **Popularity**: **Diffie-Hellman** and **RSA** are very popular.
- **RSA Key Length**: RSA typically uses a **2048-bit key length**, which is very high compared to AES, making it **more secure**.

---

### **5. Advantages and Disadvantages (Symmetric vs. Asymmetric Encryption)**

#### **Symmetric Encryption**

- **Advantages**:
  - **Speed & Computation**: It is **fast and requires less computation** compared to asymmetric encryption. This is because its key lengths (e.g., max 256 bits for AES) are much smaller than asymmetric keys (e.g., 2048 bits for RSA).
  - **Suitable for Bulk Data**: It is a good option for **encrypting bulk data**, such as in chat applications where a lot of data needs continuous encryption.
- **Disadvantages**:
  - **Key Distribution Issue**: The main challenge is **how to securely distribute the same shared key** between the sender and receiver over an **insecure network**. If a hacker intercepts the key, they can easily decrypt all communications. This is a frequent interview question.
  - **Key Management Overhead**: As the **number of clients increases**, the server has to **manage a unique symmetric key for each client-server communication pair**. This increases the server's overhead for managing and distributing these keys.

#### **Asymmetric Encryption**

- **Advantages**:
  - **Secure Key Distribution**: There are **no security issues with key distribution**.
    - Each user has a **private key (secret)** and a **public key (known to everyone, including hackers)**.
    - When a sender encrypts data using the **receiver's public key**, only the receiver's **private key** can decrypt it. Since the private key is never transferred over the network, it remains secret from hackers.
  - **Enables Key Exchange Protocols**: It makes **key exchange protocols like Diffie-Hellman possible**.
    - This is crucial because Diffie-Hellman, being based on asymmetric encryption, allows the **secure transfer of a symmetric key** (which will then be used for bulk data encryption) over an insecure network, solving the symmetric key distribution problem.
    - This illustrates why symmetric and asymmetric encryption are both used simultaneously.
  - **Enables Digital Signatures**: Digital signatures, which provide **authentication** (verifying the sender) and **data integrity** (checking for data modification in transit), are based on asymmetric encryption (private/public key technology).
- **Disadvantages**:
  - **Computation Intensive and Slow**: It is **computationally intensive** and **slower** than symmetric encryption. This is due to the very **large key lengths** (e.g., 2048 bits for RSA) which involve complex mathematical calculations.
  - **Not Suitable for Bulk Data**: Due to its slower speed, it is **not suitable for encrypting bulk data**.

---

### **6. Deep Dive: AES (Advanced Encryption Standard)**

- **Purpose**: To explain the internal workings of an encryption algorithm beyond just passing data and a key.
- **Nature**: AES is a **symmetric encryption algorithm** and a **block cipher**.
- **Data Processing**: It processes data in **blocks of 128 bits**.
- **Key Terminology**:
  - **State Array**: A 128-bit block of data or a 128-bit key is organised into a **4x4 array** of bytes. Since 1 byte = 8 bits, 16 bytes (4x4) equals 128 bits. This array is called a state array.
  - **Word**: A set of **four bytes**.
  - **Round Key**: A group of **four words**.
- **AES Encryption Process (High-Level Algorithm)**:
  1.  **Key Generation**: A 128-bit (or 192/256-bit) key is generated (e.g., using a random key generation method).
  2.  **Key Expansion Process**:
      - The initial 128-bit key is expanded to **44 words**.
      - This process involves generating subsequent words by performing **XOR operations** on previous words, often after one word has been passed through a function. (44 words are needed because the initial step uses 4 words, and then 10 rounds use 4 words each, totaling 44 for a 128-bit key).
  3.  **Data Processing per 128-bit Block**: The following steps are performed for each 128-bit block of plain text:
      - **Initial Step: Add Round Key**: The data block is XORed with the first four words (the initial round key) from the expanded key.
      - **Multiple Rounds**: The process then goes through multiple rounds (e.g., 10, 12, or 14 rounds depending on key size). Each round consists of four sub-steps:
        - **Substitute Byte**: Each data byte in the state array is replaced with another byte based on a pre-defined algorithm (e.g., using an S-box lookup table).
        - **Shift Row**: Rows of the state array are circularly shifted (e.g., left shift).
        - **Mix Column**: Values within columns are mixed, typically through XOR operations, to diffuse the data.
        - **Add Round Key**: The data block (after the previous three sub-steps) is XORed with the next four words from the expanded key specific to that round.
      - **Output**: After all rounds, the 128-bit plain text block is transformed into a **cipher text block**.
  4.  **Decryption**: The decryption process essentially reverses these steps, taking the 128-bit cipher text block and moving in the opposite direction, using the round keys in reverse order, to get the original plain text block.
- **Relationship between Key Size and Rounds**:
  - **128-bit key**: 10 rounds.
  - **192-bit key**: 12 rounds.
  - **256-bit key**: 14 rounds.
  - More rounds (due to more bits) lead to **more modifications on the input data**, increasing security.

---

### **7. Deep Dive: Diffie-Hellman Key Exchange**

- **Purpose**: To **securely share a secret (symmetric) key** between a sender and receiver over an **insecure network**, even if a hacker is listening. It solves the key distribution problem of symmetric encryption.
- **Nature**: Diffie-Hellman uses **asymmetric encryption** principles (public/private key concepts) internally.
- **Steps**:
  1.  **Share Common Data (Public)**:
      - Sender and receiver **publicly share** (over the insecure network) two common numbers: a **prime number** (e.g., 7) and a **primitive root** (e.g., 3).
      - **Primitive Root**: For a prime number 'p', a primitive root 'g' is a number such that `g^x mod p` for `x` from 1 to `p-1` generates all unique values from 1 to `p-1`.
      - **Hacker's knowledge**: At this stage, a hacker also knows these shared public values.
  2.  **Random Generation of Private Keys (Secret)**:
      - Each party (sender and receiver) **independently and randomly generates its own private key** (e.g., sender's private key = 4, receiver's private key = 5).
      - **These private keys are kept secret** and are **never shared** over the network.
  3.  **Calculate Public Keys (Shareable)**:
      - Each party calculates its **public key** using the formula: `Primitive Root ^ Private Key mod Prime Number`.
      - **Sender's Public Key**: `3^4 mod 7 = 4`.
      - **Receiver's Public Key**: `3^5 mod 7 = 5`.
  4.  **Exchange Public Keys (Public)**:
      - The sender and receiver **exchange their calculated public keys** over the insecure network.
      - **Hacker's knowledge**: A hacker listening on the network now knows the primitive root, the prime number, and both of the generated public keys. **Crucially, the hacker _still does not know_ the private keys of either party**.
  5.  **Calculate Shared Secret Key (Common Secret)**:
      - Each party calculates the final **shared secret key** using the formula: `Received Public Key ^ My Private Key mod Prime Number`.
      - **Sender's Calculation**: Uses the public key received from the receiver (5) and its own private key (4): `5^4 mod 7 = 2`.
      - **Receiver's Calculation**: Uses the public key received from the sender (4) and its own private key (5): `4^5 mod 7 = 2`.
      - **Result**: **Both parties arrive at the exact same shared secret key** (e.g., 2).
- **Security of Diffie-Hellman**:
  - The hacker, despite knowing all public values (primitive root, prime number, both public keys), **cannot compute the shared secret key without knowing the private keys**.
  - The security relies on the **computational difficulty of the Discrete Logarithm Problem**. Choosing a **very large private key** makes it computationally infeasible (takes years even with brute force) for a hacker to derive the private key from the public values or to compute the shared secret, even if they know the final output.

---

### **8. Deep Dive: Digital Signature**

- **Purpose**: Digital signatures are used for two primary purposes:
  1.  **Authentication**: To **authenticate the sender** – ensuring the data came from the intended user and not someone intercepting or spoofing the sender.
  2.  **Data Integrity**: To ensure the **integrity of the data** – verifying that the data has not been modified in transit (in mid).
- **Nature**: Digital signatures use **asymmetric encryption's private and public key technology**.
- **Process at Sender Side**:
  1.  **Hash Function**: The **plain data** (e.g., "hello") is first passed through a **hash function**.
      - **Hash properties**: Produces a **fixed-size hash value** regardless of data size. The **same data always yields the same hash**, but even a **minor change in data results in a totally different hash**.
  2.  **Sign Algorithm**: The generated hash value is then passed to a **sign algorithm** along with the **sender's _private key_** (which is kept secret by the sender).
  3.  **Signature Generation**: The sign algorithm uses the private key and the hash to generate a **signature**.
  4.  **Transmission**: The sender then sends both the **plain data** (or it could be encrypted data, but for this example, plain data is used) and the **signature** to the receiver.
- **Process at Receiver Side**:
  1.  **Compute Data Hash**: The receiver takes the **received plain data** and computes its hash using the **same hash function** that the sender used.
  2.  **Verify Algorithm**: The receiver takes the **received signature** and passes it to a **verify algorithm** along with the **sender's _public key_**.
      - **Authentication Check**: Only the sender's public key can successfully verify a signature made by that sender's private key. If verification is successful, it authenticates the sender.
  3.  **Compare Hashes**: The verify algorithm (using the sender's public key) produces a hash value from the signature. This hash value is then **compared** to the hash calculated from the received plain data.
  4.  **Authentication and Integrity Verdict**:
      - If the two hash values **match**:
        - It confirms **data integrity** (the data was not changed).
        - It confirms **authentication** (the data came from the legitimate sender because only their public key could verify it).
      - If the two hash values **do not match**:
        - It indicates that the **plain data was modified** in transit.
- **Key Usage Summary**: The signing process uses the sender's **private key**, while the verification process uses the sender's **public key**.

Here are detailed notes from the provided YouTube transcript, explaining the concepts discussed, suitable for an interview:

---

### **Video: "27. Thundering Herd Effect on Ticket Booking App | System Design"**

This video discusses a common system design issue known as the "Thundering Herd Effect," which can occur in applications like ticket booking systems during high-traffic events, leading to system downtime.

#### **1. Standard Application Setup & Components**

- **Load Balancer:** Distributes incoming requests across multiple instances of a service.
- **Microservice Instances (e.g., Ticket Service):** Individual running copies of the service that handle requests (e.g., Instance 1, Instance 2, Instance 3).
- **Queues (Threadpool Executor):** Each service instance has an internal queue (often managed by a threadpool executor) that safeguards it by limiting the number of requests it can handle concurrently based on its configured capacity. Requests wait in this queue until a thread is available.

#### **2. The "Thundering Herd Effect" Explained**

- **Definition:** This phenomenon occurs when a **"bulk" or "huge spike in traffic" comes suddenly** at a particular instant, such as precisely when a sale opens (e.g., 12:00 p.m. for a concert ticket sale).

#### **3. Problems Caused by the Thundering Herd Effect**

When a "thundering herd" of requests hits the system:

- **Queue Saturation:** The load balancer distributes the sudden surge, causing **all instances' queues to become completely filled**.
- **Resource Exhaustion:** All threads within the instances become busy, working at full capacity.
- **Request Denial:** Any new requests arriving are **denied** because queues are full and no threads are available to process them.
- **The "Retry" Problem (Major Issue):**
  - Denied requests are frequently **retried** by clients, further increasing the traffic ("new request plus retried one now it is keep on coming").
  - This continuous retrying has the "capability to spam everything".
- **Increased Latency:**
  - When the system operates at full capacity (all threads busy, queues full), **latency significantly increases**.
  - For example, a request that previously took 10 seconds might now take 20 seconds due to resource limitations and the sheer volume of requests.
- **Cascading Impact & Timeouts:**
  - The increased latency can cause **existing requests (those already being processed or waiting in queues) to time out**.
  - Clients, not receiving a response for their timed-out requests, will also **retry** these requests, exacerbating the load.
- **Auto-scaling Limitations:** While auto-scaling might deploy more instances, the continuous wave of **retried requests can overwhelm even the newly scaled-up infrastructure**, as requests keep piling up across all instances.

#### **4. Solutions to Mitigate the Thundering Herd Effect**

The proposed solutions focus on managing retries and controlling the initial ingress of requests.

- **A. Handling Retries:**

  - **Exponential Back-off:**
    - **Concept:** A strategy where clients wait for an increasingly longer period before retrying a failed request.
    - **Formula:** `base * 2^n`, where `base` is an initial wait time (e.g., 100 milliseconds) and `n` is the number of consecutive failures.
    - **Example:**
      - 1st failure (n=1): `100 * 2^1 = 200 ms` wait.
      - 2nd failure (n=2): `100 * 2^2 = 400 ms` wait.
    - **Limitation:** If all clients use the _exact same_ exponential back-off formula, they might still retry simultaneously, leading to a renewed "thundering herd" effect.
  - **Exponential Back-off + Jitter:**
    - **Concept:** **"Jitter" means introducing Randomness** into the back-off delay to prevent all retries from happening at the same time.
    - **Modified Formula:** `minimum(maximum_wait_time, random(0, base * 2^n))`.
    - This formula ensures that:
      - A random waiting time is picked between 0 and the calculated exponential back-off time.
      - There's a defined `maximum_wait_time` to prevent excessively long delays.
    - **Benefit:** Spreads out the retries over time, preventing a new simultaneous surge of requests.

- **B. First Line of Defense: Rate Limiter**
  - **Placement:** The **Rate Limiter should be positioned at the "application Gateway"**, making it the primary "first line of defense" before requests even reach the individual service instances and their internal queues.
  - **Token Bucket Algorithm (Suggested):**
    - **Concept:** A common rate-limiting algorithm that allows a system to control the rate at which requests are processed.
    - **How it works:** The rate limiter is configured based on the system's actual capacity. It makes a certain number of "tokens" available (each token represents permission for one request).
    - **Request Flow:**
      - Only requests with an available token are allowed to proceed to the next level (the service instances).
      - Other requests either **wait in a queue at the rate limiter itself or are rejected immediately** from the gateway.
    - **Benefits:**
      - **Prevents System Overload:** Ensures that service instances do not reach their maximum capacity, thus preventing increased latency and timeouts for existing requests.
      - **Spreads Bursts:** Can effectively **distribute sudden, instantaneous bursts of traffic** (e.g., 1 million requests instantly) across a defined interval (e.g., one minute), allowing the system to handle the load gradually.

#### **5. Overall Strategy**

- Implement a **Rate Limiter (e.g., using Token Bucket Algorithm)** as the **primary "first line of defense"** at the application gateway to control incoming request rates.
- Employ **Exponential Back-off with Jitter** for all client-side retries to prevent simultaneous retry storms.
- Ensure **Auto-scaling** mechanisms are still in place as part of the overall infrastructure strategy.

Here are detailed notes from the provided YouTube transcript about API Gateway and Microservices Architecture, explaining concepts for an interview, line by line, from each source:

---

### **Video: "API GATEWAY and Microservices Architecture | How API Gateway act as a Single Entry Point?"**

This video explains the crucial role of an API Gateway in a microservices architecture, its features, and how it contributes to handling high traffic and ensuring system resilience.

#### **1. Introduction to API Gateway & Core Functionality**

- **Importance:** API Gateway is a **very important topic in system design** and is frequently asked in interviews.
- **Key Interview Questions Addressed:**
  - How does an API Gateway, as a **single entry point**, handle millions of requests per second?
  - How is an API Gateway different from a **Load Balancer**? Does it come before or after the load balancer?
- **Definition:** An API Gateway **accepts client API requests** and **routes them to the correct backend service based on the API endpoint**. This core routing capability distinguishes it from a load balancer.
- **Routing Examples:**
  - If the API endpoint is `/API/invoice`, it routes to the Invoice microservice.
  - If `/API/order`, it routes to the Order microservice.
  - If `/API/sales`, it routes to the Sales microservice.
- **API Gateway vs. Load Balancer - Key Difference:**
  - **Load Balancer:** Its primary task is to **simply distribute traffic equally among multiple instances of the _same_ microservice** (e.g., Invoice microservice 1, 2, 3). It **does not have the capability to understand an API endpoint** (e.g., `/invoice` vs `/order`) and make routing decisions based on that.
  - **API Gateway:** Is "very intelligent" and **understands the API endpoint** to decide which _microservice_ to route to.
- Beyond routing, API Gateway possesses "so many other capabilities".

#### **2. Key Capabilities / Features of API Gateway**

The API Gateway is intelligent and offers several critical features:

- **A. API Composition (or API Aggregation)**

  - **Problem Statement:** Different client devices (e.g., mobile, PC) require varying levels of detail for the _same conceptual view_ (e.g., "view my order").
    - **Mobile devices:** Often have less bandwidth, so they might display fewer details, querying only essential APIs (e.g., product details and invoice details from respective microservices).
    - **Personal Computers:** Have more space and bandwidth, so they might show more details, requiring queries to additional microservices (e.g., product, invoice, ratings, reviews, recommendations).
    - **Without API Gateway:** The client would need to manage this complexity, querying multiple APIs based on its device type, adding "additional headache on the client".
  - **API Composition Solution:**
    - The API Gateway is configured with a **single endpoint** (e.g., `/API/myorder`).
    - When a client calls this endpoint, the API Gateway **intelligently determines the client device** (e.g., mobile or PC).
    - Based on the device, the API Gateway itself **calls all the necessary underlying APIs/microservices**.
    - It then **gathers all the results** from these disparate microservices and **returns a single, consolidated response** to the client.
  - **Benefit:** This "reduces the client work and complexity a lot".
  - **Real-world example:** This feature is "very frequently used in Netflix".

- **B. Authentication**

  - **Functionality:** API Gateway has the capability to **authenticate clients**.
  - **How it Works (e.g., with OAuth 2.0 flow):**
    1.  **Client obtains an Access Token:** In the first step, the client gets an access token from an **authorization server**.
    2.  **Subsequent Requests:** For any subsequent request, the client passes this access token to the API Gateway.
    3.  **Token Validation:** The API Gateway integrates with the authorization server to **validate if the provided token is legitimate**.
    4.  **Authorisation to Microservices:** Only if the token is valid, the API Gateway allows the request to proceed to the backend microservices.
  - **Benefit:** Centralises authentication logic at the API Gateway, preventing duplication of authentication code across multiple individual microservices.

- **C. Rate Limiting**

  - **Purpose:** Allows setting various rules to **manage the rate of incoming requests**, preventing system overload.
  - **Components/Rules:**
    - **Burst Limit:** Defines the **maximum number of concurrent requests** that the API Gateway can handle at its peak. If this limit is exceeded, the API Gateway returns a `429 Too Many Requests` HTTP status code. This value is configurable (e.g., 500 concurrent requests). Cloud providers like AWS and Azure API Gateways offer this option.
    - **API Throttling (more granular):** Allows limiting **specific individuals or applications** when they exceed an allowed request rate.
      - **Example:** An API endpoint like `/API/invoice` can be limited to "not more than 10 times in a minute". The 11th call within that minute would be blocked.
      - This control can be applied "by a particular user also".
      - It can also include **IP-based blocking**.
    - **API Queues (part of Rate Limiting):**
      - Helps to **handle the "thundering herd issue"**.
      - If the number of incoming requests exceeds the `burst limit` (e.g., 1000 requests arrive, but the burst limit is 500), the **excess requests (the additional 500) can be placed into an "API Queue"**.
      - These requests "will wait in the waiting area till your API Gateway get the bandwidth to process them".

- **D. Service Discovery**

  - **Criticality:** Considered a "very very important" feature.
  - **Problem:** In a distributed microservices environment, instances frequently **scale up or scale down**, causing their **IP addresses and port numbers to constantly change**. This dynamic nature makes it difficult for other services to know where to send requests.
  - **Solution:** Service Discovery keeps track of the **current location (IP address and port number)** of all active microservices instances.
  - **Two Approaches to Service Discovery:**
    1.  **Self-Registration:** Each microservice instance, upon scaling up or down, **registers or deregisters itself** with the Service Discovery service.
    2.  **Health Check (API Gateway Driven / Pull-based):** Service Discovery continuously performs **health checks** (e.g., checking heartbeats) on all registered microservices. If a microservice is unresponsive, Service Discovery **removes its location from its records**, ensuring only active locations are provided.
  - **API Gateway's Interaction:** When the API Gateway needs to route a request to a specific microservice (e.g., an `/order` API request needs to go to the Order microservice), it first **queries Service Discovery** to get the current, active location of that microservice.
  - **Examples of Service Discovery Software:** **Zul** and **Eureka**.
  - **Deployment:** Service Discovery can be a separate, dedicated service or its functionality can be **inbuilt within the API Gateway itself**.

- **E. Other Capabilities:**
  - **Request/Response Transformation:** Allows for **modifying the format or content of incoming requests or outgoing responses** to meet specific company requirements.
  - **Caching:** The API Gateway can **cache responses**. This means if the same request comes again, the API Gateway can directly serve the response from its cache without needing to invoke the backend API, improving performance.
  - **Logging:** Provides **centralised logging** of requests and responses passing through the gateway.

#### **3. How API Gateway Handles Millions of Requests Per Second & Single Entry Point Concept**

This section addresses the crucial question of how API Gateway scales and maintains high availability, despite being a "single entry point."

- **A. Layered Architecture (within a single Availability Zone):**

  - **Microservices and Instances:** You have various microservices (e.g., Invoice, Order), each with **multiple instances**.
  - **Load Balancer for Each Microservice:** Each set of microservice instances (e.g., Invoice microservice instances) has its **own dedicated Load Balancer** responsible for distributing traffic among those specific instances.
  - **API Gateway's Role in Routing:**
    1.  A client request first arrives at the **API Gateway**.
    2.  Based on the API endpoint (e.g., `/API/invoice` or `/API/order`), the API Gateway queries **Service Discovery**.
    3.  Service Discovery provides the **address of the _correct load balancer_** for that specific microservice.
    4.  The API Gateway then routes the request to that specific load balancer.
    5.  The load balancer, in turn, distributes the request to one of the **multiple instances of its respective microservice**.
  - **Placement:** This confirms that the **API Gateway comes _before_ the individual load balancers** that manage microservice instances.

- **B. Scalability and Resilience with Regions and Availability Zones (AZs):**

  - **Region:** A broad geographical area (e.g., Mumbai, Chennai).
  - **Availability Zone (AZ):** A distinct, isolated area _within_ a region (e.g., Bandra in Mumbai).
    - Each AZ has a **dedicated data center**.
    - AZs **do not share any resources**, meaning if one AZ goes down, it does not affect others in the same region.
    - This design ensures that if one AZ fails, traffic can be seamlessly shifted to another AZ within the same region.
    - If all AZs within a region fail, then traffic can be routed to another completely separate region.
  - **Architecture within each AZ:** The layered structure (multiple microservice instances, each with its own load balancer) is **replicated within _each_ Availability Zone**. So, `az1` will have its own set of microservices and load balancers, and `az2` will have an identical setup.
  - **API Gateway at Region Level:** The API Gateway itself is conceptualised as operating at the **region level**.
  - **Routing Across AZs:**
    1.  A request comes to the regional API Gateway.
    2.  The API Gateway uses **Service Discovery**.
    3.  Service Discovery, based on various criteria (e.g., user's location, nearest AZ), determines which specific Availability Zone to route the traffic to.
    4.  Within the chosen AZ, the API Gateway then routes the request to the **appropriate microservice load balancer** (e.g., invoice load balancer or order load balancer) based on the API endpoint.
  - **No Single Point of Failure:** This multi-AZ and multi-region setup ensures high availability:
    - If a load balancer fails, another load balancer in the same AZ takes over (implied by multiple load balancers).
    - If an entire AZ fails, another AZ within the same region takes over.
    - If an entire region fails, traffic is routed to another region (e.g., Region 2). This makes it "not a single point of failure".

- **C. Distributing Traffic Across Multiple Regions (DNS-based Load Balancing):**
  - **The Problem:** With multiple regions, each having its own API Gateway, the question arises: "who is going to distribute the traffic" among these different regional API Gateways.
  - **Solution: DNS (Domain Name System) comes into the picture**.
  - **DNS-based Load Balancers:**
    - These are specialised DNS services that distribute traffic at a global level.
    - **Examples:** **AWS Route 53** and **Azure Traffic Manager** are considered DNS-based load balancers.
    - **Functionality:** When a client makes an initial call, these DNS-based load balancers distribute the traffic to the **most appropriate API Gateway in a specific region**.
    - **Intelligence:** They possess intelligence similar to Service Discovery. They consider factors such as:
      - **Latency:** Routing to the geographically nearest region to minimise delay.
      - **Compliance:** Routing traffic to a specific region even if it's geographically further, due to regulatory or data residency requirements (e.g., "XY Z country its traffic should not goes to this region it can only be goes to this region").
  - **DNS is Not a Single Point of Failure:**
    - The speaker explicitly states that DNS itself is "not a single point of failure".
    - This is because DNS is a **hierarchical system** (Local DNS, Root DNS, Top-Level DNS, Authoritative DNS) with multiple instances, ensuring redundancy. (The speaker mentions this topic could be covered in a separate, in-depth system design video).

**Summary of Request Flow in a Highly Scalable Architecture:**

Client Request → DNS-based Load Balancer (for regional routing) → Regional API Gateway → Service Discovery (for microservice load balancer location) → Microservice Specific Load Balancer → Microservice Instance.

Here are detailed notes from the provided YouTube transcript excerpts, designed for interview preparation, with comprehensive citations:

### Notes from the YouTube Transcript

#### Source - Introduction to Load Balancers

- **Definition of Load Balancer:**
  - Generally helps in **distributing traffic to multiple instances of a server**.
  - Its primary function is to **prevent a single server from being overloaded** with huge traffic.
- **Types of Load Balancers:**
  - **Server-Side Load Balancer:**
    - Features a **centralised load balancer**.
    - The **client application does not contain any logic for load balancing**.
    - The client calls a dedicated load balancer server, which then forwards the request to one of the requested services.
    - Examples include API Gateway and Nginx.
  - **Client-Side Load Balancer:**
    - The **load balancing capability is present inside the client** (the caller itself).
    - The client first invokes a **service discovery** (e.g., Eureka server) to get a list of all available instances for a particular service (e.g., "Service A").
    - The service discovery returns this list of instances.
    - The **client then holds the logic of load balancing** (either through an internal library or its own custom logic) and selects one instance to send the request to.
    - This video specifically focuses on client-side load balancers.
- **Prerequisite for Client-Side Load Balancing:**
  - **Service discovery** is a prerequisite.
  - This is because when using a Feign client with service discovery, it **automatically and internally uses a load balancer**.

#### Source - Getting Started with Client-Side Load Balancing

- **Learning Approach:**
  - The discussion starts with client-side load balancing using **`RestTemplate`**.
  - The load balancing logic learned here will be the same for other clients like `RestClient`, Feign client, or `WebClient`.
- **Manual Instance Selection (Pre-Spring Cloud Load Balancer):**
  - In previous service discovery examples using `RestTemplate`, fetching instances involved using a `DiscoveryClient` object from the Eureka server (e.g., to get instances of "product service").
  - The client then **manually chose one instance** from the list (e.g., `instances.get(0)`) and invoked its endpoint.
  - This `get(0)` method is cited as a "very bad load balancing algorithm" but serves as an example of the need for a load balancing logic to pick one instance.
- **Introducing Spring Cloud Load Balancer:**
  - **Spring Cloud Load Balancer is a client-side load balancer**.
  - It is **frequently used**.
  - **Netflix Ribbon** is another client-side load balancer, but it is **deprecated**.
  - **Istio service mesh** is also frequently used for load balancing.

#### Source - Implementing Spring Cloud Load Balancer with RestTemplate

- **Steps to Integrate Spring Cloud Load Balancer:**
  1.  **Add Dependency:** Include the `spring-cloud-loadbalancer` dependency in your `pom.xml`.
  2.  **Annotate RestTemplate:** Annotate where you create the `RestTemplate` object with **`@LoadBalanced`**.
      - **Purpose of `@LoadBalanced`:** This annotation instructs the framework to **intercept the request**.
      - It tells the framework to internally **call service discovery, get an instance, and apply a load balancing algorithm**.
      - Specifically, it ensures that a **`LoadBalancerInterceptor`** class is invoked.
- **Simplified Client Invocation:**
  - With `@LoadBalanced`, you **no longer need to manually use `DiscoveryClient`**.
  - The `LoadBalancerInterceptor` handles the internal calls to service discovery, fetching instances, performing load balancing, and selecting a server automatically.
  - Instead of hardcoding host and port numbers (e.g., `192.80.60.3:8082`), you only need to **provide the name of the service** (e.g., `http://product-service`).
  - The load balancer will resolve this service name to the correct host and port.
  - This significantly simplifies the setup by handling service discovery and algorithm application internally.

#### Source - Internal Working of Load Balancer Interceptor

- **Interception in `RestTemplate` Flow:**
  - When the `execute` method of `RestTemplate` is called, the **`LoadBalancerInterceptor`** is invoked first.
- **Logic within `LoadBalancerInterceptor` (Debug Insight):**
  - **`loadBalancerClientFactory.getInstanceForServiceId(serviceId)`:**
    - This piece of code is responsible for **picking the load balancing algorithm** for the specified `serviceId` (e.g., Round Robin or Random).
  - **`loadBalancer.chooseRequest()`:**
    - This method internally **calls service discovery** to get a list of instances.
    - It then **picks one instance** from this list based on the load balancing algorithm determined by the previous step.
- **Load Balancing Algorithms:**
  - Various algorithms exist, such as Round Robin, Least Connection, IP Hash, Least Response Time, and Random. (Details of these algorithms are covered in a separate HLD playlist).
  - The current focus is on **how the framework implements** and uses these algorithms.

#### Source - The Crucial Concept of `serviceId`

- **Importance of `serviceId`:**
  - Understanding the `serviceId` concept is **very important** because engineers often get stuck on how it works when coding load balancing.
- **Definition of `serviceId`:**
  - `serviceId` is essentially a **client ID or client name**.
  - Examples include `product-service` or `order-service`, which are the application names registered with the Eureka server.
- **Relationship between Algorithm and `serviceId`:**
  - A **key concept**: **Each load balancer algorithm is attached to a specific `serviceId`**.
  - This means you can have different algorithms for different services. For example:
    - `product-service` might use Round Robin.
    - `sales-service` might use Random.
    - `XYZ-service` might use a Weighted algorithm.
  - It is **not a global setting** where one algorithm (e.g., Round Robin) applies to all services (product, sales, XYZ). Each algorithm is distinctly attached to one service.

#### Source - Default and Supported Load Balancing Algorithms

- **Default Algorithm:**
  - By default, **Spring Cloud Load Balancer picks the Round Robin load balancer** for all services.
  - This means for every service you add (e.g., product, sales, XYZ), Round Robin is the default algorithm chosen.
- **Changing Default Algorithms:**
  - If the default Round Robin algorithm is not desired, you must **explicitly define which algorithm to use for which client or `serviceId`**.
  - This reiterates that each algorithm is attached to a particular `serviceId`.
- **Algorithms Supported by Default in Spring Cloud Load Balancer:**
  - **Round Robin**
  - **Random**
- **Custom Algorithms:**
  - If you need more or different algorithms (e.g., weighted, least connection), you can:
    - **Create a child class and write a custom load balancer**.
    - Use a different library or framework, such as **Istio with a sidecar**, which offers a wider variety of algorithms.

#### Source - Overriding Default Algorithm for a Specific Service

- **Scenario:** Changing the load balancer algorithm for a specific service (e.g., `product-service`) from the default Round Robin to Random.
- **Configuration for Specific Service Overrides:**
  - In your application (e.g., `OrderApplication`), add the **`@LoadBalancerClient` annotation**.
  - This annotation takes two parameters:
    - **`name`**: The `serviceId` for which this configuration applies (e.g., `name = "product-service"`).
    - **`configuration`**: The class containing the specific load balancer configuration for this `serviceId` (e.g., `LoadBalancerProductClientConfig.class`).
  - This configuration is **"very very specific for this product service"**.
- **Defining the Specific Configuration Class (e.g., `LoadBalancerProductClientConfig`):**
  - Inside this class, you would return an object of `ReactorLoadBalancer` (the parent type for load balancer algorithms).
  - To use a Random algorithm, you would instantiate `new RandomLoadBalancer(...)`.
- **Runtime vs. Startup Configuration Loading:**
  - Normal `@Configuration` classes (like where `RestTemplate` bean is created) have their beans created at application startup.
  - However, the **load balancer configuration defined via `@LoadBalancerClient` is different; it is lazy and invokes at runtime**.
  - This means that when you actually attempt to invoke `http://product-service`, this specific `LoadBalancerProductClientConfig` will be invoked to decide which load balancing algorithm to use.

#### Source - Constructor Details for Load Balancers

- **Parameters for Load Balancer Constructors:**
  - Load balancer algorithm classes (like `RandomLoadBalancer`) typically take two parameters in their constructor:
    1.  **`ServiceInstanceListSupplier` object:**
        - This object is responsible for **invoking the service discovery** mechanism.
        - It provides a lazy object, meaning it doesn't call service discovery immediately but only when needed.
        - It helps to fetch the list of instances for a given `serviceId`.
    2.  **`serviceId` (client name):**
        - This is the specific service ID (e.g., `product-service`) to which the load balancing algorithm (e.g., RandomLoadBalancer) is associated.
        - This reinforces that **each load balancing algorithm is tied to a particular service ID**. When `product-service` is invoked, only the random load balancer will be used if configured this way.

#### Source - Managing Multiple and Global Load Balancer Configurations

- **Scenario:** Different algorithms for different specific services (e.g., `product-service` with Algo A, `order-service` with Algo B), and a common default algorithm for all other services.
- **`@LoadBalancerClients` Annotation:**
  - This annotation (note the plural 's') allows for defining **multiple load balancer client configurations**.
  - It has two main parts:
    1.  **`defaultConfiguration`:** Specifies a global configuration class (e.g., `LoadBalancerGlobalConfig.class`) that defines the default load balancing algorithm for services not covered by specific client configurations.
    2.  **`value`:** An array where you can list multiple **`@LoadBalancerClient`** annotations, each for a different specific service (e.g., `@LoadBalancerClient(name = "product-service", configuration = ProductServiceConfig.class)`, `@LoadBalancerClient(name = "order-service", configuration = OrderServiceConfig.class)`).
- **Order of Configuration Loading:**
  - When multiple configurations are present (specific and default), the **child (specific) client configurations load first**, followed by the default (global) one.

#### Source - Dynamic `serviceId` in Global Configuration

- **Global Configuration Challenge:**
  - For specific services (e.g., `product-service`), the `serviceId` can be hardcoded in their respective configurations.
  - However, for a global or default configuration that applies to many services (e.g., `order-service`, `sales-service`, `XYZ-service`), the `serviceId` cannot be hardcoded as it is dynamic.
- **Dynamic `serviceId` at Runtime:**
  - As load balancer configurations load at runtime, when a service is actually invoked (e.g., `order-service`), the **`serviceId` is dynamically retrieved from the environment** at that moment.
  - This dynamically obtained `serviceId` is then passed to the load balancer algorithm's constructor (e.g., `new RoundRobinLoadBalancer(..., serviceId)`), effectively tying the algorithm to the specific service being called.
  - This allows the global configuration to create a load balancer bean for each service ID dynamically at runtime.

#### Source - Preventing Duplicates with `@ConditionalOnMissingBean`

- **The Conflict Problem:**
  - If a specific load balancer configuration exists for a service (e.g., `product-service` uses Random) and a global configuration also tries to apply an algorithm (e.g., Round Robin) to that same `product-service` dynamically, it would result in **two algorithms being attached to one service ID**, leading to a runtime exception.
- **The Solution: `@ConditionalOnMissingBean`:**
  - To prevent this, the **`@ConditionalOnMissingBean` annotation must be used in the global configuration**.
  - **Purpose of `@ConditionalOnMissingBean`:** It instructs the framework to **only create the load balancer bean from the global configuration if a bean for that particular `serviceId` is not already present**.
  - This ensures that specific configurations take precedence, avoiding duplicate load balancer creation for a given `serviceId`.
- **Runtime Importance for Global Configuration:**
  - The dynamic nature of `serviceId` at runtime is especially important for global configurations.
  - During application startup, the `serviceId` would be null because no service has been invoked yet.
  - Only at runtime, when a service (e.g., `product-service`) is actually called, does the `serviceId` get set, allowing the load balancer bean to be mapped to that specific service. Once mapped, it's not called again for subsequent invocations for that service.

#### Source - Writing a Custom Load Balancer

- **Load Balancer Class Hierarchy:**
  - Key interfaces/classes: `ReactiveLoadBalancer` -> `ReactorLoadBalancer` -> **`ReactorServiceInstanceLoadBalancer`** (interface).
  - Concrete implementations: `RoundRobinLoadBalancer` and `RandomLoadBalancer`.
- **Steps to Create a Custom Load Balancer:**
  1.  **Extend `ReactorServiceInstanceLoadBalancer`:** Your custom load balancer class should be a child of this interface.
  2.  **Constructor:** The constructor must accept the same two parameters as default load balancers:
      - A `ServiceInstanceListSupplier` object.
      - The `serviceId`.
  3.  **Implement the `choose` Method:**
      - This is where your custom logic resides.
      - Inside `choose`:
        - Use `serviceInstanceSupplier.getIfAvailable()` to **call service discovery and retrieve the list of available instances**.
        - If instances are found, **implement your custom load balancing algorithm** to pick one instance from the list (e.g., `instances.get(0)` for a simple example, but you can write any complex logic here).
        - Handle cases where no instances are found (e.g., return empty response or throw exception).
- **Integrating Custom Load Balancer:**
  - Once your custom load balancer class is written, you can specify it in your `@LoadBalancerClient` configuration (e.g., `LoadBalancerProductClientConfig`) by instantiating your custom class instead of `RandomLoadBalancer`.

#### Source - Load Balancing with Feign Client

- **Feign Client's Internal Load Balancing:**
  - The Feign client framework internally uses the **same `LoadBalancerInterceptor`** as `RestTemplate` for load balancing.
  - When multiple instances are received from service discovery, Feign automatically picks one using its internal load balancer.
- **Service Discovery with Feign:**
  - With service discovery, you only need to provide the service name (e.g., `product-service`) to Feign, not the full URL.
- **Overriding Algorithm for Feign Client:**
  - Even though Feign abstracts much of the load balancing, you **can change the default algorithm** (which is likely Round Robin internally).
  - The process is **identical to overriding for `RestTemplate`**:
    - Use the `@LoadBalancerClient` (or `@LoadBalancerClients`) annotation in your application.
    - Specify the `serviceId` (`name`) and a custom `configuration` class.
    - In this configuration class, define the desired load balancing algorithm (e.g., `new RandomLoadBalancer(...)` or `new MyCustomLoadBalancer(...)`) linked to that specific `serviceId`.
    - This configuration will be invoked at runtime when the Feign client calls the service.
- **Benefits of Understanding the Framework:**
  - Although `RestTemplate` and Feign abstract much of the load balancing via `@LoadBalanced` and `LoadBalancerInterceptor`, understanding the underlying framework (like the `serviceId` concept and runtime configuration loading) is valuable.
  - This knowledge helps in scenarios like writing **custom load balancing logic** or changing the load balancing capability for specific services, especially during interviews or company use cases.
- **Debugging Tip:**
  - Place debugger points or print statements (`System.out.println`) in your load balancer configuration classes.
  - Run the application and observe when these configurations are invoked:
    - During application startup.
    - At the actual time of invoking a service (runtime).
  - This helps in understanding the lazy, runtime nature of load balancer configurations, especially for the global part where `serviceId` is dynamic.

Here are the notes from the sources, presented line-by-line in separate blocks for each excerpt, suitable for an interview, with important points bolded and comprehensive citations:

### Excerpt from the transcript of the video "Dual Write Problem | Designing Event-Driven Microservices" uploaded on the YouTube channel "Concept && Coding - by Shrayansh"

#### Notes:

- The **Dual Write Problem** is a very important **HLDD (High-Level Design Document) topic** and interview question.
- Interviewers typically introduce this problem as a **follow-up question after discussing the Saga pattern**.
- Solving the Dual Write Problem is an excellent topic for a **personal project** and can significantly impact a resume.
- **Saga Pattern**: Involves multiple services (e.g., Service A, Service B, Service C).
- A service (e.g., Service A) performs a **transaction in its database (DB)**, then **publishes an event**.
- This event is **consumed by another service** (e.g., Service B), which then performs its own work in its DB and might publish another event.
- This creates a **chain of events** where an event can be listened to by other services, leading to further operations in their respective DBs and potentially more event publishing.
- The challenge arises when Service A commits a transaction in its DB (e.g., "invoice created") and needs to publish an event – how to ensure **consistency between the DB transaction and event publishing**.

#### Notes:

- The Dual Write Problem occurs when a component needs to **persist a change in two different systems**, such as a **database (DB) and a message broker** (e.g., Kafka).
- **Consistency is crucial**: Both operations (DB write and event publishing) must be in a consistent state.
- **Inconsistent Scenarios:**
  - **DB write succeeds, but event publishing fails**: Service B (a consumer) might not receive the event and thus cannot perform its required actions (e.g., sending a notification).
  - **Event publishing succeeds, but DB write fails**: Other services might start working based on the event, but the core data is not persisted in the DB, leading to an overall failed request and an inconsistent system.
- The core question is **how to ensure both DB writing and message broker writing are consistent**.
- **Two-Phase Commit (2PC)** is often the first solution that comes to mind in an interview.
- **How 2PC works (high-level):**
  - Involves multiple services (e.g., Service A, Service B) and a **coordinator**.
  - **Prepare Phase:** The coordinator first sends a "prepare" message to all participants.
  - Participants respond with "yes, we are prepared".
  - **Commit Phase:** The coordinator then sends a "commit" message.
  - Participants commit their transactions and respond, confirming proper commitment.
- The idea is to treat the DB as Service A and the message broker as Service B in a 2PC setup.

#### Notes:

- **2PC is NOT a viable solution for the Dual Write Problem**.
- **Reasons why 2PC is not viable:**
  - **Heterogeneous Systems:** Dual Write involves different types of systems (DB and message queue).
  - **Message Queue Support:** Many message brokers **do not support Two-Phase Commit**. While a single DB or a DB with a tightly coupled application might support it, message queues generally do not.
  - **High Latency/Slowness in Distributed Systems:** 2PC is inherently slow because it requires **waiting for all participants to prepare and then commit** their operations, leading to strong consistency but at the cost of speed.
  - **Coordinator Crashes:** If the 2PC coordinator crashes, participants can be left in an **inconsistent state** and must wait for the coordinator to recover, further increasing latency.
- This is where **Saga Pattern** is preferred, as services do their work and publish events, with subsequent work happening asynchronously in the background.
- After rejecting 2PC, the interviewer will ask for alternative solutions.
- The solutions are generally found within **event-driven architecture patterns**.
- **Three patterns** are introduced to overcome the Dual Write Problem, which can also be used for personal projects.

#### Notes:

- The first pattern to solve the Dual Write Problem is the **Transactional Outbox Pattern**.
- **Mechanism:**
  - Instead of writing to both the main DB and publishing to a message broker directly, the service first **writes the event into a separate table called the `outbox` table**.
  - The **original main DB write** (e.g., inserting a user) and the **insertion of the event into the `outbox` table** are done within the **same local database transaction**.
  - **Example:** A user service wants to create a user:
    1.  **Begin Transaction**.
    2.  **Insert user** into the user table (main DB operation).
    3.  **Insert the event** (e.g., "user created event") into the `outbox` table (e.g., `user_event_outbox_table`).
    4.  **Commit the transaction**.
  - This ensures **atomicity**: if any failure occurs within this transaction, both the main DB write and the event in the `outbox` table will be rolled back, ensuring consistency (either both succeed or both fail).
- **`Outbox` Table Types:**
  - Could be a **common `outbox` table** for all events (user, order, invoice, etc.).
  - Could be **different tables for different event types** (e.g., `user_events`, `order_events`). The choice depends on business requirements.
- **Subsequent Process:** Once the transaction is committed, a **new "polar service" (or publisher)** is required.
- This polar service continuously **polls the `outbox` table**.

#### Notes:

- **Polar Service Functionality (Transactional Outbox Pattern):**
  - The polar service continuously **polls the `outbox` table**.
  - It **fetches events that have been written but are not yet published**.
  - It then **publishes these events to the message broker** (e.g., Kafka).
  - This publishing happens in an **asynchronous (async) manner**.
- **Resolution of Dual Write Problem:** The data is now consistently present in both the main DB (through the initial transaction) and the `outbox` table. The publisher then ensures these messages reach the message broker.
- **Retry Logic:** The publisher (polar service) should incorporate **retry logic** to ensure all messages from the `outbox` table are successfully published.
- **`Outbox` Table Cleanup:** The `outbox` table should be **regularly cleaned up** once messages are successfully published.
- **Challenges of Transactional Outbox Pattern:** No solution is perfect, and interviewers will ask about challenges.
  1.  **Extra Effort:** Requires writing and maintaining a separate polar (publisher) service.
  2.  **Delay in Publishing:** There's a potential **delay between when an event is written to the `outbox` table and when it is actually published** to the message broker. This is an asynchronous process, so immediate publishing is not guaranteed.
  3.  **Duplicate Event Publishing:** A polar service might **publish the same event multiple times** to the message broker.

#### Notes:

- **Resolving Duplicate Event Publishing (Transactional Outbox Pattern Challenge):**
  - **Idempotency Logic:** The solution involves bringing **idempotency logic** to the publisher.
  - **Kafka Example (Publisher-side Idempotency):**
    - In Kafka, the publisher can set `enable.idempotence` to `true`.
    - When enabled, the publisher sends a **publisher ID** and a **message sequence number** with each message.
    - For a unique message (e.g., Message 1), it will have a unique publisher ID (e.g., P1) and a message sequence number (e.g., S1).
    - If the publisher retries sending the same message, it will still use the same publisher ID (P1) and message sequence number (S1).
    - The **Kafka broker uses this publisher ID and message sequence number to detect and ignore duplicate requests**, ensuring only one copy of the message is stored in the topic.
- **Duplicate Events with Multiple Pollers (Publishers):**
  - The `enable.idempotence` setting in Kafka **does NOT resolve duplicates if multiple _different_ pollers (publishers) send the same logical message**.
  - Each polar will have its own unique publisher ID.
  - If Polar 1 sends Message M1 (with Publisher ID 1) and Polar 2 also sends Message M1 (with Publisher ID 2), the Kafka broker will treat them as unique messages because their publisher IDs are different, leading to duplicates in the topic.
  - Consumers would then read these duplicate messages.

#### Notes:

- **Resolving Duplicate Events with Multiple Pollers (Transactional Outbox Pattern Challenge):**
  - **Consumer-Side Idempotency:** When multiple pollers or producers might send duplicate logical messages (even if they have different publisher IDs), **consumer-side idempotency** is required.
  - **Mechanism:** Each message should have a **unique ID** (e.g., `user_ID` if it's a user event, or a general `unique_event_ID` from the `outbox` table).
  - The **consumer checks this unique ID**. If it has already processed a message with that unique ID, it **ignores the duplicate**.
- **Ordering Issue (Transactional Outbox Pattern Challenge):**
  - **Problem:** Events might be published and consumed **out of order**, especially if different pollers are picking events in parallel.
  - **Example Scenario:** A sequence of operations like creation, then updation, then deletion. If a notification service (consumer) receives the deletion message first, then creation, then updation, it leads to logical inconsistencies (e.g., "deleted" then "created").
  - Maintaining the order of events is very important.

#### Notes:

- **Understanding Ordering in Kafka (for Transactional Outbox Pattern Challenge):**
  - Kafka topics have **partitions** (e.g., P0, P1).
  - **Ways to publish a message to Kafka:**
    1.  **With a Key:** A hash is generated from the message key, and the message is sent to a specific partition (e.g., `key % num_partitions`). All messages with the same key will go to the same partition.
    2.  **Specific Partition:** The publisher explicitly assigns the message to a particular partition (e.g., Partition 0).
    3.  **No Key/No Partition:** Messages are placed randomly or in a round-robin fashion across partitions.
  - **Kafka's Ordering Guarantee:** Kafka **only guarantees order within a single partition for messages produced by a single producer**.
    - If one producer publishes messages 0, 1, 2, 3, 4 to a single partition (e.g., P0), they will be stored and consumed in that exact order (0, 1, 2, 3, 4).
  - **When Order is NOT Guaranteed:**
    - **Multiple Producers to Same Partition:** If Producer 0 publishes 0, 1, 2 and Producer 1 publishes 3, 4, 5, and both write to the same partition, the final order in the partition might be mixed (e.g., 3, 4, 5 then 0, 1, 2), as Kafka does not guarantee inter-producer order.
    - **Multiple Producers to Multiple Partitions:** If Producer 0 writes to P0 and Producer 1 writes to P1, and a consumer consumes from both, the consumer might read from P1 first (e.g., 3, 4, 5) then P0 (e.g., 0, 1, 2), resulting in out-of-order consumption.
    - In these cases, the **responsibility to buffer and sort messages falls to the consumer side**.

#### Notes:

- **Solutions for Strict Ordering (Transactional Outbox Pattern Challenge):**
  - For strict ordering with multiple producers or partitions, **Kafka Streams** can be used.
  - Kafka Streams performs **repartitioning or reordering**. It reads data from all partitions of a topic and attempts to reorder them into a proper sequence (e.g., 0, 1, 2, 3, 4, 5) before consumption. Kafka Streams is a complex topic.
- **Polar Not Able to Publish Event (Transactional Outbox Pattern Challenge):**
  - **Problem:** What if the polar service fails to publish an event to the message broker?.
  - **Solution:** Implement a **retry mechanism** with **exponential backoff** (which means increasing the wait time between retries).
  - **Handling Permanent Failures:**
    - If all retries fail, the message can be handled based on the `outbox` table's design.
    - If the `outbox` table maintains a `status` for each event, the status could be changed back to "pending" or "not yet published successful" so it gets picked up again later.
    - Alternatively, the failed event can be moved to a **separate "failed events" table** for later investigation.

#### Notes:

- **`Outbox` Table Growth (Transactional Outbox Pattern Challenge):**
  - **Problem:** The `outbox` table can grow very large if not regularly maintained, making queries difficult as its size increases.
  - **Solution:**
    - **Regular Cleanup:** A good strategy is to **clean up messages immediately after successful publication**.
    - **Batch Job:** Alternatively, a **batch job** can be run periodically (e.g., every hour) to delete all successfully published events in a single shot.
  - The specific cleanup strategy depends on business requirements.
- **Summary of Transactional Outbox Pattern Challenges:** Most challenges have solutions, which are important to explain in an interview.
- **Listen to Yourself Pattern:** This pattern is a **variation of the Transactional Outbox Pattern**.
  - **Mechanism:**
    1.  The service (e.g., User Service) **only inserts the event into the `outbox` table** (e.g., "user creation event") and commits the transaction. **It does NOT directly write to its main DB yet**.
    2.  A polar service reads the event from the `outbox` table and publishes it to the message broker (same as Transactional Outbox).
    3.  **Crucially, one of the consumers of this event is the _same service itself_ (or a demon application within it)**.
    4.  This internal consumer then **listens to its own event** (e.g., "insert user event") and **only then writes the data into its main DB** (e.g., the user table).
  - This is why it's called "Listen to Yourself" – the service creates an event, then consumes its own event to perform the actual DB write.

#### Notes:

- **Challenges of Listen to Yourself Pattern:**
  - It inherits **all the challenges of the Transactional Outbox Pattern**.
  - **Additional Challenge: Get Calls Before DB Write:**
    - **Problem:** After the initial POST operation that writes to the `outbox` table and responds successfully, the actual data is **not yet written to the main user table** (it's pending consumption by the demon application).
    - If a GET request for that data comes in immediately, the data won't be found in the main DB, leading to a failure to fulfill the request.
- **Solution for Get Calls Before DB Write (Listen to Yourself Pattern):**
  - **Write-Through Cache Technique** (e.g., using Redis).
  - **Mechanism:**
    1.  When the user service performs the initial insert operation, it **begins a transaction**.
    2.  It **inserts the event into the `outbox` table**.
    3.  It **commits the transaction**.
    4.  **Crucially, it also writes the data directly into a cache** (e.g., Redis).
    5.  Now, if a GET call comes before the demon application has processed the event and written to the main DB, the GET request will **first attempt to read from the cache**.
    6.  Since the data is in the cache, the request can be fulfilled from there.
    7.  Later, when the demon application consumes the event and writes to the main DB, the data becomes persistent.
    8.  If the cache expires, subsequent GET requests will then go to the main DB, where the data will now be present.

#### Notes:

- **Transaction Log Tailing Pattern:** This is the third pattern to solve the Dual Write Problem.
- **Key Differentiator:** Unlike the Outbox and Listen to Yourself patterns, this pattern **does NOT require a separate `outbox` table**.
- **Core Concept: Change Data Capture (CDC):**
  - It relies on **Change Data Capture (CDC) tools** like **Debezium**.
  - These tools **read the database transaction logs** (e.g., MySQL's binary logs, PostgreSQL's WAL logs) to detect changes.
  - Whenever an `INSERT`, `UPDATE`, or `DELETE` operation occurs in the database, a corresponding log entry is created.
  - CDC tools continuously monitor these log files for changes.
- **Mechanism:**
  1.  The service begins a transaction and performs an **insert (or update, delete) into its main DB**.
  2.  It **commits the transaction**.
  3.  Upon commitment, a **transaction log entry is created** in the database's internal log file.
  4.  A **CDC tool (e.g., Debezium or a built-in DB feature like CockroachDB's CDC)** is configured to read from these logs.
  5.  The CDC tool detects the change and **publishes an event to a message broker**.
  - The CDC tool can be configured to filter for specific operations (e.g., only `INSERT` events on a particular table).

#### Notes:

- **Challenges of Transaction Log Tailing Pattern:**
  1.  **Duplicate Challenges:**
      - **Problem:** CDC tools might send the same event twice.
      - **Solution:** Similar to other patterns, **consumer-side idempotency handling is required**.
  2.  **Ordering Issue:**
      - **Problem:** If there are **multiple instances of CDC tools** reading transaction logs, they act as multiple producers. These producers might put events into the same or different Kafka partitions. As Kafka doesn't guarantee order with multiple producers or multiple partitions, ordering issues will occur.
      - **Solution:** **Kafka Streams** or similar approaches are needed to maintain order at the consumer side.
  3.  **High Latency:**
      - **Problem:** The latency of this pattern depends on **how fast the database writes its transaction logs**. Some databases might batch log writes (e.g., write logs only after 100 updates), which can introduce delays.
      - This means there could be a delay between committing the transaction and the event being published via the CDC tool.

#### Notes:

- **Challenges of Transaction Log Tailing Pattern (continued):** 4. **Unnecessary Events Published:**
  _ **Problem:** Database log files often contain **all types of changes** (insert, update, delete). If not properly configured, the CDC tool might publish events for operations (e.g., updates) that the service is not interested in (e.g., only interested in inserts).
  _ **Solution:** Requires **proper filtering logic within the CDC tool** to ensure only relevant events are published.
- **General Interview Discussion Strategy:**
  - It's important to explain how interviewers link the Dual Write Problem to the Saga pattern.
  - For **any solution/pattern provided**, interviewers will **always jump into its challenges**.
  - It's crucial to be able to **discuss and explain how to overcome these challenges**.

Here are the detailed notes from the provided sources, organised by section for an interview, with key concepts bolded for clarity:

### Notes from Source

- **IP Address**:

  - A **unique numerical label** assigned to each device connected to the internet.
  - Acts as an **address** for other devices to locate them over the internet.
  - Examples include **IPv4 and IPv6**.
  - **Difficult for humans to remember** (e.g., 172.32.4.8).

- **Domain Name**:

  - A **human-readable and friendly address** used to identify a device on the internet.
  - **Easier to remember** than IP addresses (e.g., google.com, amazon.com).

- **DNS (Domain Name System)**:

  - Functions as a **mediator**.
  - **Translates domain names into IP addresses**.
  - This translation is crucial because devices on the internet **only understand IP addresses**, not domain names like amazon.com or google.com.

- **DNS Hierarchy**:

  - Domain names have an **implicit dot (.) at the end** (e.g., www.conceptandcoding.com.).
  - The hierarchy, from top to bottom, is:
    - **Dot (.)**: Represents the **Root**.
    - **.com**: Represents the **Top-Level Domain (TLD)**.
    - **conceptandcoding**: Represents the **Second-Level Domain (SLD)**.
    - **www**: Represents the **Subdomain**.

- **Domain Name vs. Fully Qualified Domain Name (FQDN)**:

  - **Domain Name**: Generally refers to the Second-Level Domain combined with the Top-Level Domain (e.g., conceptandcoding.com).
  - **Fully Qualified Domain Name (FQDN)**: Refers to the **complete address from subdomain to root** (e.g., www.conceptandcoding.com.).

- **DNS Resolution Approaches**:
  - There are two main approaches for DNS resolution: **Recursive and Iterative**.

### Notes from Source

- **DNS Client / Stub Resolver**:

  - An **in-built component at the OS level** of every system.
  - Its **first action** when a domain name is entered is to **check its local cache**.
  - Users can view their local DNS cache using the command `ipconfig /displaydns`.

- **DNS Record Structure**:
  - Each piece of DNS information is called a **DNS record**.
  - Main information in a DNS record includes:
    - **Record Name**: The domain name or subdomain name.
    - **CName Record (Canonical Name)**:
      - Used for **creating aliases**.
      - **Maps one domain name to another**.
      - For example, www.google.com and blog.google.com can be aliased to google.com, meaning all traffic goes to the same destination.
      - **Primarily used at the subdomain level** (e.g., aliasing www.yourdomain.com to yourdomain.com), not for mapping a domain to an entirely different domain (e.g., www.google.com to amazon.com is incorrect use).

### Notes from Source

- **A Record (Address Record)**:

  - An **Address record** (A stands for Address).
  - **Maps a record name to an IP address**.
  - **This is where the actual IP address is held** for a given domain or subdomain.

- **Example DNS Record Illustration (A Record)**:

  - **Record Name**: `@` symbol is internally considered as the domain name (e.g., conceptandcoding.com).
  - **Type**: `1` indicates it's an **A record**, meaning an IP address is expected.
  - **A Host**: Contains the **actual IP address** (e.g., 172.32.4.8).

- **Example DNS Record Illustration (CNAME Record)**:
  - **Record Name**: `www` (representing a subdomain like www.conceptandcoding.com).
  - **Type**: `5` indicates it's a **CName record**, meaning it's an alias.
  - **CName Record Field**: Contains the **target record name** to which it's aliased (e.g., conceptandcoding.com.).
  - **Resolution Process for CNAME**: When a query comes for a CNAME-aliased name (e.g., www.conceptandcoding.com), the DNS system is told it's an alias pointing to another record (conceptandcoding.com). A **new query must then be made for the target record** (conceptandcoding.com) to find its actual IP address (its A record).

### Notes from Source

- **Chained CNAMEs**:

  - It is possible to have **multiple CNAMEs pointing to each other**, eventually leading to the actual A record.

- **`ipconfig /displaydns` Output Interpretation**:

  - Shows entries with a **Record Name**, **Record Type** (e.g., `5` for CNAME, `A` for A record), and the corresponding **Address Host** (for A records) or **CName record** target.

- **Practical Example (conceptandcoding.com DNS records)**:
  - **A Record for `conceptandcoding.com` (represented by `@`)**:
    - **Type**: `A` (Address record).
    - **Value**: Points to the IP address where the website is currently hosted (e.g., via a website builder).
    - The owner can **change this IP address** to their own server's IP in the future.
  - **CNAME Record for `www` (representing www.conceptandcoding.com)**:
    - **Type**: `CName`.
    - **Value**: Points to `conceptandcoding.com.` (the root domain).
    - This means that typing `www.conceptandcoding.com` will open the **same page** as typing `conceptandcoding.com`.
    - CNAMEs are effective for **subdomains** like `www`, `blog`, or `mail` under a main domain (e.g., `www.conceptandcoding.com`, `blog.conceptandcoding.com`, `mail.conceptandcoding.com`).

### Notes from Source

- **Recursive DNS Resolution Approach (Detailed Steps)**:
  1.  **User Initiates Query**: A user types a domain name (e.g., www.conceptandcoding.com) in their browser.
  2.  **DNS Client (Stub Resolver) Check**: The DNS client on the user's system first **checks its local cache** for the corresponding IP address.
  3.  **Local Cache Miss**: If the record is not found in the local cache, the DNS client sends a query to a **DNS resolver**.
  4.  **Identifying the DNS Resolver**:
      - The DNS resolver's IP address is typically **provided by the Internet Service Provider (ISP)** through network settings.
      - Users can also **configure a custom DNS resolver**, such as Google's Public DNS (8.8.8.8).
  5.  **DNS Resolver's Cache Check**: The DNS resolver, upon receiving the query, **checks its own cache**.
  6.  **Resolver Cache Miss**: If the record is not found in the DNS resolver's cache, it initiates a series of queries.
  7.  **Query to Root Servers**: The DNS resolver's first query is directed to the **Root DNS servers**.

### Notes from Source

- **Root DNS Servers**:

  - There are **13 root servers globally**, identified by letters A to M.
  - **Each root server is maintained by a different organisation** (e.g., 'A' by Verisign, 'E' by NASA, 'G' by the US Department).
  - DNS resolvers know the IP addresses of these root servers.
  - The DNS resolver typically **selects the root server nearest to the user** for optimal performance.
  - Root servers also maintain their own caches.
  - **Root Server Response (on Cache Miss)**: If a root server doesn't have the requested IP, it **provides the IP address of the relevant Top-Level Domain (TLD) server**. For `conceptandcoding.com`, it would direct the resolver to the `.com` TLD server.
  - There are **over a thousand TLDs** (e.g., .com, .org, .net, .edu, .io), and the number is constantly changing. Root domains maintain information for all these TLDs.

- **Query to TLD Servers**:
  - After receiving the TLD server's IP from the root, the DNS resolver sends the query to the **TLD server** (e.g., the `.com` TLD server).

### Notes from Source

- **TLD Server Actions**:
  - Like other DNS servers, TLD servers also **maintain their own caches**.
  - **TLD Server Response (on Cache Miss)**: If the TLD server doesn't have the data in its cache, it identifies the **authoritative name servers** responsible for the requested domain.
  - **Registrar's Role in Authoritative Servers**:
    - When a domain (e.g., conceptandcoding.com) is purchased from a **registrar** (e.g., GoDaddy), the registrar acts as the entity registering the domain.
    - The registrar **communicates with the respective TLD registry** (e.g., Verisign for the `.com` TLD).
    - The registrar informs the TLD registry about the **authoritative servers** that will resolve queries for that domain.
    - The TLD registry maintains a record linking domains to their specific authoritative servers.

### Notes from Source

- **TLD's Response to Resolver**:

  - The TLD (e.g., `.com`) sends the **IP addresses of the authoritative name servers** (e.g., GoDaddy's ns3.domaincontrol.com, ns4.domaincontrol.com) to the DNS resolver.
  - This response may also include a **Start of Authority (SOA) record**, which provides additional information, such as designating a primary authoritative server to query first.

- **DNS Resolver's Final Query**:

  - The DNS resolver then makes the **final call to one of the authoritative servers** it received (e.g., ns03.domaincontrol.com).

- **Authoritative Server's Response**:

  - The authoritative server, which holds the actual DNS records for the domain, **returns the IP address** to the DNS resolver.

- **DNS Resolver's Final Response to Client**:

  - The DNS resolver sends the discovered IP address back to the client.

- **Why it's "Recursive" for the Client**:
  - From the **client's perspective**, the process appears as a single request (to the DNS resolver) and a single answer.
  - The **DNS resolver performs all the "recursive" work** of querying the root, TLD, and authoritative servers on behalf of the client.

### Notes from Source

- **The Problem DNS Zones Solve (Managing Subdomains)**:
  - A single authoritative server might have to **maintain DNS records for an unlimited number of subdomains** (e.g., mail.conceptandcoding.com, blog.conceptandcoding.com, admin.conceptandcoding.com, systemdesign.resource.conceptandcoding.com, etc.).
  - **Server Overload Risk**: If one subdomain (e.g., `mail.conceptandcoding.com`) experiences very **high traffic**, the single authoritative server responsible for all subdomains under `conceptandcoding.com` can become **overloaded**, even if other subdomains have low traffic.

### Notes from Source

- **DNS Zones (The Solution)**:
  - **Offloading Traffic**: To prevent overload, a primary authoritative server can **offload traffic for specific subdomains** to other, dedicated authoritative servers.
  - **Example**: The main authoritative server for `conceptandcoding.com` can be configured to tell resolvers that for `mail.conceptandcoding.com`, they should query a different, specific authoritative server (e.g., `NS05 server`).
  - **Load Distribution**: This means **each authoritative server takes care of a specific "zone"** of records.
  - **Analogy**: This concept is similar to how TLD servers distribute load (e.g., `.com` TLD servers handle `.com` domains, `.in` TLD servers handle `.in` domains).
  - **Benefits**:
    - Distributes the load, preventing a single server from being overwhelmed by high-traffic subdomains.
    - Allows for creating multiple authoritative domain servers to manage subdomains efficiently.
    - The primary authoritative server still holds the records, but for specific high-traffic subdomains, it can forward requests to the responsible zone's server.

### Notes from Source

- **Iterative DNS Resolution Approach**:

  - In the **iterative approach**, the **DNS client is responsible for making the recursive calls** to resolve the address, unlike the recursive approach where the DNS resolver handles these on behalf of the client.

- **Iterative Steps**:

  1.  **DNS Client Check**: The client first **checks its local cache**.
  2.  **Local Cache Miss**: If not found, the client sends a query to the **DNS resolver**.
  3.  **Resolver's Role (Iterative)**: If the DNS resolver does not have the IP in its cache, it **passes the IP address of the root domain to the client**.
  4.  **Client's Iteration (Self-Managed Queries)**:
      - The DNS client then **directly connects to a root server** using the provided IP.
      - The root server responds by sending the **IP addresses of the relevant TLD servers** back to the client.
      - The client then **connects to one of the TLD servers**.
      - If the TLD server's cache doesn't have the data, it sends the **IP addresses of the authoritative servers** to the client.
      - The DNS client finally **invokes one of the authoritative servers**.
      - The authoritative server returns the **IP address** directly to the client.

- **Key Difference (Recursive vs. Iterative Summary)**:
  - **Recursive**: The **DNS resolver** takes the responsibility of making all subsequent queries (to root, TLD, authoritative servers) on the client's behalf.
  - **Iterative**: The **DNS client itself** is responsible for making the series of calls to resolve the address, iterating through the root, TLD, and authoritative servers based on referrals.

Here are the notes from the provided sources, organised by transcript section, explaining the concepts for an interview context:

**Source Notes:**

- **Interviewer's Tricky Question:** The question, "How to divide a monolithic system into microservices and how many?" is often used to put an interviewee in a tricky situation, as interviewers might be looking for a specific number.
- **No Fixed Number:** There is **no specific number** of microservices (e.g., 10, 5, 3) to divide a monolithic system into, and there is no fixed method to determine this exact count.
- **Core Expectation for Microservices:** Instead of a number, focus on _why_ microservices are desired and what expectations they should fulfil. These expectations are crucial for defining what constitutes a microservice:
  - **Loosely Coupled:** Microservices should be independent of each other. If one microservice is updated, it should not require updating others.
  - **Independent Code, Test, and Deploy:** Different engineering teams should be able to independently code, test, and deploy their respective microservices. Their deployment and testing processes should not be dependent on other services.
  - **Less Communication Overhead:** There should be minimal communication between microservices for each operation. High communication overhead leads to increased latency, complexity, and breaks loose coupling.

**Source Notes:**

- **Core Expectation for Microservices (Continued):**
  - **Scale Independently:** Microservices should be able to scale based on their individual traffic needs. If one microservice experiences high traffic, it should scale without forcing other, less-utilised microservices to scale unnecessarily. Tight dependency in scaling suggests underlying coupling.
- **Recommended Approach for Interview - Domain-Driven Design (DDD):**
  - To answer "how many microservices" and "how to determine them," the **Domain-Driven Design (DDD) approach** is highly suitable.
  - While DDD is not a foolproof or 100% effective solution, and other engineers might use different methods, it provides a structured way to determine the number of microservices.
  - **Alternative Approaches (Mention if comfortable, but DDD is preferred by the source):**
    - **DB per service or shared service:** Basing division on database structure.
    - **Configuration-wise:** Separating configuration into its own service.
    - **Read/Write (CQRS - Command Query Responsibility Segregation):** Creating different services for read operations (queries) and write operations (commands).
    - **Technology-wise:** Dividing based on technology stacks, e.g., separate services for Front-end (UI), Back-end (Java), and Data Access Layer (MySQL).

**Source Notes:**

- **DDD Approach - Step 1: Understand Your Domain:**
  - Thoroughly understand the domain of the application, including user requirements.
  - **Example:** For a chat application, the domain is the chat functionality itself.
  - **Action:** Sit with **domain experts** and users to clarify the core problem statement you aim to solve.
- **DDD Approach - Step 2: Come Up With Subdomains using Event Storming:**
  - Each identified **subdomain has the potential to become one microservice**.
  - To identify these subdomains, use the **Event Storming** approach.
  - **Event Storming Purpose:** It helps in identifying the necessary subdomains.
  - **Event Storming Participants:** All relevant experts should participate: domain experts, decision-makers, developers, and testers.
  - **Event Storming - Phase 1: Identify All Events:**
    - All team members individually brainstorm and list **all possible events** that can occur within the domain.
    - **Example (Chat Application Events):** User registered, user logged in, message sent, message delivered, message deleted.

**Source Notes:**

- **Event Storming - Phase 2: Sequence Events and Find Missing Ones:**
  - After identifying initial events, the team sequences them to create a flow and identify any missing events in the process.
  - **Example (Sequencing Chat Events):**
    - User registered -> User logged in.
    - After User logged in, two parallel paths are possible: User log out OR Message sent.
    - After Message sent, Message delivered and Message received can occur.
    - Finally, Message deleted.
  - This collaborative process with domain experts helps ensure all relevant events are captured and logically sequenced.

**Source Notes:**

- **DDD Approach - Step 3: Identify Bounded Contexts:**
  - This is a crucial and sometimes complex step.
  - **Concept of Bounded Context:** A bounded context defines a boundary where a specific object or term has a particular, consistent meaning. The same object can have different meanings or values in different contexts.
  - **Analogy (Sandwich):**
    - A sandwich in a restaurant context has value, and one would pay for it.
    - The _same sandwich_ in a garbage context has zero value, and no one would pay for or eat it.
    - This illustrates that the **same object in different contexts represents different boundaries** and should not be dependent on each other.
  - **Application to Microservices:** If objects (even with the same name, e.g., 'User') have different meanings or purposes in different parts of your system, they should reside in separate bounded contexts, which will eventually become separate microservices. Merging them would lead to a "kind of a monolithic" system.
  - **Process:** Group logically related events (identified in Event Storming) into one bounded context.
  - **Example (Chat Application - User Management Bounded Context):**
    - Events: User register, user login, user log out.
    - **Working Object:** `User`.
    - **Context of `User` here:** This `User` object is associated with authentication, authorisation, and permissions.
    - **Bounded Context Name:** User Management.

**Source Notes:**

- **DDD Approach - Step 3: Identify Bounded Contexts (Continued):**
  - **Example (Chat Application - Message Bounded Context):**
    - Events: Message sent, message delivered, message deleted.
    - **Working Object:** `Message`.
    - **Context of `Message` here:** This `Message` object includes attributes like who sent it, its content, and its status (pending, delivered, deleted).
    - **Bounded Context Name:** Message.
  - **Example (Chat Application - Notification Bounded Context):**
    - Event: User notified (e.g., a pop-up for a new message).
    - **Working Object:** `User`.
    - **Context Check:** Here, the `User` object primarily represents a User ID and notification status (e.g., not sent, sent, seen). It does not carry the same authentication/authorisation properties as the `User` in the User Management context.
    - **Decision:** Because the context and meaning of the `User` object are different (even though it's called 'User'), the **`User notified` event belongs in a separate Notification bounded context**.
  - **Key Rule:** If the same object (e.g., `User`) is present in different contexts but has different meanings or properties, they should be in separate bounded contexts to avoid tight coupling. The **domain expert** is key in determining if contexts are the same or different.

**Source Notes:**

- **DDD Approach - Step 4: Create Microservices from Bounded Contexts:**
  - Once bounded contexts are identified, **each bounded context can be considered as one microservice**.
  - **Example (from the chat application):**
    - User Management bounded context leads to a **User Management Microservice**.
    - Message bounded context leads to a **Message Microservice**.
    - Notification bounded context leads to a **Notification Microservice**.
  - If multiple events within a single bounded context operate on the same core object and share the same context, they should form a single microservice, not multiple ones.
  - **Inter-Microservice Communication:** It is acceptable for microservices to have some minimal interaction (e.g., a Message microservice needing a User ID from the User Management microservice).
  - **Minimal Duplicacy:** Very minimal data duplicacy (e.g., a User ID being present in both User and Message services) is permissible, but overall dependency must remain low.
  - **Verification:** Each derived microservice **must fulfil the initial expectations** of loose coupling, independent scaling, and less communication overhead (not zero communication overhead).

**Source Notes:**

- **Avoiding "Distributed Monolithic":**
  - A significant risk when dividing systems is creating a **distributed monolithic**.
  - **Definition:** This occurs when a system is divided into multiple services, but they fail to achieve the benefits of microservices, specifically the four core expectations (loose coupling, independent scaling, less communication overhead).
  - **Amazon Prime Example (Audio and Video services):**
    - Amazon Prime initially separated its audio and video functionalities into two microservices.
    - However, due to **excessive tight coupling and overhead** between these two services, it became a prime example of a distributed monolithic.
    - **Resolution:** Amazon chose to **merge these two tightly coupled microservices back into a single service** that handled both audio and video.
    - **Result:** This merger led to a **90% efficiency improvement**.
    - **Key takeaway:** While Amazon Prime still uses microservices, this case highlights that **unnecessary or ill-conceived division can be detrimental**, and sometimes merging services is more effective than keeping them separate if they are too tightly coupled.
- **Final Conclusion on "How Many Microservices":**
  - There is **no "Silver Bullet" or "bulletproof" answer** to how many microservices are needed or how to perfectly group them.
  - The **DDD approach provides valuable guidelines** to help arrive at a suitable number of microservices.
  - The most critical aspect is to ensure that **each resulting microservice meets the core principles** (loose coupling, independent scaling, less communication overhead).
  - The sources also mention that DDD has a "tactical design part" for a more in-depth understanding, but this is beyond the scope of the current discussion.

Certainly! Here are comprehensive notes from the provided YouTube transcript, structured line-by-line into different blocks to explain each concept, ideal for an interview setting. I've bolded key terms and used bullet points for clarity, and included source citations for all information.

---

### Understanding JSON Web Tokens (JWT)

#### 1. Introduction to JWT

- JWT, or **JSON Web Token**, provides a secure method for transmitting information between different parties as a JSON object.
- It's crucial to understand that JWT is **highly linked with OAuth and cryptography**, which are foundational concepts.
- **JWT uses cryptographic keys** for its operations, and **OAuth often utilises JWT**.

#### 2. Core Definition and Purpose of JWT

- In its simplest form, JWT offers a **secure way of transmitting information** between parties.
- The information transmitted can be **verified because it is digitally signed**. This digital signing uses algorithms like RSA or HMAC.
- While initially developed solely for secure information transmission, JWT is now widely used in several key areas:
  - **Authentication**: Confirming a user's identity (e.g., verifying "I am Shrayansh").
  - **Authorization**: Checking if a user has the necessary permissions to access certain details or perform specific actions.
  - **Single Sign-On (SSO)**: Allowing a user to log into multiple applications after signing in once with a single set of credentials.

#### 3. JWT Authentication Flow

The typical flow for JWT in authentication involves three main entities: a Client, an Authentication Server, and a Resource Server (your application).

1.  **Client Provides Credentials**: The client (e.g., a web browser or mobile app) first provides its username and password to an **Authentication Server**. This server could be a third-party service or your own application's authentication module.
2.  **Token Generation**: The Authentication Server **generates a JWT** upon successful authentication and returns it to the client.
3.  **Accessing Resources**: The client then holds this JWT. When it needs to access a protected resource in your application (the Resource Server), it sends the JWT.
4.  **Passing JWT in Header**: The JWT is typically passed in the **`Authorization` header** of the HTTP request, using the `Bearer` scheme (e.g., `Authorization: Bearer <your-jwt>`). This is an industry standard for passing tokens.
    - **Distinction from `Basic` authentication**: `Basic` authentication passes username and password (Base64 encoded) in the header, while `Bearer` indicates a token.
5.  **Token Validation**: The Resource Server receives the JWT from the client and **internally calls the Authentication Server** (or its verification API) to validate the token.
6.  **Granting Access**: The Authentication Server validates the JWT (checking its signature, expiry, etc.) and confirms its validity to the Resource Server.
7.  **Resource Delivery**: If the token is valid, the Resource Server grants permission and returns the requested data to the client.

#### 4. JWT vs. Session ID (JSessionID)

Before JWT, **Session IDs (like JSessionID)** were a popular mechanism for managing user sessions. Understanding their differences highlights JWT's advantages.

| Feature                 | Session ID (JSessionID)                                                                                                                                                          | JSON Web Token (JWT)                                                                                                                                           |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **State Management**    | **Stateful**: Requires the server to maintain session state. Upon login, a session ID is generated and **saved in a database (DB)** along with user information (expiry, roles). | **Stateless**: The token itself contains all necessary information (user info, expiry, roles). **No server-side database lookup is required** for validation.  |
| **Data Storage**        | All session details (expiry, roles, user info) are stored in the **server-side DB**.                                                                                             | All relevant information is **contained within the token's payload**.                                                                                          |
| **Validation**          | **Every request requires a DB lookup** using the Session ID to fetch details and perform validations (e.g., expiry, roles).                                                      | Validation happens by cryptographically verifying the token's signature and checking claims within the token itself. No DB lookup needed for basic validation. |
| **Distributed Systems** | **Problematic in distributed systems**: Requires complex synchronisation of session data across multiple DB clusters or servers.                                                 | **Easier in distributed systems**: Since it's stateless, any server can validate the token without needing to synchronise session data with other servers.     |
| **Performance**         | **Adds latency**: Each request incurs an overhead of querying the DB for validation.                                                                                             | **Lower latency**: No DB query for validation, making it faster.                                                                                               |

#### 5. JWT Structure

A JWT is composed of **three parts**, separated by dots (`.`): **Header**, **Payload**, and **Signature**.

- **JWT vs. JWS**: When people talk about JWT, they are almost always referring to **JWS (JSON Web Signature)**, because JWTs are universally used with a signature for security. JWT without a signature (where algorithm is 'none') is considered unsecured.

##### 5.1. Header

- The header contains **metadata about the token** itself.
- Key fields in the header include:
  - **`typ` (Type)**: Always `JWT`.
  - **`alg` (Algorithm)**: The signing algorithm used for the signature (e.g., `RS256` for RSA, `HS256` for HMAC). These are cryptographic algorithms.
  - **`kid` (Key ID)**: An optional field that identifies the specific key used for signing, allowing the verifier to select the correct public key from a list.
  - **`jwk` (JSON Web Key)**: An optional field where a **public key can be explicitly shared** within the header. **However, using this for verification is a security vulnerability (JWK exploit)**.

##### 5.2. Payload (Claims)

- The payload carries the **actual information or "claims"** about the user or session. It's essentially a JSON object containing key-value pairs.
- Claims are divided into three types:
  - **Registered Claims**: These are **predefined and reserved** by JWT specifications and have specific meanings. Examples include:
    - `iss` (Issuer): The entity that issued the JWT.
    - `sub` (Subject): Identifies the user or principal of the token.
    - `aud` (Audience): The recipient(s) for which the token is intended.
    - `exp` (Expiration Time): The time after which the token is no longer valid.
    - `nbf` (Not Before Time): The time before which the token should not be accepted.
    - `iat` (Issued At): The time at which the token was issued.
    - `jti` (JWT ID): A unique identifier for the token, useful for invalidation.
  - **Public Claims**: These are **custom claims** (not registered) that are intended to be **understood and shared by multiple parties**. Examples: `email`, `country`, `city`, `first_name`, `last_name`.
    - **Important Security Note**: **Never include highly confidential information** like passwords in the payload, as it is only encoded, not encrypted.
  - **Private Claims**: These are also **custom claims**, but their meaning is **only understood by the issuer (authentication server)** and specific consuming parties, not necessarily by all parties that receive the token. They are for internal use and not standardised.

##### 5.3. Signature

- The signature is **crucial for verifying the integrity and authenticity** of the token.
- **Generation Process**:
  1.  The JWT Header is **Base64Url encoded**.
  2.  The JWT Payload is **Base64Url encoded**.
  3.  These two encoded strings are **concatenated with a dot (`.`)** in between (e.g., `EncodedHeader.EncodedPayload`). This combined string is referred to as the "message".
  4.  This "message" string is then digitally signed using the algorithm specified in the header (`alg`) and a **secret key** (for HMAC) or a **private key** (for RSA).
      - **HMAC (Symmetric)**: The same secret key is used for both signing and verifying.
      - **RSA (Asymmetric)**: The token is signed with a **private key**, and verified using the corresponding **public key**.
  5.  The resulting digital signature is then **Base64Url encoded**.
  6.  Finally, this encoded signature is **concatenated with the encoded header and payload** using another dot, forming the complete JWT: `EncodedHeader.EncodedPayload.EncodedSignature`.

#### 6. Advantages of JWT

- **Compact**: JWTs are small in size due to encoding, making them suitable for transmission in HTTP headers and ensuring fast transmission.
- **Stateless**: All necessary information is self-contained within the token, eliminating the need for server-side session storage or database lookups for validation.
- **Self-Contained**: The token itself holds all relevant user information, expiry details, and other claims, allowing the receiving application to use this data without needing to query a database.
- **Digitally Signed**: The signature ensures that the token has not been tampered with and that it was issued by a legitimate source. This means the receiver can verify the integrity of the message.
- **Built-in Expiry Time**: The `exp` claim allows for automatic token invalidation after a set period, reducing the need for explicit server-side expiry management.
- **Custom Claims**: Additional data, such as user roles, can be easily embedded within the token's payload using public or private claims.

#### 7. JWT in Single Sign-On (SSO)

- JWT is commonly used to implement SSO.
- **Flow**:
  1.  A user logs in once to an Authentication Server and receives a JWT.
  2.  When the user accesses `App1`, `App2`, or `App3` (within the same organisation), the same JWT is passed to these applications.
  3.  Each application verifies the JWT (by checking its signature with the Authentication Server).
  4.  Once verified, the application can use the information in the token's payload (e.g., username, email) to sign the user in directly, without requiring them to re-enter credentials.

#### 8. Challenges and Security Concerns with JWT

While beneficial, JWTs are not a "silver bullet" and present several challenges, especially due to their stateless nature and encoding.

##### 8.1. Token Invalidation (Biggest Problem)

- **Problem**: Since JWTs are stateless, once issued, the Authentication Server (and resource servers) have no direct control over them until they expire. This makes it difficult to **immediately invalidate a token** for a compromised or revoked user before its `exp` (expiration time).
- **Scenarios**: If a user is identified as fraudulent or logs out, their valid token might still be used until its expiry.
- **Solutions (with trade-offs)**:
  - **Blacklisting/Revocation List**:
    - Maintain a server-side list (in DB or cache) of `jti` (unique JWT IDs) for blacklisted tokens.
    - Every time a token is received, the server checks this blacklist. If the token's `jti` is found, access is denied.
    - **Drawback**: This reintroduces a server-side lookup (DB or cache hit), negating one of JWT's core advantages (statelessness and no DB lookup).
  - **Change Secret Key**:
    - Changing the secret key (for HMAC) or private key (for RSA) used for signing will invalidate all previously issued tokens.
    - **Drawback**: This will invalidate tokens for _all_ users, including genuine ones, forcing them to log in again. This is generally not feasible for frequent invalidations.
  - **Very Short-Lived Tokens**:
    - Issue tokens with a very short expiry time (e.g., 5-10 minutes).
    - **Benefit**: This reduces the window of vulnerability if a token is compromised.
    - **Drawback**: Users will need to obtain new tokens frequently, potentially via a refresh token mechanism, which adds complexity. This is a popular approach.
  - **Token Used Only Once**:
    - Combine short-lived tokens with a mechanism to ensure each token can only be used once.
    - **Implementation**: This would likely involve storing the `jti` in a cache after first use to prevent subsequent uses, again introducing a lookup.

##### 8.2. Encoded, Not Encrypted (Less Secure Payload)

- **Problem**: The payload part of a standard JWT is only **Base64Url encoded**, not encrypted. Anyone can easily decode the Base64 string to read the information within the payload.
- **Implication**: Sensitive or confidential information should **never be placed in the JWT payload**.
- **Solution**: Use **JWE (JSON Web Encryption)**. JWE encrypts the payload, making it unreadable without the correct decryption key. The Authentication Server (or server possessing the key) can decrypt the payload for validation.

##### 8.3. Unsecured JWT (Algorithm `none`)

- **Problem**: It is technically possible to issue a JWT with the `alg` (algorithm) header parameter set to `none`, meaning **no signature is present**. This is known as an "unsecured JWT".
- **Risk**: If a server accepts such a token, an attacker can craft a token with arbitrary claims and the server would accept it as valid without any integrity check.
- **Mitigation**: **Any JWT with `alg: none` must be immediately rejected**. JWS (Json Web Signature) explicitly requires an algorithm and signature, which is why "JWT" and "JWS" are often used interchangeably, as signatures are standard practice.

##### 8.4. JWK Exploit (Public Key in Header)

- **Problem**: Some JWT implementations allow the public key (`jwk`) to be **included directly within the header**. An attacker could manipulate the payload, sign it with their own private key, and then include their corresponding public key in the `jwk` header.
- **Vulnerability**: If the resource server blindly uses the public key provided in the `jwk` header to verify the signature, it would incorrectly validate the attacker's malicious token as legitimate.
- **Mitigation**:
  - **Never use the public key provided in the `jwk` header for verification**.
  - Instead, authentication servers should **maintain a pre-known, whitelisted list of public keys**.
  - The `kid` (key ID) in the JWT header should be used to look up the correct public key from this trusted, securely stored list. This ensures that only keys known and trusted by the server are used for verification.
  - **Choose well-known and reputable third-party authentication servers** that implement these security precautions.

#### Conclusion

- There is no "silver bullet" solution for determining the exact number of microservices or for perfectly grouping them, but **Domain-Driven Design (DDD)** offers valuable guidelines. (This point connects to prior conversation history, not from the current source, but is part of a holistic understanding).
- JWT is a highly used and beneficial technology, especially for authentication, but it does have certain gaps and challenges. When used properly, with careful consideration of its limitations and appropriate mitigations, it significantly simplifies authentication.
