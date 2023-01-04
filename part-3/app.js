function App() {
    return (
      <div>
        <Person
          name="Josh"
          age={23}
          hobbies={["coding", "wrestling", "drinking beer"]}
        />
        <Person
          name="Kristen"
          age={4}
          hobbies={["videogames", "candy"]}
        />
        <Person
          name="Alexander"
          age={18}
          hobbies={["reading", "saxophone", "eating vegetables"]}
        />
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById("root"));