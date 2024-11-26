let PSUC = {
  history_of_c: `
    <h2 class="topic-name">History of C</h2>
      <h3 class="sub-topic-name">What is C</h3>
      <div class="info">
      <p class="sub-info">C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972.</p>
      <p class="sub-info">It is a very popular language, despite being old. The main reason for its popularity is because it is a fundamental language in the field of computer science.</p>
      <p class="sub-info">C is strongly associated with UNIX, as it was developed to write the UNIX operating system.</p>
      </div>
      <h3 class="sub-topic-name">Why Learn C</h3>
      <div class="info">
      <ul class="points">
        <li>It is one of the most popular programming languages in the world</li>
        <li>If you know C, you will have no problem learning other popular programming languages such as Java, Python, C++, C#, etc, as the syntax is similar</li>
        <li>C is very fast, compared to other programming languages, like Java and Python</li>
        <li>C is very versatile; it can be used in both applications and technologies</li>
      </ul>
      </div>
    `,
  application_areas: `
    <h2 class="topic-name">Application Areas of C</h2>
      <div class="info">
      <ul class="points">
        <li><b class="thick-list">Operating systems : </b> C is widely used for developing operating systems such as Unix, Linux, and Windows.</li>
        <li><b class="thick-list">Embedded systems : </b> C is a popular language for developing embedded systems such as microcontrollers, microprocessors, and other electronic devices.</li>
        <li><b class="thick-list">System software : </b>C is used for developing system software such as device drivers, compilers, and assemblers.</li>
        <li><b class="thick-list">Networking : </b> C is widely used for developing networking applications such as web servers, network protocols, and network drivers.</li>
        <li><b class="thick-list">Database systems : </b> C is used for developing database systems such as Oracle, MySQL, and PostgreSQL.</li>
        <li><b class="thick-list">Gaming :</b> C is often used for developing computer games due to its ability to handle low-level hardware interactions.</li>
        <li><b class="thick-list">Artificial Intelligence : </b> C is used for developing artificial intelligence and machine learning applications such as neural networks and deep learning algorithms.</li>
        <li><b class="thick-list">Scientific applications : </b> C is used for developing scientific applications such as simulation software and numerical analysis tools.</li>
        <li><b class="thick-list">Financial applications : </b>C is used for developing financial applications such as stock market analysis and trading systems.</li>
      </ul>      
      </div>
    `,
  structure_of_a_c_program: `
    <h2 class="topic-name">Structure of a C Program</h2>
      <h3 class="sub-topic-name">Documentation Section</h3>
      <div class="info">
        <ul class="points">
          <li>
            Optional section used to provide information about the program, such
            as author, date, purpose, etc.
          </li>
          <li>
            Usually begins with /* and ends with */ to form a multi-line
            comment.
          </li>
        </ul>
      </div>
      <h3 class="sub-topic-name">Preprocessor Directives Section</h3>
      <div class="info">
        <ul class="points">
          <li>
            Includes directives that instruct the preprocessor to process the
            source code before compilation.
          </li>
          <li>
            Common directives
            <ul class="nested-points">
              <li>
                <b class="thick-list">#include:</b> Includes header files.
              </li>
              <li><b class="thick-list">#define:</b> Defines macros.</li>
            </ul>
          </li>
        </ul>
      </div>
      <h3 class="sub-topic-name">Global Declaration Section</h3>
      <div class="info">
        <ul class="points">
          <li>
            Declares variables that can be accessed from anywhere in the
            program.
          </li>
          <li>These are usually defined outside of any function.</li>
        </ul>
      </div>
      <h3 class="sub-topic-name">Main Function</h3>
      <div class="info">
        <ul class="points">
          <li>The entry point of every C program.</li>
          <li>It has the following structure:</li>
          <li style="list-style-type: none">
            <p class="example">
              int main() {<br />
              // Code to be executed <br />
              return 0;<br />
              }
            </p>
            <ul class="nested-points">
              <li>
                <b class="thick-list">int : </b>Indicates the function returns
                an integer value.
              </li>
              <li>
                <b class="thick-list">main() : </b>The name of the main
                function.
              </li>
              <li>
                <b class="thick-list">return 0; : </b> Indicates successful
                program execution.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <h3 class="sub-topic-name">User-Defined Functions</h3>
      <div class="info">
        <ul class="points">
          <li>
            Functions defined by the programmer to perform specific tasks.
          </li>
          <li>
            They are declared and defined separately from the main function.
          </li>
        </ul>
      </div>
      <h3 class="sub-topic-name">A Simple Example</h3>
      <div class="info">
        <p class="example">
          #include &lt;stdio.h &gt;<br />
          <br />
          int main() {<br />
          &nbsp;&nbsp; printf("Hello, world!\n");<br />
          &nbsp;&nbsp; return 0;<br />
          }
        </p>
        <ul>
        <br>
          <li style="list-style-type: none">
            <b class="thick-list">Breakdown :</b>
          </li>
          <br>
          <li style="list-style-type: none">
            <ul class="nested-points">
              <li>
                <b class="thick-list">#include &lt;stdio.h&gt; :</b>Includes the
                standard input/output library, which provides functions like
                printf for printing to the console.
              </li>
              <li>
                <b class="thick-list">int main() : </b>
                Declares the <b class="thick-list">main</b> function, which is
                the starting point of the program.
              </li>
              <li>
                <b class="thick-list">printf("Hello, world!\n"); : </b>
                Prints the message "Hello, world!" to the console.
              </li>
              <li>
                <b class="thick-list">return 0; : </b>
                Indicates successful program execution.
              </li>
            </ul>
          </li>
          <br>
          <li style="list-style-type: none">
            <b class="thick-list">Key Points : </b>
          </li>
          <br>
          <li style="list-style-type: none">
            <ul class="nested-points">
              <li>
                <b class="thick-list">Indentation : </b>
                Use consistent indentation to improve readability.
              </li>
              <li>
                <b class="thick-list">Comments : </b>
                Add comments to explain the code's purpose.
              </li>
              <li>
                <b class="thick-list">Naming Conventions : </b>
                Use meaningful names for variables and functions.
              </li>
              <li>
                <b class="thick-list">Modularization : </b>
                Break down the program into smaller, reusable functions.
              </li>
              <li>
                <b class="thick-list">Error Handling : </b>
                Consider potential errors and handle them gracefully.
              </li>
              <li>
                <b class="thick-list">Testing : </b>
                Thoroughly test your code to ensure it works as expected.
              </li>
            </ul>
          </li>
        </ul>
        <br>
        <p>By following these guidelines, you can write well-structured, efficient, and maintainable C programs.</p>
      </div>
    `,
    c_program_development_life_cycle : `
    <h2 class="topic-name">C Program Development Life Cycle</h2>
      <div class="info">
        <p>When we want to develop a program using any programming language, we follow a sequence of steps. These steps are called phases in program development. The program development life cycle is a set of steps or phases that are used to develop a program in any programming language.</p>
        <br>
        <p>
          Generally, the program development life cycle contains 6 phases, they are as follows….
        </p>
        <br>
        <ol class="points">
          <li>Problem Definition</li>
          <li>Problem Analysis</li>
          <li>Algorithm Development</li>
          <li>Coding & Documentation</li>
          <li>Testing & Debugging</li>
          <li>Maintenance</li>
        </ol>
        <br>
        <img class="" style="width: 400px;" src="/problem solving using c/pdlc.png" alt="pdlc">
      </div>
      <h3 class="sub-topic-name">Problem Definition</h3>
      <div class="info">
        <p>In this phase, we define the problem statement and we decide the boundaries of the problem. In this phase we need to understand the problem statement, what is our requirement, what should be the output of the problem solution. These are defined in this first phase of the program development life cycle.</p>
      </div>
      <h3 class="sub-topic-name">Problem Analysis</h3>
      <div class="info">
        <p>In phase 2, we determine the requirements like variables, functions, etc. to solve the problem. That means we gather the required resources to solve the problem defined in the problem definition phase. We also determine the bounds of the solution.</p>
      </div>
      <h3 class="sub-topic-name">Algorithm Development</h3>
      <div class="info">
        <p>
          During this phase, we develop a step by step procedure to solve the problem using the specification given in the previous phase. This phase is very important for program development. That means we write the solution in step by step statements.
        </p>
      </div>
      <h3 class="sub-topic-name">Coding & Documentation</h3>
      <div class="info">
        <p>This phase uses a programming language to write or implement the actual programming instructions for the steps defined in the previous phase. In this phase, we construct the actual program. That means we write the program to solve the given problem using programming languages like C, C++, Java, etc.,</p>
      </div>
      <h3 class="sub-topic-name"> Testing & Debugging</h3>
      <div class="info">
        <p>
          During this phase, we check whether the code written in the previous step is solving the specified problem or not. That means we test the program whether it is solving the problem for various input data values or not. We also test whether it is providing the desired output or not.
        </p>
      </div>
      <h3 class="sub-topic-name"> Maintenance</h3>
      <div class="info">
        <p>
          During this phase, the program is actively used by the users. If any enhancements found in this phase, all the phases are to be repeated to make the enhancements. That means in this phase, the solution (program) is used by the end-user. If the user encounters any problem or wants any enhancement, then we need to repeat all the phases from the starting, so that the encountered problem is solved or enhancement is added.
        </p>
      </div>
    `,
    functions_as_building_blocks : `
    <h2 class="topic-name">Functions as Building Blocks</h2>
      <p class="para-def">
        In the realm of programming, functions are akin to modular building
        blocks that allow you to construct complex applications from smaller,
        reusable units. They encapsulate specific tasks, making code more
        organized, readable, and maintainable.
      </p>

      <h3 class="sub-topic-name">Key Concepts</h3>
      <div class="info">
        <ul class="points">
          <li>
            <b class="thick-list">Definition : </b>
            A function is a self-contained block of code that performs a
            specific task. It takes input, processes it, and returns an output.
          </li>
          <li>
            <b class="thick-list">Declaration : </b>
            Declares the function's name, return type, and parameters.
          </li>
          <li>
            <b class="thick-list">Definition : </b>
            Defines the actual code that the function executes.
          </li>
          <li>
            <b class="thick-list">Call : </b>
            Invokes the function to execute its code.
          </li>
          <li>
            <b class="thick-list">Parameters : </b>
            Input values passed to the function.
          </li>
          <li>
            <b class="thick-list">Return Value : </b>
            The output generated by the function.
          </li>
        </ul>
      </div>
      <h3 class="sub-topic-name">Benefits of Using Functions</h3>
      <div class="info">
        <ol class="points">
          <li>
            <b class="thick-list">Modularity : </b>
            <ul style="list-style-type: square" class="points">
              <li>
                Breaks down complex problems into smaller, manageable units.
              </li>
              <li>Enhances code organization and readability.</li>
            </ul>
          </li>
          <li>
            <b class="thick-list">Reusability : </b>
            <ul class="points" style="list-style-type: square">
              <li>
                Avoids code duplication by defining functions once and calling
                them multiple times.
              </li>
              <li>Promotes efficient use of code.</li>
            </ul>
          </li>
          <li>
            <b class="thick-list">Testability : </b>
            <ul class="points" style="list-style-type: square">
              <li>
                Isolates specific functionalities for easier testing and
                debugging.
              </li>
              <li>Simplifies the identification and resolution of errors.</li>
            </ul>
          </li>
          <li>
            <b class="thick-list">Maintainability : </b>
            <ul style="list-style-type: square" class="points">
              <li>
                Modifying a function's implementation affects only the function
                itself, not the entire program.
              </li>
              <li>Facilitates updates and enhancements.</li>
            </ul>
          </li>
          <li>
            <b class="thick-list">Collaboration:</b>
            <ul class="points" style="list-style-type: square">
              <li>
                Encourages teamwork by allowing different developers to work on
                separate functions.
              </li>
              <li>Promotes code sharing and collaboration.</li>
            </ul>
          </li>
        </ol>
      </div>
      <h3 class="sub-topic-name">
        Here’s a simple C program that defines a function to add two numbers
      </h3>
      <div class="info">
        <p class="example">
          #include &lt;stdio.h&gt;<br />
          // Function to add two numbers<br />
          int add(int a, int b) {<br />
          &nbsp;&nbsp;return a + b; <br />
          }<br />
          <br />
          int main() { &nbsp;&nbsp;int num1, num2, sum;<br />
          <br />
          &nbsp;&nbsp; printf("Enter two numbers: ");<br />
          &nbsp;&nbsp;scanf("%d %d", &num1, &num2);<br /><br />
          &nbsp;&nbsp;// Call the add function <br />
          &nbsp;&nbsp; sum = add(num1, num2);<br /><br />
          &nbsp;&nbsp; printf("Sum: %d\n", sum); <br /><br />
          &nbsp;&nbsp; return 0; <br />
          }
        </p>
        <br />
        <p>In this program :</p>
        <ol class="points">
          <li>
            We define a function <b class="thick-list">add</b> that takes two
            integers as arguments and returns their
            <b class="thick-list">sum</b>.
          </li>
          <li>
            In the <b class="thick-list">main</b> function, we prompt the user
            to enter two numbers.
          </li>
          <li>
            We call the <b class="thick-list">add</b> function with these
            numbers and store the result in the
            <b class="thick-list">sum</b> variable.
          </li>
          <li>Finally, we print the sum.</li>
        </ol>
      </div>
      <h3 class="sub-topic-name">Best Practices for Using Functions:</h3>
      <div class="info">
        <ul class="points">
          <li>
            <b class="thick-list">Keep Functions Short and Focused : </b>
            Each function should have a clear purpose.
          </li>
          <li>
            <b class="thick-list">Use Descriptive Names : </b>
            Choose meaningful names for functions and variables.
          </li>
          <li>
            <b class="thick-list">Document Your Code : </b>
            Add comments to explain the function's behavior.
          </li>
          <li>
            <b class="thick-list">Test Thoroughly:</b>
            Write unit tests to verify the correctness of each function.
          </li>
          <li>
            <b class="thick-list">Consider Function Overloading : </b>
            Define multiple functions with the same name but different parameter
            lists.
          </li>
          <li>
            <b class="thick-list">Use Function Pointers : </b>
            Pass functions as arguments to other functions for flexible
            programming.
          </li>
        </ul>
        <p>
          By effectively utilizing functions, you can create well-structured,
          efficient, and maintainable C programs.
        </p>
      </div>
    `
};
