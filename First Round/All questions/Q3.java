//Evan Vasquez

import java.io.*;
import java.util.*;

public class Q3{
    public static void main(String[] args) {
        int amount = 4;
        int[] amount_arr = {1,2,3};
        changePossibilities(amount,amount_arr);

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
