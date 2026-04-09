# challenge code IBTI

## ✅ Assumptions & Priorities

### 🔹 Priority order

1. Fix rendering bugs  
2. Organize the project file structure  
3. Implement TypeScript typing  
4. Add the new section type (`metric`)  
5. Work on a dynamic rendering solution  

---

### 🔹 Out of scope / Not completed

- Full implementation of a dynamic rendering system without using `if/else`  
- The proposed dynamic rendering solution was started but not completed in time  
- Some ideas were left commented in the code as a base for future improvements  

---

### 🔹 With more time

- Finish the dynamic rendering system  
- Review error handling and fallback for invalid sections  
- Improve the `Types` folder structure  
- Implement additional optional features from the challenge  

---

## 🧠 Decisions & Changes

### What did you change and why?

The main change was reorganizing the project structure.

- The original codebase was disorganized, making it harder to maintain  
- Sections were split into individual components  

A structure was created under: `components/sections`

This improves:
- Readability  
- Maintainability  
- Scalability  

I also started refactoring the rendering system, but it was not completed within the available time.

---

## ➕ New Feature: `metric`

Support for a new section type `metric` was added:

- Integrated into the section typing system  
- Implemented as its own component  
- Follows the same pattern as other sections  

---

## ⚠️ Error Handling

- Added simple validations inside components  
- Missing or invalid fields are checked before rendering  
- Unknown sections fall back to a safe “invalid section” block  

This approach prevents crashes and keeps the UI stable even with inconsistent data.

---

## 🔍 Reflective Questions

### What did you change and why?

I reorganized the project structure to improve readability and maintainability, and separated each section type into its own component.

I also started improving the rendering system, but couldn’t complete it within the time limit.

---

### What would you improve next?

The main improvement would be the rendering system, replacing the current `if/else` approach with a more scalable and extensible solution.

---

### How would you scale this to ~10x more section types?

With a complete dynamic rendering system, scaling would be straightforward:

- Create new components for each section type  
- Register them in the rendering system  

This way, adding new types would not increase the complexity of the main rendering logic.

---

### How did you handle invalid/unknown data?

- Added simple validations in components  
- Checked required fields before rendering  
- Invalid or unknown sections are rendered using a safe fallback  

---

### How would you test this?

I would focus mainly on integration tests, validating:

- Correct rendering of each section type  
- Behavior with invalid data  
- Fallback behavior for unknown sections  

Given the small scope of the project, unit tests would be less of a priority.

---

### Which decision would you revisit first in production?

The rendering system, the `Types` folder structure, and error handling — to ensure better robustness and scalability.

---

### Did you use AI tools? How?

Yes, I used AI to assist with repetitive tasks such as:

- Creating data structures  
- Writing large arrays  
- Improving unstructured text  
- Assisting with English writing  

---

## 🧩 Development Process

The development followed these steps:

1. Initial integration with the provided data  
2. Fixing rendering issues  
3. Organizing file structure and components  
4. Implementing TypeScript typing  
5. Adding the `metric` section type  
6. Attempting dynamic rendering implementation (not completed)  

Due to time constraints, the final solution uses a simpler `if/else` approach, while leaving a foundation for future improvements.
