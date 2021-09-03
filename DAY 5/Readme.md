Unlike Redis and Postgres, Node JS requires a folder to operate in, just like our frontend projects require a repo in which we have the respective html, css and js files.
Redis & postgresql are somewhat globaal. Same data can be accessed from any folder. Not is this case with Node JS.

fs -> file system
var fs = require("fs")
Here, all the javascript written in the file system module is copied into a variable named as "fs".
This is simlar to how the script tag copies all the JS from the file mentioned in the src attribute, ( <script src="myscripts.js"></script> )

JS does not have access to our computers. It's access is limited to the browser only.

Whereas NodeJS has access to the couputer as well. Proof? fs.mkdirfileSync("fileName") will create a file in the specified folder. JavaScript cannot create any folders without Node JS.