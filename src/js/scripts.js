$(document).ready(function() {

    // DataTable - Tabela de transações e histórico
    $('#example').DataTable();
    $('#historic-table').DataTable();

    // Funções que irão recuperan o elemento label, acessando o conteúdo dele, e substituindo textos
    $('.dataTables_wrapper .row div .dataTables_length label').contents().filter(function() {

        return this.nodeType == 3

    }).each(function(){

        // Alterando texto
        this.textContent = this.textContent.replace('Show ','');
        this.textContent = this.textContent.replace('entries','resultados por página');
    });

    $('.dataTables_wrapper .row div .dataTables_filter label').contents().filter(function() {

        return this.nodeType == 3

    }).each(function(){

        // Alterando texto
        this.textContent = this.textContent.replace('Search','Pesquisar');
    });

    // Alterar contador de registros
    let replaceCounter = () => $('.dataTables_wrapper .row div .dataTables_info').contents().filter(function() {

        return this.nodeType == 3

    }).each(function(){

        // Alterando texto
        this.textContent = this.textContent.replace('Showing','Exibindo');
        this.textContent = this.textContent.replace('to','até');
        this.textContent = this.textContent.replace('of','de');
        this.textContent = this.textContent.replace('entries','resultados');
        this.textContent = this.textContent.replace('filtered from','Filtrados de');
        this.textContent = this.textContent.replace('total entries','registros');
    });
    replaceCounter();

    // Alterar paginação
    let replacePagination = () => $('.dataTables_wrapper .row div .dataTables_paginate ul li a.page-link').contents().filter(function() {

        return this.nodeType == 3

    }).each(function(){

        // Alterando texto
        this.textContent = this.textContent.replace('Previous','Anterior');
        this.textContent = this.textContent.replace('Next','Próximo');
    });
    replacePagination();

    // Alterar mensagem de retorno vazio
    let replaceEmpty = () => $('table tbody tr td.dataTables_empty').contents().filter(function() {

        return this.nodeType == 3

    }).each(function(){

        // Alterando texto
        this.textContent = this.textContent.replace('No matching records found','Nenhum registro encontrado');
    });
    replaceEmpty();

    window.setInterval(replaceEnglish, 3000);

    function replaceEnglish() {
        replaceCounter();
        replacePagination();
        replaceEmpty();
    } 

} ); // Fim - document.ready