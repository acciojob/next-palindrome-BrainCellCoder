function nextPalindrome(num) {
  //your JS code here.
	num++; 
    while (!isPalindrome(num)) {
        num++;
    }
    return num;
}
function isPalindrome(num) {
    const str = num.toString();
    return str === str.split('').reverse().join('');
}

const input = prompt("Enter a palindrome number");
alert(nextPalindrome(input))
