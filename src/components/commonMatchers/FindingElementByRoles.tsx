// Comments are specifiying the ARIA-labels

const FindingElementByRoles = () => {
  return (
    <div>
      {/* link */}
      <a href="/">Linky</a>
      {/* button */}
      <button>Button</button>
      {/* contentinfo */}
      <footer>contentInfo</footer>
      {/* heading */}
      <h1>Heading</h1>
      {/* banner */}
      <header>Banner</header>
      {/* img */}
      <img alt="description" />
      {/* spinbutton */}
      <input type="number" />
      {/* list */}
      <ul>List</ul>
      {/* listitem */}
      <li>List Item</li>
    </div>
  );
};

export default FindingElementByRoles;
