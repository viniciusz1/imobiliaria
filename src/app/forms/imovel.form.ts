import { FormGroup, FormControl } from "@angular/forms";

export const ImovelForm = new FormGroup({
    id: new FormControl(''),
    corretor: new FormControl(''),
    tipoImovel: new FormControl(''),
    finalidade: new FormControl(''),
    localizacao: new FormControl(''),
    valor: new FormControl(''),
    iptu: new FormControl(''),
    condominio: new FormControl(''),
    taxas: new FormControl(''),
    obervacaoValor: new FormControl(''),
    areaTotal: new FormControl(''),
    medidaAreaTotal: new FormControl(''),
    areaUtil: new FormControl(''),
    medidaAreaUtil: new FormControl(''),
    areaConstruida: new FormControl(''),
    medidaAreaConstruida: new FormControl(''),
    qtdDormitorios: new FormControl(''),
    qtdSuites: new FormControl(''),
    qtdBanheiros: new FormControl(''),
    qtdGaragens: new FormControl(''),
    qtdSalas: new FormControl(''),
    qtdAcomodacoes: new FormControl(''),
    mobiliado: new FormControl(''),
    anoConstrucao: new FormControl(''),
    numAndar: new FormControl(''),
    caracteristicas: new FormControl(''),
    descricao: new FormControl(''),
    observacao: new FormControl(''),
});