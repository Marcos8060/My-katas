# taking user input and returning either odd or even

# userInput = int(input('enter a value '))
# if userInput % 2 == 0:
#     print('Your number is even')
# else:
#     print('your number is odd')

# print(userInput)


# returning first digits if a number depending on user input
userNumber = input('Enter a phone number: ')
newNumber = ''
if userNumber.startswith('0'):
    newNumber = userNumber.replace('0','+254',1)
elif userNumber.startswith('+254'):
    newNumber = userNumber.replace('+254','0',1)
print(newNumber)