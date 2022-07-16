class Lox {}

// Runs only is the current module is called
if (require.main === module) {
    // Lox Class Instance
    const lox = new Lox();

    const args: string[] = process.argv;

    console.log(args);

    if (args.length > 1) {
        console.log("Hey there!!!");
    } else if (args.length === 1) {
    }
}
