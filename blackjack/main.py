############### Blackjack Project #####################

#Difficulty Normal 😎: Use all Hints below to complete the project.
#Difficulty Hard 🤔: Use only Hints 1, 2, 3 to complete the project.
#Difficulty Extra Hard 😭: Only use Hints 1 & 2 to complete the project.
#Difficulty Expert 🤯: Only use Hint 1 to complete the project.

############### Our Blackjack House Rules #####################

## The deck is unlimited in size. 
## There are no jokers. 
## The Jack/Queen/King all count as 10.
## The the Ace can count as 11 or 1.
## Use the following list as the deck of cards:
## cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
## The cards in the list have equal probability of being drawn.
## Cards are not removed from the deck as they are drawn.

##################### Hints #####################

#Hint 1: Go to this website and try out the Blackjack game: 
#   https://games.washingtonpost.com/games/blackjack/
#Then try out the completed Blackjack project here: 
#   http://blackjack-final.appbrewery.repl.run

#Hint 2: Read this breakdown of program requirements: 
#   http://listmoz.com/view/6h34DJpvJBFVRlZfJvxF
#Then try to create your own flowchart for the program.

#Hint 3: Download and read this flow chart I've created: 
#   https://drive.google.com/uc?export=download&id=1rDkiHCrhaf9eX7u7yjM1qwSuyEk-rPnt

#Hint 4: Create a deal_card() function that uses the List below to *return* a random card.
#11 is the Ace.
import random

from art import logo

def clear() -> None:
  """Clear the terminal."""
  print("\033[H\033[2J", end="", flush=True)
  
def deal_card():
  """Returns a random card from the deck."""
  cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
  card = random.choice(cards)
  return card


def yourCurrentScore():
    yourScore = 0
    for i in yourCards:
        yourScore += i
    return yourScore

def compCurrentScore():
    compScore = 0
    for i in compCards:
        compScore += i
    return compScore

def winnerCheck():
    whoWin = ""
    if compScore == 21:
        if yourScore == 21:
            whoWin = "user"
        else: 
            whoWin = "comp"
    elif yourScore == 21 and len(yourCards) == 2 :
        whoWin = "user"
    
    return whoWin

def checkAce():
    if yourScore > 21:
        if yourCards.count(11) == 1:
            ace = True
        else:
            whoWin = "comp"
        if ace == True:
            eleven = yourCards.index(11)
            yourCards[eleven] = 1



    

wanna = input("Do you want to play a game of Blackjack? Type 'y' or 'n': ").lower()


yourCards = randomCards(2)
compCards = randomCards(2)

print(yourCards, compCards)

yourScore = yourCurrentScore()
compScore = compCurrentScore()


print(yourScore, compScore)
won = winnerCheck()
