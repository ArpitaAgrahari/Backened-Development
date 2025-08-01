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
