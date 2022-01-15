

let st = "aabcb";
let st1 = "abc";
const checkString = (str) => {
    let matches = str.match(/\d+/g);
    let abc = parseInt(str);
    console.log("abc", abc);
    console.log("matches", matches[0], matches[0].length);
    console.log("!!!!", str.length - matches[0].length);

    if ((str.length - matches[0].length) == matches[0]) {
        return true;
    }
    else {
        return false;
    }
}
const checkStringPalindrom = (str) => {
    let newString = str.split("").reverse().join("");
    // for (let i=str.length-1; i>= 0; i--) {
    //     newString = newString.concat(str[i]);
    // }
    console.log("newString", newString);
    return newString === str ? true : false;
}

const checkStringdiff = (a) => {
    console.log("a", a);
    let b = a.split("").reverse();
    console.log("b", b);

    let output = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== a[(a.length - 1) - i]) output++;
    }

    return output === 0 ? "no diff" : output;

}
const changesOrder = (a) => {
    let Array = [];
    a.split("").map((itm) => {
        if (itm === itm.toUpperCase()) {
            console.log("UpperCase", itm);
            Array.push(itm.toLowerCase());
        }
        else if (itm === itm.toLowerCase()) {
            console.log("lowerCase", itm);

            Array.push(itm.toUpperCase());
        }
        else {
            console.log("no alfabet");
        }
        console.log("!!!!!", Array);
    })
    // for(let i =0 ;i<a.length;i++){
    //     console.log("Aa",i)
    //     if(a.charCodeAt(i)>=97)
    //     {
    //         Array[i]=a[i].toUpperCase();
    //         console.log("a[i]",a[i]);
    //     }else{
    //         Array[i]=a[i].toLowerCase();
    //     }
    // }
    return Array.join("");
}

const chackString = (a, b) => {
    // let trueCount = 0;
    // let falseCount = 0;
    // let sre= b.split("");
    // if(a.length==b.length){
    // for (let i = 0; i < a.length; i++) {
    //     if (sre.includes(a[i])) {
    //        let index = sre.indexOf(a[i]);
    //        sre.splice(index,1);
    //         trueCount++;
    //     }
    //     else {
    //         falseCount++;
    //     }
    // }
    // if (falseCount === 0) 
    //     return true;
    //     return false;
    // }
    // return "length not same"
    return a.split("").sort().join("") === b.split("").sort().join("") ? true : false;
}

const patten = () => {
    let n = 5;
    let st = "";
    // for (let i = 0; i < n; i++) {
    //     for (let j = 0; j <n; j++) {
    //         if(i==0 || j==0 || i==n-1 || j==n-1 )
    //         st += " * ";
    //         else{
    //             st += "   ";
    //         }
    //     }
    //     st += "\n"
    // }
    // for (let i = 0; i <n; i++) {

    //     for (let k = 1; k <= n-i; k++) {
    //         st += " ";
    //     }
    //         for (let j = 0; j <= i; j++) {
    //             st += " *";
    //             // else{
    //             //     st += "   ";
    //             // }
    //         }
    //         st += "\n"
    // }
    // for (let i =n; i >= 0; i--) {
    //     for (let k = n;k>i; k--) {
    //         st += " ";
    //     }
    //         for (let j = 0; j <i; j++) {
    //             st += " *";

    //         }
    //         st += "\n"
    // }



    for (let i = 1; i < n; i++) {

        for (let k = n; k > i; k--) {
            st += " ";
        }
        for (let j = 1; j <= i; j++) {
            if (j == 1 || j == i)
                st += " *";
            else
                st += "  ";
        }
        st += "\n"
    }
    for (let i = n; i > 0; i--) {
        for (let k = n; k > i; k--) {
            st += " ";
        }
        for (let j = 1; j <= i; j++) {
            if (j == 1 || j == i)
                st += " *";
            else
                st += "  ";
        }
        st += "\n"
    }
    console.log(st);
}


console.log(patten());
