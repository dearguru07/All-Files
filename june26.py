
def Reversal_loop(nstr, i, s1):
    if i == len(s1):
        return nstr
    nstr = s1[i] + nstr
    return Reversal_loop(nstr, i + 1, s1)
s1 = input("enter a new string : ")
result = Reversal_loop("", 0, s1)
print(result)


# def CountWords(s):
#     return len(s)
# str=input()
# res=CountWords(str)
# print(res)    


# def Conver(n):
#     count=0
#     for i in n:
#         count+=1
#     return count
# n=input()
# res=Conver(n)
# print(n)
   
   
# def count(n):
#     count = 0
#     for char in n:
#         count += 1
#     return count

# n =input('enter a str')
# character_count = count(n)
# print(character_count)


# def reversal(newstr):
#     word=""
#     output=""
#     for i in range(0,len(word)):
#         if newstr[i]!=" ":
#             output=newstr[i]+output
#         else:
#             newstr=newstr+output+" "
#             output=""
#     return newstr
        
# newstr=""
# res=reversal(newstr) 
# print(res) 



# def reversal(sen):
#     sen+=" "
#     newstr=""
#     word=""
#     for i in range(len(sen)):
#         if sen[i]!=" ":
#             word+=sen[i]
#         else:
#             newstr=" "+word+newstr
#             word=""
#     return word        
# sen=input("enter a string ")                
# print(reversal(sen))



# sentance=input("enter a sentance: ")
# replaceword=input("enter a word to be replace: ")
# newword=input("enter a new word: ")
# word=""
# newSen=""
# for i in sentance:
#     if i !=" ":
#         word=word+i
#     else:
#         convwrd=ConvortLower(word)
#         if convwrd==replaceword:
#             newSen=newSen+newword+" "
#         else:
#             newSen=newSen+word+" "
# print(newSen)



# word=input()
# index1=-2
# index2=-2
# for i in range(len(word)):
#     for j in range(len(word)):
#         if i==0:
            
# def CountWords(sentance):
#     sentance+=" "
#     count=0
#     words=""
#     for i in range(len(sentance)):
#         if sentance[i]!=" ":
#             words+=sentance[i]
#         else:
#             count+=1
#             words=""
#     return count
# sentance=input("enter a sentance :")
# res=CountWords(sentance)  
# print(res)


