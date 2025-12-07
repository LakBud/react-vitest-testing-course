Describe/it/test/expect/expect is used the same and is automatically imported within setup.ts

render() - A function used to render a specific component with/without props
Example: render(<Component optionalProp={optional} />)

---

expect() - The same but its common to use with the screen prop for DOM Testing
Example: expect(screen.getByText("HelloWorld")).toBeInTheDocument();

---

beforeEach(() => {}) - A function which happens before each test cases. Helpful for rendering a component or variables which are repeatedly defined

---

waitFor(() => {}) - A function which waits for a specific test case. Useful for matchers with async elements which needs to be waited for

---

userEvent:
An abstraction over native DOM events. Instead of manually firing events like click or input, you use userEvent to mimic how a real user would interact with the UI: typing text, clicking buttons, selecting options, etc.

Examples:

- userEvent.type(element, 'text') → simulates typing character by character.

- userEvent.click(element) → simulates a full click (mousedown → focus → mouseup → click).

- userEvent.selectOptions(element, 'value') → simulates selecting an option in a dropdown.
