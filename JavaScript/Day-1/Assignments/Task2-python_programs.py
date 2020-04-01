#1. Write a program to perform input/output of all basic types
input_number = int(input("Enter number:"))
print("Number is ", input_number)

input_float = float(input("Enter decimal:"))
print("Decimal is ",input_float)

input_string = input("Enter string:")
print("String is " + input_string)

# input two numbers space separated
num1, num2 = map(int, input("Enter two numbers space separated").split())
print("The two numbers are ", num1, num2)

# input two numbers one below another
number1 = int(input("Enter number1:"))
number2 = int(input("Enter number2:"))
print("The two numbers are ", number1, number2)

#--------------------------------------------------------------------------------------------------
#2.Write a program to enter two numbers and find their sum
num1, num2 = map(int, input("Enter two numbers: ").split())

def find_sum_of_two_numbers(a, b):
  return a+b

result = find_sum_of_two_numbers(num1, num2)
print("The sum is ", result)

#--------------------------------------------------------------------------------------------------
#3.Write a program to enter two numbers and perform all arithmetic operations
num1, num2 = map(int, input("Enter two numbers: ").split())

def perform_arithmetic_operations(a, b):
  print("Addition ", a+b)
  print("Subtraction", a-b)
  print("Multiplication", a*b)
  print("Division ", a/b)
  print("Modulus ", a%b)
  print("Exponentiation", a**b)
  print("Floor division ", a//b)

perform_arithmetic_operations(num1, num2)

#--------------------------------------------------------------------------------------------------
#4.Write a program to enter length and breadth of rectangle and find its perimeter
length, breadth = map(float, input("Enter length & breadth: ").split())

def find_perimeter(a, b):
  return 2*(a+b)

perimeter = find_perimeter(length, breadth)
print("Perimeter of rectangle is ", perimeter)

#--------------------------------------------------------------------------------------------------
#5.Write a program to enter length and breadth of rectangle and find its area
length, breadth = map(float, input("Enter length & breadth: ").split())

def find_area(a, b):
  return a*b

area = find_area(length, breadth)
print("Area of rectangle is ", area)

#--------------------------------------------------------------------------------------------------
#6.Write a program to enter radius of a circle and find its diameter, circumference & area
import math

radius = float(input("Enter radius of circle: "))

def find_diameter_circumference_area(r):
  dia = 2*r
  circum = 2* math.pi*r
  area = math.pi * (r**2)
  return {"diameter": round(dia,2), "circumference": round(circum,2), "area": round(area,2)}

result = find_diameter_circumference_area(radius)
print("Diameter of circle is " + str(result["diameter"]) + " Circumference is "+ str(result["circumference"]) + " Area is "+str(result["area"]))

#--------------------------------------------------------------------------------------------------
#7.Write a program to enter temperature in celsius and convert it to farenheit

temp = float(input("Enter temperature in Celsius: "))

def convert_celsius_to_farenheit(t):
  return (t*1.8)+32

farenheit_temp = convert_celsius_to_farenheit(temp)
print("Temperature in Fareheit is ", farenheit_temp)

#--------------------------------------------------------------------------------------------------
#8.Write a program to enter temperature in farenheit and convert it to celsius

temp = float(input("Enter temperature in Farenheit: "))

def convert_farenheit_to_celsius(t):
  return ((t-32)*(5/9))

celsius_temp = convert_farenheit_to_celsius(temp)
print("Temperature in Celsius is ", celsius_temp)

#--------------------------------------------------------------------------------------------------
#9.Write a program to convert days into years, weeks & days

number_of_days = int(input("Enter number of days: "))

def find_years_weeks_days(days):
  year = int(days / 365) 
  week = int((days % 365) / 7) 
  days = (days % 365) % 7 
      
  print("years = ",year,"\nweeks = ",week,"\ndays = ",days)

find_years_weeks_days(number_of_days)

#--------------------------------------------------------------------------------------------------
#10.Write a program to find the power of any number

number, power = map(int, input("Enter number and power: ").split())

def find_power(n,p):
  return n**p

result = find_power(number, power)
print(number, "rasied to the power ", power, " is ", result)

#--------------------------------------------------------------------------------------------------
#11.Write a program to find the square root of any number
import math

number = int(input("Enter the number: "))

def find_square_root(n):
  return math.sqrt(n)

result = find_square_root(number)
print("Square root of ",number," is ", result)

#--------------------------------------------------------------------------------------------------
#12.Write a program to enter two angles of a triangle and find the third angle

angle1, angle2 = map(float, input("Enter two angles: ").split())

def find_third_angle(a, b):
  return 180-(a+b)

result = find_third_angle(angle1, angle2)
print("Third angle is ", result)

#--------------------------------------------------------------------------------------------------
#13.Write a program to enter the base and height of a triangle and find its area

base, height = map(float, input("Enter base & height: ").split())

def find_area(b, h):
  return (b*h)/2

result = find_area(base, height)
print("Area of triangle is ", result)

#--------------------------------------------------------------------------------------------------
#14.Write a program to find the area of an equilateral triangle

import math

side = float(input("Enter the side: "))

def find_area_of_triangle(a):
  return(round(((1/4) * math.sqrt(3) * (a**2)), 2))

result = find_area_of_triangle(side)
print("Area of equilateral triangle is ", result)

#--------------------------------------------------------------------------------------------------
#15.Write a program to enter marks of five subjects and calculate total, average & percentage

mark1, mark2, mark3, mark4, mark5 = map(float, input("Enter 5 subject marks: ").split())

def perform_analysis(m1, m2, m3, m4, m5):
  total = m1+m2+m3+m4+m5
  avg = total/5
  percentage = (total/500)*100
  return {"total": total, "avg": avg, "percentage": percentage}

result = perform_analysis(mark1, mark2, mark3, mark4, mark5)
print("Total is ", result["total"], " avearage is ", result["avg"], " percentage is ", result["percentage"])

#--------------------------------------------------------------------------------------------------
#16.Write a program to enter P, T & R and calculate simple interest

principal, interest, time = map(float, input().split())

def find_simple_interest(p, t, r):
  print(round((p * t * r) / 100, 2))

find_simple_interest(principal, time, interest)

#--------------------------------------------------------------------------------------------------
#17.Write a program to enter P, T & R and calculate compound interest

principal, interest, time = map(float, input().split())

def find_compound_interest(p, t, r):
  print(p*(pow((1+r/100),t)))

find_compound_interest(principal, time, interest)

