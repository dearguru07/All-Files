# -----------------------------Anogram-----------------

# s1=input('entr a str: ')
# s2=input('entr a str: ')
# ascii=[0]*91
# flag=True
# for i in s1:
#     if i>="a" and i<="z":
#         ele=ord(i)-32
#         ascii[ele]+=1
#     elif i>="A" and i<="Z":
#         ascii[ord(i)]+=1
# for i in s2:
#     if i>="a" and i<="z":
#         ele=ord(i)-32
#         ascii[ele]-=1
#     elif i>="A" and i<="z":
#         ascii[ord(i)]-=1
# for i in range(65,91):
#     if ascii[i]!=0:
#         flag=False
#         break
# if flag==True:
#     print("Anagram")
# else:
#     print("not a Anagram")                                
    

# ------------wap to check weather the give string is Panagram or not-----------    

# def Anagram(s1,s2):
#     flag=True
#     ascii=[0]*91
#     for i in s1:
#         if i>="a" and i<="z":
#             ele=ord(i)-32
#             ascii[ele]+=1
#         elif i>="A" and i<="Z":
#             ascii[ord(i)]+=1
#     for i in s2:
#         if i>="a" and i<="z":
#             ele=ord(i)-32
#             ascii[ele]-=1
#         elif i>="A" and i<="Z":
#             ascii[ord(i)]-=1
#     for i in range(65,91):
#         if ascii[i]!=0:
#             flag=False
#             break
#     if flag==True:
#         print("Anagram") 
#     else:
#         print("not a Anagram")
# s1=input('enteraa ')                                       
# s2=input('enteraa ')                                       
# Anagram(s1,s2)



s1=input()
index1=-2
index2=-2
for i in range(len(s1)):
    for j in range(len(s1)):
        if i==0:
            print(s1[j],end=' ')
        elif j==0:
            print(s1[i],end=" ")
        elif j==len(s1)-1:
            print(s1[index1],end=' ')
            index1+=-1
        elif i==len(s1)-1:
            print(s1[index2],end=' ')
            index2+=-1
        else:
            print(' ',end=" ")
    print()                            
        
    

# s1=input("enter a str: ")
# ascii=[0]*91
# flag=True
# for i in s1:
#     if i >="a" and I<="z":
        