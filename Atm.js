const correctPIN = "2008";
        let balance = 250; // Starting balance
        const pinEl = document.getElementById("pin");
        const actionEl = document.getElementById("action");
        const amountEl = document.getElementById("amount");
        const messageEl = document.getElementById("message");
        function showMessage(text) {
            messageEl.innerText = text;
        }
        document.getElementById("run").addEventListener("click", () => {
            const pin = pinEl.value.trim();
            const action = actionEl.value;
            const amount = Number(amountEl.value);
            // Check PIN
            if (pin !== correctPIN) {
                showMessage(" Wrong PIN, try again!");
                return;
            }
            // Handle actions
            if (action === "balance") {
                showMessage(` Your current balance is: €${balance}`);
            } 
            else if (action === "deposit") {
                if (!amountEl.value || amount <= 0) {
                    showMessage(" Please enter an amount greater than 0 for deposit.");
                } else {
                    balance += amount;
                    showMessage(` Deposit successful! New balance: €${balance}`);
                }
            } 
            else if (action === "withdraw") {
                if (!amountEl.value || amount <= 0) {
                    showMessage(" Please enter an amount greater than 0 for withdrawal.");
                } else if (amount > balance) {
                    showMessage(` Insufficient funds! Your balance is €${balance}.`);
                } else {
                    balance -= amount;
                    showMessage(` Withdrawal successful! New balance: €${balance}`);
                }
            }
        });
        // Reset button
        document.getElementById("reset").addEventListener("click", () => {
            pinEl.value = "";
            amountEl.value = "";
            actionEl.selectedIndex = 0;
            showMessage("Welcome! Enter your PIN and choose an action.");
        });
        