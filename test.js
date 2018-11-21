function Person(props) {
    return (
      <div className="person">
        <h1>{props.name}</h1>
        <p>Your Age: {props.age}</p>
      </div>
    );
  }
  
  var app = (
    <div>
       <Person name="cinder" age="28" />
        <Person name="head" age="29" />
    </div>
  );
  
  ReactDOM.render(app, document.querySelector('#app'));