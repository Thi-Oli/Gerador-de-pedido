
function gerarPreview() {
            document.getElementById("prevNome").innerText = document.getElementById("cliente").value || "________";

            document.getElementById("prevPedido").innerText = document.getElementById("pedido").value || "________";

            document.getElementById("prevValor").innerText = document.getElementById("valor").value || "________";

            document.getElementById("prevDesconto").innerText = document.getElementById("desconto").value || "______";

            document.getElementById("prevData").innerText = document.getElementById("data").value || "________";

        }


const btnGenerate = document.querySelector("#generate-pdf");

btnGenerate.addEventListener("click", () => {
    // Conteúdo do PDF
    const preview  = document.querySelector("#preview")

    // Configuração do arquivo final PDF
    const options = {
        margin: [10, 10 , 10, 10],
        filename: "arquivo.pdf",
        html2canvas: {scale: 2},
        jsPDF: {unit: "mm", format: "a4", orientation: "portrait" },

    }

    // Gerar e baixar o PDF
    html2pdf().set(options).from(preview).save();

});