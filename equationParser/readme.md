# Equation Parser

From the blog post "" on Medium.

## Testing

The simple test suite can be found under the ```test``` directory. To run the test, use ```npm run test```.

## Modules

| Module | Description |
| --- | --- |
| ```calculateEquation``` | Takes a ```String``` as an equation, parses it, and returns a number. |
| ```processOperator``` | Checks the precedence of an operator and either pushes it to the stack, or performs a collapse |
| ```collapdStack``` | Does a collapse of the current stack state. |

## Misc.

I wouldn't use this for production without major error checking.

I also think handling the parenthesis could be done better.

But enjoy! And feel free to make comments in the Issues section if you find a problem.

------
Signed, 

TheVirtuoid 

