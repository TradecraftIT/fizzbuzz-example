/*
FIZZBUZZ
Write a program that prints the numbers from 1 to 100.
But for multiples of three print “Fizz” instead of the number
and for the multiples of five print “Buzz”. For numbers which 
are multiples of both three and five print “FizzBuzz”."

*/



//fizzbuzzOutput() prints the output to the html page
function fizzbuzzOutput()
{
 var s =""
  for (var i = 1; i <= 100; i++) {
   if (i % 15 == 0) {
     s = s + "FizzBuzz";
   } else if (i % 3 == 0) {
     s = s + "Fizz";

   } else if (i % 5 == 0) {
     s = s + "Buzz";
   } else {
    s = s + i.toString();
   }
   s = s +"<br\>"
//   alert(s);
  }
 return s;
}


//fizzbuzzAlert() prints the output to an alert box
function fizzbuzzAlert()
{
  var s =""
  for (var i = 1; i <= 100; i++) {
   if (i % 15 == 0) {
      alert("FizzBuzz");
   } else if (i % 3 == 0) {
     alert("Fizz");
   } else if (i % 5 == 0) {
     alert("Buzz");
   } else {
    alert(i);
   }
  }
}



//Below are examples solutions to FIZZBUZZ
// in Java and Ruby

/*
Java
public static void printFizzBuzz() {
 	for (int i=1; i <= 100; i++) {
 		boolean fizz = (i % 3) == 0;
 		boolean buzz = (i % 5) == 0;


 		if (fizz && buzz) {
 			System.out.print("fizzbuzz");
 		} else if (fizz) {
 			System.out.print("fizz");
 		} else if (buzz) {
 			System.out.print("buzz");
 		} else {
 			System.out.print(i);
 		}


 		if (i != 100) {
 			System.out.println();
 		}
 	}
 }

Java
public static void main(String[] args)
	{


		for(int i=1; i<=100; i++)
		{
			String num="";


			if(i%3==0)
			  num+="Fizz";
			if(i%5==0)
			  num+="Buzz";
			if(num.length()==0)
			  num=Integer.toString(i);


			System.out.println(num);
		}
	}

Java Function
public String fizzBuzz(int n){
  String s = "";
  if (n == 0)
    return s;
  if((n % 5) == 0)
    s = "Buzz" + s;
  if((n % 3) == 0)
    s = "Fizz" + s;
  if (s.equals(""))
    s = n + "";   
  return fizzBuzz(n-1) +  s;
}




Ruby
1.upto 100 do |n|
  r = ''
  r << 'Fizz' if n % 3 == 0
  r << 'Buzz' if n % 5 == 0
  r << n.to_s if r.empty?
  puts r
end


Ruby
1.upto(100) do |n|
  print "Fizz" if a = (n % 3).zero?
  print "Buzz" if b = (n % 5).zero?
  print n unless (a || b)
  print "\n"
end


Ruby
1.upto(100) do |n|
  if (n % 15).zero?
    puts "FizzBuzz"
  elsif (n % 5).zero?
    puts "Buzz"
  elsif (n % 3).zero?
    puts "Fizz"
  else
    puts n
  end
end



*/