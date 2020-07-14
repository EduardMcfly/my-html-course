// @ts-check
const { Person } = require('./person');

const matriculasVigentes = ['123', '2345', '3432'];

class Student extends Person {
  validacionMatricula() {
    return !!matriculasVigentes.find(
      matriculaVigente => matriculaVigente == this.matricula
    );
  }
  /**
   * @param {import('./person').PersonProps & { matricula: string }} props
   */
  constructor(props) {
    const { matricula, ...propsPerson } = props;
    super(propsPerson);
    this.matricula = matricula;
  }
}

const natalia = new Student({
  name: 'Natalia',
  email: 'natalia@gmail.com',
  lastName: 'Antonio',
  edad: new Date('1990-10-19'),
  matricula: '123',
});
console.log(
  natalia.validacionMatricula()
    ? 'Tu matricula esta vigente'
    : 'Pague, no se cañador'
);
