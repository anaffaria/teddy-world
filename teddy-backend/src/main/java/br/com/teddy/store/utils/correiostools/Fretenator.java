package br.com.teddy.store.utils.correiostools;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.util.Locale;

public class Fretenator {
    private static final String CORREIOS_URL = "http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx";

    private String codEmpresa = "";
    private String senha = "";
    private String codServico = "";
    private String cepOrigem = "";
    private String cepDestino = "";
    private String peso = "";
    private Integer codFormato = 0;
    private Double comprimento = 0.0;
    private Double altura = 0.0;
    private Double largura = 0.0;
    private Double diametro = 0.0;
    private String maoPropria = "";
    private Double valorDeclarado = 0.0;
    private String avisoRecebimento = "N";

    public Fretenator codEmpresa(String codEmpresa) {
        this.codEmpresa = codEmpresa;
        return this;
    }

    public Fretenator senha(String senha) {
        this.senha = senha;
        return this;
    }

    public Fretenator codServico(String codServico) {
        this.codServico = codServico;
        return this;

    }

    public Fretenator cepOrigem(String cepOrigem) {
        this.cepOrigem = cepOrigem;
        return this;

    }

    public Fretenator cepDestino(String cepDestino) {
        this.cepDestino = cepDestino;
        return this;

    }

    public Fretenator peso(String peso) {
        this.peso = peso;
        return this;
    }

    public Fretenator codFormato(Integer codFormato) {
        this.codFormato = codFormato;
        return this;
    }

    public Fretenator comprimento(Double comprimento) {
        this.comprimento = comprimento;
        return this;
    }

    public Fretenator altura(Double altura) {
        this.altura = altura;
        return this;
    }

    public Fretenator largura(Double largura) {
        this.largura = largura;
        return this;
    }

    public Fretenator diametro(Double diametro) {
        this.diametro = diametro;
        return this;
    }

    public Fretenator maoPropria(String maoPropria) {
        this.maoPropria = maoPropria;
        return this;
    }

    public Fretenator valorDeclarado(Double valorDeclarado) {
        this.valorDeclarado = valorDeclarado;
        return this;
    }

    public Fretenator avisoRecebimento(String avisoRecebimento) {
        this.avisoRecebimento = avisoRecebimento;
        return this;
    }

    private String toQueryString() {
        StringBuilder str = new StringBuilder();

        str.append("?StrRetorno=XML").append("&nIndicaCalculo=3");

        str.append("&nCdEmpresa=").append(codEmpresa);
        str.append("&sDsSenha=").append(senha);
        str.append("&nCdServico=").append(codServico);
        str.append("&sCepOrigem=").append(cepOrigem);
        str.append("&sCepDestino=").append(cepDestino);
        str.append("&nVlPeso=").append(peso);
        str.append("&nCdFormato=").append(codFormato);
        str.append("&nVlComprimento=").append(comprimento);
        str.append("&nVlAltura=").append(altura);
        str.append("&nVlLargura=").append(largura);
        str.append("&nVlDiametro=").append(diametro);
        str.append("&sCdMaoPropria=").append(maoPropria);
        str.append("&nVlValorDeclarado=").append(valorDeclarado);
        str.append("&sCdAvisoRecebimento=").append(avisoRecebimento);

        return str.toString();
    }

    public FretenatorResult result() {
        FretenatorResult result = new FretenatorResult();

        String xml = makeRequest();
        Document doc = Jsoup.parse(xml);

        Elements services = doc.select("cServico");

        DecimalFormat df = (DecimalFormat) DecimalFormat.getInstance(new Locale("pt", "BR"));
        for (Element element : services) {
            FretenatorResultItem item = new FretenatorResultItem();
            item.setCodigo(Integer.parseInt(element.select("Codigo").text()));
            item.setPrazo(Integer.parseInt(element.select("PrazoEntrega").text()));
            try {
                item.setValor(df.parse(element.select("Valor").text()).doubleValue());
                item.setValorMaoPropria(df.parse(element.select("ValorMaoPropria").text()).doubleValue());
                item.setValorDeclarado(df.parse(element.select("ValorValorDeclarado").text()).doubleValue());
                item.setValorAvisoRecebimento(df.parse(element.select("ValorAvisoRecebimento").text()).doubleValue());
            } catch (ParseException e) {
                throw new RuntimeException(e);
            }

            item.setEntregaDomiciliar(element.select("EntregaDomocialiar").text().equals("S"));
            item.setEntregaDomiciliar(element.select("EntregaSabado").text().equals("S"));
            item.setErro(!element.select("Erro").text().equals("0"));
            item.setMensagemDeErro(element.select("MsgErro").text());
            result.addServico(item);
        }

        return result;
    }

    private String makeRequest() {
        String urlString = CORREIOS_URL + toQueryString();

        try {
            InputStream inputStream = new URL(urlString).openStream();

            BufferedReader br = null;
            StringBuilder sb = new StringBuilder();

            String line;
            try {

                br = new BufferedReader(new InputStreamReader(inputStream));
                while ((line = br.readLine()) != null) {
                    sb.append(line);
                }

            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                if (br != null) {
                    try {
                        br.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }

            return sb.toString();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
