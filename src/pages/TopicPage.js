function TopicPage() {
    return (
       <>

            <h2>Web Development Concepts</h2>
            <nav className="contentNav">
                <a className="contentNav, contentNavColor" href="#web servers">Web Servers</a>
                <a className="contentNav, contentNavColor" href="#frontend design">Frontend Design</a>
                <a className="contentNav, contentNavColor" href="#images and css">Images and CSS</a>
                <a className="contentNav, contentNavColor" href="#forms">Forms</a>
                <a className="contentNav, contentNavColor" href="#express">Express</a>
                <a className="contentNav, contentNavColor" href="#javascript">JavaScript</a>
            </nav>
            <article id="web servers">
                <h3>Web Servers</h3>
                <p>
                Related to a website, an <strong>index</strong> refers to the homepage of a website. A homepage often has a menu that shows the categories 
                of the page's contents. For example, when we visit YouTube, there are various categories of videos under the menu, if I want 
                to watch some news, clicking on the news menu will directly lead me to all the news I could watch. A website index serves as
                a navigator and helps to provide faster access to information. Related to a server, an <strong>index</strong> refers to the organization and 
                categorization of files to optimize search. For example, index.html is the default name for a 'home' page of a website hosted on an 
                <strong>Apache</strong> web server. OSU's Engineering server uses Apache web server to host their websites. There are other servers 
                available.
                </p>
                <p>
                Comparing the file on the web server and my local computer, I noticed that the top 
                item on the server shows the folder name (a1-lijiyo/) while on my computer the top
                item is index.html. Both files on the server and on my computer have <strong>main.css</strong> and 
                <strong>main.js</strong>. The difference is that on the server the status of these two items 
                is <strong>404</strong>, while on my computer it is (failed). There are two additional items on 
                the server that I did not see on my computer: <strong>executor.js</strong> and <strong>favicon.ico</strong>. 
                Comparing headers from both files, I noticed they both have a green dot with 200 OK <strong>status code</strong> and both 
                request methods are 'get'. The file on the web server has much more information on the <strong>response headers</strong>. 
                The response headers on my computer have only 'content-type' and 'last-modified' information; the response 
                headers on the file of the web server  also have the previous two information, and more: accept-ranges: 
                bytes, connection, content-encoding, content-length, content-type, date, etag, keep-alive,  last-modified, 
                server, and vary. The <strong>request headers</strong> from my computer only have 'sec-ch-us' related 
                information while the file on the web servers has much more, including accept related information, 
                connection, cache, connection, cookie, host etc. Neither file has a <storng>body</storng> in the request.
                </p>        
                <p>Because the favicon is provided by the OSU server automatically, when I unloaded the 
                file on the OSU server, the favicon was attached to the file. When I requested to see 
                the file using the OSU server URL, the request succeeded and the file, including the 
                favicon, was the response body. Therefore, the status of the file and the favicon both 
                have <strong>200</strong>, meaning the request was successful.
                The statue of main.css and main.js shows <strong>404</strong>, meaning not found because my file does not contain any CSS 
                or JavaScript content. 
                </p>
                <p>
                Https is the <strong>scheme</strong>. Oregonstate.edu is the <strong>host domain</strong>. Web.engr
                is the <strong>subdomain</strong>. And /~lijiayo/a1-lijiayo/ is the <strong>resource</strong>. 
                </p>     
            </article>

            <article id="frontend design">
                <h3>Frontend Design</h3>
                <p>
                    <strong>Frontend design</strong> aims to create an optimal user experience that involves the visual 
                    design of the page, the graphical user interface (GUI), and the interactive components. 
                    To achieve this goal, developers must create a cohesive visual design of the page using 
                    a consistent color scheme, font, and typography scheme, as well as a scheme for photography, 
                    icons, and illustrations. Developers also need to create an intuitive navigation system that 
                    enables users to find the information they are looking for on the user interface. 
                </p>
                
                <p><strong>Five "E"s of usability</strong></p>
                <dl>
                <dt><strong>Effective</strong></dt>
                <dd>The product should enable users to reach their goals and achieve accurate result.</dd>
                <dt><strong>Efficient</strong></dt>
                <dd>The product helps users to perform their tasks and reach their goals quickly.</dd>
                <dt><strong>Easy to navigate</strong></dt>
                <dd>The navigation system should be intuitive and straightforward. First time 
                    users should be able to find what they are looking for quickly by clicking 
                    or searching. They should be able to remember how to use it again in the future.
                </dd>
                <dt><strong>Error-free</strong></dt>
                <dd>The product should be free of errors to avoid accessibility and availability issues. 
                    This can be achieved by understanding the common mistakes that users may make while interacting with the product. By identifying and 
                    addressing potential roadblocks, developers can create a seamless user experience that 
                    meets the needs of all users, even those with specific requirements or limitations.
                </dd>
                <dt><strong>Enjoyable</strong></dt>
                <dd>The product should be enjoyable to use. The product should be <strong>engaging</strong> with the users and 
                    meeting users' unique needs in terms of both content and design. This with the previous 
                    four "E" create a positive user experience that encourages users to return. 
                </dd>           
                </dl>    
                
                <p>
                    The purpose of a <strong>page layout tag</strong> is to create a page layout block that 
                    provides a clear visual structure for a webpage and helps machines, such as search engine
                    robots and screen readers, to understand the location of various contents. 
                </p>
                <p>
                    <strong>Anchors</strong> are used to create linked within a webpage or between different 
                    webpages. Links are created with two attributes, "href" and the link description. The href
                    attribute specifies the URL of the page that the link will take users to. Developers should 
                    include a description between the opening and closing of the &lt;a&gt; tag to explain to users what 
                    the link is about.
                </p>
            </article>
            <article id="images and css">
                <h3>Images and CSS</h3>
                <p>
                    <strong>Six major specifications</strong> of images for the web are: descriptive file name, small file size, exact 
                    dimension, correct file format, reduced resolution and color mode. <strong>Descriptive file names</strong> help search 
                    engine bots to categorize the images for users to search. <strong>Small file size</strong> reduces the load time. Adjusting 
                    images to the exact dimensions of the webpage will reduce load time. Different kinds of images require 
                    different file formats, choosing the <strong>correct file format</strong> is crucial. <strong>Reduced resolution</strong> 
                    is necessary because monitors only render a certain range of pixels per inch. Different kinds of images also required 
                    different <strong>color mode</strong>, it is important to select the right one. .JPG and WebP are the most appropriate 
                    formats for photos because both of them can be compressed into small files size and remain rectangular. .GIF, .PNG and .SVG are most appropriate for 
                    line art because all of them support transparency.
                </p>
                <p>  
                    Some main reasons for <strong>incorporating stylesheets</strong> in websites and apps are: <strong>consistent style</strong>, stylesheet
                    allows developers to design the visual appearance of a website or app in a consistent theme or manner; <strong>Easier to debug</strong>, 
                    stylesheet enables developers to separate the visual layer (CSS) from the structure (HTML), if a problem arises in either component, it is 
                    easier to debug one without modifying the other. <strong>Reusability</strong>, developers could use stylesheet on a different website 
                    and app. There are five ways to incorporate style, they are: <strong>external CSS</strong>, they are rules implemented in external files, 
                    and using &lt;link&gt; to be linked in a html file; <strong>embedded</strong>, it is used within a &lt;style&gt;&lt;style&gt; tag in HTML; 
                    <strong>inline</strong>, it is used within an element using an attribute and value; <strong>JavaScript template literal</strong>, it is used 
                    within a JavaScript function; and manipulating <strong>Document Object Model (DOM)</strong> in a <strong>regular JavaScript</strong>.
                </p>
            </article>
            <article id="forms">
                <h3>Forms</h3>
                <p>
                    <strong>Six major goals</strong> of accessible forms are: first, <strong>providing clear instructions</strong>, so users with vision problems will still be able 
                    to understand what the form is about with the screen reader. Secondly, we should <strong>let users know why</strong> we are gathering their data 
                    and <strong>which fields of the forms are required</strong>. Third, we should <strong>set the first field to autofocus</strong> so that users can start typing 
                    right away. Fourth, we should <strong>make sure that the form can be filled out with a keyboard</strong>, so those users who can't or don't use 
                    a mouse or trackpad can still use it. Fifth, we should <strong>add tab indexing to complex forms</strong> to make it clear what order to fill 
                    in the form. Sixth, we should <strong>ensure that validation messages are screen readable</strong> for users with vision issues. Because the built-in 
                    HTML browser messages are not screen readable. 
                </p>
                <p>
                    The form tag <strong>&lt;form&gt;</strong> is used to add a form to an HTML document. It has two important attributes: <strong>action</strong> specifies where the request from 
                    the form should be set, and <strong>method</strong> specifies the method to be used in the HTTP request sent when the form is submitted. The label 
                    tag <strong>&lt;label&gt;</strong> is one of the forms controls tags, it helps users, especially those using a screen reader, understand the purpose of their data 
                    input. The fieldset tag <strong>&lt;fieldset&gt;</strong> and the legend tag <strong>&lt;legend&gt;</strong> separate form controls into logical groups, making complex forms more accessible to 
                    visually impaired users. The input tag <strong>&lt;input&gt;</strong> is the most commonly used tag to get user data within a form. It has an important attribute 
                    <strong>type</strong> which changes how the input is displayed, used and interacted with other attributes. Another important attribute is <strong>name</strong>,
                    which lets the serve know each data and its associated parts of the form. The select tag <strong>&lt;select&gt;</strong> gives users a drop-down menu of choices. 
                    It has a name attribute that serves the same purpose as the one in the input tag. There is another tag within the selection tag, 
                    the <strong>&lt;option&gt;</strong>, which is used to define the choices in the drop-down menu. The <strong>&lt;textarea&gt;</strong> tag allows users to enter comments or 
                    questions, it has its own &lt;label&gt; and many attributes. The <strong>&lt;button&gt;</strong> tag will perform the action that was defined in the &lt;form&gt;
                    action attribute. 
                </p>
                <p>
                    These are some major form style recommendations to improve usability. Developers, taking account of the fact that 
                    some users will fill out a form with their cellphone, can <strong>revise the default form elements</strong> to make them easier to 
                    read and interact with. The default gray border of the <strong>fieldset{} may be enhanced</strong> to draw attention, while <strong>additional margin and padding</strong> 
                    may improve readability. <strong>Styling the legend</strong> would help users distinguish it from labels. 
                    <strong>Styling and displaying labels differently</strong> may make them easier to read. <strong>Increasing the font size and padding </strong> 
                    will accommodate fat fingers and arthritic hands. And <strong>inheriting body{}'s font family</strong> will make the 
                    form more consistent. <strong>Autofocus</strong> will help users start typing right away. Using <strong>:focus</strong> to change background color 
                    will remind users they can start typing. Using <strong>:required </strong> and <strong>label.required:after</strong> indicate users which fields 
                    are required. Specifying the rules inside the input tag and styling the border color of input with <strong>invalid</strong> and 
                    <strong>valid</strong> can help users understand and follow the form requirements. Styling placeholder, checkbox, and radio button 
                    would also help to improve readability.
                </p>
            </article>

            <article id="express">
                <h3>Express</h3>
                <p>
                    <q cite="https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm"><strong>Node.js</strong> is an open source, cross-platform runtime environment for developing server-side and networking applications. 
                    Node.js applications are written in <strong>JavaScript</strong>, and can be run within in all major platforms. Node.js provides a rich 
                    <strong>library</strong> of various JavaScript modules, which simplifies the development of web applications.</q> <strong>Npm</strong> is a <strong>package manager</strong> 
                    for Node. It is an <strong>online repository</strong> for publishing node.js packages. Developers use <strong>command line utility</strong> to install packages. 
                    Utilizing it helps developers avoid writing everything from scratch. <strong>Express.js</strong> is a popular framework for building web applications 
                    using Node.js. It provides <strong>Application Programming Interface (APIs)</strong> for common tasks that web applications need to do. With Express, developers gain the ability to access, 
                    post, and delete data, as well as define the ports and routes through which data will travel. Developers can also serve static files, 
                    like from a /public folder, and make templates that build responses with that data. Furthermore, developers may employ middleware to 
                    handle requests within the routing pipeline.
                </p>
            </article>

            <article id="javascript">
                <h3>JavaScript</h3>
                <p>
                    These are the main data types of JavaScript: a <strong>number</strong>, JavaScript has just one number type 
                    which is double-precision floating-point numbers; a <strong>Boolean value</strong>, either false or true; 
                    a <strong>string</strong>; a <strong>symbol</strong>; the special values <strong>undefined</strong> and <strong>null</strong>; 
                    an <strong>object</strong>, which is a non-primitive type.
                </p>
                <p>
                    An <strong>object</strong> is a set of name-value pairs. The properties of the object are the names of these pairs. 
                    We can create (or add), read, update and delete properties of the object. These four actions are 
                    referred to as <strong>CRUD</strong>. An <strong>array</strong> is an object whose property names are the strings '0', '1', '2', etc. 
                    The properties of an object must be of string data type. We can access 
                    the elements inside an array using an <strong>integer index</strong> in a square bracket, e.g., [0]. 
                    A JavaScript array of values can contain any JavaScript value type, including an object. 
                    There are several methods available for an array. <strong>JSON</strong> stands for JavaScript Object Notation 
                    and is a very widely used format for exchanging data between applications. 
                    We can map an object in a program to a string in the JSON format, as well as 
                    create an object in a program from a string in the JSON format. JSON has two 
                    primary methods: <strong>JSON.stringify()</strong> is used to create a JSON string from a JavaScript 
                    object, and <strong>JSON.parse</strong> is used to create a JavaScript object from a JSON string.
                </p>
                <p>
                    JavaScript supports conditional branching via if and switch statements. 
                    The <strong>if statement</strong> can be used to execute if the provided expression evaluates to true. 
                    In the <strong>switch statement</strong>, the expression is evaluated once, then the matching 
                    <strong>case branch</strong> is executed. The code to be executed for the branch ends with a break 
                    statement. If none of the case branches matches, the <strong>default branch</strong> will be executed. There are more than 
                    a couple of loops we can use in JavaScript. A <strong>loop with while</strong>: if the while loop evaluates to be true, 
                    then the body of the while loop is executed. Otherwise, the loop ends. A <strong>loop with do while</strong>: 
                    it is similar to the while statement, with one crucial difference: the expression is evaluated after the 
                    body has been executed. This means that a do loop will execute at least once. A 
                    <strong>loop with for statements</strong> is used to execute a block of code a certain number of times. 
                    A <strong>for...of statement</strong> creates a loop iterating over iterable objects. 
                    A <strong>for...in</strong> statement iterates a specified variable over all the enumerable properties of an object.                
                </p>
                <p>
                    <strong>Object-oriented programming</strong> is programming that deals with objects. 
                    An object is expected to have an <strong>identity, state,</strong> and <strong>behavior</strong>. 
                    In JavaScript, objects can be made without having to declare classes.
                </p>
                <p>
                    <strong>Functional programming</strong> is programming that utilizes functions. 
                    Functions in JavaScript are “first-class” values: functions can be assigned to variables, 
                    functions can receive other functions as arguments, and functions can return functions. 
                </p>
            </article>
        </>
    );
}
export default TopicPage;

                           
    
                
                        
                
            
        