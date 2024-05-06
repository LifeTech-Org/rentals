const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;

app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "test",
});
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: ", err);
    return;
  }
  console.log("Connected to MySQL database");
});
app.get("/getbill", (req, res) => {
  res.send({
    data: [
      {
        Id: "ssss",
        landlordId: "ssss",
        propertyId: "ass",
        subpropertyId: "ssss",
        rentCycle: "sasa",
        rentStartData: "asaasd",
        rentEndDate: "dfdsf",
        collectdBy: "sdsadsd",
        perviousBalance: "sdsad",
        rentAmount: "dsd",
        maintenanceAmount: "asdas",
        totalAmount: "ssaa",
        electricityType: "cc",
        electricCharge: "sss",
        waterBillType: "dsda",
        waterBillCharge: "dsad",
        gasBillType: "dsadsa",
        gasBillCharge: "sadsaf",
        createdAt: "sdafsda",
        updatedAt: "dsadsa",
      },
    ],
  });
});

app.get("/gettenantbyid", (req, res) => {
  const { id } = req.query;
  if (!id) {
    res.sendStatus(400);
  } else {
    connection.query(
      `SELECT * FROM TENANTS WHERE id = '${id}'`,
      (err, data, fields) => {
        res.send({
          data,
        });
      }
    );
  }
});

app.get("/getExpenses", (req, res) => {
  const { propertyId, subPropertyId, landlordId } = req.query;
  if (!propertyId || !subPropertyId || !landlordId) {
    res.sendStatus(400);
  } else {
    connection.query(
      `SELECT * FROM EXPENSES WHERE propertyId = '${propertyId}' AND subPropertyId = '${subPropertyId}' AND landlordId = '${landlordId}'`,
      (err, data, fields) => {
        res.send({
          data,
        });
      }
    );
  }
});

app.delete("/deleteexpense", (req, res) => {
  console.log(req.body);
  const { expenseid } = req.body;
  connection.query(
    `DELETE FROM Expenses WHERE id = '${expenseid}`,
    (err, data, fields) => {
      if (err) {
        res.sendStatus(500);
        return;
      }
      res.send({ msg: "success" });
    }
  );
});

app.post("/addexpense", (req, res) => {
  const {
    landlordId,
    propertyIdsubPropertyId,
    category,
    name,
    amount,
    expensesDate,
    description,
  } = req.body;
  connection.query(
    `INSERT INTO Expenses (landlordId, propertyIdsubPropertyId, category, name, amount, expensesDate, description) VALUES (${
      (landlordId,
      propertyIdsubPropertyId,
      category,
      name,
      amount,
      expensesDate,
      description)
    })`,
    (err, data, fields) => {
      if (err) {
        res.sendStatus(500);
        return;
      }
      res.send({ msg: "success" });
    }
  );
});

app.delete("/deletedocid", (req, res) => {
  res.send({ msg: "success" });
});

app.post("/createDocument", (req, res) => {
  req.send({ msg: "success" });
});

app.post("/addPropertyBill", (req, res) => {
  res.send({ msg: "success" });
});
app.get("/gettransaction", (req, res) => {
  res.send({
    data: [
      {
        id: "sssss",
        productname: "sssss",
        date: "sssss",
        storename: "sssss",
        quantity: "sssss",
        rate: "sssss",
        remark: "sssss",
      },
    ],
  });
});
app.delete("/deletetransactions", (req, res) => {
  res.send({ msg: "success" });
});

// Inventory

app.get("/gettransaction", (req, res) => {
  res.send({
    data: [
      {
        id: "sssss",
        productname: "sssss",
        date: "sssss",
        storename: "sssss",
        quantity: "sssss",
        rate: "sssss",
        remark: "sssss",
      },
    ],
  });
});

app.delete("/", (req, res) => {
  res.send({ msg: "success" });
});

app.get("/filtertransactions", (req, res) => {
  res.send({
    data: [
      {
        id: "sssss",
        productname: "sssss",
        date: "sssss",
        storename: "sssss",
        quantity: "sssss",
        rate: "sssss",
        remark: "sssss",
      },
    ],
  });
});

app.get("/getqutations", (req, res) => {
  res.send({
    data: [
      {
        id: "sssss",
        date: "esssss",
        businessname: "sssss",
        address: "sssss",
        email: "sssss",
        taxid: "sssss",
        clientname: "sssss",
        clientaddress: "sssss",
        salespersonname: "sssss",
        productid: "sssss",
        productname: "sssss",
        quantity: "sssss",
        price: "sssss",
        currecny: "sssss",
        paymentmethod: "sssss",
        qutationvalidity: "sssss",
      },
    ],
  });
});

app.post("/addqutations", (req, res) => {
  res.send({ msg: "success" });
});
app.delete("/deletequtations", (req, res) => {
  res.send({ msg: "success" });
});
app.post("/addbuisness", (req, res) => {
  res.send({ msg: "success" });
});
app.get("/getbuisness", (req, res) => {
  res.send({
    data: [
      {
        id: "sasas",
        businessname: "esssss",
        "address,": "dsdsf",
        email: "esssss",
        website: "esssss",
        "phone,": "dsdsf",
        fax: "esssss",
      },
    ],
  });
});
app.put("/updatebuisness", (req, res) => {
  res.send({ msg: "successs" });
});
app.put("/changepassword", (req, res) => {
  res.send({ msg: "success" });
});
app.delete("/deleteaccount", (req, res) => {
  res.send({ msg: "success" });
});

// Commercial API
app.post("/addcategory", (req, res) => {
  res.send({ msg: "success" });
});
app.get("/getcategory", (req, res) => {
  res.send({
    data: [
      {
        id: "saa",
        categoryname: "lease",
      },
    ],
  });
});
app.post("/addlease", (req, res) => {
  res.send({ msg: "success" });
});
app.post("/addPropertyTenantwithfloortype", (req, res) => {
  res.send({ msg: "success" });
});
app.post("/addcontactdetails", (req, res) => {
  res.send({ msg: "sucesss" });
});
app.get("/getcontactdetails", (req, res) => {
  res.send({
    data: [{ mobilenumber: "dsdsf", email: "aaaa" }],
  });
});
app.get("/getpropertytanent", (req, res) => {
  res.send({
    data: [{ name: "dsdsf", floortype: [{ id: "1", name: "aaaa" }] }],
  });
});
app.get("/getlease", (req, res) => {
  res.send({
    data: [
      {
        spaceuse: "dsdsf",
        availablespacemin: "dsdsf",
        availablespacemax: "lease",
        floortype: [{ id: "1", name: "aaaa" }],
        askingrentmin: "lease",
        askingrentmax: "lease",
        status: "lease",
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
