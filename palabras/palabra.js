function letra(s) {
    var n = s.length;
    var ans = 0;
    var i = 0;
    while (i < n) {
        var j = i;
        while (s[j] === s[i] && j < n) {
            j++;
        }
        diff = j - i;

        ans += parseInt(diff / 2);
        i = j;
        
    }    
    // var total = []
    // total.push(ans);
    console.log(ans);
}

var s = 'breaak';
letra(s);