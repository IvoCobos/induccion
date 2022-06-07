//for each word in a list of words, 
// if any two adjecent characters are equal, 
// change one of them. determine the minimum number of substitutions so the final 
// string contains no adjecent equal characters.


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

var s = 'nujzmkteckdwvtfqvzutjdilkdromdpuftvuoewhinefqnwziyxjgeqqmsrzrhpsgagpbfgtxsjtmjgfjpiqhplijrmiwvrempsmyrrpbkefygnbzjlkebdhalvwsfozezemmabigywevaridifxqeiwpugczlwlgsuttkgzfkmxqkpycililynjmxvyzfdfnoybsknqjbezupzgrfwccrirbqhcaacfsfuhskngqqspkucvsmrrjujkpogkyewzhhdtocjgragxwmrowavpdmqyzzjmhulnhbvcgwvgbyanlujuuowlqhkglefqzyyrsomybjrxkyjvypsyyxktkhxsrajagxwqsagojrctegbbxphlwdabylbtdssrpfsunythghuigfvoojupbkrpuqurpqxlqkgkqeleyflakivxptxtdkaudwinxjztpwohjzwennftqfowtnncafddcebvsannxsjyxebisdxjowprjkzkaiyrlcrhiuzkdwktxwpuuxdnuwoaytafagkilnkqorzvarfusuafsxjtxncnoenoznbivslggpscpwvvypftkfdothpleopljoeqfkeeprylklmagxppcnvxygbzvcpikelrtpmsdiiahfhjaqmkrjuowqmvdckmjrzdlxbyxqfgpnahhdfdiwyiynuiapslmajpokuvlrbbxbupsantwtikixhlwqfqlaoeyycpvlohjxclmkcvxvjsavwxttmemzmmwbicspznqbwjgzgxbnlgebotbdliavvunfqhktosnohwxsqremrogxnpekqwmvezlwyztfxgezavarbxtgowpivulncyrpgidamfocrqdiezczchomjywqeywlqdamhpvazxwuyexecwwksvrdkhttmqugeutolhsygzpxqyqchsizufcpqszzvfmdbahzuecbvurywfawdesmdseynmlttguvicjsyfzthcexihyingvjtpeokghpvtcaawdddbyrmpmdcfml';
letra(s);

// pruebas
// -1

// ab
// aab
// abb
// abab
// abaaaba

// -2

// keyhbmeknckfavrpqyyfjxjjmivtsftikovkcdcwefctqrqjryhtlcvstm
// rpqipvntglpsbmoyxpjhkfufrxgnqjvhtizxn
// sddpeibedjk
// dkxqcthvgmzymoohniertqanrbkfdolfwfaalwolqpipngsaquxurvzwjpfejkfyys
// jdzsnpejkyqktrdlljfuozlfsvrhqrwgtojnxllzmbfvoexxxttzcbprwzyztsovcxootxoswbffcokhtosfvn
// hwqfvaiqxdksxvbtcr
// bsdmsblyvzulromgbvteqxqahed
// geptwdurphheydbyxrm
// rplpqbzsnpotqwmcrdyckzfyghzz

// -3

// sofkfrrvoqaakwzksohvmnncpfgblidcsclggmghighzzhrjhmnvdkgxsloi
// mxrghbmoqwoajqcaqzqxinbjtnkywtbxwjmqatmct
// apgythaslgwdjdwvkrzgxbwluhlopfrelci
// qjqswxhvmlwecxrnnvuqgydcduvjxohelcwyawvecoltdwgueqloivvtkadsabdlcnxpnybxjfhnoplllvoxwwopvhord
// jtepxcmubqbitxzzplidjenuoaulbkpktfglkmfvcknxqmeyu
// ftfaqndypcxejvxiosgojdmfccpk
// ubtkhbuzmlqkpbbbwrvstnjvxjbtncbwzorusdnzmkbdjvyhzzvugnchsy
// fhymcsiltwjjiownaszuwbnaeorpimjfwt

// -4

// zqzcdhefjzuqfkigwydqalimitpkwduxsauxslqanstag
// vmggdujscxesizsjycskimjtqfcoctyrgxjdpyeowavlriojizsrggnywkijdodicyhfreurltzaouzksugugn
// ouojrgpgkuixdbuddltrvfpjzzwafmqdmmku
// zqbfnhbabvfavoztvohurpgicqtczwnxvlxxtvuglaqltafawjcwgagjinrdmobhnauebvgdufxegtbgaqysfwdqyhsgloahwnb
// lasoembsbtjgwacvuvygavlwfuedjwwhyhyjwxkfbtofjogogkjojyxncfmekmowcjmk
// rdfrxmmwwgyfwrboqfnwpngroegtkfoyypektjj
// gpslaqjtcxixtsucjvjolxjbndilpdtzxdndlow
// xwrhmpcsqmednmqzthrtjlnggvfpmdqkfadhe

// -5

//nujzmkteckdwvtfqvzutjdilkdromdpuftvuoewhinefqnwziyxjgeqqmsrzrhpsgagpbfgtxsjtmjgfjpiqhplijrmiwvrempsmyrrpbkefygnbzjlkebdhalvwsfozezemmabigywevaridifxqeiwpugczlwlgsuttkgzfkmxqkpycililynjmxvyzfdfnoybsknqjbezupzgrfwccrirbqhcaacfsfuhskngqqspkucvsmrrjujkpogkyewzhhdtocjgragxwmrowavpdmqyzzjmhulnhbvcgwvgbyanlujuuowlqhkglefqzyyrsomybjrxkyjvypsyyxktkhxsrajagxwqsagojrctegbbxphlwdabylbtdssrpfsunythghuigfvoojupbkrpuqurpqxlqkgkqeleyflakivxptxtdkaudwinxjztpwohjzwennftqfowtnncafddcebvsannxsjyxebisdxjowprjkzkaiyrlcrhiuzkdwktxwpuuxdnuwoaytafagkilnkqorzvarfusuafsxjtxncnoenoznbivslggpscpwvvypftkfdothpleopljoeqfkeeprylklmagxppcnvxygbzvcpikelrtpmsdiiahfhjaqmkrjuowqmvdckmjrzdlxbyxqfgpnahhdfdiwyiynuiapslmajpokuvlrbbxbupsantwtikixhlwqfqlaoeyycpvlohjxclmkcvxvjsavwxttmemzmmwbicspznqbwjgzgxbnlgebotbdliavvunfqhktosnohwxsqremrogxnpekqwmvezlwyztfxgezavarbxtgowpivulncyrpgidamfocrqdiezczchomjywqeywlqdamhpvazxwuyexecwwksvrdkhttmqugeutolhsygzpxqyqchsizufcpqszzvfmdbahzuecbvurywfawdesmdseynmlttguvicjsyfzthcexihyingvjtpeokghpvtcaawdddbyrmpmdcfml