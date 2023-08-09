const persions = [`ali`, `vali`]
// age=0;
// ID=0;
// ID=here;
// fach= here;
function addpersions() {
    const name = prompt(`نام را وارد کنید`)

    if ((typeof (name)) === "string") {
        const age = prompt(`سن خودتان را به صورت عدد چهار رقمی وارد کنید`)
        if ((age.length) <= 4 && (age !== isNaN) && (age[0] == 1) && (age[1] == 3)) {
            const fach = prompt("رشته تحصیلی خودتان را وارد کنید")
            if (typeof (fach) === "string") {
                const ID = prompt(`ID را وارد کنید`)
                if (ID !== isNaN) {
                    persions.push(name)
                    console.log(persions)

                }


            }

        } else { console.log("nooooooooooooo") }
    }

}
console.log(addpersions());

/* Removing Persions */

function removepersions() {
    const name = prompt(`نام را وارد کنید`)

    if ((typeof (name)) === "string") {
        const age = prompt(`سن خودتان را به صورت عدد چهار رقمی وارد کنید`)
        if ((age.length) <= 4 && (age !== isNaN) && (age[0] == 1) && (age[1] == 3)) {
            const fach = prompt("رشته تحصیلی خودتان را وارد کنید")
            if (typeof (fach) === "string") {
                const ID = prompt(`ID را وارد کنید`)
                if (ID !== isNaN) {
                    persions.pop(name)
                    console.log(persions)

                }


            }

        } else { console.log("Error : Enter in renge dsggdfg") }
    }

}
console.log(removepersions());

