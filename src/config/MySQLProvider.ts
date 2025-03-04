export default class MySQLProvider {
    private static instance: MySQLProvider;
    private static HOST: string;
    private static USER: string;
    private static PASSWORD: string;
    private static DATABASE: string;
    private static PORT: string;
  
    private constructor() {
      MySQLProvider.HOST = process.env['MYSQL_HOST'] ?? 'localhost';
      MySQLProvider.USER = process.env['MYSQL_USER'] ?? 'root';
      MySQLProvider.PASSWORD = process.env['MYSQL_PASSWORD'] ?? 'Davidpuerto2101';
      MySQLProvider.DATABASE = process.env['MYSQL_DATABASE'] ?? 'wayra';
      MySQLProvider.PORT = process.env['MYSQL_PORT'] ?? '3306';
    }
  
    public static getInstance(): MySQLProvider {
      if (!MySQLProvider.instance) {
        MySQLProvider.instance = new MySQLProvider();
      }
      return MySQLProvider.instance;
    }
  
    public static getHost(): string {
      MySQLProvider.getInstance();
      return MySQLProvider.HOST;
    }
  
    public static getUser(): string {
      MySQLProvider.getInstance();
      return MySQLProvider.USER;
    }
  
    public static getPassword(): string {
      MySQLProvider.getInstance();
      return MySQLProvider.PASSWORD;
    }
  
    public static getDatabase(): string {
      MySQLProvider.getInstance();
      return MySQLProvider.DATABASE;
    }
  
    public static getPort(): string {
      MySQLProvider.getInstance();
      return MySQLProvider.PORT;
    }
  }
  