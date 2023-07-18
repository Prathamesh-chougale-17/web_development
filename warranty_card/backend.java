import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class backend {
    private static final String DB_URL = "jdbc:oracle:thin:@localhost:1521:xe";
    private static final String DB_USERNAME = "system";
    private static final String DB_PASSWORD = "mysqlpass";

    public void saveWarrantyCard(WarrantyCard warrantyCard) {
        try (Connection connection = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD)) {
            String sqlQuery = "INSERT INTO warranty_cards (product_name, warranty_period, description) VALUES (?, ?, ?)";
            PreparedStatement statement = connection.prepareStatement(sqlQuery);
            statement.setString(1, warrantyCard.getProductName());
            statement.setString(2, warrantyCard.getWarrantyPeriod());
            statement.setString(3, warrantyCard.getDescription());
            statement.executeUpdate();
            System.out.println("Warranty Card saved successfully!");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public List<WarrantyCard> getAllWarrantyCards() {
        List<WarrantyCard> warrantyCards = new ArrayList<>();
        try (Connection connection = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD)) {
            String sqlQuery = "SELECT * FROM warranty_cards";
            PreparedStatement statement = connection.prepareStatement(sqlQuery);
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                // int id = resultSet.getInt("id");
                String productName = resultSet.getString("product_name");
                String warrantyPeriod = resultSet.getString("warranty_period");
                String description = resultSet.getString("description");
                WarrantyCard warrantyCard = new WarrantyCard(productName, warrantyPeriod, description);
                warrantyCards.add(warrantyCard);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return warrantyCards;
    }
}
