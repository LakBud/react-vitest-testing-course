# Matchers:

## There exists three categories for matchers:

### getBy:

- Purpose: When the element must be found in the DOM.
- Behavior: Throws an error if the element is not found.
- Use case: When youre sure the element will be present during the test.

Examples:

.getByText()

- Used to search for elements that contain a specified text

.getByRole(role, options)

- Is a query method used to find DOM elements by their ARIA role
- role represents the aria label string (button, navigation, etc)
- options represents an object that can include additional configurations

---

### findBy:

- Purpose: For asynchronous elements (elements that appear after some delay)
- Behavior: Returns a promise that resolves when the element is found, or rejects after the default timeout (which can be configured)
- Use case: When youre testing something that will appear asynchronously, like after an API call or user interaction
- Attributes: Must be asynchronous

---

### queryBy:

- Purpose: When the element may or may not be found
- Behaviour: Returns null if the element is not found (no error)
- Use case: When you need to check for the non-existence of an element or its okay if the element isnt there.

---

### getAllBy - findAllBy - QueryAllBy:

- Purpose: For handling multiple elements of the same type.
- Behavior: These queries return arrays or lists of elements.
- Use case: When you expect multiple elements and want to interact with all of them

---

### Other Matchers:

.toBeInTheDocument()

- used to verifiy if an element exists within the DOM
- Almost always used with the screen prop and testing matchers

---

## not.matcher

You can use the not. to identify when the component should not be doing a certain action.

Example:

- not.toBeInTheDocument() - isnt supposed to be in the document
- not.haveLength(2) - isnt supposed to have a length of 2
