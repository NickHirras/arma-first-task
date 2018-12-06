TASKS
-----

1.  Bulid a simple node.js website with a Header, Title, and Body

   - Install node.js (homebrew, nodejs, npm)

   - Verify installation (npm -v, node -v, etc.)


2.  Upgrade website to an MVC model

   - Import vue.js libraries

   - Implement routing to serve index template on GET /.

   - Change the index.html page to use vue for templating.


3. Add a form with Header, Title, and Body input fields that updates on a post.

   - Add a form to the page, with input field for NAME.

   - Add a route for POST to receive the field, displaying the submitted value on the page as "Hello {NAME}", and populating that value into the input field.


HOW TO RUN
----------

Start NODE server with `node app.js`

Run tests with the script `run_tests.sh`. This will run eslint on the server and client-side javascript files. Will also launch the selenium test.  (Make sure node is started first).

Access the site at `http://localhost:3000/`
