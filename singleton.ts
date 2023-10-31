class Database {
    static instance : Database ;
    private database ="postgres";
    private host ="localhost:5432";
    private pass = "admin";
    private username ="ghost";
    private dbname = "ghost";

    static getInstance(){

        if (!this.instance) {
            this.instance = new Database();
          }
          return this.instance;

    }

}

const db = Database.getInstance();

console.log(db);
