'use strict';

/************************
 *  BASIC OBJECTS
 ************************/

/* Add a property 'yearFounded' to the 'school' object.
     General Assembly was founded in the year 2011. */

var school = {
  name: "General Assembly",
  null: null
}

/* Access the 'name' property of 'school' in two different ways. */

school.null
school[null]

/* Discuss with your group a situation where one of these
     ways would be preferable over the other way. */


/* Add a property 'founders' to 'school' using one of the two ways
     above. The founders of General Assembly are Jake Schwartz,
     Adam Pritzker, Matthew Brimer, and Brad Hargreaves. Decide
     which type to use to store all of the founders. */

null;


/* Run each of the following lines individually: */

school[true] = 7;
school["true"];
school.true;

/* Surprisingly, school["true"] evaluates to 7! In JavaScript,
     all properties are stored as strings. So, even if you
     try to make a property that is a non-string (such as true),
     the property name actually is stored as a string.

     Another example, which also shows one difference between
     the two ways of accessing a property: */

school[5] = "Mike";
school["5"]     // can be accessed, since the 5 property was stored as a string
school.5      // error - a variable cannot start with a number!


/* Discuss with your group why 'school.2names = ["Jim", "Billy"];' is not a
     valid JavaScript statement, yet the following is valid:
     'school["2names"] = ["Jim", "Billy"];'. */


/************************
 *  FUNCTIONS
 ************************/

/* Write a function 'yay' with no parameters which prints
     "IT WORKS!" to the console. */

function null() {
}

/* Call the function. */

null;

/* Write a function 'greaterThan' which accepts two parameters.
     Return true if the first parameter is greater than the
     second parameter. Otherwise, return false. For example,
     greaterThan(2, 3) => false. greaterThan(7, 1) => true.
     Within the function, you can actually have multiple
     return statements in different parts of the logic! */

function greaterThan(num1, num2)
{
  if (null) {
    return null;
  } else {
    return null;
  }
}

/* Call the function twice using different sample numbers. */

null;
null;

/* Write a function 'sign' that accepts one parameter. If the
     parameter is greater than zero, return the string
     "positive". If the parameter is less than zero, return
     the string "negative". If the parameter is zero, return
     "zero". For example, sign(-3) => "negative".
     sign(0) => "zero". sign(393) => "positive". */

function sign(num) {
  null;
}

/* Call the function three times using different numbers. */

null;
null;
null;



/* Write a function 'abs' which accepts one parameter.
     This function returns the absolute value of the number,
     without using Math.abs. (If the number is positive,
     return the number. If the number is negative, return
     the negative of the number.)
   For example, abs(2) => 2. abs(-2) => 2. */

null;

/* Write a function 'min' that accepts
     two parameters which are numbers. Return the smaller
     of the two numbers, without using Math.min.
   For example, min(2, 3) => 2. min(3, 2) => 2. */

 function null
 {
  return null;
 }



/************************
 *  METHODS
 ************************/

/* Write an object 'person' with two properties, 'firstName'
     and 'lastName'. Set them equal to
     your first and last name, respectively. */

var person = {};

/* Add a method 'fullName' to 'person'. This method returns
   'firstName' followed by a space followed by 'lastName'.
   For example, person.fullName() will return "Susan Wilson",
   if person.firstName = "Susan" and person.lastName = "Wilson". */

person.null = function() {
  null;
}

/* Call the 'fullName' method. */

person.null;


/* Add a method 'fullNameLength' to 'person' which returns
   the total length of the person's full name, including
   the middle space. Use the 'fullName' method, if desired. */

person.null = null;


/************************
 * OBJECTS VS. PRIMITIVE TYPES
 ************************/

/* We earlier discussed that a string is a primitive type.
     However, we then accessed its property 'length'. How the heck
     can a primitive string have properties like 'length'? */

// 'name' is a string type in this example
var name = "Micah";  // 'name' is a string
name.length;         // .. but only objects can have properties, right?

/* Since we're accessing a property, does that mean a string is an object?

   It turns out that in addition to the primitive string type,
     JavaScript *also* has a 'String' object.

   But only when 'name.length' or a similar property is accessed, JavaScript
     coerces 'name' to a 'String' object, then
     calls the 'length' property on it. Try the following code: */

// 'name' is an object type in this example
var name = new String("Micah");
name.length;

/* Hopefully, this reconciles how we can use object
     methods and properties on primitive types which are not
     objects. */


/************************
 *  CONSTRUCTORS
 ************************/

/* Now, rather than using object literals, where you're literally defining an object,
     build a constructor to generate Person objects for us! */

function Person(null){
    this.name = null;
}

/* We capitalize Person only to let ourselves know that we're considering this a constructor.
    How would we make a new instance of this object we've define? */

var something = new null;

/* How can you reference that instance's name property? */

null;

/* Now, add a method to your instance that tells us exactly how awesome that person is */

something.null = function(){ return "You are supremely awesome, " + name; }

/* How would you call that sweet new method you made? */

null;

/* Let's tie it all together! Go back to the very first example,
     and instead of making an object literal for General Assembly,
     make a new school constructor, and instance for GA.

     Include the name, the year it was founded, the founders.

     As a bonus, throw in a method that calculates how many founders there are
        based on our founders array!

     And as an *extra* bonus, add in a combination of a new property
        that tells us whether the school is open or closed,
        and two methods that open & close the school. */

null;
