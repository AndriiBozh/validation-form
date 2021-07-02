# validation-form

I made this project to practice JS.

There are:
- three input fields (name, password, confirm password)
- a checkbox element
- submit button

To register, a user has to:
- enter a name, which should begin with a letter
- make up a password, which should be at least 8 letters/digits long
- confirm a password. Passwords should match.
- accept terms by checking a checkbox

If some of these fields do not meet the requirements, 
a window pops up with instructions what error should be fixed (eg. a name should start with a letter, passwords do not match etc).
After user fixes an error (eg. checks 'accept terms' checkbox), 
the instruction, corresponding to this error disappears from the list of errors.

After all fields are filled correctly, a welcome window pops up.
There is an 'OK' button inside a welcome window.
After user presses this OK button, a welcome window disappears and all input fields are cleared.
