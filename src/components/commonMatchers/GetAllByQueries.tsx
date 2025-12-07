const GetAllByQueries = () => {
  return (
    <div>
      <label htmlFor="input1">Label for input</label>
      <input type="text" placeholder="Enter text here" id="input1" value="default value" disabled />

      <label htmlFor="input2">Label for input</label>
      <input type="text" placeholder="Enter text here" id="input2" value="default value" disabled />

      <input placeholder="Enter Something.." disabled />
      <input placeholder="Enter Something else.." disabled />

      <p>This is a paragraph with some text</p>
      <p>This is a paragraph with some text</p>

      <input value="some display value" disabled />
      <input value="some display valuE" />

      <img src="image1.png" alt="A sample image" />
      <img src="image2.png" alt="Another sample image" />

      <div title="This is a div with title attribute">Div content with title attributes</div>
      <div title="This is a another div with title attribute">Another Div content with title attributes</div>

      <button role="button" aria-label="This is a button" disabled>
        Disabled Button 1
      </button>
      <button role="button" aria-label="This is a button 2" disabled>
        Disabled Button 2
      </button>

      <div data-testid="custom-test-id-1">This div has test id 1</div>
      <div data-testid="custom-test-id-2">This div has test id 2</div>
    </div>
  );
};

export default GetAllByQueries;
