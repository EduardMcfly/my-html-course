// @ts-check
/**
 * @typedef {{
 *  name: string,
 *  lastName: string,
 *  email: string,
 *  edad: Date
 * }} PersonProps
 */

class Person {
  get fullName() {
    const { name, lastName } = this;
    return `${name} ${lastName}`;
  }

  /**
   * @param {string} value
   * @example "Natalia bello"
   */
  set fullName(value) {
    const [name, lastName] = value.split(' ');
    this.name = name;
    this.lastName = lastName;
  }

  /**
   * @param {PersonProps} props
   */
  constructor(props) {
    const { name, lastName, email, edad } = props;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.edad = edad;
  }
}
const natalia = new Person({
  name: 'Natalia',
  email: 'natalia@gmail.com',
  lastName: 'Antonio',
  edad: new Date('1990-10-19'),
});
natalia.fullName = 'Angie Bello';
console.log(natalia.lastName);

exports.Person = Person;
