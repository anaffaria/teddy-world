package br.com.teddy.store.utils.correiostools;

public class FretenatorResultItem {
    private Integer codigo;
    private Double valor;
    private Integer prazo;
    private Double valorMaoPropria;
    private Double valorDeclarado;
    private Double valorAvisoRecebimento;
    private Boolean entregaDomiciliar;
    private Boolean entregaSabado;
    private Boolean erro;
    private String mensagemDeErro;

    public Integer getCodigo() {
        return codigo;
    }

    public void setCodigo(Integer codigo) {
        this.codigo = codigo;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

    public Integer getPrazo() {
        return prazo;
    }

    public void setPrazo(Integer prazo) {
        this.prazo = prazo;
    }

    public Double getValorMaoPropria() {
        return valorMaoPropria;
    }

    public void setValorMaoPropria(Double valorMaoPropria) {
        this.valorMaoPropria = valorMaoPropria;
    }

    public Double getValorAvisoRecebimento() {
        return valorAvisoRecebimento;
    }

    public void setValorAvisoRecebimento(Double valorAvisoRecebimento) {
        this.valorAvisoRecebimento = valorAvisoRecebimento;
    }

    public Boolean getEntregaDomiciliar() {
        return entregaDomiciliar;
    }

    public void setEntregaDomiciliar(Boolean entregaDomiciliar) {
        this.entregaDomiciliar = entregaDomiciliar;
    }

    public Boolean getEntregaSabado() {
        return entregaSabado;
    }

    public void setEntregaSabado(Boolean entregaSabado) {
        this.entregaSabado = entregaSabado;
    }

    public Boolean getErro() {
        return erro;
    }

    public void setErro(Boolean erro) {
        this.erro = erro;
    }

    public String getMensagemDeErro() {
        return mensagemDeErro;
    }

    public void setMensagemDeErro(String mensagemDeErro) {
        this.mensagemDeErro = mensagemDeErro;
    }

    public Double getValorDeclarado() {
        return valorDeclarado;
    }

    public void setValorDeclarado(Double valorDeclarado) {
        this.valorDeclarado = valorDeclarado;
    }

}
