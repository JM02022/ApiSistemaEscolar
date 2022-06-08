const faker = require("faker");
const boom = require('@hapi/boom');
class NotaServices {
    constructor() {
        this.notas = []
        this.generarDatos()
    }
    generarDatos() {
        const limite = 10;
        for (let i = 0; i < limite; i++) {
            this.notas.push({
              codN: faker.datatype.uuid(),
              nota1: Math.floor(Math.random() * (20 - 1)) + 1,
              nota2: Math.floor(Math.random() * (20 - 1)) + 1,
              nota3: Math.floor(Math.random() * (20 - 1)) + 1,
              promFinal:(this.nota1 + this.nota2 + this.nota3)/3,

            });
        }
    }
    async create(nota) {
        let nuevaNota = {
          codN: faker.datatype.uuid(),
          ...nota
        }
        this.notas.push(nuevaNota)
        return nuevaNota
    }
    async update(id, nota) {
        const posNota = this.notas.findIndex(item => item.codN == id)
        if(posNota === - 1){
            throw boom.notFound("No se encuentra la nota")
        }
        this.notas[posNota] = nota
        return this.notas[posNota]
    }

    async updateParcial(id, notaParcial) {
        const posNota = this.notas.findIndex(item => item.codN == id)
        if(posNota === - 1){
            throw boom.notFound("No se encuentra la nota")
        }
        const nota = this.notas[posNota]
        this.notas[posNota] = {
            ...nota,
            ...notaParcial
        }
        return this.notas[posNota]
    }

    async delete(id) {
        const posNota = this.notas.findIndex(item => item.codN == id)
        if(posNota === - 1){
            throw boom.notFound("No se encuentra la nota")
        }
        this.notas.splice(posNota,1)
        return {
          mensaje: 'Se elimino nota',
          id
        }
    }

    async findAll() {
        return this.notas
    }

    async findBy(id) {
        const nota = this.notas.find(item => item.codN == id)
        if(!nota){
            throw boom.notFound("No se encuentra la nota")
        }
        return nota
    }
}

module.exports = NotaServices
