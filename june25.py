# str=input("enter a str: ")
# for i in str:
#     ele=ord(i)-32
#     print(chr(ele))


# def Convert(str):
#     nstr=""
#     for i in str:
#         if i>="a" and i<="z":
#             element=ord(i)-32
#             nstr=nstr+chr(element)
#         else:
#             nstr=nstr+i
#     return nstr
# str=input("enter a str")
# res=Convert(str)
# print(res)


# def Convert(str):
#     newstr=""
#     for i in str:
#         if i>="a" and i<="z":
#             ele=ord(i)-32
#             newstr=newstr+chr(ele)
#         else:
#             newstr=newstr+i
#     return newstr
# str=input("enter a str : ")
# result=Convert(str)
# print(result)


# ---------------String Reversal (decriment)---------------

# def Reversal(str):
#     newstr=""
#     for i in range(len(str)-1,-1,-1):
#         newstr=newstr+str[i]
#     return newstr
# str=input('enter a string')
# res=Reversal(str)
# print(res)

# ---------------String Reversal (increment loop)---------------

# def NewR(strN):
#     newSTRR=""
#     for i in range(0,len(strN)):
#         newSTRR=strN[i]+newSTRR
#     return newSTRR
# strN=input("enter a nuw str")
# resul=NewR(strN)
# print(resul)


def Reversal_loop(nstr, i, s1):
    if i == len(s1):
        return nstr
    nstr = s1[i] + nstr
    return Reversal_loop(nstr, i + 1, s1)


s1 = input("enter a new string : ")
result = Reversal_loop("", 0, s1)
print(result)
