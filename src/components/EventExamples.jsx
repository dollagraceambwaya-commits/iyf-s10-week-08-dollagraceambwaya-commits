function EventExamples() {
  // Inline event handler (simple cases)
  const handleClick = () => {
    console.log("Button clicked!");
  };

  // Event handler with event object
  const handleInput = (event) => {
    console.log("Input value:", event.target.value);
  };

  // Event handler with custom parameters
  const handleItemClick = (itemId) => {
    console.log("Item clicked:", itemId);
  };

  return (
    <div>
      {/* Inline event handler (simple cases) */}
      <button onClick={handleClick}>Click me</button>

      {/* Event handler with event object */}
      <input onChange={handleInput} />

      {/* Event handler with custom parameters - use arrow function */}
      <button onClick={() => handleItemClick(123)}>Item 123</button>

      {/* Prevent default behavior */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form submitted!");
        }}
      >
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EventExamples;
