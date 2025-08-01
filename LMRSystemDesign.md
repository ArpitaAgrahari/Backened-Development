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
