# passwordGenerator

- Function write password
    - First var prompt asks the user how many characters they would like the password to be and stores that number
    - The first 2 if statements make sure that if the user chooses a number under 8 or over 128, they get prompted once more and if they choose a number under 8 or over 128 again, the code automatically chooses an 8 character password.
    - Var lowercase confirms if the user wants to use lowercase characters. If they do, the code adds the lowercase characters to Password_character_options. If not Password_character_options becomes an empty array
    - This process repeats for uppercase, numeric and special characters.
    - The code is using concat to add the arrays together. 
    - If the user does not choose to include any of the character types in the password. The code will alert that the password characters will be chosen for them, and an 8 character password will be chosen.
    - The math.random * password_character_options.length function is used to add the characters to the password.
    - The var passwordText makes the password print to the screen