const express = require("express");
const path = require("path");
const app = express();
const port = 80;

const form = document.getElementById("warranty-form");
const submitBtn = document.getElementById("submit-btn");
const warrantyCard = document.getElementById("warranty-card");
const warrantyInfo = document.getElementById("warranty-info");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.elements["name"].value;
  const product = form.elements["product"].value;
  const purchaseDate = form.elements["purchase-date"].value;
  const warrantyLength = form.elements["warranty-length"].value;

  // Generate a unique warranty ID
  const warrantyId =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  // Update the warranty card with the user's information
  warrantyInfo.innerHTML = `
		<p>Name: ${name}</p>
		<p>Product: ${product}</p>
		<p>Purchase Date: ${purchaseDate}</p>
		<p>Warranty Length (in months): ${warrantyLength}</p>
		<p>Warranty ID: ${warrantyId}</p>
	`;

  // Show the warranty card
  warrantyCard.style.display = "block";

  // Automatically print the warranty card
  window.print();
});
