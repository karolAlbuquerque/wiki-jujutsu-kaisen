package br.com.karol.wiki.config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public final class ConnectionFactory {
    private static final String DEFAULT_URL = "jdbc:postgresql://localhost:5432/wiki_jujutsu_kaisen";
    private static final String DEFAULT_USER = "postgres";
    private static final String DEFAULT_PASSWORD = "postgres";

    static {
        try {
            Class.forName("org.postgresql.Driver");
        } catch (ClassNotFoundException exception) {
            throw new IllegalStateException("Driver JDBC do PostgreSQL nao encontrado.", exception);
        }
    }

    private ConnectionFactory() {
    }

    public static Connection getConnection() throws SQLException {
        String url = getConfig("DB_URL", DEFAULT_URL);
        String user = getConfig("DB_USER", DEFAULT_USER);
        String password = getConfig("DB_PASSWORD", DEFAULT_PASSWORD);

        return DriverManager.getConnection(url, user, password);
    }

    private static String getConfig(String key, String fallback) {
        String envValue = System.getenv(key);
        if (envValue != null && !envValue.isBlank()) {
            return envValue;
        }

        String systemValue = System.getProperty(key);
        if (systemValue != null && !systemValue.isBlank()) {
            return systemValue;
        }

        return fallback;
    }
}
