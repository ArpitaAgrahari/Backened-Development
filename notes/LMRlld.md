### **Lecture 2: Comprehensive Notes on OOPs Concepts and Pillars**

This document details the concepts of Object-Oriented Programming (OOPs), focusing on its foundational aspects, the historical context leading to its development, and two of its four core pillars: Abstraction and Encapsulation.

#### **1. Introduction to Object-Oriented Programming (OOPs)**

- **[Source 1]** This is the second lecture in an LLD (Low-Level Design) series by Coder Army, focusing on Object-Oriented Programming (OOPs) concepts and its four pillars.
- **[Source 1]** Understanding OOPs is crucial as it sets a **strong foundation for comprehending LLD**. If one grasps OOPs, LLD becomes significantly easier.
- **[Source 1] Target Audience:**
  - Individuals with basic knowledge of OOPs or C++ classes will become "experts" after this lecture, with "crystal clear" concepts.
  - Even those who already master OOPs are encouraged to watch (perhaps fast-forwarded), as they are likely to learn something new.
  - For absolute beginners who have never studied OOPs in C++ or don't know what it is, the lecture might be "overwhelming." A more beginner-friendly playlist by Rohit is recommended.
- **[Source 1] Core Idea:** The goal is to dive into the lecture if one has at least a slight idea of what objects and classes are in Object-Oriented Programming.

#### **2. History of Programming: Why OOPs Was Needed**

- **[Source 1]** To understand OOPs, it's essential to first understand _why_ it became necessary—what issues existed in prior programming languages that necessitated the shift to OOPs.

##### **2.1. Machine Language**

- **[Source 1] Definition:** Machine language was the earliest form of programming language, which interacted directly with the CPU using **binary codes (zeros and ones)**.
- **[Source 1] Code Structure:** Programs were written entirely in binary, such as `01010110101` or any random sequence of 0s and 1s. The CPU directly executed this code.
- **[Source 2] Problems/Limitations:**
  - **Highly Prone to Error:** A single change from `0` to `1` (or vice versa) could completely alter the code's meaning.
  - **Tedious and Tiresome (TDS):** Writing code in binary was extremely difficult and time-consuming.
  - **Not Scalable:** It was virtually impossible to imagine building large applications using machine code due to its complexity and error-proneness.

##### **2.2. Assembly Level Language**

- **[Source 2] Advancement:** This was the next level of advancement after machine language.
- **[Source 2] Key Feature:** Introduced the use of **mnemonics**, which are English keywords (e.g., `MOV` for "move").
- **[Source 2] Goal:** The use of English keywords aimed to make programming more accessible to a wider audience.
- **[Source 2] Code Example:** `MOV A 61H` – This instruction signifies moving the value `61H` (hexadecimal) into register `A`.
- **[Source 2] Problems/Limitations:**
  - **Prone to Error:** Still susceptible to errors, as programmers had to manage individual instructions (e.g., missing instructions or mismatching registers).
  - **Low Scalability:** It was **tightly coupled with hardware**. If the hardware changed, the code would often need to be rewritten. This made building large software applications unfeasible.
  - **Tedious:** While using mnemonics was an improvement, it was still somewhat tedious.
  - **Lack of Modern Constructs:** These languages lacked essential features like **loops** and **methods** in the way they exist in modern programming, making complex logic difficult to implement.
- **[Source 2] Current Usage:** These languages are generally not used today for developing enterprise applications.

##### **2.3. Procedural Programming**

- **[Source 2] Historical Context:** This type of language emerged **just before OOPs**.
- **[Source 2, 3] Key Features Introduced:** It introduced almost all modern programming constructs _except_ object-oriented programming paradigms. These include:
  - **Functions**
  - **Loops**
  - **Blocks** (e.g., `if-else` blocks, `switch` statements)
- **[Source 3] Paradigm:** Procedural programming was likened to a **"recipe book"** where code was a **set of sequential instructions** (e.g., "Do this, then do this, then do this").
- **[Source 3] Example Language:** **C language** is a prime example of procedural programming.
- **[Source 3] Problems/Limitations:**
  - While capable of solving small-scale problems, procedural languages were **insufficient for developing enterprise-level applications or solving complex problems**. This fundamental limitation led to the necessity of Object-Oriented Programming.

#### **3. Why Shift to Object-Oriented Programming (OOPs)?**

- **[Source 3]** The shortcomings of procedural programming necessitated the shift to OOPs. OOPs specifically addresses issues like:
  - **Real-World Modeling:** The ability to model real-life problems and scenarios effectively in code.
  - **Data Security:** Providing mechanisms to secure and protect data.
  - **Highly Scalable and Reusable Applications:** Facilitating the creation of large, maintainable, and adaptable software.

#### **4. Understanding Real-World Modeling: A Comparison (Procedural vs. OOPs)**

- **[Source 3] Problem Context:** Solving complex real-world problems, such as building clones of applications like Uber, Ola, Zomato, or Paytm.
- **[Source 4] Real-World Observation:**
  - The real world is composed of **objects** (e.g., speaker, listener, microphone, laptop, camera).
  - These objects **interact with each other** (e.g., speaker interacts with the mic, listener interacts with the laptop/video).
- **[Source 4] Goal for Programming:** The core idea was to bring these real-world objects into programming. Failing to do so would lead to significant complexities in problem-solving.
- **[Source 4] Definition of an Object:** An object is characterized by two main aspects:
  - **Characteristics (Properties/Attributes):** Unique identifiers that help in recognizing or describing the object (e.g., brand, model, color).
  - **Behaviors (Methods/Functions):** Actions or functions that the object can perform (e.g., start, stop, accelerate).

##### **4.1. Example: A Real-Life Car (Object Breakdown)**

- **[Source 4] Car as an Object:** Imagine a real-life car.
- **[Source 4] Characteristics of a Car:**
  - Engine
  - Brand (e.g., Ford)
  - Model (e.g., Mustang)
  - Wheels (implied)
- **[Source 5] Behaviors (Functions) of a Car:**

  - Start
  - Stop
  - Gear Shift
  - Accelerate
  - Brake (Apply brakes)

- **[Source 5] Representing a Car in Programming with OOPs (Concept of Classes):**
  - In OOPs, we introduce the concept of **classes** to represent real-world objects.
  - A **class is a blueprint** for creating objects. For a car, we would create a `class Car`.
  - From this `Car` class, any number of car objects can be created (e.g., `Car* myCar = new Car();`).
  - _Self-correction/Clarification:_ When methods/functions are written with parentheses (e.g., `start()`), it signifies that these are behaviors or "methods" of a real-life object in programming terms.

##### **4.2. Modeling the Car and Owner Scenario in Procedural Programming (The Problem)**

- **[Source 5] Scenario:** A real-life car with characteristics (brand, model, `isEngineOn` - boolean) and behaviors (start, stop, shift gear).
- **[Source 6] Representing the Car:**
  - In procedural programming (without classes), we would declare characteristics as **independent variables**:
    - `string brand;`
    - `string model;`
    - `bool isEngineOn;`
  - Behaviors would be represented as **separate functions**:
    - `start();`
    - `stop();`
    - `shiftGear();`
  - **[Source 6] _Problem Insight:_ This entire collection of variables and functions _together_ represents one car. There's no single cohesive unit for "car."**
- **[Source 6] Introducing an Owner:**
  - In real life, an owner owns and interacts with a car. Both "owner" and "car" are objects.
  - **Representing the Owner:**
    - Owner characteristics: `string ownerName;`
    - Owner behavior: `drive();`
  - **[Source 6, 7] Modeling Interaction (Owner driving the Car):**
    - The `drive()` function would need to perform actions related to the car (e.g., engine on, shift gear, accelerate).
    - **Procedural Difficulty:** Since there's no single "car" object to pass, the `drive()` function would need to accept **individual car characteristics as parameters** (e.g., `void drive(string carBrand, string carModel)`).
    - Inside `drive()`, the car's functions (`start()`, `shiftGear()`, `accelerate()`) would then be called.
    - **[Source 7] _Complexity:_ This becomes highly complicated. The code to represent a simple "owner owns the car" scenario requires defining a separate `drive` method, passing multiple parameters, and calling various global/disparate functions.**
- **[Source 7] Procedural Programming Shortcomings Exposed:**
  - **Low Scalability & Reusability:**
    - To introduce another car, all car variables (`brand2`, `model2`, `isEngineOn2`) would need to be re-declared.
    - To introduce another owner, more name variables (`name1`, `name2`) would be needed. If their driving style differed, separate `drive` methods might be required, leading to code duplication.
  - **Poor Real-World Modeling:** The code does not intuitively represent the real-world interaction of an owner interacting with a car. Instead, it appears as a complex web of methods calling each other.

##### **4.3. Modeling the Car and Owner Scenario in Object-Oriented Programming (The Solution)**

- **[Source 8] The OOPs Approach:**
  - **Car Representation:** A simple `class Car { /* ... */ };` is created. This class encapsulates all the car's real-life characteristics and behaviors within itself. This `Car` class acts as a blueprint.
  - **Owner Representation:** A `class Owner { /* ... */ };` is created.
  - **[Source 8] Modeling Interaction (Owner driving the Car):**
    - The concept "Owner owns the Car" is directly translated by making the `Owner` class **contain an object of the `Car` class** (e.g., `class Owner { Car myCar; /* ... */ };` or `Car* myCar;` if dynamically allocated).
    - Inside the `Owner`'s `drive()` method, there's **no need to pass any parameters** related to the car, because the `Owner` object already "owns" or has access to its `myCar` object.
    - The `drive()` method simply calls the car's methods directly: `car.start()`, `car.shiftGear()`, etc.
- **[Source 8] OOPs Advantages Highlighted:**

  - **Simplicity & Real-World Modeling:** The code directly maps to the real-world concept of an "owner owning a car."
  - **Scalability & Reusability:** Easily create multiple `Car` objects and `Owner` objects, and their interactions remain clear, encapsulated, and reusable without code duplication.
  - **Data Security:** (Mentioned as solved, to be elaborated under Encapsulation).

- **[Source 9] Core Ideology of OOPs:**
  - The fundamental philosophy of OOPs is that **programming should mimic how the real world operates**.
  - Just as real-world objects interact with each other, in OOPs, we declare objects, and these objects interact.
  - **How Objects Interact in OOPs:** One object calls a method of another object, or one object is passed as a parameter to another object. The goal is simply for objects to "try to interact with each other."

#### **5. Pillars of Object-Oriented Programming**

- **[Source 9]** While representing an object in programming (e.g., using a class) is a start, it's not enough. Real-life objects perform actions, and these actions also need to be mapped.
- **[Source 9] The Four Pillars:** (Only Abstraction and Encapsulation are covered in this specific video part).
  1.  **Abstraction**
  2.  **Encapsulation**
  3.  Inheritance (to be covered in Part 2)
  4.  Polymorphism (to be covered in Part 2)

#### **6. Pillar 1: Abstraction**

- **[Source 9] Goal in Abstraction:** The objective remains to model real-life objects.
- **[Source 10] Real-World Example: Driving a Car**
  - **Actions:** Sitting in the car, starting with the key, engine turning on, pressing clutch, changing gears, accelerating, braking, stopping the engine.
  - **Key Question:** When you drive a car, do you need to know _how the engine works internally_? Or _how the gearbox works internally_?
  - **Answer:** No. You don't need to know these intricate details to operate the car.
  - **Interface Concept:** The car provides an **interface** (its external body, steering wheel, pedals, gear stick) through which you interact. You press the accelerator pedal, shift gears using the gear stick, etc., which are all part of this interface.
- **[Source 10] Other Examples:**
  - **Laptop/Mobile:** To watch a video, you don't need to know how the device was built, its internal hardware, or how all its functions operate. The **screen (monitor)** serves as an **interface** for interaction.
  - **Television:** You don't need to know the TV's internal wiring or how it broadcasts channels. You interact with it using a **remote control**, which acts as an **interface**.
- **[Source 11] Data Abstraction Concept:**
  - In real life, objects exist in an **abstracted form**.
  - **Some of their data is hidden**.
  - An object (`Object 2`) interacting with another object (`Object 1`) does **not need to know all the internal data or mechanisms** of `Object 1`.
  - `Object 2` only needs to know the **behaviors (methods)** of `Object 1` that it needs to call (e.g., `B1`, `B2`). It doesn't need to know _how_ `Object 1` performs those behaviors internally.
  - **[Source 11] Definition of Abstraction:** **"Abstraction hides unnecessary details from a client and showcases only what is necessary."**
    - **Client:** The entity (another object or part of the program) that uses or interacts with the object.

##### **6.1. Code Example: Car Abstraction (Implementing the Interface Concept)**

- **[Source 12] Approach:** In C++, abstraction is often achieved using **abstract classes** and **virtual functions**.
- **[Source 12] `class Car` (Abstract Interface):**

  - This class represents the conceptual "Car" and acts as an interface.
  - **Code:**

    ```cpp
    class Car {
    public:
        // Pure virtual functions (interface methods)
        // 'virtual void ... = 0' means these are abstract and must be defined by child classes.
        virtual void startEngine() = 0;
        virtual void shiftGear(int gear) = 0;
        virtual void accelerate() = 0;
        virtual void brake() = 0;
        virtual void stopEngine() = 0;

        // Destructor (important for proper memory management with polymorphism)
        virtual ~Car() {}
    };
    ```

  - **Explanation:**
    - The `virtual` keyword indicates that these methods can be overridden by derived classes.
    - The `= 0` (pure virtual) makes the `Car` class **abstract**, meaning you cannot create direct objects of `Car`. You can only create pointers to it or objects of its concrete child classes.
    - These virtual functions serve as the **interface** for interacting with a car. A user only needs to know these functions (`startEngine`, `shiftGear`, etc.) to operate the car, without needing to know their internal implementation. The responsibility of defining _how_ these functions work falls to the concrete child classes that inherit from `Car`.

- **[Source 13] `class SportsCar` (Concrete Implementation of the Interface):**

  - This class represents a specific type of car (`SportsCar`) that implements the abstract `Car` interface.
  - **Inheritance:** `SportsCar` **inherits** from `Car`.
  - **Code:**

    ```cpp
    class SportsCar : public Car { // Inherits from the Car interface
    private: // Internal state of this specific car (hidden details)
        std::string brand;
        std::string model;
        bool isEngineOn;
        int currentSpeed;
        int currentGear;

    public:
        // Constructor to initialize the car's characteristics
        SportsCar(std::string brand, std::string model) :
            brand(brand), model(model), isEngineOn(false), currentSpeed(0), currentGear(0) {}

        // Implementations of the virtual methods from the Car interface
        void startEngine() override { // 'override' keyword is good practice
            isEngineOn = true;
            std::cout << brand << " " << model << " Engine started with a roar." << std::endl;
        }

        void shiftGear(int gear) override {
            if (!isEngineOn) {
                std::cout << "Engine is off. Cannot shift gear." << std::endl;
                return;
            }
            currentGear = gear;
            std::cout << "Shifted to gear " << currentGear << std::endl;
        }

        void accelerate() override {
            if (!isEngineOn) {
                std::cout << "Engine is off. Cannot accelerate." << std::endl;
                return;
            }
            currentSpeed += 20; // Example: speed increases by 20 km/hr
            std::cout << "Accelerating to " << currentSpeed << " km/hr." << std::endl;
        }

        void brake() override {
            currentSpeed -= 20; // Example: speed decreases by 20 km/hr
            if (currentSpeed < 0) currentSpeed = 0; // Speed cannot go below zero
            std::cout << "Braking. Current speed: " << currentSpeed << " km/hr." << std::endl;
        }

        void stopEngine() override {
            isEngineOn = false;
            currentSpeed = 0;
            currentGear = 0;
            std::cout << "Engine turned off." << std::endl;
        }
    };
    ```

  - **Explanation:**
    - This `SportsCar` class provides the concrete, "under-the-hood" implementation for each of the behaviors declared in the `Car` interface.
    - The private member variables (`brand`, `model`, `isEngineOn`, `currentSpeed`, `currentGear`) represent the internal state of the car, which are the details that are hidden from the client.

- **[Source 13, 14] Client Usage (Main Method):**

  - This demonstrates how a client (user) interacts with the car using abstraction.
  - **Code:**

    ```cpp
    int main() {
        // Create a pointer to the abstract Car class,
        // pointing to an object of the concrete SportsCar class.
        // This is valid in OOPs (Polymorphism) - parent pointer can point to child object.
        Car* myCar = new SportsCar("Ford", "Mustang");

        // Interact with the car using only the public methods defined in the Car interface.
        // The client does not need to know the internal workings of SportsCar.
        myCar->startEngine();
        myCar->shiftGear(1);
        myCar->accelerate();
        myCar->shiftGear(2);
        myCar->accelerate();
        myCar->brake();
        myCar->stopEngine();

        // Clean up dynamically allocated memory
        delete myCar;
        myCar = nullptr; // Good practice to nullify pointer after delete
        return 0;
    }
    ```

  - **Explanation:** The client (represented by `main`) can "drive" the `SportsCar` by calling methods like `startEngine()` or `accelerate()` without needing to know _how_ those methods are implemented internally within the `SportsCar` class. This perfectly demonstrates abstraction: **hiding the "how" and exposing only the "what."**
  - **[Source 14] Example Output:**
    ```
    Ford Mustang Engine started with a roar.
    Shifted to gear 1
    Accelerating to 20 km/hr.
    Shifted to gear 2
    Accelerating to 40 km/hr.
    Braking. Current speed: 20 km/hr.
    Engine turned off.
    ```
    This output shows the external behavior without revealing internal logic.

##### **6.2. Abstraction in High-Level Programming Languages**

- **[Source 15] Universal Example:** High-level programming languages themselves (like C++, Java, Kotlin) are excellent examples of abstraction.
- **[Source 15] How it Works:**
  - When you write code using keywords like `if` for conditions or `for`/`while` for loops, you are using **abstracted commands**. These are English keywords that are easy for humans to understand.
  - Internally, when the compiler processes this code, it converts it into **machine code (binary)** that the CPU can execute.
  - **[Source 15] Key Point:** As a programmer, you don't need to know _how_ the `if` statement gets converted into binary or _how_ the loop is implemented at the machine level. The language abstracts away these complex internal details.
- **[Source 15] Conclusion:** The very creation of these high-level languages is a strong example of data abstraction.

#### **7. Pillar 2: Encapsulation**

- **[Source 15] Common Misconception:** Encapsulation is often confused with Abstraction. The speaker aims to clarify this distinction.

##### **7.1. First Principle of Encapsulation: Bundling Data and Methods**

- **[Source 15, 16] Real-World Car Example:**
  - A real-life car contains all its **characteristics** (data) and **behaviors** (methods) within **one single physical unit** (the car itself). It's a "box" that holds everything.
  - **Analogy: A Medical Capsule:** A capsule contains medicine, providing a protected layer around its contents. Similarly, an object in the real world is "encapsulated," meaning its data and methods are combined within itself.
- **[Source 16] Programming Representation:**
  - Encapsulation in programming means that an object's characteristics (variables/data) and behaviors (methods/functions) should be **bundled together** within a single unit.
  - This is achieved by using a **class** (e.g., `class Car`). The class serves as the "box" that contains both member variables and member methods.
  - A class acts as a **blueprint** for creating objects.
  - This fulfills the first point of encapsulation.

##### **7.2. Second Principle of Encapsulation: Data Security**

- **[Source 16] Crucial Aspect:** Encapsulation also emphasizes **data security**.
- **[Source 16] Key Idea:** Some data or methods within an object must be **highly secure** and **not directly accessible** by external objects.
- **[Source 16, 17] Distinction from Abstraction:**
  - **Abstraction (Data Hiding):** Hides _unnecessary_ details. Even if these details were revealed (e.g., opening a car's hood to see the engine), it wouldn't cause harm. The user _can_ know, but doesn't _need_ to know to operate.
  - **Encapsulation (Data Security):** Protects _sensitive_ data. If this data were directly accessible or exposed, it could **cause a threat** or **hinder security**.
- **[Source 17] Real-World Examples of Data Security in a Car:**
  - **Odometer:** The odometer tracks kilometers driven. You **cannot directly change** the odometer reading (e.g., from 15,000 km to 25,000 km). It's designed to only increase as the car is driven. Attempting to directly manipulate it would compromise its integrity.
  - **Current Speed:** You **cannot directly set** the car's speed (e.g., to 100 km/hr). You must use the accelerator, and the speed gradually increases as a result of that behavior.
- **[Source 17, 18] Programming Representation of Data Security (Access Modifiers):**
  - To implement data security, programming languages use **access modifiers**. In C++, these are:
    - **`public`:** Members declared `public` can be accessed by _any_ external code. (Example: Car's AC temperature setting – can be directly changed by the user without security concerns).
    - **`private`:** Members declared `private` can **only be accessed from within the same class**. They are hidden from direct external access. (Examples: Car's odometer, current speed). This is used for data that needs to be secured.
    - **`protected`:** (Will be discussed with Inheritance) Members accessible within the class and by its derived (child) classes, but not directly from outside.
  - **[Source 18] Purpose:** Access modifiers are used to **establish data security** by controlling what parts of an object are directly accessible from the outside.

##### **7.3. Code Example: Sports Car (Focus on Encapsulation)**

- **[Source 18, 19] Simplified Class for Encapsulation Demo:**

  - For this example, the `SportsCar` class is simplified (no abstract parent class like `Car`) to focus purely on encapsulation.
  - It contains characteristics (`brand`, `model`, `isEngineOn`, `currentSpeed`, `currentGear`) and behaviors (`startEngine`, `shiftGear`, etc.).

- **[Source 19] Demonstrating the Problem (Public Members):**

  - **Initial State:** All members (characteristics and behaviors) are declared `public`.
  - **Code Snippet (problematic):**

    ```cpp
    class SportsCar {
    public: // All members are public initially
        std::string brand;
        std::string model;
        bool isEngineOn;
        int currentSpeed; // This is the problematic one for demonstration
        int currentGear;

        // ... (constructor and public methods like startEngine, accelerate, etc.)
    };

    // In main():
    SportsCar mySportsCar("Ford", "Mustang");
    // ... (call normal car functions)

    // Directly setting the speed, which is undesirable in real-world modeling:
    mySportsCar.currentSpeed = 500; // Direct external modification
    std::cout << "Current speed of my Sports Car is set to " << mySportsCar.currentSpeed << std::endl;
    ```

  - **[Source 20] Result:** The program allows `mySportsCar.currentSpeed` to be directly set to `500`, which is unrealistic for a sports car's behavior and demonstrates a lack of data security. The output would be: `Current speed of my Sports Car is set to 500`.

- **[Source 20] Solution (Using `private` Access Modifier):**

  - To prevent direct external modification of sensitive data like `currentSpeed`, these variables are made `private`.
  - **Code:**

    ```cpp
    class SportsCar {
    private: // These characteristics are now private
        std::string brand;
        std::string model;
        bool isEngineOn;
        int currentSpeed; // Now private
        int currentGear;  // Now private

    public: // Behaviors (methods) should remain public for interaction
        // Constructor
        SportsCar(std::string brand, std::string model) :
            brand(brand), model(model), isEngineOn(false), currentSpeed(0), currentGear(0) {}

        // Public behaviors (startEngine, shiftGear, accelerate, brake, stopEngine)
        void startEngine() { /* ... */ }
        // ... (other method implementations as before)
    };
    ```

  - **[Source 20] Result:** If you now try to directly set `mySportsCar.currentSpeed = 500;` in `main()`, it will result in a **compile-time error**: `"currentSpeed is a private member of SportsCar."` This prevents unauthorized direct access, enforcing data security.

- **[Source 20, 21] Controlled Access: Getters and Setters:**

  - While private members cannot be directly accessed, there's often a need for controlled interaction.
  - **Getters:** Public methods that allow external code to _read_ the value of a private variable.
    - **Example: `getCurrentSpeed()`:**
      ```cpp
      class SportsCar {
          private:
              // ... private members including currentSpeed ...
          public:
              // ... public behaviors ...
              int getCurrentSpeed() { // Getter method (public)
                  return this->currentSpeed; // Accesses private member from within the class
              }
      };
      ```
      - **Usage in `main()`:** `mySportsCar.getCurrentSpeed()` can be called to retrieve the current speed value (e.g., for printing), but not to change it directly.
  - **Setters:** Public methods that allow external code to _modify_ the value of a private variable, but **with control and validation logic**.

    - **Example: `setTire()`:**

      - Suppose `string tire;` is a private member (initialized to "MRF" in constructor).
      - **Code:**

        ```cpp
        class SportsCar {
            private:
                // ... other private members ...
                std::string tire; // Example of a private variable
            public:
                // ... constructor and other methods ...

                std::string getTire() { // Public getter for tire
                    return this->tire;
                }

                void setTire(std::string newTire) { // Public setter for tire
                    // **Crucial for Encapsulation: Add validation logic here!**
                    // For example:
                    // if (isValidTireCompany(newTire)) {
                    //    this->tire = newTire;
                    // } else {
                    //    std::cout << "Invalid tire company!" << std::endl;
                    // }
                    this->tire = newTire; // Direct assignment for simplicity in demo
                }
        };
        ```

      - **[Source 22] Reasoning for Setters:** Even if a setter is provided, it gives the class **control** over how its private data is modified. You can add **validation rules** inside the setter (e.g., check if the `newTire` string represents a valid company or tire type) before allowing the value to be set. This prevents invalid data from being assigned directly. This control is why getters and setters are preferred over making variables public.

##### **7.4. Summary of Encapsulation**

- **[Source 22] Two Core Principles:**

  1.  **Bundling:** All an object's behaviors (methods) and characters (data/variables) are encapsulated (bundled) together within a single unit, which is a **class**. This class serves as a blueprint for objects.
  2.  **Data Security:** Classes provide data security by ensuring that certain sensitive internal members (characteristics or methods) are not directly accessible from outside. This is achieved using **access modifiers** (primarily `private`) and providing controlled access through **public getters and setters** which can incorporate validation.

- **[Source 22] Main Difference: Abstraction vs. Encapsulation:**
  - **Abstraction:** Focuses on **data hiding** – concealing _unnecessary_ details from the client. The hidden details, if revealed, typically don't cause harm.
  - **Encapsulation:** Focuses on **data security** – protecting _sensitive_ data from direct external access because exposing it could lead to security threats or incorrect state.

#### **8. Next Steps**

- **[Source 23]** The next part of the video series will cover the remaining two pillars of OOPs: Inheritance and Polymorphism, completing the core concepts of Object-Oriented Programming.

---

Here are the extremely detailed, comprehensive notes from the video "Inheritance & Polymorphism in OOPs":

---

## Lecture 3: Object-Oriented Programming (OOP) Pillars: Inheritance & Polymorphism

This video continues the discussion on Object-Oriented Programming (OOP) by covering the remaining two pillars: **Inheritance** and **Polymorphism**. It builds upon previous concepts of Abstraction and Encapsulation and uses the same car example for practical understanding.

### 1. Inheritance

Inheritance is a fundamental OOP concept used to model **real-life relationships between objects**, specifically the **Parent-Child relationship**.

#### 1.1 Real-Life Observation and Necessity

- In the real world, objects are often related to each other. For instance, Object B might be a type of Object A, where A is the **Parent** and B is the **Child**.
- Since objects in the real world exhibit this inheritance property, it needs to be represented in programming terms. Inheritance is the mechanism to achieve this.

#### 1.2 Car Example for Inheritance

Let's use the car example to understand the Parent-Child relationship in the real world:

- **Generic Car Object:** A "Car" is a very generic concept; it can be any type of vehicle.
- **Specific Car Objects:** We can have different types of cars, such as a **Manual Car** (with a gear system, running on petrol/diesel) and an **Electric Car** (running on electricity, automatic).
- **Parent-Child Relationship:** Both a Manual Car and an Electric Car are, fundamentally, cars. Therefore, "Car" acts as the **Parent**, and "Manual Car" and "Electric Car" act as **Children**.
- This characteristic of a Parent-Child relationship is observed in real life, so it must be represented programmatically.

#### 1.3 Defining Characteristics and Behaviors in the Car Example

To represent this relationship, we define common and specific features:

- **Common Car Features (Parent - `Car` Class):** These are characteristics and behaviors that _every car_ will possess.
  - **Characteristics (Properties/Data Members):**
    - `brand`
    - `model`
    - `isEngineOn` (boolean: engine on or off)
    - `currentSpeed`
  - **Behaviors (Functions/Methods):**
    - `startEngine()`
    - `stopEngine()`
    - `accelerate()`
    - `brake()`
- **Specific Manual Car Features (Child - `ManualCar` Class):** These features are specific to manual cars and not found in all cars.
  - **Characteristics:**
    - `currentGear` (to keep track of the current gear)
  - **Behaviors:**
    - `shiftGear()` (not necessary for all cars, e.g., electric cars)
- **Specific Electric Car Features (Child - `ElectricCar` Class):** These features are specific to electric cars.
  - **Characteristics:**
    - `batteryPercentage`
  - **Behaviors:**
    - `chargeBattery()` (not applicable to manual cars)

**Key Concept:** The `Car` (parent) object has common characteristics and behaviors. The child objects (`ManualCar` and `ElectricCar`) possess all these common features _in addition to_ their own unique, specific functionalities.

#### 1.4 Representing Inheritance in Object-Oriented Programming (Conceptual Code)

To represent this in OOP:

1.  **Create the Parent Class (`Car`):**
    - Define a class named `Car`.
    - Inside this `Car` class, represent all the common characteristics (`model`, `brand`, etc.) and behaviors (`startEngine`, `stopEngine`, etc.).
    2.  **Create the Child Class (`ManualCar`):**
    - Create a class named `ManualCar`.
    - Establish the inheritance relationship: `ManualCar` **inherits from** `Car`. In C++, this is typically done using the syntax: `class ManualCar : public Car`.
      - The `public` keyword before `Car` is very important (discussed further in access modifiers).
    - Inside the `ManualCar` class, define _only_ those characteristics and behaviors that are **specific to a manual car**, such as `currentGear` and `shiftGear()`.
    - **The Beauty of Inheritance:** Because `ManualCar` inherits from `Car`, it automatically has access to and can call all the methods and behaviors defined in the `Car` class (e.g., `startEngine()`, `accelerate()`) without needing to redefine them. This significantly reduces redundant code.
2.  **Create the Second Child Class (`ElectricCar`):**
    - Similarly, create a class named `ElectricCar`.
    - Establish inheritance: `class ElectricCar : public Car`.
    - Define _only_ the specific features for an electric car, such as `batteryPercentage` and `chargeBattery()`.
    - Like `ManualCar`, `ElectricCar` can also access and utilize all methods from the `Car` class.

**Summary of Inheritance:** Inheritance allows code reusability by enabling child classes to inherit properties and behaviors from parent classes. It is generally considered one of the most common and easiest OOP pillars to understand.

#### 1.5 Access Modifiers in Inheritance (`public`, `private`, `protected`)

Access modifiers determine the visibility and accessibility of class members. We have three types:

- **`public`:** Members declared as `public` can be accessed from anywhere, both inside and outside the class.
- **`private`:** Members declared as `private` can only be accessed by methods or variables within the same class.
- **`protected`:** This modifier is particularly relevant in inheritance.
  - Like `private`, `protected` members **cannot be accessed from outside the class**.
  - However, unlike `private`, `protected` members **can be accessed by methods or variables of child classes** that inherit from the parent class.
  - **Practical Note:** While `protected` is crucial for inheritance, in real-world coding, `private` and `public` are used much more frequently.

#### 1.6 Types of Inheritance Based on Access Specifiers

When a class inherits from another, the access specifier used in the inheritance syntax (`public`, `private`, or `protected`) affects how the parent's members are accessed in the child class and beyond. Let's consider a `Car` class (Parent) and a `ManualCar` class (Child) inheriting from it:

- **Public Inheritance (`class ManualCar : public Car`)**

  - **Public members** of `Car` remain `public` in `ManualCar`.
  - **Protected members** of `Car` remain `protected` in `ManualCar`.
  - **Private members** of `Car` are **not accessible** in `ManualCar` (or anywhere else outside `Car`). This is because `private` members are exclusively for the class they are declared in, regardless of inheritance.

- **Private Inheritance (`class ManualCar : private Car`)**

  - **Public members** of `Car` become **`private`** in `ManualCar`.
  - **Protected members** of `Car` become **`private`** in `ManualCar`.
  - **Private members** of `Car` are **not accessible** in `ManualCar`.
  - **Implication:** If `ManualCar` were further inherited by another class (e.g., `WagonR` inheriting from `ManualCar`), `WagonR` would _not_ be able to access the members that `ManualCar` inherited privately from `Car`, as they are now `private` to `ManualCar`.

- **Protected Inheritance (`class ManualCar : protected Car`)**
  - **Public members** of `Car` become **`protected`** in `ManualCar`.
  - **Protected members** of `Car` remain **`protected`** in `ManualCar`.
  - **Private members** of `Car` are **not accessible** in `ManualCar`.

**Practical Usage:** In most real-world scenarios, especially in system design and Large-Scale Low-Level Design (LLD), **public inheritance is used almost exclusively (99% of the time)**. Using `private` or `protected` inheritance can often restrict access in ways that **break the fundamental principle of inheritance**, which is to allow child classes to fully access and extend parent features. They are rarely used in practice, except for very specific, rare cases.

#### 1.7 Inheritance - Code Example Walkthrough

Let's look at the C++ code for the car example:

- **`Car` Class (Parent)**:

  - ```cpp
    class Car {
    protected: // Data members are protected
        string brand;
        string model;
        bool isEngineOn;
        int currentSpeed;

    public: // Public methods
        Car(string b, string m) : brand(b), model(m), isEngineOn(false), currentSpeed(0) {} // Constructor

        void startEngine() {
            isEngineOn = true;
            cout << "Engine started for " << brand << " " << model << endl;
        }

        void stopEngine() {
            isEngineOn = false;
            cout << "Engine turned off for " << brand << " " << model << endl;
        }

        void accelerate() {
            currentSpeed += 10; // Default acceleration
            cout << "Accelerating. Current speed: " << currentSpeed << " km/h" << endl;
        }

        void brake() {
            currentSpeed -= 10; // Default braking
            if (currentSpeed < 0) currentSpeed = 0;
            cout << "Braking. Current speed: " << currentSpeed << " km/h" << endl;
        }
    };
    ```

  - **Protected Members:** `brand`, `model`, `isEngineOn`, `currentSpeed` are declared `protected`. This means they cannot be directly accessed from outside the `Car` class, but they _can_ be accessed by `ManualCar` and `ElectricCar` classes (children). This is ideal for common attributes that children should be able to manipulate internally.
  - **Public Methods:** `startEngine()`, `stopEngine()`, `accelerate()`, `brake()` are public, representing common behaviors for all cars.

- **`ManualCar` Class (Child)**:

  - ```cpp
    class ManualCar : public Car { // Publicly inherits from Car
    private: // Specific member is private
        int currentGear;

    public:
        ManualCar(string b, string m) : Car(b, m), currentGear(0) {} // Constructor calls parent constructor

        void shiftGear(int gear) {
            currentGear = gear;
            cout << "Shifted to gear " << currentGear << endl;
        }

        // Manual car can still use startEngine(), accelerate(), etc., from Car
    };
    ```

  - **Inheritance:** `ManualCar` inherits `public`ly from `Car`.
  - **Specific Member:** `currentGear` is `private`, as no further classes are expected to inherit from `ManualCar` in this context.
  - **Specific Method:** `shiftGear()` is unique to manual cars.
  - **Benefit Highlight:** `ManualCar` automatically gets `startEngine()`, `stopEngine()`, `accelerate()`, `brake()` from `Car`, avoiding redundant code.

- **`ElectricCar` Class (Child)**:

  - ```cpp
    class ElectricCar : public Car { // Publicly inherits from Car
    private: // Specific member is private
        int batteryLevel;

    public:
        ElectricCar(string b, string m) : Car(b, m), batteryLevel(100) {} // Constructor calls parent constructor

        void chargeBattery() {
            batteryLevel = 100;
            cout << "Battery full charged!" << endl;
        }

        // Electric car can still use startEngine(), accelerate(), etc., from Car
    };
    ```

  - **Inheritance:** `ElectricCar` inherits `public`ly from `Car`.
  - **Specific Member:** `batteryLevel` is `private`.
  - **Specific Method:** `chargeBattery()` is unique to electric cars.

- **`main` Function Demonstration**:

  - ```cpp
    int main() {
        ManualCar wagonR("Suzuki", "WagonR");
        ElectricCar tesla("Tesla", "Model S");

        wagonR.startEngine(); // Common method from Car
        wagonR.shiftGear(1);  // Specific to ManualCar
        wagonR.accelerate();  // Common method from Car
        wagonR.stopEngine();  // Common method from Car

        cout << endl;

        tesla.startEngine(); // Common method from Car
        tesla.chargeBattery(); // Specific to ElectricCar
        tesla.accelerate();   // Common method from Car
        tesla.stopEngine();   // Common method from Car

        // wagonR.chargeBattery(); // ERROR: ManualCar doesn't have this method
        // tesla.shiftGear(1);     // ERROR: ElectricCar doesn't have this method
        return 0;
    }
    ```

  - This demonstrates that common methods like `startEngine()` can be called on both `wagonR` (ManualCar) and `tesla` (ElectricCar) objects because they inherit from `Car`.
  - Specific methods like `shiftGear()` are only available for `ManualCar`, and `chargeBattery()` for `ElectricCar`. Attempting to call a specific method on the wrong type of car will result in an error.
  - The output shows the execution of these methods, confirming the shared and specific functionalities.

---

### 2. Polymorphism

Polymorphism is another critical OOP pillar that describes how objects can exhibit "many forms" or behave differently under different circumstances.

#### 2.1 Real-Life Observations and Definition

- **"Poly" means Many, "Morphism" means Forms.** Thus, polymorphism means "Many Forms".
- It describes two primary scenarios observed in the real world:

  - **Scenario 1: Different Objects, Same Stimulus, Different Reactions**

    - **Example: Animals:** Consider animals like a `Duck`, a `Human`, and a `Tiger`. All are "Animals" (Duck inherits from Animal, Human from Animal, Tiger from Animal).
    - **Same Behavior:** Give them the same command or "stimulus": `run`.
    - **Different Reactions:**
      - A duck runs differently (perhaps a waddle/flap run).
      - A human runs differently (upright, using legs).
      - A tiger runs very differently (on four legs, predatory).
    - **Conclusion:** Different objects (Duck, Human, Tiger) that belong to the same "family" (Animal) can exhibit the _same behavior_ (`run`) but perform it in _different ways_.

  - **Scenario 2: Same Object, Same Stimulus, Different Situations/Parameters, Different Reactions**
    - **Example: Human Running:** Consider a single `Human` object with the `run` behavior.
    - **Same Behavior, Different Situations:**
      - If the human is tired and told to `run`, they might run slowly.
      - If the human is active or in danger (e.g., a tiger chasing them) and told to `run`, they will run very fast.
    - **Conclusion:** The _same object_ (Human) performs the _same behavior_ (`run`) but reacts differently based on a _change in parameters_ or situation (e.g., `is_in_danger` boolean parameter).

#### 2.2 Types of Polymorphism in Programming

Based on these two real-world scenarios, polymorphism in programming is divided into two types:

1.  **Dynamic Polymorphism:** Corresponds to Scenario 1 (different objects, same stimulus, different reactions).
    - In programming terms, this is achieved through **Method Overriding**.
2.  **Static Polymorphism:** Corresponds to Scenario 2 (same object, same stimulus, different situations/parameters, different reactions).
    - In programming terms, this is achieved through **Method Overloading**.

#### 2.3 Dynamic Polymorphism (Method Overriding) - Car Example

Let's re-examine the `Car` example in the context of dynamic polymorphism:

- Recall: `Car` is the parent, and `ManualCar` and `ElectricCar` are children. All have an `accelerate()` method.
- **The Problem:** In the basic inheritance example, `accelerate()` was defined only in the `Car` parent class. This implied that all cars accelerate in the exact same way.
- **Polymorphism's Insight:** This is not true in the real world.
  - A **Manual Car** accelerates using gears, might have a certain pickup, and consumes petrol.
  - An **Electric Car** has no gears, accelerates differently, and its battery percentage will drop.
  - Despite both having the `accelerate` behavior, they perform it uniquely.
- **Solution in Programming (Method Overriding):**
  1.  **Declare `accelerate` as Virtual in `Car`:** In the `Car` class, the `accelerate()` method is declared as a **pure virtual function** (`virtual void accelerate() = 0;`). This means the `Car` class _declares_ the method but does _not define_ its implementation.
  2.  **Abstract Class:** Because `Car` contains a pure virtual function, `Car` automatically becomes an **Abstract Class**. Abstract classes cannot be instantiated directly (you cannot create an object of `Car` itself).
  3.  **Child Class Duty:** It becomes the **duty** of any concrete child class (like `ManualCar` and `ElectricCar`) to _define_ (or **override**) its own version of the `accelerate()` method.
  4.  **Specific Implementations:**
      - `ManualCar` will define its `accelerate()` method to reflect how a manual car accelerates (e.g., higher speed increase per acceleration call).
      - `ElectricCar` will define its `accelerate()` method to reflect how an electric car accelerates (e.g., lower speed increase, battery consumption).
  5.  **Runtime Behavior:** When you have a pointer or reference to a `Car` object (which actually points to a `ManualCar` or `ElectricCar` object) and call `accelerate()`, the correct, specific version of `accelerate()` (from `ManualCar` or `ElectricCar`) will be executed at **runtime**. This is the essence of **Dynamic Polymorphism**.

#### 2.4 Dynamic Polymorphism - Code Example Walkthrough

- **`Car` Class (Parent - Abstract)**:

  - ```cpp
    class Car {
    protected:
        string brand;
        string model;
        bool isEngineOn;
        int currentSpeed;

    public:
        Car(string b, string m) : brand(b), model(m), isEngineOn(false), currentSpeed(0) {}

        void startEngine() { /* ... common implementation ... */ }
        void stopEngine() { /* ... common implementation ... */ }

        // Virtual (Abstract) methods for Dynamic Polymorphism
        virtual void accelerate() = 0; // Pure virtual function
        virtual void brake() = 0;      // Pure virtual function
    };
    ```

  - `accelerate()` and `brake()` are now `virtual` and `= 0`, making them pure virtual functions. This declares `Car` as an abstract class.

- **`ManualCar` Class (Child)**:

  - ```cpp
    class ManualCar : public Car {
    private:
        int currentGear;

    public:
        ManualCar(string b, string m) : Car(b, m), currentGear(0) {}
        void shiftGear(int gear) { /* ... specific implementation ... */ }

        // Overriding accelerate() for ManualCar
        void accelerate() override { // `override` keyword is good practice
            currentSpeed += 20; // Manual cars accelerate faster
            cout << "Manual car accelerating. Current speed: " << currentSpeed << " km/h" << endl;
        }

        // Overriding brake() for ManualCar
        void brake() override {
            currentSpeed -= 20; // Manual cars brake faster
            if (currentSpeed < 0) currentSpeed = 0;
            cout << "Manual car braking. Current speed: " << currentSpeed << " km/h" << endl;
        }
    };
    ```

  - `accelerate()` and `brake()` are `override`n to provide specific implementations for a manual car. Notice the different speed increments/decrements.

- **`ElectricCar` Class (Child)**:

  - ```cpp
    class ElectricCar : public Car {
    private:
        int batteryLevel;

    public:
        ElectricCar(string b, string m) : Car(b, m), batteryLevel(100) {}
        void chargeBattery() { /* ... specific implementation ... */ }

        // Overriding accelerate() for ElectricCar
        void accelerate() override {
            if (batteryLevel > 0) {
                currentSpeed += 15; // Electric cars accelerate differently
                batteryLevel -= 5;  // Battery consumption
                cout << "Electric car accelerating. Current speed: " << currentSpeed << " km/h. Battery: " << batteryLevel << "%" << endl;
            } else {
                cout << "Battery too low to accelerate!" << endl;
            }
        }

        // Overriding brake() for ElectricCar
        void brake() override {
            currentSpeed -= 15; // Electric cars brake differently (e.g., regenerative)
            if (currentSpeed < 0) currentSpeed = 0;
            cout << "Electric car braking. Current speed: " << currentSpeed << " km/h (regenerative)." << endl;
        }
    };
    ```

  - `accelerate()` and `brake()` are `override`n with specific implementations for an electric car, including battery management.

- **`main` Function Demonstration**:

  - ```cpp
    int main() {
        // Using base class pointers for polymorphic behavior
        Car* wagonR_ptr = new ManualCar("Suzuki", "WagonR");
        Car* tesla_ptr = new ElectricCar("Tesla", "Model S");

        wagonR_ptr->startEngine(); // Common method from Car
        wagonR_ptr->accelerate();  // Calls ManualCar's accelerate()
        wagonR_ptr->accelerate();  // Calls ManualCar's accelerate() again
        wagonR_ptr->brake();       // Calls ManualCar's brake()
        wagonR_ptr->stopEngine();  // Common method from Car

        cout << endl;

        tesla_ptr->startEngine();  // Common method from Car
        tesla_ptr->accelerate();   // Calls ElectricCar's accelerate()
        tesla_ptr->accelerate();   // Calls ElectricCar's accelerate() again
        tesla_ptr->brake();        // Calls ElectricCar's brake()
        tesla_ptr->stopEngine();   // Common method from Car

        delete wagonR_ptr;
        delete tesla_ptr;
        return 0;
    }
    ```

  - The output shows `startEngine()` and `stopEngine()` (common methods from `Car`) behaving identically for both cars.
  - However, `accelerate()` and `brake()` produce **different outputs**.
    - `ManualCar` accelerates by 20 km/h, reaching 20 then 40.
    - `ElectricCar` accelerates by 15 km/h, reaching 15 then 30 (also showing battery level).
    - Braking also differs (20 km/h decrease vs. 15 km/h decrease with "regenerative").
  - This clearly demonstrates **Dynamic Polymorphism** where the actual method executed depends on the object's type at runtime.

#### 2.5 Static Polymorphism (Method Overloading) - Car Example

Static polymorphism, or Method Overloading, allows a single class to have multiple methods with the _same name_ but different _parameters_.

- **Recall Human Example (Scenario 2):** A human runs differently based on a parameter (e.g., `is_in_danger`).
- **Car Example (Manual Car):** Consider the `accelerate` function in a `ManualCar`.
  - Acceleration can vary based on how much pressure is applied to the pedal (the "push").
  - We can have an `accelerate()` method that performs a default acceleration (e.g., by 20 km/h).
  - We can also have another `accelerate(int speed)` method that takes a `speed` parameter, allowing the car to accelerate by a custom amount.
- **Definition of Method Overloading:**
  - The **method name remains the same** (`accelerate`).
  - The **return type remains the same** (e.g., `void`).
  - The **difference lies in the parameters (arguments)**:
    - Either the **number of arguments** changes (e.g., one version takes zero arguments, another takes one).
    - Or the **type of arguments** changes (e.g., one takes an `int`, another takes a `double`).
  - This is known as **Method Overloading** or **Static Polymorphism** because the decision of which `accelerate` method to call is made at **compile-time** (statically), based on the arguments provided in the function call.

#### 2.6 Static Polymorphism - Code Example Walkthrough

For simplicity, this example removes inheritance and focuses on a single `ManualCar` class.

- **`ManualCar` Class (Illustrating Overloading)**:

  - ```cpp
    class ManualCar { // Not inheriting from Car in this example
    private: // All members are private as no inheritance here
        string brand;
        string model;
        bool isEngineOn;
        int currentSpeed;
        int currentGear;

    public:
        ManualCar(string b, string m) : brand(b), model(m), isEngineOn(false), currentSpeed(0), currentGear(0) {}

        void startEngine() { /* ... */ }
        void stopEngine() { /* ... */ }
        void brake() { /* ... */ }
        void shiftGear(int gear) { /* ... */ }

        // Method Overloading for accelerate()
        void accelerate() { // Version 1: No parameters
            currentSpeed += 20; // Default acceleration
            cout << "Accelerating (default). Current speed: " << currentSpeed << " km/h" << endl;
        }

        void accelerate(int speed) { // Version 2: With a speed parameter
            currentSpeed += speed; // Accelerate by given speed
            cout << "Accelerating by " << speed << ". Current speed: " << currentSpeed << " km/h" << endl;
        }
    };
    ```

  - **Overloaded `accelerate` Methods:** Two methods named `accelerate` are present. One takes no arguments, and the other takes an `int` argument. Both have the same return type (`void`).

- **`main` Function Demonstration**:

  - ```cpp
    int main() {
        ManualCar myCar("Generic", "ModelX");

        myCar.startEngine();
        myCar.accelerate();        // Calls accelerate() - default
        myCar.accelerate(40);      // Calls accelerate(int speed) - with parameter
        myCar.brake();
        myCar.stopEngine();
        return 0;
    }
    ```

  - The output shows `myCar` first accelerating by 20 (default), then by 40 (custom speed), increasing the `currentSpeed` accordingly. This demonstrates **Static Polymorphism** through method overloading.

#### 2.7 Complete OOP Example (All Four Pillars & Both Polymorphism Types)

The speaker provides a comprehensive code example that integrates all four OOP pillars (Abstraction, Encapsulation, Inheritance, Polymorphism) and both types of polymorphism (Dynamic and Static).

- **Structure:** It maintains the `Car` (parent), `ManualCar` (child), and `ElectricCar` (child) hierarchy.

- **`Car` Class (Parent - Abstract)**:

  - ```cpp
    class Car {
    protected: // Encapsulation: data members are protected
        string brand;
        string model;
        bool isEngineOn;
        int currentSpeed;

    public:
        Car(string b, string m) : brand(b), model(m), isEngineOn(false), currentSpeed(0) {}
        void startEngine() { /* ... */ }
        void stopEngine() { /* ... */ }

        // Method Overloading (Static Polymorphism) and Virtual (Dynamic Polymorphism & Abstraction)
        virtual void accelerate() = 0;
        virtual void accelerate(int speed) = 0; // Overloaded virtual method
        virtual void brake() = 0;
    };
    ```

  - **Encapsulation:** Data members are `protected`.
  - **Abstraction:** `accelerate()` (both versions) and `brake()` are declared as `virtual` and pure virtual (`= 0`). This means the `Car` class defines _what_ a car can do (accelerate, brake) but hides _how_ it does it. The implementation details are abstracted away and left to the child classes. This also makes `Car` an abstract class.
  - **Method Overloading (Static Polymorphism):** The `accelerate` method is overloaded with two versions: one without parameters and one with an `int speed` parameter.
  - **Dynamic Polymorphism:** By declaring these overloaded methods as `virtual`, the decision of _which_ `accelerate` (or `brake`) implementation to use (Manual vs. Electric) will be made at runtime.

- **`ManualCar` Class (Child)**:

  - ```cpp
    class ManualCar : public Car { // Inheritance
    private:
        int currentGear;

    public:
        ManualCar(string b, string m) : Car(b, m), currentGear(0) {}
        void shiftGear(int gear) { /* ... */ }

        // Method Overriding (Dynamic Polymorphism) of Overloaded methods
        void accelerate() override {
            currentSpeed += 20;
            cout << "Manual car accelerating (default). Current speed: " << currentSpeed << " km/h" << endl;
        }

        void accelerate(int speed) override {
            currentSpeed += speed;
            cout << "Manual car accelerating by " << speed << ". Current speed: " << currentSpeed << " km/h" << endl;
        }

        void brake() override {
            currentSpeed -= 20;
            if (currentSpeed < 0) currentSpeed = 0;
            cout << "Manual car braking. Current speed: " << currentSpeed << " km/h" << endl;
        }
    };
    ```

  - **Inheritance:** Inherits publicly from `Car`.
  - **Method Overriding:** Both `accelerate()` overloaded versions and the `brake()` method are overridden to provide specific `ManualCar` implementations. This demonstrates Dynamic Polymorphism.

- **`ElectricCar` Class (Child)**:

  - ```cpp
    class ElectricCar : public Car {
    private:
        int batteryLevel;

    public:
        ElectricCar(string b, string m) : Car(b, m), batteryLevel(100) {}
        void chargeBattery() { /* ... */ }

        // Method Overriding of Overloaded methods
        void accelerate() override {
            if (batteryLevel > 0) {
                currentSpeed += 15; // Electric cars accelerate differently
                batteryLevel -= 5;
                cout << "Electric car accelerating (default). Current speed: " << currentSpeed << " km/h. Battery: " << batteryLevel << "%" << endl;
            } else {
                cout << "Battery too low to accelerate!" << endl;
            }
        }

        void accelerate(int speed) override {
            if (batteryLevel > 0) {
                currentSpeed += speed;
                batteryLevel -= 5;
                cout << "Electric car accelerating by " << speed << ". Current speed: " << currentSpeed << " km/h. Battery: " << batteryLevel << "%" << endl;
            } else {
                cout << "Battery too low to accelerate!" << endl;
            }
        }

        void brake() override {
            currentSpeed -= 15;
            if (currentSpeed < 0) currentSpeed = 0;
            cout << "Electric car braking. Current speed: " << currentSpeed << " km/h (regenerative)." << endl;
        }
    };
    ```

  - **Method Overriding:** Both `accelerate()` overloaded versions and the `brake()` method are overridden with `ElectricCar` specific implementations, including battery management.

- **`main` Function Demonstration**:

  - ```cpp
    int main() {
        // Using base class pointers for polymorphic behavior
        Car* wagonR = new ManualCar("Suzuki", "WagonR");
        Car* tesla = new ElectricCar("Tesla", "Model S");

        wagonR->startEngine();
        wagonR->accelerate();      // Calls ManualCar's default accelerate()
        wagonR->accelerate(20);    // Calls ManualCar's accelerate(int speed)
        wagonR->brake();           // Calls ManualCar's brake()
        wagonR->stopEngine();

        cout << endl;

        tesla->startEngine();
        tesla->accelerate();       // Calls ElectricCar's default accelerate()
        tesla->accelerate(20);     // Calls ElectricCar's accelerate(int speed)
        tesla->brake();            // Calls ElectricCar's brake()
        tesla->stopEngine();

        delete wagonR;
        delete tesla;
        return 0;
    }
    ```

  - The output clearly shows the polymorphic behavior:
    - `startEngine()` and `stopEngine()` behave the same across both cars (from `Car` class).
    - `accelerate()` and `brake()` methods show **different outputs** based on whether it's a `ManualCar` or `ElectricCar` due to **Method Overriding (Dynamic Polymorphism)**.
    - Within each car, calling `accelerate()` without a parameter versus with a parameter demonstrates **Method Overloading (Static Polymorphism)**.
    - For example, the default acceleration for Manual Car adds 20 km/h, while for Electric Car it adds 15 km/h. Subsequent calls with a parameter also reflect these base differences.

**Overall OOP Understanding:** The speaker emphasizes that understanding these pillars individually helps build up to a complete example where all four OOP pillars work together. Seeing them in a combined example like this allows for a much deeper understanding of how they relate to real-world scenarios.

### 3. Homework

The speaker assigns a homework task related to polymorphism:

1.  **What is Operator Overloading in C++?**
2.  **Why do languages like Java and Python not support Operator Overloading, while C++ does?**

---

## UML Diagrams (Class & Sequence Diagrams)

This section focuses on UML (Unified Modeling Language) diagrams, explaining what they are, how to represent them, and their utility in Low-Level Design (LLD) interviews.

### I. What are UML Diagrams?

- **Purpose:** To visually communicate and represent an application idea or design. Imagine explaining an app idea to a friend: writing long, boring paragraphs (components, interactions, objects) is inefficient. A diagram is a much better, intuitive way.
- **Definition:** UML diagrams are visual representations of an application's design. They show:
  - Which **components** are present.
  - Which **objects or entities** exist.
  - How these components/objects **interact** (e.g., how they are connected, send messages, call methods).

### II. Types of UML Diagrams

UML diagrams are broadly categorized into two main types:

1.  **Structural UML Diagrams:**

    - **Purpose:** Describe the **static structure** of an application.
    - **What they show:** Which components will be in the application and how they are related or connected to each other.
    - **Also known as:** Static Diagrams.
    - **Number of types:** There are seven structural diagrams.

2.  **Behavioral UML Diagrams:**
    - **Purpose:** Describe the **dynamic behavior** of an application, specifically how its components **interact**.
    - **What they show:** How objects send messages and call each other's methods.
    - **Also known as:** Dynamic Diagrams.
    - **Number of types:** There are seven behavioral diagrams.

**Important Note:** While there are 14 types of UML diagrams in total, for LLD and interviews, **only two are essential**. The remaining 12 are very use-case specific and generally not required.

**The Two Essential UML Diagrams for LLD:**

1.  **Class Diagram (Structural):**

    - **Crucial for LLD interviews:** Almost all LLD interviews (99%) will require you to draw a class diagram before writing any code.
    - Provides a static overview of the system's classes and their relationships.

2.  **Sequence Diagram (Behavioral):**
    - Not as universally asked as class diagrams, but highly beneficial for specific questions or to clarify the flow of interactions in complex scenarios.
    - Provides a dynamic view of how objects interact over time.

### III. Class Diagrams: Structure and Associations

Class diagrams define the classes within an application and how they are connected or associated with each other.

#### A. Representing a Class Structure in UML

A class in a UML diagram is represented by a **rectangle divided into three horizontal parts**:

1.  **Top Section: Class Name**

    - Contains the name of the class.
    - **Example:** `Car`.
    - **Abstract Class Notation:** If the class is `abstract` (meaning it has at least one virtual method without definition), `«abstract»` is written above the class name.

2.  **Middle Section: Class Characters (Variables/Attributes)**

    - Lists the class's properties or instance variables.
    - **Format:** `attributeName : DataType`.
    - **Example for `Car` class:**
      - `brand : String`
      - `model : String`
      - `engineCC : Int`

3.  **Bottom Section: Class Behaviors (Methods/Operations)**
    - Lists the class's functions or methods.
    - **Format:** `methodName(parameter: DataType): ReturnType`.
    - **Example for `Car` class:**
      - `startEngine() : void`
      - `stopEngine() : void`
      - `accelerate() : void`
      - `brake() : void`

**Access Modifiers in Class Diagrams:**
Access modifiers (public, private, protected) are represented by symbols placed before the attribute or method name:

- **Public:** `+` (plus sign)
- **Protected:** `#` (hash symbol)
- **Private:** `-` (minus sign)

**Example of a `Car` Class with Access Modifiers:**
Following typical OOP encapsulation, data members are usually `private`, and methods are `public`.

```
-----------------------------------
|             Car                 |  (Class Name)
-----------------------------------
| - brand : String                |  (Private Attributes)
| - model : String                |
| - engineCC : Int                |
-----------------------------------
| + startEngine() : void          |  (Public Methods)
| + stopEngine() : void           |
| + accelerate() : void           |
| + brake() : void                |
-----------------------------------
```

If `engineCC` were protected, it would be `# engineCC : Int`.

#### B. Class Associations (Connections between Classes)

Associations describe how classes are connected or dependent on each other. This is a core LLD concept, not just C++ specific.

**Two Main Categories of Associations:**

**1. Class-Level Association: Inheritance**

- **Concept:** Represents a **Parent-Child relationship** where a child class extends or inherits properties and behaviors from a parent class.
- **"Is-A" Relationship:** Inheritance always signifies an "Is-A" relationship.
  - **Example:** "Cow _is an_ Animal," "Tiger _is an_ Animal," "Manual Car _is a_ Car," "Electric Car _is a_ Car". The child is a specific type of the parent.
- **UML Representation:** A **solid line with a closed (filled) arrow** pointing from the **Child class to the Parent class**.
  ```
    ------------------       ------------------
    |     Animal     | <----- |      Cow       |
    ------------------       ------------------
    (Parent)                     (Child)
  ```

**2. Object-Level Associations (Composition):**

- **Concept:** These represent relationships where one object "has" or "contains" another object. All three types below ultimately represent a "Has-A" relationship. Programmatically, they are often represented by one class holding a reference or object of another class.
- **"Has-A" Relationship:**
  - **Example:** "Chair _has_ Wheels," "Room _has_ a Sofa".
- **Programming Representation for all Object Associations:**

  - If `Class B` "has" `Class A`, `Class B` will typically contain an instance or a pointer/reference to `Class A`.

  ```cpp
  class A {
      public:
          void methodOne();
  };

  class B {
      A* a_ref; // B "has-a" A
      public:
          B() { a_ref = new A(); }
          void methodTwo();
          void callAMethod() {
              a_ref->methodOne(); // B accesses A's method through its reference
          }
  };
  ```

  - Calling a method: If `B* b = new B();`, then `b->methodTwo();` for `B`'s own method, and `b->a_ref->methodOne();` to access `A`'s method through `B`'s reference.

- **Importance in LLD:** Composition plays a very significant role in LLD diagrams and code, often used _more_ than inheritance.

**Three Types of Object Associations:**

- **a. Simple Association:**

  - **Concept:** The **weakest form of interaction** between two classes. Objects are related, but with a simple link, no complex dependency.
  - **Example:** "Arjun _lives in_ a House" or "Arjun _has a_ House". If Arjun moves, the house still exists independently.
  - **UML Representation:** A **solid line with an open arrow** pointing from one object to the related object.
    ```
      ------------------       ------------------
      |     Arjun      | ----> |      House     |
      ------------------       ------------------
    ```

- **b. Aggregation:**

  - **Concept:** A **stronger relationship than simple association**, where one object (the "whole" or "container") contains other objects (the "parts"). Crucially, the "parts" can **exist independently** of the "whole". It implies a "has a part" relationship.
  - **Example:** A `Room` _has_ a `Bed`, `Chair`, or `Sofa`. If the room is removed, the furniture can still exist on its own.
  - **UML Representation:** A **solid line with an unfilled diamond** at the end connected to the "whole" (container) class, pointing from the "part" class to the "whole" class.
    ```
      ------------------       ------------------
      |      Sofa      | ----◇ |       Room     |
      ------------------       ------------------
      (Part)                       (Whole/Container)
    ```
    (Similarly for `Bed` and `Chair` as parts of `Room`)

- **c. Composition:**
  - **Concept:** The **strongest form of relationship**. One object (the "whole") is fundamentally made up of other objects (the "parts"). The "parts" **cannot exist independently** if the "whole" is destroyed. It implies a "part of" relationship where the parts are essential to the whole.
  - **Example:** A `Chair` _has_ `Arms`, `Seat`, and `Wheels`. If the chair is destroyed, its individual parts (like the seat or arms) cannot function or exist meaningfully on their own as a "chair part".
  - **UML Representation:** A **solid line with a filled diamond** at the end connected to the "whole" class, pointing from the "part" class to the "whole" class.
    ```
      ------------------       ------------------
      |     Wheels     | ----◆ |      Chair     |
      ------------------       ------------------
      (Part)                       (Whole)
    ```
    (Similarly for `Arms` and `Seat` as parts of `Chair`)

**Class Diagram Exercise (Self-Practice):**
Draw a class diagram for the car scenario: a `Car` class, with `ManualCar` and `ElectricCar` as child classes. Include common car characteristics/behaviors and specific functions like `changeGear` for `ManualCar` and `chargeBattery` for `ElectricCar`. Determine if the relationship between `Car` and its types is inheritance or composition (it's inheritance).

**Subjectivity in Class Diagram Design:**
Sometimes, the line between Simple Association, Aggregation, and Composition can be thin and subjective. For instance, in a food delivery app like Zomato, the relationship between a `Restaurant` and its `Menu` might be viewed as Aggregation (Menu can exist independently of the Restaurant, e.g., for data archival) or Composition (Menu cannot exist without its owning Restaurant). The choice depends on _your design perspective_ and how you intend the application to behave. There is often no single "right" or "wrong" answer in these subjective cases.

### IV. Sequence Diagrams

Sequence diagrams are behavioral UML diagrams that illustrate how objects interact with each other in a specific use case over time. They focus on the order of messages exchanged.

#### A. Components of a Sequence Diagram

1.  **Objects:**

    - Represented by a **rectangle with the object name** (e.g., `A`, `B`, `C`) at the top of the diagram.
    - Unlike class diagrams, the internal structure of the class (variables, methods) is **not shown**, as the focus is on inter-object communication.

2.  **Life Line:**

    - A **dashed vertical line** extending downwards from each object rectangle.
    - Indicates the **existence and lifespan** of the object throughout the sequence.
    - An object's lifeline can start or end at any point to show when it is created or destroyed.

3.  **Activation Bar (Execution Occurrence):**

    - A **solid vertical rectangle** placed on top of a lifeline.
    - Indicates the period during which an object is **active** and performing an operation or waiting for a response.
    - An object can only send or receive messages when its activation bar is present.

4.  **Messages:**
    Messages represent the communication between objects.

    - **a. Synchronous Message:**

      - **Concept:** The sender waits for a response from the receiver before continuing its own execution or sending further messages.
      - **UML Representation:** A **solid horizontal line with a closed (filled) arrowhead** pointing from the sender's activation bar to the receiver's activation bar.
      - **Response Message:** The return from a synchronous call is shown as a **dotted horizontal line with an open arrowhead** from the receiver's activation bar back to the sender's activation bar.

      ```
        Object A -------> Object B
          (Message)
        Object A <------ Object B
          (Response)
      ```

    - **b. Asynchronous Message:**

      - **Concept:** The sender sends a message and continues its execution without waiting for a response.
      - **UML Representation:** A **solid horizontal line with an open arrowhead** pointing from the sender's activation bar to the receiver's activation bar. There is typically no explicit response line.

      ```
        Object A ------> Object B
          (Message)
      ```

    - **c. Create Message:**

      - **Concept:** A message that initiates the creation of a new object.
      - **UML Representation:** An arrow pointing from the sender's activation bar to the **top of the new object's lifeline**.

      ```
        Object A ---------> Object B (new object created)
          (Create)
                 |
                 | (Object B's lifeline begins)
      ```

    - **d. Destroy Message:**

      - **Concept:** A message that causes an object to terminate its existence.
      - **UML Representation:** An arrow pointing from the sender's activation bar to an **'X' symbol at the end of the target object's lifeline**.

      ```
        Object A ---------> Object B
          (Destroy)       |
                          |X (Object B's lifeline ends)
      ```

    - **e. Lost Message:**

      - **Concept:** A message sent by an object that does not reach its intended recipient, often because the recipient is no longer active or has been destroyed.
      - **UML Representation:** An arrow originating from an object's activation bar and ending in a **black circle** (or a filled dot) indicating it's lost.

      ```
        Object A --------● (Lost Message)
      ```

    - **f. Found Message:**
      - **Concept:** A message received by an object from an unknown or undefined source.
      - **UML Representation:** An arrow originating from a **black circle** (or a filled dot) and pointing to the receiving object's activation bar.
      ```
        ● ---------> Object B (Found Message)
      ```

#### B. Drawing a Sequence Diagram: Step-by-Step Process

1.  **Define the Use Case (Flow):** Clearly understand the specific scenario or user action you want to model. A single application can have hundreds or thousands of use cases, each requiring its own sequence diagram.

    - **Example Use Case:** User withdrawing cash from an ATM.

2.  **Identify Involved Objects:** Determine all the entities or components that will participate in this specific use case.

    - **For ATM Use Case:** `User`, `ATM`, `Transaction`, `Account`, `Cash Dispenser`.

3.  **Draw the Sequence Diagram:**
    - Place the identified objects horizontally at the top of the diagram.
    - Draw a lifeline downwards from each object.
    - As the flow progresses, draw activation bars on the lifelines to show when objects are active.
    - Draw messages between the objects, ensuring they are in sequential order and use the correct arrow types for synchronous, asynchronous, create, and destroy messages.

#### C. ATM Use Case Example - Sequence Diagram Walkthrough

**Use Case:** User withdraws cash from ATM.
**Simplified Flow:** User goes to ATM with account number and amount -> ATM creates a Transaction object -> Transaction verifies funds with Account object -> If funds are sufficient, Transaction tells Cash Dispenser to dispense -> Cash Dispenser gives cash to User. (Pin verification is skipped for simplicity, as it would be a separate use case).

**Sequence Diagram Breakdown:**

1.  **Objects:** `User`, `ATM`, `Transaction`, `Account`, `Cash Dispenser`.
2.  **Initial State:** `User` and `ATM` objects are active from the start, as indicated by their extended activation bars.

3.  **User Initiates Withdrawal:**

    - The `User` sends a **synchronous message** `withdraw(amount, accountNumber)` to the `ATM` object.

4.  **ATM Creates Transaction:**

    - Upon receiving the withdraw message, the `ATM` sends a **create message** (implicitly, indicated by the arrow pointing to the `Transaction` object's lifeline) to create a `Transaction` object.
    - The `Transaction` object's lifeline and activation bar begin at this point.

5.  **Transaction Checks Account Funds:**

    - The `Transaction` object sends a **synchronous message** `checkAmount(amount)` to the `Account` object.
    - The `Account` object's activation bar begins as it starts processing.
    - The `Account` verifies if sufficient funds exist and sends a **synchronous response** `True` back to the `Transaction` object.

6.  **Transaction Destroys Itself (or completes its task):**

    - Once the `Transaction` object confirms the funds (receives `True`), its purpose is fulfilled. Its activation bar typically ends here, indicating the object is done or implicitly "destroyed" for this flow. (The video implies a destroy message or simply the ending of activation for this specific transaction instance).

7.  **ATM Dispenses Cash:**

    - Having received confirmation (`True`) from the `Transaction` (via the response back to `ATM`), the `ATM` sends a **synchronous message** `withdrawCash(amount)` to the `Cash Dispenser` object.
    - The `Cash Dispenser` object's activation bar begins.
    - The `Cash Dispenser` dispenses the `amount` and sends a **synchronous response** `amount` back to the `ATM`.

8.  **ATM Delivers Cash to User:**

    - The `ATM` passes the `amount` (the response from `Cash Dispenser`) back to the `User`.

9.  **Flow Completion:**
    - The activation bars for `ATM` and `User` (and any other involved objects like `Cash Dispenser`) end, signifying the completion of this specific use case.

**Diagrammatic Representation:**
(It is hard to represent the full diagram in text, but imagine vertical lifelines for each object with horizontal arrows indicating messages and vertical rectangles on lifelines indicating activation bars, as described above).

#### D. Additional Sequence Diagram Terms (Less Common)

These terms are used to represent more complex control flows within a sequence diagram, though they are less frequently used, especially for "happy path" scenarios:

1.  **ALT (Alternative):**

    - **Purpose:** Represents an **if-else** conditional block.
    - **Usage:** Used when there are alternative message sequences based on specific conditions. For example, if the `checkAmount` returns `True` (one flow) or `False` (an alternative flow).

2.  **OPT (Option):**

    - **Purpose:** Represents an **if** conditional block.
    - **Usage:** Used when a sequence of messages is optional and only occurs if a specific condition is met.

3.  **Loop:**
    - **Purpose:** Represents **loops** (e.g., for-loops, while-loops) in programming.
    - **Usage:** Used when a sequence of messages needs to be repeated multiple times.

These additional terms allow for a more detailed representation of complex application logic within a sequence diagram, although often, for interviews, the focus is on the basic message flows for clarity.

Here are detailed, comprehensive notes on the SOLID Design Principles, drawing from the provided video transcript:

---

# SOLID Design Principles: A Complete Guide

This document provides a comprehensive overview of the SOLID Design Principles, explaining their purpose, the problems they solve, and detailed examples of their application. These principles are crucial for writing clean, maintainable, and scalable code in real-world software development.

## 1. Introduction to Design Principles

The speaker begins by introducing **SOLID Design Principles** as a new lecture in the LLD (Low-Level Design) playlist, building upon previous discussions of Object-Oriented Programming (OOP) pillars like Abstraction, Encapsulation, Inheritance, and Polymorphism, and how to create classes and objects.

In real-world projects, developers often deal with **thousands of classes**. Managing such a large number of classes without proper guidelines can lead to significant problems. If the code becomes messy, it can introduce **disastrous bugs** into real-world applications. These bugs not only cause technical issues but also incur **monetary losses**. Therefore, the objective is to write code that is **cleaner, easily understandable by others**, and maintains a clear **architectural structure**.

### 1.1. Real-World Analogy: Messy Wiring

To illustrate the problem, the speaker uses the analogy of a house with **tangled wiring**.

- Imagine a house where electrical wires, internet wires, and even water pipes all run from the same point, creating a complete mess.
- If a fault occurs in any single wire, it becomes extremely difficult to identify which wire is faulty and even harder to replace it because everything is **tightly coupled**.

### 1.2. Analogy to Programming

This analogy directly applies to programming:

- If classes in an application are designed in a way that they are **tightly coupled** or form a **mess**, it becomes incredibly challenging to:
  - **Resolve bugs**.
  - **Integrate new features**.

## 2. Problems Faced Without Design Principles

Developers face several common problems in real-world projects if **design principles are not followed correctly**:

- **Maintainability Issues**:
  - It becomes difficult to **maintain the codebase**.
  - **Integrating new features** into the application becomes complicated, requiring extensive code changes and potentially introducing new bugs.
- **Readability Issues**:
  - When new engineers join a project, they struggle to understand the code if it is **complicated and tightly coupled**.
  - The **readability index** of such code is very high, meaning it takes a significant amount of time just to comprehend it.
- **Introduction of Bugs and Debugging Time**:
  - Applications often introduce numerous bugs.
  - A lot of time is wasted on **debugging** these issues, which could have been avoided with better design.

To solve these problems, "a great person" created a set of **design principles** that, if followed, lead to cleaner code and a more manageable architecture.

## 3. The Origin of Design Principles

The "great person" mentioned is **Robert C. Martin**, a computer scientist. In 2000, he published a paper introducing these **design principles**.

## 4. The SOLID Acronym - Overview

The design principles are collectively known by the acronym **SOLID**. This acronym stands for five distinct principles:

- **S**: **Single Responsibility Principle (SRP)**
- **O**: **Open/Closed Principle (OCP)**
- **L**: **Liskov Substitution Principle (LSP)**
- **I**: **Interface Segregation Principle (ISP)**
- **D**: **Dependency Inversion Principle (DIP)**

Following these five principles aims to eliminate the aforementioned problems, resulting in **cleaner and more manageable code**. The speaker will cover each principle one by one with practical examples.

## 5. Single Responsibility Principle (SRP)

The first principle discussed is the **Single Responsibility Principle (SRP)**, often abbreviated as **SRP**.

### 5.1. Definition and Explanation

The **Single Responsibility Principle** states:

- "**A class should have only one reason to change.**"
- Alternatively, "It should do only one thing."

In simple terms, **a class should be designed to perform only one specific task or have a single responsibility**. This means that there should be only one reason or circumstance that necessitates a change to that particular class. A class should **not handle multiple responsibilities**.

### 5.2. Real-World Analogy: TV Remote

To clarify, the speaker uses the analogy of a **TV remote**:

- A TV remote's primary job is to **control the TV**. All its buttons are designed for this purpose.
- Imagine if the same remote could also control a **fridge** and an **AC unit**. This would complicate things immensely, requiring the integration of too many functions.
- Furthermore, if something broke, it would be very difficult to maintain and fix.

SRP advises designing classes so they handle **just one responsibility**. All attributes and methods within that class should collectively contribute to handling that single responsibility, and nothing else.

### 5.3. Example: Shopping Cart (Violating SRP)

The speaker begins by illustrating a scenario where SRP is violated using UML (Unified Modeling Language) diagrams and then code.

#### 5.3.1. Initial UML Diagram (Violating SRP)

- **`Product` Class**:
  - Represents any product found on an e-commerce website (e.g., Amazon, Flipkart).
  - It has two attributes: `price` and `name`.
  - _(Commentary: For simplicity, UML access modifiers, return types, etc., are omitted in the diagram for conceptual understanding.)_
- **`ShoppingCart` Class**:
  - A user adds products to a shopping cart.
  - This class maintains a **list of `Product` objects**.
  - Relationship: `ShoppingCart` **has a** `Product`, specifically **has many** `Product`s (represented as `1..*` in UML, meaning one-to-many relationship).
- **Methods within `ShoppingCart` (Problematic):**
  - `calculateTotalPrice()`: Iterates through all products in the list, sums up their prices, and returns the total.
  - `printInvoice()`: Prints an invoice for all items in the cart, including the total bill.
  - `saveToDB()`: Stores all items in the cart into a database.

#### 5.3.2. Problem Identification

The `ShoppingCart` class, in this design, **breaks the Single Responsibility Principle** because it takes on **multiple responsibilities**:

1.  **Calculating total price**.
2.  **Printing invoices**.
3.  **Persisting data to a database**.

#### 5.3.3. Consequences of Violation

- If the logic for **database storage** needs to change (e.g., switching databases), the `ShoppingCart` class must be modified.
- If the logic for **invoice printing** needs to change (e.g., formatting), the `ShoppingCart` class must be modified.
- If the logic for **calculating the total price** needs to change (e.g., adding taxes), the `ShoppingCart` class must be modified.

This means there are **multiple reasons** why the `ShoppingCart` class might need to undergo changes, directly violating SRP.

### 5.4. Example: Shopping Cart (Following SRP)

To adhere to SRP, the speaker proposes breaking down the `ShoppingCart`'s multiple responsibilities into separate, dedicated classes, heavily utilising **Composition**.

#### 5.4.1. Refactored UML Diagram (Following SRP)

- **`Product` Class**: (Remains unchanged)
- **`ShoppingCart` Class**:
  - Now, its **only responsibility** is to calculate the total price.
  - It retains the `calculateTotalPrice()` method.
  - _(Commentary: It would also have methods to add/get products, but the focus here is on the core responsibility.)_
- **New Classes for Other Responsibilities**:
  - **`CartInvoicePrinter` Class**:
    - Its sole responsibility is to **print invoices**.
    - It contains the `printInvoice()` method.
    - It has a **"has a" relationship** with `ShoppingCart`, meaning it holds a reference to a `ShoppingCart` object to access its items.
  - **`CartDBStorage` Class**:
    - Its sole responsibility is to **store data in the database**.
    - It contains the `saveToDB()` method.
    - It also has a **"has a" relationship** with `ShoppingCart`, holding a reference to a `ShoppingCart` object.

#### 5.4.2. Benefits of the Refactored Design

- Each class now adheres to SRP by handling a **single responsibility**.
- **`ShoppingCart`**: Calculates total price.
- **`CartInvoicePrinter`**: Prints invoices.
- **`CartDBStorage`**: Stores data in the database.
- If the **database storage logic** needs modification, only the `CartDBStorage` class needs to be changed.
- If the **invoice printing logic** needs modification, only the `CartInvoicePrinter` class needs to be changed.
- The overall structure is **cleaner and more manageable**, demonstrating proper SRP adherence.

### 5.5. Code Example for SRP

The speaker then provides the C++ code implementation for both the violating and adhering SRP scenarios.

#### 5.5.1. Code Violating SRP

```cpp
// Product class (simplified)
class Product {
public:
    string name;
    double price;

    Product(string name, double price) : name(name), price(price) {}
};

// ShoppingCart class violating SRP
class ShoppingCart {
public:
    vector<Product> products;

    // Getters and Setters (simplified as add/get products)
    void addProduct(const Product& product) {
        products.push_back(product);
    }

    vector<Product> getProducts() const {
        return products;
    }

    // Multiple responsibilities in one class
    double calculateTotalPrice() const {
        double total = 0;
        for (const auto& product : products) {
            total += product.price;
        }
        return total;
    }

    void printInvoice() const {
        cout << "--- Invoice ---" << endl;
        for (const auto& product : products) {
            cout << product.name << " : " << product.price << endl;
        }
        cout << "Total: " << calculateTotalPrice() << endl;
        cout << "---------------" << endl;
    }

    void saveToDatabase() const {
        cout << "Saving shopping cart to database." << endl;
        // Logic to store cart items in DB
    }
};

// Main function (demonstrating usage)
int main() {
    ShoppingCart cart;
    cart.addProduct(Product("Laptop", 1500.0));
    cart.addProduct(Product("Mouse", 50.0));

    cart.printInvoice();       // Prints invoice
    cart.saveToDatabase();     // Saves to DB
    // All calls from the same object, violating SRP
    return 0;
}
```

- The `Product` class is straightforward, holding a product's name and price.
- The `ShoppingCart` class holds a `vector` of `Product`s and includes methods `addProduct` and `getProducts`.
- Crucially, `ShoppingCart` directly contains `calculateTotalPrice`, `printInvoice`, and `saveToDatabase`.
- In `main`, a `ShoppingCart` object is created, products are added, and then `printInvoice` and `saveToDatabase` are called directly on the `cart` object.
- **Observation**: All these disparate functionalities are encapsulated within a single `ShoppingCart` class, confirming the violation of SRP. When run, it prints the invoice and the database saving message.

#### 5.5.2. Code Following SRP

```cpp
// Product class (same as before)
class Product {
public:
    string name;
    double price;

    Product(string name, double price) : name(name), price(price) {}
};

// ShoppingCart class (now only responsible for cart items & total calculation)
class ShoppingCart {
public:
    vector<Product> products;

    void addProduct(const Product& product) {
        products.push_back(product);
    }

    vector<Product> getProducts() const {
        return products;
    }

    double calculateTotalPrice() const {
        double total = 0;
        for (const auto& product : products) {
            total += product.price;
        }
        return total;
    }
};

// New class for printing invoices
class ShoppingCartPrinter {
public:
    const ShoppingCart& cart; // Reference to the shopping cart

    ShoppingCartPrinter(const ShoppingCart& cart) : cart(cart) {}

    void printInvoice() const {
        cout << "--- Invoice ---" << endl;
        for (const auto& product : cart.getProducts()) {
            cout << product.name << " : " << product.price << endl;
        }
        cout << "Total: " << cart.calculateTotalPrice() << endl;
        cout << "---------------" << endl;
    }
};

// New class for database storage
class ShoppingCartStorage {
public:
    const ShoppingCart& cart; // Reference to the shopping cart

    ShoppingCartStorage(const ShoppingCart& cart) : cart(cart) {}

    void saveToDatabase() const {
        cout << "Saving shopping cart to database." << endl;
        // Logic to store cart items in DB
    }
};

// Main function (demonstrating SRP adherence)
int main() {
    ShoppingCart cart;
    cart.addProduct(Product("Laptop", 1500.0));
    cart.addProduct(Product("Mouse", 50.0));

    ShoppingCartPrinter printer(cart);
    printer.printInvoice(); // Call printInvoice on the printer object

    ShoppingCartStorage storage(cart);
    storage.saveToDatabase(); // Call saveToDatabase on the storage object

    return 0;
}
```

- The `Product` class remains unchanged.
- The `ShoppingCart` class is now **leaner**, containing only product management and `calculateTotalPrice`.
- A new `ShoppingCartPrinter` class is introduced, whose sole responsibility is to print the invoice. It takes a `ShoppingCart` reference in its constructor.
- A new `ShoppingCartStorage` class is introduced, whose sole responsibility is to handle database persistence. It also takes a `ShoppingCart` reference.
- In `main`, after creating the `ShoppingCart` object, separate `ShoppingCartPrinter` and `ShoppingCartStorage` objects are created, passing the `cart` to them.
- **Result**: Each responsibility is now handled by a dedicated class. When run, the output is functionally similar, but the underlying design is significantly improved in terms of maintainability and clarity.

### 5.6. Clarification on SRP: "One Method" Misconception

The speaker addresses a common misunderstanding:

- **SRP does NOT mean a class should have only one method**.
- It means that a class can have **any number of methods**, but **all those methods must contribute to the class's single responsibility**.
- For example, `calculateTotalPrice` in `ShoppingCart` might require several **helper functions** to perform its calculation. These helper functions are perfectly acceptable as long as their collective goal is to calculate the total price.
- Similarly, `saveToDB` might involve multiple sub-functions for connection, query building, etc., but all should serve the single goal of database storage.

## 6. Open/Closed Principle (OCP)

The second SOLID principle is the **Open/Closed Principle (OCP)**, abbreviated as **OCP**.

### 6.1. Definition and Explanation

The **Open/Closed Principle** states:

- "**A class should be open for extension but closed for modification.**"

Let's break down this definition:

- **Modification**: Refers to **changing existing code** within an already defined class or its methods.
- **Extension**: Refers to **adding new features** to the system.

The core idea of OCP is that when a new feature needs to be integrated, developers **should not have to change the code of existing, stable classes**. Instead, they should be able to **extend** the system by adding new code without altering the old.

The speaker notes that while OCP is a very strict rule, it's often difficult to follow it absolutely in every scenario. However, the goal should be to adhere to it as much as possible.

### 6.2. Problem Illustration: Data Persistence Example

The speaker reuses the `Product`, `ShoppingCart`, and `CartInvoicePrinter` classes from the SRP example. The focus now shifts to the `CartDBStorage` class (or generally, data persistence logic).

#### 6.2.1. Initial Scenario (Violating OCP)

- **Existing `DBStorage` Class**: Previously, this class had a `saveToDB()` method that likely stored data in a SQL database.
- **New Feature Request**: The requirement is now to store data not just in SQL, but also in **MongoDB** and in a **file system**.
- **Common (Incorrect) Approach**: A developer might think, "It's simple! I'll just add two more methods to the existing `DBStorage` class: `saveToMongo()` and `saveToFile()`."

- **Violation**: By adding new methods (and thus changing its internal code) to the **already existing `DBStorage` class** to integrate new features, the **Open/Closed Principle is broken**. The class was _modified_ when it should have been _closed for modification_ for extension.

### 6.3. Solution: Using Abstraction, Inheritance, and Polymorphism

The correct way to integrate new features without modifying existing code involves using the OOP pillars of **Abstraction, Inheritance, and Polymorphism**.

#### 6.3.1. Understanding Abstraction and Interfaces

- **Interface**: In programming, an interface (or an abstract class in C++) acts as a **contract** between a client (any software application or user interacting with a class) and a concrete class (a class that defines all its methods).
- An interface declares **what a class can do** (its methods) **without specifying how it does it** (its implementation). This concept is fundamental to **abstraction**.
- In C++, abstract classes are used to express abstraction by making methods **pure virtual** (declared but not defined). In Java, there's an explicit `interface` keyword.
- **Polymorphism**: If an abstract class `A` has a virtual function `m1()`, and concrete classes `A1`, `A2`, `A3` inherit `A` and override `m1()` with their specific definitions:
  - One can create a reference/pointer of type `A` (the parent/abstract class) and assign an object of any of its child classes (`A1`, `A2`, or `A3`) to it (e.g., `A* obj = new A1();`).
  - When `obj->m1()` is called, the specific `m1()` implementation of the assigned child class (e.g., `A1::m1()`) is executed. This is known as **method overriding** and is key to polymorphism.

#### 6.3.2. Refactored UML Diagram (Following OCP)

- **Introduce an Abstract Class/Interface**:
  - Instead of modifying `DBStorage`, create an **abstract class** called `DBPersistence` (or `Persistence`).
  - This class will serve as an **interface** for all data persistence operations.
  - It will contain a single **pure virtual method**: `save()`.
- **Create Concrete Implementation Classes**:
  - For each specific persistence method, create a **separate concrete class** that **inherits** from `DBPersistence`:
    - `SQLPersistence` (for saving to SQL database)
    - `MongoPersistence` (for saving to MongoDB)
    - `FilePersistence` (for saving to a file)
  - Each of these concrete classes will **override** the `save()` method, providing its unique implementation for saving data. For example:
    - `SQLPersistence::save()` handles SQL-specific queries.
    - `MongoPersistence::save()` handles MongoDB-specific methods.
    - `FilePersistence::save()` handles file I/O operations.
- **Relationship**: The `ShoppingCart` (or the component that triggers saving) will now interact with the abstract `DBPersistence` interface. It will hold a reference to `DBPersistence`.

#### 6.3.3. Benefits of the Refactored Design

- When a **new persistence feature** (e.g., saving to Cassandra DB) is required, a **new class** (`CassandraPersistence`) is created. This new class **inherits** `DBPersistence` and provides its own `save()` implementation.
- **Crucially, no existing classes are modified**. The abstract class `DBPersistence` remains unchanged, and the previously created concrete classes (`SQLPersistence`, `MongoPersistence`, `FilePersistence`) also remain untouched.
- This design introduces a **level of abstraction** that allows the system to be **extended** (by adding new `DBPersistence` implementations) while being **closed for modification** (existing code doesn't change).
- Polymorphism ensures that calling the `save()` method on a `DBPersistence` reference will execute the correct implementation based on the actual object type (e.g., `SQLPersistence` or `MongoPersistence`).

### 6.4. Code Example for OCP

The speaker provides the C++ code implementation for both the violating and adhering OCP scenarios.

#### 6.4.1. Code Violating OCP

```cpp
// Product class (same as before)
// ShoppingCart class (same as SRP solution - calculating total price)
// ShoppingCartPrinter class (same as SRP solution - printing invoice)

// ShoppingCartStorage class violating OCP
class ShoppingCartStorage {
public:
    const ShoppingCart& cart;

    ShoppingCartStorage(const ShoppingCart& cart) : cart(cart) {}

    void saveToSQLDatabase() const {
        cout << "Saving shopping cart to SQL database." << endl;
        // SQL-specific logic
    }

    void saveToMongoDatabase() const {
        cout << "Saving shopping cart to Mongo database." << endl;
        // Mongo-specific logic
    }

    void saveToFile() const {
        cout << "Saving shopping cart to file." << endl;
        // File-specific logic
    }
};

// Main function (demonstrating OCP violation)
int main() {
    ShoppingCart cart;
    cart.addProduct(Product("Laptop", 1500.0));
    cart.addProduct(Product("Mouse", 50.0));

    ShoppingCartPrinter printer(cart);
    printer.printInvoice();

    ShoppingCartStorage storage(cart);
    storage.saveToSQLDatabase();   // Call specific save method
    // If new DB type comes, we add another method here and call it.
    // E.g., storage.saveToMongoDatabase(); storage.saveToFile();
    // This modifies the ShoppingCartStorage class.
    return 0;
}
```

- `Product`, `ShoppingCart`, and `ShoppingCartPrinter` are the same as in the SRP solution.
- The `ShoppingCartStorage` class is where OCP is violated. It contains **three distinct methods for saving data**: `saveToSQLDatabase()`, `saveToMongoDatabase()`, and `saveToFile()`.
- In `main`, a `ShoppingCartStorage` object is created, and specific `saveToX` methods are called.
- **Observation**: If a new database type is introduced, a new method must be added to `ShoppingCartStorage`, requiring **modification** of the existing class, thus violating OCP. When run, it prints the invoice and the SQL saving message.

#### 6.4.2. Code Following OCP

```cpp
// Product class (same)
// ShoppingCart class (same)
// ShoppingCartPrinter class (same)

// Abstract class for persistence (interface)
class Persistence {
public:
    const ShoppingCart& cart; // Reference to the shopping cart for data access

    Persistence(const ShoppingCart& cart) : cart(cart) {}

    // Pure virtual function - must be overridden by concrete classes
    virtual void save() const = 0;
    virtual ~Persistence() = default; // Virtual destructor for proper cleanup
};

// Concrete class for SQL persistence
class SQLPersistence : public Persistence {
public:
    SQLPersistence(const ShoppingCart& cart) : Persistence(cart) {}
    void save() const override {
        cout << "Saving shopping cart to SQL database." << endl;
        // SQL-specific implementation
    }
};

// Concrete class for Mongo persistence
class MongoPersistence : public Persistence {
public:
    MongoPersistence(const ShoppingCart& cart) : Persistence(cart) {}
    void save() const override {
        cout << "Saving shopping cart to Mongo database." << endl;
        // Mongo-specific implementation
    }
};

// Concrete class for File persistence
class FilePersistence : public Persistence {
public:
    FilePersistence(const ShoppingCart& cart) : Persistence(cart) {}
    void save() const override {
        cout << "Saving shopping cart to file." << endl;
        // File-specific implementation
    }
};

// Main function (demonstrating OCP adherence)
int main() {
    ShoppingCart cart;
    cart.addProduct(Product("Laptop", 1500.0));
    cart.addProduct(Product("Mouse", 50.0));

    ShoppingCartPrinter printer(cart);
    printer.printInvoice();

    // Using polymorphism to save to different persistence types
    // Create references to the abstract Persistence class
    Persistence* sqlDb = new SQLPersistence(cart);
    Persistence* mongoDb = new MongoPersistence(cart);
    Persistence* fileStorage = new FilePersistence(cart);

    sqlDb->save();        // Calls SQLPersistence::save()
    mongoDb->save();      // Calls MongoPersistence::save()
    fileStorage->save();  // Calls FilePersistence::save()

    // Clean up memory
    delete sqlDb;
    delete mongoDb;
    delete fileStorage;

    return 0;
}
```

- `Product`, `ShoppingCart`, and `ShoppingCartPrinter` are unchanged.
- An **abstract class `Persistence`** is introduced, containing a constructor that takes a `ShoppingCart` reference and a **pure virtual `save()` method** (`= 0`). This makes `Persistence` an interface.
- Three **concrete classes** (`SQLPersistence`, `MongoPersistence`, `FilePersistence`) are created, **each inheriting from `Persistence`** and **overriding the `save()` method** with their specific output (e.g., "Saving shopping cart to SQL database.").
- In `main`, pointers of the **abstract `Persistence` type** are created. These pointers are then assigned objects of the specific concrete persistence classes (`SQLPersistence`, `MongoPersistence`, `FilePersistence`).
- Calling `save()` on these `Persistence` pointers then dynamically invokes the correct overridden `save()` method from the respective concrete class (due to polymorphism/method overriding).
- **Result**: The `Persistence` interface remains closed for modification, but the system is open for extension by simply adding new concrete `Persistence` implementations without touching existing code. The output shows the invoice printing, followed by saving to SQL, Mongo, and File, each triggered by the polymorphic `save()` call.

## 7. Liskov Substitution Principle (LSP)

The third SOLID principle is the **Liskov Substitution Principle (LSP)**, abbreviated as **LSP**.

### 7.1. Definition and Explanation

The **Liskov Substitution Principle** states:

- "**Subclasses should be substitutable for their base classes.**"

The speaker explains that this principle, while seemingly obvious and fundamental to inheritance, is frequently violated in real-world projects, often unintentionally.

- **Meaning**: If a class `B` is a subclass (inherits from) of class `A`, then anywhere an object of `A` (the base/parent class) is expected, an object of `B` (the sub/child class) should be able to be substituted **without causing any issues or breaking the code**.
- **Connection to Inheritance**: Inheritance implies that a subclass should **expand** the features of its base class, never **narrow** them.
  - If `A` has methods `m1`, `m2`, `m3`, and `B` inherits `A`, `B` automatically gets `m1`, `m2`, `m3`.
  - `B` might also have its own specialised methods, `m4`, `m5`, which further _extend_ A's functionality.
  - A client that interacts with `A` (e.g., by taking an `A` pointer as a parameter and calling `m1`, `m2`, `m3` on it) should still function correctly if a `B` object is passed instead. The client is unaware of `m4` or `m5` and won't call them, so the inherited `m1`, `m2`, `m3` from `A` (or their overridden versions in `B`) should behave as expected.

### 7.2. Problem Illustration: Bank Account System (Violating LSP)

The speaker uses a bank account system to demonstrate LSP violation.

#### 7.2.1. Initial UML Diagram (Violating LSP)

- **Abstract `Account` Class**:
  - This is the base class, representing a generic bank account.
  - It contains two **abstract methods**: `deposit()` and `withdraw()`.
  - _(Commentary: Abstract methods are only declared, not defined, meaning concrete child classes must provide their implementations.)_
- **Concrete Account Classes**:
  - `SavingsAccount` and `CurrentAccount`.
  - Both **inherit** from `Account` and **override** both `deposit()` and `withdraw()` methods, providing standard implementations.
  - Relationship: `SavingsAccount` **is a** `Account`, `CurrentAccount` **is a** `Account`.
- **`Client` Class**:
  - Represents a client interacting with accounts.
  - It has a **one-to-many relationship** with `Account` (e.g., a list of `Account` objects).
  - The `Client` interacts with the `Account` interface, assuming that any `Account` object in its list will support both `deposit()` and `withdraw()`.

#### 7.2.2. Introduction of `FixedDepositAccount` (LSP Violation)

- **New Account Type**: A `FixedDepositAccount` is introduced.
- **Characteristic**: This type of account allows **deposits** but **does not allow withdrawals** for a certain period.
- **Problematic Implementation**: Since `FixedDepositAccount` is also a type of `Account`, it is made to **inherit from `Account`**.
- **The Issue**: Because it inherits `Account`, `FixedDepositAccount` _must_ override both `deposit()` and `withdraw()`.
  - `deposit()` is easy to implement normally.
  - For `withdraw()`, since it's not allowed, a common (but incorrect) approach is to make it **throw an exception** (e.g., `LogicalError`).
- **Violation**:
  - The `Client` expects _any_ `Account` object to allow both `deposit` and `withdraw` without issues.
  - If the `Client` calls `withdraw()` on a `FixedDepositAccount` object (which is stored in its `Account` list), it will receive an **unexpected exception**.
  - The `Client`'s code might not be equipped to handle this specific exception, leading to program crashes or incorrect behaviour.
  - This breaks LSP because `FixedDepositAccount` is **not substitutable** for its base class `Account` without altering the `Client`'s expected behaviour. It **narrows** the functionality (removes `withdraw` capability), whereas a subclass should **expand** or maintain functionality.

### 7.3. Bad Solution: Modifying the Client (Breaks OCP)

The speaker first shows a common but incorrect attempt to solve the LSP violation: modifying the client's code.

#### 7.3.1. Approach

- **Idea**: The `Client`'s `processTransaction` method iterates through its list of `Account`s and calls `deposit` and `withdraw`.
- **Modification**: Introduce an `if-else` condition within the `Client`'s loop:
  - `if (account is FixedDepositAccount)`: only call `deposit()`.
  - `else`: call both `deposit()` and `withdraw()`.

#### 7.3.2. Problems with this "Bad Solution"

This approach is highly problematic because it **violates the Open/Closed Principle**:

- **Tight Coupling**: The `Client` becomes **tightly coupled** to the concrete types of accounts (e.g., `FixedDepositAccount`, `SavingsAccount`, `CurrentAccount`). It now needs to be aware of and check for specific account types, rather than just interacting with the abstract `Account` interface.
- **Violation of OCP**: If a new type of account is introduced in the future (e.g., one that only allows withdrawals), the `Client`'s code will again need to be **modified** to add another `if-else` condition. This means the `Client` class is **not closed for modification**.
- **Loss of Abstraction**: The core benefit of abstraction (where the client only knows the interface) is lost.

### 7.4. Good Solution: Refactoring the Abstraction Hierarchy

The correct way to solve the LSP violation involves modifying the **abstraction hierarchy** itself.

#### 7.4.1. Refactored UML Diagram (Following LSP)

The key is to create more granular interfaces (abstract classes) that accurately reflect the capabilities of different account types.

- **New Abstract Class 1**: **`NonWithdrawableAccount`**
  - This class represents accounts from which money **cannot be withdrawn**.
  - It contains **only one abstract method**: `deposit()`.
- **New Abstract Class 2**: **`WithdrawableAccount`**
  - This class represents accounts from which money **can be withdrawn**.
  - It **inherits (extends)** from `NonWithdrawableAccount`.
  - Because it extends `NonWithdrawableAccount`, it automatically inherits the `deposit()` method.
  - It also introduces its own **abstract method**: `withdraw()`.
- **Re-assign Concrete Account Classes**:
  - **`SavingsAccount`** and **`CurrentAccount`**: These classes now **inherit from `WithdrawableAccount`**. They will implement both `deposit()` (inherited from `NonWithdrawableAccount`) and `withdraw()` (introduced by `WithdrawableAccount`).
  - **`FixedDepositAccount`**: This class now **directly inherits from `NonWithdrawableAccount`**. It will only implement the `deposit()` method and will not have a `withdraw()` method to implement or throw an exception from.

#### 7.4.2. Benefits of the Refactored Design

- **LSP Adherence**:
  - `FixedDepositAccount` is now properly substitutable for `NonWithdrawableAccount` because it completely fulfills the contract (only `deposit`).
  - `SavingsAccount` and `CurrentAccount` are properly substitutable for `WithdrawableAccount` because they fulfill both `deposit` and `withdraw` contracts.
  - The hierarchy reflects the actual capabilities: `WithdrawableAccount` truly _is a_ `NonWithdrawableAccount` plus `withdraw` capability.
- **OCP Preservation for Client**:
  - The `Client` class can now hold **two separate lists**: one for `NonWithdrawableAccount` objects and one for `WithdrawableAccount` objects.
  - When iterating through the `NonWithdrawableAccount` list, the `Client` **knows** that only `deposit()` is callable.
  - When iterating through the `WithdrawableAccount` list, the `Client` **knows** that both `deposit()` and `withdraw()` are callable.
  - The `Client` interacts solely with these **interfaces** and does not need to know or check the concrete type of account (e.g., `SavingsAccount` vs `FixedDepositAccount`). This means the client is **not tightly coupled** and remains **closed for modification** if new account types are added (as long as they fit into one of these two categories or a new interface is created for a genuinely different capability).

### 7.5. Code Example for LSP

The speaker provides the C++ code implementation for the LSP violating, bad solution, and good solution scenarios.

#### 7.5.1. Code Violating LSP

```cpp
// Abstract base class: Account
class Account {
public:
    double balance;
    Account(double initialBalance) : balance(initialBalance) {}
    virtual void deposit(double amount) = 0;
    virtual void withdraw(double amount) = 0;
    virtual ~Account() = default;
};

// Concrete class: SavingsAccount
class SavingsAccount : public Account {
public:
    SavingsAccount(double initialBalance) : Account(initialBalance) {}
    void deposit(double amount) override {
        balance += amount;
        cout << "Savings: Deposited " << amount << ". New balance: " << balance << endl;
    }
    void withdraw(double amount) override {
        if (amount <= 0 || balance - amount < 0) {
            cout << "Savings: Insufficient funds or invalid amount for withdrawal." << endl;
            return;
        }
        balance -= amount;
        cout << "Savings: Withdrew " << amount << ". New balance: " << balance << endl;
    }
};

// Concrete class: CurrentAccount (similar to SavingsAccount)
class CurrentAccount : public Account {
public:
    CurrentAccount(double initialBalance) : Account(initialBalance) {}
    void deposit(double amount) override {
        balance += amount;
        cout << "Current: Deposited " << amount << ". New balance: " << balance << endl;
    }
    void withdraw(double amount) override {
        if (amount <= 0 || balance - amount < 0) {
            cout << "Current: Insufficient funds or invalid amount for withdrawal." << endl;
            return;
        }
        balance -= amount;
        cout << "Current: Withdrew " << amount << ". New balance: " << balance << endl;
    }
};

// Concrete class: FixedTermAccount (violates LSP)
class FixedTermAccount : public Account {
public:
    FixedTermAccount(double initialBalance) : Account(initialBalance) {}
    void deposit(double amount) override {
        balance += amount;
        cout << "Fixed Term: Deposited " << amount << ". New balance: " << balance << endl;
    }
    void withdraw(double amount) override {
        // This violates LSP because FixedTermAccount should not allow withdrawal
        // but is forced to implement it because its base class Account has it.
        throw logical_error("Fixed Term: Withdrawal not allowed in Fixed Term Account.");
    }
};

// BankClient (Interacts with Account base class)
class BankClient {
public:
    vector<Account*> accounts;

    BankClient(const vector<Account*>& accs) : accounts(accs) {}

    void processTransactions() {
        for (Account* acc : accounts) {
            try {
                acc->deposit(100.0); // Always try to deposit
                acc->withdraw(50.0); // Always try to withdraw
            } catch (const logical_error& e) {
                cout << "Error processing transaction: " << e.what() << endl;
            }
        }
    }
};

// Main function (demonstrating LSP violation)
int main() {
    vector<Account*> bankAccounts;
    bankAccounts.push_back(new SavingsAccount(1000.0));
    bankAccounts.push_back(new CurrentAccount(500.0));
    bankAccounts.push_back(new FixedTermAccount(2000.0)); // FixedTermAccount added to list of Account*

    BankClient client(bankAccounts);
    client.processTransactions();

    // Clean up memory
    for (Account* acc : bankAccounts) {
        delete acc;
    }
    return 0;
}
```

- The `Account` class is an abstract base class with virtual `deposit` and `withdraw` methods.
- `SavingsAccount` and `CurrentAccount` implement both `deposit` and `withdraw` normally.
- `FixedTermAccount` inherits `Account` but throws a `logical_error` exception inside its `withdraw` method, as withdrawals are not allowed for this type of account.
- The `BankClient` class holds a `vector` of `Account*` pointers. Its `processTransactions` method iterates through this list, calling `deposit` and `withdraw` on each account (wrapped in a `try-catch` block for demonstration).
- **Observation**: When `processTransactions` is called, `SavingsAccount` and `CurrentAccount` handle deposits and withdrawals as expected. However, for `FixedTermAccount`, `deposit` works, but `withdraw` throws the `logical_error` exception, demonstrating the LSP violation. The client code is forced to handle an exception it didn't inherently expect from a generic `Account`.

#### 7.5.2. Code for Bad Solution (LSP Fixed, OCP Broken)

```cpp
// Account class (same)
// SavingsAccount (same)
// CurrentAccount (same)
// FixedTermAccount (same - still throws exception for withdraw)

// BankClient (now aware of FixedTermAccount - violates OCP)
class BankClient {
public:
    vector<Account*> accounts;

    BankClient(const vector<Account*>& accs) : accounts(accs) {}

    void processTransactions() {
        for (Account* acc : accounts) {
            // Check type to avoid calling withdraw on FixedTermAccount
            FixedTermAccount* fixedTermAcc = dynamic_cast<FixedTermAccount*>(acc);
            try {
                acc->deposit(100.0);
                if (!fixedTermAcc) { // If it's NOT a FixedTermAccount
                    acc->withdraw(50.0);
                } else {
                    cout << "Skipping withdrawal for Fixed Term Account." << endl;
                }
            } catch (const logical_error& e) {
                cout << "Error processing transaction: " << e.what() << endl;
            }
        }
    }
};

// Main function (same as before)
int main() {
    vector<Account*> bankAccounts;
    bankAccounts.push_back(new SavingsAccount(1000.0));
    bankAccounts.push_back(new CurrentAccount(500.0));
    bankAccounts.push_back(new FixedTermAccount(2000.0));

    BankClient client(bankAccounts);
    client.processTransactions();

    for (Account* acc : bankAccounts) {
        delete acc;
    }
    return 0;
}
```

- All `Account` hierarchy classes are the same, `FixedTermAccount` still throws an exception for `withdraw`.
- The `BankClient::processTransactions` method is modified. It now uses `dynamic_cast` to check if an `Account*` is actually a `FixedTermAccount*`.
- If it is a `FixedTermAccount`, `withdraw` is explicitly skipped; otherwise, `withdraw` is called.
- **Observation**: This prevents the `withdraw` exception from `FixedTermAccount` (LSP appears "fixed"). However, the client is now aware of and depends on the concrete type `FixedTermAccount`. If a new account type with similar restrictions is added, the `BankClient` class would need **modification**, breaking OCP.

#### 7.5.3. Code for Good Solution (Following LSP)

```cpp
// New abstract base class for accounts that only allow deposits
class DepositOnlyAccount {
public:
    double balance;
    DepositOnlyAccount(double initialBalance) : balance(initialBalance) {}
    virtual void deposit(double amount) = 0;
    virtual ~DepositOnlyAccount() = default;
};

// New abstract class for accounts that allow withdrawals, inherits DepositOnlyAccount
class WithdrawableAccount : public DepositOnlyAccount {
public:
    WithdrawableAccount(double initialBalance) : DepositOnlyAccount(initialBalance) {}
    virtual void withdraw(double amount) = 0;
    virtual ~WithdrawableAccount() = default;
};

// Concrete class: SavingsAccount (inherits WithdrawableAccount)
class SavingsAccount : public WithdrawableAccount {
public:
    SavingsAccount(double initialBalance) : WithdrawableAccount(initialBalance) {}
    void deposit(double amount) override {
        balance += amount;
        cout << "Savings: Deposited " << amount << ". New balance: " << balance << endl;
    }
    void withdraw(double amount) override {
        if (amount <= 0 || balance - amount < 0) {
            cout << "Savings: Insufficient funds or invalid amount for withdrawal." << endl;
            return;
        }
        balance -= amount;
        cout << "Savings: Withdrew " << amount << ". New balance: " << balance << endl;
    }
};

// Concrete class: CurrentAccount (inherits WithdrawableAccount)
class CurrentAccount : public WithdrawableAccount {
public:
    CurrentAccount(double initialBalance) : WithdrawableAccount(initialBalance) {}
    void deposit(double amount) override {
        balance += amount;
        cout << "Current: Deposited " << amount << ". New balance: " << balance << endl;
    }
    void withdraw(double amount) override {
        if (amount <= 0 || balance - amount < 0) {
            cout << "Current: Insufficient funds or invalid amount for withdrawal." << endl;
            return;
        }
        balance -= amount;
        cout << "Current: Withdrew " << amount << ". New balance: " << balance << endl;
    }
};

// Concrete class: FixedTermAccount (inherits DepositOnlyAccount)
class FixedTermAccount : public DepositOnlyAccount {
public:
    FixedTermAccount(double initialBalance) : DepositOnlyAccount(initialBalance) {}
    void deposit(double amount) override {
        balance += amount;
        cout << "Fixed Term: Deposited " << amount << ". New balance: " << balance << endl;
    }
    // No withdraw method to override or throw exception from, as it's not in DepositOnlyAccount
};

// BankClient (now interacts with two distinct interfaces)
class BankClient {
public:
    vector<WithdrawableAccount*> withdrawableAccounts;
    vector<DepositOnlyAccount*> depositOnlyAccounts;

    BankClient(const vector<WithdrawableAccount*>& wAccs, const vector<DepositOnlyAccount*>& dAccs)
        : withdrawableAccounts(wAccs), depositOnlyAccounts(dAccs) {}

    void processTransactions() {
        // Process withdrawable accounts
        for (WithdrawableAccount* acc : withdrawableAccounts) {
            acc->deposit(100.0);
            acc->withdraw(50.0);
        }
        // Process deposit-only accounts
        for (DepositOnlyAccount* acc : depositOnlyAccounts) {
            acc->deposit(100.0);
            // No withdraw call here, as the interface doesn't support it
        }
    }
};

// Main function (demonstrating LSP adherence)
int main() {
    vector<WithdrawableAccount*> wAccs;
    wAccs.push_back(new SavingsAccount(1000.0));
    wAccs.push_back(new CurrentAccount(500.0));

    vector<DepositOnlyAccount*> dAccs;
    dAccs.push_back(new FixedTermAccount(2000.0));

    BankClient client(wAccs, dAccs);
    client.processTransactions();

    // Clean up memory
    for (WithdrawableAccount* acc : wAccs) {
        delete acc;
    }
    for (DepositOnlyAccount* acc : dAccs) {
        delete acc;
    }
    return 0;
}
```

- Two new abstract base classes are introduced: `DepositOnlyAccount` (with only a virtual `deposit` method) and `WithdrawableAccount` (which inherits `DepositOnlyAccount` and adds a virtual `withdraw` method).
- `SavingsAccount` and `CurrentAccount` now inherit from `WithdrawableAccount`, implementing both `deposit` and `withdraw`.
- `FixedTermAccount` now inherits from `DepositOnlyAccount`, and thus only needs to implement `deposit`. There is no `withdraw` method for it to override or throw an exception from, aligning its capabilities with its declared interface.
- The `BankClient` class now manages **two separate lists**: one for `WithdrawableAccount*` and one for `DepositOnlyAccount*`.
- In `processTransactions`, it iterates through `wAccs` calling both `deposit` and `withdraw`, and then iterates through `dAccs` calling only `deposit`.
- **Result**: The code now correctly handles all account types. `FixedTermAccount` is no longer forced to implement a `withdraw` method it cannot support. The `BankClient` naturally separates its operations based on the capabilities advertised by the abstract interfaces, without needing any `dynamic_cast` or type-checking logic. This fully adheres to LSP and keeps OCP intact. The output shows deposits and withdrawals for savings and current accounts, and only deposit for the fixed-term account, with no exceptions.

## 8. Conclusion

The speaker concludes the video by stating that two more SOLID principles remain: **Interface Segregation Principle (ISP)** and **Dependency Inversion Principle (DIP)**. These will be covered in the next video in the series.

---

Here are comprehensive notes from the video "SOLID Design Principles | part 2" uploaded on the YouTube channel "Coder Army":

---

### Introduction to SOLID Design Principles (Recap)

The video continues the discussion on **SOLID Design Principles**, which are a set of principles in object-oriented programming that help design maintainable, flexible, and scalable software systems. The previous lecture covered the Single Responsibility Principle (SRP), Open/Closed Principle (OCP), and Liskov Substitution Principle (LSP). This session focuses on the remaining two: Interface Segregation Principle (ISP) and Dependency Inversion Principle (DIP), with an in-depth look at LSP due to its complexity.

---

### Liskov Substitution Principle (LSP) - In-Depth Discussion

The Liskov Substitution Principle (LSP) is often simple in appearance but is frequently broken because developers struggle to identify its violations. It is crucial for well-maintained code, especially in real-world projects and interviews.

**Core Concept of LSP:**
If you have a parent class (let's say `A`) and a child class (let's say `B`), and a client expects an object of class `A`, then if you can provide an object of class `B` instead, **without causing any issues, breaking the client's code, or introducing restrictions**, then that hierarchy follows the Liskov Substitution Principle. Essentially, a **child class can easily replace the parent class**.

**Inheritance vs. LSP:**
Just because a child class (e.g., `B`) inherits and overrides methods from a parent class (e.g., `A`) does not automatically mean it follows LSP. The child class must _behave_ like the parent class. The client should not be able to tell the difference between interacting with the parent class or the child class. An example from the previous video was a `FixedDepositAccount` (child) that disallowed `withdraw` (parent method), which was a violation because it didn't behave like a standard `Account`.

**Guidelines for Following LSP:**
To ensure LSP is followed and prevent breakage, there are three main sets of guidelines:

1.  **Signature Rule**
2.  **Property Rule**
3.  **Method Rule**

Before diving into the rules, it's important to understand the terms **"Broad"** and **"Narrow"**.

- **Broad (Broader Class):** Refers to a **parent class or any ancestor** in the inheritance hierarchy.
  - _Example:_ If `Animal` is a class and `Dog` is its subclass, then `Animal` is a broader class of `Dog`.
- **Narrow (Narrower Class):** Refers to a **child class or any descendant**.
  - _Example:_ `Dog` is a narrower class of `Animal`.

---

#### 1. Signature Rule

The Signature Rule deals with how method signatures (name, arguments, return type) behave during inheritance.

A method's **signature** consists of its name, the arguments it takes, and its return type.

The Signature Rule is further broken down into three sub-rules:

**a. Method Argument Rule:**

- **Rule:** When overriding a method in a child class, the **arguments must be the same type as in the parent class method, or a broader type**.
  - _Example:_ If a parent method `solve` takes `String S`, the child's overridden `solve` method must also take `String S` or a parent class of `String`.
- **C++ Imposition:** In C++ (and Java), method signatures for overridden functions are generally imposed to be the same. You cannot easily change the argument type without the compiler recognizing it as a different method, not an override.
- **Reasoning:**

  - Imagine a client that expects a parent class object and is given a child class object.
  - The client knows the parent's contract (e.g., `solve` takes a `String`).
  - If the child's `solve` method suddenly takes an `int` instead of a `String` (which is a different, non-broader type), the client's code will break when it tries to call `solve` with a `String` argument on the child's object, because the child expects an `int`.
  - This is why the argument type must be the same or broader; it ensures the client's calls remain valid.

  **Code Example (Method Argument Rule Violation):**

  ```cpp
  // Parent Class
  class Parent {
  public:
      void print(std::string s) {
          // ...
      }
  };

  // Child Class
  class Child : public Parent {
  public:
      // Attempting to override with a different argument type (int instead of string)
      void print(int i) override { // This will cause a compilation error in C++
          // ...
      }
  };
  ```

  - **Explanation:** If `Child::print` tries to take an `int` instead of `std::string`, C++ will produce a compilation error: "Member function declared with override does not override a base class member". This illustrates that C++ already enforces this rule, making it difficult to violate directly in practice for arguments.

**b. Return Type Rule:**

- **Rule:** When overriding a method in a child class, the **return type must be the same type as in the parent class method, or a narrower type (a subtype)**. You **cannot** return a broader type (an ancestor).
- **Hierarchy Example:** `Animal` is the parent class, `Dog` is its child class.
- **Reasoning:**
  - A client expects a parent class object (e.g., `Animal`) from a method call.
  - If the parent method `random` returns an `Animal` object, the client's code `Animal A = P.random();` works fine.
  - If the child's overridden `random` method also returns `Animal`, it works.
  - If the child's overridden `random` method returns a `Dog` (a narrower type), it also works because a parent class reference (e.g., `Animal A`) can point to a child class object (e.g., `Dog`).
  - However, if the child's `random` method returns an `Organism` (a broader class, an ancestor of `Animal`), then the `Animal A` reference cannot hold an `Organism` object, as `Organism` is its parent, leading to a type mismatch and code breakage.
- **Covariance:** This specific scenario, where the overridden method in the child class returns a more specific (narrower) type than the method in the parent class, is known as **Covariance**.
- **C++ Behavior:** While C++ generally expects the same return type for overridden methods, covariance (returning a narrower type) is sometimes allowed.

  **Code Example (Return Type Rule - Covariance):**

  ```cpp
  // Base Hierarchy for Return Types
  class Animal { /* ... */ };
  class Dog : public Animal { /* ... */ };

  // Parent-Child Hierarchy
  class Parent {
  public:
      // Returns an Animal instance
      virtual Animal* getAnimal() {
          std::cout << "Parent Returning Animal Instance" << std::endl;
          return new Animal();
      }
  };

  class Child : public Parent {
  public:
      // Returns a Dog instance (narrower type) - Example of Covariance
      Dog* getAnimal() override {
          std::cout << "Child Retrurning Dog Instance" << std::endl;
          return new Dog();
      }
  };

  // Client Code
  class Client {
      Parent* p; // Expects a Parent object
  public:
      Client(Parent* obj) : p(obj) {}
      void takeAnimal() {
          Animal* a = p->getAnimal(); // Client expects Animal
          // ... uses 'a' as an Animal
      }
  };

  // Main Function Usage:
  // With Child object:
  // Child c_obj;
  // Client client_child(&c_obj);
  // client_child.takeAnimal(); // Output: Child Retrurning Dog Instance
  // (Animal* a can correctly point to a Dog object)

  // With Parent object:
  // Parent p_obj;
  // Client client_parent(&p_obj);
  // client_parent.takeAnimal(); // Output: Parent Returning Animal Instance
  ```

  - **Explanation:** The `Child` class's `getAnimal` method returning a `Dog*` (a narrower type) is acceptable because an `Animal*` reference in the client can still point to a `Dog` object. If `Child` were to return an `Organism*` (a broader type than `Animal`), it would cause a compilation error.

**c. Exception Rule:**

- **Rule:** An overridden method in a child class can throw the **same exceptions as the parent method, or narrower (subtype) exceptions**, but it **cannot throw broader (ancestor) exceptions**.
- **C++ Exception Hierarchy:**
  - `std::exception` (base)
    - `std::logic_error` (child)
      - `std::out_of_range` (child of `logic_error`)
    - `std::runtime_error` (child)
      - (Various runtime error subtypes)
- **Reasoning:**

  - A client typically uses a `try-catch` block and expects to catch specific exceptions based on the parent's contract.
  - If the parent's `m1` method throws `std::runtime_error`, the client will have a `catch (std::runtime_error e)` block.
  - If the child's `m1` method throws the same `std::runtime_error` or a narrower exception (e.g., a specific subtype of `runtime_error`), the client's `catch` block can handle it.
  - However, if the child's `m1` method throws a **broader exception** (e.g., `std::exception` itself, or a completely different branch like `std::logic_error` when `std::runtime_error` was expected), the client's `catch` block for `std::runtime_error` will **not** catch it. This leads to an unhandled exception and code termination.

  **Code Example (Exception Rule Violation):**

  ```cpp
  // Exception Hierarchy (Conceptual, matches standard C++ exceptions)
  // std::exception
  //   |-- std::logic_error
  //   |     |-- std::out_of_range
  //   |-- std::runtime_error

  // Parent Class
  class Parent {
  public:
      // Method declared to potentially throw a logical_error (not explicitly written 'throw', but 'noexcept(false)')
      virtual void getValue() noexcept(false) {
          std::cout << "Parent Error" << std::endl;
          throw std::logic_error("Parent Throws Logic Error"); // Parent throws a specific type of logic_error
      }
  };

  // Child Class
  class Child : public Parent {
  public:
      // Child throws a narrower exception (subtype of logic_error) - ALLOWED
      void getValue() override noexcept(false) {
          std::cout << "Child Error" << std::endl;
          throw std::out_of_range("Child Throws Out Of Range Error");
      }

      // Child attempting to throw a broader or different branch exception (e.g., runtime_error) - NOT ALLOWED by LSP
      /*
      void getValue() override noexcept(false) {
          std::cout << "Child Error - Runtime" << std::endl;
          throw std::runtime_error("Child Throws Runtime Error");
      }
      */
  };

  // Client Code
  class Client {
      Parent* p;
  public:
      Client(Parent* obj) : p(obj) {}
      void takeValue() {
          try {
              p->getValue(); // Calls the method, potentially throwing an exception
          } catch (const std::logic_error& e) { // Client expects to catch logic_error
              std::cout << "Logical Error Exception Occurred: " << e.what() << std::endl;
          }
          // No catch for std::runtime_error
      }
  };

  // Main Function Usage:
  // With Child (throwing out_of_range):
  // Child c_obj;
  // Client client_child(&c_obj);
  // client_child.takeValue(); // Output: Logical Error Exception Occurred: Child Throws Out Of Range Error
  // (Handled because out_of_range is a logic_error)

  // With Child (attempting to throw runtime_error - NOT ALLOWED by LSP):
  // Child c_obj_runtime;
  // Client client_child_runtime(&c_obj_runtime);
  // client_child_runtime.takeValue(); // Program terminates due to "uncaught exception of type std::runtime_error"
  ```

  - **Explanation:** When the `Child` throws an `std::out_of_range` error, the `Client`'s `catch (const std::logic_error& e)` block successfully handles it because `std::out_of_range` is a subtype of `std::logic_error`. However, if the `Child` were to throw `std::runtime_error`, the client's `catch` block (which only expects `std::logic_error`) would not catch it, leading to program termination.

---

#### 2. Property Rule

The Property Rule focuses on maintaining the consistent state and behavior of a class throughout its hierarchy. It has two sub-rules:

**a. Class Invariant:**

- **Definition:** An **invariant** is any fact or rule that is **always true for a given class**. It's a conceptual rule, often written as a comment, that the class and its descendants are responsible for upholding.
- **Rule:** If a parent class has an invariant (rule `R1`), any child class inheriting from it must **either follow `R1` exactly or strengthen it**, but **never weaken or break it**. If the child breaks the rule, it's not substitutable.
- **Example (Bank Account - Balance Invariant):**

  - **Parent Class:** `Account` with a `balance` variable.
  - **Invariant:** "Balance can never be negative" (i.e., `balance >= 0`).
  - The `Account` class enforces this by throwing exceptions if an attempt is made to set a negative initial balance or withdraw more than available funds.
  - **Violating Child Class:** `CheatAccount`.
  - The `CheatAccount`'s `withdraw` method allows the balance to go negative (e.g., if `balance = 100` and `amount = 200`, it directly subtracts, making `balance = -100`).
  - **LSP Violation:** A client interacting with an `Account` expects the balance to never be negative. If given a `CheatAccount`, this expectation is violated, potentially causing client code to fail.

  **Code Example (Class Invariant Violation):**

  ```cpp
  // Parent Class: BankAccount
  class BankAccount {
      double balance;
  public:
      // Invariant: Balance cannot be negative
      BankAccount(double b) : balance(0) {
          if (b < 0) {
              throw std::invalid_argument("Balance cannot be negative");
          }
          balance = b;
      }

      virtual void withdraw(double amount) {
          if (balance - amount < 0) {
              throw std::runtime_error("Insufficient funds");
          }
          balance -= amount;
          std::cout << "Amount withdrawn: " << amount << std::endl;
      }
  };

  // Child Class: CheatAccount (violates invariant)
  class CheatAccount : public BankAccount {
  public:
      CheatAccount(double b) : BankAccount(b) {}

      void withdraw(double amount) override {
          // Breaks the invariant by allowing balance to go negative
          // if (balance - amount < 0) check is REMOVED or IGNORED
          // The speaker implies direct subtraction without check here for violation example
          // If the parent's balance is protected/private, this would need direct access or a setter
          // For example, in the code snippet, it's simplified to directly subtract.
          // Original code snippet shows `balance -= amount;` directly in `CheatAccount` `withdraw`
          // and states it allows negative balance. This implies direct access/modification.
          std::cout << "Amount withdrawn (Cheat): " << amount << std::endl;
      }
  };

  // Main Function Usage (conceptual):
  // BankAccount acc(100);
  // acc.withdraw(50); // Works fine
  // acc.withdraw(100); // Throws Insufficient funds

  // CheatAccount cheatAcc(100);
  // cheatAcc.withdraw(200); // This would allow withdrawal and balance would become -100, violating LSP
  ```

  - **Explanation:** The `BankAccount` ensures its invariant (`balance >= 0`) by checking before withdrawing. The `CheatAccount` overrides `withdraw` to allow negative balances, thus breaking the invariant and violating LSP.

**b. History Constraint:**

- **Definition:** History constraint means that the **historical state or behavior defined by the parent class should not be changed by the child class**. It's a state that the parent wants to always remain true.
- **Rule:** A child class must **respect the historical constraints** set by its parent.
- **Example (Bank Account - Withdrawal Allowed History):**
  - **Parent Class:** `Account` with a `withdraw` method.
  - **History Constraint:** "Withdrawal should always be allowed" (meaning the `withdraw` method should always perform a withdrawal).
  - **Violating Child Class:** `FixedDepositAccount`.
  - A `FixedDepositAccount` is a type of bank account, but it typically **does not allow withdrawals** before maturity.
  - The `FixedDepositAccount` overrides the `withdraw` method but **throws an exception** (e.g., `Throw New SomeException`) to prevent withdrawal.
  - **LSP Violation:** The client expects `withdraw` to perform a withdrawal. If given a `FixedDepositAccount`, this historical behavior is broken, violating LSP. This was the exact reason why `FixedDepositAccount` was not substitutable in the original LSP example.
- **Side Note (Immutability):** If a parent class declares certain behaviors or variables as **immutable** (cannot be changed), and a child class makes them **mutable**, this also constitutes a breakage of the history constraint. In C++, `final` keyword can make a class or method immutable.

  **Code Example (History Constraint Violation):**

  ```cpp
  // Parent Class: BankAccount
  class BankAccount {
      double balance;
  public:
      // History Constraint: Withdrawal should always be allowed
      BankAccount(double b) : balance(b) {}
      virtual void withdraw(double amount) {
          // ... (standard withdrawal logic)
          std::cout << "Withdrew " << amount << " from BankAccount." << std::endl;
      }
  };

  // Child Class: FixedDepositAccount (violates history constraint)
  class FixedDepositAccount : public BankAccount {
  public:
      FixedDepositAccount(double b) : BankAccount(b) {}
      void withdraw(double amount) override {
          // Breaks history constraint: Withdrawals are not allowed
          throw std::runtime_error("Withdrawal not allowed from Fixed Deposit Account.");
      }
  };

  // Main Function Usage:
  // BankAccount normalAcc(1000);
  // normalAcc.withdraw(100); // Works as expected

  // FixedDepositAccount fdAcc(1000);
  // fdAcc.withdraw(100); // Throws std::runtime_error, breaking client's expectation
  ```

  - **Explanation:** The `BankAccount` has a history where `withdraw` is always allowed. The `FixedDepositAccount` breaks this history by throwing an exception when `withdraw` is called, making it non-substitutable under LSP.

---

#### 3. Method Rule

The Method Rule concerns the conditions related to a method's execution. It includes two sub-rules:

**a. Precondition:**

- **Definition:** A **precondition** is any condition that **must be true before a method runs**. Like invariants, it's a conceptual rule.
- **Rule:** When overriding a method, the child class can **either follow the parent's precondition exactly or weaken it**, but it **cannot strengthen (add more constraints to) the precondition**.
- **Reasoning:**
  - A client interacts with the parent's contract and knows its preconditions (e.g., `m1` expects numbers between 0 and 5).
  - If the child's overridden `m1` method still accepts 0-5, or weakens the precondition (e.g., accepts 0-10), the client's code will still work. The client will continue to provide numbers within its known stricter range (0-5), which the child (accepting 0-10) can easily handle. Even if the client _accidentally_ provides a number like 6 or 7, the child's _weakened_ precondition allows it, so the client's code won't break.
  - However, if the child's `m1` method **strengthens** the precondition (e.g., only accepts 0-3), then a number like 4 (which is valid for the parent) would cause the child to throw an exception, breaking LSP.
- **Practical Example (Password Length):**

  - **Parent Class:** `User` with a `createPassword` method.
  - **Precondition:** Password length must be `>= 8` characters.
  - **Child Class:** `AdminUser`.
  - If `AdminUser` overrides `createPassword` and makes the precondition `password length >= 6`, this is a **weakening** of the precondition.
  - **LSP Compliance:** A client knows `User` requires `>= 8` length. If given `AdminUser`, the client will still provide an 8-character password, which `AdminUser` (allowing >=6) can handle. Even if the client provides a 7-character password (which `User` would reject), `AdminUser` accepts it, thus preventing client code from breaking, adhering to LSP.
  - **Note:** The speaker mentions that in some very strict use cases, the precondition might need to be exactly the same (neither weakened nor strengthened).

  **Code Example (Precondition):**

  ```cpp
  // Parent Class: User
  class User {
  public:
      // Precondition: Password must be 8 characters long (or more)
      virtual void setPassword(const std::string& password) {
          if (password.length() < 8) {
              throw std::invalid_argument("Password must be at least 8 characters long.");
          }
          // Set password logic
          std::cout << "User password set." << std::endl;
      }
  };

  // Child Class: AdminUser (weakens precondition)
  class AdminUser : public User {
  public:
      void setPassword(const std::string& password) override {
          // Weakened precondition: Password must be at least 6 characters long
          if (password.length() < 6) {
              throw std::invalid_argument("Admin password must be at least 6 characters long.");
          }
          // Set password logic
          std::cout << "AdminUser password set." << std::endl;
      }
  };

  // Main Function Usage (conceptual):
  // User u;
  // u.setPassword("pass123"); // Throws error (length 7 < 8)
  // u.setPassword("password"); // OK

  // AdminUser au;
  // au.setPassword("pass123"); // OK (length 7 >= 6) - This demonstrates weakening
  // au.setPassword("pass");   // Throws error (length 4 < 6)
  ```

  - **Explanation:** The `User` class requires a password of at least 8 characters. The `AdminUser` weakens this precondition to 6 characters. A client expecting `User` behavior would still pass 8+ char passwords, which `AdminUser` handles. If the client passes a 7-char password (which would fail for `User`), `AdminUser` accepts it, thus adhering to LSP by not breaking the client's expectations (as the client's original valid inputs still work, and even some invalid ones become valid).

**b. Postcondition:**

- **Definition:** A **postcondition** is any condition that **must be true after a method has run**.
- **Rule:** When overriding a method, the child class can **either follow the parent's postcondition exactly or strengthen it**, but it **cannot weaken it**. This is the exact opposite of the Precondition rule.
- **Reasoning:**

  - A client expects a certain outcome _after_ a method is called based on the parent's contract.
  - If the parent's `break` method promises the car will slow down, the client relies on this.
  - If the child's `break` method (e.g., `ElectricCar`) _also_ makes the car slow down, it's fine. If it _strengthens_ the postcondition (e.g., car slows down AND battery charges), it's also fine, as the basic promise is fulfilled.
  - However, if the child's `break` method **weakens** the postcondition (e.g., car _does not_ slow down, or speeds up), it would directly violate the client's expectation and could be dangerous (e.g., a car not stopping when brakes are applied).

  **Code Example (Postcondition):**

  ```cpp
  // Parent Class: Car
  class Car {
  protected:
      int speed;
  public:
      Car() : speed(100) {}
      // Postcondition: Speed must reduce after break
      virtual void brake() {
          speed -= 20;
          if (speed < 0) speed = 0;
          std::cout << "Car speed reduced to " << speed << " after braking." << std::endl;
      }
  };

  // Child Class: HybridCar (strengthens postcondition)
  class HybridCar : public Car {
  private:
      int charge;
  public:
      HybridCar() : Car(), charge(50) {}
      void brake() override {
          // Fulfills parent's postcondition (speed reduces)
          Car::brake();
          // Strengthens postcondition: Charge must increase
          charge += 10;
          if (charge > 100) charge = 100;
          std::cout << "Hybrid car charge increased to " << charge << "%." << std::endl;
      }
  };

  // Main Function Usage (conceptual):
  // Car regularCar;
  // regularCar.brake(); // Speed reduces

  // HybridCar hybridCar;
  // hybridCar.brake(); // Speed reduces AND charge increases
  ```

  - **Explanation:** The `Car`'s `brake` method guarantees speed reduction. The `HybridCar`'s `brake` method not only reduces speed but also increases battery charge, thus strengthening the postcondition without violating the original guarantee. A client calling `brake` on either car will have the expectation of speed reduction fulfilled.

**LSP Conclusion:**
A child class is **not substitutable** for its parent if it:

- **Overrides a method but throws an exception** (like `FixedDepositAccount` for `withdraw`).
- **Overrides a method but leaves it empty**, implying it cannot perform the expected action.
- **Provides a hardcoded value** for a method that the client expects dynamic behavior from.

Following these guidelines ensures that a child class adheres to LSP and can indeed be substituted for its parent without breaking client code.

---

### Interface Segregation Principle (ISP)

The Interface Segregation Principle (ISP) is one of the "I" in SOLID.

**Definition:**
"**Many client-specific interfaces are better than one general-purpose interface**". This means it's better to have several smaller, focused interfaces rather than a single large, "fat" interface.

**Problem Statement:**
When a single general-purpose interface contains many methods, and you create child classes that implement this interface, many of these child classes might not need all the methods. Despite not needing them, they are **forced to implement** (override) all methods, often by throwing errors or leaving them empty, which violates LSP as well.
"**Clients should not be forced to implement methods that they don't need**".

**Example (Shape Interface Violation):**

1.  **Initial Design:** A general `Shape` abstract class (acting as an interface) is created.
    - It contains methods for both `Area()` and `Volume()`.
2.  **Child Classes:**
    - `Square` and `Rectangle` (2D shapes) inherit from `Shape`. They need to calculate `Area()`, but they **do not have a `Volume()`**.
    - `Cube` (3D shape) inherits from `Shape`. It needs both `Area()` and `Volume()`.
3.  **ISP Violation:**

    - Because `Shape` declares `Volume()`, `Square` and `Rectangle` are forced to implement `Volume()`.
    - They might implement `Volume()` by throwing an `InvalidArgument` error or just returning a default value, indicating it's not applicable.
    - This is problematic because 2D shapes legitimately don't have volume, but the `Shape` interface forces them to acknowledge it.

    **Code Example (ISP Violation):**

    ```cpp
    // General-purpose abstract class (interface)
    class Shape {
    public:
        virtual double Area() = 0;
        virtual double Volume() = 0; // Problematic for 2D shapes
    };

    // Square is forced to implement Volume()
    class Square : public Shape {
        double side;
    public:
        Square(double s) : side(s) {}
        double Area() override { return side * side; }
        double Volume() override {
            throw std::logic_error("Volume not applicable for a Square."); // Forced implementation
        }
    };

    // Rectangle is forced to implement Volume()
    class Rectangle : public Shape {
        double length, width;
    public:
        Rectangle(double l, double w) : length(l), width(w) {}
        double Area() override { return length * width; }
        double Volume() override {
            throw std::logic_error("Volume not applicable for a Rectangle."); // Forced implementation
        }
    };

    // Cube needs both
    class Cube : public Shape {
        double side;
    public:
        Cube(double s) : side(s) {}
        double Area() override { return 6 * side * side; }
        double Volume() override { return side * side * side; }
    };
    ```

**Solution (Segregating Interfaces):**
To adhere to ISP, the solution is to break down the large `Shape` interface into smaller, client-specific interfaces.

1.  Create `TwoDimensionalShape` interface with only `Area()` method.
2.  Create `ThreeDimensionalShape` interface with both `Area()` and `Volume()` methods.
3.  Now, `Square` and `Rectangle` inherit from `TwoDimensionalShape`, and `Cube` inherits from `ThreeDimensionalShape`.
4.  This way, no child class is forced to implement methods it doesn't need or use.

        **Code Example (ISP Solution):**
        ```cpp
        // Client-specific interface for 2D shapes
        class TwoDimensionalShape {
        public:
            virtual double Area() = 0;
        };

        // Client-specific interface for 3D shapes
        class ThreeDimensionalShape {
        public:
            virtual double Area() = 0;
            virtual double Volume() = 0;
        };

        // Square only implements 2D methods
        class Square : public TwoDimensionalShape {
            double side;
        public:
            Square(double s) : side(s) {}
            double Area() override { return side * side; }
        };

        // Rectangle only implements 2D methods
        class Rectangle : public TwoDimensionalShape {
            double length, width;
        public:
            Rectangle(double l, double w) : length(l), width(w) {}
            double Area() override { return length * width; }
        };

        // Cube implements 3D methods
        class Cube : public ThreeDimensionalShape {
            double side;
        public:
            Cube(double s) : side(s) {}
            double Area() override { return 6 * side * side; }
            double Volume() override { return side * side * side; }
        };
        ```

    ISP is generally considered one of the simpler SOLID principles to understand.

---

### Dependency Inversion Principle (DIP)

The Dependency Inversion Principle (DIP) is the "D" in SOLID.

**Definition:**
"**High-level modules should not depend on low-level modules. Rather, both should depend on abstractions**".

**Explanation:**
This means that high-level modules (which contain business logic) should not have direct dependencies on low-level modules (which handle system-specific operations like database interaction or file system access). Instead, an **abstraction layer** (an interface or an abstract class) should be introduced between them. Both high-level and low-level modules should depend on this abstraction.

- **High-level Module:** Deals with **business logic** (e.g., an Application or User Service).
- **Low-level Module:** Interacts directly with system resources (e.g., a Database, File System, External API).

**Problem Example (Violation of DIP):**

1.  **Scenario:** An `Application` (high-level module) needs to interact with a database.
2.  **Direct Dependence:** The `Application` directly uses concrete database classes like `Mongo_DB` and `SQL_DB`.
    - The `Application` class contains references to `Mongo_DB` and `SQL_DB` objects (a "has-a" relationship).
    - It also has specific methods like `saveToSQL(User)` and `saveToMongo(User)` that directly call methods on these concrete database objects.
3.  **Issue (Tight Coupling):**

    - This creates a **tight coupling** between the high-level `Application` and the low-level database modules.
    - If a database technology changes (e.g., switching from Mongo DB to Cassandra DB), the `Application` class itself must be modified.
    - This requires opening and changing the `Application` class, which **violates the Open/Closed Principle** (OCP). The `Application` is not open for extension (new database), but closed for modification.

    **Code Example (DIP Violation):**

    ```cpp
    // Low-level modules (concrete database implementations)
    class MySQLDatabase {
    public:
        void saveToSQL(const std::string& data) {
            std::cout << "Executing SQL query: Saving " << data << " to MySQL." << std::endl;
        }
    };

    class MongoDBDatabase {
    public:
        void saveToMongo(const std::string& data) {
            std::cout << "Executing MongoDB function: Saving " << data << " to MongoDB." << std::endl;
        }
    };

    // High-level module (User Service) - Violates DIP
    class UserService {
        MySQLDatabase* mysql_db; // Direct dependency
        MongoDBDatabase* mongo_db; // Direct dependency
    public:
        UserService() {
            mysql_db = new MySQLDatabase();
            mongo_db = new MongoDBDatabase();
        }

        void storeUserToSQL(const std::string& user) {
            mysql_db->saveToSQL(user); // Direct call
        }

        void storeUserToMongo(const std::string& user) {
            mongo_db->saveToMongo(user); // Direct call
        }
        // ... destructor to delete dbs
    };

    // Main Function Usage:
    // UserService service;
    // service.storeUserToSQL("JohnDoe");
    // service.storeUserToMongo("JaneDoe");
    // PROBLEM: If we want to add CassandraDB, UserService needs modification.
    ```

**Solution (Introducing Abstraction):**
To solve this, introduce an **abstraction (interface or abstract class)** between the high-level and low-level modules.

1.  Create an abstract `Database` class (or interface) with a `save()` method. This acts as the **Persistence layer**.
2.  `MySQL_Database` and `Mongo_DB_Database` (low-level modules) now **inherit from and implement** the `Database` abstract class, each providing their specific `save()` implementation.
3.  The `Application` (high-level module) now **depends only on the `Database` abstraction**, holding a reference to `Database* db`.
4.  The specific concrete database object (`MySQL_Database` or `Mongo_DB_Database`) is **injected** into the `Application` (e.g., via constructor injection). This is called **Dependency Injection**.
5.  The `Application` simply calls `db->save()`. It does not know or care which specific database implementation is being used at runtime due to **Polymorphism**.
6.  **Benefit:** If a new database (e.g., Cassandra DB) is introduced, you only need to create a new class `Cassandra_DB` that implements the `Database` interface. The `Application` class remains unchanged, adhering to the OCP.

    **Code Example (DIP Solution):**

    ```cpp
    // Abstraction (Interface/Abstract Class)
    class Database {
    public:
        virtual void save(const std::string& data) = 0; // Pure virtual function
        virtual ~Database() {} // Virtual destructor for proper cleanup
    };

    // Low-level modules (concrete implementations depend on abstraction)
    class MySQLDatabase : public Database {
    public:
        void save(const std::string& data) override {
            std::cout << "Executing SQL query: Saving " << data << " to MySQL." << std::endl;
        }
    };

    class MongoDBDatabase : public Database {
    public:
        void save(const std::string& data) override {
            std::cout << "Executing MongoDB function: Saving " << data << " to MongoDB." << std::endl;
        }
    };

    // High-level module (User Service depends on abstraction)
    class UserService {
        Database* db; // Depends on abstraction
    public:
        // Dependency Injection: Database object is passed in
        UserService(Database* database) : db(database) {}

        void storeUser(const std::string& user) {
            db->save(user); // Calls the abstract method, specific implementation determined at runtime
        }
        // ... destructor to delete db if owned
    };

    // Main Function Usage:
    // MySQLDatabase mysql_obj;
    // UserService mysql_service(&mysql_obj);
    // mysql_service.storeUser("JohnDoe");

    // MongoDBDatabase mongo_obj;
    // UserService mongo_service(&mongo_obj);
    // mongo_service.storeUser("JaneDoe");

    // If CassandraDB is added, simply create a new CassandraDatabase class
    // and inject it, UserService remains unchanged.
    ```

**Key Relationship with OCP:**
"**If Open-Closed Principle is the target, then Dependency Inversion Principle is the solution**". DIP enables OCP by allowing high-level modules to be extended (support new low-level implementations) without modification.

**Real-Life Analogy for DIP:**

- **CEO (High-level module):** Focuses on high-level strategy and business goals.
- **Developers/QAs (Low-level modules):** Perform specific, detailed tasks.
- **Manager (Abstraction/Interface):** Acts as the intermediary.
- The CEO gives instructions to the Manager. The Manager then delegates to Developers/QAs. Developers/QAs report back to the Manager. The CEO does not need to know the individual Developers/QAs or their specific work methods. If Developers/QAs change, the CEO's interaction with the Manager remains the same. This mirrors how the `UserService` interacts with the `Database` abstraction, regardless of the concrete database implementation.

---

### General Discussion and Conclusion on SOLID Principles

**Mapping Real-World Objects to Programming:**

- **Real-life objects are complicated** and show many behaviors (e.g., a human eats, sleeps, sings).
- However, a human doesn't exhibit _all_ behaviors in _every scenario_ (e.g., at the office, a human works, doesn't sleep).
- **In programming, scenarios are analogous to applications**.
- When a real-life object (like a `User`) is mapped to a program, we only implement the functionalities relevant to that specific application.
  - _Example:_ In an Ola/Uber application, a `User` object might have `bookRide()`, `cancelRide()`.
  - In a Swiggy/Zomato application, the same `User` object would have `orderFood()`, `cancelFood()`.
- The `User` object is still complex, but for a given application, we only need and show the specific methods relevant to its context. This aligns with principles like Single Responsibility, where an object has one reason to change, tied to a specific business context.

**Principles vs. Laws (Trade-offs):**

- SOLID principles are **ideals** or "principles," not strict "laws".
- It is often **very difficult, or even impossible, for real-world applications to perfectly follow all SOLID principles**.
- Striving for a code that adheres to all SOLID principles is highly admirable and results in amazing, ideal code.
- However, in practice, there is often a **trade-off**. Just as in Data Structures and Algorithms (DSA) there's a trade-off between time and space complexity (e.g., using a hash map for speed might increase space), in software design, there can be a trade-off between strictly following SOLID principles and handling **business logic**.
- **Business logic is paramount** because it generates revenue for the application. Sometimes, to accommodate complex business logic, you might have to **slightly deviate or "break" a SOLID principle**.
- The goal is to **try to follow the principles as much as possible** to achieve cleaner, more expandable, and scalable code, while understanding that sometimes a pragmatic decision needs to be made for business reasons.

---

Here are comprehensive notes from the video "Build Google Docs | A Real-World LLD Project | Document Editor LLD |" uploaded on the YouTube channel "Coder Army":

---

### **Introduction to Low-Level Design (LLD)**

The video begins an LLD series, focusing on applying theoretical concepts like **SOLID Design Principles** and **Object-Oriented Principles** to a practical example. The aim is to provide an introduction to approaching LLD interview problems and creating a low-level design for a given problem. The speaker's method involves starting with a **bad design** and then iteratively improving it to achieve a "better" or more "arguably better" design.

### **Problem Statement: Document Editor**

The core problem is to design a **Document Editor**, similar to Google Docs.

**Initial Features to Support**:

- The editor will basically be a front-end view where users can **edit a document**.
- Users can **insert text** (e.g., "Text 1", "Text 2").
- Users can **insert images**.
- The document editor, initially, will only support text and images.

**Scalability Requirement**:

- The editor must be **scalable**. This means it should easily support new elements in the future, such as:
  - **Tables**
  - **Videos**
  - **Fonts**
  - **New lines**, **tabs**, **spaces**
  - Other editing functionalities like **italics**, **bold**, **underline**, **font colours**

The goal is not to implement all features in a typical 30-minute interview, but to explain the design architecture for a couple of features and ensure it's easily **extensible**.

### **Approaching LLD Problems: Design Approaches**

When approaching an LLD problem, there are two main design approaches:

1.  **Top-Down Approach**:

    - This approach starts by designing the **highest-level, top-most objects** of the application first.
    - For example, in the Document Editor, one would first design the main application object and then gradually create smaller, dependent objects within it.

2.  **Bottom-Up Approach**:
    - This approach is the **opposite** of top-down.
    - It involves first creating **all the small objects** and their dependencies.
    - After the smaller components are established, the larger objects are then created, and their dependencies with the smaller objects are built.
    - **The speaker generally prefers the **bottom-up approach\*\* for LLD questions and notes that most developers use it.
    - However, some questions might be better suited for a top-down approach, which will be discussed when those specific questions arise.
    - **For this Document Editor problem, the **bottom-up approach** will be used**.

### **Initial "Bad" Design of the Document Editor**

The speaker starts by creating an initial, "bad" design, which will then be incrementally improved.

**Core Idea**: Put everything into a single `DocumentEditor` class.

**Class: `DocumentEditor`**

- **Variables/Data Members**:

  - `vector<string> documentElements;`: A single list (vector) to store both text and images.
    - **Reasoning for a single list**: If separate lists were used for text and images, it would be difficult to determine the user's intended order of elements.
    - **Data type**: Both text and image paths are stored as `string`. For images, the path is stored, and the image can be rendered from this path.
    - `string renderedDocument;`: A string to store the entire rendered document, to avoid re-rendering repeatedly when operations like "Save to file" are performed.

- **Methods/Member Functions**:
  - `addText(string text)`:
    - Takes a `string` (text) as input.
    - Pushes the text into the `documentElements` vector.
  - `addImage(string path)`:
    - Takes a `string` (image path) as input.
    - Pushes the image path into the `documentElements` vector.
  - `renderDocument()`:
    - This method is responsible for generating the visual output of the document.
    - **Business Logic (Implementation Details)**:
      - **Check for existing rendered document**: If `renderedDocument` (the class member) is not empty, it means the document has already been rendered, so it directly returns the `renderedDocument` string, avoiding re-computation.
      - **Looping through elements**: If `renderedDocument` is empty, it initializes an empty `string result` and iterates through the `documentElements` list.
      - **Distinguishing Text vs. Image (Hacky Method)**:
        - To determine if a current string in the vector is an image or text, it checks two conditions:
          1.  The string's `size()` must be greater than 4.
          2.  The string must end with `.jpg` or `.png`.
        - If both conditions are true, it's assumed to be an image.
      - **Rendering Logic**:
        - **For Images**: Renders the image by printing `[Image...]` followed by the image path and a new line (e.g., `[Image.../path/to/image.jpg]\n`). The speaker notes that in a real application, one might use C++ or Java libraries to literally render the image to console or file.
        - **For Text**: Renders the text by simply appending the text with a new line (e.g., `Hello World\n`).
      - **Accumulation and Return**: Appends the rendered output for each element to the `result` string. Once the loop finishes, it stores the final `result` in the `renderedDocument` member variable and returns it.
    - **Note on Business Logic**: The speaker states that in LLD interviews, the quality of the "business logic" (how something is implemented, like the rendering method) is less important than the "architecture" (how the code is structured and optimized), as business logic can change.
  - `saveToFile()`:
    - This method is responsible for saving the rendered document to a file.
    - **Implementation Details (using C++ `ofstream`)**:
      - Opens a file named `document.txt`.
      - Calls the `renderDocument()` method to get the complete rendered document string.
      - Writes this string into the opened file.
      - Closes the file.
      - Prints a success message: "Document saved successfully".
      - Includes basic error handling for file opening (prints "Unable to open file" in case of failure), noting that a `try-catch` block could also be used.
    - **Note**: The speaker explicitly states that knowledge of file handling specifics is not crucial for understanding the LLD concept here.

**Client Code (`main` function)**:

- Creates an object of `DocumentEditor`: `DocumentEditor editor;`.
- Adds elements: `editor.addText("Hello World");`, `editor.addImage("path/to/image.jpg");`, `editor.addText("This is a document editor");`.
- Renders and prints to console: `cout << editor.renderDocument();`.
- Saves to file: `editor.saveToFile();`.

### **Problems with the Initial "Bad" Design**

The speaker identifies several issues with this single-class design, particularly in relation to **SOLID Design Principles**:

1.  **Violation of Single Responsibility Principle (SRP)**:

    - **SRP**: A class should have only one reason to change.
    - **Violation**: The `DocumentEditor` class is responsible for too many things:
      - Adding text and images.
      - Rendering the document.
      - Saving the document to a file.
    - This means the class has multiple reasons to change, directly breaking SRP.

2.  **Violation of Open/Closed Principle (OCP)**:

    - **OCP**: Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.
    - **Violation**: To support new elements (e.g., videos, tables, new line, bold, italics, font colour), the existing `DocumentEditor` class would need to be **modified** by adding new methods or altering existing logic. This is not "closed for modification" for new functionalities.

3.  **Other SOLID Principles Not Applicable (Yet)**:
    - Liskov Substitution Principle (LSP), Dependency Inversion Principle (DIP), and Interface Segregation Principle (ISP) are not broken in this design simply because there is only **one class**, so these principles, which deal with relationships between multiple classes/interfaces, don't apply.

### **Improving the Design: Towards a Better Architecture**

The goal of the improved design is to adhere to SRP and OCP, and if other SOLID principles naturally become applicable, they should also be followed.

**Key Strategy**: Extract responsibilities into separate classes and leverage **polymorphism**.

#### **Step 1: Handling Document Elements with Polymorphism**

- **Problem**: The `documentElements` list currently stores `string`, making it difficult to add new element types scalably.
- **Solution**: Introduce a **Document Element Hierarchy** using an **abstract class** or **interface**.
  - **Abstract Class: `DocumentElement`**
    - This acts as a "contract" or an abstraction.
    - Contains a single **abstract method**: `render()`.
    - **Responsibility**: Defines that every document element must know how to render itself.
  - **Child Classes (Concrete Implementations) of `DocumentElement`**:
    - **`TextElement`**:
      - Inherits `DocumentElement`.
      - **Overrides** the `render()` method to render text simply by returning the text itself.
      - Example: `return text_content;`.
    - **`ImageElement`**:
      - Inherits `DocumentElement`.
      - **Overrides** the `render()` method to render an image path (e.g., `[Image.../path/to/image.jpg]`).
      - Example: `return "[Image..." + image_path + "]";`.
    - **New Scalable Elements**:
      - To demonstrate OCP, new elements like `NewLineElement` and `TabSpaceElement` are introduced.
      - **`NewLineElement`**: Inherits `DocumentElement`, `render()` returns a new line character (`\n`).
      - **`TabSpaceElement`**: Inherits `DocumentElement`, `render()` returns a tab character (`\t`).
      - **Future elements**: `Font`, `Italics`, `Bold`, `Underline` can be easily added as new classes inheriting `DocumentElement`, each implementing its specific `render()` logic. For example, `Bold` would take text as input and render it as bold.

#### **Step 2: Creating a Dedicated Document Class for Element Management**

- **Problem**: The `DocumentEditor` was managing the list of elements and their CRUD (Create, Read, Update, Delete) operations.
- **Solution**: Create a `Document` class responsible solely for managing the collection of `DocumentElement`s.
  - **Class: `Document`**
    - **Relationship**: `Document` **has a** (1:Many relationship) `DocumentElement`. This is represented by a list (vector) of `DocumentElement` pointers.
    - **Variables**:
      - `vector<DocumentElement*> elements;`: A list to store pointers to `DocumentElement` objects.
    - **Methods**:
      - `addElement(DocumentElement* el)`:
        - Takes a `DocumentElement` object (or a pointer to it) as input.
        - Pushes the element into the `elements` list.
        - **Responsibility**: Handles adding new elements to the document.
      - `render()`:
        - **Responsibility**: This method in `Document` **does not render itself**. Instead, it **delegates** the rendering task to its contained `DocumentElement` objects.
        - **Logic**:
          1.  Initialises a `string result`.
          2.  Loops through the `elements` list (which contains `DocumentElement` pointers).
          3.  For each `element` in the list, it calls `element->render()`.
          4.  Because of **polymorphism**, the correct `render()` method (e.g., `TextElement::render()` or `ImageElement::render()`) will be dynamically called at runtime based on the actual type of the `element`.
          5.  Appends the result of each element's rendering to `result`.
          6.  Returns the `result` string.
        - **Benefit**: `Document` doesn't need to know _how_ to render each specific element; it only knows _that_ each element _can_ render itself. This demonstrates **delegation**.

#### **Step 3: Creating a Persistence Hierarchy for Saving**

- **Problem**: The `DocumentEditor` was directly responsible for saving to file. This violates SRP.
- **Solution**: Introduce a **Persistence Hierarchy** to handle saving mechanisms.
  - **Abstract Class: `Persistence`**
    - An abstract class to define the contract for saving.
    - Contains a single **abstract method**: `save(string documentContent)`.
    - **Responsibility**: Every concrete persistence mechanism must know how to save the provided `documentContent` string. The `documentContent` is the rendered document string.
  - **Child Classes (Concrete Implementations) of `Persistence`**:
    - **`FileStorage`**:
      - Inherits `Persistence`.
      - **Overrides** `save()` to implement saving to a local file (similar to the bad design's `saveToFile()` logic).
    - **`DBStorage`**:
      - Inherits `Persistence`.
      - **Overrides** `save()` to implement saving to a database (e.g., establishing a SQL connection and writing queries). This makes the design extensible for different storage types.

#### **Step 4: Redefining the `DocumentEditor` Class**

- **Problem**: The `DocumentEditor` still directly held methods like `addText`, `addImage`, `renderDocument`, and `saveToFile`, even if they were internally delegating.
- **Solution**: The `DocumentEditor` class should primarily act as an **interface for the client**, delegating almost all its work.
  - **Class: `DocumentEditor`**
    - **Relationships**: `DocumentEditor` **has a** `Document` and `DocumentEditor` **has a** `Persistence`.
    - **Variables**:
      - `Document* doc;`: A pointer to a `Document` object.
      - `Persistence* storage;`: A pointer to a `Persistence` object.
      - `string renderedDocument;`: Still holds the rendered document for efficiency, similar to the bad design.
    - **Constructor**:
      - Takes `Document* document` and `Persistence* persistenceStorage` as arguments.
      - This allows the `DocumentEditor` to be initialised with specific implementations of `Document` (though currently only one concrete `Document` class) and, more importantly, **polymorphic `Persistence` objects** (e.g., `FileStorage` or `DBStorage`).
      - `this->doc = document;` and `this->storage = persistenceStorage;`.
    - **Methods**:
      - `addText(string text)`:
        - **Delegates** to `doc->addElement(new TextElement(text));`.
        - Creates a `New TextElement` object and passes it to the `Document` object's `addElement` method.
      - `addImage(string path)`:
        - **Delegates** to `doc->addElement(new ImageElement(path));`.
        - Creates a `New ImageElement` object and passes it to the `Document` object's `addElement` method.
      - `addNewLine()`:
        - **Delegates** to `doc->addElement(new NewLineElement());`.
      - `addTabSpace()`:
        - **Delegates** to `doc->addElement(new TabSpaceElement());`.
        - **Benefit**: Adding new element types (`addFoo()`) in `DocumentEditor` is simple and follows the pattern. `DocumentEditor` itself does not contain logic for _how_ to add or represent these elements; it only knows _what_ to add and _to whom_ to delegate.
      - `renderDocument()`:
        - **Checks `renderedDocument` for existing content** (same as bad design).
        - **Delegates** to `doc->render();`.
        - Stores the result in `this->renderedDocument` and returns it.
      - `saveDocument()` (renamed from `saveToFile()`):
        - **Delegates** to `storage->save(this->renderDocument());`.
        - Calls the `renderDocument()` method to get the content and passes it to the `storage` object's `save()` method.
        - **Polymorphism**: The `save()` method called will be either `FileStorage::save()` or `DBStorage::save()`, depending on which concrete `Persistence` object was passed into the `DocumentEditor`'s constructor.

#### **Client Code for Improved Design**:

- Creates `Document` object: `Document* doc = new Document();`.
- Creates `Persistence` object (e.g., `FileStorage`): `Persistence* fileStorage = new FileStorage();`.
- Creates `DocumentEditor` object, passing the `Document` and `Persistence` instances: `DocumentEditor editor(doc, fileStorage);`.
- Calls methods on the `editor` object: `editor.addText("Hello World");`, `editor.addNewLine();`, `editor.addTabSpace();`, `editor.addImage("my_image.png");`.
- Renders and prints: `cout << editor.renderDocument();`.
- Saves: `editor.saveDocument();`.
- **Role of Client**: The client now directly interacts only with the `DocumentEditor` and is unaware of the internal delegation and complex object hierarchy.

### **SOLID Principles Check for the Improved Design**

The speaker reviews the improved architecture against each of the SOLID principles:

1.  **Single Responsibility Principle (SRP)**:

    - **Followed**: Yes.
    - **Reasoning**:
      - **`Document` class**: Solely responsible for handling the list of `DocumentElement`s (adding, managing) and delegating rendering.
      - **`Persistence` hierarchy (`FileStorage`, `DBStorage`)**: Each concrete class is responsible only for its specific saving mechanism (e.g., `FileStorage` saves to file, `DBStorage` saves to database).
      - **`DocumentEditor` class**: Its responsibility is to act as the client-facing interface, holding functionality like `addText`, `addImage`, `renderDocument`, and `saveDocument`, but it **delegates** all actual work to other classes. Each class now has only one primary reason to change.

2.  **Open/Closed Principle (OCP)**:

    - **Followed**: Yes.
    - **Reasoning**:
      - To add new document elements (e.g., `NewLineElement`, `TabSpaceElement`, `BoldElement`), a **new class** simply needs to be created that inherits from `DocumentElement` and implements its `render()` method.
      - The existing `Document` and `DocumentEditor` classes **do not need to be modified** to support these new elements, making them open for extension but closed for modification.

3.  **Liskov Substitution Principle (LSP)**:

    - **Followed**: Yes.
    - **Reasoning**:
      - LSP states that subtypes should be replaceable with their parent types without affecting the correctness of the program.
      - The `Document` class stores a `list of DocumentElement`s. Whether a `TextElement` or `ImageElement` (subtypes) is passed into this list, the `Document` class (acting as the client for these elements) can still call `render()` on them, and the behaviour is as expected.
      - The `Document` doesn't differentiate between `TextElement` and `ImageElement` when calling `render()`, fulfilling the substitutability.

4.  **Interface Segregation Principle (ISP)**:

    - **Followed**: Yes.
    - **Reasoning**:
      - ISP suggests that clients should not be forced to depend on interfaces they do not use, meaning interfaces should be small and specific.
      - The `DocumentElement` interface/abstract class has only one method (`render()`).
      - The `Persistence` interface/abstract class also has only one method (`save()`).
      - Neither interface forces its concrete implementations (subtypes) to implement unnecessary methods, making them minimal and client-specific.

5.  **Dependency Inversion Principle (DIP)**:
    - **Followed**: Yes.
    - **Reasoning**:
      - DIP states that high-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.
      - **`Document` and `DocumentElement`**: The `Document` (high-level module) does not directly interact with `TextElement` or `ImageElement` (low-level modules). Instead, both depend on the `DocumentElement` abstract class (abstraction/interface). The `Document` knows it can call `render()` on any `DocumentElement`, and the concrete elements know they must implement `render()`.
      - **`DocumentEditor` and `Persistence`**: Similarly, the `DocumentEditor` (high-level) does not directly interact with `FileStorage` or `DBStorage` (low-level). It depends on the `Persistence` abstract class, which serves as the abstraction. This ensures loose coupling.

### **Further Design Refinements and Counter-Questions**

Despite the significant improvements, the speaker acknowledges potential counter-questions in an LLD interview, indicating that no design is truly "perfect".

**Counter-Question 1: `DocumentEditor`'s "Knowledge"**

- **Problem**: Even though `DocumentEditor` delegates its work, it still _possesses_ all the methods like `addText`, `addImage`, `renderDocument`, and `saveDocument`.
- **Implication**: `DocumentEditor` still has "knowledge" about the functionalities of other classes (e.g., if `Document::render()` were removed, `DocumentEditor::renderDocument()` would also need to change). This means it has more than one "reason to know why it might change," which can be argued as a subtle violation of SRP, or at least a point of high coupling.
- **Speaker's Stance**: This is a "thin line" and depends on interpretation. SOLID principles are "principles," not "laws," and often involve trade-offs. If the team or interviewer agrees it's acceptable due to delegation, it is. If not, further refinement is needed.

**Counter-Question 2: `Document` Class's "Knowledge"**

- **Problem**: The `Document` class is responsible for managing elements (CRUD operations) AND it contains the `render()` method, even though it delegates the actual rendering.
- **Implication**: It's argued that `Document` should strictly be a **model class** (only handling CRUD operations on its data elements) and not concern itself with rendering.
- **Proposed Solution**: Extract the `render()` method from the `Document` class and put it into a new dedicated class: **`DocumentRenderer`**.
  - **Class: `DocumentRenderer`**
    - **Responsibility**: Solely responsible for rendering a `Document`.
    - **Relationship**: **Has a** `Document` object (`Document* doc;`).
    - **Method**: `render(Document* doc)`.
    - **New Requirement for `Document`**: To allow `DocumentRenderer` to access the elements for rendering, the `Document` class would need a new method: `getElements()`. This method would return the `vector<DocumentElement*>`.
    - **`DocumentRenderer::render()` Logic**:
      1.  Call `doc->getElements()` to retrieve the list of `DocumentElement`s.
      2.  Loop through the retrieved list.
      3.  For each element, call `element->render()`.
  - **Modified `Document` Class**: Now becomes a pure model class, only supporting `addElement` (and hypothetically `removeElement`, `updateElement`, `deleteElement`).
  - **Modified `DocumentEditor` Class**: This class's role would be further reduced to only `addText` and `addImage` methods (or similar client-facing "edit" functionalities). It would no longer have `renderDocument()` or `saveDocument()`.
  - **Modified Client's Role**: The client would then be responsible for orchestrating all these separate classes:
    - Client creates `DocumentEditor` (to add elements).
    - Client creates `DocumentRenderer` (to render the document).
    - Client creates `Persistence` (to save the document).
    - The client would call `editor.addText()`, then `renderer.render(doc)`, and finally `persistence.save(renderedString)`.

#### **Revised Architecture Diagram (Conceptual)**

- **DocumentElement Hierarchy** (Text, Image, NewLine, etc.)
- **Persistence Hierarchy** (FileStorage, DBStorage)
- **`Document`** (manages elements, provides `getElements()`)
- **`DocumentRenderer`** (renders a `Document`)
- **`DocumentEditor`** (adds/edits elements)
- **`Client`** (orchestrates all these classes)

### **Principle of Least Knowledge (Law of Demeter)**

The proposed refinement with `DocumentRenderer` introduces a new problem related to the **Principle of Least Knowledge**, also known as the **Law of Demeter**.

- **Principle of Least Knowledge (PoLK)**: "You should always talk to your **immediate friends**." This means a class should only interact with:
  1.  Itself.
  2.  Objects passed as arguments to its methods.
  3.  Objects it creates.
  4.  Its direct component objects (objects it "has a" relationship with).
- **Violation in `DocumentRenderer`**:
  - The `DocumentRenderer` has a `Document` object (`doc`).
  - Its `render()` method calls `doc->getElements()`. This is talking to a direct friend (`doc`).
  - However, after getting the `elements` list, it then iterates through `elements` and calls `element->render()`.
  - This is the violation: `DocumentRenderer` is now talking to the `DocumentElement`s, which are "friends of its friend" (the `DocumentElement`s are friends of `Document`, not `DocumentRenderer`).
- **Why is this problematic?**:
  - It **increases coupling**. The `DocumentRenderer` becomes indirectly dependent on the structure and methods of `DocumentElement`.
  - If `DocumentElement`'s rendering mechanism changes, `DocumentRenderer` might be affected, even though it's not a direct "friend".
- **Dilemma**: To follow PoLK, `DocumentRenderer` should not exist, and the `render()` method should be brought back into `Document` (which then breaks SRP and OCP to some extent, as discussed before).

### **Conclusion: Trade-offs in LLD**

The speaker reiterates that LLD often involves **trade-offs**. There is **no perfect design** in LLD; designs are always open-ended. The "best" design depends on agreement between the developer and the interviewer/manager, and on the specific context and priorities. The goal is to apply principles like SOLID and OOP as effectively as possible while understanding the compromises.

Here are detailed and comprehensive notes from the provided video, covering every important point, concept, explanation, example, and step-by-step process as taught by the speaker:

---

### **Strategy Design Pattern Explained**

This document provides a detailed explanation of the Strategy Design Pattern, drawing insights from the "Strategy Design Pattern Explained with Real-World Example | Design Patterns in LLD" video by Coder Army.

---

### **1. Introduction to Design Patterns**

- **What are Design Patterns?**

  - When developing applications, common problems arise repeatedly.
  - Many developers have faced and solved these same problems before.
  - Design patterns are **pre-defined, proven solutions** to recurring problems in software design.
  - They are the "wisdom" of experienced developers, offering a path to follow when a specific problem occurs in application development.
  - Essentially, they are particular patterns created by people to solve common application design problems.

- **Why Use Design Patterns?**
  - **Flexibility and Evolvability**: Applications are constantly evolving and changing; new features are always being added.
  - A flexible design ensures that integrating new features requires **minimal code changes** and **minimal time**.
  - Design patterns, along with **Object-Oriented Principles** and **SOLID Design Principles**, help achieve a more flexible and evolving design.
  - **Key takeaway**: "Change is the only constant" in software development, and designs must accommodate this change with minimal code modification.

### **2. The Core Philosophy of Design Patterns**

- **General Principle Across All Design Patterns**:
  - There are **23 official design patterns**, but they all convey a similar message in different ways.
  - **Identify and Separate**: In any application, there will be parts that are **static (unchanging)** and parts that are **dynamic (frequently changing)**.
  - The goal is to **extract the dynamic (changing) part** from the static part and store it separately, often in separate classes.
  - **Benefit**: When the application changes, only the dynamic part needs modification, leaving the static part unaffected.
  - Each design pattern implements this separation principle in its own unique way.

### **3. Understanding the Problem: The Pitfalls of Inheritance**

The video uses a **Robot Simulation Application** to illustrate the problem that the Strategy Design Pattern aims to solve, specifically highlighting the limitations of deep inheritance hierarchies.

- **Initial Robot Class Design (Inheritance-based)**:

  - A base `Robot` class is created.
  - **Core features (methods)** for every robot:
    - `walk()`: All robots can walk.
    - `talk()`: All robots can talk.
    - `projection()`: This is an **abstract method** because each robot will look different. Any class inheriting `Robot` must define its own `projection`.
  - **Initial Thought on Inheritance**: The speaker challenges the common perception that inheritance is always "good" and a fundamental pillar of Object-Oriented Concepts, stating that Strategy Design Pattern will demonstrate its downsides in certain scenarios.
    - Inheritance allows a child class to extend a parent, inheriting all parent features plus adding specific functionality. However, in complex scenarios, it can lead to problems.

- **Child Classes of `Robot`**:

  - `CompanionRobot` (inherits from `Robot`)
  - `WorkerRobot` (inherits from `Robot`)
  - Both override the `projection()` method to define their appearance, while `walk()` and `talk()` are inherited directly from `Robot`.
  - _Current state_: The application looks "lovely" with no immediate issues.

- **Problem 1: Integrating New Features (Fly Behavior)**

  - **Scenario**: A new type of robot, `SparrowRobot`, is introduced, which can `walk`, `talk`, and **fly**.
  - **Naive Inheritance Solution**: Create `SparrowRobot` that inherits from `Robot`, and add a new `fly()` method to it. `walk()` and `talk()` are inherited.
  - **Issue with Naive Solution**:
    - If many new flying robots (e.g., `CrowRobot`, `SparrowRobot`, etc.) are introduced, they would all need their own `fly()` method.
    - The **code for flying would be duplicated** across all these specific flying robot classes.
    - This violates the **DRY Principle (Do Not Repeat Yourself)**: Avoid copying and pasting code; write it once and reuse it.

- **Attempted Solution 1: Moving `fly()` to the Parent `Robot` Class**

  - **Idea**: To avoid duplication, move the `fly()` method directly into the base `Robot` class.
  - **Problem**: This would mean _all_ robots (including `CompanionRobot` and `WorkerRobot`, which aren't supposed to fly) would gain the `fly()` behavior, which is incorrect and undesirable.

- **Attempted Solution 2: Increasing Inheritance Hierarchy (First Level)**

  - **Idea**: Introduce an intermediate class to handle `fly` behavior.
  - The `Robot` class now has two direct child classes:
    - `FlyableRobot` (for robots that can fly)
    - `NonFlyableRobot` (for robots that cannot fly)
  - The `fly()` method is now defined in `FlyableRobot`, and `SparrowRobot` and `CrowRobot` inherit from `FlyableRobot`.
  - **Benefit**: The `fly()` method is now centralized in `FlyableRobot`, adhering to DRY.
  - **New Problem (Slippery Slope)**: What if there are different ways to fly?
    - **Scenario**: A `JetRobot` is introduced, which flies using a jet, not wings like `SparrowRobot`.
    - **Current Inheritance Issue**: `JetRobot` _could_ inherit from `FlyableRobot`, but its `fly()` method would have to override `FlyableRobot`'s `fly()` to implement jet propulsion.
    - **Duplication Reappears**: If multiple jet-powered robots (`JetRobot2`, `JetRobot3`) are added, the "fly with jet" code would again be duplicated in each specific robot class, breaking DRY again.

- **Attempted Solution 3: Further Increasing Inheritance Hierarchy (Second Level)**

  - **Idea**: Introduce more intermediate classes to differentiate flying behaviors.
  - `FlyableRobot` now has two direct child classes:
    - `FlyWithWings` (for robots like `SparrowRobot`, `CrowRobot`)
    - `FlyWithJet` (for robots like `JetRobot`, `JetRobot2`)
  - This approach handles the `fly` behavior variations for now.

- **The Escalating Problem: Hierarchy Complexity**

  - This problem of needing to extend the inheritance hierarchy will continue for _every_ varying behavior:
    - **Non-walking robots**: Introduce `Walkable` and `NonWalkable` branches.
    - **Talking behaviors**: Introduce `Talkable` and `NonTalkable` branches.
  - The combination of all these behaviors (e.g., a robot that can talk and fly but not walk; a robot that can walk but not talk or fly) leads to an explosion of classes and a **highly complex and unmanageable inheritance tree**.
  - This complex hierarchy looks like a deep, intertwined tree with many permutations and combinations.
  - **Core principle violated**: "The solution to inheritance is not more inheritance." Adding more inheritance to solve inheritance problems only makes it worse.

- **Summary of Problems Caused by Inheritance**:
  - **Poor code reuse**: Despite efforts, code duplication (e.g., `fly` logic for similar types of flying) can still occur or resurface.
  - **Many changes for new features**: Adding a new type of behavior or a robot with a unique combination requires significant modifications and expansion of the inheritance tree.
  - **Breaks Open/Closed Principle**: This SOLID design principle states that software entities (classes, modules, functions) should be **open for extension, but closed for modification**. The constant modification of existing hierarchies to accommodate new behaviors violates this.

### **4. The Solution: Strategy Design Pattern**

The Strategy Design Pattern offers a clean and flexible alternative to the inheritance-based approach.

- **Definition of Strategy Design Pattern**:

  - **"Define a family of algorithms, put them into separate classes so that they can be changed at run time."**
  - Initially, this definition might not be clear, but it will make sense after applying it to the Robot example.

- **Applying the Core Design Pattern Principle**:

  - Recall: Separate changing parts from unchanging parts.
  - In the `Robot` class:
    - **Changing methods**: `talk`, `walk`, `fly` (these methods caused complexity because their implementations varied).
    - **Relatively unchanging method**: `projection` (each robot defines its own, but the _concept_ of projection is consistently overridden, unlike the varied implementations of `talk`/`walk`/`fly`).
  - **Action**: **Extract `talk`, `walk`, and `fly` out of the `Robot` class.** Only `projection` should remain (for now).

- **Implementation Steps**:

  1.  **Create Abstract Interfaces/Classes for Behaviors (The Strategies)**:

      - Define abstract types for each changing behavior. In Java, these are **interfaces**; in C++, they are **abstract classes**.
      - `Talkable`: An interface with an abstract `talk()` method.
      - `Walkable`: An interface with an abstract `walk()` method.
      - `Flyable`: An interface with an abstract `fly()` method.
      - These interfaces define a "family of algorithms".

  2.  **Remove Behaviors from `Robot` Class**:

      - The `Robot` class now only contains the `projection` method.
      - The `talk`, `walk`, `fly` methods are deleted from `Robot`.

  3.  **Create Concrete Implementations of Behaviors (Concrete Strategies)**:

      - These classes provide the actual implementation for each behavior.
      - **For `Talkable`**:
        - `NormalTalk`: Implements `Talkable` and provides a "normal" talk.
        - `NoTalk`: Implements `Talkable` and provides a "no talk" behavior (not talking is still a behavior).
      - **For `Walkable`**:
        - `NormalWalk`: Implements `Walkable` for normal walking.
        - `NoWalk`: Implements `Walkable` for not walking.
      - **For `Flyable`**:
        - `NormalFly`: Implements `Flyable` for normal flying.
        - `NoFly`: Implements `Flyable` for no flying.
        - (Future: `FlyWithJet` could be another concrete implementation of `Flyable`)

  4.  **Establish Composition (Has-a Relationship) in `Robot` Class**:
      - The `Robot` class no longer _inherits_ behaviors. Instead, it **"has-a" relationship** with the behavior interfaces.
      - The `Robot` class will store **references** to `Talkable`, `Walkable`, and `Flyable` interfaces.
        - Example: `private Talkable talkBehavior;`
        - Example: `private Walkable walkBehavior;`
        - Example: `private Flyable flyBehavior;`
      - These references are typically **injected via the constructor** of the `Robot` class.
        - The constructor takes instances of `Talkable`, `Walkable`, and `Flyable` as parameters.
        - `public Robot(Walkable w, Talkable t, Flyable f) { this.walkBehavior = w; this.talkBehavior = t; this.flyBehavior = f; }`

- **Key Terminology**:

  - **Client**: The main class that uses these behaviors (e.g., the `Robot` class).
  - **Strategies**: The abstract interfaces/classes and their concrete implementations (e.g., `Talkable`, `Walkable`, `Flyable` and `NormalTalk`, `NoTalk`, etc.).

- **How Dynamic Behavior is Achieved**:

  - When a `Robot` object is created, specific concrete behavior objects (e.g., `new NormalTalk()`, `new NoFly()`) are passed into its constructor.
  - The `Robot` class's own `walk()`, `talk()`, and `fly()` methods become **"dumb methods"** or simply **"delegators"**.
  - They do not implement the behavior themselves; they **delegate the call** to the appropriate injected strategy object.
    - `walk()` method in `Robot`: `walkBehavior.walk();`
    - `talk()` method in `Robot`: `talkBehavior.talk();`
    - `fly()` method in `Robot`: `flyBehavior.fly();`
  - **Polymorphism** ensures that the correct concrete implementation (e.g., `NormalWalk.walk()` or `NoWalk.walk()`) is executed at runtime based on the object passed.
  - This allows for any **permutation and combination** of behaviors to be assigned to a robot dynamically.

- **Revisiting the Strategy Pattern Definition (Clarity Achieved)**:

  - **"It defines a family of algorithms"**: Refers to the `Talkable`, `Walkable`, `Flyable` interfaces, each representing a family of related behaviors.
  - **"Put them into separate classes"**: Refers to `NormalTalk`, `NoTalk`, `NormalWalk`, `NoWalk`, etc., which are distinct concrete classes for each behavior.
  - **"So that they can be changed at run time"**: Refers to the ability to pass different concrete strategy objects (e.g., `new NormalTalk()` vs. `new NoTalk()`) to the `Robot`'s constructor, thereby changing its behavior dynamically without altering the `Robot` class itself.

- **The Golden Rule of Strategy Pattern**:

  - **"Favor composition over inheritance."**
  - Composition (the "has-a" relationship) is generally better than inheritance ("is-a" relationship) because it solves the problems of complexity, tight coupling, and rigidity seen with deep inheritance hierarchies.

- **Adding New Behaviors (Open/Closed Principle)**:
  - To introduce a new flying behavior, e.g., "Fly with Jet," you simply:
    1.  Create a new concrete class `FlyWithJet` that implements the `Flyable` interface.
    2.  Define its unique `fly()` method.
  - **Crucially, the `Robot` class itself requires no changes!**
  - The `Robot` only knows to call `flyBehavior.fly()`. If a `FlyWithJet` object is passed, its `fly()` method will be called via polymorphism.
  - This perfectly supports the **Open/Closed Principle**: the system is **open for extension** (new behaviors can be added) but **closed for modification** (existing core classes like `Robot` don't need to change).

### **5. Code Walkthrough (Conceptual)**

The speaker provides a conceptual code structure reflecting the Strategy Pattern implementation.

- **Behavior Interfaces (Strategies)**:

  - `WalkableRobot` (interface)
    - `walk()` method
  - `TalkableRobot` (interface)
    - `talk()` method
  - `FlyableRobot` (interface)
    - `fly()` method

- **Concrete Behavior Classes (Concrete Strategies)**:

  - **For `WalkableRobot`**:
    - `NormalWalk` (overrides `walk()` to print "Walking Normally")
    - `NoWalk` (overrides `walk()` to print "Cannot Walk")
  - **For `TalkableRobot`**:
    - `NormalTalk` (overrides `talk()` to print "Talking Normally")
    - `NoTalk` (overrides `talk()` to print "Cannot Talk")
  - **For `FlyableRobot`**:
    - `NormalFly` (overrides `fly()` to print "Flying Normally")
    - `NoFly` (overrides `fly()` to print "Cannot Fly")

- **`Robot` Class (Client)**:

  - **Fields**:
    - `WalkableRobot walkBehavior;`
    - `TalkableRobot talkBehavior;`
    - `FlyableRobot flyBehavior;`
  - **Constructor**:
    - `public Robot(WalkableRobot w, TalkableRobot t, FlyableRobot f)`
    - Initializes `walkBehavior`, `talkBehavior`, `flyBehavior` with the passed arguments.
  - **Methods**:
    - `walk()`: `walkBehavior.walk();` (Delegates to injected behavior)
    - `talk()`: `talkBehavior.talk();` (Delegates to injected behavior)
    - `fly()`: `flyBehavior.fly();` (Delegates to injected behavior)
    - `projection()`: (Initially still an abstract method in `Robot`, to be overridden by subclasses like `CompanionRobot` or `WorkerRobot`)
      - _Note_: The speaker later demonstrates how even this can be refactored.

- **Client `main` method (Demonstration)**:
  - Shows how `Robot` objects are created with specific behaviors:
    - `Robot robot1 = new CompanionRobot(new NormalWalk(), new NormalTalk(), new NoFly());` (Companion Robot with normal walk, normal talk, no fly)
    - `Robot robot2 = new WorkerRobot(new NoWalk(), new NoTalk(), new NormalFly());` (Worker Robot with no walk, no talk, normal fly)
  - The `main` method can easily **dynamically change behaviors** by passing different concrete strategy objects in the constructor (e.g., `new NormalWalk()` to `new NoWalk()`).
  - Calling `robot1.walk()`, `robot1.talk()`, `robot1.fly()` will execute the behaviors based on the injected strategies.

### **6. Eliminating Remaining Inheritance (Full Composition)**

The speaker addresses the lingering question of why `CompanionRobot` and `WorkerRobot` still inherit from the `Robot` class in the previous example.

- **The Problematic `projection()` Method**:

  - The `projection()` method in `Robot` was abstract, forcing `CompanionRobot` and `WorkerRobot` to inherit `Robot` and override `projection()`. This still involved some inheritance.

- **Solution: Extract `projection()` as a Strategy**:

  1.  **Remove `projection()` from `Robot`**: Make the `Robot` class completely independent of any specific display logic.
  2.  **Create a `Projectable` Interface**: Define an interface `Projectable` with an abstract `projection()` method.
  3.  **Create Concrete `Projectable` Implementations**:
      - `CompanionProjection`: Implements `Projectable` for how a companion robot looks.
      - `WorkerProjection`: Implements `Projectable` for how a worker robot looks.
  4.  **Add `Projectable` to `Robot` via Composition**:
      - Add a `Projectable projectBehavior;` field to `Robot`.
      - Pass `Projectable` object in `Robot`'s constructor.
      - The `Robot`'s `projection()` method becomes `projectBehavior.projection();` (delegation).

- **Result: No Inheritance Needed for Robot Variations**:
  - Now, to create any robot, you simply instantiate the `Robot` class directly and pass all four behavior objects (`Talkable`, `Walkable`, `Flyable`, `Projectable`) into its constructor.
  - `Robot robot = new Robot(new NormalTalk(), new NormalWalk(), new NormalFly(), new CompanionProjection());`
  - This eliminates the need for separate `CompanionRobot` or `WorkerRobot` classes inheriting from `Robot`, achieving **full composition**.

### **7. Standard UML Diagram of Strategy Design Pattern**

The speaker provides a standard Unified Modeling Language (UML) diagram representation of the Strategy Pattern.

- **Components**:

  1.  **Client (Context)**:

      - Represents the class that needs to perform an algorithm, but the specific algorithm can vary.
      - **Example**: `Robot` class.
      - **Relationship**: Has a **composition (has-a) relationship** with the `Strategy` interface.
      - **Method**: Contains an `execute()` method (or `performBehavior` etc.) which **delegates** the call to its internal `Strategy` object.
        - e.g., `execute() { s.run(); }` where `s` is the `Strategy` object.

  2.  **Strategy (Interface/Abstract Class)**:

      - Defines a common interface for all supported algorithms.
      - **Example**: `Walkable`, `Talkable`, `Flyable` interfaces.
      - **Method**: Declares an abstract method (e.g., `run()`, `performAlgorithm()`) that all concrete strategies must implement.

  3.  **Concrete Strategy**:
      - Implements the `Strategy` interface.
      - Each concrete strategy provides a specific implementation of the algorithm.
      - **Example**: `NormalWalk`, `NoWalk`, `NormalTalk`, `NoTalk`, `NormalFly`, `NoFly` classes.

- **Flow**: The `Client` holds a reference to a `Strategy`. When the `Client` needs to perform the algorithm, it calls the method on its `Strategy` reference. Because of polymorphism, the specific behavior of the `Concrete Strategy` that was injected into the `Client` at runtime is executed.

### **8. Real-Life Examples of Strategy Design Pattern**

The Strategy Pattern is one of the most useful and commonly encountered design patterns, especially in interview scenarios.

- **Example 1: Payment System**

  - **Client**: `PaymentSystem` class.
  - **Method**: `payNow()`.
  - **Problem**: Users can pay using various methods.
  - **Strategies**: Different payment methods are different algorithms for `payNow`.
    - **`PaymentStrategy` (Interface)**: Defines `pay()` method.
    - **Concrete Strategies**:
      - `UpiPayment` (implements `pay()` via UPI)
      - `CreditDebitCardPayment` (implements `pay()` via card)
      - `NetBankingPayment` (implements `pay()` via net banking)
  - **Usage**: `PaymentSystem` has a `PaymentStrategy` object. When `payNow()` is called, it delegates to `paymentStrategy.pay()`, executing the specific payment method passed to the system.

- **Example 2: Sorting Class**
  - **Client**: `Sorting` class.
  - **Method**: `sort()`.
  - **Problem**: Data can be sorted using various algorithms.
  - **Strategies**: Different sorting algorithms are different strategies for `sort()`.
    - **`SortStrategy` (Interface)**: Defines `sort()` method.
    - **Concrete Strategies**:
      - `QuickSort` (implements `sort()` using Quick Sort algorithm)
        - Further concrete strategies could be: `NormalQuickSort`, `RandomizedQuickSort`
      - `MergeSort` (implements `sort()` using Merge Sort algorithm)
        - Further concrete strategies could be: `NormalMergeSort`, `InPlaceMergeSort`
      - `InsertionSort` (implements `sort()` using Insertion Sort algorithm)
  - **Usage**: `Sorting` class has a `SortStrategy` object. When `sort()` is called, it delegates to `sortStrategy.sort()`, executing the specific sorting algorithm configured.

---

This concludes the detailed notes on the Strategy Design Pattern based on the provided video transcript.

Here are comprehensive notes on the Factory Design Pattern, drawing from the provided video transcript:

---

## Factory Design Pattern: Comprehensive Notes

### 1. Introduction to Factory Design Pattern

The Factory Design Pattern is one of the **most widely used design patterns** in software development, frequently encountered in Low-Level Design (LLD) interviews and real-world applications. It is considered as crucial as the Strategy Design Pattern for both interviews and professional work.

**What is a Real-World Factory?**
A real-world factory is a place where an object or a product is created.

**What is an LLD Factory?**
In Low-Level Design, a **Factory is a class** from which objects are obtained; it is responsible for creating and providing objects.

**Why do we need a separate class for object creation (a Factory)?**
In the Strategy Design Pattern, we assumed that functional objects (like `Talkable`, `Walkable`, `Flyable` for a `Robot`) were **already created** somewhere else. We focused on passing these pre-existing objects (dependencies) to the client (`Robot`) through **Dependency Injection** and delegating requests to them. The entire **object creation logic was abstracted away**.

However, in any code, at some point, the `new` keyword must be used to actually **instantiate** an object. The core aim of the Factory Design Pattern is to **separate the application's business logic from its object creation logic**.

- **Business Logic:** This is the core functionality around which the application is centered. For example, in a notification system, it includes _how_ notifications are sent, _to whom_, and _what type_ of notification (email, push, SMS).
- **Object Creation Logic:** This involves deciding _when_ and _which_ object to create (e.g., if a certain condition is met, create an X object; if another, create a Y object).

**Why separate them?**
Keeping business logic and object creation logic together **increases code complexity**, making it difficult to read and understand. Mixing these concerns makes the code less maintainable and harder to reason about.

**How Factory Design Pattern helps:**
The Factory Design Pattern introduces a **separate class whose sole responsibility is object creation**. The client interacts with this factory by requesting an object, and the factory internally handles the creation logic and returns the object. This **decouples the client** from the complexities and specifics of _how_ objects are created, aligning with fundamental OOP and design principles that aim to reduce coupling.

### 2. Types of Factory Patterns

There are three main types of Factory patterns:

1.  **Simple Factory**
2.  **Factory Method**
3.  **Abstract Factory Method**

**Relationship between them:**
Factory Method and Abstract Factory Method are **extended versions** of the Simple Factory.

**Important Distinction:**

- **Simple Factory is NOT a design pattern** in itself; it can be considered a **design principle**.
- **Factory Method and Abstract Factory Method ARE proper design patterns**. The reason for this will become clear as we explore them.

### 3. Simple Factory

The Simple Factory pattern is defined as: **"A factory class that decides which concrete class to instantiate."** This decision is typically made **depending upon a 'type'** provided to the factory.

#### Example: Burger Shop

Let's imagine a burger shop that offers different types of burgers.

**Product Hierarchy (Burgers):**

- **Main Class:** `Burger`
  - It has a single **virtual/abstract method** called `prepare()`.
- **Concrete Products (Burger Types):** These classes **inherit** from `Burger` and **override** the `prepare()` method to define their specific preparation.
  - `BasicBurger`: Simple preparation.
  - `StandardBurger`: Adds extra ingredients (e.g., veggies).
  - `PremiumBurger`: A gourmet, premium burger.

**The Problem without a Factory:**
If we didn't use a factory, a client's code would have to directly instantiate burgers using `new BasicBurger()`, `new StandardBurger()`, etc.. The client would need to know which specific burger type to create, and this knowledge would be mixed with the client's business logic. The goal is to avoid the client knowing _how_ to create the specific burger type it needs.

**Solution with Simple Factory: `BurgerFactory`**
To solve this, we introduce a `BurgerFactory` class.

- **`BurgerFactory` Class:**
  - It has a single method: `createBurger()`.
  - This method takes a **`string type`** as input, which specifies the desired burger (e.g., "Basic", "Standard", "Premium").
  - It **returns a `Burger` type object**.
  - This relationship is called **Composition**: `BurgerFactory` **"has a"** `Burger`.

**How `createBurger` works (Pseudo-code/Logic):**
The `createBurger` method contains an **`if-else` statement** that checks the `type` string:

```
if (type == "Basic") {
    return new BasicBurger();
} else if (type == "Standard") {
    return new StandardBurger();
} else if (type == "Premium") {
    return new PremiumBurger();
} else {
    // Handle invalid type, e.g., throw error or return null
}
```

This is the **entire design principle** of the Simple Factory.

**Code Example (Simple Factory):**

```cpp
// Burger.h
class Burger {
public:
    virtual void prepare() = 0; // Abstract method
};

// BasicBurger.h
class BasicBurger : public Burger {
public:
    void prepare() override {
        // Implementation for Basic Burger preparation
        std::cout << "Preparing Basic Burger with bun and basic patty." << std::endl;
    }
};

// StandardBurger.h
class StandardBurger : public Burger {
public:
    void prepare() override {
        // Implementation for Standard Burger preparation
        std::cout << "Preparing Standard Burger with bun, patty, cheese, and lettuce." << std::endl;
    }
};

// PremiumBurger.h
class PremiumBurger : public Burger {
public:
    void prepare() override {
        // Implementation for Premium Burger preparation
        std::cout << "Preparing Premium Burger with gourmet bun and special patty." << std::endl;
    }
};

// BurgerFactory.h
class BurgerFactory {
public:
    Burger* createBurger(const std::string& type) {
        if (type == "Basic") {
            return new BasicBurger();
        } else if (type == "Standard") {
            return new StandardBurger();
        } else if (type == "Premium") {
            return new PremiumBurger();
        } else {
            std::cout << "Invalid Burger Type!" << std::endl;
            return nullptr; // Or throw an exception
        }
    }
};

// Client Side (main.cpp)
int main() {
    std::string userBurgerType = "Standard"; // User chooses Standard

    // 1. Create a BurgerFactory object
    BurgerFactory* myBurgerFactory = new BurgerFactory();

    // 2. Request a burger from the factory by passing the type
    Burger* myBurger = myBurgerFactory->createBurger(userBurgerType);

    // 3. If a burger was successfully created, call its prepare method
    if (myBurger) {
        myBurger->prepare();
    }

    // Clean up memory
    delete myBurger;
    delete myBurgerFactory;

    return 0;
}
```

**Output for "Standard" type:** `Preparing Standard Burger with bun, patty, cheese, and lettuce.`

**UML Diagram of Simple Factory:**
A standard UML diagram for Simple Factory looks like this:

- **Product:** An abstract class or interface (e.g., `Burger`).
- **Concrete Products:** Multiple concrete classes that implement/inherit from Product (e.g., `BasicBurger`, `StandardBurger`, `PremiumBurger`).
- **Factory:** A concrete class that creates instances of Concrete Products. It has a `has-a` relationship with `Product` (returns a `Product` type).

```
+----------------+          +-------------------+
|     Client     |          |       Factory     |
+----------------+          +-------------------+
|                |<>--------| + createProduct() |
+----------------+          +-------------------+
                                     ^
                                     |
+----------------+          +-------------------+
|    <<Product>> |<|---------| Concrete Product  |
|    - prepare() |          | - prepare()       |
+----------------+          +-------------------+
```

**(Note: The speaker's diagram is simpler, showing `Product` -> `Concrete Products` and `Factory` has a `Product`, returning a `Concrete Product`)**

### 4. Factory Method

Factory Method is a **proper design pattern**. It extends Simple Factory by **introducing abstraction to the factory itself**.

**Definition of Factory Method:**
**"Define an interface for creating objects but allow subclasses to decide which class to instantiate."**

**Problem with Simple Factory (leading to Factory Method):**
In Simple Factory, we had a single, concrete `BurgerFactory` that created all types of burgers. What if the way burgers are made, or the types of burgers available, varies based on the "shop" or "franchise"? We need abstraction not just for the products, but for the factories themselves.

**Extended Example: Two Burger Shops (Franchises)**
Imagine two different burger franchises: `SyncBurger` and `KingBurger`.

- **`SyncBurger`:** Makes normal burgers (Basic, Standard, Premium).
- **`KingBurger`:** Makes _wheat-based_ burgers (Basic Wheat, Standard Wheat, Premium Wheat).

**New Product Hierarchy (Expanded Burgers):**
Now, the `Burger` class has six concrete implementations:

- `BasicBurger`, `StandardBurger`, `PremiumBurger` (Normal types)
- `BasicWheatBurger`, `StandardWheatBurger`, `PremiumWheatBurger` (Wheat-based types)

**New Factory Hierarchy (Abstract Factory + Concrete Factories):**

1.  **Abstract `BurgerFactory`:**
    - This is now an **abstract class**.
    - It has an **abstract method** called `createBurger()`. (This is the "factory method").
2.  **Concrete Factories:**
    - `SyncBurger` (inherits from `BurgerFactory`):
      - **Overrides** `createBurger()`.
      - Its implementation creates `BasicBurger`, `StandardBurger`, or `PremiumBurger` based on the input `type`.
    - `KingBurger` (inherits from `BurgerFactory`):
      - **Overrides** `createBurger()`.
      - Its implementation creates `BasicWheatBurger`, `StandardWheatBurger`, or `PremiumWheatBurger` based on the input `type`.

**How it works (Polymorphism):**
The decision of _which concrete product_ (e.g., `BasicBurger` vs. `BasicWheatBurger`) is created now depends **polymorphically** on _which concrete factory_ (`SyncBurger` vs. `KingBurger`) is instantiated by the client.

**Client-Side Interaction:**

1.  The client first decides which _type of factory_ it needs (e.g., `KingBurger` for wheat-based products).
2.  It then instantiates that **specific concrete factory**:
    ```cpp
    BurgerFactory* factory = new KingBurger(); // Or new SyncBurger();
    ```
3.  Then, it calls the `createBurger()` method on the `factory` object, passing the desired burger `type` (e.g., "Basic").
    ```cpp
    Burger* myBurger = factory->createBurger("Basic");
    ```
4.  The `createBurger` method of the **specific concrete factory** (e.g., `KingBurger::createBurger`) will then create the appropriate product (e.g., `new BasicWheatBurger()`).
5.  Finally, the `prepare()` method can be called on the resulting `myBurger` object.

**Code Example (Factory Method):**

```cpp
// Burger.h (same as Simple Factory, but now includes Wheat versions)
class Burger {
public:
    virtual void prepare() = 0;
};

// BasicBurger.h, StandardBurger.h, PremiumBurger.h (same as before)
// Example:
class BasicBurger : public Burger {
public:
    void prepare() override {
        std::cout << "Preparing Basic Burger with bun, patty, and ketchup." << std::endl;
    }
};

// BasicWheatBurger.h, StandardWheatBurger.h, PremiumWheatBurger.h (new)
// Example:
class BasicWheatBurger : public Burger {
public:
    void prepare() override {
        std::cout << "Preparing Basic Wheat Burger with bun, patty, and ketchup." << std::endl;
    }
};

// BurgerFactory.h (Abstract Factory)
class BurgerFactory {
public:
    // This is the Factory Method - it's virtual/abstract
    virtual Burger* createBurger(const std::string& type) = 0;
};

// SyncBurger.h (Concrete Factory)
class SyncBurger : public BurgerFactory {
public:
    Burger* createBurger(const std::string& type) override {
        if (type == "Basic") {
            return new BasicBurger();
        } else if (type == "Standard") {
            return new StandardBurger();
        } else if (type == "Premium") {
            return new PremiumBurger();
        } else {
            std::cout << "Invalid Burger Type for SyncBurger!" << std::endl;
            return nullptr;
        }
    }
};

// KingBurger.h (Concrete Factory)
class KingBurger : public BurgerFactory {
public:
    Burger* createBurger(const std::string& type) override {
        if (type == "Basic") {
            return new BasicWheatBurger(); // Creates Wheat version
        } else if (type == "Standard") {
            return new StandardWheatBurger();
        } else if (type == "Premium") {
            return new PremiumWheatBurger();
        } else {
            std::cout << "Invalid Burger Type for KingBurger!" << std::endl;
            return nullptr;
        }
    }
};

// Client Side (main.cpp)
int main() {
    std::string burgerType = "Basic";

    // Choose KingBurger franchise (wheat-based burgers)
    BurgerFactory* factory = new KingBurger();

    // Create the burger
    Burger* myBurger = factory->createBurger(burgerType);

    if (myBurger) {
        myBurger->prepare();
    }

    // Output: Preparing Basic Wheat Burger with bun, patty, and ketchup.

    // Now choose SyncBurger franchise (normal burgers)
    delete myBurger;
    delete factory;

    factory = new SyncBurger();
    myBurger = factory->createBurger(burgerType);

    if (myBurger) {
        myBurger->prepare();
    }
    // Output: Preparing Basic Burger with bun, patty, and ketchup.

    delete myBurger;
    delete factory;

    return 0;
}
```

**Standard UML Diagram of Factory Method:**
This diagram is more complex but illustrates the core concepts:

- **Product:** Abstract class/interface (e.g., `Burger`).
- **Concrete Products:** Multiple concrete classes (e.g., `BasicBurger`, `BasicWheatBurger`) grouped into different "families" (e.g., Concrete Product A, Concrete Product B).
- **Factory:** Abstract class/interface (e.g., `BurgerFactory`) with the abstract `createProduct()` method (the factory method).
- **Concrete Factories:** Multiple concrete classes that inherit from the abstract `Factory` (e.g., `SyncBurger`, `KingBurger`). Each concrete factory **overrides** the `createProduct()` method to create **its specific family** of Concrete Products (e.g., `SyncBurger` creates normal burgers, `KingBurger` creates wheat burgers).

```
+----------------+          +-----------------------+
|     Client     |          |   <<Abstract Factory>>|
+----------------+          |       Factory         |
|                |<>--------| + createProduct(): P  |
+----------------+          +-----------------------+
                                     ^    ^
                                     |    |
+-----------------------+  +-----------------------+
|   Concrete Factory A  |  |   Concrete Factory B  |
+-----------------------+  +-----------------------+
| + createProduct(): PA |  | + createProduct(): PB |
+-----------------------+  +-----------------------+
         |                        |
         v                        v
+----------------+           +----------------+
| <<Abstract P>> |           | <<Abstract P>> |
|     Product    |<|----------|   Product A    |<|----------+-------------------+
| + prepare()    |           | + prepare()    |            | Concrete Product A1 |
+----------------+           +----------------+            +-------------------+
                                   |                                |
                                   v                                v
                                +-------------------+            +-------------------+
                                | Concrete Product A2 |            | Concrete Product B1 |
                                +-------------------+            +-------------------+
```

### 5. Abstract Factory Method

Abstract Factory is also a **proper design pattern**. It further **extends the Factory Method**.

**Definition of Abstract Factory Method:**
**"Provides an interface for creating families of related objects without specifying their concrete classes."**

- **"Families of related objects"**: This means a single concrete factory can be responsible for creating **multiple types of products**.
- **"Concrete factory can make multiple products of same family"**: For example, a `SyncBurger` factory can make `BasicBurger`, `StandardBurger`, and `PremiumBurger`.

**Problem with Factory Method (leading to Abstract Factory):**
In Factory Method, our `KingBurger` and `SyncBurger` factories were only responsible for creating _burgers_. What if these franchises also offer other related products, like `GarlicBread`? The Abstract Factory addresses this by making factories capable of producing **multiple, related types of products**.

**Extended Example: Burger Shops making Burgers AND Garlic Breads**
The `KingBurger` and `SyncBurger` franchises now sell both burgers and garlic bread.

**New Product Hierarchy (Expanded with Garlic Bread):**

1.  **`Burger` Hierarchy:** (Same as in Factory Method, with normal and wheat burgers).
2.  **`GarlicBread` Hierarchy:**
    - **Main Class:** `GarlicBread` (abstract with `prepare()` method).
    - **Concrete Garlic Breads:**
      - `BasicGarlicBread`, `CheeseGarlicBread` (Normal types).
      - `BasicWheatGarlicBread`, `CheeseWheatGarlicBread` (Wheat-based types).

**New Factory Hierarchy (Abstract Meal Factory + Concrete Meal Factories):**

1.  **Abstract `MealFactory`:**
    - This is now an **abstract factory** that can create _multiple types of products_.
    - It has **multiple abstract methods**, one for each product type it can create:
      - `createBurger()`
      - `createGarlicBread()`
2.  **Concrete Meal Factories:**
    - `SyncBurger` (inherits from `MealFactory`):
      - **Overrides both** `createBurger()` and `createGarlicBread()`.
      - Its `createBurger()` method creates `BasicBurger`, `StandardBurger`, or `PremiumBurger`.
      - Its `createGarlicBread()` method creates `BasicGarlicBread` or `CheeseGarlicBread`.
    - `KingBurger` (inherits from `MealFactory`):
      - **Overrides both** `createBurger()` and `createGarlicBread()`.
      - Its `createBurger()` method creates `BasicWheatBurger`, `StandardWheatBurger`, or `PremiumWheatBurger`.
      - Its `createGarlicBread()` method creates `BasicWheatGarlicBread` or `CheeseWheatGarlicBread`.

**Client-Side Interaction:**

1.  The client specifies the desired **types for each product** (e.g., "Basic" for burger, "Cheese" for garlic bread).
2.  The client then chooses the **family of products** by instantiating the desired concrete factory (e.g., `KingBurger` for wheat-based items):
    ```cpp
    MealFactory* mealFactory = new KingBurger();
    ```
3.  Then, it calls the respective creation methods on the `mealFactory` object to get each product:
    ```cpp
    Burger* myBurger = mealFactory->createBurger("Basic");
    GarlicBread* myGarlicBread = mealFactory->createGarlicBread("Cheese");
    ```
4.  The specific concrete factory (e.g., `KingBurger`) ensures that _all_ products created by it belong to the same "family" (e.g., all wheat-based).

**Code Example (Abstract Factory):**

```cpp
// Burger.h, BasicBurger.h, StandardBurger.h, PremiumBurger.h (same as Factory Method)
// BasicWheatBurger.h, StandardWheatBurger.h, PremiumWheatBurger.h (same as Factory Method)

// GarlicBread.h (New Product Type)
class GarlicBread {
public:
    virtual void prepare() = 0;
};

// BasicGarlicBread.h
class BasicGarlicBread : public GarlicBread {
public:
    void prepare() override {
        std::cout << "Preparing Basic Garlic Bread." << std::endl;
    }
};

// CheeseGarlicBread.h
class CheeseGarlicBread : public GarlicBread {
public:
    void prepare() override {
        std::cout << "Preparing Cheese Garlic Bread with extra cheese." << std::endl;
    }
};

// BasicWheatGarlicBread.h
class BasicWheatGarlicBread : public GarlicBread {
public:
    void prepare() override {
        std::cout << "Preparing Basic Wheat Garlic Bread." << std::endl;
    }
};

// CheeseWheatGarlicBread.h
class CheeseWheatGarlicBread : public GarlicBread {
public:
    void prepare() override {
        std::cout << "Preparing Cheese Wheat Garlic Bread with extra cheese." << std::endl;
    }
};

// MealFactory.h (Abstract Factory Interface)
class MealFactory {
public:
    virtual Burger* createBurger(const std::string& type) = 0;
    virtual GarlicBread* createGarlicBread(const std::string& type) = 0;
};

// SyncBurger (Concrete Factory - produces normal items)
class SyncBurger : public MealFactory {
public:
    Burger* createBurger(const std::string& type) override {
        if (type == "Basic") return new BasicBurger();
        if (type == "Standard") return new StandardBurger();
        if (type == "Premium") return new PremiumBurger();
        return nullptr;
    }
    GarlicBread* createGarlicBread(const std::string& type) override {
        if (type == "Basic") return new BasicGarlicBread();
        if (type == "Cheese") return new CheeseGarlicBread();
        return nullptr;
    }
};

// KingBurger (Concrete Factory - produces wheat items)
class KingBurger : public MealFactory {
public:
    Burger* createBurger(const std::string& type) override {
        if (type == "Basic") return new BasicWheatBurger(); // Wheat version
        if (type == "Standard") return new StandardWheatBurger();
        if (type == "Premium") return new PremiumWheatBurger();
        return nullptr;
    }
    GarlicBread* createGarlicBread(const std::string& type) override {
        if (type == "Basic") return new BasicWheatGarlicBread(); // Wheat version
        if (type == "Cheese") return new CheeseWheatGarlicBread();
        return nullptr;
    }
};

// Client Side (main.cpp)
int main() {
    std::string burgerType = "Basic";
    std::string garlicBreadType = "Cheese";

    // Choose KingBurger franchise (wheat-based meal factory)
    MealFactory* mealFactory = new KingBurger();

    // Create a burger and garlic bread from this factory
    Burger* myBurger = mealFactory->createBurger(burgerType);
    GarlicBread* myGarlicBread = mealFactory->createGarlicBread(garlicBreadType);

    if (myBurger) {
        myBurger->prepare();
    }
    if (myGarlicBread) {
        myGarlicBread->prepare();
    }

    // Output:
    // Preparing Basic Wheat Burger with bun patty and ketchup.
    // Preparing Cheese Wheat Garlic Bread with extra cheese.

    delete myBurger;
    delete myGarlicBread;
    delete mealFactory;

    return 0;
}
```

**Standard UML Diagram of Abstract Factory:**
This diagram demonstrates how a single Abstract Factory (and its concrete implementations) can produce a family of related products:

- **Product A, Product B:** Abstract classes/interfaces for different types of products (e.g., `Burger`, `GarlicBread`).
- **Concrete Products:** Concrete implementations for Product A and Product B, categorized into different families (e.g., normal vs. wheat).
- **Abstract Factory:** An abstract class/interface (e.g., `MealFactory`) that declares creation methods for _each_ product type it can produce (e.g., `createProductA()`, `createProductB()`).
- **Concrete Factories:** Multiple concrete classes that implement the Abstract Factory (e.g., `SyncBurger`, `KingBurger`). Each concrete factory **implements all creation methods** to produce products belonging to _its specific family_ (e.g., `KingBurger`'s methods would create `BasicWheatBurger` and `CheeseWheatGarlicBread`).

```
+----------------+          +-----------------------+
|     Client     |          |   <<Abstract Factory>>|
+----------------+          |       AbstractFactory |
|                |<>--------| + createProductA(): PA|
+----------------+          | + createProductB(): PB|
                               +-----------------------+
                                     ^    ^
                                     |    |
+-----------------------+  +-----------------------+
|   Concrete Factory X  |  |   Concrete Factory Y  |
+-----------------------+  +-----------------------+
| + createProductA(): XA|  | + createProductA(): YA|
| + createProductB(): XB|  | + createProductB(): YB|
+-----------------------+  +-----------------------+
        |        |               |        |
        v        v               v        v
+-----------+ +-----------+  +-----------+ +-----------+
| ProductAX | | ProductBX |  | ProductAY | | ProductBY |
+-----------+ +-----------+  +-----------+ +-----------+
```

### 6. Practical Application: Notification System

A common real-world application for the Factory Design Pattern is a **Notification System**.

- **Abstract Product:** `NotificationSystem` (abstract class to send notifications).
- **Concrete Products:** Different types of notifications:
  - `SMSNotification`
  - `PushNotification`
  - `EmailNotification`
- **Factory:** A `NotificationFactory` class.
  - It takes a `type` (e.g., "SMS", "Email", "Push").
  - Based on the type, it **returns an object** of the corresponding concrete notification class (e.g., `new EmailNotification()`).
  - The `NotificationFactory` "has a" `NotificationSystem` (returns an object of this type).

This allows the client to simply request a notification of a certain type, without knowing the specifics of how each notification object is created.

### 7. Comparison: Factory vs. Strategy Design Patterns

It's common to observe that **multiple design patterns can often solve the same problem** in real-world applications. For instance, the Notification System example could potentially be implemented using either the Factory or the Strategy Design Pattern.

**Strategy Pattern Approach for Notifications:**

- Treat `SMSNotification`, `PushNotification`, and `EmailNotification` as **different strategies**.
- The `NotificationSystem` class would **compose** these strategies (e.g., through Dependency Injection).
- The `NotificationSystem` would then simply call a generic `sendNotification()` method on the injected strategy object (e.g., `smsStrategy.sendNotification()`).

**Key Difference and Intent:**
The choice between Factory and Strategy patterns, when both seem applicable, depends on the **primary intent**.

- **Strategy Pattern's Intent:** To **vary algorithms at runtime**. When using Strategy, you typically **assume the strategy objects are already created** somewhere in the code; the focus is on _which_ algorithm to use, not _how_ to create the algorithm's object.
- **Factory Pattern's Intent:** To **separate object creation logic from business logic**. When using Factory, the focus is explicitly on **creating the objects** within the factory class itself, as these objects are not assumed to be pre-existing.

**Decision Making:**
Choosing the "better" pattern is often a **subjective opinion** and depends on the specific application's needs and the developer's knowledge. There isn't always a single "right" or "wrong" answer.

**Thumb Rule for distinguishing when confused:**

- If your goal is to **vary algorithms at runtime**, consider using the **Strategy Pattern**.
- If your goal is to **separate the object creation logic from your business logic**, consider using the **Factory Pattern**.

Understanding the nuances and intentions of different design patterns allows a developer to make informed decisions and explain their choices effectively, especially in an interview setting.

---

Here are extremely detailed and comprehensive notes from the provided YouTube video transcript on the Singleton Design Pattern:

### **The Singleton Design Pattern: A Comprehensive Guide**

This lecture introduces the Singleton Design Pattern, which is described as one of the easiest and most basic design patterns to implement, yet also one of the most widely used in real-world applications and Low-Level Design (LLD) interviews. The video will also cover its disadvantages.

#### **1. What is the Singleton Design Pattern?**

- **Core Concept**: A Singleton class is a special type of class designed to have **only one object or instance**.
- **Behavior**: If you attempt to create another instance of a Singleton class, it will simply return the first, already existing instance instead of creating a new one. This means that a Singleton class is fundamentally designed to prevent the creation of multiple objects.
- **Implementation Goal**: The objective is to create a class from which you can only ever make a single object. When subsequent attempts are made to create an object, the previously created object should be returned.

#### **2. Understanding Object Creation: The Basics (Under the Hood)**

Before diving into Singleton implementation, it's crucial to understand how objects are typically created in languages like C++ or Java.

- **Normal Object Creation**: To create an object of a class (e.g., class `A`), you use the `new` keyword. For instance, `A* small_a = new A;` creates an object of class `A`.

- **Memory Types**: The system utilizes two primary types of memory:

  - **Heap Memory**: This is where **non-primitive data types** are stored. Specifically, when you create objects of custom classes (like `A` in `new A`), these objects are allocated and saved in the heap memory.
  - **Stack Memory**: This memory stores **primitive data types** (like `int`, `char`, `bool` declared within a class). Additionally, **pointers or references** that point to objects residing in heap memory are stored in the stack. For example, `small_a` in `A* small_a` is a pointer stored in stack memory that points to the object in heap.

- **Steps During `new ClassName()` Call**: When `new ClassName()` (e.g., `new A()`) is executed, several background processes occur:

  1.  **Constructor Call**: The **constructor** of the class is the very first method called as soon as an object is created. Its primary role is to **instantiate the object** and **provide initial values** to its member variables. For example, if a class `A` has `int x` and `char y`, the constructor might initialize `x` to `0` and `y` to an empty character.
  2.  **Default Constructor**: If a constructor is not explicitly defined within a class, programming languages like C++ or Java automatically insert a **default constructor**. This default constructor is invisible but exists in the background and its name is always the same as the class name.
  3.  **Heap Space Reservation**: The `new` keyword triggers the **reservation of a specific amount of space** in the heap memory. The size of this reserved space depends directly on the total size of the class, which is determined by the combined sizes of all its data types.
  4.  **Object Instantiation**: Once space is reserved, the constructor is executed, and the object is instantiated within that reserved heap memory.
  5.  **Pointer Assignment**: A pointer (e.g., `A* a` in the stack memory) is then assigned to point to the newly created and instantiated object in the heap memory.

- **The Problem with `new`**: The ability to create multiple objects stems from the `new` keyword. You can repeatedly write `A* a2 = new A;` or `A* a3 = new A;` to create as many new and distinct objects as desired. The core challenge for Singleton is to restrict this behavior to just one object.

#### **3. Implementing the Singleton Design Pattern: Step-by-Step**

The implementation process involves several iterations to achieve the desired single-instance behavior and thread safety.

**3.1. Initial Class Setup and Demonstration of Multiple Objects**

- **Class `Singleton`**: A simple class named `Singleton` is created.
  - It has a **public constructor** `Singleton()` that prints "Singleton constructor called New Object Created" to the console. This printout serves as a visual confirmation whenever a new object is created and its constructor is invoked.
- **Main Function Test**:
  - `Singleton* s1 = new Singleton();`
  - `Singleton* s2 = new Singleton();`
  - **Observation**: When run, the output "Singleton constructor called New Object Created" appears **twice**. This confirms that two separate objects were created, each calling its constructor.
  - **Comparison**: `cout << (s1 == s2);` prints `0` (false), indicating that `s1` and `s2` point to different objects in memory. This clearly shows the default behavior allows multiple objects.

**3.2. Restricting Object Creation: Making the Constructor Private**

- **Problem**: The public constructor allows anyone to create new objects using `new`.
- **Solution**: Change the constructor's access modifier from `public` to **`private`**.
- **Result**: Attempting to compile `Singleton* s1 = new Singleton();` immediately results in a **compiler error**: "Singleton is inaccessible".
  - **Analysis**: While this successfully prevents direct object creation, it also completely stops _any_ object creation, which is not the goal. The aim is to allow exactly one object.

**3.3. Allowing Controlled Object Creation: The Public Static `get_instance()` Method**

- **Analogy**: Similar to how private data members are accessed via public "getter" methods (encapsulation), a public method is needed to provide access to the single instance.
- **Method Definition**: A **public static method** named `get_instance()` is introduced.
  - **Return Type**: It returns a pointer to a `Singleton` object (`Singleton*`).
  - **Initial Logic**: Inside `get_instance()`, `return new Singleton();` is placed.
- **The Need for `static`**:
  - **Problem**: A regular (non-static) method requires an object to be called (e.g., `s1.get_instance()`). But if the goal is to create the _first_ object, no object exists yet to call the method on.
  - **Solution**: Declare `get_instance()` as **`static`**.
  - **Static Methods Explained**: Static methods belong to the _class_ itself, not to any specific object of that class. They can be called directly using the class name and the scope resolution operator (e.g., `Singleton::get_instance()`) without needing an object. Static methods also remain consistent across all objects of the class.
- **Testing with `static get_instance()`**:
  - `Singleton* s1 = Singleton::get_instance();`
  - `Singleton* s2 = Singleton::get_instance();`
  - **Observation**: The output "Singleton constructor called New Object Created" still appears **twice**, and `cout << (s1 == s2);` prints `0` (false).
  - **Analysis**: While now using a method, the method itself still creates a new object every time it's called, so the core problem of multiple objects persists.

**3.4. The Core Singleton Logic: Storing and Reusing the Instance**

- **The Missing Piece**: A mechanism to _store_ the single created instance and return it on subsequent requests.
- **Solution**: Introduce a **private static member variable** within the `Singleton` class.
  - **Declaration**: `private: static Singleton* instance;`
    - This `instance` pointer will hold the address of the single `Singleton` object created in heap memory.
  - **Logic in `get_instance()`**: The `get_instance()` method is modified to check if `instance` already holds an object.
    ```cpp
    // Inside the public static Singleton* get_instance() method
    if (instance == nullptr) { // Check if no object has been created yet
        instance = new Singleton(); // Create a new object only if it doesn't exist
    }
    return instance; // Always return the stored instance
    ```
  - **Explanation**:
    - **First Call**: When `get_instance()` is called for the first time, `instance` will be `nullptr`. The `if` condition will be true, a new `Singleton` object will be created (calling its private constructor), and its address will be stored in `instance`. This `instance` is then returned.
    - **Subsequent Calls**: On any subsequent call to `get_instance()`, `instance` will no longer be `nullptr` (because it already holds the address of the first object). The `if` condition will be false, and the method will simply return the existing `instance` without creating a new object.
- **C++ Specific: Static Member Definition Outside Class**
  - In C++, `static` member variables must be **defined and initialized outside the class declaration**.
  - **Syntax**: `Singleton* Singleton::instance = nullptr;`
    - This line typically goes in the `.cpp` file associated with the `Singleton` class. It initializes the `static instance` pointer to `nullptr` before any objects are created. (Note: In Java, this initialization can often happen directly within the class declaration).
- **Final Test with Core Logic**:
  1.  `Singleton* s1 = Singleton::get_instance();`
      - `get_instance()` checks `instance == nullptr` (True).
      - `instance = new Singleton();` creates the object. Console prints "Singleton constructor called New Object Created".
      - `instance` (the address of the new object) is returned to `s1`.
  2.  `Singleton* s2 = Singleton::get_instance();`
      - `get_instance()` checks `instance == nullptr` (False, as `instance` now holds the address of `s1`'s object).
      - The `if` block is skipped.
      - The existing `instance` (the same object `s1` points to) is returned to `s2`. The constructor is **NOT** called again.
  3.  `cout << (s1 == s2);` prints `1` (true), confirming that `s1` and `s2` now point to the exact same single object.
- **Conclusion**: This completes the basic implementation of the Singleton Design Pattern.

#### **4. Thread Safety in Singleton**

The basic Singleton implementation is **not thread-safe** in a multi-threaded environment.

- **The Problem (Race Condition)**:
  - Imagine two threads, `T1` and `T2`, simultaneously calling `get_instance()`.
  - Both threads might execute the `if (instance == nullptr)` check at virtually the same time.
  - If `instance` is initially `nullptr`, both `T1` and `T2` will evaluate this condition as `true`.
  - Consequently, both threads will enter the `if` block and _both_ will attempt to execute `instance = new Singleton();`, resulting in **two separate `Singleton` objects being created**, violating the core principle of Singleton.
  - **Goal**: Ensure that regardless of how many threads call `get_instance()`, only one `Singleton` object is ever created and shared among all threads.

**4.1. Solution 1: Simple Locking (Using Mutex)**

- **Concept**: To prevent multiple threads from entering a "critical section" (a part of code where concurrent execution can cause issues) simultaneously, **locks** are used. Only one thread is allowed to acquire the lock and execute the critical section at a time. When it exits, it releases the lock for another thread.
- **Mechanism (C++ Example)**:
  - A `static` mutex variable (e.g., `std::mutex mutex;`) is added to the class.
  - **Locking**: At the beginning of `get_instance()`, `mutex.lock();` is called. This attempts to acquire the lock. If another thread already holds it, the current thread will wait.
  - **Unlocking**: Before returning, `mutex.unlock();` is called to release the lock.
- **How it works**:
  1.  `T1` calls `get_instance()`. It acquires the lock.
  2.  `T2` calls `get_instance()`. It tries to acquire the lock but waits because `T1` holds it.
  3.  `T1` proceeds inside the locked section, checks `if (instance == nullptr)` (True), creates the `Singleton` object, assigns it to `instance`, and returns `instance`. As it returns, `T1` unlocks the mutex.
  4.  `T2` (which was waiting) now acquires the lock.
  5.  `T2` checks `if (instance == nullptr)` (False, because `T1` already created the object).
  6.  `T2` skips the object creation block and directly returns the existing `instance`. Then, `T2` unlocks the mutex.
- **Disadvantage**: Locking and unlocking are **expensive operations** in any threading environment, consuming resources and potentially holding up other threads. In this simple locking mechanism, the lock is acquired _every single time_ `get_instance()` is called, even after the object has already been created, which is inefficient.

**4.2. Solution 2: Double-Checked Locking (Optimized Thread-Safety)**

- **Goal**: Minimize the overhead of locking by only acquiring the lock when it's genuinely necessary (i.e., when the instance _might_ need to be created).
- **Mechanism**: An outer `if` condition is added _before_ the lock, and the same `if` condition is repeated _inside_ the lock.
- **Updated Logic**:
  ```cpp
  // Inside public static Singleton* get_instance()
  if (instance == nullptr) { // First check: Avoid lock if instance already exists
      mutex.lock(); // Acquire lock only if instance might be null
      if (instance == nullptr) { // Second check: Critical for thread safety
          instance = new Singleton();
      }
      mutex.unlock();
  }
  return instance;
  ```
- **Explanation of Double-Checking**:
  1.  **First Check (Outside Lock)**: Most calls to `get_instance()` will find `instance` to be non-`nullptr` (because it's already created). In these cases, the `if` condition is false, the lock is completely bypassed, and the existing `instance` is returned immediately, making it very efficient.
  2.  **Scenario for `nullptr` (Concurrent Access)**:
      - Assume `instance` is initially `nullptr`, and `T1` and `T2` call `get_instance()` simultaneously.
      - Both `T1` and `T2` pass the _first_ `if (instance == nullptr)` check.
      - `T1` acquires the `mutex.lock()`, while `T2` waits.
      - `T1` enters the locked section and proceeds to the **second `if (instance == nullptr)` check**. This check is crucial.
      - `T1` finds it true, creates the `new Singleton()` object, assigns it to `instance`, and then `mutex.unlock()`.
      - Now, `T2` (which was waiting) acquires the `mutex.lock()`.
      - `T2` then also proceeds to the **second `if (instance == nullptr)` check**. This time, it finds it **false** (because `T1` already created the object and assigned it to `instance`).
      - `T2` therefore **does not create a new object**. It bypasses the creation logic, performs `mutex.unlock()`, and returns the _same_ existing `instance` that `T1` created.
  - **Benefit**: This method significantly reduces the number of times the expensive lock/unlock operations are performed, only incurring them when the instance is truly being created or when multiple threads race to create it for the first time.

**4.3. Solution 3: Eager Initialization (Simple & Thread-Safe)**

- **Concept**: Instead of creating the Singleton object "on demand" (lazy initialization), create it **eagerly** at the very beginning of the application's lifecycle.
- **Mechanism (C++ Example)**:
  - The `static` member variable `instance` is initialized directly with a new object **at its definition outside the class**.
  - **Syntax**: `Singleton* Singleton::instance = new Singleton();` (This replaces `nullptr` in the outside definition).
- **How it works**:
  - The `Singleton` object is created in heap memory **before the `main` function even begins execution** (during application load time).
  - Therefore, when `get_instance()` is called (any number of times, by any thread), `instance` will _never_ be `nullptr`.
  - The `get_instance()` method simply needs to `return instance;` with no `if` conditions or locks.
- **Advantages**:
  - **Extremely Simple**: Requires no complex `if` statements or locking mechanisms.
  - **Inherently Thread-Safe**: Since the object is created once before any threads can compete for it, there are no race conditions.
- **Disadvantages**:
  - **Memory Waste for Expensive Objects**: If the `Singleton` class represents an "expensive operation" (e.g., uses a lot of memory, or takes significant resources to initialize), and the object is created "eagerly" even if it's never actually used during the application's runtime, it leads to **wasted memory and resources**.
  - **Not Suitable for All Scenarios**: It's only practical for "lightweight" objects that don't consume many resources upon creation.
- **"Eager"**: The term "eager" refers to initializing the object "early" or "immediately".

#### **5. Real-World Use Cases and When to Avoid Singleton**

**5.1. Summary of Singleton Implementation**

- **Private Constructor**: To prevent direct instantiation using `new`.
- **Static Instance Variable**: To hold the single object.
- **Static `get_instance()` Method**: To provide a controlled access point for retrieving the single instance, creating it only if it doesn't already exist.

**5.2. Practical Real-World Use Cases (Where to Use Singleton)**

1.  **Logging System**:

    - **Why**: An application often needs a centralized logging mechanism. Using a single `Logger` instance ensures that all log messages across different parts of the application (e.g., Payment Service, Notification Service) are recorded consistently, in the correct order, and to a single log file or output stream.
    - **Problem without Singleton**: If each service created its own `Logger` object, logs could be printed out of order, making debugging difficult. Also, managing many `Logger` objects in memory would be inefficient.
    - **Benefit with Singleton**: A single `log` instance can be shared globally, acting as the sole point for all logging operations, leading to organized and efficient logging.

2.  **Database Connection**:

    - **Why**: Establishing a connection to a database is a **very expensive operation** in terms of memory and resources.
    - **Problem without Singleton**: If a new database connection object were created every time a user or a service needed to interact with the database, it would lead to excessive memory consumption and resource waste.
    - **Benefit with Singleton**: A single database connection instance can be created and then reused across the entire application by all services and users, significantly reducing overhead and saving memory.

3.  **Configuration Manager**:
    - **Why**: Applications rely on configuration files (e.g., API keys, environment settings) that need to be consistently accessible by various services.
    - **Problem without Singleton**: If different services maintained their own `ConfigurationManager` objects, there's a risk that one service might unintentionally modify a configuration setting within its object, leading to inconsistencies for other services.
    - **Benefit with Singleton**: Implementing a `ConfigurationManager` as a Singleton ensures a **"single source of truth"** for all configuration data. All services access the exact same configuration instance, preventing discrepancies and ensuring consistency across the application.

**5.3. When NOT to Use Singleton**

1.  **When Multiple Instances are Inherently Required**:

    - If a class naturally needs to have multiple, distinct objects, Singleton should not be used.
    - **Example**: In a game, if each "Player" needs its own unique object, state, and session, forcing it into a Singleton would be illogical and detrimental.

2.  **When Thread Safety Adds Unnecessary Complexity**:

    - While vital for multi-threaded environments, implementing thread-safe Singletons (especially with double-checked locking) adds significant complexity to the code.
    - **Consequence**: This complexity can make the code harder to understand, maintain, and especially **unit test**.

3.  **When No Clear Advantage is Gained**:
    - Avoid using Singleton if it doesn't provide clear benefits, such as significant memory savings or establishing a single source of truth. If it only adds complications without a tangible advantage, it's better to avoid it.

**Conclusion**: The Singleton Design Pattern is a powerful tool when appropriately applied, particularly for scenarios where resource conservation or ensuring a single point of control is paramount.

This document provides a comprehensive and in-depth explanation of the system design for a food delivery application, modelled after Swiggy and Zomato, as presented in the "Build Zomato Food Delivery App | System Design" video by "Coder Army". It captures every important point, concept, explanation, example, definition, step-by-step process, and reasoning given by the speaker, aiming to be a complete learning document.

---

### **1. Introduction to Low-Level Design (LLD) Interview Simulation**

The session is part of the "Coder Army" LLD series, focusing on a design problem: **designing a food delivery application, conceptually a clone of Zomato, referred to as 'Tomoto'**. The entire session is structured as a **mock LLD interview**, simulating the real-world process.

**The LLD Interview Process:**

1.  **Problem Statement:** The interviewer provides a core design problem.
2.  **Requirements Gathering:** The candidate actively asks questions to clarify **functional** and **non-functional requirements** and to **narrow down the scope** of functionalities. This proactive questioning ensures concrete solutions can be derived.
3.  **Flow Discussion:** A happy flow (the most common and successful user journey) is discussed to ensure both the candidate and interviewer are aligned on the understanding of the system's operation.
4.  **UML Diagram Creation:** A **UML (Unified Modeling Language) diagram** is constructed to visually represent the system's structure and relationships between components.
5.  **Code Implementation:** Finally, the design is translated into working code.

### **2. Understanding Requirements: Functional vs. Non-functional**

When given an LLD interview question, the first step is to gather two types of requirements:

- **Functional Requirements:** These describe the **product-related** or **business-related logic** of the application. They specify **what the system should do**.

  - **Examples:**
    - Which **entities** will be in the application (e.g., User, Restaurant, Menu Item)?
    - How will these entities **interact** with each other?
    - Specific features like **user search for restaurants based on location**, **adding items to a cart**, **checking out for payments**, and **user notification upon successful order placement**.

- **Non-functional Requirements:** These describe **how the system performs** a function, rather than what the function is. They relate to quality attributes of the system.
  - **Examples:**
    - **Scalability:** How well the application can handle increasing load.
    - **Performance:** Responsiveness, throughput.
    - **Concurrency:** Whether it supports multi-threading.
    - **Reliability, security, maintainability, usability**.

### **3. Initial Happy Flow and Interviewer Expectations**

Based on initial discussion, a **happy flow** for the Tomoto application is envisioned:

1.  A **user accesses the application**.
2.  The user **searches for restaurants** and sees multiple options.
3.  The user **selects and opens a restaurant** to view its food items (menu).
4.  The user **adds desired food items to their cart**.
5.  The user **proceeds to checkout and makes a payment**.
6.  The user **receives a notification** once the order is successfully placed.

**Crucial Role of Counter Questions:**
Building a complete food delivery application in a short timeframe (e.g., one hour for an interview) is **impossible**. Therefore, a key role of the candidate is to **ask counter questions to the interviewer to narrow down the scope** of the problem. The interviewer does not expect a fully working, production-ready application.

**Interviewer's Core Expectations in an LLD Interview:**

- **Comprehensive Flow Thinking:** Demonstrate the ability to conceptualise the entire system flow.
- **UML Diagram Proficiency:** Clearly describe the complete **UML diagram**, showcasing the structure and relationships.
- **Clean Code Principles:** Write **clean code** that adheres to **Object-Oriented Programming (OOP) principles**, **design principles**, and utilises **design patterns**. This includes effectively defining relationships between multiple objects.
- **Structural Working Code:** Produce a **working code structure** that integrates all defined components. While not every feature needs full implementation, the code should be runnable and define the overall architecture.

### **4. Detailed Happy Flow Discussion and Scope Narrowing**

The speaker proceeds to discuss the happy flow with the (imagined) interviewer, asking crucial clarifying questions to refine the design.

**Refined Happy Flow Steps with Counter Questions:**

1.  **User arrives on the platform:** Sees multiple restaurants.
2.  **User opens a restaurant:** Sees food items (menu).
3.  **User adds items to their cart:** The items are stored in a user-specific cart.
4.  **User places an order:**
    - **Counter Question:** What types of orders need to be handled?
    - **Interviewer's Input:** The system needs to handle two types of orders:
      - **Delivery Order:** Food delivered to the user's home.
      - **Pickup Order:** User collects food directly from the restaurant.
5.  **User makes payment:** Payment can be made for either delivery or pickup orders.
    - **Counter Question:** Should the payment service be built from scratch, or can it be assumed as a third-party service?
    - **Interviewer's Input (Most Probable):** Assume it's a **third-party service** that needs to be **integrated or structurally defined**. This is because building a full payment service is a complex LLD problem in itself. The primary focus remains on the food delivery application.
6.  **User receives notification:** Upon successful payment and order placement, the user should be notified.

**Further Scope Narrowing: User vs. Delivery Agent Point of View**

- **Counter Question:** Online food delivery applications typically have two major parts: a **user-centric part** and a **delivery agent-centric part**. Which one should be the focus?
  - **User-centric application:** Focuses on restaurant search, item selection, add to cart, order placement, payment, and user notifications.
  - **Delivery agent-centric application:** Focuses on displaying order details to the agent, pickup/delivery addresses, and navigation.
- **Interviewer's Decision:** For this interview, **focus solely on the User Point of View**. The delivery aspect is ignored. This decision helps significantly narrow the problem scope to something manageable within interview constraints.

**Final Happy Flow (User-centric):**
User searches for restaurants → user selects items from menu → user adds items to cart → user places order (delivery or pickup) → user makes payment → user receives order confirmation notification.

### **5. Importance of UML Diagrams and Design Approaches**

Before writing code, creating a **UML diagram** is critical.

**Benefits of UML Diagrams in LLD Interviews:**

- **Relationship Visualization:** Helps in meticulously designing the **relationships between different classes** (objects) that might be overlooked when directly coding.
- **Alignment with Interviewer:** Ensures both the candidate and interviewer are **on the same page** regarding the design. Real-time changes and discussions are possible as the UML is drawn.
- **Subjective Problem Solving:** LLD questions are often subjective, requiring **extensive discussion** rather than straightforward yes/no answers. The interviewer is a collaborator or "manager" helping to build the application.

**Design Approaches for UML and Code:**

Two primary approaches exist for designing the system's objects and their relationships:

1.  **Bottom-up Approach:**

    - **Method:** Start by defining **smaller, granular objects** and establishing their relationships. Once these fundamental components are solid, then define **larger objects that encapsulate or manage these smaller ones**.
    - **Benefit:** Often easier to manage complexity, as foundational relationships are built first.
    - **Prevalence:** **More commonly used in LLD interviews** as it simplifies the process of linking smaller objects to bigger ones.

2.  **Top-down Approach:**
    - **Method:** Begin by defining **large, high-level objects** first, and then iteratively break them down into **smaller, more detailed sub-objects**.
    - **Usage:** Less common in general LLD problems, but can be suitable for specific scenarios.

**Decision for Tomoto Application:** The **Bottom-up approach** will be used for this design problem.

### **6. Building the UML Diagram (Bottom-up Approach)**

The process starts by identifying the core objects and their attributes, then their relationships, moving from smaller, more foundational elements upwards.

#### **6.1. Restaurant and MenuItem Classes**

The most fundamental entities in a food delivery app are **restaurants** and the **items they offer**.

- **Restaurant Class:** Represents a single restaurant.

  - **Attributes:**
    - `id`: Unique identifier for the restaurant.
    - `name`: Name of the restaurant.
    - `address`: Location of the restaurant.
    - `menu`: A **list of `MenuItem` objects**.
  - **Type:** This is a **Model Class**, meaning it primarily holds data (attributes) and has basic getter and setter methods to access and modify these attributes. It conceptually maps to a table in a database.

- **MenuItem Class:** Represents a single food item (dish) available at a restaurant.
  - **Attributes:**
    - `code`: Unique identifier for the menu item (e.g., 'chole-bhature').
    - `name`: Name of the dish.
    - `price`: Cost of the dish (e.g., `double` type).
  - **Type:** Also a **Model Class**, similar to `Restaurant`.

#### **6.2. Relationship between Restaurant and MenuItem: Composition**

The relationship between `Restaurant` and `MenuItem` is crucial. A `Restaurant` "has" `MenuItem`s. The question is, what kind of "has-a" relationship is it?

- **Types of "Has-a" Relationships (UML):**

  - **Association:** A general "uses" or "is associated with" relationship.
  - **Aggregation:** A "whole-part" relationship where the parts can exist independently of the whole (e.g., a "Team" has "Players"; Players can exist outside the team). Represented by an **open diamond** on the "whole" side.
  - **Composition:** A "whole-part" relationship where the parts **cannot exist independently** of the whole (e.g., a "House" has "Rooms"; Rooms cannot exist without the House). Represented by a **filled diamond** on the "whole" side.

- **Decision for Restaurant and MenuItem:**
  - The speaker argues that a `MenuItem` **cannot exist independently** without a `Restaurant`. A dish is always linked to where it is served. If the `Restaurant` is removed, its `MenuItem`s logically cease to exist within the context of that restaurant's menu.
  - **Conclusion:** This is a **Composition Relationship**.
  - **Cardinality:** A `Restaurant` has **one-to-many** `MenuItem`s (one restaurant can have many dishes).

#### **6.3. RestaurantManager Class**

To manage multiple `Restaurant` objects, a dedicated manager class is needed.

- **Purpose:** To perform **CRUD (Create, Read, Update, Delete) operations** on `Restaurant` objects. It centralises the logic for managing restaurants.
- **RestaurantManager Class:**
  - **Attributes:**
    - A **list of `Restaurant` objects**.
  - **Methods:**
    - `addRestaurant()`: To add new restaurants.
    - `deleteRestaurant()`: To remove existing restaurants.
    - `searchByLocation(location)`: A primary function allowing users to find restaurants based on their geographical location.
  - **Relationship with Restaurant:**
    - **Type:** **Aggregation**. A `Restaurant` can exist independently of the `RestaurantManager` (e.g., a restaurant exists in the real world even if not managed by _this specific_ application's manager). The manager merely aggregates them.
    - **Cardinality:** A `RestaurantManager` manages **one-to-many** `Restaurant` objects.

#### **6.4. Manager Objects and the Singleton Design Pattern**

- **Role of Manager Objects:** Manager classes (like `RestaurantManager`) serve as a **single point of contact** for interacting with the objects they manage. This promotes a **loosely coupled design**, meaning other parts of the application interact with the manager, not directly with the managed objects.
- **Singleton Design Pattern:** Manager classes should typically be implemented as **Singleton classes**.
  - **Definition:** A Singleton ensures that **only one instance of a class exists** throughout the entire application, and it provides a global point of access to that instance.
  - **Reasoning:** If there were multiple instances of `RestaurantManager`, each might maintain its own separate list of restaurants, leading to inconsistent data. A single manager ensures a consistent, centralised view and management of all restaurants.

#### **6.5. User and Cart Classes**

- **User Class:** Represents an application user.

  - **Attributes:**
    - `id`: Unique user identifier.
    - `name`: User's name.
    - `address`: User's delivery address.
    - `cart`: An object of the `Cart` class, as each user has one cart.
  - **Type:** A **Model Class**, mapping to a database table.

- **Cart Class:** Represents a shopping cart where a user adds selected items.
  - **Attributes:**
    - `restaurant`: The `Restaurant` from which items are currently being added to the cart (a cart typically holds items from only one restaurant at a time).
    - `items`: A **list of `MenuItem` objects** that have been added to the cart.
    - `totalPrice`: The calculated total cost of items in the cart.
  - **Methods:**
    - `addItem(menuItem)`: Adds a `MenuItem` to the cart's `items` list.
    - `getTotalCost()`: Calculates the total cost of items in the cart.
    - `isEmpty()`: Checks if the cart is empty.
    - `clear()`: Empties the cart.
  - **Relationships:**
    - **`User` and `Cart`:** **Composition**. A `Cart` **cannot exist independently** without a `User`, and there's a **one-to-one relationship** (one user has one cart).
    - **`Cart` and `Restaurant`:** **Simple Association**. A `Cart` "has" a `Restaurant`, but `Restaurant` can exist independently.
    - **`Cart` and `MenuItem`:** **Simple Association**. A `Cart` "has" many `MenuItem`s, but `MenuItem`s can exist independently (they belong to a `Restaurant` primarily).

#### **6.6. Payment Strategy (Strategy Design Pattern)**

To handle various payment methods without tightly coupling them to the order process, the **Strategy Design Pattern** is employed.

- **PaymentStrategy Interface/Abstract Class:**
  - **Purpose:** Defines a common interface for all payment methods.
  - **Method:** `pay(amount)`: An abstract method that concrete payment strategies will implement.
- **Concrete Payment Strategies:**
  - `NetBankingPayment`: Implements `pay()` for net banking.
  - `UPIPayment`: Implements `pay()` for UPI payments.
  - `CreditCardPayment`: Implements `pay()` for credit/debit card payments.
- **How it Works:** A "client" (e.g., the `Order` class or a payment processor) will hold an object of the `PaymentStrategy` type and simply call its `pay()` method. The client **does not need to know which specific payment strategy (e.g., UPI or Credit Card) is being used**.
- **Benefit:** **Flexibility and Extensibility**. New payment methods can be added in the future by creating new concrete strategy classes without modifying existing code that uses the `PaymentStrategy` interface.

#### **6.7. Order Class**

The `Order` class represents a confirmed order placed by a user.

- **Order Class (Abstract):**
  - **Attributes:**
    - `id`: Unique order identifier.
    - `user`: The `User` who placed the order.
    - `restaurant`: The `Restaurant` from which the order was placed.
    - `items`: A **list of `MenuItem` objects** included in the order.
    - `paymentStrategy`: The `PaymentStrategy` used for this order.
    - `total`: The final calculated price of the order.
    - `scheduledFor`: A string to indicate when the order is scheduled (e.g., current time, or a future time for scheduled orders).
  - **Methods:**
    - `processPayment()`: Method to trigger the payment using the assigned `paymentStrategy`.
    - `virtual string getType()`: An **abstract/virtual method** that concrete order types (delivery or pickup) will override to specify their type. This makes `Order` an **abstract class**.
  - **Relationships (Simple Association):**
    - `Order` has a `User`.
    - `Order` has a `Restaurant`.
    - `Order` has many `MenuItem`s.
    - `Order` has a `PaymentStrategy`.
    - **Reasoning:** All these associated entities can exist independently of a specific `Order`.

#### **6.8. DeliveryOrder and PickupOrder Classes (Inheritance)**

The `Order` class is extended to define specific types of orders using **Inheritance**.

- **DeliveryOrder Class:**
  - **Inherits from:** `Order`.
  - **Overrides:** `getType()` to return "Delivery".
  - **Additional Attribute:** `userAddress`: The specific address for delivery.
- **PickupOrder Class:**
  - **Inherits from:** `Order`.
  - **Overrides:** `getType()` to return "Pickup".
  - **Additional Attribute:** `restaurantAddress`: The address of the restaurant where the order will be picked up.

#### **6.9. Order Factory (Factory Method Design Pattern)**

To manage the creation of different types of `Order` objects in a flexible and scalable way, the **Factory Method Design Pattern** is used. This separates the creation logic from the client code.

- **OrderFactory Interface/Abstract Class:**

  - **Purpose:** Defines an interface for creating `Order` objects.
  - **Abstract Method:** `createOrder(...)`: This method will be responsible for creating an order.
    - **Initial Parameters (discussed later in detail):** `user`, `cart`, `restaurant`, `menuItems`, `paymentStrategy`, `orderType`.

- **Concrete Order Factories:**
  - **NowOrderFactory:**
    - **Inherits from:** `OrderFactory`.
    - **Overrides:** `createOrder()` to create an order for **immediate placement**.
    - **Logic:** Determines whether to create a `DeliveryOrder` or `PickupOrder` based on the `orderType` parameter. Sets `scheduledFor` to the current time.
  - **ScheduleOrderFactory:**
    - **Inherits from:** `OrderFactory`.
    - **Overrides:** `createOrder()` to create an order that is **scheduled for a future time**. It would take an additional `scheduledTime` parameter.
- **Relationship:** The concrete factories (`NowOrderFactory`, `ScheduleOrderFactory`) create concrete products (`DeliveryOrder`, `PickupOrder`).
- **Benefit:** **Scalability and Decoupling**. The client code (the `Tomoto` orchestrator class) can request an order without knowing the specific concrete factory used, and new order creation methods (e.g., "Subscription Order Factory") can be added without modifying existing code.

#### **6.10. OrderManager Class**

Similar to `RestaurantManager`, an `OrderManager` is needed to handle the lifecycle and management of orders.

- **Purpose:** To manage `Order` objects, including storing them (e.g., in a database), fetching them, and potentially handling other order-related functionalities.
- **OrderManager Class:**
  - **Attributes:**
    - A **list of `Order` objects**.
  - **Methods:**
    - `addOrder(order)`: Adds a newly created order to its internal list.
    - `listOrders()`: A utility method to display currently managed orders (e.g., for logging).
  - **Relationship with Order:** **Aggregation**. An `Order` can exist independently of the `OrderManager` (e.g., an order object might be created before being added to the manager).
  - **Singleton Pattern:** Like other managers, `OrderManager` is implemented as a **Singleton** to ensure a single, consistent list of all orders throughout the application.

#### **6.11. NotificationService Class**

A dedicated service for handling post-order notifications.

- **Purpose:** To send notifications to the user after an order is successfully placed and paid for.
- **NotificationService Class:**
  - **Method:** `notify(order)`: Takes an `Order` object as input and dispatches a notification.
- **Approach:** Assumed to be a **third-party service** that is integrated, rather than built from scratch. Similar to payment, building a full notification system (push, email, SMS) is a separate LLD problem.
- **Relationship with Order:** **Simple Association**. The `NotificationService` interacts with `Order` to get necessary details (user, items, order ID, etc.) to send a notification.

#### **6.12. Tomoto (Orchestrator) Class**

This class acts as the main entry point and coordinator for the entire application logic.

- **Purpose:** To serve as a **single point of contact for the client (frontend)**. It orchestrates interactions between various backend classes.
- **Role:** Receives requests from the client and **delegates** them to the appropriate manager, service, or object. The client (frontend) does not need to know the complex internal structure (e.g., existence of `Cart`, `RestaurantManager`, `OrderManager`, etc.).
- **Attributes:** Holds instances (or references to singletons) of `RestaurantManager`, `OrderManager`, `NotificationService`, etc., to delegate tasks.
- **Methods (Examples of delegation):**
  - `searchRestaurant(location)`: Calls `RestaurantManager.searchByLocation()`.
  - `selectRestaurant(user, restaurant)`: Updates the user's cart with the selected restaurant.
  - `addToCart(user, itemCode)`: Delegates to `User.getCart().addItem()` after finding the `MenuItem`.
  - `checkoutNow(user, paymentStrategy)`: Orchestrates order creation using `NowOrderFactory`, adds to `OrderManager`.
  - `checkoutScheduled(user, paymentStrategy, scheduleTime)`: Orchestrates order creation using `ScheduleOrderFactory`.
  - `payForOrder(user, order)`: Delegates to `Order.processPayment()`, then calls `NotificationService.notify()` and `Cart.clear()` upon success.
- **Design Principle Trade-offs (Acknowledged):**
  - **Breaks Single Responsibility Principle (SRP):** `Tomoto` handles many different responsibilities (searching, selecting, adding to cart, checkout, payment, notification).
  - **Breaks Principle of Least Knowledge (LoD):** It needs to know a lot about various objects (e.g., `User` contains `Cart`, `Cart` contains `Restaurant` and `MenuItems`) to effectively delegate tasks.
  - **Conclusion:** While not a "perfect" design in terms of strict adherence to these principles, it is a **practical trade-off** for creating a centralised orchestrator for client interaction. Alternatives are discussed later for more complex, decentralised systems.

### **7. Code Structure and Implementation Details**

The application code is modularised into different directories for better organisation, mimicking a real-world application structure.

- **`models` directory:** Contains basic data classes (entities).

  - **`Restaurant`:**
    - Attributes: `restaurantId`, `name`, `location`, `menuItems` (list of `MenuItem*`).
    - **`nextRestaurantId` (static, auto-incrementing):** A static member `nextRestaurantId` is used to **automatically generate unique `restaurantId`s** upon object creation, ensuring they are auto-incrementing and no manual input is required.
    - Methods: Constructor, destructor, getters, and setters.
  - **`MenuItem`:** Attributes: `code`, `name`, `price`. Methods: Constructor, getters, setters.
  - **`User`:** Attributes: `userId`, `name`, `address`, `cart` (a `Cart*` object). Methods: Getters, setters.
  - **`Cart`:**
    - Attributes: `restaurant` (a `Restaurant*`), `items` (list of `MenuItem*`).
    - Methods: `addItem(MenuItem*)` (adds item, checks if restaurant is set), `getTotalCost()`, `isEmpty()`, `clear()`, getters, setters.
  - **`Order` (abstract class):**
    - Attributes: `orderId`, `user` (`User*`), `restaurant` (`Restaurant*`), `menuItems` (list of `MenuItem*`), `paymentStrategy` (`PaymentStrategy*`), `total`, `scheduledFor` (string, for time information).
    - **`nextOrderId` (static, auto-incrementing):** Similar to `Restaurant`, auto-generates `orderId`s.
    - Methods: `processPayment()` (calls `pay()` on the strategy), `virtual string getType()` (abstract), getters, setters.
  - **`DeliveryOrder`:** Inherits from `Order`. Overrides `getType()` to return "Delivery". Adds `userAddress` attribute.
  - **`PickupOrder`:** Inherits from `Order`. Overrides `getType()` to return "Pickup". Adds `restaurantAddress` attribute.

- **`managers` directory:** Contains singleton manager classes.

  - **`RestaurantManager`:**
    - Attributes: `restaurants` (list of `Restaurant*`).
    - **Singleton Implementation:** Private constructor, private static instance, public static `getInstance()` method.
    - Methods: `addRestaurant(Restaurant*)`, `searchByLocation(string)` (simple string matching logic).
  - **`OrderManager`:**
    - Attributes: `orders` (list of `Order*`).
    - **Singleton Implementation:** Same as `RestaurantManager`.
    - Methods: `addOrder(Order*)`, `listOrders()` (for logging/listing created orders).

- **`factories` directory:** Contains the Order Factory design pattern implementation.

  - **`OrderFactory` (abstract class):**
    - Abstract method: `virtual Order* createOrder(User*, Cart*, Restaurant*, vector<MenuItem*>, PaymentStrategy*, string orderType, double totalCost)`. This method is responsible for creating an order based on provided parameters.
    - **Discussion on Parameters (Principle of Least Knowledge):** The speaker specifically addresses why `createOrder` takes many parameters (like `Cart*`, `Restaurant*`, `vector<MenuItem*>`) directly, instead of just `User*` and extracting those details from the `User` object (e.g., `user->getCart()->getRestaurant()`).
      - **Reasoning:** If the factory had to extract nested data, it would become **tightly coupled** to the internal structure of `User` and `Cart`. This would **break the Principle of Least Knowledge**, which states that an object should only know about its immediate friends.
      - By passing all necessary data explicitly, the `OrderFactory` remains a **"dumb object"**. It only knows _how to create an Order_ with the given components, not _how to find those components_ from other objects. This promotes a **loosely coupled design**.
      - **Refinement:** The `totalCost` is also passed directly as a parameter to `createOrder` instead of being calculated inside the factory from `Cart`, further adhering to this principle.
  - **`NowOrderFactory`:** Inherits from `OrderFactory`. Overrides `createOrder()`. It checks `orderType` ("Delivery" or "Pickup") and creates the corresponding `DeliveryOrder` or `PickupOrder`, setting common attributes and `scheduledFor` to the **current time** using `TimeUtils`.
  - **`ScheduleOrderFactory`:** Inherits from `OrderFactory`. Overrides `createOrder()`. (Implied logic: Would create `DeliveryOrder` or `PickupOrder` and set `scheduledFor` to a provided future time).

- **`strategies` directory:** Contains the Payment Strategy design pattern implementation.

  - **`PaymentStrategy` (interface/abstract class):** Abstract method `virtual void pay(double amount)`.
  - **`UPIPayment`:** Implements `PaymentStrategy`. Constructor takes `mobileNumber`. `pay()` method simulates UPI payment by printing a message.
  - **`CreditCardPayment`:** Implements `PaymentStrategy`. Constructor takes `cardNumber`. `pay()` method simulates credit card payment by printing a message.

- **`services` directory:** Contains external service integrations.

  - **`NotificationService`:**
    - Method: `notify(Order*)`.
    - Logic: Extracts `orderId`, `user` details, `restaurant` details, `items`, `total price`, and `scheduledFor` from the `Order` object and prints a confirmation message to the console (simulating notification).
    - **Discussion on Knowledge:** The speaker notes that in a practical design, it's reasonable for `NotificationService` to know how to extract details from an `Order` object.

- **`utils` directory:** Contains utility classes.

  - **`TimeUtils`:**
    - Method: `static string getCurrentTime()`: Returns the current system time as a string. This centralises time-related utility functions.

- **`Tomoto` (Orchestrator Class - usually in the main application file):**
  - **Constructor:** Calls `initializeRestaurants()` to set up some sample restaurants and add them to the `RestaurantManager`. This simulates pre-existing restaurant data without building an admin panel.
  - **Core Methods (delegating to other classes):**
    - `searchRestaurant(location)`: Uses `RestaurantManager`.
    - `selectRestaurant(user, restaurant)`: Updates user's `Cart`.
    - `addToCart(user, itemCode)`: Uses `User`'s `Cart` to add items.
    - `checkoutNow(user, paymentStrategy)`:
      1.  Checks if `Cart` is empty.
      2.  Extracts `restaurant`, `items`, `totalCost` from `user->getCart()`.
      3.  Creates `NowOrderFactory`.
      4.  Calls `orderFactory->createOrder(...)` passing all extracted details and user/payment strategy.
      5.  Adds the created `Order` to `OrderManager`.
      6.  Returns the `Order`.
    - `payForOrder(user, order)`:
      1.  Calls `order->processPayment()`.
      2.  If payment is successful (`processPayment` returns true), it calls `NotificationService.notify(order)`.
      3.  Clears the `User`'s `Cart` using `user->getCart()->clear()`.
    - `printUserCart(user)`: Prints the content of the user's cart to the console.
  - **Acknowledged Design Flaws (as discussed earlier):** The `Tomoto` orchestrator class breaks the **Single Responsibility Principle** and the **Principle of Least Knowledge** due to its central coordinating role and knowledge of many internal objects.

### **8. Main Function: Happy Flow Simulation**

The `main` function simulates a user's interaction with the `Tomoto` application to demonstrate the happy flow.

**Simulation Steps:**

1.  **Application Initialisation:** A `Tomoto` application object is created. Its constructor `initializeRestaurants()` sets up sample restaurants and adds them to the `RestaurantManager`.
2.  **User Activity:** A `User` object (e.g., "Aditya" in "Delhi") is created.
3.  **Search for Restaurants:** `Tomoto.searchRestaurant("Delhi")` is called. The results (a list of restaurants like "Bikaner") are printed.
4.  **Select Restaurant:** The first restaurant from the search results (e.g., "Bikaner") is "selected" by calling `Tomoto.selectRestaurant(user, selectedRestaurant)`.
5.  **Add Items to Cart:** Specific `MenuItem`s (e.g., "chole-bhature", "samosa") are added to the user's cart using `Tomoto.addToCart(user, itemCode)`.
6.  **Print Cart:** The contents and total cost of the user's cart are printed using `Tomoto.printUserCart(user)`.
7.  **Checkout:** `Tomoto.checkoutNow(user, paymentStrategy)` is called. For this simulation, a `UPIPayment` strategy is used.
8.  **Pay for Order:** `Tomoto.payForOrder(user, order)` is called to process the payment.
9.  **Cleanup:** All dynamically allocated objects are deleted.

**Expected Console Output (Example):**

- User activity log: "User Aditya is active".
- Restaurant search results: "Restaurant Found: Bikaner".
- Selected restaurant: "Restaurant selected: Bikaner".
- Cart contents: "Cart has: Chole Bhature (120.0), Samosa (15.0). Total: 135.0".
- Payment confirmation: "Paid using UPI: 135.0".
- Notification: "New Delivery Order placed for Order ID: [ID], Name: Aditya, Restaurant: Bikaner, Items: Chole Bhature, Samosa, Final Price: 135.0, Scheduled for: [Current Date/Time]".
- Payment status: "Payment done!".

### **9. Further Extensions and Modifications**

The speaker discusses several potential improvements and extensions to the design, acknowledging that these would typically be beyond the scope of a typical interview but are important for a robust, scalable system.

- **Payment Strategy Manager/Factory:**

  - **Current Issue:** The `main` method directly creates and passes a specific `PaymentStrategy` (e.g., `UPIPayment`) to the `checkout` method. This means the `main` method holds the logic for choosing the payment strategy.
  - **Proposed Solution:** Introduce a **`PaymentStrategyManager` or `PaymentStrategyFactory`**.
    - This factory would encapsulate the logic for deciding which `PaymentStrategy` to instantiate (e.g., based on user input or system configuration).
    - This combines the **Factory Method** and **Strategy** design patterns.
  - **Benefit:** Decouples payment strategy selection from the core application logic in `main` or `Tomoto` class.

- **Extended Notification Service:**

  - **Current Issue:** `NotificationService` is a simple class with a single `notify()` method.
  - **Proposed Solution:** Make `NotificationService` an **interface or abstract class**.
    - Create **concrete notification classes** that inherit from it, such as `PushNotification`, `EmailNotification`, `WhatsAppNotification`.
    - Each concrete class would **override a `notifyUser()` method** (or similar) to implement its specific notification logic.
  - **Benefit:** Allows for easy extension and support of various notification channels.

- **Alternatives to the Orchestrator Class (`Tomoto`) – Decentralised Approach:**
  - **Current Issue:** The `Tomoto` class acts as a central orchestrator, leading to violations of the **Single Responsibility Principle** and **Principle of Least Knowledge**. It has too many responsibilities and too much knowledge about other objects.
  - **Proposed Solution (Modern Frameworks Approach):** Implement a **decentralised architecture** by separating concerns into distinct layers.
    - **API Layer (Controller Layer):** This layer handles incoming client requests (e.g., HTTP API calls like `/searchRestaurant/Delhi`). It acts as the direct interface for the frontend.
    - **Service Layer:** This layer contains the **core business logic**. API controllers would delegate requests to specific services. For example, a `RestaurantController` would call a `RestaurantService`, which then interacts with `RestaurantManager`.
  - **Benefit:** Improves separation of concerns, makes the system more modular, testable, and maintainable. No single "orchestrator" class is needed.
  - **Interview Context:** This advanced architecture is typically **not expected to be fully implemented in a 1-hour interview** because it's a massive undertaking. The focus of an LLD interview is usually on class diagrams, object interactions, and design patterns, not full API backend development.

This comprehensive set of notes details the design and implementation of the Tomoto food delivery application, explaining concepts, design patterns, and code structure as presented in the source video.

Here are extremely detailed and comprehensive notes from the provided video "Observer Design Pattern Explained | Real-Life Use Case + Code Example" by Coder Army:

---

### **Observer Design Pattern: Comprehensive Learning Notes**

The video introduces the **Observer Design Pattern**, a fundamental concept in Low-Level Design (LLD).

#### **1. Introduction to Observer Design Pattern**

The Observer Design Pattern addresses a specific problem: when one object's state changes, other objects need to be notified about that change, or they want to know the new value of the changed object. The changing object also wants to communicate its new value to those interested objects. This pattern facilitates communication and interaction between objects.

**Real-Life Use Case: YouTube Subscription Model**

- **Scenario:** When you subscribe to a YouTube channel, you receive notifications whenever that channel uploads a new video.
- **Problem Solved:** How does your YouTube account know when the channel uploads a new video, and how do they interact to send you a notification? This is precisely what the Observer Design Pattern solves.

**Core Concept:**
Imagine two objects:

- **Object One:** Its internal state changes.
- **Multiple Other Objects:** These objects want to know _when_ Object One's state changes and _what_ its new value is.
- When Object One changes, it needs to communicate its new value to all these interested objects.

#### **2. Key Components: Subject/Observable and Observer**

To make the terminology clearer, the objects are renamed.

- **Subject / Observable:** The object whose state is being observed (e.g., the YouTube channel).
  - This is the object (`Object One`) whose state changes.
  - "Observable" means "something that can be observed".
- **Observer:** The object that wants to observe the state changes of the Subject/Observable (e.g., your YouTube account that subscribed).
  - This is the object (`Object Two`, `Object Three`, `Object Four`, etc.) that wants to know about the Subject's state changes.
  - The Observer's role is to "observe the Subject".

**Relationship:**

- There is a **one-to-many connection** between an **Observable** and **Observer(s)**.
- One Observable can be observed by many Observers.

#### **3. Polling vs. Pushing (The Observer Pattern's Approach)**

Before explaining how the Observer Pattern works, the video discusses an alternative, less efficient technique called **Polling**.

**Polling Technique (Inefficient Approach):**

- **Mechanism:** The Observer actively and repeatedly asks the Observable if its value has changed.
- **Example (YouTube):** An Observer (your account) would constantly ask the Observable (the YouTube channel), "Has a new video been uploaded? Has a new video been uploaded?".
- **Problems:**
  - **Unknown Frequency:** The Observer doesn't know _when_ the value will change, so it's hard to determine how often to poll (e.g., every second, every millisecond?).
  - **Resource Inefficiency:** This leads to a constant stream of requests where the Observable frequently replies "No," consuming significant time and resources.
  - **High Time Consumption:** It's a "very bad," "very time-consuming" concept.

**Pushing (Observer Design Pattern's Approach):**

- **Mechanism:** Instead of polling, the Observer Design Pattern advocates for **pushing**.
- **Responsibility Shift:** The responsibility for informing Observers about state changes lies with the **Observable**.
- **Process:** Whenever the Observable's state changes, it sends a request to all registered Observers, notifying them that its state has changed and they can read the new value.
- **Benefit:** This is much more efficient as Observers are only notified when an actual change occurs, rather than constantly checking.

#### **4. How the Observer Pattern Works (High-Level Overview)**

1.  **Subscription:**
    - Observers (e.g., YouTube accounts) **subscribe** to the Observable (e.g., YouTube channel).
    - When an Observer subscribes, the Observable becomes "aware" of that Observer's existence.
    - The Observable internally maintains a **list (or map/set)** of all subscribed Observers. This allows the Observable to keep track of who needs to be notified.
2.  **Notification:**
    - Whenever the Observable's internal state changes (e.g., a new video is uploaded by the YouTube channel), the Observable iterates through its list of subscribed Observers.
    - For each Observer in the list, the Observable **updates** them, essentially notifying them of the change.

#### **5. UML Diagram Conventions (Interfaces / Abstract Classes)**

The video introduces a naming convention for UML diagrams, especially when dealing with **abstract classes** and **interfaces**.

- **Abstract Classes vs. Interfaces:**
  - In C++, a "pure abstract class" (where all methods are virtual and have no implementation) is often referred to as an "interface" in other languages.
  - An interface serves as a **contract** between a client and a concrete class, defining what methods a class _must_ implement if it inherits from that interface.
- **Naming Convention:**
  - To denote a pure abstract class (or interface), a common convention is to prefix its name with `I` (e.g., `IChannel` instead of `Channel`).
  - This `I` prefix signifies that the class is a pure abstract class with all virtual methods.
  - Any concrete class inheriting from it is then responsible for **overriding** (implementing) all its methods.
- **Purpose:** This convention helps distinguish between concrete classes and interface/abstract classes, reducing confusion in UML diagrams.

#### **6. Detailed UML Diagram - Abstract Classes/Interfaces**

The core components of the Observer Pattern are initially defined as abstract classes (interfaces) to ensure flexibility and reusability.

1.  **`IObservable` (Interface):**

    - **Purpose:** Represents something that can be observed (e.g., a YouTube channel).
    - **Methods:**
      - **`add(IObserver o)`:**
        - **Function:** This method allows an `IObserver` (represented as `o`) to **subscribe** to the `IObservable`.
        - **Internal:** The `IObservable` will internally add this `IObserver` to its list (or map/set) of subscribers. This is like your YouTube account subscribing to a channel.
      - **`remove(IObserver o)`:**
        - **Function:** This method allows an `IObserver` to **unsubscribe** from the `IObservable`.
        - **Internal:** The `IObservable` will remove this `IObserver` from its internal list of subscribers. This is like unsubscribing from a YouTube channel.
      - **`notify()`:**
        - **Function:** This is the most crucial method. When the `IObservable`'s state changes, this method is called.
        - **Internal:** The `notify` method iterates through the entire collection of stored `IObservers`. For each `IObserver`, it calls their `update` method, informing them that its (the Observable's) value has changed.

2.  **`IObserver` (Interface):**
    - **Purpose:** Represents something that performs observation (e.g., a YouTube subscriber's account).
    - **Method:**
      - **`update()`:**
        - **Function:** This method is called by the `IObservable`'s `notify` method. Its purpose is for the `IObserver` to **update itself**.
        - **Process:** When `update` is called, the `IObserver` knows that the `IObservable` it's observing has changed. It can then fetch the new value or perform any necessary action. For a YouTube example, it means a subscriber knows a new video is uploaded and can then view its title or the video itself.

**UML Relationship (Abstract):**

- A **one-to-many relationship** is drawn from `IObservable` to `IObserver`. This visually represents that "many Observers are trying to observe one Observable".

#### **7. Detailed UML Diagram - Concrete Classes**

Abstract classes define the contract; concrete classes provide the actual implementation.

1.  **`ConcreteObservable` (Concrete Class):**

    - **Inheritance:** Inherits from `IObservable`.
    - **Internal State:**
      - Maintains a `list` (e.g., `Vector` in C++, or `Map`, `Set`) of `IObservers`. This list stores all the subscribers.
    - **Method Implementations (Overrides):**
      - **`add(IObserver o)`:** Adds the `IObserver o` to its internal `subscribers` list (after checking for duplicates).
      - **`remove(IObserver o)`:** Removes the `IObserver o` from its internal `subscribers` list.
      - **`notify()`:** Loops through the `subscribers` list and calls the `update()` method on each `IObserver` in the list.

2.  **`ConcreteObserver` (Concrete Class):**
    - **Inheritance:** Inherits from `IObserver`.
    - **Internal State / Relationship:**
      - Crucially, `ConcreteObserver` holds a **`has-a` relationship** with a **`ConcreteObservable`**. This means a `ConcreteObserver` contains an instance of the `ConcreteObservable` it is observing.
      - **Note on Design Decision:** This direct relationship between two _concrete_ classes (rather than abstract ones) is a "different approach" in Observer Pattern.
        - **Rationale:** It simplifies the `update` method. When the `update` method is called on the `ConcreteObserver`, it directly knows which `ConcreteObservable` changed. It can then easily call a method on that specific `ConcreteObservable` to **read the new value**.
        - This avoids needing to pass the changed value as a parameter to the `update` method, making the interaction cleaner for the Observer.
    - **Method Implementation (Overrides):**
      - **`update()`:**
        - When called by `ConcreteObservable.notify()`, this method's implementation will use its stored `ConcreteObservable` instance to fetch the new data.
        - It typically calls a "getter" method on the observed `ConcreteObservable` (e.g., `observable.get_value()`, `channel.get_new_video()`) to retrieve the updated information.
        - The exact "getter" method depends on the specific use case.

**Cleaned-up Standard UML Diagram (Conceptual):**
This involves `IObservable` with `add`, `remove`, `notify`, and `IObserver` with `update`. `ConcreteObservable` inherits from `IObservable` and manages a list of `IObservers`. `ConcreteObserver` inherits from `IObserver` and holds a reference to `ConcreteObservable`. The `notify` method in `ConcreteObservable` calls `update` on `IObservers`, and the `update` method in `ConcreteObserver` calls a `get_value` (or similar) method on its `ConcreteObservable` instance.

#### **8. Formal Definition of Observer Design Pattern**

The Gang of Four (GoF) definition:

- **"Define a one-to-many relationship between objects so that when one object changes state, all of its dependents are notified and are updated automatically."**
- **Breakdown:**
  - **One-to-many relationship:** One Observable, many Observers.
  - **When one object changes state:** The Observable's internal state changes.
  - **All of its dependents are notified:** The `notify` method is called, which informs all Observers.
  - **And are updated automatically:** The Observers' `update` method is called, allowing them to fetch the new data and update themselves.

#### **9. YouTube Example Revisit with Observer Pattern Implementation Details**

Mapping the Observer Design Pattern to the YouTube example:

- **`IObservable`** maps to **`IChannel`**:
  - Represents the abstract concept of a YouTube channel that can be subscribed to.
  - Methods:
    - `subscribe(ISubscriber s)`: Renamed `add`.
    - `unsubscribe(ISubscriber s)`: Renamed `remove`.
    - `notify()`: Remains `notify`.
- **`IObserver`** maps to **`ISubscriber`**:
  - Represents the abstract concept of a YouTube account that subscribes to channels.
  - Method:
    - `update()`: Remains `update`.
    - **Note:** Methods like `get_video` are _not_ put in `ISubscriber` because `ISubscriber` is an interface. Such specific logic belongs in concrete classes to maintain reusability and scalability.
- **`ConcreteChannel` (implements `IChannel`):**
  - Maintains a `list` of `ISubscriber` objects.
  - **Overrides `subscribe`, `unsubscribe`, `notify`**: These implementations manage the subscriber list and trigger notifications.
  - **New Method: `upload_video(string title)`:**
    - **Purpose:** This method represents the core business logic of a YouTube channel changing its state (uploading a video).
    - **Process:**
      1.  Takes a `title` (string) for the new video.
      2.  Simulates video upload (details of upload engine are abstracted).
      3.  **Crucially, it calls the `notify()` method internally** after the video is "uploaded". This triggers the notification process to all subscribers.
  - **New Method: `get_video_data()`:**
    - **Purpose:** Allows Observers (subscribers) to retrieve the details of the latest uploaded video.
    - **Return Type:** Returns a string (or relevant video data).
- **`ConcreteSubscriber` (implements `ISubscriber`):**
  - Holds an instance of `Channel` (the concrete channel it subscribed to). This is the `has-a` relationship previously discussed.
  - **Overrides `update()`:**
    - **Process:** When `update` is called (by `Channel.notify()`), the `ConcreteSubscriber` knows a new video has been uploaded by the channel it observes.
    - It then uses its stored `Channel` instance to call `channel.get_video_data()`.
    - This fetches the new video information (e.g., title, description).
    - The subscriber can then act on this information (e.g., print a notification, add to watch history).

#### **10. Code Walkthrough (C++ Example)**

The video then walks through a C++ code implementation of the YouTube example, mirroring the UML diagram.

**1. `ISubscriber` Interface:**

```cpp
class ISubscriber {
public:
    virtual void update() = 0; // Pure virtual method
};
```

- Defines a contract that any concrete subscriber must implement the `update` method.

**2. `IChannel` Interface:**

```cpp
class IChannel {
public:
    virtual void subscribe(ISubscriber* sub) = 0; // Pure virtual method
    virtual void unsubscribe(ISubscriber* sub) = 0; // Pure virtual method
    virtual void notifySubscribers() = 0; // Pure virtual method
};
```

- Defines a contract for any concrete channel, requiring `subscribe`, `unsubscribe`, and `notifySubscribers` methods.

**3. `Channel` (Concrete Channel) Class:**

```cpp
class Channel : public IChannel {
private:
    std::vector<ISubscriber*> subscribers; // List to hold subscribed observers
    std::string channelName;
    std::string latestVideoUploaded;

public:
    Channel(std::string name) : channelName(name) {} // Constructor

    void subscribe(ISubscriber* sub) override {
        // Check if already subscribed to avoid duplicates
        // Add subscriber to the list
        subscribers.push_back(sub); // Simplified logic shown in video
    }

    void unsubscribe(ISubscriber* sub) override {
        // Remove subscriber from the list
        // Example: Iterate and remove, or use std::remove_if
    }

    void notifySubscribers() override {
        for (ISubscriber* sub : subscribers) {
            sub->update(); // Call update on each subscribed observer
        }
    }

    void uploadVideo(std::string title) {
        latestVideoUploaded = title;
        std::cout << channelName << " uploaded: " << title << std::endl;
        notifySubscribers(); // Crucial: notifies subscribers after upload
    }

    std::string getVideoData() {
        return "Check out our new video: " + latestVideoUploaded;
    }
};
```

- **`subscribers`:** A `vector` (list) storing pointers to `ISubscriber` objects.
- **`latestVideoUploaded`:** Stores the title of the most recently uploaded video.
- **`subscribe()`:** Adds a `ISubscriber*` to the `subscribers` vector. The video mentions checking for existence first, but the example shows a simplified push_back.
- **`unsubscribe()`:** Removes a `ISubscriber*` from the `subscribers` vector.
- **`notifySubscribers()`:** Iterates through the `subscribers` vector and calls `update()` on each `ISubscriber` object.
- **`uploadVideo(title)`:**
  1.  Updates `latestVideoUploaded` with the new `title`.
  2.  Prints a confirmation message.
  3.  **Calls `notifySubscribers()`** to inform all active subscribers.
- **`getVideoData()`:** Returns a string containing information about the `latestVideoUploaded`. This is the method `Subscriber` will call to get updated info.

**4. `Subscriber` (Concrete Subscriber) Class:**

```cpp
class Subscriber : public ISubscriber {
private:
    std::string name;
    Channel* channel; // Composition: holds a reference to the concrete Channel it observes

public:
    Subscriber(std::string n, Channel* ch) : name(n), channel(ch) {} // Constructor

    void update() override {
        std::cout << "Hey " << name << ", " << channel->getVideoData() << std::endl;
    }
};
```

- **`name`:** Stores the name of the subscriber.
- **`channel`:** A pointer to the `Channel` object it is observing (the `has-a` relationship). This allows the subscriber to call methods on the specific channel.
- **`update()`:**
  1.  Prints a personalized notification using the subscriber's `name`.
  2.  **Calls `channel->getVideoData()`** to fetch the latest video information directly from the `Channel` it subscribed to.

**5. `main` Method (Demonstration):**

```cpp
int main() {
    // 1. Create a Channel
    Channel* coderArmyChannel = new Channel("Coder Army");

    // 2. Create Subscribers
    Subscriber* varun = new Subscriber("Varun", coderArmyChannel);
    Subscriber* tarun = new Subscriber("Tarun", coderArmyChannel);

    // 3. Subscribers subscribe to the Channel
    coderArmyChannel->subscribe(varun);
    coderArmyChannel->subscribe(tarun);

    // 4. Channel uploads a video - Both subscribers are notified
    coderArmyChannel->uploadVideo("Observer Pattern Tutorial");
    // Output:
    // Coder Army uploaded: Observer Pattern Tutorial
    // Hey Varun, Check out our new video: Observer Pattern Tutorial
    // Hey Tarun, Check out our new video: Observer Pattern Tutorial

    // 5. Varun unsubscribes
    coderArmyChannel->unsubscribe(varun); // Assuming unsubscribe implementation exists

    // 6. Channel uploads another video - Only Tarun is notified
    coderArmyChannel->uploadVideo("Decorator Pattern Tutorial");
    // Output:
    // Coder Army uploaded: Decorator Pattern Tutorial
    // Hey Tarun, Check out our new video: Decorator Pattern Tutorial

    // Clean up memory (not shown in video, but good practice)
    delete coderArmyChannel;
    delete varun;
    delete tarun;

    return 0;
}
```

- **Steps:**
  1.  An instance of `Channel` (`coderArmyChannel`) is created.
  2.  Two `Subscriber` instances (`varun`, `tarun`) are created, each linked to `coderArmyChannel` in their constructors.
  3.  Both `varun` and `tarun` subscribe to `coderArmyChannel` using the `subscribe` method. This adds them to the channel's internal list of subscribers.
  4.  `coderArmyChannel` uploads a video ("Observer Pattern Tutorial"). The `uploadVideo` method internally calls `notifySubscribers()`, which in turn calls `update()` on both `varun` and `tarun`. Both receive notifications.
  5.  `varun` unsubscribes from `coderArmyChannel`.
  6.  `coderArmyChannel` uploads another video ("Decorator Pattern Tutorial"). This time, only `tarun` receives the notification because `varun` was removed from the subscriber list.
- **Demonstration:** The output clearly shows that after unsubscribing, a subscriber no longer receives notifications, demonstrating the effectiveness of the pattern.

#### **11. Discussion on SOLID Principles: Single Responsibility Principle (SRP)**

The video points out a common characteristic of Observer Pattern implementations that often appears to **break the Single Responsibility Principle (SRP)**.

- **SRP Definition:** A class should have only one reason to change.
- **The "Break" in Observer Pattern:**

  - In the `ConcreteChannel` class, it handles **two distinct responsibilities**:
    1.  **Observer Pattern Logic:** Managing subscriptions (`subscribe`, `unsubscribe`) and notifications (`notifySubscribers`).
    2.  **Business Logic:** Handling actions specific to the channel, like uploading videos (`uploadVideo`) and providing video data (`getVideoData`).
  - This means the `Channel` class has two reasons to change: if the Observer pattern logic needs modification, or if the core business logic of video uploads/data changes.

- **Reasoning and Trade-offs:**

  - **Stability of Observer Logic:** The core Observer Pattern functionality (how `subscribe`, `unsubscribe`, `notify` work) is generally **very stable and rarely changes**.
  - **Volatility of Business Logic:** The business logic (e.g., how a video is uploaded, what data is fetched) is more likely to change.
  - **Design Principle Justification:** While SRP is broken, the design choice is often a trade-off. The principle states that things that _change_ should be separated from things that _don't change_. Since Observer logic is stable, combining it with the specific business logic (which is the only part that might change) is considered acceptable to keep the pattern simple.
  - **Common Practice:** Many standard UML diagrams and implementations of the Observer Pattern also exhibit this perceived SRP violation.
  - **Simplicity vs. Strict Adherence:** Making the pattern strictly adhere to SRP would often involve creating more classes and adding complexity, which might not provide significant benefits in this specific case. Keeping it simple is often better.

- **Possible Modification (for Strict SRP Adherence, but more complex):**
  - One could potentially make the `IChannel` (or a generic `Observable` base class) implement the `subscribe`, `unsubscribe`, and `notify` logic directly, including managing the `subscribers` list.
  - In this scenario, `ConcreteChannel` would _only_ handle the `uploadVideo` and `getVideoData` methods, thereby separating the two responsibilities. However, this adds another layer of inheritance/composition and might overly complicate the design for the minor benefit of strict SRP adherence in this context.

#### **12. Other Use Cases / Problems Solved by Observer Design Pattern**

The Observer Design Pattern is versatile and can be applied in many scenarios where one object's state needs to inform multiple dependents.

- **Notification Services:**
  - Any system that sends out notifications (e.g., email alerts, in-app messages) can use this pattern. A "notification server" acts as the Observable, notifying all relevant users (Observers) when a new notification arrives.
- **News Feed Services (Social Media):**
  - Platforms like Facebook or Instagram.
  - When a user (Observable) uploads a new post (video, photo), all their followers or friends (Observers) receive an update in their news feed.
- **Event Handling / Event Listeners (Programming):**
  - Common in user interface (UI) development (e.g., frontend frameworks).
  - When an "event" occurs (e.g., a button click, a key press), an "event handler" (Observable) triggers, and various "event listeners" (Observers) that are interested in that specific event are notified and perform their respective actions.

This pattern is highly practical and valuable for solving many LLD problems in interviews and real-world applications.

Here are the extremely detailed, comprehensive notes from the video "Decorator Pattern Explained | Real-world use case + Code | Design patterns in LLD":

### **Decorator Pattern Explained: Real-World Use Case + Code**

The Decorator Pattern is a fascinating design pattern that enhances an object's functionalities at run-time. It provides a flexible alternative to subclassing for extending functionality.

### **1. The Aim of the Decorator Pattern**

The primary aim of the Decorator Pattern is to **provide additional responsibilities or functionalities to an object dynamically at run-time**, rather than at compile-time.

- **Illustrative Example (Initial Concept)**:
  - Imagine an object, `Obj_One`, with a method called `doSomething()`.
  - When `doSomething()` is invoked, `Obj_One` simply returns the string "I did something".
  - The goal is to **dynamically alter this output** at run-time. For instance, sometimes it should return "I did something Great", or "I did something Amazingly", or even "I did something Amazingly Today".
  - The key is that this change should not be fixed at compile-time but should be adaptable during the application's execution.

### **2. Why Not Use Inheritance? (Problems with Inheritance)**

Initially, inheritance might seem like a straightforward solution for enhancing object functionalities. However, the video highlights significant drawbacks that the Decorator Pattern addresses.

- **How Inheritance Works (Briefly)**:

  - A `Base Class` has a method (e.g., `run()`).
  - A `Child Class` inherits from the `Base Class` and `overrides` the method (e.g., `run()`) to provide enhanced or altered behaviour.
  - **Run-time Determination with Inheritance**:
    - You create a reference of the base class and instantiate it with either the base or child class: `Base b = new ChildClass()`.
    - When `b.run()` is called, **polymorphism** determines which `run()` method (base or child) is executed based on the actual object created (`new Base()` or `new ChildClass()`). This allows for run-time determination of behaviour.

- **The Problem: "Inheritance is Bad"**

  - The speaker asserts that "inheritance is bad" (a concept introduced in a prior lecture on design patterns) due to several issues.
  - **Reasons for Inheritance's Drawbacks**:
    - **Multiple Hierarchy Creation**: Inheritance can lead to complex and deep class hierarchies.
    - **Class Explosion**: This is a major problem where a small change or addition of features results in an exponential increase in the number of classes.
    - Many other associated problems.

- **Detailed Example: Mario Game Power-ups (Illustrating Class Explosion)**

  - **Scenario**: Designing a game with a `Mario` character who gains various "power-ups" throughout the game.
    - Starts as a small, normal Mario.
    - Gets a **Mushroom**: Mario's height increases.
    - Gets a **Flower**: Mario gains gun-shooting abilities.
    - Gets a **Star**: Mario becomes faster and destroys anything he touches for a limited time.
  - **Goal**: Dynamically enhance Mario's functionalities and add responsibilities to the `Mario` object as he progresses in the game.

  - **Attempting with Inheritance (and its issues)**:
    1.  **Base Class**: Create a `Mario` class with a method `getAbilities()`, which initially returns "Normal Mario Character".
    2.  **Child Classes for Enhancements**:
        - To add "height up" ability, create `MarioWithHeightUp` which overrides `getAbilities()`.
        - Similarly, `MarioWithGunAbilities` and `MarioWithStarAbilities` would be created.
    3.  **The Scalability Challenge**:
        - What if Mario can gain abilities in any order, or in combination? For instance, in the designed game, Mario might get "gun abilities" without necessarily having "height up" first, unlike the actual Mario game.
        - This means we could have:
          - `MarioWithGunAbilities` (without height)
          - `MarioWithHeightUp` (without gun)
          - `MarioWithGunAndHeightAbilities`
        - This immediately multiplies the classes.
    4.  **The "Class Explosion" Problem**:
        - If a new characteristic is introduced, such as `Flying Ability`, how many new classes would be needed?
        - `MarioWithFlyAbilities`
        - `MarioWithFlyAndHeightUp`
        - `MarioWithFlyAndGunUp`
        - `MarioWithHeightUpFlyUpAndGunUp`
        - And so on, for every permutation and combination of existing and new abilities.
        - This exponential growth in child classes makes the application **extremely difficult to manage and extend**.
        - This is precisely what "Class Explosion" refers to: a rapid and unmanageable proliferation of classes due to small functional changes.
        - Furthermore, inheritance forces changes in the entire hierarchy whenever a new characteristic is added, making it inflexible.

- **Conclusion**: Due to these severe limitations, the principle of **"Favour Composition over Inheritance"** is strongly advocated. The Decorator Pattern is designed to achieve dynamic functionality changes without suffering from these inheritance-related problems, especially class explosion.

### **3. How the Decorator Pattern Works**

The Decorator Pattern solves the problem of dynamically adding responsibilities by "wrapping" or "decorating" an object with new objects, each adding specific functionalities.

- **Back to the `Obj_One` Example (Decorator Approach)**:

  1.  **Initial Object**: We have `Obj_One` that performs `doSomething()` and replies "I did something".
  2.  **Decoration (Wrapping)**: Instead of modifying `Obj_One` or inheriting from it, we **wrap `Obj_One` with a new object called `Decorator_One`**.
  3.  **Method Call Redirection**: Now, when we want to call `doSomething()`, we call it on `Decorator_One`, not directly on `Obj_One`.
  4.  **Delegation**: `Decorator_One`, in turn, calls `doSomething()` on the wrapped `Obj_One`.
  5.  **Base Reply**: `Obj_One` performs its base action and returns "I did something" to `Decorator_One`.
  6.  **Enhancement**: `Decorator_One` takes `Obj_One`'s reply ("I did something"), enhances it (e.g., adds "Amazingly"), and then returns the modified reply ("I did something Amazingly") to the client. This dynamically changes the property.

- **Stacking Decorators (Infinite Stacking)**:
  - The pattern allows for **infinite stacking** of decorators. This means you can wrap a decorated object with another decorator.
  - **Example with `Decorator_Two`**:
    1.  **Chain Creation**: Wrap `Decorator_One` (which already wraps `Obj_One`) with `Decorator_Two`.
    2.  **Call Flow**:
        - Client calls `doSomething()` on `Decorator_Two`.
        - `Decorator_Two` calls `doSomething()` on `Decorator_One`.
        - `Decorator_One` calls `doSomething()` on `Obj_One`.
    3.  **Reply Flow (Recursive Enhancement)**:
        - `Obj_One` replies "I did something" to `Decorator_One`.
        - `Decorator_One` enhances it to "I did something Amazing" and replies to `Decorator_Two`.
        - `Decorator_Two` further enhances it to "I did something Amazing Today" and replies to the client.
  - This demonstrates how properties can be dynamically enhanced without relying on inheritance for behaviour modification.

### **4. Relationships in the Decorator Pattern (Is-A and Has-A)**

The Decorator Pattern uniquely combines two fundamental object-oriented relationships: **Is-A (Inheritance)** and **Has-A (Composition)**.

- **The `Is-A` Relationship (Inheritance)**:

  - A decorator **is a** component. This means the `Decorator` class inherits from (or implements the interface of) the `Component` it decorates.
  - **Purpose**: This `Is-A` relationship is crucial because it allows the decorator to **behave like the object it decorates**. If the client expects a `Component` object and calls a method like `doSomething()` on it, the decorator can receive that call because it "is a" `Component`.

- **The `Has-A` Relationship (Composition)**:

  - A decorator **has a** component. This means the `Decorator` class contains a reference (an object) of the `Component` type it decorates.
  - **Purpose**: This `Has-A` relationship is used for **dynamically changing or extending the behaviour** of the component. The decorator delegates the call to its internal component and then adds its own logic.

- **Combined Power**:
  - The decorator uses `Is-A` to maintain compatibility with the client (allowing it to be treated like the component it decorates).
  - It uses `Has-A` to delegate to the actual component and then extend its functionality, avoiding the pitfalls of inheritance for dynamic behaviour changes.
  - The decorator's method (e.g., `run()`) can call the wrapped object's method (`B.run()`) and then add its own logic to it.

### **5. Mario Game Example with Decorator Pattern (UML and Implementation Details)**

Let's revisit the Mario game power-up example to see how the Decorator Pattern elegantly solves the "class explosion" problem.

- **UML Diagram (Step-by-step Construction and Explanation)**:

  1.  **`ICharacter` (Abstract Component)**:

      - This is the **abstract base class or interface** that defines the common behaviour for all characters and decorators.
      - **Denotation**: Often denoted with an `I` prefix (e.g., `ICharacter`) and marked as `<<Abstract>>` for clarity.
      - **Method**: It has one abstract method: `getAbilities()`.
      - **Purpose**: It acts as the common contract that both concrete characters and decorators will adhere to, enabling polymorphism.

  2.  **`Mario` (Concrete Component)**:

      - This is a **concrete implementation** of `ICharacter`.
      - **Method Implementation**: Its `getAbilities()` method simply returns "Normal Mario Character", representing the base Mario without any power-ups.
      - **Purpose**: This is the core object that will be decorated. Other concrete characters (e.g., `Sonic`) could also implement `ICharacter`.

  3.  **`CharacterDecorator` (Abstract Decorator)**:

      - This is an **abstract class** that serves as the base for all concrete decorators.
      - **Relationships**: This is where both the `Is-A` and `Has-A` relationships come into play.
        - **`Is-A ICharacter`**: `CharacterDecorator` **inherits from `ICharacter`** (represented by an arrow from `CharacterDecorator` to `ICharacter` in UML). This means a `CharacterDecorator` _is a_ `ICharacter`, allowing it to be treated interchangeably with `Mario` by the client.
        - **`Has-A ICharacter`**: `CharacterDecorator` **contains a reference** to an `ICharacter` object (represented by an aggregation/composition arrow from `CharacterDecorator` to `ICharacter` in UML, with a diamond). This reference (e.g., `character ca`) holds the object that is being decorated (e.g., a `Mario` object or another decorated `ICharacter`).
      - **Method**: It also has a `getAbilities()` method. While the speaker initially suggests it might be abstract here, in the code, it's typically concrete and **delegates** the call to its internal `character` reference.

  4.  **Concrete Decorators (e.g., `HeightUpDecorator`, `GunPowerDecorator`, `StarPowerDecorator`)**:
      - These are **concrete implementations** of `CharacterDecorator`.
      - Each concrete decorator represents a specific power-up or additional responsibility.
      - **Relationships**: They inherit the `Is-A` and `Has-A` relationships from `CharacterDecorator`.
      - **Method Implementation**: Each concrete decorator's `getAbilities()` method will:
        1.  **Call the `getAbilities()` method of its wrapped `ICharacter` reference (`ca.getAbilities()`)**. This retrieves the abilities of the character _before_ this decorator's enhancement.
        2.  **Enhance the result**: It then adds its specific characteristic (e.g., " with Height Up", " with Gun", " with Star Power") to the returned string.

- **Flexibility and Combination (No Class Explosion)**:

  - The beauty of this design is that these concrete decorators can be combined in **any order and any number of times**.
  - For example, if a new `FlyPowerDecorator` is introduced, you only need to create **one new class**: `FlyPowerDecorator`. You don't need to create `MarioWithFly`, `MarioWithHeightAndFly`, `MarioWithGunAndFly`, etc., as with inheritance. This completely avoids the class explosion problem.

- **Instantiation and Chaining (Step-by-Step)**:

  - The `Has-A` relationship (the `ICharacter` reference in the decorator's constructor) allows you to pass in any object that implements `ICharacter`—which could be a `Mario` object, or another decorator (because decorators also _are_ `ICharacter`s).
  - **Step 1: Basic Mario**:
    ```java
    ICharacter mario = new Mario();
    // At this point, mario.getAbilities() would return "Normal Mario Character".
    ```
  - **Step 2: Mario with Height Up**:
    ```java
    ICharacter marioWithHeight = new HeightUpDecorator(new Mario());
    // Or, to continue enhancing the 'mario' variable:
    mario = new HeightUpDecorator(mario); // 'mario' now references the decorated object.
    // When mario.getAbilities() is called, HeightUpDecorator's getAbilities()
    // will call the wrapped Mario's getAbilities() and add " with Height Up".
    ```
  - **Step 3: Mario with Height Up and Gun Power**:
    ```java
    mario = new GunPowerUpDecorator(mario); // 'mario' now references a GunPowerUpDecorator wrapping the HeightUpDecorator.
    // Call Sequence: GunPowerUp.getAbilities() -> HeightUp.getAbilities() -> Mario.getAbilities()
    // Return Sequence: "Normal Mario Character" -> "Normal Mario Character with Height Up" -> "Normal Mario Character with Height Up with Gun"
    ```
  - **Step 4: Mario with Height Up, Gun Power, and Star Power**:
    ```java
    mario = new StarPowerUpDecorator(mario); // 'mario' now references a StarPowerUpDecorator wrapping the GunPowerUpDecorator.
    // The chain of decoration is built by progressively wrapping the existing decorated object.
    ```
  - You can build an arbitrarily long chain of decorators in any combination.

- **Recursion Analogy (Call Flow)**:
  - The process of calling `getAbilities()` on a highly decorated object functions like a **recursive call**.
  - **Example Chain**: `StarPowerDecorator` (outermost) wraps `GunPowerDecorator`, which wraps `HeightUpDecorator`, which wraps the base `Mario` object (innermost).
  - **Call Path (`getAbilities()`):**
    1.  `StarPowerDecorator.getAbilities()` is called.
    2.  `StarPowerDecorator`'s `getAbilities()` method delegates to its internal `ICharacter` reference (which is `GunPowerDecorator`).
    3.  `GunPowerDecorator.getAbilities()` is called.
    4.  `GunPowerDecorator`'s `getAbilities()` method delegates to its internal `ICharacter` reference (which is `HeightUpDecorator`).
    5.  `HeightUpDecorator.getAbilities()` is called.
    6.  `HeightUpDecorator`'s `getAbilities()` method delegates to its internal `ICharacter` reference (which is `Mario`).
    7.  `Mario.getAbilities()` is called. This is the **base case**, and it returns "Normal Mario Character".
  - **Return Path (Enhancement):**
    1.  "Normal Mario Character" is returned to `HeightUpDecorator`.
    2.  `HeightUpDecorator` adds " with Height Up" and returns "Normal Mario Character with Height Up" to `GunPowerDecorator`.
    3.  `GunPowerDecorator` adds " with Gun" and returns "Normal Mario Character with Height Up with Gun" to `StarPowerDecorator`.
    4.  `StarPowerDecorator` adds " with Star Power (Limited Time)" and returns the final string "Normal Mario Character with Height Up with Gun with Star Power (Limited Time)" to the client.
  - This "going down the ladder" to the base object and then "climbing back up" while adding features is a pure example of the Decorator Pattern's recursive nature.

### **6. Standard UML Diagram and Official Definition**

- **Standard UML Diagram**:

  - **`IComponent`**: An abstract interface or class that defines the operations for both concrete components and decorators. It might have `operationA()`, `operationB()`, etc..
  - **`ConcreteComponent`**: A concrete implementation of `IComponent` (e.g., `Mario`, `Sonic`). It provides the base behaviour.
  - **`Decorator`**: An abstract class that implements `IComponent` (Is-A relationship) and holds a reference to an `IComponent` (Has-A relationship). It defines the abstract methods corresponding to `IComponent`'s operations, which concrete decorators will override.
  - **`ConcreteDecoratorA`, `ConcreteDecoratorB` (etc.)**: Concrete classes that extend `Decorator`. Each of these implements a specific additional responsibility. Their methods typically call the corresponding method on the wrapped `IComponent` (via the `Has-A` reference) and then add their own logic.

- **Official Definition of Decorator Pattern**:
  - "**Decorator pattern attaches additional responsibilities to an object dynamically.**"
  - "**Decorator provides a flexible alternative to subclassing for extending functionality.**"
  - This definition highlights its core purpose: dynamically enhancing an object's capabilities while offering a superior alternative to inheritance (subclassing), which is prone to issues like class explosion and inflexibility.

### **7. Code Implementation (Mario Game Example)**

The video provides concrete Java code demonstrating the Decorator Pattern for the Mario game scenario.

- **1. `ICharacter` Interface**:

  ```java
  interface ICharacter {
      String getAbilities();
  }
  ```

  - This defines the contract for any character or decorated character.

- **2. `Mario` Concrete Component**:

  ```java
  class Mario implements ICharacter {
      @Override
      public String getAbilities() {
          return "Mario"; // Base ability
      }
  }
  ```

  - This is the simplest form of Mario.

- **3. `CharacterDecorator` Abstract Decorator**:

  ```java
  abstract class CharacterDecorator implements ICharacter { // Is-A ICharacter
      protected ICharacter character; // Has-A ICharacter (composition)

      public CharacterDecorator(ICharacter c) { // Constructor takes the character to be decorated
          this.character = c;
      }

      @Override
      public String getAbilities() {
          // Delegates the call to the wrapped character's getAbilities().
          // Concrete decorators will call super.getAbilities() and add their own logic.
          return character.getAbilities();
      }
  }
  ```

  - **Note**: While the speaker mentions this as abstract in the UML explanation, the provided code snippet shows `getAbilities()` here as a concrete method that delegates. This is a common and practical implementation where the abstract decorator provides the delegation logic, and concrete decorators build upon it.

- **4. `HeightUpDecorator` Concrete Decorator**:

  ```java
  class HeightUpDecorator extends CharacterDecorator {
      public HeightUpDecorator(ICharacter c) {
          super(c); // Pass the wrapped character to the parent (CharacterDecorator) constructor
      }

      @Override
      public String getAbilities() {
          // Call the wrapped character's abilities (via super.getAbilities())
          // and then attach its own unique ability.
          return super.getAbilities() + " with Height Up";
      }
  }
  ```

- **5. `GunPowerUpDecorator` Concrete Decorator**:

  ```java
  class GunPowerUpDecorator extends CharacterDecorator {
      public GunPowerUpDecorator(ICharacter c) {
          super(c);
      }

      @Override
      public String getAbilities() {
          return super.getAbilities() + " with Gun";
      }
  }
  ```

- **6. `StarPowerUpDecorator` Concrete Decorator**:

  ```java
  class StarPowerUpDecorator extends CharacterDecorator {
      public StarPowerUpDecorator(ICharacter c) {
          super(c);
      }

      @Override
      public String getAbilities() {
          return super.getAbilities() + " with Star Power (Limited Time)";
      }
  }
  ```

- **7. `Main` Method (Usage Example)**:

  ```java
  public class Main {
      public static void main(String[] args) {
          // 1. Create the basic Mario character object
          ICharacter mario = new Mario();
          System.out.println("Basic character: " + mario.getAbilities());
          // Output: Basic character: Mario

          // 2. Decorate Mario with Height Up ability
          // The 'mario' variable is now reassigned to hold the decorated object.
          mario = new HeightUpDecorator(mario); // Wraps the existing 'mario' object
          System.out.println("After Height Up: " + mario.getAbilities());
          // Output: After Height Up: Mario with Height Up

          // 3. Further decorate with Gun Power ability
          mario = new GunPowerUpDecorator(mario); // Wraps the HeightUp decorated object
          System.out.println("After Gun Power: " + mario.getAbilities());
          // Output: After Gun Power: Mario with Height Up with Gun

          // 4. Finally, decorate with Star Power ability
          mario = new StarPowerUpDecorator(mario); // Wraps the GunPower decorated object
          System.out.println("After Star Power: " + mario.getAbilities());
          // Output: After Star Power: Mario with Height Up with Gun with Star Power (Limited Time)

          // The video mentions "decorator destruction" but doesn't show explicit code for it.
          // In Java, this would typically be handled by garbage collection when objects are no longer referenced.
      }
  }
  ```

  - **Execution Flow Explanation**: Each line where `mario` is reassigned effectively wraps the previously decorated object with a new decorator. When `mario.getAbilities()` is called, the call traverses the chain of decorators recursively, starting from the outermost decorator, going down to the base `Mario` object. The `Mario` object returns its base ability, and then each decorator adds its specific enhancement as the result propagates back up the chain.

### **8. Other Real-World Scenarios for Decorator Pattern**

The Decorator Pattern is widely applicable in various software development scenarios where dynamic addition of responsibilities is required.

- **1. Text Editor (e.g., Google Docs, Microsoft Word)**:

  - **Base Object**: A `Text` component representing raw text.
  - **Decorators**:
    - `BoldDecorator`: Makes text bold.
    - `ItalicDecorator`: Makes text italic.
    - `UnderlineDecorator`: Underlines text.
    - `FontChangeDecorator`: Changes font style/size.
  - **Application**: When a user selects text and applies "Bold", the underlying `Text` object is wrapped with a `BoldDecorator`. If they then apply "Italic" to the already bold text, the `BoldDecorator` object is further wrapped by an `ItalicDecorator`. This allows for flexible combinations of text formatting without creating an explosion of `BoldItalicText`, `BoldUnderlinedText`, etc. classes.

- **2. Back-end Form Validation**:
  - **Base Object**: A `FormData` component representing raw input from a user form.
  - **Decorators**:
    - `EmailValidatorDecorator`: Checks if an email field is valid.
    - `SQLInjectionCheckerDecorator`: Scans for SQL injection attempts.
    - `CSSInjectionCheckerDecorator`: Scans for CSS injection attempts.
  - **Application**: When a user submits a form, the raw form data can be progressively validated by wrapping it with various validation decorators. This allows adding or removing validation rules easily without modifying the core `FormData` class or creating numerous specific validation classes.

These examples demonstrate the versatility and power of the Decorator Pattern in providing a flexible and scalable way to extend object functionality.

Here are extremely detailed and comprehensive notes from the video "Build Your Own Notification Engine | System Design":

## Building Your Own Notification Engine | System Design

This lecture focuses on a classic Low-Level Design (LLD) interview problem: designing a notification system.

### 1. Introduction to Notification Systems

A notification system is integrated into many applications to send various types of notifications to users or clients, such as SMS, email, or WhatsApp. Generally, in LLD, a notification service is often treated as a third-party component that is simply integrated, assuming it will handle the sending of notifications. However, this lecture delves into the internal design structure of such a service, explaining how it works.

### 2. Identifying Requirements

The design process begins by identifying the requirements, which an interviewer would typically provide. For this notification service, the following requirements are assumed:

- **Plug-and-Play Model:** The notification service must be designed in a way that allows it to be integrated into any application with minimal code changes. The application's architecture should not need to be drastically altered to accommodate the notification service.
- **Highly Extensible for Notification Types:** Initially, the system will support SMS, email, and pop-up notifications. However, it must be highly extensible, meaning that new notification types (e.g., WhatsApp notifications) can be easily added in the future without significant code changes. This implies adherence to **SOLID design principles**.
- **Dynamically Extensible Notifications:** Notifications themselves should be dynamically modifiable. For example, the system should allow features like headers, footer signatures, or timestamps to be dynamically added to a notification.
- **Store All Notifications:** All notifications sent by the service must be stored. This is for maintaining a history of notifications.
- **Log Notifications:** The system should have a logging feature for notifications. Initially, this can be logged to the console, with the possibility of extending it to a log file.

The speaker notes that while functional and non-functional requirements are listed together here for simplicity, in an actual interview, one should discuss them separately with the interviewer to clearly define the scope.

### 3. UML Diagram and Design Structure (Step-by-Step Approach)

The design process starts with a UML diagram, aiming to follow all design principles to ensure extensibility and support all features.

#### 3.1. Notification Class Hierarchy

To build the notification service, a core `Notification` class is needed.

- **`INotification` (Abstract Class/Interface):**

  - This is defined as an abstract class or pure interface.
  - **Naming Convention:** Following a convention, abstract classes or pure interfaces are prefixed with `I` (e.g., `INotification`) to indicate they are interfaces.
  - It contains a single method: `getContent()`.
  - **Purpose:** Concrete notification classes will override this method to provide their specific content.

- **`SimpleNotification` (Concrete Class):**
  - This is an initial concrete implementation of `INotification`.
  - It holds a `text` string, which represents the entire notification content.
  - Its `getContent()` method simply returns this `text` string.
  - **Extensibility Example:** The speaker suggests that in the future, other types of notifications could be added, such as `HTMLNotification`. An `HTMLNotification` could take HTML content, allowing for images, GIFs, videos, etc., and its `getContent()` method would override accordingly.

#### 3.2. Decorator Design Pattern for Dynamic Extension

The requirement to dynamically add features to notifications (like headers or footers) strongly suggests using the **Decorator Design Pattern**. This pattern allows new features to be added to an object dynamically.

- **`INotificationDecorator` (Abstract Class):**

  - This is an abstract decorator class, also prefixed with `I` as it serves as an abstract interface for decorators.
  - **Decorator Relationships:** A decorator typically has two types of relationships:
    - **"Has-a" relationship:** It "has" an instance of the object it decorates (e.g., `INotification` instance).
    - **"Is-a" relationship:** It "is-a" type of the object it decorates (it inherits `INotification`).
  - The `getContent()` method will be overridden by concrete decorators.

- **Concrete Decorators:**
  - These add specific features by wrapping an existing notification. Their `getContent()` method typically calls the `getContent()` of the wrapped notification and then adds its own feature.
  - **`TimeStampDecorator`:**
    - Purpose: Attaches a timestamp to the notification.
    - `getContent()` method: Calls the wrapped `Notification`'s `getContent()` and appends a timestamp to it. The timestamp can be a static one for demonstration, but in a real system, it would fetch the current time.
    - **Constructor:** Takes an `INotification` object to decorate.
  - **`SignatureDecorator`:**
    - Purpose: Attaches a signature (e.g., company signature) to the notification.
    - `getContent()` method: Calls the wrapped `Notification`'s `getContent()` and appends a signature to it.
    - **Constructor:** Takes an `INotification` object and a `signature` string.

This setup ensures that notifications are highly extensible dynamically, fulfilling one of the key requirements.

#### 3.3. Observer Design Pattern for Sending Notifications

To log notifications and send them via various channels (SMS, email, pop-up), the **Observer Design Pattern** is highly suitable. In this pattern, an "observable" object pushes changes, and multiple "observers" wait to receive those changes.

- **`IObservable` (Abstract Class/Interface):**

  - Also prefixed with `I`.
  - Maintains a **list of observers**.
  - Has three core methods:
    - **`add(Observer observer)`:** Adds an observer to the list.
    - **`remove(Observer observer)`:** Removes an observer from the list.
    - **`notify()`:** Loops through the list of observers and calls their `update()` method, notifying them of a new push.

- **`NotificationObservable` (Concrete Observable):**

  - This class extends `IObservable` and is responsible for managing and notifying observers about new notifications.
  - It overrides the `add`, `remove`, and `notify` methods.
  - **`add` and `remove` methods:** Simply add or remove an observer from its internal list.
  - **`notify` method:** Iterates through its list of observers and calls `update()` on each of them.
  - **Notification Handling:**
    - It has a reference to an `INotification` object (the current notification).
    - **`getNotification()`:** Returns the current `INotification` object.
    - **`setNotification(INotification notification)`:**
      - Sets the current notification.
      - Crucially, after setting the notification, it internally calls the `notify()` method, which then triggers all registered observers. This means as soon as a notification is set, all observers are informed.
      - Includes a check for null pointer and deletion of old notification to manage memory.
    - The speaker clarifies that `getNotification()` will often call `getNotificationContent()` to get the string representation for observers.

- **`IObserver` (Abstract Class/Interface):**

  - Also prefixed with `I`.
  - Contains a single abstract method: **`update()`**.
  - **Purpose:** When an observer's `update()` method is called, it typically requests the new value from its observed `Observable`.

- **Concrete Observers:** These classes implement `IObserver` and define how they react to a new notification.

  - **`Logger`:**

    - Purpose: To log notifications.
    - It is an observer that, upon receiving an `update()`, fetches the notification content and logs it.
    - **`update()` method:** Calls the `NotificationObservable`'s `getNotificationContent()` method to retrieve the latest notification and prints it to the console. This fulfills the logging requirement.
    - **Constructor:** Takes a `NotificationObservable` instance so it knows which observable to observe. (Note: This initial design is later improved for plug-and-play).

  - **`NotificationEngine` (Abstract Observer):**
    - Purpose: To actually send the notification over the internet (email, SMS, pop-up).
    - It is designed as an abstract class itself, as it doesn't know _how_ to send notifications; it delegates this responsibility to a separate "strategy".
    - **`update()` method:** Its implementation is detailed later, in conjunction with the Strategy Design Pattern.
    - **Constructor:** Takes a `NotificationObservable` instance (similar to `Logger`).

#### 3.4. Strategy Design Pattern within Notification Engine

The `NotificationEngine` needs to send notifications via different means (email, SMS, pop-up). This is a perfect use case for the **Strategy Design Pattern**. The `NotificationEngine` acts as the "client" or "context," and the actual sending mechanisms are defined by different "strategy" classes.

- **`INotificationStrategy` (Abstract Class/Interface):**

  - Also prefixed with `I`.
  - Contains a single method: **`sendNotification(string content)`**.
  - **Purpose:** Concrete strategy classes will implement this method to define how to send the notification content.

- **Concrete Strategies:** These classes implement `INotificationStrategy`, each handling a specific sending method.

  - **`EmailStrategy`:**
    - Purpose: Knows how to send a notification via email.
    - **`sendNotification(string content)`:** Contains the logic to interact with an email client and send the `content`. For demonstration, it simply prints to the console that an email notification is being sent to a specific email ID.
    - **Constructor:** Takes an email address.
  - **`SmsStrategy`:**
    - Purpose: Knows how to send a notification via SMS.
    - **`sendNotification(string content)`:** Contains the logic to send the `content` via SMS. For demonstration, it prints to the console that an SMS notification is being sent.
    - **Constructor:** Takes a mobile number.
  - **`PopUpStrategy`:**
    - Purpose: Knows how to send a notification as a pop-up.
    - **`sendNotification(string content)`:** Contains the logic to display the `content` as a pop-up. For demonstration, it prints to the console that a pop-up notification is being sent.
    - **Constructor:** Does not require specific contact information like email or mobile number.

- **`NotificationEngine` (Revisited):**
  - The `NotificationEngine` itself is an observer.
  - **Relationship with Strategies:**
    - Initially, a typical Strategy pattern has a "has-a" relationship (one `NotificationEngine` "has-a" single `INotificationStrategy`).
    - **Important Modification:** The speaker modifies this to a **one-to-many relationship**. The `NotificationEngine` now "has-a" **list (or vector) of `INotificationStrategy`**. This allows a single notification to be sent via multiple channels (email, SMS, pop-up) simultaneously, fulfilling the requirement for broad extensibility and support for multiple delivery methods.
    - **`addNotificationStrategy(INotificationStrategy strategy)`:** A method to add a new strategy to its list.
  - **`update()` method (Implementation):**
    - When `update()` is called by the `NotificationObservable`, the `NotificationEngine` first retrieves the notification content using `notificationObservable.getNotificationContent()`.
    - Then, it loops through its **list of `INotificationStrategy` objects**.
    - For each strategy in the list, it calls the `sendNotification()` method, passing the retrieved notification content.
    - Each strategy then handles the actual sending mechanism (email client interaction, SMS gateway, pop-up display, etc.).

#### 3.5. Notification Service (Bridge and Singleton)

The final piece is the `NotificationService`, which acts as a bridge between the notification creation flow and the sending mechanism.

- **Purpose:** Its primary role is to receive a created notification and pass it to the `NotificationObservable` for further processing (notifying observers).
- **`sendNotification(INotification notification)` Method:**
  - This is the main public method that a client application will call to send a notification.
  - It takes an `INotification` object as input.
  - **History Storage:** Before passing the notification to the observable, it stores the notification in an internal **list of `INotification` objects (`notifications` vector)**. This fulfills the requirement to store all notifications for history maintenance.
  - **Delegation to Observable:** It then calls the `setNotification()` method of its `NotificationObservable` instance, passing the received notification. As previously explained, calling `setNotification()` on the observable will trigger the entire Observer Pattern flow (notifying all registered observers).
- **Relationships:**
  - It "has-a" reference to a `NotificationObservable`.
  - It "has-a" list to store notifications.
- **Singleton Design Pattern:**
  - The `NotificationService` is implemented as a **Singleton class**.
  - **Why Singleton?** Services or managers that need to maintain a single state or history throughout the application should have only one instance. In this case, the `NotificationService` maintains the history of sent notifications in its internal list. Having multiple instances would lead to multiple, fragmented histories, which is undesirable.
  - **Implementation:**
    - The constructor is made `private` to prevent direct instantiation.
    - A `static` instance of `NotificationService` is kept internally.
    - A `static` public method, **`getInstance()`**, is provided to access the single instance. This method checks if an instance already exists; if not, it creates one; otherwise, it returns the existing instance.
- **`getObservable()` Method:** Returns the `NotificationObservable` instance managed by the `NotificationService`. This is created within the `NotificationService`'s constructor to abstract its creation from the client.
- **Destructor:** A destructor is provided for proper memory management, especially for the `NotificationObservable` instance.

### 4. Recap of Design Patterns Used

The complete notification system design effectively integrates multiple design patterns:

- **Observer Design Pattern:** Used for pushing notifications to multiple consumers (logger, different sending engines).
- **Decorator Design Pattern:** Used for dynamically adding features (like timestamps, signatures) to notifications.
- **Strategy Design Pattern:** Used within the `NotificationEngine` to encapsulate different notification sending mechanisms (email, SMS, pop-up).
- **Singleton Design Pattern:** Used for the `NotificationService` to ensure a single instance for managing notification history.

### 5. Final Design Flow (Mental Picture)

The speaker visualizes the entire flow:

1.  **Notification Creation:** A notification is created (e.g., `SimpleNotification`).
2.  **Decoration:** This notification can then be decorated dynamically with features using `TimeStampDecorator` or `SignatureDecorator`.
3.  **Notification Service:** The `NotificationService` receives this decorated notification via its `sendNotification()` method.
4.  **History Storage:** The `NotificationService` first stores the notification for historical purposes.
5.  **Observable Trigger:** The `NotificationService` then passes the notification to its `NotificationObservable` instance by calling `setNotification()`.
6.  **Observer Notification:** The `NotificationObservable`, upon receiving the notification, `notify()` all its registered observers (Logger, NotificationEngine).
7.  **Observer Action:**
    - The `Logger` observer receives the update, reads the notification content, and logs it (e.g., to console).
    - The `NotificationEngine` observer receives the update, reads the notification content, and then iterates through its list of `INotificationStrategy` objects.
    - Each `INotificationStrategy` (Email, SMS, Pop-up) then executes its `sendNotification()` method, sending the notification via its specific channel. Each strategy knows how to interact with its respective sending client (email client, SMS gateway, etc.).

This entire process ensures the system is plug-and-play, extensible, and handles logging and history.

### 6. Code Walkthrough (Detailed Explanation of Each Class/Component)

The speaker then proceeds to show the actual C++ code implementation, mirroring the design discussed.

#### 6.1. Notification and Decorators

- **`INotification`:**
  ```cpp
  class INotification {
  public:
      virtual std::string getContent() = 0; // Pure virtual function
      virtual ~INotification() = default;
  };
  ```
  - An abstract class with a pure virtual `getContent()` method.
- **`SimpleNotification`:**
  ```cpp
  class SimpleNotification : public INotification {
  private:
      std::string text;
  public:
      SimpleNotification(const std::string& t) : text(t) {}
      std::string getContent() override {
          return text;
      }
  };
  ```
  - A concrete implementation of `INotification` that stores a `text` string and returns it via `getContent()`.
  - **Extensibility:** Mentioned that other types like HTML notifications could be added here, supporting images, GIFs, videos.
- **`INotificationDecorator`:**
  ```cpp
  class INotificationDecorator : public INotification {
  protected:
      INotification* notification; // "Has-a" relationship
  public:
      INotificationDecorator(INotification* n) : notification(n) {}
      // getContent() will be overridden by concrete decorators
      virtual ~INotificationDecorator() {
          delete notification; // Important for memory management
      }
  };
  ```
  - An abstract class that inherits `INotification` ("is-a" relationship) and holds a pointer to an `INotification` object ("has-a" relationship).
  - The `protected` member `notification` allows concrete decorators to access the decorated object.
  - Includes a virtual destructor to correctly deallocate the `notification` pointer.
- **`TimeStampDecorator`:**
  ```cpp
  class TimeStampDecorator : public INotificationDecorator {
  public:
      TimeStampDecorator(INotification* n) : INotificationDecorator(n) {}
      std::string getContent() override {
          // Simulate adding a timestamp
          // In real world, use a utility to fetch current time
          std::string timestamp = "[Timestamp: 2023-10-27 10:30:00] ";
          return timestamp + notification->getContent();
      }
  };
  ```
  - Concrete decorator. Its `getContent()` method prepends a static timestamp string to the content obtained from the wrapped `notification`'s `getContent()`.
- **`SignatureDecorator`:**
  ```cpp
  class SignatureDecorator : public INotificationDecorator {
  private:
      std::string signature;
  public:
      SignatureDecorator(INotification* n, const std::string& s)
          : INotificationDecorator(n), signature(s) {}
      std::string getContent() override {
          // Append signature
          return notification->getContent() + "\n[Signature: " + signature + "]";
      }
  };
  ```
  - Concrete decorator. Its `getContent()` method appends a user-provided signature string to the content obtained from the wrapped `notification`'s `getContent()`.

#### 6.2. Observer Pattern Components

- **`IObserver`:**
  ```cpp
  class IObserver {
  public:
      virtual void update() = 0; // Pure virtual function
      virtual ~IObserver() = default;
  };
  ```
  - An abstract class with a pure virtual `update()` method.
- **`IObservable`:**
  ```cpp
  class IObservable {
  protected:
      std::vector<IObserver*> observers; // List of observers
  public:
      virtual void addObserver(IObserver* observer) = 0;
      virtual void removeObserver(IObserver* observer) = 0;
      virtual void notifyObservers() = 0;
      virtual ~IObservable() = default;
  };
  ```
  - An abstract class with a list of `IObserver` pointers and pure virtual methods for adding, removing, and notifying observers.
- **`NotificationObservable`:**

  ```cpp
  class NotificationObservable : public IObservable {
  private:
      INotification* currentNotification; // The notification to be observed
  public:
      NotificationObservable() : currentNotification(nullptr) {}
      ~NotificationObservable() {
          // Clean up observers and notification if necessary
          // Depending on ownership, this might need more robust handling
          for (IObserver* obs : observers) {
              // If observable owns observers, delete them.
              // In this design, observers are created externally.
          }
          delete currentNotification;
      }

      void addObserver(IObserver* observer) override {
          observers.push_back(observer);
          // Add validation to prevent duplicates if needed
      }

      void removeObserver(IObserver* observer) override {
          // Simple removal, could be more robust
          for (size_t i = 0; i < observers.size(); ++i) {
              if (observers[i] == observer) {
                  observers.erase(observers.begin() + i);
                  break;
              }
          }
      }

      void notifyObservers() override {
          for (IObserver* obs : observers) {
              obs->update(); // Call update on each observer
          }
      }

      // Methods to get and set the notification
      std::string getNotificationContent() const {
          if (currentNotification) {
              return currentNotification->getContent();
          }
          return "";
      }

      void setNotification(INotification* notification) {
          if (currentNotification) {
              delete currentNotification; // Delete previous notification
          }
          currentNotification = notification; // Set new notification
          notifyObservers(); // Notify all observers immediately
      }
  };
  ```

  - A concrete `IObservable` implementation.
  - It maintains `currentNotification` which is the notification being observed.
  - `addObserver` and `removeObserver` manage the list of `observers`.
  - `notifyObservers` loops through `observers` and calls `update()` on each.
  - `getNotificationContent()` provides the content of the current notification as a string.
  - `setNotification()` sets `currentNotification` and **immediately calls `notifyObservers()`**, ensuring observers are informed of new notifications.

#### 6.3. Concrete Observers

- **`Logger`:**
  ```cpp
  class Logger : public IObserver {
  private:
      NotificationObservable* observable; // Observes this observable
  public:
      // Initial constructor for explicit observable passing
      Logger(NotificationObservable* obs) : observable(obs) {
          // No automatic registration here in initial code
          // Later modified for plug-and-play
      }
      void update() override {
          std::cout << "Logging New Notification: "
                    << observable->getNotificationContent() << std::endl;
      }
      // Later added default constructor for plug-and-play (see section 7.2)
  };
  ```
  - A concrete `IObserver`.
  - It stores a pointer to the `NotificationObservable` it observes.
  - Its `update()` method retrieves the notification content using `observable->getNotificationContent()` and prints it to the console.
  - The speaker notes that `getNotificationContent()` is used because observers usually need the content as a string, not the full `INotification` object.

#### 6.4. Strategy Pattern Components

- **`INotificationStrategy`:**
  ```cpp
  class INotificationStrategy {
  public:
      virtual void sendNotification(const std::string& content) = 0;
      virtual ~INotificationStrategy() = default;
  };
  ```
  - An abstract class with a pure virtual `sendNotification()` method that takes a string content.
- **`EmailStrategy`:**
  ```cpp
  class EmailStrategy : public INotificationStrategy {
  private:
      std::string emailAddress;
  public:
      EmailStrategy(const std::string& email) : emailAddress(email) {}
      void sendNotification(const std::string& content) override {
          std::cout << "Sending Email Notification to " << emailAddress
                    << ": " << content << std::endl;
          // Actual email sending logic would go here (e.g., using an email client library)
      }
  };
  ```
  - A concrete `INotificationStrategy` that simulates sending an email. It takes an `emailAddress` in its constructor.
- **`SmsStrategy`:**
  ```cpp
  class SmsStrategy : public INotificationStrategy {
  private:
      std::string mobileNumber;
  public:
      SmsStrategy(const std::string& mobile) : mobileNumber(mobile) {}
      void sendNotification(const std::string& content) override {
          std::cout << "Sending SMS Notification to " << mobileNumber
                    << ": " << content << std::endl;
          // Actual SMS sending logic
      }
  };
  ```
  - A concrete `INotificationStrategy` that simulates sending an SMS. It takes a `mobileNumber`.
- **`PopUpStrategy`:**

  ```cpp
  class PopUpStrategy : public INotificationStrategy {
  public:
      void sendNotification(const std::string& content) override {
          std::cout << "Sending Pop Up Notification: " << content << std::endl;
          // Actual pop-up display logic
      }
  };
  ```

  - A concrete `INotificationStrategy` that simulates sending a pop-up.

- **`NotificationEngine`:**

  ```cpp
  class NotificationEngine : public IObserver {
  private:
      NotificationObservable* observable; // Observes this observable
      std::vector<INotificationStrategy*> strategies; // List of strategies (one-to-many)
  public:
      // Initial constructor for explicit observable passing
      NotificationEngine(NotificationObservable* obs) : observable(obs) {
          // No automatic registration here in initial code
          // Later modified for plug-and-play
      }
      ~NotificationEngine() {
          for (INotificationStrategy* strategy : strategies) {
              delete strategy; // Clean up owned strategies
          }
      }

      void addNotificationStrategy(INotificationStrategy* strategy) {
          strategies.push_back(strategy);
      }

      void update() override {
          std::string content = observable->getNotificationContent();
          for (INotificationStrategy* strategy : strategies) {
              strategy->sendNotification(content); // Call send for each strategy
          }
      }
      // Later added default constructor for plug-and-play (see section 7.2)
  };
  ```

  - A concrete `IObserver` that uses a list (`std::vector`) of `INotificationStrategy` objects.
  - `addNotificationStrategy()` allows adding different sending strategies.
  - Its `update()` method gets the notification content and then iterates through all registered strategies, calling `sendNotification()` on each.

#### 6.5. Notification Service (Singleton)

- **`NotificationService`:**

  ```cpp
  class NotificationService {
  private:
      NotificationObservable* observable;
      std::vector<INotification*> notificationsHistory; // For storing history
      static NotificationService* instance; // Singleton instance

      // Private constructor for Singleton pattern
      NotificationService() : observable(new NotificationObservable()) {}

      // Delete copy constructor and assignment operator for Singleton
      NotificationService(const NotificationService&) = delete;
      NotificationService& operator=(const NotificationService&) = delete;

  public:
      // Public static method to get the single instance
      static NotificationService* getInstance() {
          if (instance == nullptr) {
              instance = new NotificationService();
          }
          return instance;
      }

      // Destructor
      ~NotificationService() {
          delete observable; // Clean up observable
          for (INotification* n : notificationsHistory) {
              delete n; // Clean up notifications in history
          }
      }

      NotificationObservable* getObservable() {
          return observable;
      }

      void sendNotification(INotification* notification) {
          notificationsHistory.push_back(notification); // Store for history
          observable->setNotification(notification); // Delegate to observable
      }
  };

  // Initialize the static member outside the class definition
  NotificationService* NotificationService::instance = nullptr;
  ```

  - This is the central class, implemented as a **Singleton**.
  - `private` constructor, `delete` copy constructor/assignment operator, and `static getInstance()` method ensure only one instance.
  - It contains a `NotificationObservable` and a `notificationsHistory` vector.
  - `sendNotification()` adds the notification to history and then calls `observable->setNotification()` to trigger the sending process.
  - `getObservable()` provides access to the internal observable. The observable is created _inside_ the `NotificationService`'s constructor, so the client doesn't need to create it explicitly. This aids the "plug-and-play" model by hiding complexity.

### 7. Client Code (How to Use the System)

#### 7.1. Initial Client Code (Less Plug-and-Play)

This section demonstrates how a client would interact with the system initially. It highlights areas where the client still needs to know internal details.

1.  **Get Notification Service Instance:**
    ```cpp
    NotificationService* service = NotificationService::getInstance();
    ```
    - The client gets the singleton instance of `NotificationService`.
2.  **Get Observable:**
    ```cpp
    NotificationObservable* observable = service->getObservable();
    ```
    - The client explicitly asks the service for its `NotificationObservable` instance.
3.  **Create Observers (Logger, NotificationEngine):**
    ```cpp
    Logger* logger = new Logger(observable); // Pass observable
    NotificationEngine* engine = new NotificationEngine(observable); // Pass observable
    ```
    - The client creates the concrete observers, passing the `observable` to their constructors.
4.  **Add Strategies to Engine:**
    ```cpp
    engine->addNotificationStrategy(new EmailStrategy("user@example.com"));
    engine->addNotificationStrategy(new SmsStrategy("1234567890"));
    engine->addNotificationStrategy(new PopUpStrategy());
    ```
    - The client explicitly adds various `INotificationStrategy` objects to the `NotificationEngine`.
5.  **Add Observers to Observable:**
    ```cpp
    observable->addObserver(logger);
    observable->addObserver(engine);
    ```
    - Crucially, the client explicitly tells the `observable` to `add` the `logger` and `engine` as its observers.
6.  **Create and Decorate Notification:**
    ```cpp
    INotification* notification = new SimpleNotification("Your order has been shipped!");
    notification = new TimeStampDecorator(notification);
    notification = new SignatureDecorator(notification, "Customer Care");
    ```
    - A `SimpleNotification` is created and then decorated with `TimeStampDecorator` and `SignatureDecorator`. The order of decoration matters (timestamp before signature in this example).
7.  **Send Notification:**
    ```cpp
    service->sendNotification(notification);
    ```
    - The client calls the `sendNotification()` method on the `NotificationService`, passing the decorated notification.

- **Output of Initial Code:**

  ```
  Logging New Notification: [Timestamp: 2023-10-27 10:30:00] Your order has been shipped!
  [Signature: Customer Care]
  Sending Email Notification to user@example.com: [Timestamp: 2023-10-27 10:30:00] Your order has been shipped!
  [Signature: Customer Care]
  Sending SMS Notification to 1234567890: [Timestamp: 2023-10-27 10:30:00] Your order has been shipped!
  [Signature: Customer Care]
  Sending Pop Up Notification: [Timestamp: 2023-10-27 10:30:00] Your order has been shipped!
  [Signature: Customer Care]
  ```

  - The log appears first, followed by the email, SMS, and pop-up messages, all containing the decorated notification content.

- **Problem with Initial Code:** The speaker identifies a problem: the client still needs to know too much about the internal workings (creating observable, adding observers, etc.). This is not truly "plug-and-play".

#### 7.2. Updated/Improved Client Code (True Plug-and-Play)

To make the system truly plug-and-play, the responsibility of obtaining the observable and registering with it is moved from the client to the observers themselves.

- **Changes in `Logger` and `NotificationEngine` (Concrete Observers):**

  - A **default constructor** is added to `Logger` (and `NotificationEngine`).
  - Inside this default constructor, the observer _itself_ obtains the `NotificationObservable` instance from the `NotificationService` (which is a Singleton).
  - Immediately after getting the observable, the observer **adds itself** (`this`) to the observable's list of observers.
  - **Impact on UML:** This adds a new "has-a" relationship from `NotificationObserver` (both `Logger` and `NotificationEngine`) to `NotificationService`.

  ```cpp
  // Modified Logger class (similar change for NotificationEngine)
  class Logger : public IObserver {
  private:
      NotificationObservable* observable;
  public:
      // Default constructor for plug-and-play
      Logger() {
          // Get singleton instance of NotificationService
          NotificationService* service = NotificationService::getInstance();
          // Get the observable managed by the service
          observable = service->getObservable();
          // Add self as an observer to this observable
          observable->addObserver(this);
      }
      // Existing constructor (can be kept if explicit observable passing is also desired)
      Logger(NotificationObservable* obs) : observable(obs) {
           // If this constructor is used, client still needs to add observer
      }
      void update() override {
          std::cout << "Logging New Notification: "
                    << observable->getNotificationContent() << std::endl;
      }
      // ... (destructor if needed)
  };
  ```

- **Simplified Main Client Code:**

  ```cpp
  // Get notification service instance
  NotificationService* service = NotificationService::getInstance();

  // Create observers. They now self-register!
  Logger* logger = new Logger(); // No observable passed
  NotificationEngine* engine = new NotificationEngine(); // No observable passed

  // Add strategies to the engine (client still needs to decide delivery channels)
  engine->addNotificationStrategy(new EmailStrategy("user@example.com"));
  engine->addNotificationStrategy(new SmsStrategy("1234567890"));
  engine->addNotificationStrategy(new PopUpStrategy());

  // Create and decorate notification (same as before)
  INotification* notification = new SimpleNotification("Your order has been shipped!");
  notification = new TimeStampDecorator(notification);
  notification = new SignatureDecorator(notification, "Customer Care");

  // Send notification (same as before)
  service->sendNotification(notification);

  // Clean up (important in C++)
  delete logger;
  delete engine;
  delete service; // For singleton, might require a specific cleanup method or rely on program exit
  // Note: The decorated notification is managed by NotificationService and Decorators.
  ```

  - Now, the client code is significantly simpler. The client no longer needs to manually get the observable or explicitly call `addObserver()`.
  - The `Logger` and `NotificationEngine` objects, upon creation, automatically fetch the correct observable and register themselves.
  - The client only needs to:
    1.  Get the `NotificationService` instance.
    2.  Create the desired observers (`Logger`, `NotificationEngine`).
    3.  Add specific strategies to the `NotificationEngine`.
    4.  Create and decorate the notification.
    5.  Call `sendNotification()` on the service.

- **Output of Updated Code:** The output remains exactly the same as the initial code, but the internal complexity for the client is reduced.

This refined approach fulfills the "plug-and-play" requirement, making the notification service easy to integrate into other applications.

### 8. Final Thoughts and Conclusion

- Designing such systems, including choosing the right design patterns, comes with practice.
- Understanding how multiple design patterns (Observer, Decorator, Strategy, Singleton) can communicate and work together is key to building robust and extensible applications.
- For example, sending notifications naturally aligns with the Observer pattern. The requirement for dynamic notification changes points to the Decorator pattern.
- Continued practice with new problems and studying design patterns will lead to a clearer understanding.

Here are comprehensive notes on the Command Design Pattern, based on the provided video transcript:

---

## Command Design Pattern: Detailed Notes

### 1. Introduction to the Command Design Pattern

The Command Design Pattern is a highly useful and intuitive design pattern that finds application in various scenarios. It's so fundamental that it can even form the basis of a small application. While seemingly complex, it's quite easy to grasp, and developers often find they have already encountered its implementation in common computer applications.

### 2. Core Concept: Source, Receiver, and Command Objects

To understand the Command Design Pattern, consider three main components:

- **Source (or Client/Invoker):** This is the object that initiates a request or wants something to be done.
- **Receiver:** This is the object that actually performs the action or carries out the request.
- **Command:** In this pattern, the request or action itself is treated as an object. It acts as an intermediary.

**Traditional Approach (Without Command Pattern):**
In a traditional setup, the **Source** would directly interact with the **Receiver**. For instance, the Source would call a specific method on the Receiver, such as `run()`, `talk()`, or `walk()`, to instruct it to perform an action. The Receiver would then execute the method and return its output directly to the Source.

**Command Pattern Approach:**
The Command Design Pattern introduces an **intermediary Command object** between the Source and the Receiver.

1.  Instead of the Source directly communicating with the Receiver, the **Source tells the Command object** to "do something for me" or "make the Receiver do something".
2.  The **Command object then instructs the Receiver** to perform the actual work.
3.  The **Receiver returns the result to the Command**.
4.  Finally, the **Command returns the result to the Source**.

**Why Introduce a Command Object?**
The primary reason for introducing the Command object is to achieve **loose coupling** between the Source (initiator) and the Receiver (performer). This means they are less dependent on each other, allowing for greater flexibility and maintainability.

### 3. Classic Example: Smart Home Automation System

A widely used and classic example to illustrate the Command Design Pattern is a **Smart Home Automation System**.

**Scenario:**
Imagine developing an application that functions as a remote control for smart home devices. This application would feature multiple buttons, each designed to control a specific smart appliance.

- One button might turn a light bulb on or off.
- Another button could control a fan (on/off).
- A third button might manage an air conditioner (on/off).
  The goal is to build an application that allows different buttons to dynamically control various smart home appliances.

### 4. Problem with the Traditional (Tightly Coupled) Approach

If one were to implement the smart home automation system without the Command Design Pattern, using conventional object-oriented programming, a common approach would be:

1.  **Creating a `Remote` Class:** A class named `Remote` would be created to represent the remote control.
2.  **Direct Device Objects:** Inside the `Remote` class, instances of individual smart devices like `Light`, `Fan`, and `AC` would be directly embedded or referenced. For example, a `Light` class would have `on()` and `off()` methods.
3.  **Specific Control Methods:** The `Remote` class would have methods tied to specific devices, such as `pressLightButton()`.
4.  **Direct Method Calls:** When `pressLightButton()` is invoked, it would directly call the `on()` method of the `Light` object (e.g., `light.on()`).

**Shortcomings of this Approach:**

- **Tight Coupling:** This design leads to **tight coupling** where the `Remote` class is directly dependent on (tightly coupled with) concrete classes like `Fan`, `AC`, and `Light`.
- **Lack of Flexibility (Dynamic Changes):** If the functionality of a button needs to change dynamically (e.g., today a button controls a light, but tomorrow it needs to control a fan or a newly added device like a heater), the code within the `Remote` class itself would need to be modified.
- **Violation of Open-Closed Principle:** This tight coupling and need for modification directly violates the **Open-Closed Principle**, one of the SOLID principles. This principle states that software entities should be **open for extension (allowing new functionalities to be added)** but **closed for modification (preventing existing code from being changed)**.

### 5. Solution with Command Design Pattern: Class Diagram & Explanation

The Command Design Pattern addresses the tight coupling issue by ensuring that the `Remote` (the invoker) does not directly interact with the concrete appliances. Instead, the `Remote` interacts with a `Command` object, which then knows how to communicate with the appropriate appliance.

Let's build the conceptual class diagram step-by-step:

#### 5.1. `Remote` Class (Invoker)

- First, we define a class called `Remote`.
- This `Remote` class will ultimately hold references to `Command` objects, not direct appliance objects.

#### 5.2. `ICommand` Interface (Abstract Command)

- An **interface or abstract class**, often named `ICommand` (or simply `Command` in the code example), is created.
- It is marked as `abstract`.
- It defines an abstract method: `execute()`.
  - The `execute()` method signifies that any class implementing this interface can perform some action, but the specifics of _what_ action are not defined at this abstract level.
- Later, an `undo()` method is also introduced to this interface.
  - The `undo()` method is designed to perform the **opposite action** of what `execute()` performs.

#### 5.3. Appliance Classes (Receivers)

- Concrete appliance classes are created, such as `Light` and `Fan`.
- Each appliance class has its own specific methods:
  - `Light`: Has `on()` and `off()` methods. Calling `on()` turns the light on, and `off()` turns it off.
  - `Fan`: Similarly has `on()` and `off()` methods.
  - (Other appliances like `AC` would also have their respective methods).

#### 5.4. Connecting `Remote` to `Light` (Initial Single Button Scenario)

The goal is for the `Remote` to control the `Light` without a direct link. This is achieved by having the `Remote` hold a reference to an `ICommand` object. Since `ICommand` is abstract, we need a concrete implementation.

#### 5.5. `LightCommand` Class (Concrete Command)

- A **concrete command class** is created, for example, `LightCommand`.
- This class **inherits from the `ICommand` interface**.
- **"Has-A" Relationship:** `LightCommand` holds a **reference to a `Light` object** (e.g., `Light* light;`). This means each `LightCommand` instance is associated with a specific `Light` appliance it will control.
- **Implementing `execute()`:** The `LightCommand` overrides the `execute()` method. Inside this method, it calls the `on()` method of its associated `Light` object (e.g., `light->on()`).
- **Implementing `undo()`:** The `LightCommand` also overrides the `undo()` method. Inside this method, it calls the `off()` method of its associated `Light` object (e.g., `light->off()`).

#### 5.6. `FanCommand` Class (Concrete Command)

- Similar to `LightCommand`, a `FanCommand` class would be created.
- It also inherits from `ICommand`.
- It holds a reference to a `Fan` object.
- Its `execute()` method would call `fan->on()`.
- Its `undo()` method would call `fan->off()`.

#### 5.7. `Remote` Class (Detailed Structure with Toggle Logic)

Now, let's refine the `Remote` class:

- **Command Reference:** The `Remote` holds a reference to an `ICommand` object (e.g., `Command* command;`).
- **`pressButton()` Method:** The `Remote` has a method, say `pressButton()`, which, when called, simply invokes the `execute()` method of its assigned `Command` object (e.g., `command->execute()`).
  - **Crucially, the `Remote` does not know _what_ the command does; it just knows it needs to `execute` it**.
- **`setCommand()` Method:** The `Remote` needs a mechanism to assign a concrete `Command` object to its command reference. This is typically done through a `setCommand()` method (or via the constructor). This method takes a `Command` object as a parameter and assigns it.

**Flow of Execution (Single Button Example):**

1.  The user presses a button on the `Remote`.
2.  The `Remote`'s `pressButton()` method is called.
3.  Inside `pressButton()`, `command.execute()` is invoked. If a `LightCommand` was assigned, its `execute()` method runs.
4.  The `LightCommand`'s `execute()` method calls `light.on()`.
5.  The `Light` object turns on.

**The Benefit of Decoupling:**
The `Remote` is now completely **decoupled** from the specific appliance. If, later, the button needs to control a `Fan` instead of a `Light`, you simply call `remote.setCommand()` and pass a `FanCommand` object. **No changes are required in the `Remote` class's internal code**. This adheres to the Open-Closed Principle.

#### 5.8. Extending to Multiple Buttons

A remote control typically has multiple buttons. This can be easily accommodated:

- **Array of Commands:** Instead of a single `Command*` reference, the `Remote` class will hold an **array or vector of `ICommand*` objects** (e.g., `Command* buttons[NUM_BUTTONS];`). This represents a one-to-many "has-a" relationship.
- **Indexed `setCommand()`:** The `setCommand()` method now takes an `index` parameter in addition to the `Command` object (e.g., `setCommand(int index, Command* command)`). This allows assigning a specific command to a particular button index.
- **Indexed `pressButton()`:** Similarly, the `pressButton()` method takes an `index` parameter (e.g., `pressButton(int index)`). It will then call the `execute()` method of the command stored at that specific index in the `buttons` array (e.g., `buttons[index]->execute()`).

#### 5.9. Adding `undo()` Functionality (Toggle Feature)

The `undo()` method, introduced earlier in the `ICommand` interface, enables powerful features like toggling.

- **`buttonPressed` Array:** To implement a toggle (one press for on, second press for off), the `Remote` needs to keep track of the current state of each button (whether the associated command has been executed or undone). A **boolean array `buttonPressed`** (of the same size as the `commands` array) is added to the `Remote` class.
- **Initial State:** All values in `buttonPressed` are initialised to `false` (representing "off" or "not pressed").
- **Logic within `pressButton(index)`:**
  - **If `buttonPressed[index]` is `false` (meaning the device is currently off):**
    - Call `buttons[index]->execute()` (e.g., turn light ON).
    - Set `buttonPressed[index]` to `true`.
  - **If `buttonPressed[index]` is `true` (meaning the device is currently on):**
    - Call `buttons[index]->undo()` (e.g., turn light OFF).
    - Set `buttonPressed[index]` to `false`.

### 6. Code Walkthrough (C++ Implementation Example)

The video provides a C++ code example to demonstrate the Command Design Pattern:

#### 6.1. `Command` Interface (Abstract Class)

```cpp
class Command {
public:
    virtual void execute() = 0; // Pure virtual method, must be implemented by concrete classes
    virtual void undo() = 0;    // Pure virtual method for undo functionality
};
```

- This abstract class establishes the contract for all specific commands, requiring them to implement `execute()` and `undo()`.

#### 6.2. `Light` Class (Receiver)

```cpp
class Light {
private:
    std::string location; // To distinguish between different lights (e.g., "Living Room")
public:
    Light(const std::string& loc) : location(loc) {} // Constructor to set location
    void on() {
        std::cout << location << " Light is On" << std::endl; // Turns light on
    }
    void off() {
        std::cout << location << " Light is Off" << std::endl; // Turns light off
    }
};
```

- A concrete receiver class representing a smart light. It has methods to turn itself on and off.

#### 6.3. `Fan` Class (Receiver)

```cpp
class Fan {
private:
    std::string location;
public:
    Fan(const std::string& loc) : location(loc) {}
    void on() {
        std::cout << location << " Fan is On" << std::endl;
    }
    void off() {
        std::cout << location << " Fan is Off" << std::endl;
    }
};
```

- Another concrete receiver class, similar to `Light`, representing a smart fan.

#### 6.4. `LightCommand` Class (Concrete Command)

```cpp
class LightCommand : public Command { // Inherits from Command
private:
    Light* light; // "Has-a" relationship: holds a pointer to a Light object
public:
    LightCommand(Light* l) : light(l) {} // Constructor to associate with a specific Light

    void execute() override { // Implementation of execute()
        light->on(); // Calls the 'on' method of the associated Light
    }

    void undo() override { // Implementation of undo()
        light->off(); // Calls the 'off' method of the associated Light
    }
};
```

- This class implements the `Command` interface for controlling a `Light`.
- It takes a `Light` object in its constructor and stores a reference to it.
- Its `execute()` method turns the light on, and its `undo()` method turns it off.

#### 6.5. `FanCommand` Class (Concrete Command)

```cpp
class FanCommand : public Command { // Inherits from Command
private:
    Fan* fan; // "Has-a" relationship: holds a pointer to a Fan object
public:
    FanCommand(Fan* f) : fan(f) {} // Constructor to associate with a specific Fan

    void execute() override {
        fan->on(); // Calls the 'on' method of the associated Fan
    }

    void undo() override {
        fan->off(); // Calls the 'off' method of the associated Fan
    }
};
```

- Similar to `LightCommand`, but for controlling a `Fan`.

#### 6.6. `RemoteControl` Class (Invoker)

```cpp
class RemoteControl {
private:
    static const int NUM_BUTTONS = 4; // Defines the fixed number of buttons (can be dynamic with vector)
    Command* buttons[NUM_BUTTONS];    // Array to hold pointers to Command objects (buttons)
    bool buttonPressed[NUM_BUTTONS];  // Array to track the pressed/unpressed (on/off) state of each button

public:
    // Constructor: Initializes all button slots to null and states to false
    RemoteControl() {
        for (int i = 0; i < NUM_BUTTONS; ++i) {
            buttons[i] = nullptr;        // No command assigned to buttons initially
            buttonPressed[i] = false;    // All buttons are initially in the 'off' state
        }
    }

    // Method to assign a specific command to a button at a given index
    void setCommand(int index, Command* command) {
        // Input validation for the index
        if (index < 0 || index >= NUM_BUTTONS) {
            std::cout << "Invalid button index." << std::endl;
            return;
        }
        // If there's an existing command at this index, delete it to prevent memory leaks
        if (buttons[index] != nullptr) {
            delete buttons[index];
        }
        buttons[index] = command;       // Assign the new command
        buttonPressed[index] = false;   // Set the button's state to 'off' when a new command is assigned
    }

    // Method to simulate pressing a button at a given index
    void pressButton(int index) {
        // Input validation for the index and check if a command is assigned
        if (index < 0 || index >= NUM_BUTTONS || buttons[index] == nullptr) {
            std::cout << "No command assigned at this button: " << index << std::endl;
            return;
        }

        // Toggle Logic:
        // If buttonPressed[index] is FALSE (meaning the device is currently OFF/unpressed)
        if (!buttonPressed[index]) {
            buttons[index]->execute();    // Execute the command (e.g., turn light ON)
            buttonPressed[index] = true;  // Update state to TRUE (device is now ON/pressed)
        } else { // If buttonPressed[index] is TRUE (meaning the device is currently ON/pressed)
            buttons[index]->undo();       // Undo the command (e.g., turn light OFF)
            buttonPressed[index] = false; // Update state to FALSE (device is now OFF/unpressed)
        }
    }

    // Destructor: Cleans up dynamically allocated Command objects to prevent memory leaks
    ~RemoteControl() {
        for (int i = 0; i < NUM_BUTTONS; ++i) {
            if (buttons[i] != nullptr) {
                delete buttons[i]; // Delete commands that were assigned
            }
        }
    }
};
```

- The `RemoteControl` acts as the invoker.
- It holds an array of `Command` pointers (`buttons`) to represent the buttons and their assigned commands.
- It also has a boolean array (`buttonPressed`) to keep track of the on/off (toggled) state for each button.
- **Constructor:** Initializes all button slots to `nullptr` and their states to `false`.
- **`setCommand(int index, Command* command)`:** Assigns a command to a specific button index. It includes validation and handles memory by deleting any previously assigned command at that index before setting a new one. It also resets the button's state to `false`.
- **`pressButton(int index)`:** This is the core method for button interaction. It validates the index and checks if a command is assigned. Then, based on the `buttonPressed` state, it either calls `execute()` or `undo()` on the command, and subsequently updates the `buttonPressed` state to toggle it.
- **Destructor:** Iterates through the `buttons` array and `deletes` any dynamically allocated `Command` objects to prevent memory leaks.

#### 6.7. `main()` Function (Client Code)

```cpp
int main() {
    // 1. Create Receiver objects (appliances)
    Light* livingRoomLight = new Light("Living Room"); // Create a Light instance
    Fan* ceilingFan = new Fan("Ceiling");           // Create a Fan instance

    // 2. Create the Invoker (RemoteControl)
    RemoteControl* remote = new RemoteControl(); // Create the remote control object

    // 3. Create Concrete Command objects and assign them to RemoteControl buttons
    // Button 0 will control the Living Room Light
    remote->setCommand(0, new LightCommand(livingRoomLight));
    // Button 1 will control the Ceiling Fan
    remote->setCommand(1, new FanCommand(ceilingFan));

    // 4. Simulate button presses to demonstrate toggling feature
    std::cout << "--- Simulating Button 0 (Light) ---" << std::endl;
    remote->pressButton(0); // Expected: "Living Room Light is On"
    remote->pressButton(0); // Expected: "Living Room Light is Off"

    std::cout << "\n--- Simulating Button 1 (Fan) ---" << std::endl;
    remote->pressButton(1); // Expected: "Ceiling Fan is On"
    remote->pressButton(1); // Expected: "Ceiling Fan is Off"

    // 5. Test pressing a button where no command is assigned
    std::cout << "\n--- Simulating Button 2 (No Command Assigned) ---" << std::endl;
    remote->pressButton(2); // Expected: "No command assigned at this button: 2"

    // 6. Clean up dynamically allocated memory
    delete livingRoomLight; // Delete the Light object
    delete ceilingFan;     // Delete the Fan object
    delete remote;         // Delete the RemoteControl object (its destructor will delete assigned commands)

    return 0;
}
```

- The `main` function acts as the client.
- It instantiates the **Receivers** (`Light`, `Fan`).
- It instantiates the **Invoker** (`RemoteControl`).
- It then creates **Concrete Command** objects (`LightCommand`, `FanCommand`) and uses the `remote->setCommand()` method to assign them to specific button indices.
- It simulates pressing the buttons multiple times to demonstrate the `execute()` and `undo()` (toggling) functionality.
- It also tests pressing a button index where no command has been assigned, expecting an error message.
- **Memory Management:** Crucially, it demonstrates proper memory deallocation using `delete` for all dynamically allocated objects. The `RemoteControl`'s destructor handles deleting the `Command` objects it manages.

**Expected Code Output:**

```
--- Simulating Button 0 (Light) ---
Living Room Light is On
Living Room Light is Off

--- Simulating Button 1 (Fan) ---
Ceiling Fan is On
Ceiling Fan is Off

--- Simulating Button 2 (No Command Assigned) ---
No command assigned at this button: 2
```

This output confirms that the light and fan can be toggled on/off, and the system correctly identifies unassigned buttons.

### 7. Addressing Common Design Doubts

The video addresses two common questions or doubts that arise when implementing the Command Design Pattern:

#### 7.1. Why is the "Has-A" Relationship in Concrete Commands, Not the Abstract `Command` Interface?

- **Intention (Purpose):** The core reason lies in the "intention" or purpose of each class.
  - The **abstract `ICommand` interface** simply declares that a command can `execute()` and `undo()`. It acts as a contract. It does not (and should not) know _what specific object_ it will execute on or undo. Its intention is purely to define the abstract actions.
  - The **concrete `LightCommand`** (or `FanCommand`) has the specific intention of acting upon a particular `Light` object. It knows _what_ it will execute (e.g., `light.on()`) and _what_ it will undo (e.g., `light.off()`).
- Therefore, the "has-a" relationship (e.g., `Light* light;`) correctly resides within the **concrete command classes** because they are responsible for interacting with specific receiver instances.

#### 7.2. Why Do Concrete Commands Deal with Concrete Receivers (e.g., `Light`), Not an Abstract `Appliance` Interface?

One might question why `LightCommand` directly holds a `Light` object instead of an abstract `Appliance` interface (with `on()` and `off()` methods), which `Light`, `Fan`, `AC` would then inherit from.

- **Violation of Liskov Substitution Principle (LSP):** Attempting to create a generic `Appliance` interface would likely violate the **Liskov Substitution Principle**. LSP states that objects of a superclass should be replaceable with objects of its subclasses without altering the correctness of the program.
- **Practicality of Appliances:** While `Light` and `Fan` might primarily have simple `on()` and `off()` methods, more complex appliances like an `AC`, `Refrigerator`, or `Heater` have many unique and distinct features (e.g., setting temperature, timers, defrost cycles, fan speeds).
- It is **not logically or practically feasible to create a single, standard `Appliance` class or interface** that can meaningfully encompass all the diverse methods and functionalities of every type of smart home appliance. Doing so would either lead to an overly complex and bloated `Appliance` interface or would force all subclasses to implement irrelevant methods, breaking LSP.
- By having concrete commands deal with concrete receivers, the Command Design Pattern remains simpler and more pragmatic for this type of scenario.

### 8. Real-Life Use Cases of Command Design Pattern

The Command Design Pattern is widely used in various applications, often without users even realising it:

1.  **Undo/Redo Features (e.g., Text Editors, Photoshop):**

    - **Application:** Any application that provides an "undo" or "redo" functionality, such as text editors (e.g., Microsoft Word, Google Docs), image editing software (e.g., Photoshop), or CAD software.
    - **Mechanism:** Every action performed by the user (e.g., bolding text, applying a filter, drawing a line) is encapsulated as a **Command object**.
    - Each Command object is responsible for both its `execute()` method (performing the action) and its `undo()` method (reversing the action).
    - When a user presses "Ctrl+Z" (or Command+Z), the application retrieves the last executed command from a history and calls its `undo()` method.
    - **Internal Logging/Stack:** Internally, these applications maintain a **stack (or queue)** of executed Command objects. As actions are performed, their corresponding commands are pushed onto this stack. When an undo operation is requested, commands are popped from the stack, and their `undo()` methods are called. This also allows for logging and queuing of requests.

2.  **Keyboard Shortcuts:**
    - **Scenario:** Setting up custom keyboard shortcuts to perform specific actions, like increasing/decreasing screen brightness, opening an application, or minimising a window.
    - **Mechanism:** A keyboard shortcut does not directly manipulate the monitor's brightness or a task's state. Instead, a **Command object** is assigned to a specific key combination.
    - When the shortcut is pressed, the system triggers the `execute()` method of the associated Command. This Command object then knows how to interact with the relevant subsystem (e.g., the monitor driver) to perform the desired action.
    - **Flexibility:** This allows users to dynamically reassign shortcut functionalities without modifying the core keyboard logic.

### 9. Standard Definition of Command Design Pattern

The standard definition for the Command Design Pattern summarises its core idea and benefits:

**Definition:**
"**It encapsulates a request as an object**".

- This means taking an action or operation (like turning a light on) and wrapping it into a standalone object.

**Benefits (as per definition):**

- **Parameterize clients with different requests:** The client (e.g., `RemoteControl`) can be configured with various commands at runtime without needing to know the specific details of how those commands are executed. It only interacts with the generic `Command` interface.
- **Queue or log requests:** Commands can be stored, queued, or logged. This enables features like macro recording, batch processing, or persistent undo histories.
- **Support undoable operations:** This is a key advantage, making it straightforward to implement undo/redo functionality by pairing an `execute()` method with an `undo()` method for each operation.

**Overall Advantages of using Command Design Pattern:**

- **Loose Coupling:** Decouples the invoker (e.g., `RemoteControl`) from the receiver (e.g., `Light`), improving system flexibility.
- **Extensibility:** New commands and receivers can be added easily without modifying existing code, adhering to the Open-Closed Principle.
- **Undo/Redo:** Provides a natural way to implement undo and redo features by allowing operations to be reversed.
- **Flexibility:** Allows requests to be queued, logged, or dynamically assigned at runtime.
- **Macro Commands:** Although not explicitly detailed in the example, the pattern also allows for combining multiple commands into a single "macro" command.

---

Here are comprehensive notes on the Adapter Design Pattern, based on the provided video transcript:

---

## Adapter Design Pattern: Detailed Notes

### 1. Introduction to Adapter Design Pattern

The Adapter Design Pattern is an **easy-to-understand** and **widely used** design pattern in software development. It is frequently encountered in application development and is a common topic in interviews.

**Real-Life Analogy of an Adapter:**
The concept of an adapter in programming is analogous to real-life adapters.

- **Example 1: Power Socket Adapter**

  - Imagine being in a hotel room with **US-type power sockets**.
  - You have an **Indian-socket based charger**.
  - To charge your device, you would use an **international adapter**. This adapter allows your Indian charger to plug into it, and the adapter itself plugs into the US socket, enabling communication between the two incompatible systems.

- **Example 2: USB Cable Adapter**
  - You have a **Type-C cable** that can charge your mobile phone.
  - However, your existing power adapter only has a **Type-B input**.
  - You would use a **different kind of adapter** that converts Type-C to Type-A (or a suitable format) to bridge this incompatibility.

**Adapter in Programming Context:**
In programming, an adapter helps **two completely different interfaces** communicate with each other. An "interface" here can mean:

- A **contract**.
- An **abstract class**.
- A true **interface** as in Java.

The core idea is to introduce an **adapter** between two classes, abstract classes, or interfaces that are otherwise **incompatible** and cannot interact directly. The adapter acts as a translator or bridge, enabling them to "talk" to each other.

### 2. Why Adapter Design Pattern is Needed

The Adapter pattern typically addresses scenarios where you need to integrate existing code with new or external components.

**Integrating Third-Party Libraries:**
When developing an application, it's common to integrate **third-party applications, libraries, or classes** instead of implementing everything yourself. Examples include:

- Payment gateways (e.g., Razorpay).
- Notification systems (e.g., WhatsApp notifications).

Let's consider your **existing application code** and a **third-party library**.

- **The Problem with Direct Integration (Tight Coupling):**

  - A naive approach might be to reserve a small part of your existing code to directly call methods from the third-party library.
  - This leads to **tight coupling** between your existing code and the third-party library.
  - **Consequence of Tight Coupling:** If you decide to switch third-party libraries (e.g., from Library A to Library B for a notification system because it's cheaper or better), you would have to make changes in your existing application code. This is considered bad practice.

- **Solution: Introducing an Adapter**
  - Instead of calling the third-party library directly from your existing code, you introduce an **adapter**.
  - The **existing code** only communicates with the **adapter**. It doesn't know which specific third-party library is being used.
  - The **adapter** then communicates with the **third-party library**.
  - The adapter's job is to act as an intermediary, returning data to your existing code after interacting with the third-party library.

**Reasons for Introducing an Adapter:**
An adapter is introduced for several reasons:

- Your existing code might be written in a **very different way** from the third-party library.
- The **language** might be different.
- The **return types** might be vastly different.
- Most importantly, to **avoid tightly coupling** your existing code with the third-party library.

The adapter works exactly like a **real-life adapter**, facilitating communication between your existing code and the third-party library.

**Puzzle Pieces Analogy:**
Imagine your **existing code** as one puzzle piece and your **third-party library** as another.

- These two puzzle pieces **cannot directly join** because their interfaces (shapes) are incompatible.
- You introduce an **adapter**, which is a third puzzle piece.
- The adapter has a shape on one side that fits your existing code's puzzle piece, and a shape on the other side that fits the third-party library's puzzle piece.
- This allows all three pieces (existing code, adapter, third-party library) to **easily join together**, enabling interaction.

### 3. Detailed Example: JSON Report Generation

Let's walk through a concrete example to understand the Adapter pattern better.

**Scenario:**
Suppose you have an application where a **client** needs to fetch reports in **JSON format**.

**Client's Expectation (Target Interface):**

- The client expects an interface (or abstract class) called `IReports`.
- This `IReports` interface will have a method: `getJsonData()`.
- The client interacts with this `IReports` interface to get JSON data.
- For simplicity, `getJsonData` could take a `rawData` string as a parameter and return JSON data.

```java
// IReport Interface (Target Interface)
interface IReport {
    String getJsonData(String rawData);
}
```

_Clarifying Commentary:_ This `IReport` interface defines the contract that the client expects. Any class that the client interacts with must implement this interface and provide the `getJsonData` method.

**Third-Party Library (Adaptee):**

- You know that a third-party library exists that can provide **XML data** for a report.
- Let's call this library `XMLDataProvider`.
- This library has a method: `getXMLData()`.
- For simplicity, `getXMLData` also takes a `rawData` string and returns XML data.

```java
// XMLDataProvider (Adaptee) - Third-Party Library
class XMLDataProvider {
    public String getXMLData(String rawData) {
        // Simulating XML data creation from rawData
        // Example: rawData "Name:ID" -> "<report><name>Name</name><id>ID</id></report>"
        System.out.println("Converting raw data to XML...");
        String[] parts = rawData.split(":");
        if (parts.length == 2) {
            String name = parts;
            String id = parts;
            return "<report><name>" + name + "</name><id>" + id + "</id></report>";
        }
        return "<report></report>";
    }
}
```

_Clarifying Commentary:_ The `XMLDataProvider` is the "adaptee" because it's the class with an incompatible interface (it provides XML) that we want to adapt to meet the client's needs (JSON). The speaker explains that this example implementation converts a simple "name:ID" string into a basic XML structure. In a real scenario, this could involve converting complex user interface data, PDF data, CSV, or Excel sheet data into XML.

**The Problem of Incompatibility:**
The client **expects JSON data** via the `IReports` interface's `getJsonData` method.
The third-party library **provides XML data** via its `getXMLData` method.
These are two completely different interfaces, and they cannot talk directly.

**Introducing the Adapter (`XMLDataProviderAdapter`):**
To bridge this gap, we introduce an **adapter class** called `XMLDataProviderAdapter`.

- **Relationship 1: `Is-a` Relationship (Inheritance)**

  - The `XMLDataProviderAdapter` **inherits** (or implements) the `IReports` interface.
  - This means the adapter **is a** Report.
  - By inheriting `IReports`, the `XMLDataProviderAdapter` must **override** the `getJsonData` method. This allows the adapter to behave exactly like an `IReport` from the client's perspective. Any client expecting an `IReport` can now receive an `XMLDataProviderAdapter` object.

- **Relationship 2: `Has-a` Relationship (Composition)**
  - The `XMLDataProviderAdapter` **has a reference** to an `XMLDataProvider` object.
  - This means the adapter **has a** XML Data Provider. This `XMLDataProvider` is the **adaptee** – the object that is being adapted. The adapter will use this reference to call the adaptee's methods internally.

```java
// XMLDataProviderAdapter (Adapter)
class XMLDataProviderAdapter implements IReport { // Is-a relationship (implements IReport)
    private XMLDataProvider xmlProvider; // Has-a relationship (composition)

    public XMLDataProviderAdapter(XMLDataProvider xmlProvider) {
        this.xmlProvider = xmlProvider;
    }

    @Override
    public String getJsonData(String rawData) {
        // Step 1: Get XML data from the Adaptee
        String xmlData = xmlProvider.getXMLData(rawData);
        System.out.println("Received XML data: " + xmlData);

        // Step 2: Convert XML data to JSON data
        // Example conversion: Find <name> and <id> tags in XML and convert to JSON
        String jsonResult = "{";
        String name = "";
        String id = "";

        // Simple parsing for explanation, real-world would use a proper XML parser
        int nameStart = xmlData.indexOf("<name>") + "<name>".length();
        int nameEnd = xmlData.indexOf("</name>");
        if (nameStart > -1 && nameEnd > -1 && nameEnd > nameStart) {
            name = xmlData.substring(nameStart, nameEnd);
            jsonResult += "\"name\": \"" + name + "\"";
        }

        int idStart = xmlData.indexOf("<id>") + "<id>".length();
        int idEnd = xmlData.indexOf("</id>");
        if (idStart > -1 && idEnd > -1 && idEnd > idStart) {
            id = xmlData.substring(idStart, idEnd);
            if (!name.isEmpty()) { // Add comma if name was added
                jsonResult += ", ";
            }
            jsonResult += "\"id\": \"" + id + "\"";
        }
        jsonResult += "}";
        System.out.println("Converted to JSON: " + jsonResult);
        return jsonResult;
    }
}
```

_Clarifying Commentary:_ The `getJsonData` method is where the "magic" of the adapter happens. It first uses the composed `xmlProvider` (the adaptee) to get the XML data, then it performs the conversion logic to transform that XML into the JSON format that the client expects. The conversion logic shown in the code is a simplified example, emphasizing the transformation step rather than robust XML parsing.

**How the Client Interacts with the Adapter (Step-by-Step Flow):**

1.  The **client** holds a **reference to an `IReport` type** (e.g., `IReport report = new XMLDataProviderAdapter(...)`). Because `XMLDataProviderAdapter` implements `IReport`, it can be assigned to an `IReport` reference.
2.  The client calls `report.getJsonData(rawData)`. The client **only knows** about the `getJsonData` method defined in `IReport`. It has **no idea** that an `XMLDataProvider` (third-party library) is being used internally or how the data conversion happens.
3.  When `report.getJsonData(rawData)` is called, the `getJsonData` method of the `XMLDataProviderAdapter` is executed.
4.  Inside `XMLDataProviderAdapter.getJsonData()`:
    - It first uses its internal `XMLDataProvider` reference (`xmlProvider`) to call `xmlProvider.getXMLData(rawData)`. This retrieves the XML data from the third-party library.
    - Then, it takes the received XML data and **converts** it into JSON data.
    - Finally, it **returns** the JSON data to the client.

In summary, the adapter behaves like an `IReport` for the client (due to the `is-a` relationship) and internally uses the `XMLDataProvider` (due to the `has-a` relationship) to perform the required operations.

### 4. Standard Definition of Adapter Design Pattern

The standard definition of the Adapter Design Pattern is:

> **"Adapter converts the interface of a class into another interface that client expects."**

> **"Adapter lets classes work together that couldn't otherwise because of incompatible interfaces."**

This means an adapter's actual job is to enable interaction between two interfaces or classes that cannot normally communicate because their interfaces (methods, parameters, return types) are too different. For instance, if one provides XML and another expects JSON, an adapter bridges that difference.

### 5. Code Implementation Details

The video provides a complete Java code example.

**1. `IReport` Interface (Target)**

```java
// Target Interface: The interface the client expects
interface IReport {
    String getJsonData(String rawData);
}
```

_Explanation:_ This interface defines the `getJsonData` method, which takes a `rawData` string and is expected to return a JSON string.

**2. `XMLDataProvider` Class (Adaptee)**

```java
// Adaptee: The existing class or third-party library with an incompatible interface
class XMLDataProvider {
    public String getXMLData(String rawData) {
        System.out.println("XMLDataProvider: Converting raw data '" + rawData + "' to XML...");
        // Simulate converting raw string (e.g., "name:ID") to XML
        // In a real scenario, this could be complex parsing or API calls
        String[] parts = rawData.split(":");
        if (parts.length == 2) {
            String name = parts;
            String id = parts;
            return "<report><name>" + name + "</name><id>" + id + "</id></report>";
        }
        return "<report/>"; // Default for invalid format
    }
}
```

_Explanation:_ This class represents the third-party library (adaptee). It has a `getXMLData` method that takes `rawData` (a string like "Name:ID") and produces an XML string. The speaker notes that the implementation here is a simple example for demonstration; real-world scenarios might involve complex data sources like user interfaces, PDFs, CSVs, or Excel sheets.

**3. `XMLDataProviderAdapter` Class (Adapter)**

```java
// Adapter: Connects the Target interface with the Adaptee
class XMLDataProviderAdapter implements IReport { // "Is-a" relationship: Adapter is a Report
    private XMLDataProvider xmlProvider; // "Has-a" relationship: Adapter has an XMLDataProvider

    // Constructor to inject the Adaptee
    public XMLDataProviderAdapter(XMLDataProvider xmlProvider) {
        this.xmlProvider = xmlProvider;
    }

    @Override
    public String getJsonData(String rawData) {
        System.out.println("XMLDataProviderAdapter: Client called getJsonData for '" + rawData + "'");
        // 1. Get XML data from the Adaptee
        String xmlData = xmlProvider.getXMLData(rawData);

        // 2. Convert XML data to JSON data
        System.out.println("XMLDataProviderAdapter: Converting XML to JSON...");
        // This conversion logic can vary greatly based on business requirements
        String jsonResult = "{";
        String name = "";
        String id = "";

        // Simplified parsing for name
        int nameStart = xmlData.indexOf("<name>") + "<name>".length();
        int nameEnd = xmlData.indexOf("</name>");
        if (nameStart > -1 && nameEnd > -1 && nameEnd > nameStart) {
            name = xmlData.substring(nameStart, nameEnd);
            jsonResult += "\"name\": \"" + name + "\"";
        }

        // Simplified parsing for id
        int idStart = xmlData.indexOf("<id>") + "<id>".length();
        int idEnd = xmlData.indexOf("</id>");
        if (idStart > -1 && idEnd > -1 && idEnd > idStart) {
            id = xmlData.substring(idStart, idEnd);
            if (!name.isEmpty()) {
                jsonResult += ", ";
            }
            jsonResult += "\"id\": \"" + id + "\"";
        }
        jsonResult += "}";
        System.out.println("XMLDataProviderAdapter: Returning JSON: " + jsonResult);
        return jsonResult;
    }
}
```

_Explanation:_ This is the core of the pattern. It `implements IReport` (satisfying the client's expectation) and `has-a XMLDataProvider` (composing the incompatible component). Its `getJsonData` method first calls the `getXMLData` method on its internal `xmlProvider` instance to get the XML data. Then, it converts this XML data into the desired JSON format and returns it. The conversion logic is simplified to show the principle.

**4. `Client` Class**

```java
// Client: Uses the Target interface without knowing about the Adaptee
class Client {
    public String getReport(IReport report, String rawData) {
        System.out.println("Client: Requesting JSON report...");
        // Client only interacts with the IReport interface
        return report.getJsonData(rawData);
    }
}
```

_Explanation:_ The `Client` class only interacts with the `IReport` interface. It has a `getReport` method that takes an `IReport` object and `rawData`. It simply calls `report.getJsonData(rawData)` and expects JSON in return. The client **does not care** if a third-party library is used or if the data is self-implemented. Its only concern is getting the JSON data.

**5. `main` Method (Demonstration)**

```java
public class Main {
    public static void main(String[] args) {
        // 1. Instantiate the Adaptee (Third-Party Library)
        XMLDataProvider xmlProvider = new XMLDataProvider();
        System.out.println("\n--- Instantiated XMLDataProvider (Adaptee) ---");

        // 2. Instantiate the Adapter, passing the Adaptee to its constructor
        // The Adapter is of type IReport because it implements IReport
        IReport adapter = new XMLDataProviderAdapter(xmlProvider);
        System.out.println("--- Instantiated XMLDataProviderAdapter (Adapter) ---");

        // 3. Prepare the raw data
        String rawData = "Alice:42";
        System.out.println("Raw data to process: '" + rawData + "'");

        // 4. Instantiate the Client
        Client client = new Client();
        System.out.println("--- Instantiated Client ---");

        // 5. Client calls getReport, passing the Adapter (which is an IReport)
        String jsonData = client.getReport(adapter, rawData);
        System.out.println("\nFinal JSON data received by Client: " + jsonData);

        // Expected Output: {"name": "Alice", "id": "42"}
    }
}
```

_Explanation:_

- First, an instance of `XMLDataProvider` (the adaptee) is created.
- Then, an instance of `XMLDataProviderAdapter` (the adapter) is created, and the `xmlProvider` is passed into its constructor. Crucially, this adapter object is stored in a reference of type `IReport`, demonstrating that the adapter _is a_ report.
- Raw data "Alice:42" is prepared.
- A `Client` object is created.
- Finally, the `client.getReport()` method is called, passing the `adapter` object (which the client sees as an `IReport`) and the `rawData`.
- When executed, the `adapter`'s `getJsonData` method is invoked, which in turn calls the `xmlProvider`'s `getXMLData` method, converts the XML to JSON, and returns it to the client.
- The output shows the raw data transformed into JSON format: `{"name": "Alice", "id": "42"}`.

### 6. Standard UML Diagram for Adapter Pattern

The standard UML diagram for the Adapter pattern clarifies the relationships between its components.

**Components:**

- **Target Interface:** The interface that the Client expects. (e.g., `IReport` with `request()` or `getJsonData()` method).
- **Adaptee Interface:** The existing interface or class that needs to be adapted. (e.g., `XMLDataProvider` with `specificRequest()` or `getXMLData()` method).
- **Adapter:** The class that implements the `Target Interface` and contains a reference to the `Adaptee Interface`.
- **Client:** The component that interacts with the `Target Interface`.

**Relationships:**

- The **Client** interacts directly with the **Target Interface**.
- The **Adapter** **implements** the **Target Interface** (`is-a` relationship). This makes the Adapter compatible with what the Client expects.
- The **Adapter** **has a reference** to (or composes) the **Adaptee Interface** (`has-a` relationship). This allows the Adapter to call methods on the Adaptee.
- The `request()` method of the `Target Interface` (implemented by the Adapter) internally calls the `specificRequest()` method of the `Adaptee`.

**Simplified Diagram Representation:**

```
+----------------+        +---------------+
|     Client     |------->|Target Interface|
+----------------+        | + request()   |
                           +-------^-------+
                                   | implements
                                   |
+----------------+          +-------------------+
|    Adapter     |          |   Adaptee         |
| + request()    |<---------| + specificRequest()|
|                |  has-a   +-------------------+
+----------------+
```

_Clarifying Commentary:_ In our example, `Target Interface` is `IReport`, `Adaptee` is `XMLDataProvider`, `Adapter` is `XMLDataProviderAdapter`, and `Client` is the `Client` class. The `request()` method maps to `getJsonData()`, and `specificRequest()` maps to `getXMLData()`.

### 7. Types of Adapters

The Adapter pattern can be implemented in two main ways: **Object Adapter** and **Class Adapter**.

**1. Object Adapter (Preferred)**

- **Mechanism:** Uses **composition** (`has-a` relationship) to hold a reference to the adaptee object.
- **How it works:** The adapter inherits the target interface (e.g., `IReport`) and then uses an instance of the adaptee (e.g., `XMLDataProvider`) to fulfill the target interface's methods.
- **Diagram:** This is the pattern discussed and implemented in the main example, where the `Adapter` implements the `Target` and holds a reference to the `Adaptee`.
  `  +-----------------+        +---------------+
|  Target (IReport)|<-------|   Adapter     |
| + request()     |        | + request()   |
+-----------------+        |               |
         ^                 |   has-a       |
         |implements       +------|--------+
         |                        |
+--------+------------+           |
|  Client             |           |
+---------------------+           |
                                  v
                           +----------------+
                           |    Adaptee     |
                           | + specificRequest()|
                           +----------------+`
  _Clarifying Commentary:_ This approach is generally preferred because it aligns with the principle of "prefer composition over inheritance". It offers more flexibility, as the adapter can work with any concrete implementation of the adaptee interface, and you can change the adaptee at runtime.

**2. Class Adapter (Less Preferred)**

- **Mechanism:** Uses **multiple inheritance** to inherit from both the **Target interface** and the **Adaptee class**.
- **How it works:** The adapter directly inherits both the functionality it needs to expose (from the target) and the functionality it needs to adapt (from the adaptee). The method from the target interface is overridden, and inside, the method from the adaptee is called.
- **Diagram:**
  `  +-----------------+
|  Target (IReport)|<---+
| + request()     |    | (implements/inherits)
+-----------------+    |
         ^             |
         |             |
+--------+------------+-------------+
|  Client             | Adapter      |
+---------------------+ + request()  |
                      | (overrides & calls specificRequest)
                      +--------------+
                              ^ (inherits)
                              |
                       +----------------+
                       |    Adaptee     |
                       | + specificRequest()|
                       +----------------+`
  _Clarifying Commentary:_ This pattern is typically only possible in languages that support **multiple inheritance** (e.g., C++, but **not Java** for classes, only for interfaces). Even in languages where it's possible (like C++), it is generally **not preferred for real-world applications**. This is because:
  _ It tightly couples the adapter to a specific adaptee implementation, making it less flexible than composition.
  _ It goes against the general software engineering principle to **"prefer composition over inheritance"** for better design flexibility and to avoid the complexities associated with multiple inheritance.

The speaker explains that the Class Adapter is mentioned primarily for knowledge, but the **Object Adapter (composition-based) is always preferred**.

### 8. Real-World Use Cases of Adapter Design Pattern

The Adapter Design Pattern has several important real-world applications:

1.  **Integrating Third-Party Vendors/Libraries:**

    - **Scenario:** When your existing project needs to interact with external third-party vendor code or libraries.
    - **Benefit:** Instead of directly integrating the vendor's code and creating tight coupling, an adapter is introduced. The adapter bridges the incompatible interfaces between your code and the vendor's code, allowing them to communicate without requiring changes in your existing application logic if the vendor library changes. This was the primary example demonstrated in the video.

2.  **Working with Legacy Code:**
    - **Scenario:** When you have a modern application that needs to interact with older, **legacy codebases**. Legacy code often uses deprecated methods or older conventions that are incompatible with modern application practices (e.g., a modern Java 22 application interacting with code written in Java 8 or older versions of C++).
    - **Benefit:** Since you typically cannot modify the legacy code (as it might not be your own or is too complex/risky to change), you introduce an adapter. This adapter takes input from your modern application, calls the appropriate (possibly deprecated) methods in the legacy code, and translates the results back into a format consumable by your modern application. This mechanism is essentially the same as integrating a third-party vendor library.

The video concludes by stating that there are more real-world use cases, which will be explored in future examples (beyond this transcript).

---

Here are comprehensive notes on the Facade Design Pattern, drawing from the provided video transcript:

---

## Facade Design Pattern: Comprehensive Notes

### 1. Introduction to Facade Design Pattern

The Facade Design Pattern is a simple yet powerful design pattern used in Low-Level Design (LLD) to manage complexity within software systems.

**Core Concept:**
Imagine a software system that comprises many interconnected and complex classes (e.g., Class A, Class B, Class C, Class D, Class E). These classes have intricate dependencies and interactions (e.g., A depends on B, B depends on C, A also depends on C, B depends on D, D depends on E, and so on). Collectively, these classes form a **complex subsystem** that works together to perform a single, overarching task. To achieve this task, the subsystem breaks it down into many smaller, distinct operations, each handled by different classes.

Now, consider a **client** that needs to utilise this complex subsystem to get a specific job done. We aim to prevent the client from having to interact directly with this intricate network of classes (e.g., first calling A, then B, then C, and so forth). Such direct interaction would expose the client to the subsystem's internal complexity.

**Solution: Introduce a Facade Class**
To abstract away this complexity, a new class, referred to as the **Facade**, is introduced.

- The **Facade class** is responsible for interacting with the complex subsystem.
- The **client** interacts _only_ with the Facade class.

For example, the client might simply call a single method on the Facade, such as `getWorkDone()`. The client does not need to know _how_ the Facade accomplishes the work, which specific complex subsystem classes it called, or the intricate flow of interactions within the subsystem. This demonstrates the core purpose of the Facade pattern: **to hide the complexity of the subsystem from the client**.

### 2. Primary Use Cases and Relationship with Principle of Least Knowledge

The Facade Design Pattern serves several key purposes:

- **As a Gateway for Complex Subsystems:** Its primary role is to act as a **gateway**, ensuring that a client does not need to communicate directly with a complex subsystem. Instead, all interactions are channelled through the Facade class. The Facade essentially says, "You call me, and I will handle all the internal details and provide you with the output. You don't need to directly interact with the complex subsystem".
- **Decoupling Client from Subsystem:** The Facade pattern effectively **decouples the client from the complex subsystem**. Because the client no longer communicates directly with the internal classes, any future changes within the subsystem (such as introducing new classes or altering existing interactions) will **not affect the client**. This promotes a more robust and maintainable design.
- **Aids in Establishing the Principle of Least Knowledge:** The Facade Design Pattern also helps in adhering to the **Principle of Least Knowledge** (also known as the Law of Demeter). This principle is crucial for writing clean and efficient code, and its application can significantly impress interviewers. (This principle will be discussed in detail later).

### 3. Example: Computer Boot-up System

A practical and simple real-world use case where the Facade Design Pattern is actually implemented is when you **boot up your computer**.

**Step-by-step breakdown:**

1.  **Client Action:** As a client (user), you perform a single, simple action: you press the power button, initiating a "start computer" or "boot up" command.
2.  **Hidden Internal Complexity:** Internally, a vast number of complex operations occur, of which the user is completely unaware, yet the computer successfully boots up.

**The Subsystem Classes (Internal Components):**
These are the internal classes that form the complex subsystem responsible for booting the computer:

- **CPU Class:** Contains methods like `initialize()` to initialise the Central Processing Unit.
- **Memory Class:** Manages memory operations, potentially with a `selfTest()` method.
- **Operating System Class:** Responsible for loading and starting the operating system.
- **BIOS Class:** The Basic Input/Output System (BIOS) boots up.
  - **Complex Interaction:** The BIOS requires the CPU and Memory to be booted and initialised _before_ it can boot itself. This demonstrates a dependency chain: `BIOS` depends on `CPU` and `Memory`.
- **Hard Disk Class:** The hard drive starts spinning, with a method like `spinUp()`.
- **Other Potential Classes:** The subsystem could also include classes for `PowerSupply` (providing power) and `CoolingSystem` (managing fans).
  - All these classes perform their respective tasks, forming a highly interconnected and complex "subsystem".

**The Facade in Action:**

- A `ComputerFacade` class is introduced.
- This `ComputerFacade` class has a single, public method: `startComputer()`.
- **Client Interaction:** The client simply calls `computerFacade.startComputer()`.
- **Facade's Internal Logic:** The `startComputer()` method within the `ComputerFacade` internally orchestrates the entire boot-up process by calling the appropriate methods of all the subsystem components (CPU, Memory, BIOS, Hard Disk, Power Supply, Cooling System, Operating System) in the correct sequence.
- **Benefit:** The client remains oblivious to the intricate, hidden processes occurring behind the scenes.

### 4. Standard UML Diagram and Code Example

The standard UML (Unified Modeling Language) diagram for the Facade Design Pattern illustrates its structure clearly:

**UML Diagram Representation:**

- **Client:** The entity that wants to use the system functionality.
  - The Client holds a reference to the `Facade` object.
  - It calls a single method on the `Facade` (e.g., `execute` or `startComputer`).
- **Facade:** The intermediary class.
  - It has one or more public methods (e.g., `execute`, `startComputer`) that the client calls.
  - It interacts directly with the **Complex Subsystem** classes.
- **Complex Subsystem:** Comprises multiple individual classes (e.g., Subsystem Class 1, Subsystem Class 2, etc.).
  - These classes are unaware of the Client; they only interact with the `Facade`.

**Key Principle from UML:** The client is completely unaware of the internal workings of the complex subsystem. Its only interaction point is the Facade.

**Code Example (Illustrating Computer Boot-up):**
The code structure demonstrates how the Facade pattern is implemented for the computer boot-up scenario:

1.  **Subsystem Classes Definitions:**
    Each internal component of the computer boot-up process is represented by its own class with specific methods:

    - `PowerSupply` class with a `powerOn()` method.
    - `CoolingSystem` class with a `startFan()` method.
    - `CPU` class with an `initialize()` method.
    - `Memory` class with a `selfTest()` method.
    - `HardDrive` class with a `spinUp()` method.
    - `BIOS` class:
      - Its constructor takes `CPU` and `Memory` objects as parameters, indicating its dependency.
      - It has a `bootUp()` method which internally calls `cpu.initialize()` and `memory.selfTest()`.
    - `OperatingSystem` class with a `load()` method.
    - _These classes represent the entire complex subsystem_.

2.  **`ComputerFacade` Class Definition:**
    This is the central Facade class:

    - It **declares and holds instances of all the subsystem classes** (e.g., `PowerSupply powerSupply`, `CoolingSystem coolingSystem`, `CPU cpu`, `Memory memory`, `HardDrive hardDrive`, `BIOS bios`, `OperatingSystem os`).
    - It provides a **single, public method**: `startComputer()`.
    - **Internal Logic of `startComputer()`:** Within this method, the Facade orchestrates the entire boot-up sequence by calling the appropriate methods of the subsystem components in the correct order:
      ```
      public void startComputer() {
          System.out.println("Starting Computer...");
          powerSupply.powerOn();
          coolingSystem.startFan();
          cpu.initialize();
          memory.selfTest();
          hardDrive.spinUp();
          bios.bootUp(cpu, memory); // BIOS needs CPU and Memory
          operatingSystem.load();
          System.out.println("Computer Booted Successfully!");
      }
      ```
      (Note: The exact method calls and sequence are based on the speaker's description and the general idea of computer boot-up).

3.  **Client Code (`main` method):**
    The client code demonstrates how simple it is for a user to interact with the system:

    - It creates an object of the `ComputerFacade` class:

      ```java
      ComputerFacade computer = new ComputerFacade();
      ```

    - It then simply calls the single public method:
      ```java
      computer.startComputer();
      ```

**Execution Result:**
When this code is run, the output will show "Starting Computer...", followed by the messages from all the individual subsystem classes' methods (e.g., "CPU Initialized", "Memory Self-Test Completed", "Hard Drive Spinning Up", etc.), and finally, "Computer Booted Successfully!". This confirms that the complex internal processes were handled by the Facade, hidden from the client's direct view.

### 5. Principle of Least Knowledge (Law of Demeter)

The **Principle of Least Knowledge**, also known as the Law of Demeter, is a fundamental rule in object-oriented design.

**Definition:**
The principle states: **"Talk only to your immediate friends"**.
This means that an object should only communicate with:

- Itself (its own methods).
- Its direct components (objects it "has").
- Objects passed as parameters to its methods.
- Objects it creates.

**Illustrative Scenario:**
Consider three classes: A, B, and C. They are linked in such a way that **A has B**, and **B has C**.

**What the Principle Dictates:**

- Class A should **only call methods of B**, as B is its direct "friend".
- Class A should **not call methods of C**, because C is B's "friend," not A's direct friend.

**Example of Violating the Principle (Bad Practice):**

- Let's say Class A has method `M1`, Class B has `M2`, and Class C has `M3`.
- A common mistake is for Class A to call a method on Class B (e.g., `B.getCObject()`) that returns an object of Class C, and then Class A proceeds to call a method on that Class C object (e.g., `C.M3()`).
  - **Sequence:** `A -> B.getCObject() -> C.M3()`.
- This is considered incorrect because **A does not _have_ C**; A only _has_ B. A is reaching through B to interact with C, which violates the principle.

**Reasoning Behind the Principle:**
The primary goal of this principle is to foster **loose coupling** between classes.

- **Reduced Interactions:** It aims to minimise the number of interactions and dependencies between classes and components.
- **Loose Coupling is Key:** In LLD, a core objective is to design systems that are loosely coupled.
- **Avoiding Design Collapse:** If classes were allowed to call friends of friends, or interact extensively with many other classes, the entire goal of a loosely coupled design would be undermined.
- **Improved Design:** The less a class knows about the internal structure or specific details of other classes, the more robust and flexible the overall design becomes.

**Four Guidelines to Follow the Principle of Least Knowledge:**
To properly adhere to this principle, ensure your design follows these rules:

1.  **Call Methods of Your Own Class:** An object can call methods that belong directly to its own class.
    - _Example:_ If class `A` has methods `m1()` and `m2()`, an object `a` of class `A` can call `a.m1()` or `a.m2()`. This is fundamental and obvious.
2.  **Call Methods of Objects Passed as Parameters:** An object can call methods on objects that are passed into its own methods as parameters.
    - _Example:_ If a method `M3` in class `A` takes an object of class `B` as a parameter (`public void M3(B b)`), then `A` can call methods on the `b` object within `M3` (e.g., `b.someMethod()`). This is permissible because `A` has temporary knowledge of `B` through the method signature.
3.  **Call Methods of Objects You Create:** An object can call methods on objects that it explicitly creates (instantiates) within its own methods.
    - _Example:_ If a method `M4` in class `A` creates a new object of class `D` (e.g., `D d = new D();`), then `A` can call methods on this newly created `d` object (e.g., `d.dm4()`).
4.  **Call Methods of Objects with a "Has-A" Relationship (Composition/Aggregation):** An object can call methods on other objects with which it has a direct "has-a" relationship (i.e., when an object of one class is a member variable within another class).
    - _Example:_ If class `A` has an instance of class `B` as a member variable (e.g., `private B b_instance;`), then `A` can call methods on `b_instance` (e.g., `b_instance.M3()`, `b_instance.M4()`).

**What the Principle Prevents:**
Fundamentally, these rules prevent the situation where Class A calls Class B, which then provides Class C, and A directly calls C's methods, especially when A does not have a direct "has-a" relationship with C.

**Correct Interaction when Indirect Access is Needed:**
If Class A needs some work done by Class C, and A only links to B (which links to C), A should _not_ try to access C directly. Instead, **A should tell B to perform the required task**, and B, being linked to C, will then interact with C to get the work done. The method for this task should be declared within Class B.

**Summary:** The Principle of Least Knowledge advocates for minimal communication and direct interaction between classes: **"The less you know, the better"**.

### 6. Standard Definition of Facade Design Pattern

The formal definition of the Facade Design Pattern encapsulates all the discussed concepts:

**"Facade pattern provides a simplified, unified interface to a set of complex subsystems."**
**"It hides the complexity of the system and exposes only what is necessary to the user."**

This definition perfectly aligns with the pattern's role as a gateway that abstracts complex internal workings from the client.

### 7. Facade vs. Adapter Pattern: Differentiating by Intent

A common point of confusion arises between the Facade Design Pattern and the Adapter Pattern. Both patterns involve introducing an intermediary class between a client and a subsystem. However, their fundamental difference lies in their **intent** or **motive**.

- **Facade's Intent:**

  - The primary motive of the Facade pattern is **to hide the complexity of a subsystem**.
  - It is used when the goal is to provide a simplified, single point of access to a complex set of classes or components.

- **Adapter's Intent:**
  - The primary motive of the Adapter pattern is **to enable interaction between two completely different or incompatible interfaces**.
  - It is used when existing interfaces cannot communicate directly due to incompatibilities and need a "bridge" or "adapter" to work together.

**How to Choose Between Facade and Adapter:**
When designing an application and faced with a situation where both Facade and Adapter seem applicable, consider the core **intent** of your design problem:

- **Is the goal to simplify a complex set of operations for a client?** If so, use the **Facade** pattern.
- **Is the goal to make two incompatible components or interfaces work together?** If so, use the **Adapter** pattern.

Understanding their distinct intents is crucial for correctly applying these design patterns in real-world scenarios.

### 8. Additional Real-Life Use Cases for Facade

Beyond the computer boot-up system, the Facade Design Pattern is widely applicable in various software domains:

- **Gaming Engines (e.g., Unity):**

  - **Client Action:** When a user starts a game in a gaming engine like Unity, they typically press a single "Start Game" or "Load Game" button.
  - **Facade Method:** Internally, there's likely a Facade class with a single method (e.g., `startGame()` or `loadGame()`).
  - **Internal Subsystem Complexity:** This single method internally interacts with a vast, complex architecture of classes to perform numerous tasks necessary for game loading:
    - Loading of **game assets** (textures, models, audio).
    - **Memory management** (e.g., loading only the immediate area of the game map to conserve memory, rather than the entire map at once).
    - Loading of the **game physics engine**.
    - Many other internal classes and methods are called.
  - **Benefit:** The player (client) is completely isolated from this underlying complexity and simply experiences the game loading.

- **Payment Gateways:**
  - **Client Action:** When making an online payment, a user typically clicks a single "Make Payment" button.
  - **Facade Method:** A payment gateway likely employs a Facade with a method like `makePayment()`.
  - **Internal Subsystem Complexity:** This `makePayment()` method internally orchestrates a series of complex operations across multiple subsystems:
    - Checking the user's **balance**.
    - Verifying the **PIN** or authentication details.
    - Detecting potential **fraudulent transactions**.
    - Sending **notifications** (e.g., to the user, merchant, or bank).
    - Interacting with various financial systems.
  - **Benefit:** The user (client) only needs to interact with one simple method to complete the payment, unaware of the extensive internal validation and communication processes.

**General Principle for Using Facade:**
The Facade pattern is suitable for **any use case where you need to hide a large, complex subsystem from a client**. The key is always to understand the **intent** of where and why to use the Facade pattern.

Here are the extremely detailed and comprehensive notes from the provided video transcript, designed to be a full learning document.

---

## Music Player Application System Design: Low-Level Design (LLD)

### Introduction to the Design Problem

This lecture in the LLD series focuses on designing a music player application. This is a crucial design problem from an interview perspective and offers significant learning opportunities, including how various design patterns interact, writing clean code, and easily accessible code. The application designed here may include more features than typically expected in a 1-hour LLD interview. However, understanding this complete application will equip you to tackle smaller parts of it in an interview, knowing which design patterns, OOP principles, and SOLID design principles to apply.

### Application Requirements

Before diving into the design, it's essential to understand the application's requirements. Interviewers typically provide these requirements at the outset, covering both **functional** and **non-functional** aspects.

#### Functional Requirements

Functional requirements define what the application _must do_ from a business logic perspective.

1.  **Play and Pause Songs**: Users must be able to play and pause songs.
2.  **Playlist Management**:
    - Users can **create playlists**.
    - Users can **add songs to playlists**.
    - Users can **play an entire playlist**.
    - **Multiple Playback Modes for Playlists**:
      - **Sequential**: Songs play one after another in order.
      - **Random**: Songs play in a random order.
      - **Custom**: Users can add songs to a queue for specific playback order (e.g., "play this next," "play this after that").
    - **Extensibility**: The design should allow for the easy integration of new playback methods or algorithms in the future.
3.  **Multi-Output Device Support**: The application must support various output devices, such as Bluetooth speakers, wired speakers, and headphones. This functionality should also be easily extensible to integrate new output devices in the future.

#### Non-Functional Requirements

Non-functional requirements describe _how well_ the application performs its functions. While interviewers may not explicitly state these, they are implicitly expected.

1.  **Scalability**: The code should be easily scalable to handle future growth and new features.
2.  **Extensibility**: It should be easy to integrate new features without major overhauls.
3.  **Clean Code**: The codebase should be clean and maintainable.
4.  **Adherence to Principles**: The design should follow design principles and patterns effectively.

### Application Flow Overview (High-Level)

The conceptual flow of the music player application involves several key components:

- **Songs**: Individual song objects (e.g., Song One, Song Two) that users can play or pause.
- **Playlists**: Collections of songs (e.g., Playlist One containing Song One and Song Two; Playlist Two containing Song Three and Song Four). Users can play all songs in a playlist using different algorithms.
- **Output Devices**: Various external devices like Bluetooth speakers, wired speakers, or headphones that the application integrates with to play audio. The system must be scalable to add new device types easily.

### Design Patterns to be Used

The following design patterns will be utilized to structure the application effectively:

1.  **Strategy Pattern**: For implementing different playback algorithms (sequential, random, custom).
2.  **Singleton Pattern**: For managers to ensure a single instance across the application.
3.  **Adapter Pattern**: To integrate various third-party output device APIs with a common interface.
4.  **Factory Pattern**: For creating objects, particularly devices, in a centralized and decoupled manner.
5.  **Facade Design Pattern**: To simplify the complex subsystem for the client, providing a unified interface.

**Side Note**: When designing, interviewers typically expect you to implement at least one algorithm.

### Object Management Philosophy

A core principle guiding this design is the creation of **managers** for key objects.

- **Purpose of Managers**: A manager's role is to handle CRUD (Create, Read, Update, Delete) operations for its respective object and provide access to it.
- **Necessity of Managers**: Not every object requires a manager. For instance, a `Song` object might not need a dedicated manager, but `Playlist` objects will. `Device` objects will also require a `DeviceManager`.
- **Singleton Managers**: A common practice in this design is to implement all managers as **Singletons**, meaning only one instance of each manager exists throughout the application. This ensures a single point of control for managing specific resources.

### Design Approach: Bottom-Up

The design process will follow a **bottom-up approach**. This means starting by designing the smallest, fundamental objects and then gradually integrating them to build larger, more complex objects and systems.

---

### Building the Application: Step-by-Step Design

#### 1. Song Object (The Smallest Unit)

The most essential object in a music player application is a `Song`.

- **Class**: `Song`.
- **Properties**:
  - `name` (string): The title of the song.
  - `artist` (string): The artist of the song.
  - `path` (string): The file path where the song's audio data is stored.
- **Methods**: Basic getters and setters for its properties.
- **Side Note (UML vs. Entity Diagrams)**: When creating UML class diagrams, the `path` property represents where the song data _exists_. It's assumed to be fetched from a database or other storage, which would typically be handled in Entity Diagrams. For this class diagram, we focus on how classes interact within the code, not data storage details.

#### 2. Output Devices (Implementing Play/Pause)

The first functional requirement to address is playing and pausing songs, which requires supporting various output devices.

- **Common Interface for Devices**:

  - **Interface/Abstract Class**: `IAudioOutputDevice`.
  - **Naming Convention**: Prefixed with `I` (e.g., `IAudioOutputDevice`) to indicate it's an interface or abstract class.
  - **Method**: `playAudio(Song song)`. This is an abstract method; concrete device classes will implement how they play audio.

- **Simulated Third-Party Device APIs**:

  - Imagine external hardware manufacturers (like JBL for speakers) provide their own APIs. These APIs might have different method names and parameter types than our `IAudioOutputDevice` interface.
  - **Examples**:
    - `BluetoothSpeakerAPI`: Exposes a method like `playSoundViaBluetooth(String data)`. It takes a string (e.g., file path) and plays the sound.
    - `WiredSpeakerAPI`: Similar API for wired speakers.
    - `HeadphonesAPI`: Similar API for headphones.

- **The Problem**: Our application expects to call `playAudio(Song)` on an `IAudioOutputDevice` object, but the third-party APIs have different method signatures (`playSoundViaBluetooth(String)`). Directly integrating each API would be complex and hard to extend.

- **Solution: Adapter Design Pattern**:
  - The **Adapter Pattern** is chosen to bridge the incompatibility between our `IAudioOutputDevice` interface and the third-party device APIs.
  - **Purpose of Adapters**: Create wrapper classes that "adapt" the third-party APIs to our common `IAudioOutputDevice` interface.
  - **Adapter Classes**:
    - `BluetoothSpeakerAdapter`:
      - **Relationship**: `is-a IAudioOutputDevice` (implements the interface) and `has-a BluetoothSpeakerAPI` (holds a reference to the third-party API).
      - **Implementation**: Overrides the `playAudio(Song song)` method from `IAudioOutputDevice`. Inside, it calls the specific third-party API method (e.g., `bluetoothSpeakerAPI.playSoundViaBluetooth(song.getPath())`).
    - `WiredSpeakerAdapter`: Works similarly for `WiredSpeakerAPI`.
    - `HeadphonesAdapter`: Works similarly for `HeadphonesAPI`.
  - **Benefit**: The client (any object wanting to play audio) only needs to interact with `IAudioOutputDevice` and call `playAudio()`, regardless of the underlying concrete device. The adapter handles the translation.

#### 3. Audio Engine

Now that we have devices capable of playing audio, we need a component that orchestrates the actual playback.

- **Class**: `AudioEngine`.
- **Purpose**: Its primary job is to play and pause music by interacting with an `IAudioOutputDevice`.
- **Properties**:
  - `currentSong` (Song reference): Stores the song currently being played or paused. This allows the `AudioEngine` to know which song to pause when `pause()` is called without arguments.
  - `isSongPaused` (boolean): A flag to keep track of the current playback state of the song (paused or not).
- **Methods**:
  - `play(IAudioOutputDevice aod, Song s)`:
    1.  Takes an `IAudioOutputDevice` reference (`aod`) and a `Song` object (`s`) as arguments.
    2.  **Null Check**: Ensures the song is not null.
    3.  **Resume Logic**: If the song is already paused (`isSongPaused` is true) or if the song being requested is the `currentSong`, it sets `isSongPaused` to `false` and resumes the song.
    4.  It calls `aod.playAudio(s)` to delegate the actual sound playback to the specific output device (which, via the Adapter Pattern, then calls the third-party API).
    5.  It updates `currentSong` to the song being played.
  - `pause()`:
    1.  Checks if a `currentSong` exists and if it's not already paused.
    2.  If conditions met, it sets `isSongPaused` to `true` and prints a message indicating the song has been paused.
    3.  **Validation**: A proposed `pause(Song song)` method in the Facade would validate that the `song` passed matches the `AudioEngine`'s `currentSong` to prevent pausing the wrong song.

#### 4. Device Manager and Device Factory

To manage the various `IAudioOutputDevice` instances (our adapters) and their creation, we introduce a `DeviceManager` and a `DeviceFactory`.

- **Device Manager**:

  - **Class**: `DeviceManager`.
  - **Purpose**: Manages the connection and retrieval of `IAudioOutputDevice` instances.
  - **Singleton Pattern**: Implemented as a Singleton. This means its constructor is private, and a static `getInstance()` method provides the single instance throughout the application.
  - **Properties**:
    - `currentOutputDevice` (`IAudioOutputDevice` reference): Stores the currently connected output device.
  - **Methods**:
    - `connect(DeviceType dt)`:
      1.  Takes a `DeviceType` enum (`dt`) indicating which type of device to connect.
      2.  **Memory Optimization**: If a `currentOutputDevice` is already connected, it's deleted before connecting a new one.
      3.  It **delegates device creation to `DeviceFactory`** by calling `deviceFactory.createDevice(dt)`.
      4.  The created `IAudioOutputDevice` object is then stored in `currentOutputDevice`.
      5.  Prints a confirmation message (e.g., "Bluetooth device connected") based on the `DeviceType`.
    - `getOutputDevice()`: Returns the `currentOutputDevice` reference.
    - `hasOutputDevice()`: Returns a boolean indicating if a device is currently connected (to prevent Null Pointer Exceptions).
  - **Relationship with `IAudioOutputDevice`**: A **Pure Composition** relationship (`DeviceManager` "owns" `IAudioOutputDevice`). This implies that the device cannot exist independently without the manager managing its creation and lifecycle.

- **Device Type Enum**:

  - **Enum**: `DeviceType`.
  - **Purpose**: Provides a type-safe way to specify device types instead of using strings, leading to cleaner code.
  - **Values**: `Bluetooth`, `Wired`, `Headphones`. Easily extensible for future device types.

- **Device Factory**:
  - **Class**: `DeviceFactory`.
  - **Purpose**: Encapsulates the logic for creating different `IAudioOutputDevice` (adapter) objects. This adheres to the **Single Responsibility Principle** (creation logic is separate from management logic).
  - **Interaction**: The `DeviceManager` "has-a" `DeviceFactory`.
  - **Method**: `createDevice(DeviceType dt)`:
    1.  Takes a `DeviceType` enum as input.
    2.  Uses a `switch-case` statement to determine which adapter to create based on `dt`.
    3.  **Crucially, it creates the specific adapter (e.g., `BluetoothSpeakerAdapter`) and, in its constructor, passes the corresponding third-party API object (e.g., `new BluetoothSpeakerAPI()`)**. This ensures that the adapter is correctly initialized with the external functionality it needs to adapt.
    4.  Returns the created `IAudioOutputDevice` (adapter) object.

#### 5. Music Player Facade

As the system grows, direct interaction with all these classes (AudioEngine, DeviceManager, Adapters, etc.) becomes complex for the client. The **Facade Design Pattern** is used to provide a simplified, unified interface.

- **Class**: `MusicPlayerFacade`.
- **Purpose**: Simplifies the entire audio playback subsystem for the client. It acts as a single point of interaction, hiding the underlying complexity.
- **Singleton Pattern**: Implemented as a Singleton, as it manages a subsystem like a manager.
- **Has-a Relationships**: Holds references to `AudioEngine`, `DeviceManager`, `PlaylistManager`, and `PlayingStrategy`.
- **Methods (Simplified Client Interface)**:
  - `connectDevice(DeviceType dt)`:
    1.  Takes a `DeviceType`.
    2.  Delegates the call to `deviceManager.connect(dt)`.
  - `play(Song song)`:
    1.  Gets the currently connected device by calling `deviceManager.getDevice()`.
    2.  Calls `audioEngine.play(device, song)`.
  - `pause(Song song)`:
    1.  **Validation**: Checks if the `song` passed as an argument matches the `audioEngine.currentSong` to ensure the correct song is paused.
    2.  Calls `audioEngine.pause()`.
  - **Fulfills Requirements**: These methods fulfill the requirements for playing, pausing, and supporting multiple output devices.

#### 6. Playlist and Playlist Manager

To manage collections of songs, `Playlist` and `PlaylistManager` classes are introduced.

- **Playlist**:

  - **Class**: `Playlist`.
  - **Properties**:
    - `name` (string): The name of the playlist.
    - `songs` (List of Song objects): A collection of songs within the playlist.
  - **Methods**:
    - `addSong(Song song)`: Adds a song to the playlist's `songs` list.
  - **Relationship with `Song`**: A **Simple Association** (has-a one-to-many). A song can exist independently without being part of a playlist.

- **Playlist Manager**:
  - **Class**: `PlaylistManager`.
  - **Purpose**: Manages the creation, retrieval, and modification of `Playlist` objects.
  - **Singleton Pattern**: Implemented as a Singleton.
  - **Properties**:
    - `playlists` (Map of String to Playlist): Stores playlists, using the playlist name as a key for O(1) lookup efficiency.
  - **Methods**:
    - `createPlaylist(String name)`:
      1.  Takes a `name` for the new playlist.
      2.  Checks if a playlist with that name already exists; if so, throws an exception.
      3.  Otherwise, creates a new `Playlist` object and stores it in the `playlists` map.
      - **Design Choice**: For simplification, the creation logic is kept within the `PlaylistManager` rather than creating a separate `PlaylistFactory`.
    - `addSongToPlaylist(String playlistName, Song song)`:
      1.  Takes a `playlistName` and a `Song`.
      2.  Finds the target playlist in its map using `playlistName`.
      3.  Calls the `addSong(song)` method on the found `Playlist` object.
    - `getPlaylist(String name)`: Retrieves a playlist from the map based on its name.
  - **Relationship with `Playlist`**: A **Pure Composition** relationship. Playlists are created through and managed by the `PlaylistManager`, implying they do not exist independently of the manager's control.

#### 7. Playing Strategies (for Play All)

To implement the different ways a playlist can be played (sequential, random, custom), the **Strategy Design Pattern** is used.

- **Abstract Strategy Class/Interface**: `PlayingStrategy`

  - **Purpose**: Defines a common interface for all playback algorithms.
  - **Methods**:
    - `setPlaylist(Playlist playlist)`: Sets the playlist that the strategy will operate on.
    - `next()`: Returns the next `Song` according to the specific strategy's algorithm.
    - `previous()`: Returns the previous `Song`.
    - `hasNext()`: Returns `true` if there's a next song, `false` otherwise.
    - `hasPrevious()`: Returns `true` if there's a previous song, `false` otherwise.
    - `addToNext(Song song)`:
      - **Special Case**: This method is primarily needed by the `CustomPlayingStrategy` (for users to add songs to a queue).
      - **Design Trade-off (Interface Segregation Principle)**: To avoid forcing `Sequential` and `Random` strategies to implement an irrelevant method, `addToNext` is declared in `PlayingStrategy` with an **empty default implementation**. This allows the `MusicPlayerFacade` to call `addToNext` on a `PlayingStrategy` reference without knowing its concrete type, while only `CustomPlayingStrategy` will have a meaningful implementation.

- **Concrete Strategy Classes**:
  - **Inheritance**: All concrete strategies implement (`is-a`) `PlayingStrategy`.
  - `SequentialPlayingStrategy`:
    - **Properties**: `currentPlaylist` (Playlist), `currentIndex` (integer for tracking position).
    - **`hasNext()`**: Checks if `currentIndex + 1` is within the bounds of the playlist's song list.
    - **`next()`**: Increments `currentIndex` and returns the song at the new index from the playlist's song list.
    - **`previous()`**: Decrements `currentIndex` and returns the song at the new index.
    - **Playback End**: The current implementation ends the playlist when the last song is played. For continuous looping (e.g., restarting from the first song), a multi-threaded environment would be required (one thread for `playAll`, another for `pause`).
  - `RandomPlayingStrategy`:
    - **Properties**: `remainingSongs` (List of Song), `history` (Stack of Song).
    - **`next()`**:
      1.  Picks a random song from `remainingSongs` using `s_rand()` (C++ random function).
      2.  Removes the picked song from `remainingSongs` to avoid duplicates.
      3.  Pushes the picked song onto `history` stack for `previous` functionality.
      4.  Returns the randomly picked song.
    - **`previous()`**: Pops the top song from the `history` stack.
  - `CustomPlayingStrategy`:
    - **Properties**: `nextQueue` (Queue of Song for upcoming songs), `previousStack` (Stack of Song for history).
    - **`addToNext(Song song)`**: Adds the given `song` to the `nextQueue`.
    - **`next()`**:
      1.  Dequeues a song from `nextQueue`.
      2.  Pushes the dequeued song onto `previousStack`.
      3.  **Fallback Mechanism**: If `nextQueue` becomes empty, it can automatically switch to playing songs sequentially from the _original playlist_. This is a design decision; `nextSequential()` and `previousSequential()` methods could be called in such a case.
    - **`previous()`**: Pops a song from `previousStack`.

#### 8. Playing Strategy Manager

Similar to other managers, a `PlayingStrategyManager` handles the creation and management of strategy objects.

- **Class**: `PlayingStrategyManager`.
- **Purpose**: Provides `PlayingStrategy` objects based on the requested `StrategyType`.
- **Singleton Pattern**: Implemented as a Singleton.
- **Properties**: Holds references to pre-created instances of `SequentialPlayingStrategy`, `RandomPlayingStrategy`, and `CustomPlayingStrategy`.
- **Methods**:

  - `getStrategy(PlayStrategyType st)`:
    1.  Takes a `PlayStrategyType` enum as input.
    2.  Returns the corresponding pre-created strategy object (e.g., if `Sequential` is requested, it returns the `sequentialStrategy` instance).
    - **Design Choice**: Creation logic is handled within the manager itself for simplicity, rather than using a separate `StrategyFactory`.

- **Play Strategy Type Enum**:
  - **Enum**: `PlayStrategyType`.
  - **Purpose**: Provides type-safe selection for playback strategies.
  - **Values**: `Sequential`, `Random`, `Custom`.

#### 9. Integrating Strategies into Music Player Facade (Advanced Playback)

The `MusicPlayerFacade` is extended to support playlist playback using the newly defined strategies.

- **New Properties in `MusicPlayerFacade`**:
  - `playlistManager` (PlaylistManager reference): To interact with playlists.
  - `currentStrategy` (PlayingStrategy reference): Stores the currently selected playback strategy.
  - `currentPlaylist` (Playlist reference): Stores the currently loaded playlist for methods that don't take a playlist name.
- **New Methods in `MusicPlayerFacade`**:
  - `setPlaybackStrategy(PlayStrategyType st)`:
    1.  Takes a `PlayStrategyType`.
    2.  Calls `playingStrategyManager.getStrategy(st)` to obtain the desired strategy.
    3.  Sets this as the `currentStrategy`.
  - `loadPlaylist(String playlistName)`:
    1.  Takes a `playlistName`.
    2.  Calls `playlistManager.getPlaylist(playlistName)` to retrieve the playlist.
    3.  Sets this as the `currentPlaylist`.
    4.  Calls `currentStrategy.setPlaylist(currentPlaylist)` to initialize the strategy with the loaded playlist.
    - **Optimization**: Loading the playlist once avoids repeated calls to the playlist manager in subsequent play operations.
  - `playAllTracks()`:
    1.  **Assumes Playlist is Loaded**: It operates on the `currentPlaylist` and `currentStrategy` which must be set via `loadPlaylist` and `setPlaybackStrategy` beforehand.
    2.  **Loop**: Enters a `while` loop that continues as long as `currentStrategy.hasNext()` is `true`.
    3.  **Get Next Song**: Inside the loop, it calls `currentStrategy.next()` to get the next song according to the chosen strategy.
    4.  **Play Song**: It then follows the standard song playback procedure:
        - Gets the `IAudioOutputDevice` from `deviceManager.getOutputDevice()`.
        - Calls `audioEngine.play(device, nextSong)`.
    - **Facade's Role**: The Facade doesn't care _how_ the next song is determined (sequential, random, custom); it only delegates to the `currentStrategy`.
  - `playNextTrack()`:
    1.  Similar to `playAllTracks`, but without the loop. It gets one `next` song from `currentStrategy`.
    2.  Plays that single song using `deviceManager` and `audioEngine`.
  - `playPreviousTrack()`:
    1.  Calls `currentStrategy.previous()` to get the previous song.
    2.  Plays that single song.
  - `enqueueNext(Song song)`:
    1.  Takes a `Song` object.
    2.  Calls `currentStrategy.addToNext(song)`. This method is primarily effective if the `currentStrategy` is a `CustomPlayingStrategy`.

#### 10. Orchestrator Class: Music Player Application

The final layer is the main application class, which serves as the **single point of entry** for the user.

- **Class**: `MusicPlayerApp`.
- **Purpose**: This is the top-level client class. It exposes high-level operations that a user would perform, abstracting away almost all internal complexity.
- **Has-a Relationships**:
  - `MusicPlayerFacade` (for playback functionalities).
  - `PlaylistManager` (directly for playlist creation and song adding, as these are configuration-like tasks that don't need to go through the Facade's playback simplification).
  - `allSongs` (Vector of Song objects): A simple list to manage all songs available in the application's library.
- **Methods (User-Facing Operations)**:
  - `createSongInLibrary(String name, String artist, String path)`: Creates a `Song` object and adds it to the `allSongs` list.
  - `findSongByTitle(String title)`: Searches the `allSongs` list to find a song by its title.
  - `createPlaylist(String name)`: Delegates to `playlistManager.createPlaylist(name)`.
  - `addSongToPlaylist(String playlistName, Song song)`: Delegates to `playlistManager.addSongToPlaylist(playlistName, song)`.
  - **All Playback-Related Methods Delegate to Facade**:
    - `connectAudioDevice(DeviceType dt)`: Calls `musicPlayerFacade.connectDevice(dt)`.
    - `playSong(Song song)`: Calls `musicPlayerFacade.play(song)`.
    - `pauseSong(Song song)`: Calls `musicPlayerFacade.pause(song)`.
    - `setPlaybackStrategy(PlayStrategyType st)`: Calls `musicPlayerFacade.setPlaybackStrategy(st)`.
    - `loadPlaylist(String playlistName)`: Calls `musicPlayerFacade.loadPlaylist(playlistName)`.
    - `playAllTracks()`: Calls `musicPlayerFacade.playAllTracks()`.
    - `playNextTrack()`: Calls `musicPlayerFacade.playNextTrack()`.
    - `playPreviousTrack()`: Calls `musicPlayerFacade.playPreviousTrack()`.
    - `enqueueNext(Song song)`: Calls `musicPlayerFacade.enqueueNext(song)`.
  - **Abstraction**: The `MusicPlayerApp` remains unaware of the `AudioEngine`, `DeviceManager`, `IAudioOutputDevice` adapters, third-party APIs, and enums. All this complexity is hidden by the `MusicPlayerFacade`.

---

### Clean Diagram Overview

A comprehensive UML class diagram would visually represent all the classes and their relationships discussed above. It would show:

- `MusicPlayerApp` as the client.
- `MusicPlayerFacade` acting as the central orchestrator for playback.
- All Singleton managers (`PlaylistManager`, `PlayingStrategyManager`, `DeviceManager`).
- `AudioEngine` and its interaction with `IAudioOutputDevice`.
- The `IAudioOutputDevice` hierarchy (interface and adapters).
- The `Song` and `Playlist` hierarchy.
- The `PlayingStrategy` hierarchy (abstract strategy and concrete strategies).
- All the `has-a` and `is-a` relationships, including pure composition where applicable.

While such a large diagram might be overwhelming for a short interview, it showcases a complete application design, helping understand how various patterns are applied in real-world scenarios.

---

### Code Walkthrough Details

The video then proceeds to walk through the actual code implementation, demonstrating how the designed classes and patterns are translated into executable code.

#### 1. Models (`Song` and `Playlist`)

- **`Song.h` / `Song.cpp`**:
  - Contains `title`, `artist`, and `filePath` as private member variables.
  - Public getter and setter methods are provided for these properties.
- **`Playlist.h` / `Playlist.cpp`**:
  - Contains `name` (string) and `songs` (a `std::vector<Song*>` or `std::list<Song*>` in C++) as private member variables.
  - Has an `addSong(Song* song)` method that adds the song to the `songs` vector.
  - Includes other getters and setters for its properties.

#### 2. Devices (Interface, Adapters, External APIs)

- **`IAudioOutputDevice.h`**:
  - Defines a pure virtual function `playAudio(Song* song)`.
  - Serves as the abstract interface for all audio output devices.
- **Adapter Classes (`BluetoothSpeakerAdapter.h/.cpp`, `HeadphonesAdapter.h/.cpp`, `WiredSpeakerAdapter.h/.cpp`)**:
  - Each adapter class `inherits` from `IAudioOutputDevice`.
  - Each adapter `holds a reference` to its respective external API (e.g., `BluetoothSpeakerAdapter` has `BluetoothSpeakerAPI*`).
  - The constructor of each adapter takes an instance of its corresponding API as an argument.
  - The `playAudio(Song* song)` method in each adapter calls the specific `playSoundVia...` method on its held API reference (e.g., `bluetoothSpeakerAPI->playSoundViaBluetooth(song->getFilePath())`).
- **External API Classes (`BluetoothSpeakerAPI.h/.cpp`, `HeadphonesAPI.h/.cpp`, `WiredSpeakerAPI.h/.cpp`)**:
  - These are simple classes that mimic third-party APIs.
  - They have methods like `playSoundViaBluetooth(std::string data)` which simply print a message to the console indicating that sound is being played (e.g., "Playing song via Bluetooth Speaker"). This avoids actual audio playback for simplicity in the design context.

#### 3. Audio Engine

- **`AudioEngine.h/.cpp`**:
  - **Properties**: `currentSong` (Song pointer), `isSongPaused` (boolean).
  - **`play(IAudioOutputDevice* aod, Song* s)`**:
    1.  Checks if `s` (song to play) is not null.
    2.  If `s` is already `currentSong` or `isSongPaused` is true, it means the song needs to be resumed. So, `isSongPaused` is set to `false`, and a "resuming song" message is printed.
    3.  Calls `aod->playAudio(s)` to initiate playback via the device.
    4.  Sets `currentSong = s`.
  - **`pause()`**:
    1.  Checks if `currentSong` is not null and if `isSongPaused` is `false`.
    2.  If conditions met, sets `isSongPaused = true` and prints "Song paused".
  - Other utility methods like `getCurrentSongTitle()`, `isSongCurrentlyPaused()`.

#### 4. Enums (`DeviceType` and `PlayStrategyType`)

- **`DeviceType.h`**: Enum defining `BLUETOOTH`, `WIRED`, `HEADPHONES`.
- **`PlayStrategyType.h`**: Enum defining `SEQUENTIAL`, `RANDOM`, `CUSTOM`.

#### 5. Device Factory

- **`DeviceFactory.h/.cpp`**:
  - **`createDevice(DeviceType type)`**:
    1.  Takes a `DeviceType` enum.
    2.  Uses a `switch` statement on `type`.
    3.  For each type, it `new`s an instance of the corresponding adapter (e.g., `new BluetoothSpeakerAdapter(new BluetoothSpeakerAPI())`).
    4.  Returns the created `IAudioOutputDevice*`.
    - **Key Detail**: It's responsible for _both_ creating the adapter _and_ injecting the necessary external API dependency into the adapter's constructor.

#### 6. Managers (`DeviceManager`, `PlaylistManager`, `StrategyManager`)

- **`DeviceManager.h/.cpp`**:
  - **Singleton Implementation**: Private constructor and a static `getInstance()` method to ensure a single instance.
  - **`currentOutputDevice`**: Stores the currently connected device (`IAudioOutputDevice*`).
  - **`connect(DeviceType type)`**:
    1.  If `currentOutputDevice` is already set, it's `delete`d for memory optimization.
    2.  Calls `DeviceFactory::getInstance()->createDevice(type)` to get the new device.
    3.  Stores the new device in `currentOutputDevice`.
    4.  Prints a confirmation message based on `type`.
  - **`getOutputDevice()`**: Returns `currentOutputDevice`.
  - **`hasOutputDevice()`**: Returns `true` if `currentOutputDevice` is not null.
- **`PlaylistManager.h/.cpp`**:
  - **Singleton Implementation**: Private constructor and `getInstance()`.
  - **`playlists`**: A `std::map<std::string, Playlist*>` to store playlists by name.
  - **`createPlaylist(std::string name)`**:
    1.  Checks if `name` already exists in `playlists` map; throws error if so.
    2.  Creates `new Playlist(name)` and adds it to the map.
  - **`addSongToPlaylist(std::string playlistName, Song* song)`**:
    1.  Finds `playlistName` in `playlists` map; throws error if not found.
    2.  Calls `foundPlaylist->addSong(song)`.
  - **`getPlaylist(std::string name)`**: Returns `Playlist*` from the map.
- **`StrategyManager.h/.cpp`**:
  - **Singleton Implementation**: Private constructor and `getInstance()`.
  - **Properties**: Holds pre-created instances of each strategy: `sequentialStrategy`, `randomStrategy`, `customStrategy`. These are initialized in the constructor.
  - **`getStrategy(PlayStrategyType type)`**:
    1.  Takes a `PlayStrategyType` enum.
    2.  Uses a `switch` statement to return the appropriate pre-created strategy instance.

#### 7. Play Strategies (Abstract and Concrete)

- **`PlayStrategy.h` (Abstract Base Class)**:
  - Defines pure virtual methods: `setPlaylist`, `next`, `hasNext`, `previous`, `hasPrevious`.
  - Defines `addToNext(Song* song)` with an **empty default implementation** (`virtual void addToNext(Song* song) {}`) to satisfy the Interface Segregation Principle trade-off.
- **`SequentialPlayStrategy.h/.cpp`**:
  - **Properties**: `currentPlaylist` (Playlist pointer), `currentIndex` (int).
  - **`setPlaylist(Playlist* playlist)`**: Sets `currentPlaylist` and initializes `currentIndex = 0`.
  - **`hasNext()`**: Checks if `currentIndex < currentPlaylist->getSongs().size()`.
  - **`next()`**: Increments `currentIndex` and returns `currentPlaylist->getSongs()[currentIndex]`. Handles end of playlist by indicating no more songs.
  - **`hasPrevious()`**: Checks if `currentIndex > 0`.
  - **`previous()`**: Decrements `currentIndex` and returns `currentPlaylist->getSongs()[currentIndex]`.
- **`RandomPlayStrategy.h/.cpp`**:
  - **Properties**: `currentPlaylist` (Playlist pointer), `remainingSongs` (vector of Song pointers), `history` (stack of Song pointers).
  - **`setPlaylist(Playlist* playlist)`**: Populates `remainingSongs` with all songs from `playlist`.
  - **`next()`**:
    1.  Generates a random index within `remainingSongs`.
    2.  Selects the song at that index.
    3.  Removes the song from `remainingSongs`.
    4.  Pushes the song onto the `history` stack.
    5.  Returns the selected song.
  - **`previous()`**: Pops and returns the top song from the `history` stack.
- **`CustomQueueStrategy.h/.cpp`**:
  - **Properties**: `nextQueue` (queue of Song pointers), `previousStack` (stack of Song pointers).
  - **`addToNext(Song* song)`**: Pushes `song` into `nextQueue`.
  - **`next()`**:
    1.  If `nextQueue` is not empty, it dequeues a song.
    2.  Pushes the dequeued song onto `previousStack`.
    3.  Returns the song.
    4.  **Fallback**: If `nextQueue` is empty, it can _optionally_ fall back to sequential playback from the original playlist (e.g., using `sequentialStrategy.next()`).
  - **`previous()`**: Pops a song from `previousStack`.

#### 8. Music Player Facade

- **`MusicPlayerFacade.h/.cpp`**:
  - **Singleton Implementation**: Private constructor and `getInstance()`.
  - **Properties**: `audioEngine` (AudioEngine pointer), `currentPlaylist` (Playlist pointer), `currentStrategy` (PlayStrategy pointer).
  - **`connectDevice(DeviceType type)`**: Calls `DeviceManager::getInstance()->connect(type)`.
  - **`setPlaybackStrategy(PlayStrategyType type)`**: Calls `StrategyManager::getInstance()->getStrategy(type)` and assigns the result to `currentStrategy`.
  - **`loadPlaylist(std::string playlistName)`**:
    1.  Calls `PlaylistManager::getInstance()->getPlaylist(playlistName)` to get the playlist.
    2.  Sets `currentPlaylist`.
    3.  Calls `currentStrategy->setPlaylist(currentPlaylist)`.
  - **`playSong(Song* song)`**:
    1.  Calls `DeviceManager::getInstance()->getOutputDevice()` to get the current device.
    2.  Calls `audioEngine->play(device, song)`.
  - **`pauseSong(Song* song)`**: Calls `audioEngine->pause()`. (Validation is assumed to happen in `audioEngine` or elsewhere).
  - **`playAllTracks()`**:
    1.  Checks if `currentStrategy` and `currentPlaylist` are set.
    2.  **`while (currentStrategy->hasNext())`**: Loops through songs.
    3.  Inside loop: calls `currentStrategy->next()`, gets device from `DeviceManager`, then calls `audioEngine->play(device, nextSong)`.
  - **`playNextTrack()`**: Gets one next song from `currentStrategy` and plays it.
  - **`playPreviousTrack()`**: Gets one previous song from `currentStrategy` and plays it.
  - **`enqueueNext(Song* song)`**: Calls `currentStrategy->addToNext(song)`.

#### 9. Music Player Application (Orchestrator)

- **`MusicPlayerApp.h/.cpp`**:
  - **Properties**: `allSongs` (vector of Song pointers to store the library of songs).
  - **`createSongInLibrary(std::string title, std::string artist, std::string path)`**: Creates a `new Song` and adds it to `allSongs`.
  - **`findSongByTitle(std::string title)`**: Finds and returns a song from `allSongs`.
  - **`createPlaylist(std::string name)`**: Calls `PlaylistManager::getInstance()->createPlaylist(name)`.
  - **`addSongToPlaylist(std::string playlistName, Song* song)`**: Calls `PlaylistManager::getInstance()->addSongToPlaylist(playlistName, song)`.
  - **All other playback-related methods (e.g., `connectAudioDevice`, `playSong`, `pauseSong`, `setPlaybackStrategy`, `loadPlaylist`, `playAllTracks`, `playNextTrack`, `playPreviousTrack`, `enqueueNext`) directly call the corresponding methods on `MusicPlayerFacade::getInstance()`**. This demonstrates the Facade pattern effectively hiding the subsystem complexity from the main application logic.

---

### Main Method Execution and Output Example

The `main()` function demonstrates how to use the `MusicPlayerApp` to simulate various user interactions.

1.  **Song Creation**: Five sample songs ("Zinda", "Kesariya", "Chaiya Chaiya", "Tum Hi Ho", "Jay Ho") are created and added to the application's library.
2.  **Playlist Creation**: A playlist named "BollywoodVibes" is created, and four of the five songs are added to it (Zinda is excluded to show songs can exist independently).
3.  **Device Connection**: `app.connectAudioDevice(DeviceType::BLUETOOTH)` is called, connecting a Bluetooth speaker.
    - **Output**: "Bluetooth Device Connected."
4.  **Basic Play/Pause/Resume**:
    - `app.playSong(zindaSong)`: Plays "Zinda".
    - `app.pauseSong(zindaSong)`: Pauses "Zinda".
    - `app.playSong(zindaSong)`: Resumes "Zinda".
    - **Output**:
      - "Playing song 'Zinda' by 'Sidhart Madhavan' via Bluetooth Speaker"
      - "Song 'Zinda' paused."
      - "Resuming song 'Zinda' by 'Sidhart Madhavan' via Bluetooth Speaker"
5.  **Sequential Playback**:
    - `app.setPlaybackStrategy(PlayStrategyType::SEQUENTIAL)`.
    - `app.loadPlaylist("BollywoodVibes")`.
    - `app.playAllTracks()`: Plays all songs in "BollywoodVibes" sequentially.
    - **Output**: Songs "Kesariya", "Chaiya Chaiya", "Tum Hi Ho", "Jay Ho" play sequentially.
6.  **Random Playback**:
    - `app.setPlaybackStrategy(PlayStrategyType::RANDOM)`.
    - `app.loadPlaylist("BollywoodVibes")`.
    - `app.playAllTracks()`: Plays all songs in "BollywoodVibes" in a random order.
    - **Output**: Songs play in a shuffled order, e.g., "Chaiya Chaiya", then "Kesariya", etc..
7.  **Custom Queue Playback**:
    - `app.setPlaybackStrategy(PlayStrategyType::CUSTOM)`.
    - `app.loadPlaylist("BollywoodVibes")`.
    - `app.enqueueNext(kesariyaSong)`: Adds "Kesariya" to the queue.
    - `app.enqueueNext(tumHiHoSong)`: Adds "Tum Hi Ho" to the queue.
    - `app.playAllTracks()`: Plays songs from the custom queue first, then falls back to sequential for remaining songs in the playlist.
    - **Output**: "Kesariya", then "Tum Hi Ho". After these two, "Jay Ho" plays sequentially (as it was next in the "BollywoodVibes" playlist and Custom strategy falls back to sequential). "Zinda" is not played as it wasn't in "BollywoodVibes".
8.  **Previous Track Functionality**:
    - Demonstrates `playPreviousTrack()` after setting a sequential strategy.
    - **Output**: After the playlist completion (on "Jay Ho"), calling `playPreviousTrack()` twice plays "Tum Hi Ho", then "Chaiya Chaiya".
9.  **Error Handling**: The entire `main` block is wrapped in a `try-catch` block to handle exceptions thrown by the system (e.g., trying to create a playlist with an existing name).

---

### Conclusion and Further Improvements

This comprehensive design for a music player application showcases the practical application of several important design patterns.

- **Reusability**: The core concepts can be extended to other player applications like movie players or video players.
- **Design Pattern Benefits**: It highlights how **Facade** simplifies a complex subsystem, how **Adapter** integrates incompatible interfaces, and how **Strategy** allows for flexible algorithm switching.
- **Further Enhancements**:
  - **Command Design Pattern**: If the application needed to interact with physical buttons on a device (e.g., a dedicated music player with play/pause buttons), the **Command Pattern** could be used. Each button press could invoke a command object (e.g., `PlayCommand`, `PauseCommand`), allowing for dynamic assignment and execution of actions.
  - **SOLID Principles and Clean Code**: The design attempts to follow SOLID principles and maintain clean architecture, though some trade-offs are inherent in any design. LLD is often subjective, and continuous improvement is encouraged.

This detailed breakdown provides a full understanding of the music player application's design, its underlying principles, and its implementation.

Here are comprehensive notes on the Composite Design Pattern, based on the provided video transcript:

---

### 1. Introduction to Design Patterns and the Composite Pattern

The "Coder Army" series on Low-Level Design (LLD) covers various design patterns. The speaker differentiates between **foundational design patterns** and **use-case specific design patterns**.

- **Foundational Design Patterns:** These are generic and can be easily applied to most common problems. Examples include Strategy, Factory, and Singleton patterns.
- **Use-Case Specific Design Patterns:** These patterns are designed to solve particular types of problems. While not as generically applicable as foundational patterns, they are crucial for specific real-world projects and interviews. Knowing them allows for efficient and elegant solutions when the problem statement directly aligns with their purpose.

The **Composite Design Pattern** is one such use-case specific pattern.

- **Core Concept:** If you are familiar with **trees** from Data Structures and Algorithms (DSA), you already have a good idea of the Composite Design Pattern.
- **Applicability:** It is used to solve any problem statement that can be expressed in a **hierarchical form, like a tree**, and involves two distinct types of nodes:
  1.  **Leaf Nodes:** These are the end points in the hierarchy.
  2.  **Intermediate Nodes (or Composite Nodes):** These nodes can have further sub-elements or children.
- **Classic Example:** The most common and illustrative example, often found when researching the Composite Design Pattern, is **designing a folder system**. This pattern seems specifically made for such hierarchical problems.

### 2. Understanding the File System Problem Without Composite Pattern

Let's consider the classic example: designing a file system within an operating system.

- **File System Components:** A file system fundamentally consists of **folders** and **files**.
- **Hierarchy within a File System:**
  - Folders can contain other folders and files.
  - Files are terminal points; they cannot contain anything else.
- **Node Types in File System Analogy:**
  - **Leaf Nodes:** Files are examples of leaf nodes because no further hierarchy can be built inside them. They are the "end points".
  - **Non-Leaf Nodes (Composite Nodes):** Folders are examples of non-leaf or composite nodes because they can contain more elements, extending the hierarchy.
- **Connection to Trees:** This structure directly parallels the concept of trees in DSA, where a root node has child nodes, which can either be leaf nodes themselves or have further children.

**Scenario: Designing a Folder System from Scratch (Without Design Patterns)**

Imagine we need to design a folder system where multiple folders can contain multiple files, and files are always leaf nodes.

- **Initial Approach:** Without specific design patterns, one might create separate classes for `File` and `Folder`.
  - **`File` Class:**
    - **Properties:** `name` (of the file), `size` (of the file), `content` (of the file).
    - **Method:** `open()` (to retrieve file content).
  - **`Folder` Class:**
    - **Properties:** `name` (of the folder).
    - **Relationships:** A `Folder` would likely maintain two separate lists: one for `Files` it contains and one for `Folders` it contains.
      - This implies a **one-to-many relationship**: a folder can have many files, and a folder can have many other folders.

### 3. Challenges of the Non-Design Pattern Approach

Let's consider implementing common file system commands with this separate `File` and `Folder` class structure.

- **Command 1: `ls` (List Directory)**
  - **Purpose:** To list all immediate folders and files within a current directory.
  - **Example:** If `Root` contains `file1.txt`, `file2.txt`, `Core/`, and `file3.txt`, `ls` on `Root` would list these items.
- **Command 2: `openAll` (Expand Hierarchy)**
  - **Purpose:** To expand and display the entire hierarchy from the current point down to the very bottom (all sub-folders and their contents).
  - **Example:** `openAll` on `Root` would show `file1.txt`, `file2.txt`, then recursively show all contents within the `Core` folder, and so on.

**Implementation Difficulties with Separate Classes:**

1.  **Different Logic for `openAll`:**

    - For a `File`, `openAll()` would simply print its name, as it's a leaf node and has no internal hierarchy to expand.
    - For a `Folder`, `openAll()` would need to iterate through its list of files and then its list of sub-folders, calling `openAll` on each.
    - **Problem:** This approach would lead to **incorrect ordering** in the output, e.g., all files printed first, then all sub-folders, regardless of their actual hierarchical placement. This breaks the expected visual representation of a directory listing.

2.  **Maintaining Order with a Common List:**

    - To fix the ordering issue, one might try to store both `File` and `Folder` objects in a single common list (e.g., using pointers in C++).
    - **New Problem: Type Checking:** When iterating through this common list, the program would need to determine the type of each element (Is it a `File` or a `Folder`?) to apply the correct `openAll` logic.
      - **If `element` is a `File`:** Call its `open()` method (which just prints its name).
      - **If `element` is a `Folder`:** Call its `openAll()` method (which recursively traverses its children).
    - This results in **complex `if-else` statements** that check the type of each element.

3.  **Complexity with New Methods (e.g., `cd` - Change Directory):**
    - Implementing additional commands like `cd` further complicates the design.
    - `cd` is applicable to a `Folder` (you can enter a folder) but **not to a `File`** (you cannot "cd into" a file).
    - Managing these different behaviours for different types (File vs. Folder) across multiple methods would become increasingly cumbersome and lead to a messy codebase with many conditional checks.
    - **Conclusion:** Treating `File` and `Folder` objects separately makes the design very complicated and hard to maintain or extend.

### 4. The Composite Design Pattern Solution

The Composite Design Pattern addresses the problems identified above by advocating a **uniform treatment** for both individual objects (Leaf nodes) and compositions of objects (Composite nodes).

- **Core Principle:** **"Treat Composite and Leaf elements in the same way."**
- **How to achieve Uniformity:** Both the `Leaf` and `Composite` classes should share a **common interface** or **abstract class**.
  - This common interface defines the methods that both types of objects must implement.
  - This ensures that any client interacting with the system doesn't need to differentiate between a `File` or a `Folder`; it just calls the method defined in the common interface.

### 5. Step-by-Step Implementation of File System using Composite Pattern

Let's implement the file system using the Composite Design Pattern.

**Step 1: Create the Common Interface/Abstract Class**

- **Name:** `FileSystemItem`.
- **Nature:** This will be an **abstract class** (or an interface, depending on the language), meaning its methods are only declared, not defined. The responsibility of defining these methods falls to its concrete subclasses.
- **Common Methods Defined:**
  - `ls()`: To list the contents of the directory (for folders) or just its own name (for files).
  - `openAll()`: To expand the entire hierarchy or just show its own content.
  - `getSize()`: To get the size of the item (file size or combined folder size).
  - `getName()`: To return the name of the file system item.
  - `cd(targetName)`: To change directory (only applicable to folders).
  - `isFolder()`: A helper boolean function to check if the item is a folder (used for `cd` logic).

**Step 2: Create Concrete Classes (File and Folder)**

Both `File` and `Folder` classes will **implement** (or inherit from and override methods of) the `FileSystemItem` abstract class.

- **`File` Class (Leaf Node):**

  - **Inheritance:** `File` **is-a** `FileSystemItem`.
  - **Properties:** `name` (string), `size` (integer/long).
  - **Method Implementations (Overriding `FileSystemItem` methods):**
    - `ls(indent)`: Simply prints its own `name`. (If called on a file, there's nothing else to list). `indent` is for visual formatting only.
    - `openAll(indent)`: Simply prints its own `name`. (A file is an end-point; it cannot expand further).
    - `getSize()`: Returns its own `size` property.
    - `cd(targetName)`: Returns `nullptr` (or throws an error) because a file is a leaf node and directory change operations are not supported within it.
    - `getName()`: Returns its `name`.
    - `isFolder()`: Returns `false`.

- **`Folder` Class (Composite Node):**
  - **Inheritance:** `Folder` **is-a** `FileSystemItem`.
  - **Properties:** `name` (string).
  - **Crucial Property (Composition):** `List<FileSystemItem>` (e.g., `children`).
    - This list holds pointers (or references) to `FileSystemItem` objects.
    - This allows the `Folder` to store **both `File` objects and other `Folder` objects** within it, as both are types of `FileSystemItem`.
  - **Method: `add(item)`:** A helper method to add `FileSystemItem` objects (files or sub-folders) to its `children` list.
  - **Method Implementations (Overriding `FileSystemItem` methods):**
    - `ls(indent)`: Loops through its `children` list. For each child, it calls `child->getName()` and prints it. (A small `if-else` is added for visual effect to prefix folders with a `+` sign). The core idea is still to call a common method on the `FileSystemItem` interface.
    - `openAll(indent)`:
      1.  First, prints its own `name`.
      2.  Then, it loops through its `children` list.
      3.  For each `child` in the list, it **recursively calls `child->openAll()`** (with increased indentation).
      4.  This recursion continues down the hierarchy until a `File` (leaf node) is encountered, which then simply prints its name and returns. This effectively expands the entire sub-tree.
    - `getSize()`:
      1.  Initialises `totalSize = 0`.
      2.  Loops through its `children` list.
      3.  For each `child`, it **recursively calls `child->getSize()`**.
      4.  Adds the returned size from the child to `totalSize`.
      5.  Returns the `totalSize`.
      6.  This recursively aggregates the sizes of all files (leaf nodes) within its entire sub-hierarchy.
    - `cd(targetName)`:
      1.  Loops through its `children` list.
      2.  For each `child`, it checks if `child->isFolder()` is `true` AND `child->getName()` matches `targetName`.
      3.  If both conditions are met, it returns the `child` (which is the target `Folder` object).
      4.  If no matching folder is found, it returns `nullptr`.
    - `getName()`: Returns its `name`.
    - `isFolder()`: Returns `true`.

**Step 3: Define Relationships (UML Diagrammatically)**

The relationships described above are key to the Composite Pattern:

- **"Is-a" Relationship (Inheritance):**
  - `File` **is-a** `FileSystemItem`.
  - `Folder` **is-a** `FileSystemItem`.
- **"Has-a" Relationship (Composition/Aggregation):**
  - `Folder` **has-a** list of `FileSystemItem`s (its `children`). This represents a **one-to-many relationship**, where one folder can contain multiple file system items (files or other folders).

**Analogy:** The speaker notes that this combination of "is-a" and "has-a" relationships (where the composite class inherits from the component and also contains a list of components) is similar to the **Decorator Design Pattern**.

### 6. The Power of Polymorphism in Composite Pattern

Let's illustrate how `openAll` works with the Composite Pattern using an example hierarchy:

```
Root (Folder)
├── file1.txt (File)
├── file2.txt (File)
├── Core (Folder)
│   ├── file3.txt (File)
│   └── file4.txt (File)
└── User (Folder)
    └── file5.txt (File)
```

If we call `openAll()` on the `Root` folder:

1.  **Root's `openAll()` execution:**

    - First, `Root` prints its own name ("Root").
    - Then, `Root` iterates through its `children` list, which contains `file1.txt`, `file2.txt`, `Core`, and `User`.
    - Crucially, `Root` (the caller) **does not know or care** whether each item in its `children` list is a `File` or a `Folder`. It treats them all uniformly as `FileSystemItem`s.
    - It simply calls `item->openAll()` for each `item` in its `children` list. This is the power of **polymorphism**.

2.  **Recursive Calls in Action:**

    - When `item->openAll()` is called on `file1.txt` (a `File` object), the `File` class's `openAll()` implementation is executed, which simply prints "file1.txt". The recursion stops here for this branch.
    - When `item->openAll()` is called on `Core` (a `Folder` object), the `Folder` class's `openAll()` implementation is executed:
      - `Core` prints its own name ("Core").
      - Then, `Core` iterates through _its own_ `children` (`file3.txt`, `file4.txt`) and recursively calls `openAll()` on them.
      - `file3.txt` prints its name; `file4.txt` prints its name.
      - Once `Core` has processed all its children, it returns.
    - The same recursive process happens for the `User` folder and its child `file5.txt`.

3.  **Result:** The entire hierarchy is traversed and printed correctly, respecting the structure, without any `if-else` statements in the calling `openAll` method to differentiate between files and folders. The responsibility of specific behaviour (printing name vs. recursing) is delegated to the individual `File` or `Folder` objects themselves.

### 7. Code Demonstration and Output

The speaker demonstrates the C++ implementation.

**Example Setup:**

```cpp
// Create root folder
Folder* root = new Folder("Root");
// Add files to root
root->add(new File("file1.txt", 1)); // Size 1
root->add(new File("file2.txt", 1)); // Size 1

// Create a 'Docs' folder and add files to it
Folder* docsFolder = new Folder("Docs");
docsFolder->add(new File("resume.pdf", 1)); // Size 1
docsFolder->add(new File("notes.txt", 1));   // Size 1
// Add 'Docs' folder to Root
root->add(docsFolder);

// Create an 'Images' folder and add a file to it
Folder* imagesFolder = new Folder("Images");
imagesFolder->add(new File("photo.jpeg", 1)); // Size 1
// Add 'Images' folder to Root
root->add(imagesFolder);
```

**(Note: File sizes are assumed to be 1 for simplicity)**

**Demonstration of Methods:**

1.  **`root->openAll()`:**

    - **Output:** Prints the entire hierarchy with indentation.
      ```
      Root
          file1.txt
          file2.txt
          + Docs
              resume.pdf
              notes.txt
          + Images
              photo.jpeg
      ```
    - **Explanation:** The `openAll` method on `Root` recursively calls `openAll` on all its children. Files print their names. Folders print their names and then recurse into their own children, demonstrating the full expansion.

2.  **`root->ls()`:**

    - **Output:** Prints only the immediate contents of the `Root` folder.
      ```
      file1.txt
      file2.txt
      + Docs
      + Images
      ```
    - **Explanation:** The `ls` method on `Root` iterates through its immediate children and prints their names, with `+` indicating folders. It does not recurse into sub-folders.

3.  **`docsFolder->ls()`:**

    - **Output:** Prints only the immediate contents of the `Docs` folder.
      ```
      resume.pdf
      notes.txt
      ```
    - **Explanation:** Demonstrates `ls` on a sub-folder, showing only its direct children.

4.  **`root->cd("Docs")` and `cw->ls()`:**

    - **Code:**
      ```cpp
      // Change directory from Root to Docs
      FileSystemItem* cw = root->cd("Docs"); // 'cw' stands for Change Working Directory
      if (cw) {
          cw->ls(); // List contents of the new current directory
      } else {
          // Handle error if Docs not found
      }
      ```
    - **Output:**
      ```
      resume.pdf
      notes.txt
      ```
    - **Explanation:** The `cd` method in `Root` searches for a child folder named "Docs". If found, it returns a pointer to that `Docs` folder (`cw`). Then, `ls()` is called on `cw` to list its contents, successfully demonstrating directory change.

5.  **`root->getSize()`:**
    - **Calculation:**
      - `file1.txt` size: 1
      - `file2.txt` size: 1
      - `Docs` folder size: `resume.pdf` (1) + `notes.txt` (1) = 2
      - `Images` folder size: `photo.jpeg` (1) = 1
      - Total `Root` size = 1 + 1 + 2 + 1 = 5
    - **Output:** `5`
    - **Explanation:** The `getSize` method on `Root` recursively calls `getSize` on all its children. If a child is a `File`, it returns its direct size. If a child is a `Folder`, it recursively sums the sizes of _its_ children. This aggregation continues up the hierarchy until `Root` gets the total combined size of all files within its structure.

### 8. Standard UML Diagram of Composite Design Pattern

The standard UML diagram for the Composite Design Pattern consists of three main components:

1.  **`Component` (Abstract Class/Interface):**

    - This is the common interface for all objects in the composition.
    - It declares the interface for objects in the composition.
    - It implements default behaviour for the interface common to all classes, as appropriate.
    - It declares an interface for accessing and managing its child components.
    - It defines an `Operation()` method that all concrete components will implement.
    - _(In our example: `FileSystemItem`)_

2.  **`Leaf` (Concrete Class):**

    - Represents leaf objects in the composition.
    - Leaves have no children.
    - They implement the `Operation()` method from `Component` in a way specific to leaf nodes (e.g., performing the operation directly without recursing).
    - It has an **"is-a" relationship** with `Component`.
    - _(In our example: `File`)_

3.  **`Composite` (Concrete Class):**
    - Defines behaviour for components having children.
    - Stores child components (`Component` objects).
    - Implements the `Operation()` method from `Component`. In its `Operation()`, it typically delegates the operation to its children, often through recursion.
    - It has an **"is-a" relationship** with `Component`.
    - It also has a **one-to-many "has-a" relationship** with `Component` (its list of `children`).
    - _(In our example: `Folder`)_

**Client Interaction:**
The client (code interacting with this system) communicates solely with the `Component` interface. It calls the `Operation()` method on the `Component` and doesn't need to know if it's dealing with a `Leaf` or a `Composite` object. The correct `Operation()` implementation (either direct or recursive) is handled polymorphically by the respective `Leaf` or `Composite` class.

### 9. Standard Definition and Real-Life Use Cases

**Standard Definition:**

"**Composite pattern composes objects into tree structures to represent part-whole hierarchies. It lets the client treat individual objects and compositions of objects uniformly.**"

- **Part-Whole Hierarchy:** This refers to the structure where a "whole" (the Composite) can be made up of "parts" (other Components, which can be either Leaves or other Composites).
- **Uniform Treatment:** The key benefit is that the client code does not need to distinguish between individual objects (leaves) and composite objects when performing operations. It interacts with them all through the common `Component` interface.

**Real-Life Use Cases:**

The Composite Design Pattern is applicable to **any problem that involves a tree-like data structure or a hierarchical arrangement**.

1.  **File Systems:** As thoroughly demonstrated, this is the classic example where folders (composites) contain files (leaves) and other folders (composites).
2.  **Graphical User Interfaces (GUIs):**
    - **Dropdown Menus:** A common application is in front-end UI design, specifically with dropdown lists or menus.
      - A main menu item (e.g., "File") can be a **Composite** because it might contain sub-options.
      - A sub-option like "Save As" can also be a **Composite** if it leads to further options (e.g., "Save As PDF", "Save As Text").
      - The final, actionable items like "Save" or "Save As PDF" are **Leaf nodes**.
    - This pattern allows uniform handling of all menu items, regardless of whether they lead to sub-menus or perform a direct action.
3.  **Organisation Charts:** Representing company structures where departments contain employees and sub-departments.
4.  **XML/HTML Parsers:** Representing the Document Object Model (DOM) where elements can contain text nodes (leaves) or other elements (composites).

**Benefits in Problem Solving:**

- By applying the Composite Design Pattern, problems involving hierarchies are significantly simplified.
- It allows for a clean separation and uniform handling of elements that are either individual or part of a larger composition, making the code more extensible and maintainable. While it might not solve the entire problem, it provides a robust foundation for dealing with hierarchical data structures.

Here are extremely detailed and comprehensive notes from the video "Template Method Pattern | Step-by-Step Example (UML + Code)":

---

### Introduction to Template Method Pattern

The speaker introduces the Template Method Design Pattern as a very interesting and specific pattern, similar to the Composite Design Pattern, because it solves a very particular type of problem. Unlike core design patterns, the Template Method Pattern is problem-specific.

**Why it's Special and Useful:**

- It directly and completely solves certain interview questions and real-world application problems.
- When implemented, it effectively resolves "pipeline" issues, which refer to problems where a specific sequence of steps must be maintained. The speaker promises that understanding this pattern will be enjoyable due to its simplicity and interesting nature.

### Problem Scenario: Data Scientist & Machine Learning (ML) Model Pipeline

The speaker asks the viewer to imagine being a **data scientist** working with various **machine learning algorithms and models**, such as Neural Networks, Decision Trees, Random Forests, SVMs, etc..

**The Core Problem:**
Regardless of the specific ML model, a data scientist always follows a **standard pipeline**—a predefined list of steps—to train any model.

**Standard Pipeline Steps for Training an ML Model:**

1.  **Load Data:** The very first step is to load the data. This step is consistent across all ML algorithms.
2.  **Pre-process Data:** After loading, some preprocessing of the data is performed.
3.  **Train Model:** Once data is loaded and preprocessed, the core model is trained.
4.  **Evaluate Results:** After training, the model's results are evaluated.
5.  **Save Model:** Finally, after evaluation, the model is saved.

**The "Pipeline" Requirement:**
The critical requirement is that this specific sequence of steps **must always be followed in order**. The steps should never be reordered (e.g., loading data, then preprocessing, then training, then evaluating, then saving – this order is fixed).

**The Challenge Without Template Method:**

- If this pipeline isn't enforced, developers integrating a new model (e.g., a `NeuralNetwork` class) are individually responsible for ensuring these steps are called in the correct order: load, preprocess, train, evaluate, save.
- There's a risk that a developer might make a mistake, such as training the model without preprocessing the data first, which would lead to incorrect results.
- The goal is to prevent any developer from making such errors by providing a **pre-defined template**. This is where the Template Method Pattern becomes essential.

### Applying the Template Method Pattern (Conceptual Design)

To solve the pipeline problem, the speaker outlines the design:

1.  **Abstract Base Class: `ModelTrainer`**

    - A generic class named `ModelTrainer` is created.
    - This class is **abstract**. While it's not "pure abstract" (meaning not all methods are abstract), some methods will be abstract, and some will be defined directly within this class.
    - All specific ML model classes (like Neural Network, Decision Tree, Random Forest) will **override** this `ModelTrainer` class.

2.  **Concrete Subclasses (Specific Models):**

    - `NeuralNetworkModel`
    - `DecisionTreeModel`
    - (and any other future ML models like SVMs)

3.  **Abstract Methods (Defined in `ModelTrainer`, Implemented by Subclasses):**

    - The `ModelTrainer` class will declare (but not necessarily define) the individual steps of the pipeline. These methods are meant to be overridden by the concrete model classes.
    - **`loadData(path)`**: This method will take a data path and load the data. Different models might load data differently (e.g., from a file, Excel, etc.), so the definition is left to the subclasses.
    - **`preProcessData()`**
    - **`trainModel()`**
    - **`evaluate()`**
    - **`saveModel()`**

    - **Problem Revisited:** The issue is that concrete classes like `NeuralNetworkModel` might override these methods in any order (e.g., train before preprocess), leading to errors.

4.  **The Template Method: `templateMethod()`**

    - A special method, explicitly named `templateMethod` (or `trainPipeline` in the code example), is added to the **abstract `ModelTrainer` class**.
    - **Crucially, this method is `defined` in the `ModelTrainer` class, not just declared**.
    - **Purpose:** Inside this `templateMethod`, all the abstract pipeline steps (`load`, `preprocess`, `train`, `evaluate`, `save`) are called **in the exact desired order**.
      - `load(path)`
      - `preProcess()`
      - `train()`
      - `evaluate()`
      - `save()`
    - **Enforcement:** The `templateMethod` itself **cannot be overridden** by the subclasses. In C++, this can be achieved with `const`, and in Java, with `final`. This ensures the pipeline order is immutable.
    - The responsibility of the concrete subclasses (`NeuralNetworkModel`, `DecisionTreeModel`) is now simply to **override and implement the individual steps** (`load`, `preprocess`, `train`, `evaluate`, `save`) in their specific way, without worrying about the order of execution.

5.  **The Client's Role:**

    - A `Client` class is introduced.
    - The `Client` has a **"has-a" relationship** with `ModelTrainer`.
    - The client's job is simply to **call the `templateMethod`** of the `ModelTrainer` object it holds.
    - **Example Client Method (`M1`):**

      ```
      class Client {
          ModelTrainer mt_obj; // has-a relationship

          void M1() {
              mt_obj.templateMethod(); // Calls the template method
          }
      }
      ```

    - When `mt_obj.templateMethod()` is called, the parent `ModelTrainer`'s `templateMethod` is executed, which internally calls the individual pipeline steps in the correct order.
    - The `ModelTrainer` reference (`mt_obj`) can point to any concrete subclass (Neural Network, Decision Tree, SVM, etc.) because `ModelTrainer` itself is abstract. The `templateMethod` in the parent class ensures the pipeline order, while the actual implementation of each step (`load`, `preprocess`, etc.) comes from the concrete subclass.
    - This guarantees that the **order of execution remains consistent** regardless of the specific model being trained.

**Key Principle:** The core idea is that the `templateMethod` defines the **"skeleton" or "blueprint" of the algorithm** and its immutable sequence of steps, while allowing subclasses to **redefine the specific implementation** of individual steps without altering the overall algorithm structure.

**Side Note on Common Methods:**

- In some scenarios, certain steps like `loadData` or `saveModel` might be implemented directly in the `ModelTrainer` (parent) class if their implementation is common across all models (e.g., always loading from a file, or always saving to a specific format).
- Subclasses can still choose to **override these common methods** if they need a different implementation, or they can use the default parent implementation.
- Methods like `preProcess`, `train`, and `evaluate` are more likely to vary significantly between models and thus are typically left as abstract/virtual methods for subclasses to implement.

### Standard UML Diagram (Visualizing the Pattern)

The speaker then presents the standard UML diagram for the Template Method Pattern:

- **Template Class (Abstract):** This is the `ModelTrainer` in our example.
  - It contains the **`templateMethod()`**. This method is **defined** here and dictates the order of execution for other steps.
  - It defines (or declares) `step1()`, `step2()`, `step3()` (our `load`, `preprocess`, `train`, etc.). These are typically abstract/virtual methods.
- **Concrete Class A & Concrete Class B:** These are `NeuralNetworkModel` and `DecisionTreeModel` in our example.
  - They **override** the `step1()`, `step2()`, `step3()` methods, providing their specific implementations. They can override these in any internal order they wish; it doesn't affect the overall pipeline.
- **Client:**
  - The client has a reference to the `Template Class` (or an instance of `Concrete Class A` or `B` via the `Template Class` reference).
  - The client's sole responsibility is to **call the `templateMethod()`**.
  - Regardless of whether the client holds a reference to Concrete Class A or B, the `templateMethod()` ensures that `step1` is called, then `step2`, then `step3`, maintaining the predefined order of execution.

### Code Example Walkthrough

The speaker proceeds to show a code example that implements the discussed scenario.

#### 1. `ModelTrainer` Class (Abstract Template Class)

```java
// Simplified representation based on the explanation
public abstract class ModelTrainer {

    // The Template Method: Defines the pipeline/order of execution
    // This method is 'final' or equivalent (cannot be overridden by subclasses)
    public final void trainPipeline() { // Named 'trainPipeline' in code, 'templateMethod' conceptually
        loadData();        // Step 1
        preProcessData();  // Step 2
        trainModel();      // Step 3 (Abstract/Virtual)
        evaluateModel();   // Step 4 (Abstract/Virtual)
        saveModel();       // Step 5
    }

    // Common/Default implementations (can be overridden by subclasses)
    public void loadData() {
        System.out.println("Loading dataset from a common path."); // Example: "Loading dataset from this path"
        // Reads CSV, images, etc.
    }

    public void preProcessData() {
        System.out.println("Splitting data into training and testing sets, normalization.");
        // Common ML preprocessing steps
    }

    public void saveModel() {
        System.out.println("Saving model to disk in a particular format.");
    }

    // Abstract methods (must be implemented by subclasses)
    public abstract void trainModel();

    public abstract void evaluateModel();
}
```

**Explanation:**

- **`trainPipeline()`**: This is the core **template method**. It's `final` (or its equivalent in other languages like `const` in C++), meaning subclasses cannot change its logic. It defines the fixed sequence: load, preprocess, train, evaluate, save.
- **`loadData()`**, **`preProcessData()`**, **`saveModel()`**: These methods have **default implementations** in the `ModelTrainer` class. This means if a subclass doesn't provide its own version, it will use these common implementations. The speaker explains this choice by assuming data loading, preprocessing, and saving might be standard for many models. However, the speaker notes that these _could_ also be abstract and forced upon subclasses if needed.
- **`trainModel()`**, **`evaluateModel()`**: These are declared as **abstract methods**. This forces every concrete subclass to provide its own unique implementation for these steps, as training and evaluation logic typically differ significantly between models.

#### 2. `NeuralNetworkModel` Class (Concrete Subclass)

```java
// Simplified representation based on the explanation
public class NeuralNetworkModel extends ModelTrainer {

    @Override
    public void trainModel() {
        System.out.println("Training Neural Network using 100 epochs.");
        // Specific neural network training logic
    }

    @Override
    public void evaluateModel() {
        System.out.println("Evaluating Neural Network accuracy and loss on validation set.");
        // Specific neural network evaluation logic
    }

    // This subclass also chooses to override saveModel, even though
    // a default implementation exists in the parent.
    @Override
    public void saveModel() {
        System.out.println("Saving Neural Network model to a specific location (overridden).");
    }
}
```

**Explanation:**

- This class `extends ModelTrainer`, inheriting the `trainPipeline` method and the default implementations.
- It **overrides `trainModel()` and `evaluateModel()`** as required by the abstract `ModelTrainer` class.
- It also **overrides `saveModel()`**. This demonstrates an OOP principle: if a child class overrides a parent method, the child's implementation is used, effectively "shadowing" the parent's. This allows the Neural Network to save itself in a specific way if needed, overriding the common saving mechanism.

#### 3. `DecisionTreeTrainer` Class (Concrete Subclass)

```java
// Simplified representation based on the explanation
public class DecisionTreeTrainer extends ModelTrainer {

    // This class chooses to use the default loadData() and preProcessData()
    // implementations from the parent ModelTrainer class.
    // So, no explicit override for loadData and preProcessData.

    @Override
    public void trainModel() {
        System.out.println("Training Decision Tree with specific algorithms.");
        // Specific decision tree training logic
    }

    @Override
    public void evaluateModel() {
        System.out.println("Evaluating Decision Tree performance.");
        // Specific decision tree evaluation logic
    }

    // This class also chooses to use the default saveModel()
    // implementation from the parent.
    // So, no explicit override for saveModel.
}
```

**Explanation:**

- This class also `extends ModelTrainer`.
- It **overrides `trainModel()` and `evaluateModel()`**.
- Crucially, unlike `NeuralNetworkModel`, this class **does NOT override `loadData()` `preProcessData()` or `saveModel()`**. This means it will automatically use the default implementations provided in the parent `ModelTrainer` class for these steps. This highlights the flexibility of the pattern, allowing subclasses to reuse common functionalities while only customizing what's necessary.

#### 4. Client Usage (Main Method)

```java
// Simplified representation based on the explanation
public class Client {
    public static void main(String[] args) {
        System.out.println("Starting Neural Network Training:");
        ModelTrainer neuralNetTrainer = new NeuralNetworkModel();
        neuralNetTrainer.trainPipeline(); // Calls the template method

        System.out.println("\nStarting Decision Tree Training:");
        ModelTrainer decisionTreeTrainer = new DecisionTreeTrainer();
        decisionTreeTrainer.trainPipeline(); // Calls the template method
    }
}
```

**Explanation:**

- The client creates instances of the concrete models (`NeuralNetworkModel`, `DecisionTreeTrainer`) but holds them as `ModelTrainer` type references (polymorphism).
- The client then simply calls `trainPipeline()` on each object.
- The client doesn't need to know the specific implementation details of each model or the exact order of steps; it just trusts that `trainPipeline()` will execute the process correctly.

#### Execution Flow and Output Analysis:

The speaker runs the code to demonstrate the output:

1.  **Neural Network Training Output:**

    - "Loading dataset from a common path." (From `ModelTrainer`)
    - "Splitting data into training and testing sets, normalization." (From `ModelTrainer`)
    - "Training Neural Network using 100 epochs." (From `NeuralNetworkModel` - overridden)
    - "Evaluating Neural Network accuracy and loss on validation set." (From `NeuralNetworkModel` - overridden)
    - "Saving Neural Network model to a specific location (overridden)." (From `NeuralNetworkModel` - overridden)

2.  **Decision Tree Training Output:**
    - "Loading dataset from a common path." (From `ModelTrainer`)
    - "Splitting data into training and testing sets, normalization." (From `ModelTrainer`)
    - "Training Decision Tree with specific algorithms." (From `DecisionTreeTrainer` - overridden)
    - "Evaluating Decision Tree performance." (From `DecisionTreeTrainer` - overridden)
    - "Saving model to disk in a particular format." (From `ModelTrainer` - default used)

**Conclusion from Output:**

- The **order of execution remained identical** for both models (load -> preprocess -> train -> evaluate -> save). This confirms the Template Method's purpose of enforcing the pipeline.
- The individual steps were implemented differently (or used default implementations) based on the specific concrete model. For example, Neural Network used its own `saveModel`, while Decision Tree used the common `saveModel` from the parent.

### Standard Definition of Template Method Pattern

The speaker provides the formal definition of the Template Method Pattern:

- **"Template Method Pattern designs the skeleton of an algorithm for an operation, deferring some steps to subclasses."**
  - This means it defines the basic structure or flow of an operation.
  - It leaves the specific implementation of certain parts of that operation to its subclasses.
- **"Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm structure."**
  - This is the **most important aspect**.
  - The **pipeline or structure of the algorithm remains constant** (e.g., load, preprocess, train, evaluate, save).
  - What changes is **how those individual steps are implemented** by different subclasses (e.g., Neural Network trains data differently from Decision Tree). The order is guaranteed.

### Real-Life Use Cases

The speaker discusses practical applications of the Template Method Pattern:

- **Problem Context:** It is ideal for any problem where there's a **fixed order of execution or a pipeline** that must be maintained. This often appears in interview questions and real-world application development.

- **Example: Payment Processing (UPI, Credit Card/Debit Card)**
  - Imagine a payment system where money is transferred from account A1 to A2.
  - There's a **fixed sequence of steps** for any payment, regardless of whether it's UPI, Credit Card, or Debit Card.
  - **Payment Pipeline Steps (Example):**
    1.  **Validate Payment/Sufficient Funds:** Check if the payer's account (A1) has enough money.
    2.  **Debit Money:** Debit the specified amount from account A1.
    3.  **Credit Money:** Credit the specified amount to account A2.
    4.  **Validate Transaction:** Verify that the entire transaction was successful and everything processed correctly.
    5.  **Finalize Transaction:** Conclude the transaction.
  - **Why Template Method is Crucial Here:** This order is absolutely critical and cannot be changed. You cannot, for example, credit money before debiting it, or validate before debiting/crediting.
  - **Applying the Pattern:**
    - Create a **template method** that defines this exact payment flow (Validate Funds -> Debit -> Credit -> Validate Transaction -> Finalize).
    - Allow specific payment methods (UPI, Credit Card, Debit Card) to **override the individual steps**. For instance, UPI might validate a transaction differently than a credit card, but both must perform the validation step at the same point in the pipeline.
    - The system doesn't care _how_ each step is implemented, only that the _flow_ is maintained.

### Conclusion

The speaker concludes by reiterating that the Template Method Pattern is simple, interesting, and allows for **pipelining and ordering of tasks**. It significantly strengthens one's grasp of Low-Level Design (LLD) concepts, building on foundational design patterns. The speaker encourages continued practice and looks forward to discussing more design patterns and projects.

---
