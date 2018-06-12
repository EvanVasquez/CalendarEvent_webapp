//Evan Vasquez

public class Q1{
    public static void main(String[] args) {
        String s ="good";
        String t ="odg";

        sortByStrings(s,t);
    }

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



}
