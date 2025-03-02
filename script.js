document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(button.dataset.tab).classList.add('active');
        });
    });

    document.querySelector('.tab-button[data-tab="headers"]').click();

    document.getElementById('send-request').addEventListener('click', function() {
        const url = document.getElementById('url').value;

        const headers = getTableData(document.querySelector('#headers table'));
        const params = getTableData(document.querySelector('#params table'));

        // You would handle the API request here

        // Display the response
        const responseView = document.querySelector('.response-view');
        responseView.textContent = 'Response will be displayed here...';
    });

    function getTableData(table) {
        const data = {};
        table.querySelectorAll('tbody tr').forEach(row => {
            const key = row.children[0].children[0].value;
            const value = row.children[1].children[0].value;
            if (key) {
                data[key] = value;
            }
        });
        return data;
    }

    document.querySelectorAll('.add-row').forEach(button => {
        button.addEventListener('click', function() {
            const tbody = button.previousElementSibling.querySelector('tbody');
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td><input type="text" placeholder="Key"></td>
                <td><input type="text" placeholder="Value"></td>
            `;
            tbody.appendChild(newRow);
        });
    });
});
