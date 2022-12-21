const React = require('react')
const Default = require('./layouts/Default')

function New () {
    return (
      <Default>
        <h2>Add a new bread</h2>
        <form action="/breads" method="POST">

          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
          />
          <label htmlFor="image">Image Website </label>
          <input
            // type="text"
            // name="image"
            // id="image"  
  <input type="url" id="website" name="website"
  pattern="https?://.+" title="Include http://" required></input>
          <label htmlFor="hasGluten">Has Gluten?</label>
          <input
            type="checkbox"
            name="hasGluten"
            id="hasGluten"
            defaultChecked
          />
          <br />
          <input type="submit"/>
        </form>
        <div className="backButton">
  <a href="/breads"><button>Go back to the index</button></a>
</div>

      </Default>
    )
}

module.exports = New
