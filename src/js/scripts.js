$(document).ready(function() {

    // DataTable - Tabela de transações e histórico
    $('#example').DataTable({
        language: {
            url: 'https://cdn.datatables.net/plug-ins/1.11.1/i18n/pt_br.json'
        }
    });

    $('#historic-table').DataTable({
        language: {
            url: 'https://cdn.datatables.net/plug-ins/1.11.1/i18n/pt_br.json'
        }
    });


} ); // Fim - document.ready