Situation:

JS was designed for browsers. And, browsers cannot not access computer resources.
No access to CPU and its resources, means no multithreading.
Hence, JS was and is termed as a single threaded language.

Problem:

We needed JS to be efficient with the only limited resources that it could access while running on the browser.

Solution:

Event Loop: An algorithmn that handles the async nature of Javascript.

EXTRAS:
Browsers cannot not access computer resources. Why?

1. Security resons: So that someone else cannot gain control over your computer simply by you visiting a malicious website.

2. Performance: Besides the very strong point of security, other reason was that not a lot of resources could be shared with the browser as the same were also required by other tasks and operations that the computer runs [Alongside, our apps and stuff].

.
.
.
.
.
.
Now, How the fuck do we define JavaScript?
-> JS is a 
    1. single-threaded (will run on a single thread i.e. does have the whole power or memory of RAM. Has a single Call Stack)
    2. non-blocking (Code execution will not be blocked)
    3. asynchronous 
    4. concurrent (Can work parallely in a sense)
    language.

Point no. 2, 3 & 4 imply a similar meaning.

Where does it compile?
-> Google's V8 Javascript Engine. Two main things provided by it: 
    1. Heap
    2. Stack

    Rest of the stuff i.e. Event Loop, Callback Queue, APIs and more is contained by Javascript itself and not the V8 engine. This was done to not make JS dependent on V8 only and allow it to be browser independent.

Heap-> Memory allocation [Variables, Function ....]
Stack-> Code Execution [Whatever gets pushed inside the stack, keeps getting executed by the V8]

Single Threaded === Single Call Stack === Only 1 line of the code (one thing in the stack acc to LIFO) can be executed at a time

If you run infinite loop on bowser, 
You'll receive an error saying, "Maximum call stack size exceeded". It occurs when there are too many function calls (recursion without base case).

Call stack [provided by V8] -> Web API [provided by browser] -> Callback Queue [provided by JavaScript]

Event Loop : 
If ( Stack is empty && Callback queue has anything ):
    Push the operation from CallBac Queue to the Call Stack for execution.

