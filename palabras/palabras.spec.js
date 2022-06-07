const words = require("./palabra"); //llamo la funciona a evaluar 

describe("evalua todo en general",()=>{//se evalua de un todo 
    it ("evalua una parte",() => {//evalua sus partes
        expect(words ([
            'nujzmkteckdwvtfqvzutjdilkdromdpuftvuoewhinefqnwziyxjgeqqmsrzrhpsgagpbfgtxsjtmjgfjpiqhplijrmiwvrempsmyrrpbkefygnbzjlkebdhalvwsfozezemmabigywevaridifxqeiwpugczlwlgsuttkgzfkmxqkpycililynjmxvyzfdfnoybsknqjbezupzgrfwccrirbqhcaacfsfuhskngqqspkucvsmrrjujkpogkyewzhhdtocjgragxwmrowavpdmqyzzjmhulnhbvcgwvgbyanlujuuowlqhkglefqzyyrsomybjrxkyjvypsyyxktkhxsrajagxwqsagojrctegbbxphlwdabylbtdssrpfsunythghuigfvoojupbkrpuqurpqxlqkgkqeleyflakivxptxtdkaudwinxjztpwohjzwennftqfowtnncafddcebvsannxsjyxebisdxjowprjkzkaiyrlcrhiuzkdwktxwpuuxdnuwoaytafagkilnkqorzvarfusuafsxjtxncnoenoznbivslggpscpwvvypftkfdothpleopljoeqfkeeprylklmagxppcnvxygbzvcpikelrtpmsdiiahfhjaqmkrjuowqmvdckmjrzdlxbyxqfgpnahhdfdiwyiynuiapslmajpokuvlrbbxbupsantwtikixhlwqfqlaoeyycpvlohjxclmkcvxvjsavwxttmemzmmwbicspznqbwjgzgxbnlgebotbdliavvunfqhktosnohwxsqremrogxnpekqwmvezlwyztfxgezavarbxtgowpivulncyrpgidamfocrqdiezczchomjywqeywlqdamhpvazxwuyexecwwksvrdkhttmqugeutolhsygzpxqyqchsizufcpqszzvfmdbahzuecbvurywfawdesmdseynmlttguvicjsyfzthcexihyingvjtpeokghpvtcaawdddbyrmpmdcfmllavnqjwzbuvrjthwhukptswotjljqwbkzqrgovq',
            'aaddaaaa', 'ab','aab','abb','abab','abaaaba'
        ])).toEqual([39, 4, 0, 1, 1, 0, 1]);//recibo la funcion y la ejecuto.
    })
})
