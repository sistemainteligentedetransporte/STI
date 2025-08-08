// Menu mobile
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Gráficos
const ctx = document.getElementById('punctualityChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Linha 101', 'Linha 205', 'Linha 310'],
        datasets: [{
            label: 'Pontualidade (%)',
            data: [92, 85, 89],
            backgroundColor: 'rgba(46, 125, 50, 0.7)'
        }]
    }
});

// Atualização em tempo real da frota
function updateFleetData() {
    // Lógica de atualização
}
setInterval(updateFleetData, 10000);