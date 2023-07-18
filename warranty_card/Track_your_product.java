import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;
import java.util.List;

public class Track_your_product extends JFrame {
    private List<WarrantyCard> warrantyCards;

    private JTextField txtProductName;
    private JTextField txtWarrantyPeriod;
    private JTextArea txtAreaDescription;
    private JTextArea txtAreaOutput;

    public Track_your_product() {
        warrantyCards = new ArrayList<>();

        setTitle("Warranty Card App");
        setSize(400, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        JPanel panel = new JPanel();
        panel.setLayout(new GridLayout(5, 2));

        JLabel lblProductName = new JLabel("Product Name:");
        panel.add(lblProductName);

        txtProductName = new JTextField();
        panel.add(txtProductName);

        JLabel lblWarrantyPeriod = new JLabel("Warranty Period:");
        panel.add(lblWarrantyPeriod);

        txtWarrantyPeriod = new JTextField();
        panel.add(txtWarrantyPeriod);

        JLabel lblDescription = new JLabel("Description:");
        panel.add(lblDescription);

        txtAreaDescription = new JTextArea();
        panel.add(txtAreaDescription);

        JButton btnSave = new JButton("Save");
        btnSave.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                saveWarrantyCard();
            }
        });
        panel.add(btnSave);

        JButton btnDisplay = new JButton("Display");
        btnDisplay.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                displayWarrantyCards();
            }
        });
        panel.add(btnDisplay);

        txtAreaOutput = new JTextArea();
        txtAreaOutput.setEditable(false);
        panel.add(new JScrollPane(txtAreaOutput));

        add(panel);
    }

    private void saveWarrantyCard() {
        String productName = txtProductName.getText();
        String warrantyPeriod = txtWarrantyPeriod.getText();
        String description = txtAreaDescription.getText();

        WarrantyCard warrantyCard = new WarrantyCard(productName, warrantyPeriod, description);
        warrantyCards.add(warrantyCard);

        JOptionPane.showMessageDialog(this, "Warranty Card saved successfully!");
        clearFields();
    }

    private void displayWarrantyCards() {
        txtAreaOutput.setText("");
        for (WarrantyCard warrantyCard : warrantyCards) {
            txtAreaOutput.append(warrantyCard.toString() + "\n");
        }
    }

    private void clearFields() {
        txtProductName.setText("");
        txtWarrantyPeriod.setText("");
        txtAreaDescription.setText("");
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new Track_your_product().setVisible(true);
            }
        });
    }
}

class WarrantyCard {
    private String productName;
    private String warrantyPeriod;
    private String description;

    public WarrantyCard(String productName, String warrantyPeriod, String description) {
        this.productName = productName;
        this.warrantyPeriod = warrantyPeriod;
        this.description = description;
    }

    public String getProductName() {
        return productName;
    }

    public String getWarrantyPeriod() {
        return warrantyPeriod;
    }

    public String getDescription() {
        return description;
    }

    @Override
    public String toString() {
        return "Product Name: " + productName + ", Warranty Period: " + warrantyPeriod + ", Description: "
                + description;
    }
}
