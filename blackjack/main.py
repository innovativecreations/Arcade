import random
from art import logo


won = ""
ace = False

yourCards = []
compCards = []



def randomCards(x):
    card = []
    allCards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
    for i in range(x):
        card.append(random.choice(allCards))
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
