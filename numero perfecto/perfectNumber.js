var perfect = [];
const n = 10000;
for (let i = 2; n <= 10000; i++) {
    perfect = (2 ** (i - 1)) * (2 ** i - 1);

    if (perfect <= 10000) {
        console.log("numero perfecto:", perfect);
    } else if (perfect > 10000) {
        break
    }
}