Unlike ``Redis`` and ``Postgres``, ``Node JS`` requires a folder to operate in, just like our frontend projects require a repo in which we have the respective **HTML**, **CSS** and **JS** files.<br><br>
``Redis`` & ``Postgresql`` are somewhat **Global**. <br>
Same data can be accessed from any folder. Not is this case with ``Node JS``.<br><br><br>

``fs -> file system``
```
var fs = require("fs")
```
Here, all the javascript written in the ``"File System" module`` is **copied** into a variable named as ``"fs"``.<br><br>
```
This is simlar to how the script tag copies all the JS from the file mentioned in the src attribute, ( <script src="myscripts.js"></script> )
```
<br><br><br>

JS does not have access to our computers. It's access is limited to the browser only.<br><br>

Whereas NodeJS has access to the couputer as well. Proof? fs.mkdirfileSync("fileName") will create a file in the specified folder. JavaScript cannot create any folders without Node JS.
