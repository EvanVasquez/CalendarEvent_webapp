//Evan Vasquez

import java.io.*;
import java.util.*;


public class Q2 {
    public static void main(String[] args) {
        String decode = "2[b3[a]]";
        decodeString(decode);
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
                while(count > 0){
                    out += temp;
                    count--;
                }
                temp = "";
            }
            else{
                out += h.charAt(i);
                temp += h.charAt(i);
            }

        }
        System.out.println(out);
    }


}
