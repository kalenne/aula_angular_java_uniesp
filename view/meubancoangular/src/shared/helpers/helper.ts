export class Helper{

  maskCpf(cpf: string) {

    cpf = cpf.replace(/\D/g, '') /* o \D pega o que não é numero e substitui por vazio */
            .replace(/(\d{3})(\d)/, '$1.$2') /* \d vai pegar tudo o que é numero*/
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2');

    return cpf;
  }
}
