const triangleStars=function(number,spaces)
{
    const a=2*number-1;
    const b=spaces;
    if(number===0){	return '';}
    const drawSpaces=function(numberOfSpaces)
    {
        if(numberOfSpaces===0){return '';}
        return " " + drawSpaces(numberOfSpaces-1);
    }
    const drawStars=function(numberOfStars)
    {
        if (numberOfStars<=0) {return '';}
        return "*" + drawStars(numberOfStars-1);
    }
    console.log(drawSpaces(b)+drawStars(a));
    triangleStars(number-1,spaces+1);
}
console.log("                        Assignment 2");
triangleStars(4,0);

const pow=function(myNumber,n)
{
	if(n===0){return '1';};
	return myNumber*pow(myNumber,n-1);
	;
}
console.log("                        Assignment 3");
console.log(pow(4,7));

const reverseWord=function(word)
{
    const length=word.length ;
    const print=function(word1,index)
    {
        if(index<0){return ' ';}

        return word1[index]+print(word1,index-1);
    }
    console.log(print(word,length -1));
    
}
console.log("                        Assignment 4");
reverseWord("Antananarivu");

const checkboard=function(number)
{
    debugger;
    
    const oddRaw=function(number)
    {
        if (number<0) {return '';};
        return "*" + " "+ oddRaw(number-1);
    }
    const evenRaw=function(number)
    {
        if (number<0) {return '';};
        return  " " + "*"+evenRaw(number-1);
    }
    const returningF=function(number,times)
    {
        if(times===0)
            {
                if(number%2===1)
                    return oddRaw(number);
                else return '';
            }
        else return oddRaw(number)+"\n"+evenRaw(number)+"\n"+returningF(number,times-1);
    }
    if(number%2===0){const k=number/2;return returningF(number,k);}
    else {const m=(number-1)/2;return returningF(number,m);}
    
    

}
console.log("                        Assignment 5");
console.log(checkboard(7));