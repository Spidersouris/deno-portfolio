//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Lateral text with theme switcher
import { Base } from "../../components/base/Base.tsx";
//? Default styled headers
import { StyledHeader } from "../../components/UI/StyledHeader.tsx";
import { StyledSubHeader } from "../../components/UI/StyledSubHeader.tsx";
//? Navigation Buttons to go back to the previous page or to the next page (optional)
import { NavigationButtons } from "../../components/misc/NavigationButtons.tsx";
//? Link components to pre-format links and reduce boiletplate
import { GradientLink } from "../../components/UI/GradientLink.tsx";
import { DottedLink } from "../../components/UI/DottedLink.tsx";
//? Create a greek list of contents
import { GreekList } from "../../components/UI/GreekList.tsx";
//? Render multiple comparison tables of the language differences
import { ComparisonTable } from "../../components/blog/ComparisonTable.tsx";
//? Import the default post footer
import { BlogPostFooter } from "../../components/blog/BlogPostFooter.tsx";
//? Import post summary
import { javascriptPythonSyntaxPost as postSummary } from "../../data/blog/javascript-python-syntax.ts";

export default function Home() {
  return (
    <>
      <CustomHead
        title={postSummary.title}
        description={postSummary.shortSummary}
        link={"https://www.theyurig.com" + postSummary.link}
      >
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        {/* Back button */}
        <NavigationButtons
          back={{ title: "Browse more blog posts", link: "/blog" }}
        />
        <article class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          {/* Title header */}
          <StyledHeader title={postSummary.title} />
          {/* Post creation date */}
          <p class="text-sm mb-2 w-full text-center">
            {new Date(postSummary.date).toLocaleString()}
          </p>
          {/* Who am I */}
          <p class="my-2 text-justify">
            I'm a Typescript developer, but I enjoy watching tutorials on other
            languages for exposure, before going to bed (unlike what I was doing
            a year ago: doomscrolling Instagram Reels until 1am).
          </p>
          {/* Motivation for this */}
          <p class="my-2 text-justify">
            One of the things that I've spent my recent nights watching was{" "}
            <GradientLink
              content="Al Sweigart"
              link="https://github.com/asweigart"
              customRel="noopener noreferrer"
            />{" "}
            teaching how to Automate The Boring Stuff With Python on{" "}
            <GradientLink
              content="Udemy"
              link="https://www.udemy.com/course/automate/learn/lecture/3465866"
              customRel="noopener noreferrer"
            />
            . While I don't see myself switching my working language to Python
            in the near future, I thought it would be interesting to keep an
            easy-to-reference cheatsheet of the syntax differences between both
            languages.
          </p>

          <StyledSubHeader title="Table of Contents" />
          <GreekList
            items={[
              <DottedLink content="Naming Conventions" link="#naming" />,
              <DottedLink content="Declaring variables" link="#variables" />,
              <DottedLink content="Expressions" link="#expressions" />,
              <DottedLink content="Mathematical Operators" link="#mathops" />,
              <DottedLink content="Bitwise Operators" link="#bitops" />,
              <DottedLink content="Utilities" link="#utilities" />,
              <DottedLink content="Strings" link="#strings" />,
              <DottedLink content="Arrays/Lists" link="#arrays" />,
              <DottedLink content="Objects/Dictionaries" link="#objects" />,
              //todo check what is missing and add here
            ]}
          />

          {/* Naming conventions */}
          <ComparisonTable
            languageOneName="Javascript"
            languageTwoName="Python"
            tableName="Naming Conventions"
            tableId="naming"
            differenceList={[
              {
                label: "Variables/Functions",
                itemOne: "camelCase",
                itemTwo: "snake_case",
              },
              {
                label: "Classes",
                itemOne: "PascalCase",
                itemTwo: "PascalCase",
              },
              {
                label: "Constants",
                itemOne: "SCREAMING_SNAKE_CASE",
                itemTwo: "SCREAMING_SNAKE_CASE",
                note:
                  "Python uses this as a convention for constants that shouldn't be reassigned. Because Javascript has 'const' assignments, this is usually reserved for naming variables that would be otherwise magic values, like PI.",
              },
            ]}
          />

          {/* Declaring variables */}
          <ComparisonTable
            languageOneName="Javascript"
            languageTwoName="Python"
            tableName="Declaring Variables"
            tableId="variables"
            differenceList={[
              {
                label: "Global variable",
                itemOne: "var count = 0",
                itemTwo: "",
                note:
                  "Python doesn't have var, your variables don't bleed out of the scope they are defined at.",
              },
              {
                label: "Scoped variable",
                itemOne: "let count = 0",
                itemTwo: "count = 0",
              },
              {
                label: "Immutable variable",
                itemOne: "const count = 0",
                itemTwo: "",
                note:
                  "Python doesn't have const, all values are mutable and reassignable.",
              },
              {
                label: "Multiple assignment",
                itemOne: "",
                itemTwo: "a = b = c = 5",
                note: "Javascript doesn't have multiple assignment.",
              },
              {
                label: "True boolean",
                itemOne: "let x = true",
                itemTwo: "x = True",
                note: "Python capitalizes both boolean values.",
              },
              {
                label: "False boolean",
                itemOne: "let x = false",
                itemTwo: "x = False",
                note: "Python capitalizes both boolean values.",
              },
            ]}
          />

          {/* Expressions */}
          <ComparisonTable
            languageOneName="Javascript"
            languageTwoName="Python"
            tableName="Expressions"
            tableId="expressions"
            differenceList={[
              // Weak equality
              {
                label: "Weak equality",
                itemOne: "'1' == 1",
                itemTwo: "",
                note: "Python doesn't have weak equality checks.",
              },
              // Strict equality
              {
                label: "Strict equality",
                itemOne: "10 === 10",
                itemTwo: "10 == 0",
              },
              // Weak inequality
              {
                label: "Weak inequality",
                itemOne: "true != false",
                itemTwo: "",
                note: "Python doesn't have weak inequality checks.",
              },
              // Strict inequality
              {
                label: "Strict inequality",
                itemOne: "true !== false",
                itemTwo: "True != False",
              },
              // Expression AND
              {
                label: "Both sides of expression must be true",
                itemOne: "10 > 5 && isTrue === true",
                itemTwo: "10 > 5 and isTrue == True",
              },
              // Expression OR
              {
                label: "Either side of expression must be true",
                itemOne: "20 > 30 || isFalse === false",
                itemTwo: "20 > 30 or isFalse == False",
              },
              // Includes (array)
              {
                label: "Item present in Array/List",
                itemOne: "[1, 2, 3].includes(1)",
                itemTwo: "1 in [1, 2, 3]",
              },
              // Includes (string)
              {
                label: "text present in String",
                itemOne: '"Hello world!".includes("Hello")',
                itemTwo: '"Hello" in "Hello World!"',
              },
              // Doesn't include (array)
              {
                label: "Item missing from Array/List",
                itemOne: "![1, 2, 3].includes(1)",
                itemTwo: "1 not in [1, 2, 3]",
                note: "Same for strings in both languages.",
              },
            ]}
          />

          {/* Mathematical Operators */}
          <ComparisonTable
            languageOneName="Javascript"
            languageTwoName="Python"
            tableName="Mathematical Operators"
            tableId="mathops"
            differenceList={[
              // Addition
              {
                label: "Addition",
                itemOne: "5 + 8",
                itemTwo: "5 + 8",
              },
              // Shorthand addition
              {
                label: "Shorthand addition",
                itemOne: "num += 5",
                itemTwo: "num += 5",
              },
              // Increment
              {
                label: "Increment",
                itemOne: "i++",
                itemTwo: "",
                note: "Python doesn't have pre/post increment operators.",
              },
              // Subtraction
              {
                label: "Subtraction",
                itemOne: "13 - 5",
                itemTwo: "13 - 5",
              },
              // Shorthand subtraction
              {
                label: "Shorthand subtraction",
                itemOne: "num -= 5",
                itemTwo: "num -= 5",
              },
              // Decrement
              {
                label: "Decrement",
                itemOne: "i--",
                itemTwo: "",
                note: "Python doesn't have pre/post decrement operators.",
              },
              // Multiply
              {
                label: "Multiply",
                itemOne: "3 * 5",
                itemTwo: "3 * 5",
              },
              // Shorthand multiplication
              {
                label: "Shorthand multiplication",
                itemOne: "num *= 5",
                itemTwo: "num *= 5",
              },
              // Exponent
              {
                label: "Exponent",
                itemOne: "num ** 2",
                itemTwo: "num ** 2",
              },
              //todo divisions
              //todo modulo
            ]}
          />

          {/* Bitwise Operators */}
          <ComparisonTable
            languageOneName="Javascript"
            languageTwoName="Python"
            tableName="Bitwise Operators (a.k.a. Binary Black Magic)"
            tableId="bitops"
            differenceList={[
              // Bitwise AND
              {
                label: "AND",
                itemOne: "&",
                itemTwo: "&",
              },
              // &=
              {
                label: "",
                itemOne: "&=",
                itemTwo: "&=",
              },
              // Bitwise OR
              {
                label: "OR",
                itemOne: "|",
                itemTwo: "|",
              },
              // |=
              {
                label: "",
                itemOne: "|=",
                itemTwo: "|=",
              },
              // Bitwise XOR
              {
                label: "XOR",
                itemOne: "^",
                itemTwo: "^",
              },
              // ^=
              {
                label: "",
                itemOne: "^=",
                itemTwo: "^=",
              },
              // Bitwise NOT
              {
                label: "NOT",
                itemOne: "~",
                itemTwo: "~",
              },
              // Bitwise Right Shift
              {
                label: "Right shift",
                itemOne: ">>",
                itemTwo: ">>",
              },
              // >>=
              {
                label: "",
                itemOne: ">>=",
                itemTwo: ">>=",
              },
              // Bitwise Left Shift
              {
                label: "Left shift",
                itemOne: "<<",
                itemTwo: "<<",
              },
              // <<=
              {
                label: "",
                itemOne: "<<=",
                itemTwo: "<<=",
              },
            ]}
          />

          {/* Utilities */}
          <ComparisonTable
            languageOneName="Javascript"
            languageTwoName="Python"
            tableName="Utilities"
            tableId="utilities"
            differenceList={[
              // Console
              {
                label: "Write to console",
                itemOne: "console.log('hi')",
                itemTwo: "print('hi')",
              },
              // Functions
              {
                label: "Functions",
                itemOne: `function multiplyByTwo(x) {
  return x * 2
}`,
                itemTwo: `def multiplyByTwo(x):
  return x * 2`,
                note:
                  "Python defines scope through indentation, Javascript usually does it through the use of curly braces",
              },
              // Inline functions
              {
                label: "Fat Arrow Functions/Lambdas",
                itemOne: "const add = (a, b) => a + b",
                itemTwo: "add = lambda a, b: a + b",
              },
              // If
              {
                label: "If",
                itemOne: `if (condition === true) {`,
                itemTwo: `if condition == True:`,
              },
              // Else if
              {
                label: "Else if/Elif",
                itemOne: `} else if (condition === true) {`,
                itemTwo: `elif condition == True:`,
              },
              // Else
              {
                label: "Else",
                itemOne: `} else {`,
                itemTwo: `else:`,
              },
              // Ternary operator
              {
                label: "Ternary operator",
                itemOne: 'happy === true ? "smile" : "frown"',
                itemTwo: '"smile" if happy == True else "frown"',
              },
              // Single line comment
              {
                label: "Single line comments",
                itemOne: "// comment",
                itemTwo: "# comment",
              },
              // Multi line comment
              {
                label: "Multi line comments",
                itemOne: `/*
This is a multiline comment
*/`,
                itemTwo: "",
                note:
                  "Python doesn't exactly have multi line comments, but you can use a multi line string to do basically the same thing.",
              },
              // Destructuring/Unpacking
              {
                label: "Destructuring/Unpacking",
                itemOne: "const [a, b, ...rest] = [1, 2, 3, 4]",
                itemTwo: "a, b, *rest = [1, 2, 3, 4]",
                note:
                  "In Javascript, the '...rest' argument must be the last one. Python doesn't have this restriction.",
              },
              // Spread
              {
                label: "Spread",
                itemOne: "oneFunction(...args)",
                itemTwo: "oneFunction(**args)",
              },
              //todo typeof
            ]}
          />

          {/* Strings */}
          <ComparisonTable
            languageOneName="Javascript"
            languageTwoName="Python"
            tableName="Strings"
            tableId="strings"
            differenceList={[
              // Single quotes
              {
                label: "Single quotes string",
                itemOne: "const styling = 'css'",
                itemTwo: "styling = 'css'",
              },
              // Double quotes
              {
                label: "Double quotes string",
                itemOne: 'const markup = "html"',
                itemTwo: 'markup = "html"',
              },
              // Length
              {
                label: "String length",
                itemOne: '"text".length',
                itemTwo: 'len("text")',
              },
              // Concatenation
              {
                label: "Concatenation",
                itemOne: '"two " + "strings"',
                itemTwo: '"two " + "strings"',
              },
              // Escape
              {
                label: "Escaping characters",
                itemOne: "'Don\\'t repeat yourself'",
                itemTwo: "'Don\\'t repeat yourself'",
              },
              // Raw string
              {
                label: "Raw strings",
                itemOne: "",
                itemTwo: "r'\\back\\slash'",
                note: "Javascript doesn't have raw strings.",
              },
              // Multiline string
              {
                label: "Multiline strings",
                itemOne: `\`
multiline
text
here
\``,
                itemTwo: `"""
multiline
text
here
"""`,
                note:
                  "Python can use double or single quotes for multilines, as long as what you use at the start, you also use at the end. Javascript exclusively uses backticks.",
              },
              // Slicing with set range
              {
                label: "Slicing (set range)",
                itemOne: "word.substring(1, 4)",
                itemTwo: "word[1:4]",
              },
              // Slicing with set end
              {
                label: "Slicing (start until set end)",
                itemOne: "word.substring(0, 3)",
                itemTwo: "word.[:3]",
              },
              // Slicing with set start
              {
                label: "Slicing (set start until end)",
                itemOne: "word.substring(word.length - 1 - 3)",
                itemTwo: "word[-3:]",
                note:
                  "Unlike 'array.splice()', you can't pass a negative parameter to substring to give it a set start relative to the end of the string.",
              },
              // String interpolation (1)
              {
                label: "String interpolation (1)",
                itemOne: "",
                itemTwo: "'My name is %s.' % (name)",
              },
              // String interpolation (1)
              {
                label: "String interpolation (2)",
                itemOne: "`My name is ${name}.`",
                itemTwo: "f'My name is {name}.'",
                note: "Python's f-strings require Python 3.6 or higher.",
              },
            ]}
          />

          {/* Arrays/Lists */}
          <ComparisonTable
            languageOneName="Javascript"
            languageTwoName="Python"
            tableName="Arrays/Lists"
            tableId="arrays"
            differenceList={[
              // New Array/List (1)
              {
                label: "New array/list (1)",
                itemOne: "const a = new Array()",
                itemTwo: "a = list()",
              },
              // New Array/List (2)
              {
                label: "New array/list (2)",
                itemOne: "const a = [1, 2]",
                itemTwo: "a = [1, 2]",
              },
              // Accessing an item
              {
                label: "Accessing element by index",
                itemOne: "a[0]",
                itemTwo: "a[0]",
              },
              // Updating an item
              {
                label: "Modifying element at index",
                itemOne: "a[0] = 4",
                itemTwo: "a[0] = 4",
              },
              // Adding at last position
              {
                label: "Adding element at final position",
                itemOne: "a.push(8)",
                itemTwo: "a.append(8)",
                note:
                  "Python can use 'append' to place an item anywhere in the List, but Javascript's 'push' will only add the element after the final element.",
              },
              // Inserting at index
              {
                label: "Inserting at index",
                itemOne: "a.splice(1, 0, 'item added')",
                itemTwo: "a.insert(1, 'item added')",
                note:
                  "The second argument for Javascript's '.splice()' is for how many elements you want to remove starting on the position of the first argument.",
              },
              // Removing at last position
              {
                label: "Removing last element",
                itemOne: "a.pop()",
                itemTwo: "a.pop()",
              },
              // Removing element with specific value
              {
                label: "Removing first element with value",
                itemOne: "",
                itemTwo: "a.remove(4)",
                note:
                  "Javascript doesn't offer an easy way to do remove the first match and stop. You can do a 'for loop' to remove one and break after the first match or use '.findIndex()' and then '.splice()' on that element.",
              },
              // Slicing with set range
              {
                label: "Slicing (set range)",
                itemOne: "a.slice(1, 4)",
                itemTwo: "a[1:4]",
              },
              // Slicing with set end
              {
                label: "Slicing (start until set end)",
                itemOne: "a.slice(3)",
                itemTwo: "a.[:3]",
                note:
                  "In Javascript, providing only one POSITIVE argument implies that is the end point.",
              },
              // Slicing with set start
              {
                label: "Slicing (set start until end)",
                itemOne: "a.slice(-3)",
                itemTwo: "a[-3:]",
                note:
                  "In Javascript, providing only one NEGATIVE argument implies that is the start point.",
              },
              // Sorting descending
              {
                label: "Sorting descending",
                itemOne: "a.sort((a, b) => b - a)",
                itemTwo: "a.sort(reverse=True)",
              },
              // Counting occurrences of element
              {
                label: "Counting occurrences of element",
                itemOne: "",
                itemTwo: "a.count(4)",
                note: "No Javascript equivalent.",
              },
              // Length
              {
                label: "Array/List length",
                itemOne: "[1, 2, 3].length",
                itemTwo: "len([1, 2, 3])",
              },
              // Tuple
              {
                label: "Tuples",
                itemOne: "",
                itemTwo: "x = (1, 2, 3)",
                note:
                  "Javascript doesn't support Tuples. Python's Tuples are also not modified. Once set, forever defined.",
              },
            ]}
          />

          {/* Objects/Dictionaries */}
          <ComparisonTable
            languageOneName="Javascript"
            languageTwoName="Python"
            tableName="Objects/Dictionaries"
            tableId="objects"
            differenceList={[
              // New Object/Dict (1)
              {
                label: "New object/dict (1)",
                itemOne: "const o = {}",
                itemTwo: "o = {}",
              },
              // New Object/Dict (2)
              {
                label: "New object/dict (2)",
                itemOne: "const o = new Object()",
                itemTwo: "o = dict()",
              },
              // New Object/Dict (3)
              {
                label: "New object/dict (3)",
                itemOne: "const o = Object.create(null)",
                itemTwo: "",
                note: "No Python equivalent.",
              },
              // Adding property value (1)
              {
                label: "Adding property (1)",
                itemOne: "obj['keyName'] = 'value",
                itemTwo: "dict['key_name'] = 'value'",
              },
              // Adding property value (2)
              {
                label: "Adding property (2)",
                itemOne: "obj.keyName = 'value'",
                itemTwo: "",
                note: "No Python equivalent.",
              },
              // Accessing property value (1)
              {
                label: "Accessing property value (1)",
                itemOne: "obj['keyName']",
                itemTwo: "dict['key_name']",
              },
              // Accessing property value (2)
              {
                label: "Accessing property value (2)",
                itemOne: "obj.keyName",
                itemTwo: "",
                note: "No Python equivalent.",
              },
              // Length
              {
                label: "Length",
                itemOne: "",
                itemTwo: "len(dict)",
                note:
                  "Can't use obj.length in Javascript, but you can convert the Object to an Array using Object.entries(obj)/Object.keys(obj)/Object.values(obj) and then get the length of that.",
              },
              // Check if key exists
              {
                label: "Check if key exists",
                itemOne: "'key_name' in dict",
                itemTwo: "'keyName' in obj",
              },
              // Comparing two objects/dictionaries
              {
                label: "Comparing two objects/dictionaries",
                itemOne: `const a = {name: 'yuri'}
const b = {name: 'yuri'}
a == b // false`,
                itemTwo: `a = {name: 'yuri'}
b = {name: 'yuri'}
a == b // True`,
                note:
                  "Python makes a deep equality check by default, Javascript instead compares if the reference in memory is the same.",
              },
              // Looping (keys)
              {
                label: "Looping through keys",
                itemOne: `for (const key of obj) {
    console.log(key)
}`,
                itemTwo: `for key in dict.keys():
    print(key)`,
              },
              // Looping (values)
              {
                label: "Looping through values",
                itemOne: `for (const value of Object.values(obj)) {
    console.log(value)
}`,
                itemTwo: `for value in dict.values():
    print(value)`,
              },
              // Looping (keys and values)
              {
                label: "Looping through keys + values",
                itemOne: `for (const [k, v] of Object.entries(obj)) {
    console.log(k, ':', v)
}`,
                itemTwo: `for k, v in dict.items():
    print(k, ':', v)`,
              },
              // Looping (keys)
              {
                label: "Looping through keys",
                itemOne: `for (const key of obj) {
    console.log(key)
}`,
                itemTwo: `for k in dict.keys():
    print(k)`,
              },
              // Deleting
              {
                label: "Deleting a key",
                itemOne: "delete obj['key']",
                itemTwo: "del obj['key']",
              },
            ]}
          />

          {/* Conversions */}
          <ComparisonTable
            languageOneName="Javascript"
            languageTwoName="Python"
            tableName="Converting data types"
            tableId="conversion"
            differenceList={[
              {
                label: "String (1)",
                itemOne: "String(10)",
                itemTwo: "str(10)",
              },
              {
                label: "String (2)",
                itemOne: "10.toString()",
                itemTwo: "",
              },
              {
                label: "Number (1)",
                itemOne: "Number('10')",
                itemTwo: "int('10')",
              },
              {
                label: "Number (2)",
                itemOne: "parseInt('10')",
                itemTwo: "",
              },
              {
                label: "Number (3)",
                itemOne: "+'10'",
                itemTwo: "",
                note:
                  "For this to work in Javascript, there must be no spaces between the plus symbol (Unary Operator) and the value/variable.",
              },
              {
                label: "Number (4)",
                itemOne: "parseFloat('10')",
                itemTwo: "",
              },
              {
                label: "Number (5)",
                itemOne: "'10' * 1",
                itemTwo: "",
                note:
                  "Javascript will attempt convert a string to when it interacts with any mathematical operator other than the plus symbol (+).",
              },
              {
                label: "Number (6)",
                itemOne: "~~'10'",
                itemTwo: "",
              },
            ]}
          />

          {/* Post author */}
          <BlogPostFooter />
        </article>
      </Base>
    </>
  );
}
