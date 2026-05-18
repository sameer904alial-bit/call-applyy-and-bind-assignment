
const account1 = {
  name: "Ali",
  balance: 5000
};

const account2 = {
  name: "Ahmed",
  balance: 8000
};

// show account 
function showAccounts() {

  document.getElementById("user1").innerHTML =
    `Name: ${account1.name} <br>
     Balance: ${account1.balance}`;

  document.getElementById("user2").innerHTML =
    `Name: ${account2.name} <br>
     Balance: ${account2.balance}`;
}

showAccounts();

// deposit fuunction

function deposit(amount){

  this.balance += amount;

  alert(
    `${this.name} deposited ${amount}
Remaining Balance: ${this.balance}`
  );

  showAccounts();
}


// Withdraw Function

function withdraw(amount){

  this.balance -= amount;

  alert(
    `${this.name} withdrew ${amount}
Remaining Balance: ${this.balance}`
  );

  showAccounts();
}

// bind() Example


const aliWithdraw = withdraw.bind(account1);

// Open console and run:
// aliWithdraw(200);