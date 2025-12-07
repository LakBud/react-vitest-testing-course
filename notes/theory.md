Step by Step React Testing.

1. Import all necessary packages
2. Describe the test suite
3. Write the test
4. Render the Component to the DOM (for testing)
5. Select the elements from the DOM you want to test.
6. Assert the expected results

---

ARIA (Accessible Rich Internet Applications) roles explain what an element does or its purpose, especially for accessibility. This method is part of a set of tools used to test how accessible and interactive your app is. It helps to understand how users with screen readers or other assistive technologies would you use your app.

Why is getByRole so good?

- Accessibility: It encourages developers to think about the accessibility of their components.
- Reliability: Queries based on ARIA roles are less likely to break when the internal structure of the component changes.
- Best Practices: It helps align tests with how users interact with your app (screen readers, keyboard navigation)

---
