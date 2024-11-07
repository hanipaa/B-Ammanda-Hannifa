function bagi(a, b) {
    try {
        if (a === undefined || b === undefined) {
            throw new Error("input harus 2");
        }
        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error("Input harus berupa angka");
        }

        if (b === 0) {
            throw new Error("Tidak bisa membagi dengan nol");
        }
        return a / b;
    }   catch (error) {
        console.error(error.message);
        return null;
    }
}
console.log(bagi("a"));
console.log(bagi(10, "a"));