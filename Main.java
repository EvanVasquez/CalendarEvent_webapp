/*Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t.
You can assume t will not have repetitive characters.
For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg",
the output should be sortByString(s, t) = "oodg".*/
import java.io.*;
import java.util.*;

public class Main{
    public static void main(String[] args) {
        String s ="good";
        String t ="odg";
        String decode = "2[b3[a]]";
        sortByStrings(s,t);
        decodeString(decode);

        int amount = 4;
        int[] amount_arr = {1,2,3};
        changePossibilities(amount,amount_arr);

    }

    // Question 1
    public static void sortByStrings(String s,String t){
        String out = "";
        for (int i = 0; i < t.length(); i++){
            for (int p = 0; p < s.length(); p++){
                if(t.charAt(i) == s.charAt(p)){
                    out += s.charAt(p);
                }
            }
        }
        System.out.println(out);
    }

    //Question 2
    public static void decodeString(String h){
        ArrayList<Integer> A = new ArrayList<Integer>();
        ArrayList<Character> stack = new ArrayList<Character>();
        int count = 0;
        String out = "";
        String number = "";
        String temp = "";

        for (int i = 0; i < h.length(); i++) {

            if(i == h.length()-1){
                count = A.get(A.size() - 1);
                count --;
                String newT = out;
                A.remove(A.size() - 1);

                while(count > 0){
                    out += newT;
                    count--;
                }
                break;
            }
            else if(Character.isDigit(h.charAt(i))){
                number += h.charAt(i);
            }
            else if( '[' == h.charAt(i)){
                int result = Integer.parseInt(number);
                A.add(result);
                stack.add(h.charAt(i));
                number = "";
                temp = "";
            }
            //&& !stack.isEmpty()
            else if( ']' == h.charAt(i)){
                stack.remove(stack.size()-1);
                count = A.get(A.size() - 1);
                count--;
                A.remove(A.size() - 1);
                System.out.println(count);
                while(count > 0){
                    out += temp;
                    count--;
                }
                temp = "";
            }
            else{
                out += h.charAt(i);
                temp += h.charAt(i);
                System.out.println(temp);
            }

        }
        System.out.println(out);
    }

    public static void changePossibilities(int amount, int[] amount_arr){
        int[] A = new int[amount + 1];

        for (int i = 0; i < amount_arr.length ; i++ ){
            for (int p = 0; p < A.length ; p++){
                if(p == 0){
                    A[p] = 1;
                }
                if(p >= amount_arr[i]){
                    A[p] += A[p - amount_arr[i]];
                }

            }
        }
        System.out.println(A[amount]);
     }
}
